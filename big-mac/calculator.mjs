// The Economist Big Mac Index, CC BY 4.0. Last available observation per year.
// 1992: opening price, Dom Spotkań z Historią. Pre-1995 prices converted at 10,000:1.
export const observations = Object.freeze({
  1992: Object.freeze({price:2.50, date:'1992-06-17', source:'opening'}),
  1994: Object.freeze({price:3.10, date:'1994-04-01', source:'economist'}),
  1995: Object.freeze({price:3.40, date:'1995-04-01', source:'economist'}),
  1996: Object.freeze({price:3.80, date:'1996-04-01', source:'economist'}),
  1997: Object.freeze({price:4.30, date:'1997-04-01', source:'economist'}),
  1998: Object.freeze({price:5.30, date:'1998-04-01', source:'economist'}),
  1999: Object.freeze({price:5.50, date:'1999-03-01', source:'economist'}),
  2000: Object.freeze({price:5.50, date:'2000-04-01', source:'economist'}),
  2001: Object.freeze({price:5.90, date:'2001-04-01', source:'economist'}),
  2002: Object.freeze({price:5.90, date:'2002-04-01', source:'economist'}),
  2003: Object.freeze({price:6.30, date:'2003-04-01', source:'economist'}),
  2004: Object.freeze({price:6.30, date:'2004-05-01', source:'economist'}),
  2005: Object.freeze({price:6.50, date:'2005-06-01', source:'economist'}),
  2006: Object.freeze({price:6.50, date:'2006-05-01', source:'economist'}),
  2007: Object.freeze({price:6.90, date:'2007-06-01', source:'economist'}),
  2008: Object.freeze({price:7.00, date:'2008-06-01', source:'economist'}),
  2009: Object.freeze({price:7.60, date:'2009-07-01', source:'economist'}),
  2010: Object.freeze({price:8.30, date:'2010-07-01', source:'economist'}),
  2011: Object.freeze({price:8.63, date:'2011-07-01', source:'economist'}),
  2012: Object.freeze({price:9.10, date:'2012-07-01', source:'economist'}),
  2013: Object.freeze({price:9.20, date:'2013-07-01', source:'economist'}),
  2014: Object.freeze({price:9.20, date:'2014-07-01', source:'economist'}),
  2015: Object.freeze({price:9.60, date:'2015-07-01', source:'economist'}),
  2016: Object.freeze({price:9.60, date:'2016-07-01', source:'economist'}),
  2017: Object.freeze({price:10.10, date:'2017-07-01', source:'economist'}),
  2018: Object.freeze({price:10.10, date:'2018-07-01', source:'economist'}),
  2019: Object.freeze({price:10.80, date:'2019-07-09', source:'economist'}),
  2020: Object.freeze({price:11.00, date:'2020-07-01', source:'economist'}),
  2021: Object.freeze({price:13.43, date:'2021-07-01', source:'economist'}),
  2022: Object.freeze({price:16.68, date:'2022-07-01', source:'economist'}),
  2023: Object.freeze({price:19.90, date:'2023-07-01', source:'economist'}),
  2024: Object.freeze({price:20.90, date:'2024-07-01', source:'economist'}),
  2025: Object.freeze({price:21.30, date:'2025-07-01', source:'economist'}),
  2026: Object.freeze({price:23.50, date:'2026-07-01', source:'economist'}),
});
export const prices = Object.freeze(Object.fromEntries(Object.entries(observations).map(([year, observation]) => [year, observation.price])));

export function parseAmount(value) {
  const normalized = String(value).trim().replace(/[\s\u00a0\u202f]/g, '').replace(',', '.');
  if (!/^\d+(?:\.\d{1,2})?$/.test(normalized)) return NaN;
  const amount = Number(normalized);
  return amount > 0 && amount <= 1e12 ? amount : NaN;
}

export function compare(startYear, startAmount, endYear, endAmount) {
  if (!Object.hasOwn(prices, startYear) || !Object.hasOwn(prices, endYear)) throw new RangeError('Wybierz rok z tabeli cen.');
  if (![startAmount, endAmount].every(value => Number.isFinite(value) && value > 0 && value <= 1e12)) throw new RangeError('Podaj dodatnie kwoty do 1 biliona zł.');
  const startBurgers = startAmount / prices[startYear];
  const endBurgers = endAmount / prices[endYear];
  return {startBurgers, endBurgers, realChange:(endBurgers / startBurgers - 1) * 100, nominalChange:(endAmount / startAmount - 1) * 100, priceChange:(prices[endYear] / prices[startYear] - 1) * 100, equivalentAmount:startAmount * prices[endYear] / prices[startYear]};
}
