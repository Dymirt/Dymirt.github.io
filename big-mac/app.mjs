import {observations, prices, parseAmount, compare} from './calculator.mjs';

const $ = id => document.getElementById(id);
const number = value => new Intl.NumberFormat('pl-PL', {minimumFractionDigits:1, maximumFractionDigits:1}).format(value);
const money = value => new Intl.NumberFormat('pl-PL', {style:'currency', currency:'PLN'}).format(value);
const percent = value => `${value > 0.000001 ? '+' : value < -0.000001 ? '−' : ''}${number(Math.abs(value))}%`;
const years = Object.keys(prices).map(Number);
for (const id of ['start-year','end-year']) {
  $(id).replaceChildren(...years.map(year => new Option(year, year)));
}
$('start-year').value = '2018';
$('end-year').value = '2026';
const sourceLinks = {
  opening:'https://ekartkazwarszawy.pl/kartka/otwarcie-pierwszej-polsce-restauracji-mcdonalds/',
  historical:'https://github.com/TheEconomist/big-mac-data/blob/master/source-data/big-mac-historical-source-data.csv',
  economist:'https://github.com/TheEconomist/big-mac-data/blob/master/output-data/big-mac-full-index.csv'
};
const dateLabel = value => new Intl.DateTimeFormat('pl-PL', {timeZone:'UTC'}).format(new Date(value));
$('price-table').innerHTML = Array.from({length:years.at(-1)-years[0]+1}, (_,index) => years[0]+index).map(year => {
  if (!observations[year]) return `<tr><th scope="row">${year}</th><td colspan="4">Brak potwierdzonych danych — rok niedostępny w kalkulatorze</td></tr>`;
  const entry = observations[year];
  const link = entry.source === 'opening' ? sourceLinks.opening : year < 2000 ? sourceLinks.historical : sourceLinks.economist;
  return `<tr data-year="${year}"><th scope="row">${year}</th><td>${money(entry.price)}</td><td>${prices[year-1] ? percent((entry.price/prices[year-1]-1)*100) : '—'}</td><td>${dateLabel(entry.date)}</td><td><a href="${link}" target="_blank" rel="noopener noreferrer">${entry.source === 'opening' ? 'DSH · otwarcie' : 'The Economist'} ↗</a></td></tr>`;
}).join('');

function drawChart(startYear, endYear) {
  const x = index => 55 + (years[index] - years[0]) / (years.at(-1) - years[0]) * 888;
  const y = price => 218 - price / 25 * 184;
  const points = years.map((year,index) => `${x(index)},${y(prices[year])}`).join(' ');
  const grid = [5,10,15,20,25].map(value => `<line x1="55" x2="943" y1="${y(value)}" y2="${y(value)}" stroke="#252c37"/><text x="34" y="${y(value)+4}" text-anchor="end">${value}</text>`).join('');
  const labels = years.filter((year,index) => year === years[0] || year === years.at(-1) || (year % 5 === 0 && years.at(-1) - year >= 2)).map(year => `<text x="${x(years.indexOf(year))}" y="248" text-anchor="middle">${year}</text>`).join('');
  const dots = years.map((year,index) => {
    const selected = year === startYear || year === endYear;
    return `<g><title>${year}: ${money(prices[year])}</title>${selected ? `<line x1="${x(index)}" x2="${x(index)}" y1="${y(prices[year])}" y2="218" stroke="#d59a6a" stroke-dasharray="4 5" opacity=".35"/>` : ''}<circle cx="${x(index)}" cy="${y(prices[year])}" r="${selected ? 6 : 3.5}" fill="${selected ? '#d59a6a' : '#121720'}" stroke="${selected ? '#d59a6a' : '#a6b0be'}" stroke-width="2"/>${selected ? `<text class="chart-value" x="${x(index)}" y="${y(prices[year])-16}" text-anchor="${index === years.length - 1 ? 'end' : index === 0 ? 'start' : 'middle'}">${money(prices[year])}</text>` : ''}</g>`;
  }).join('');
  $('price-chart').innerHTML = `<title id="chart-title">Cena Big Maca w Polsce w latach 1992–2026</title><desc id="chart-desc">Cena wzrosła z 2,50 zł (po denominacji) do 23,50 zł. Brak danych za 1993 rok. Zaznaczone lata: ${startYear} i ${endYear}. Pełne dane w tabeli poniżej.</desc>${grid}<polygon points="55,218 ${points} 943,218" fill="#d59a6a" opacity=".06"/><line x1="${x(0)}" y1="${y(prices[years[0]])}" x2="${x(1)}" y2="${y(prices[years[1]])}" stroke="#a6b0be" stroke-width="2.5" stroke-dasharray="4 5"/><polyline points="${years.slice(1).map((year,index) => `${x(index+1)},${y(prices[year])}`).join(' ')}" fill="none" stroke="#a6b0be" stroke-width="2.5" stroke-linejoin="round"/>${dots}${labels}`;
}

function update() {
  const startYear = Number($('start-year').value);
  const endYear = Number($('end-year').value);
  $('start-price').textContent = money(prices[startYear]);
  $('end-price').textContent = money(prices[endYear]);
  $('denomination-note').hidden = startYear >= 1995 && endYear >= 1995;
  $('start-result-year').textContent = startYear;
  $('end-result-year').textContent = endYear;
  drawChart(startYear, endYear);
  document.querySelectorAll('[data-year]').forEach(row => row.classList.toggle('selected-row', [startYear,endYear].includes(Number(row.dataset.year))));
  const startAmount = parseAmount($('start-amount').value);
  const endAmount = parseAmount($('end-amount').value);
  const valid = Number.isFinite(startAmount) && Number.isFinite(endAmount);
  $('form-error').hidden = valid;
  $('form-error').textContent = valid ? '' : 'Podaj obie kwoty większe od zera (maks. 1 bilion zł, do 2 miejsc po przecinku).';
  for (const [id, value] of [['start-amount',startAmount],['end-amount',endAmount]]) $(id).setAttribute('aria-invalid', String(!Number.isFinite(value)));
  $('result-panel').classList.toggle('invalid', !valid);
  if (!valid) {
    $('result-panel').classList.remove('positive', 'neutral');
    $('real-change').textContent = '—';
    $('result-title').textContent = 'Uzupełnij porównywane kwoty.';
    for (const id of ['start-burgers','end-burgers','nominal-change','price-change','equivalent-amount']) $(id).textContent = '—';
    $('equivalent-description').textContent = 'Kwota odpowiadająca tej samej liczbie burgerów';
    return;
  }
  const result = compare(startYear,startAmount,endYear,endAmount);
  const same = Math.abs(result.realChange) < 1e-9;
  $('result-panel').classList.toggle('positive', result.realChange > 1e-9);
  $('result-panel').classList.toggle('neutral', same);
  document.querySelector('.result-icon').textContent = same ? '→' : result.realChange > 0 ? '↗' : '↘';
  $('real-change').replaceChildren(document.createTextNode(percent(result.realChange).slice(0,-1)), Object.assign(document.createElement('span'), {textContent:'%'}));
  $('result-title').textContent = same ? 'Wartość w Big Macach bez zmian.' : result.realChange > 0 ? 'Wartość w Big Macach wzrosła.' : 'Wartość w Big Macach spadła.';
  $('start-result-year').textContent = startYear;
  $('end-result-year').textContent = endYear;
  $('start-burgers').textContent = number(result.startBurgers);
  $('end-burgers').textContent = number(result.endBurgers);
  $('nominal-change').textContent = percent(result.nominalChange);
  $('price-change').textContent = percent(result.priceChange);
  $('equivalent-amount').textContent = money(result.equivalentAmount);
  $('equivalent-description').textContent = `W ${endYear}, równowartość ${money(startAmount)} w ${startYear}`;
}
$('calculator-form').addEventListener('submit', event => event.preventDefault());
$('calculator-form').addEventListener('input', update);
update();
