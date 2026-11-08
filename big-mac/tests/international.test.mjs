import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {compareInternational,getExchangeRate,parseAmount,ComparisonError} from '../international.mjs';
import {prices as polishPrices} from '../calculator.mjs';
const db=JSON.parse(await readFile(new URL('../data/prices.json',import.meta.url),'utf8'));
const fx=JSON.parse(await readFile(new URL('../data/fx.json',import.meta.url),'utf8'));
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-8,`${a} != ${b}`);
const point=(country,year,currency,amount)=>({country,year,currency,amount});
test('existing Polish results and all original prices are preserved',()=>{
  for(const [year,price] of Object.entries(polishPrices))assert.equal(db.prices.POL[year].price,price);
  const result=compareInternational(db,fx,point('POL',2018,'PLN',4000),point('POL',2026,'PLN',8000));
  close(result.realChange,-14.042553191489);
  assert.equal(result.nominal.change,100);
});
test('EUR in Italy versus EUR in Poland uses the actual Polish annual EUR/PLN mean',()=>{
  const result=compareInternational(db,fx,point('ITA',2025,'EUR',1000),point('POL',2025,'EUR',1000));
  const rate=getExchangeRate(fx,'EUR','PLN',2025);
  close(result.start.burgers,1000/6.2);
  close(result.end.burgers,1000*rate.rate/21.3);
  assert.equal(result.nominal.change,0);
  assert.equal(rate.method,'daily-average');assert.equal(rate.partial,false);
});
test('buy in Italy and sell in Poland: nominal and burger-adjusted changes are distinct',()=>{
  const result=compareInternational(db,fx,point('ITA',2018,'EUR',1000),point('POL',2025,'PLN',5000));
  close(result.nominal.startAmount,1000*getExchangeRate(fx,'EUR','PLN',2018).rate);
  close(result.nominal.difference,5000-result.nominal.startAmount);
  close(result.equivalentEndAmount,result.start.burgers*21.3);
  assert.notEqual(result.realChange,result.nominal.change);
});
test('confirmed national prices, never euro-area or substitute-product proxies',()=>{
  assert.equal(db.prices.ITA[2025].price,6.2);
  assert.equal(db.prices.ITA[2026].price,6.56);
  assert.equal(db.prices.ITA[2005],undefined);
  assert.equal(db.prices.EUZ,undefined);assert.equal(db.prices.IND,undefined);
  assert.throws(()=>compareInternational(db,fx,point('ITA',2005,'EUR',1000),point('POL',2025,'PLN',5000)),ComparisonError);
});
test('missing FX cannot silently fall back to a burger survey spot rate',()=>{
  assert.throws(()=>getExchangeRate({years:{}},'EUR','PLN',2025),ComparisonError);
  assert.equal(getExchangeRate({years:{}},'PLN','PLN',1992).rate,1);
});
test('World Bank fallback is clearly identified, while 2026 rates are partial',()=>{
  const old=getExchangeRate(fx,'USD','PLN',1992);
  assert.equal(old.method,'annual-usd-cross');assert.ok(old.rate>1);
  assert.equal(getExchangeRate(fx,'PLN','BRL',1994).partial,true);
  assert.equal(getExchangeRate(fx,'EUR','PLN',2026).partial,true);
  assert.ok(getExchangeRate(fx,'EUR','PLN',2026).to<='2026-11-08');
});
test('daily directional averages need not be reciprocals',()=>{
  const sample={years:{2020:{pairs:{'EUR/PLN':[4,2,'2020-01-02','2020-12-30',false],'PLN/EUR':[0.266666666667,2,'2020-01-02','2020-12-30',false]}}}};
  assert.notEqual(getExchangeRate(sample,'EUR','PLN',2020).rate,1/getExchangeRate(sample,'PLN','EUR',2020).rate);
});
test('custom price is explicit and does not mutate the price database',()=>{
  const start={...point('ITA',2005,'EUR',1000),custom:{price:4,currency:'EUR'}};
  const result=compareInternational(db,fx,start,point('POL',2025,'PLN',5000));
  assert.equal(result.start.observation.source,'manual');assert.equal(result.start.burgers,250);
  assert.equal(db.prices.ITA[2005],undefined);
});
test('supported decimal inputs, zero, negatives and unavailable currencies',()=>{
  assert.equal(parseAmount('1 000,125'),1000.125);
  for(const value of ['0','-1','NaN','1e6','1.2345678','1000000000001'])assert.ok(Number.isNaN(parseAmount(value)));
  assert.throws(()=>compareInternational(db,fx,point('ITA',2025,'EUR',0),point('POL',2025,'PLN',5000)),ComparisonError);
  assert.throws(()=>compareInternational(db,fx,point('ITA',1995,'EUR',1000),point('POL',2025,'PLN',5000)),ComparisonError);
});
test('database observations, dates, positive rates and complete/partial flags',()=>{
  assert.equal(db.metadata.countries,Object.keys(db.countries).length);
  for(const [code,records] of Object.entries(db.prices))for(const [year,row] of Object.entries(records)) {
    assert.ok(row.price>0 && Number.isFinite(row.price),`${code} ${year}`);
    assert.equal(Number(row.date.slice(0,4)),Number(year));assert.ok(row.date<=db.metadata.asOf);
  }
  for(const [year,body] of Object.entries(fx.years))for(const [pair,row] of Object.entries(body.pairs)) {
    assert.ok(Number.isFinite(row[0])&&row[0]>0,`${pair} ${year}`);assert.ok(row[1]>=20);
    assert.equal(row[2].slice(0,4),year);assert.equal(row[3].slice(0,4),year);
    if(year==='2026')assert.equal(row[4],true);
  }
});
test('runtime yearly FX files and manifest match the audited full snapshot',async()=>{
  const manifest=JSON.parse(await readFile(new URL('../data/fx/index.json',import.meta.url),'utf8'));
  assert.equal(manifest.asOf,db.metadata.asOf);
  for(const year of ['1986','1992','2018','2025','2026']) {
    const body=JSON.parse(await readFile(new URL(`../data/fx/${year}.json`,import.meta.url),'utf8'));
    assert.deepEqual(body,fx.years[year]);
    assert.deepEqual(new Set(manifest.years[year].currencies),new Set(Object.keys(body.usd)));
  }
});
