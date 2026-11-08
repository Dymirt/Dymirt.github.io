export function parseAmount(value) {
  const normalized=String(value).trim().replace(/[\s\u00a0\u202f]/g,'').replace(',','.');
  if (!/^\d+(?:\.\d{1,6})?$/.test(normalized)) return NaN;
  const amount=Number(normalized);
  return amount>0 && amount<=1e12 ? amount : NaN;
}
export class ComparisonError extends Error {
  constructor(code, details={}) {super(code);this.name='ComparisonError';this.code=code;this.details=details;}
}
export function getExchangeRate(fx, base, quote, year) {
  if (base === quote) return {rate:1,method:'identity',partial:false,days:null};
  const data=fx.years?.[year];
  const pair=data?.pairs?.[`${base}/${quote}`];
  if (pair) return {rate:pair[0],days:pair[1],from:pair[2],to:pair[3],partial:pair[4],method:'daily-average'};
  // These are derived cross-rates of annual USD averages, explicitly distinct from daily means.
  const left=data?.coverage?.[base],right=data?.coverage?.[quote];
  if (data?.usd?.[base]>0 && data?.usd?.[quote]>0 && (left?.source==='worldbank' || right?.source==='worldbank')) {
    const from=[left.from,right.from].sort().at(-1),to=[left.to,right.to].sort()[0];
    const partial=from>`${year}-01-15` || to<`${year}-12-15`;
    return {rate:data.usd[quote]/data.usd[base],days:null,from,to,partial,method:'annual-usd-cross'};
  }
  throw new ComparisonError('missingFx',{base,quote,year});
}
export function convertAmount(fx,amount,base,quote,year) {
  const exchange=getExchangeRate(fx,base,quote,year);
  return {amount:amount*exchange.rate,exchange};
}
export function evaluatePoint(db,fx,point) {
  if (!Number.isFinite(point.amount) || point.amount<=0 || point.amount>1e12) throw new ComparisonError('invalidAmount');
  const recorded=db.prices?.[point.country]?.[point.year];
  const observation=point.custom ? {price:point.custom.price,currency:point.custom.currency,source:'manual',date:null} : recorded;
  if (!observation || !Number.isFinite(observation.price) || observation.price<=0) throw new ComparisonError('missingPrice',{country:point.country,year:point.year});
  const converted=convertAmount(fx,point.amount,point.currency,observation.currency,point.year);
  return {...point,observation,localAmount:converted.amount,exchange:converted.exchange,burgers:converted.amount/observation.price};
}
export function compareInternational(db,fx,startInput,endInput) {
  const start=evaluatePoint(db,fx,startInput),end=evaluatePoint(db,fx,endInput);
  const realChange=(end.burgers/start.burgers-1)*100;
  const equivalentEndAmount=start.burgers*end.observation.price/end.exchange.rate;
  // Nominal cash flows expressed in the ending currency, each at its own transaction-year mean.
  let nominal=null;
  try {
    const startConverted=convertAmount(fx,start.amount,start.currency,end.currency,start.year);
    nominal={startAmount:startConverted.amount,endAmount:end.amount,difference:end.amount-startConverted.amount,change:(end.amount/startConverted.amount-1)*100,currency:end.currency,exchange:startConverted.exchange};
  } catch(error) {if (!(error instanceof ComparisonError)) throw error;}
  return {start,end,realChange,equivalentEndAmount,nominal,burgerDifference:end.burgers-start.burgers};
}
