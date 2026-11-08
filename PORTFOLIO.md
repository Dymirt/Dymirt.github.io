# Dmytro Kolida, Portfolio

A trilingual (EN/PL/IT) GitHub Pages portfolio positioning Dmytro Kolida as a specialist who combines an entrepreneur's perspective with technical delivery. The offer focuses on system development, process optimization and technical stabilization in critical situations, supported by public work and anonymized evidence.

## Preview locally

Install dependencies, compile Tailwind, and start a local server:

```bash
npm ci
npm run build
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Review and commit the files.
2. Push `main` to `Dymirt/Dymirt.github.io`.
3. In **Settings → Pages**, deploy from `main` and `/ (root)`.

The site is published at [https://dymirt.github.io/](https://dymirt.github.io/).

## Evidence boundary

- Repository-derived metrics are included only when they can be reproduced from history, code, or tests.
- Client names, source code, credentials, business volumes, and identifying implementation details remain private.
- Production throughput, time saved, error-rate improvement, and incident metrics are not claimed without telemetry or explicit confirmation.

## Stack

- Static HTML
- Precompiled Tailwind CSS
- Custom CSS and JavaScript
- English, Polish and Italian language switch
- No backend required

## Current positioning

Owner-level understanding of cost, risk and operational continuity combined with hands-on system delivery. The site does not publish employer names, workplace history or a public CV. Production examples remain anonymized and are presented as evidence of the problems solved rather than as an employment timeline.

## Real Big Mac

The Polish calculator is published at `/big-mac/`, with navigation links from the portfolio and mentoring page. It uses warm light surfaces with the portfolio’s copper accents, runs entirely in the browser, and updates automatically when an amount or year changes. Positive results are green, negative results red.

Data, observation dates, attribution and denomination notes are embedded in the calculator. Test calculations with `npm run test:big-mac`.

## Shared header and footer

All pages use `shared/header.html`, `shared/footer.html`, `shared/site-layout.css` and `shared/site-layout.js`. Edit the shared templates and run `npm run build` (or `npm run sync:layout`) before publishing. The generated HTML is committed, so navigation remains available without JavaScript. The shared controller handles mobile navigation, language selection and the copyright year. Page-specific translations receive the `portfolio-language` event. The calculator supports EN/PL/IT with its own light content theme.

Run `npm run test:layout` to verify that every page contains the current templates and that internal links resolve.
