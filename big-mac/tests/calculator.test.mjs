import test from 'node:test';
import assert from 'node:assert/strict';
import {observations, prices, parseAmount, compare} from '../calculator.mjs';

test('przykład użytkownika: nominalnie +100%, realnie około −14,04%', () => {
  const result = compare(2018,4000,2026,8000);
  assert.ok(Math.abs(result.realChange - (-14.042553191489)) < 1e-10);
  assert.equal(result.nominalChange,100);
  assert.ok(Math.abs(result.equivalentAmount - 9306.930693069307) < 1e-9);
  assert.equal(Object.keys(prices).length,34);
});
test('ta sama pensja i rok oznaczają brak zmiany', () => {
  const result = compare(2026,8000,2026,8000);
  assert.equal(result.realChange,0);
  assert.equal(result.priceChange,0);
});
test('podwyżka równa zmianie ceny zachowuje siłę nabywczą', () => {
  assert.ok(Math.abs(compare(2010,830,2026,2350).realChange) < 1e-10);
});
test('obsługuje spadki, wzrosty i odwrócone okresy', () => {
  assert.equal(compare(2020,1000,2020,500).realChange,-50);
  assert.equal(compare(2020,1000,2020,2000).realChange,100);
  assert.ok(compare(2026,8000,2018,4000).realChange > 0);
});
test('polskie kwoty oraz niepoprawne i skrajne wartości', () => {
  assert.equal(parseAmount('4 000,50'),4000.5);
  assert.equal(parseAmount('8\u00a0000,25'),8000.25);
  assert.equal(parseAmount('4000.50'),4000.5);
  for (const value of ['', '0','-1','Infinity','1e4','12abc','1,2,3','1.234','1000000000001']) assert.ok(Number.isNaN(parseAmount(value)),value);
  for (const value of [0,-1,NaN,Infinity,1e13]) assert.throws(() => compare(2018,value,2026,8000),RangeError);
  assert.throws(() => compare(1993,4000,2026,8000),RangeError);
});

test('dane historyczne: denominacja, luka i zakres lat', () => {
  assert.equal(prices[1992],2.5);
  assert.equal(prices[1994],3.1);
  assert.equal(prices[1993],undefined);
  assert.equal(prices[2000],5.5);
  assert.equal(observations[2026].date,'2026-07-01');
  assert.equal(compare(1992,250,2026,2350).realChange,0);
  assert.equal(compare(1994,310,2026,2350).realChange,0);
});
