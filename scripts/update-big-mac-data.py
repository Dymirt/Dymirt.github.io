#!/usr/bin/env python3
"""Download official source observations and compute annual FX means offline.
No spot rate from the burger survey is used as an annual exchange rate.
"""
import argparse, collections, csv, datetime, hashlib, io, itertools, json, math, pathlib, subprocess
ROOT = pathlib.Path(__file__).resolve().parents[1]
CACHE = ROOT / '.cache/big-mac'
OUT = ROOT / 'big-mac/data'
parser = argparse.ArgumentParser()
parser.add_argument('--as-of', default='2026-11-08')
parser.add_argument('--cached', action='store_true')
args = parser.parse_args()
AS_OF = args.as_of
YEAR = int(AS_OF[:4])
CACHE.mkdir(parents=True, exist_ok=True); OUT.mkdir(parents=True, exist_ok=True)
URLS = {
 'historical.csv':'https://raw.githubusercontent.com/TheEconomist/big-mac-data/master/source-data/big-mac-historical-source-data.csv',
 'prices-v2.csv':'https://raw.githubusercontent.com/TheEconomist/big-mac-data/master/source-data/big-mac-source-data-v2.csv',
 'currency-catalog.json':'https://api.frankfurter.dev/v2/currencies?scope=all',
 'worldbank.json':f'https://api.worldbank.org/v2/country/all/indicator/PA.NUS.FCRF?date=1986:{YEAR}&format=json&per_page=30000'
}
def download(name,url):
 path=CACHE/name
 if not(args.cached and path.exists()):
  print('Downloading',name,flush=True)
  temporary=path.with_suffix(path.suffix+'.download')
  subprocess.run(['curl','--fail','--silent','--show-error','--retry','2','--max-time','300',url,'-o',str(temporary)],check=True)
  temporary.replace(path)
 return path
for name,url in URLS.items(): download(name,url)
raw=[]
for name in ['historical.csv','prices-v2.csv']:
 for item in csv.DictReader((CACHE/name).open()):
  date=item['date'][:10]
  if date<=AS_OF: raw.append({**item,'date':date,'source':'historical' if name=='historical.csv' else 'economist-v2'})
known={x['iso_code']:x for x in json.loads((CACHE/'currency-catalog.json').read_text())}
codes=sorted({r['currency_code'] for r in raw} & known.keys())
URLS['daily-fx.csv']=f'https://api.frankfurter.dev/v2/rates.csv?from=1986-01-01&to={AS_OF}&base=USD&quotes='+','.join(codes)
download('daily-fx.csv',URLS['daily-fx.csv'])
# Monetary units used by the UI. Prices and FX are transformed together.
def normalize(currency,value,date,country=None):
 if currency=='PLN' and date<'1995-01-01': return currency,value/10000
 if currency=='TRY' and country=='TUR' and date<'2005-01-01': return currency,value/1000000
 if currency=='RUR': return 'RUB',value/1000
 if currency=='VES' and date<'2021-10-01': return currency,value/1000000
 if currency=='VEF' and date<'2008-01-01': return 'VEB',value
 return currency,value
iso2={'USA':'US','AUS':'AU','BEL':'BE','BRA':'BR','GBR':'GB','CAN':'CA','FRA':'FR','HKG':'HK','IRL':'IE','JPN':'JP','SGP':'SG','SWE':'SE','DEU':'DE','DNK':'DK','NLD':'NL','ITA':'IT','ESP':'ES','KOR':'KR','HUN':'HU','ARG':'AR','CHN':'CN','RUS':'RU','VEN':'VE','MYS':'MY','MEX':'MX','CHE':'CH','THA':'TH','AUT':'AT','CHL':'CL','CZE':'CZ','GRC':'GR','POL':'PL','PRT':'PT','TWN':'TW','IDN':'ID','ISR':'IL','NZL':'NZ','ZAF':'ZA','PHL':'PH','NOR':'NO','PER':'PE','TUR':'TR','EGY':'EG','COL':'CO','CRI':'CR','LKA':'LK','PAK':'PK','SAU':'SA','UKR':'UA','URY':'UY','ARE':'AE','IND':'IN','VNM':'VN','AZE':'AZ','BHR':'BH','GTM':'GT','HND':'HN','JOR':'JO','KWT':'KW','LBN':'LB','MDA':'MD','NIC':'NI','OMN':'OM','QAT':'QA','ROU':'RO','EST':'EE','FIN':'FI','LTU':'LT','HRV':'HR','LVA':'LV','SVK':'SK','SVN':'SI','BGR':'BG'}
prices=collections.defaultdict(dict); history=[]; countries={}; excluded=[]
for r in sorted(raw,key=lambda r:r['date']):
 country=r['iso_a3']
 if not math.isfinite(float(r['local_price'])) or float(r['local_price'])<=0: continue
 # The euro-area aggregate and India's substitute product are not country Big Mac observations.
 if country in ['EUZ','IND']:
  excluded.append(country);continue
 currency,price=normalize(r['currency_code'],float(r['local_price']),r['date'],country)
 entry={'country':country,'year':int(r['date'][:4]),'price':price,'currency':currency,'date':r['date'],'source':r['source']}
 if price!=float(r['local_price']) or currency!=r['currency_code']:
  entry['originalPrice']=float(r['local_price']); entry['originalCurrency']=r['currency_code']
 history.append(entry);prices[country][str(entry['year'])]={k:v for k,v in entry.items() if k not in ['country','year']}
 countries[country]={'name':r['name'],'iso2':iso2.get(country),'historical':country in ['SUN','YUG','RUS']}
opening={'price':2.5,'currency':'PLN','date':'1992-06-17','source':'opening','originalPrice':25000,'originalCurrency':'PLZ'}
prices['POL']['1992']=opening
history.append({'country':'POL','year':1992,**opening})
# Average daily cross-rates, computed on dates where both currency quotes exist.
by_year=collections.defaultdict(lambda:collections.defaultdict(dict))
for r in csv.DictReader((CACHE/'daily-fx.csv').open()):
 date=r['date'];year=int(date[:4])
 if not('1986-01-01'<=date<=AS_OF):continue
 currency,value=normalize(r['quote'],float(r['rate']),date)
 # Frankfurter PLN and TRY histories are already in post-redenomination units.
 if r['quote']=='PLN' and date<'1995-01-01':continue
 if value>0:by_year[year][currency][date]=value
fx={}
wb={ (r['countryiso3code'],int(r['date'])):r['value'] for r in json.loads((CACHE/'worldbank.json').read_text())[1] if r['value'] and r['countryiso3code'] }
# Stable/normalized units only: never use a retrospective BRL series for historical BRC/BRE.
wb_countries={r['currency_code']:r['iso_a3'] for r in raw if r['currency_code'] not in ['EUR','BRC','BRE','BRR','RUR','SUR','YUD','YUN','VEB','VEF','VES']}
for year in range(1986,YEAR+1):
 curves={code:curve for code,curve in by_year[year].items() if len(curve)>=20};dates=set().union(*(set(v) for v in curves.values())) if curves else set()
 curves['USD']={date:1 for date in dates}
 usd={};coverage={};pairs={}
 for code,curve in curves.items():
  d=sorted(curve)
  if not d:continue
  usd[code]=sum(curve.values())/len(curve)
  coverage[code]={'from':d[0],'to':d[-1],'days':len(d),'source':'frankfurter'}
 for code,iso in wb_countries.items():
  value=wb.get((iso,year))
  used_unit=any(row['currency']==code for rows in prices.values() for y,row in rows.items() if int(y)==year)
  if not used_unit: continue
  if code in usd or not value or (code in ['ATS','BEF','DEM','ESP','FRF','IEP','ITL','NLG','PTE'] and year>=1999) or (code=='GRD' and year>=2001):continue
  usd[code]=value;coverage[code]={'from':f'{year}-01-01','to':f'{year}-12-31','days':None,'source':'worldbank'}
 for base,left in curves.items():
  for quote,right in curves.items():
   if base==quote:continue
   common=left.keys() & right.keys()
   # Sparse fragments do not masquerade as an annual average.
   if len(common)<20:continue
   ordered=sorted(common)
   mean=sum(right[d]/left[d] for d in common)/len(common)
   partial=year==YEAR or ordered[0]>f'{year}-01-15' or ordered[-1]<f'{year}-12-15'
   pairs[f'{base}/{quote}']=[float(f'{mean:.12g}'),len(common),ordered[0],ordered[-1],partial]
 fx[str(year)]={'usd':{k:float(f'{v:.12g}') for k,v in usd.items()},'coverage':coverage,'pairs':pairs}
 print('Averaged',year,len(pairs),'pairs',flush=True)
for code,country in countries.items():
 years=sorted(map(int,prices[code]));country.update(firstYear=years[0],lastYear=years[-1],years=len(years),latestCurrency=prices[code][str(years[-1])]['currency'])
derived_fx=[]
for year,data in fx.items():
 for base,base_value in data['usd'].items():
  for quote,quote_value in data['usd'].items():
   if base==quote or f'{base}/{quote}' in data['pairs']: continue
   if data['coverage'][base]['source']!='worldbank' and data['coverage'][quote]['source']!='worldbank': continue
   derived_fx.append({'year':year,'base':base,'quote':quote,'rate':quote_value/base_value,'days':None,'from':max(data['coverage'][base]['from'],data['coverage'][quote]['from']),'to':min(data['coverage'][base]['to'],data['coverage'][quote]['to']),'partial':int(year)==YEAR or max(data['coverage'][base]['from'],data['coverage'][quote]['from'])>f'{year}-01-15' or min(data['coverage'][base]['to'],data['coverage'][quote]['to'])<f'{year}-12-15','method':'annual-usd-cross'})
missing_usd=[{'country':country,'year':int(year),'currency':row['currency']} for country,records in prices.items() for year,row in records.items() if row['currency']!='USD' and f"USD/{row['currency']}" not in fx[year]['pairs'] and row['currency'] not in fx[year]['usd']]
metadata={'asOf':AS_OF,'firstYear':1986,'lastYear':YEAR,'countries':len(countries),'priceObservations':len(history),'annualPrices':sum(map(len,prices.values())),'annualFxPairs':sum(len(x['pairs']) for x in fx.values()),'derivedAnnualFxPairs':len(derived_fx),'missingAnnualUsdRates':missing_usd,'sources':URLS,'excluded':['EUZ: aggregate, not a country price','IND: Maharaja Mac, not Big Mac'],'normalizations':['Poland before 1995: divide price by 10000; annual WB PLN already normalized','Turkey before 2005: divide burger price by 1000000; Frankfurter TRY already normalized','RUR converted to RUB at 1000:1 in prices and FX','VES before October 2021 converted at 1000000:1 in prices and FX','VEF before 2008 corrected to historical VEB'],'fxMethod':'Arithmetic mean of daily quote/base rates on matching dates. World Bank annual USD means used only where daily data are absent; cross-rates from such annual means are labelled separately. Current year and incomplete historical periods are marked partial. Survey-date dollar_ex is never an annual FX rate.','rawSha256':{name:hashlib.sha256((CACHE/name).read_bytes()).hexdigest() for name in URLS}}
def save(name,data): (OUT/name).write_text(json.dumps(data,ensure_ascii=False,separators=(',',':'))+'\n')
save('prices.json',{'metadata':metadata,'countries':countries,'prices':prices,'history':history})
save('fx.json',{'asOf':AS_OF,'years':fx})
(OUT/'fx').mkdir(exist_ok=True)
for year,body in fx.items(): save(f'fx/{year}.json',body)
save('fx/index.json',{'asOf':AS_OF,'years':{year:{'currencies':list(body['usd']),'coverage':body['coverage']} for year,body in fx.items()}})
save('metadata.json',metadata)
for name,fields,items in [
 ('prices.csv',['country','year','price','currency','date','source','originalPrice','originalCurrency'],history),
 ('countries.csv',['country','name','firstYear','lastYear','years','latestCurrency'],[{'country':k,**{field:v[field] for field in ['name','firstYear','lastYear','years','latestCurrency']}} for k,v in countries.items()]),
 ('fx.csv',['year','base','quote','rate','days','from','to','partial','method'],[{'year':year,'base':pair.split('/')[0],'quote':pair.split('/')[1],'rate':v[0],'days':v[1],'from':v[2],'to':v[3],'partial':v[4],'method':'daily-average'} for year,data in fx.items() for pair,v in data['pairs'].items()]+derived_fx)]:
 with (OUT/name).open('w',newline='') as out:
  w=csv.DictWriter(out,fieldnames=fields);w.writeheader();w.writerows(items)
print(json.dumps({key:metadata[key] for key in ['countries','priceObservations','annualPrices','annualFxPairs']},indent=2))
