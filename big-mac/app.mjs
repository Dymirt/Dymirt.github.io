import {t,locale,applyMessages} from './world-i18n.mjs?v=20261108-empty';
import {parseAmount,ComparisonError,compareInternational,getExchangeRate} from './international.mjs?v=20261108-world';
const $=id=>document.getElementById(id);
const sides=['start','end'];
let db,fxIndex;
const fx={years:{}};
const yearRequests=new Map();
let revision=0;
let ready=false;
const number=(value,digits=1)=>new Intl.NumberFormat(locale(),{maximumFractionDigits:digits,minimumFractionDigits:digits}).format(value);
const money=(value,currency)=>new Intl.NumberFormat(locale(),{style:'currency',currency,maximumFractionDigits:Math.abs(value)>0 && Math.abs(value)<0.01 ? 10 : undefined}).format(value);
const percent=value=>`${value>1e-9?'+':value< -1e-9?'−':''}${number(Math.abs(value))}%`;
const dateLabel=value=>new Intl.DateTimeFormat(locale(),{timeZone:'UTC'}).format(new Date(value));
const countryName=code=>{
  const country=db.countries[code];
  if(code==='SUN')return ({pl:'ZSRR',en:'Soviet Union',it:'Unione Sovietica'})[document.documentElement.lang]||country.name;
  if(code==='YUG')return ({pl:'Jugosławia',en:'Yugoslavia',it:'Jugoslavia'})[document.documentElement.lang]||country.name;
  return country?.iso2 ? new Intl.DisplayNames([locale()],{type:'region'}).of(country.iso2) : country?.name || code;
};
const allCurrencyCodes=()=>[...new Set([...Object.values(db.prices).flatMap(rows=>Object.values(rows).map(row=>row.currency)),...Object.values(fxIndex.years).flatMap(year=>year.currencies)])].sort();
const sourceUrl=row=>row.source==='manual'?null:row.source==='opening'?'https://ekartkazwarszawy.pl/kartka/otwarcie-pierwszej-polsce-restauracji-mcdonalds/':`https://github.com/TheEconomist/big-mac-data/blob/master/source-data/${row.source==='historical'?'big-mac-historical-source-data.csv':'big-mac-source-data-v2.csv'}`;
function fillSelect(select,items,selected) {
  select.replaceChildren(...items.map(({value,label,disabled=false})=>{
    const option=new Option(label,value);option.disabled=disabled;return option;
  }));
  if (selected!==undefined) select.value=String(selected);
}
function populateCountries() {
  const items=Object.keys(db.countries).sort((a,b)=>Number(db.countries[a].historical)-Number(db.countries[b].historical)||countryName(a).localeCompare(countryName(b),locale())).map(code=>({value:code,label:countryName(code)+(db.countries[code].historical?` (${t('historical')})`:'')}));
  for (const id of ['start-country','end-country','history-country']) fillSelect($(id),[{value:'',label:t('chooseCountry')},...items],$(id).value);
}
function refreshOptions(side,{countryChanged=false}={}) {
  const country=$(side+'-country').value;
  const wantedYear=$(side+'-year').value;
  const manual=$(side+'-manual').checked;
  const records=db.prices[country]||{};
  const years=Array.from({length:db.metadata.lastYear-db.metadata.firstYear+1},(_,i)=>db.metadata.firstYear+i);
  fillSelect($(side+'-year'),[{value:'',label:t('chooseYear')},...years.map(year=>({value:year,label:year+(records[year]||manual?'':` · ${t('unavailable')}`),disabled:!records[year]&&!manual}))],wantedYear);
  const observation=records[wantedYear];
  const native=observation?.currency||db.countries[country]?.latestCurrency||'';
  const current=$(side+'-currency').value;
  const previousNative=$(side+'-currency').dataset.native;
  const selected=countryChanged && (!current||current===previousNative)?native:current;
  const available=new Set([...(fxIndex.years[wantedYear]?.currencies||[]),native]);
  const currencyRank=code=>{const index=['EUR','PLN','USD'].indexOf(code);return index<0?3:index;};
  const codes=allCurrencyCodes().sort((a,b)=>currencyRank(a)-currencyRank(b)||a.localeCompare(b));
  fillSelect($(side+'-currency'),[{value:'',label:t('chooseCurrency')},...codes.map(code=>({value:code,label:code,disabled:!available.has(code)}))],selected);
  $(side+'-currency').dataset.native=native;
  const chosenPriceCurrency=manual?$(side+'-price-currency').value||native:native;
  fillSelect($(side+'-price-currency'),[{value:'',label:t('chooseCurrency')},...codes.map(code=>({value:code,label:code}))],chosenPriceCurrency);
  $(side+'-custom-price').disabled=!manual;
  $(side+'-price-currency').disabled=!manual;
  $(side+'-unit').textContent=$(side+'-currency').value;
}
async function loadYear(year) {
  if (fx.years[year]) return;
  if (!yearRequests.has(year)) yearRequests.set(year,fetch(new URL(`./data/fx/${year}.json`,import.meta.url)).then(response=>{if(!response.ok)throw new Error('FX load');return response.json();}).then(data=>{fx.years[year]=data;}).catch(error=>{yearRequests.delete(year);throw error;}));
  await yearRequests.get(year);
}
function readPoint(side) {
  const manual=$(side+'-manual').checked;
  const customText=$(side+'-custom-price').value.trim().replace(/\s/g,'').replace(',','.');
  const customPrice=/^\d+(?:\.\d{1,12})?$/.test(customText)?Number(customText):NaN;
  return {country:$(side+'-country').value,year:Number($(side+'-year').value),currency:$(side+'-currency').value,amount:parseAmount($(side+'-amount').value),custom:manual?{price:customPrice,currency:$(side+'-price-currency').value}:null};
}
function observationFor(point) {return point.custom?{...point.custom,source:'manual'}:db.prices[point.country]?.[point.year];}
function fxDescription(exchange,year) {
  if(exchange.method==='identity')return t('localIdentity');
  if(exchange.method==='annual-usd-cross')return t('fxAnnualCross',{year})+(exchange.partial?` · ${t('fxPartial',{year,from:dateLabel(exchange.from),to:dateLabel(exchange.to)})}`:'');
  return exchange.partial?t('fxPartial',{year,from:dateLabel(exchange.from),to:dateLabel(exchange.to)}):t('fxDaily',{year});
}
function clearResults(message) {
  $('result-panel').classList.remove('positive','neutral');$('result-panel').classList.add('invalid');
  for(const id of ['real-change','start-burgers','end-burgers','nominal-change','nominal-difference','equivalent-amount'])$(id).textContent='—';
  $('result-title').textContent=t('completeAmounts');
  for(const id of ['result-explanation','nominal-description','nominal-basis','equivalent-description'])$(id).textContent='';
  $('form-error').hidden=!message;$('form-error').textContent=message||'';
}
async function update() {
  if(!ready)return;
  const ticket=++revision;
  const start=readPoint('start'),end=readPoint('end');
  for(const [side,point] of [['start',start],['end',end]]) {
    $(side+'-result-year').textContent=[countryName(point.country),point.year||''].filter(Boolean).join(' · ');
    $(side+'-unit').textContent=point.currency;
    const observation=observationFor(point);
    $(side+'-price').textContent=observation && observation.price>0?t('priceNote',{price:money(observation.price,observation.currency),date:observation.date?dateLabel(observation.date):t('manual')}):point.country&&point.year?t('noPrice'):'';
    $(side+'-fx').textContent='';
    $(side+'-amount').setAttribute('aria-invalid',String($(side+'-amount').value.trim()!==''&&!Number.isFinite(point.amount)));
  }
  const units=[];
  for(const point of [start,end]) {
    const code=observationFor(point)?.currency;
    if(code==='PLN'&&point.year<1995)units.push('PLN / 10 000');
    if(code==='TRY'&&point.year<2005)units.push('TRY / 1 000 000');
    if(code==='RUB'&&point.year<1999)units.push('RUR → RUB / 1000');
    if(code==='VES'&&point.year<=2021)units.push('VES / 1 000 000');
  }
  $('denomination-note').hidden=!units.length;$('denomination-note').textContent=t('denominationNote',{units:[...new Set(units)].join('; ')});
  $('partial-note').hidden=![start.year,end.year].includes(db.metadata.lastYear);
  $('partial-note').textContent=t('partialNote',{year:db.metadata.lastYear,date:dateLabel(fxIndex.asOf)});
  const incomplete=sides.some(side=>['country','year','currency','amount'].some(field=>$(side+'-'+field).value.trim()===''));
  if(incomplete){clearResults();return;}
  try {
    await Promise.all([...new Set([start.year,end.year])].map(loadYear));
    if(ticket!==revision)return;
    const result=compareInternational(db,fx,start,end);
    $('form-error').hidden=true;
    $('result-panel').classList.remove('invalid');
    const same=Math.abs(result.realChange)<1e-9;
    $('result-panel').classList.toggle('positive',result.realChange>1e-9);$('result-panel').classList.toggle('neutral',same);
    $('real-change').replaceChildren(document.createTextNode(percent(result.realChange).slice(0,-1)),Object.assign(document.createElement('span'),{textContent:'%'}));
    document.querySelector('.result-icon').textContent=same?'→':result.realChange>0?'↗':'↘';
    $('result-title').textContent=t(same?'unchanged':result.realChange>0?'increased':'decreased');
    $('start-burgers').textContent=number(result.start.burgers);$('end-burgers').textContent=number(result.end.burgers);
    $('result-explanation').textContent=same?'':t(result.burgerDifference>0?'resultMore':'resultLess',{count:number(Math.abs(result.burgerDifference))});
    for(const [side,point] of [['start',result.start],['end',result.end]]) {
      $(side+'-fx').textContent=point.exchange.method==='identity'?t('localIdentity'):`1 ${point.currency} = ${new Intl.NumberFormat(locale(),{maximumSignificantDigits:8}).format(point.exchange.rate)} ${point.observation.currency} · ${fxDescription(point.exchange,point.year)}`;
    }
    $('equivalent-amount').textContent=money(result.equivalentEndAmount,end.currency);
    $('equivalent-description').textContent=t('equivalentDescription',{country:countryName(end.country),year:end.year});
    if(result.nominal) {
      $('nominal-change').textContent=percent(result.nominal.change);
      $('nominal-difference').textContent=`${result.nominal.difference>0?'+':''}${money(result.nominal.difference,end.currency)}`;
      $('nominal-description').textContent=`${money(result.nominal.startAmount,end.currency)} → ${money(end.amount,end.currency)}`;
      $('nominal-basis').textContent=t('nominalBasis',{currency:end.currency});
    } else {
      $('nominal-change').textContent='—';$('nominal-difference').textContent='—';$('nominal-description').textContent=t('noNominal');$('nominal-basis').textContent='';
    }
  } catch(error) {
    if(ticket!==revision)return;
    const message=error instanceof ComparisonError?(error.code==='missingPrice'?t('noPriceYear',{country:countryName(error.details.country),year:error.details.year}):error.code==='missingFx'?t('missingFx',error.details):t('invalidAmount')):t('loadError');
    clearResults(message);
  }
}
function renderHistory() {
  if(!ready)return;
  const code=$('history-country').value;
  document.querySelector('.chart-container').hidden=!code;
  if(!code){$('history-description').textContent='';$('price-chart').replaceChildren();$('price-table').replaceChildren();fillSelect($('history-currency'),[{value:'',label:t('chooseCurrency')}],'');return;}
  const records=db.prices[code];
  const allYears=Object.keys(records).map(Number).sort((a,b)=>a-b);
  const nativeCurrencies=[...new Set(allYears.map(year=>records[year].currency))];
  const chosenCurrency=nativeCurrencies.includes($('history-currency').value)?$('history-currency').value:db.countries[code].latestCurrency;
  fillSelect($('history-currency'),nativeCurrencies.map(currency=>({value:currency,label:currency})),chosenCurrency);
  const years=allYears.filter(year=>records[year].currency===chosenCurrency);
  const first=years[0],last=years.at(-1);
  $('history-description').textContent=t('historyDescription',{country:countryName(code),first,last,count:years.length,currency:chosenCurrency});
  $('price-table').innerHTML=allYears.map(year=>{const row=records[year];return `<tr><th scope="row">${year}</th><td>${money(row.price,row.currency)}</td><td>${dateLabel(row.date)}</td><td><a href="${sourceUrl(row)}" target="_blank" rel="noopener noreferrer">${row.source==='opening'?'DSH':'The Economist'} ↗</a></td></tr>`;}).join('');
  const maxPrice=Math.max(...years.map(year=>records[year].price));
  const power=10**Math.floor(Math.log10(maxPrice));
  const ceiling=Math.ceil(maxPrice/power)*power;
  const x=year=>last===first?500:55+(year-first)/(last-first)*888;
  const y=value=>218-value/ceiling*184;
  const ticks=Array.from({length:5},(_,i)=>(i+1)*ceiling/5);
  const digits=Math.min(10,Math.max(0,-Math.floor(Math.log10(ceiling))+1));
  const grid=ticks.map(value=>`<line x1="55" x2="943" y1="${y(value)}" y2="${y(value)}" stroke="#e0e3d8"/><text x="34" y="${y(value)+4}" text-anchor="end">${new Intl.NumberFormat(locale(),{maximumFractionDigits:digits,notation:value>=100000?'compact':'standard'}).format(value)}</text>`).join('');
  let path='';let previous;
  for(const year of years) {const row=records[year];path+=`${previous && year===previous.year+1 && row.currency===previous.currency?'L':'M'}${x(year)},${y(row.price)} `;previous={year,currency:row.currency};}
  const selected=side=>$(side+'-country').value===code?Number($(side+'-year').value):null;
  const chosen=new Set([selected('start'),selected('end')]);
  const dots=years.map(year=>{const row=records[year],active=chosen.has(year);return `<g><title>${year}: ${money(row.price,row.currency)}</title><circle cx="${x(year)}" cy="${y(row.price)}" r="${active?6:3.5}" fill="${active?'#9b5734':'#fffefa'}" stroke="${active?'#9b5734':'#68745a'}" stroke-width="2"/>${active?`<text class="chart-value" x="${x(year)}" y="${y(row.price)-16}" text-anchor="${year===last?'end':year===first?'start':'middle'}">${money(row.price,row.currency)}</text>`:''}</g>`;}).join('');
  const labels=years.filter(year=>year===first||year===last||(year%5===0&&last-year>=2&&year-first>=2)).map(year=>`<text x="${x(year)}" y="248" text-anchor="middle">${year}</text>`).join('');
  $('price-chart').innerHTML=`<title id="chart-title">${t('chartTitle',{country:countryName(code)})}</title><desc id="chart-desc">${t('chartDescription',{first,last})}</desc>${grid}<path d="${path}" fill="none" stroke="#68745a" stroke-width="2.5" stroke-linejoin="round"/>${dots}${labels}`;
}
function renderCountryList() {
  if(!ready)return;
  const query=$('country-search').value.trim().toLocaleLowerCase(locale());
  const codes=Object.keys(db.countries).filter(code=>`${countryName(code)} ${code}`.toLocaleLowerCase(locale()).includes(query)).sort((a,b)=>countryName(a).localeCompare(countryName(b),locale()));
  $('country-table').innerHTML=codes.length?codes.map(code=>{const country=db.countries[code],last=db.prices[code][country.lastYear];return `<tr><th scope="row">${countryName(code)}${country.historical?` <span class="country-table-note">(${t('historical')})</span>`:''}</th><td>${country.firstYear}–${country.lastYear}</td><td>${country.years}</td><td>${money(last.price,last.currency)} (${country.lastYear})</td></tr>`;}).join(''):`<tr><td colspan="4">${t('noCountryMatches')}</td></tr>`;
}
function renderLanguage() {
  applyMessages();
  if(!ready)return;
  populateCountries();sides.forEach(side=>refreshOptions(side));
  $('coverage-badge').textContent=t('coverage',{count:db.metadata.countries,first:db.metadata.firstYear,last:db.metadata.lastYear});
  $('data-coverage-note').textContent=t('coverageNote',{missing:db.metadata.missingAnnualUsdRates.length});
  $('data-summary').textContent=t('dataSummary',{date:dateLabel(db.metadata.asOf),observations:db.metadata.priceObservations,annual:db.metadata.annualPrices,pairs:db.metadata.annualFxPairs});
  renderCountryList();renderHistory();update();
}
$('calculator-form').addEventListener('submit',event=>event.preventDefault());
$('calculator-form').addEventListener('input',event=>{
  if(!ready)return;
  const side=event.target.id.startsWith('start-')?'start':'end';
  if(event.target.matches('select,[type="checkbox"]')) {
    refreshOptions(side,{countryChanged:event.target.id.endsWith('-country')});
    if(event.target.id.endsWith('-country')){$('history-country').value=$(side+'-country').value;$('history-currency').value='';}
    renderHistory();
  }
  update();
});
$('history-country').addEventListener('change',()=>{$('history-currency').value='';renderHistory();});
$('history-currency').addEventListener('change',renderHistory);
$('country-search').addEventListener('input',renderCountryList);
document.addEventListener('portfolio-language',renderLanguage);
applyMessages();
try {
  [db,fxIndex]=await Promise.all(['./data/prices.json','./data/fx/index.json'].map(async path=>{
    const response=await fetch(new URL(path,import.meta.url));if(!response.ok)throw new Error('Database load');return response.json();
  }));
  ready=true;
  populateCountries();sides.forEach(side=>refreshOptions(side));
  document.querySelectorAll('#calculator-form> .periods>fieldset').forEach(fieldset=>fieldset.disabled=false);
  // Custom-price fields keep their own disabled state when the containing fieldset is enabled.
  sides.forEach(side=>refreshOptions(side));
  $('calculator-form').setAttribute('aria-busy','false');$('load-status').hidden=true;
  renderLanguage();
} catch(error) {$('load-status').textContent=t('loadError');clearResults(t('loadError'));}
