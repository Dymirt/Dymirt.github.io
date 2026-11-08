# Real Big Mac data snapshot

Snapshot: **8 November 2026**. The database contains **74 countries and historical markets**, **2,780 dated price observations**, and **1,743 country/year prices**, spanning **1986–2026**. Country coverage differs by year and contains gaps; this is not a complete inventory of every country currently selling a Big Mac.

## Price sources and selection

- [The Economist historical source data](https://github.com/TheEconomist/big-mac-data/blob/master/source-data/big-mac-historical-source-data.csv): 1986–1999.
- [The Economist v2 source data](https://github.com/TheEconomist/big-mac-data/blob/master/source-data/big-mac-source-data-v2.csv): 2000–2026, including **separate national euro-area observations** (Italy from 2011, in addition to historical Italian-lira records).
- [Dom Spotkań z Historią](https://ekartkazwarszawy.pl/kartka/otwarcie-pierwszej-polsce-restauracji-mcdonalds/): the Polish opening price on 17 June 1992.

The app uses the last positive, finite, confirmed observation available in each country/year. `prices.csv` also contains all dated observations. One zero-price Venezuela observation from 2018 was excluded. Missing years are never interpolated. Euro-area aggregate (`EUZ`) observations and India's Maharaja Mac substitute (`IND`) are excluded. No euro-area prices are substituted for country prices.

The Economist data are credited under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Transformations: select national observations, select one last observation per year, omit nonpositive prices and aggregate/substitute entries, normalize monetary units as below. Source URLs and SHA-256 hashes of downloaded raw inputs are recorded in `metadata.json`.

## Annual exchange rates

The primary input is the [Frankfurter daily currency feed](https://frankfurter.dev/), which aggregates central-bank/official sources. For each year and ordered currency pair A/B, the importer computes the arithmetic mean of **daily B-per-USD / A-per-USD ratios on matching dates**. It does not divide two annual means for this primary series. It retains counts and date coverage, uses at least 20 matched daily records, and marks incomplete historical periods and 2026 as partial. Published daily feed records can include carried forward values; this is an average of the feed's daily observations, not a claim to reproduce a particular bank's business-day-only annual fixing.

The snapshot contains **115,964 primary annual directional pairs**. Mean A/B and mean B/A need not be exact reciprocals.

Where daily data are absent, [World Bank PA.NUS.FCRF](https://databank.worldbank.org/metadataglossary/world-development-indicators/series/PA.NUS.FCRF) annual currency-per-USD means supply documented units with historical price support. Their **962 derived annual cross-rates** are separately labelled `annual-usd-cross`, not represented as daily-pair averages. They are included in `fx.csv`; the runtime derives them from stored annual USD means and provenance.

`dollar_ex` from the burger survey is never used as an annual FX rate. There are no live runtime requests to external financial APIs.

Full-year 2026 averages do not yet exist: all 2026 conversion rates are labelled year-to-date, through 8 November 2026. Earlier incomplete periods are also labelled with their actual dates.

Annual native/USD conversion rates remain unavailable for **11 oldest country/year prices** (Brazil 1986, 1992, 1993; Yugoslavia 1988–1991; Soviet Union 1990–1991; Russia 1992; Venezuela 1992). They are listed in `metadata.json`. These gaps are not filled with spot FX or invented rates. A local-currency burger count can still be calculated without FX; cross-currency/nominal results requiring missing data are unavailable.

## Monetary units

Both prices and exchange rates must use the same unit. Original prices and currency codes are preserved where transformed.

- Poland before 1995: divide old-zloty burger prices by 10,000; World Bank annual PLN series are already redenominated. [NBP](https://nbp.pl/wp-content/uploads/2023/01/pieniadz_1.pdf).
- Turkey before 2005: divide burger prices by 1,000,000; Frankfurter TRY histories already use normalized TRY. [TCMB history](https://tcmb.gov.tr/wps/wcm/connect/EN/TCMB%2BEN/Main%2BMenu/About%2Bthe%2BBank/History).
- RUR prices and FX are converted to RUB at 1,000:1. This also corrects the historical source's old-ruble quote in 1998. [Bank of Russia annual report](https://cbr.ru/Collection/Collection/File/8332/ar_1998_e.pdf).
- VES before October 2021: divide both prices and daily FX by 1,000,000 to use the post-2021 expression. [BCV announcement](http://www.bcv.org.ve/system/files/documentos/comunicado_bolivardigital.pdf).
- Venezuela's pre-2008 prices marked VEF in the source are identified as historical VEB, preserving their values. Other historical currencies keep their original codes.

The UI explains normalized units when such an endpoint is selected. Custom prices are explicitly labelled, remain in the browser, and do not modify the database.

## Files and calculations

- `countries.csv`: names, currency and year coverage.
- `prices.csv`: all dated national observations, including original values for transformed prices.
- `prices.json`: country catalog, annual price selection, observations and metadata.
- `fx.csv`: annual pair means and separately labelled annual-USD cross-rates.
- `fx.json`: complete FX snapshot used by tests and available for audit.
- `fx/index.json` and `fx/YYYY.json`: runtime index and lazy-loaded yearly rate files.
- `metadata.json`: provenance, raw-input hashes, transformations and explicit gaps.

For an endpoint: `local amount = input amount × annual FX(input currency → burger currency, endpoint year)`, then `burgers = local amount / local burger price`.

The primary change is `(ending burgers / starting burgers − 1) × 100%`. The equivalent ending amount preserves the initial number of burgers.

For nominal gain/loss, both cash flows are expressed in the ending amount's currency: the starting cash flow is converted at its own year's annual rate; the ending cash flow is already in that currency. This can differ from the burger-adjusted result. Fees, taxes and transaction costs are not inputs to this calculator.
