const translations = {
  en: {
    metaTitle: 'Dmytro Kolida — Solutions & Integration Engineer',
    metaDescription: 'Dmytro Kolida — Solutions & Integration Engineer. Production integrations, process automation, legacy modernization, and reliable systems.',
    ogDescription: 'I turn fragmented business processes and legacy systems into reliable production integrations.',
    skip: 'Skip to content', navExpertise: 'Expertise', navWork: 'Selected work', navAbout: 'About', navContact: 'Contact',
    availability: 'Open to opportunities', portraitAlt: 'Portrait of Dmytro Kolida', location: 'Based near Warsaw, Poland',
    context: 'Engineering + operations + business context', ownership: 'OWNERSHIP: END → END', role: 'Solutions & Integration Engineer',
    heroTitle: 'Systems that<br><span class="text-acid">work in reality.</span>',
    heroDescription: 'I turn fragmented processes and legacy systems into reliable production integrations — connecting applications, data, infrastructure, and business operations.',
    exploreWork: 'Explore selected work', startConversation: 'Start a conversation',
    metricBackend: 'Backend systems', metricProduction: 'Production operations', metricIntegration: 'Integration & data', nineYears: '9 years', metricOwnership: 'E-commerce ownership',
    expertiseEyebrow: '01 / Expertise', expertiseTitle: 'One engineer across the whole system.',
    expertiseIntro: 'From a vague operational need to architecture, implementation, deployment, and incident resolution.',
    expertise1Title: 'Integration engineering', expertise1Text: 'Reliable connections between APIs, databases, files, marketplaces, and systems without a clean public interface.',
    expertise1Item1: 'REST APIs & webhooks', expertise1Item2: 'Data mapping & SQL', expertise1Item3: 'Retries, validation & idempotency',
    expertise2Title: 'Production systems', expertise2Text: 'Hands-on ownership across application code, containers, operating systems, databases, networks, and failures.',
    expertise2Item2: 'Monitoring & troubleshooting', expertise2Item3: 'Deployments, backups & security',
    expertise3Title: 'Automation & modernization', expertise3Text: 'Replacing fragile manual work and legacy constraints with maintainable pipelines and controlled change.',
    expertise3Item1: 'Python process automation', expertise3Item2: 'Legacy PHP modernization', expertise3Item3: 'AI-enabled workflows',
    workEyebrow: '02 / Selected work', workTitle: 'Evidence over buzzwords.',
    workIntro: 'Selected public work and anonymized evidence from private repositories. The summaries show the engineering scope without exposing source code, clients, vendors, or confidential implementation details.',
    modernizationKicker: 'Production platform · Anonymized', modernizationTitle: 'Risk-first legacy platform modernization',
    modernizationText: 'A 2,184-file legacy PHP platform carried business behavior across application code, database rules, and scheduled jobs. Before changing high-risk flows, I mapped 856 PHP files and classified 187 data-writing paths, then added regression tests, Dockerized integration boundaries, versioned migrations, and branch-based delivery configuration for two environments.',
    measuredEvidence: 'Measured evidence', modernizationResult: '396 tests · 1,108 assertions<br>29 documented releases<br>36.3% fewer tracked files',
    modernizationNote: 'Clean verification run: zero failures and one credential-dependent skip. Repository-derived metrics; identifying business details are omitted.',
    case1Kicker: 'Production data workflow · Anonymized', case1Title: 'Recoverable data onboarding and identity resolution',
    case1Text: 'Incoming customer and claim files arrived in inconsistent CSV, XLS, and XLSX layouts with ambiguous company identities. I built a background workflow around a 59-field canonical model: editable mapping, validation, per-row transactions, progress and error logs, stop/resume controls, external-registry enrichment, and human confirmation before uncertain matches are committed.',
    tagCanonicalModel: 'Canonical model', tagRegistry: 'Registry integration', tagHumanReview: 'Human review', tagAudit: 'Audit trail', engineeringEvidence: 'Verified scope',
    case1Result: 'CSV · XLS · XLSX<br>59-field data model<br>238-case matching fixture · 25 merge tests', privateNote: 'Verified from a private repository; clients, business volumes, and identifying details are omitted.',
    case2Kicker: 'Regulated integration · Anonymized', case2Title: 'E-invoicing bridge for a legacy PHP workflow',
    case2Text: 'A legacy operator workflow needed to exchange invoices with a regulated external platform without embedding the modern protocol stack in the monolith. I designed a containerized FastAPI bridge with typed payloads, FA(3) XML generation, authentication, submission and status handling, existing-invoice lookup, and duplicate recovery.',
    tagTypedApi: 'Typed API boundary', tagDuplicateRecovery: 'Duplicate recovery', case2Result: '4 API endpoints<br>FA(3) XML generation<br>Duplicate recovery · 4 focused tests',
    case3Kicker: 'Private engineering work · Anonymized', case3Title: 'Multi-platform product catalog synchronization',
    case3Text: 'Built a modular integration that synchronizes product data and media between a commerce platform and an external marketplace, including category and attribute mapping.',
    tagMapping: 'Data mapping', tagAdapters: 'Modular adapters', case3Result: 'Catalog data<br>Media assets<br>Taxonomy mapping',
    case4Kicker: 'Private integration · Anonymized', case4Title: 'Retail loyalty and digital-wallet integration',
    case4Text: 'Connected a Django application to an external retail system, combining customer and loyalty data with persistence, administration tools, a web interface, and mobile-wallet pass generation.',
    tagWallet: 'Digital wallet', tagAdmin: 'Admin workflows', case4Result: 'External API<br>Application state<br>Wallet passes', publicKicker: 'Hackathon project · Open source',
    publicText: 'A Python project developed in a time-boxed team environment, showing rapid problem framing, prototyping, and delivery.',
    tagPrototyping: 'Rapid prototyping', tagTeam: 'Team delivery', viewGithub: 'View on GitHub',
    awardTitle: 'CoinSwipe — 1st place in the DragonSwap bounty', awardText: 'Recognized for turning an idea into a working technical solution under hackathon constraints.', recognitionPost: '42 Warsaw recognition',
    warsawMossAwardTitle: 'Eco Navigate — 3rd place', warsawMossAwardText: 'Awarded at HumanTech Hack 2024 for an innovation-for-good project delivered by the Warsaw Moss team.',
    viewProject: 'View project', viewDiploma: 'View diploma', diplomaAlt: 'HumanTech Hack 2024 third-place diploma for Dmytro Kolida',
    aboutEyebrow: '03 / About', aboutTitle: 'Technical judgment shaped by operating a real business.',
    aboutLead: 'I work where application code, infrastructure, imperfect data, and business reality meet.',
    aboutText1: 'My engineering experience spans Python and PHP applications, APIs, SQL, Linux, Docker, production troubleshooting, and legacy modernization. Nine years of e-commerce ownership taught me to judge technology by operational cost, risk, and outcomes — not novelty.',
    aboutText2: 'I’m at my best when the requirements are ambiguous, several systems have to cooperate, and someone needs to own the result after deployment.',
    howIWork: 'How I work', workProcess: 'Discover → design → deliver → operate', currentFocus: 'Current focus', focusText: 'Reliable cloud integrations & controlled AI automation',
    toolkitEyebrow: '04 / Toolkit', toolkitTitle: 'Tools in service of outcomes.', toolBuild: 'Build', toolIntegrate: 'Integrate', toolOperate: 'Operate',
    toolOperateList: 'Linux · Docker · Proxmox · CI/CD · Logging · Backups', toolData: 'Data', toolDataList: 'PostgreSQL · MySQL · Redis · Validation · Data mapping',
    toolExpanding: 'Expanding', toolBusiness: 'Business', toolBusinessList: 'Discovery · Architecture · E-commerce · Mentoring · Ownership',
    contactEyebrow: '05 / Contact', contactTitle: 'Have a difficult system to connect?', copyEmail: 'Copy email',
    viewCv: 'View CV (PL)',
    footerText: 'Built for clarity, reliability, and the web.', backTop: 'Back to top', emailCopied: 'Email copied',
    openMenu: 'Open menu', closeMenu: 'Close menu', switchLanguage: 'Switch to Polish'
  },
  pl: {
    metaTitle: 'Dmytro Kolida — Inżynier rozwiązań i integracji',
    metaDescription: 'Dmytro Kolida — Inżynier rozwiązań i integracji. Integracje produkcyjne, automatyzacja procesów, modernizacja systemów legacy i niezawodne rozwiązania.',
    ogDescription: 'Zmieniam rozproszone procesy biznesowe i systemy legacy w niezawodne integracje produkcyjne.',
    skip: 'Przejdź do treści', navExpertise: 'Kompetencje', navWork: 'Wybrane realizacje', navAbout: 'O mnie', navContact: 'Kontakt',
    availability: 'Otwarty na nowe możliwości', portraitAlt: 'Portret Dmytra Kolidy', location: 'Okolice Warszawy, Polska',
    context: 'Inżynieria + operacje + kontekst biznesowy', ownership: 'ODPOWIEDZIALNOŚĆ: END TO END', role: 'Inżynier rozwiązań i integracji',
    heroTitle: 'Systemy, które<br><span class="text-acid">działają w praktyce.</span>',
    heroDescription: 'Zmieniam rozproszone procesy i systemy legacy w niezawodne integracje produkcyjne — łącząc aplikacje, dane, infrastrukturę i operacje biznesowe.',
    exploreWork: 'Zobacz wybrane realizacje', startConversation: 'Porozmawiajmy',
    metricBackend: 'Systemy backendowe', metricProduction: 'Utrzymanie produkcji', metricIntegration: 'Integracje i dane', nineYears: '9 lat', metricOwnership: 'Prowadzenie e-commerce',
    expertiseEyebrow: '01 / Kompetencje', expertiseTitle: 'Jeden inżynier, cały system.',
    expertiseIntro: 'Od niejasnej potrzeby operacyjnej po architekturę, implementację, wdrożenie i rozwiązywanie incydentów.',
    expertise1Title: 'Inżynieria integracji', expertise1Text: 'Niezawodne połączenia między API, bazami danych, plikami, marketplace’ami i systemami bez przejrzystego publicznego interfejsu.',
    expertise1Item1: 'REST API i webhooki', expertise1Item2: 'Mapowanie danych i SQL', expertise1Item3: 'Ponowienia, walidacja i idempotencja',
    expertise2Title: 'Systemy produkcyjne', expertise2Text: 'Praktyczna odpowiedzialność za kod aplikacji, kontenery, systemy operacyjne, bazy danych, sieci i awarie.',
    expertise2Item2: 'Monitoring i diagnozowanie problemów', expertise2Item3: 'Wdrożenia, kopie zapasowe i bezpieczeństwo',
    expertise3Title: 'Automatyzacja i modernizacja', expertise3Text: 'Zastępowanie kruchej pracy ręcznej i ograniczeń legacy utrzymywalnymi pipeline’ami oraz kontrolowaną zmianą.',
    expertise3Item1: 'Automatyzacja procesów w Pythonie', expertise3Item2: 'Modernizacja legacy PHP', expertise3Item3: 'Procesy wspierane przez AI',
    workEyebrow: '02 / Wybrane realizacje', workTitle: 'Dowody zamiast modnych haseł.',
    workIntro: 'Wybrane projekty publiczne i zanonimizowane dowody z prywatnych repozytoriów. Opisy pokazują zakres inżynierski bez ujawniania kodu, klientów, dostawców ani poufnych szczegółów implementacji.',
    modernizationKicker: 'Platforma produkcyjna · Anonimowo', modernizationTitle: 'Modernizacja legacy oparta na analizie ryzyka',
    modernizationText: 'W platformie legacy w PHP obejmującej 2184 pliki reguły biznesowe były rozproszone między kodem aplikacji, bazą danych i zadaniami cyklicznymi. Przed zmianami w krytycznych procesach zmapowałem 856 plików PHP i sklasyfikowałem 187 ścieżek zapisujących dane, a następnie dodałem testy regresji, konteneryzowane granice integracyjne, wersjonowane migracje oraz konfigurację wdrożeń opartą na gałęziach dla dwóch środowisk.',
    measuredEvidence: 'Zmierzony rezultat', modernizationResult: '396 testów · 1 108 asercji<br>29 udokumentowanych wydań<br>36,3% mniej śledzonych plików',
    modernizationNote: 'Czyste uruchomienie weryfikacyjne: zero błędów i jeden pominięty test wymagający poświadczeń. Metryki pochodzą z repozytorium; szczegóły biznesowe pozostają anonimowe.',
    case1Kicker: 'Produkcyjny proces danych · Anonimowo', case1Title: 'Odzyskiwalny import danych i rozwiązywanie tożsamości',
    case1Text: 'Dane klientów i należności przychodziły w niespójnych plikach CSV, XLS i XLSX, a dopasowanie podmiotów bywało niejednoznaczne. Zbudowałem proces w tle oparty na 59-polowym modelu kanonicznym: edytowalne mapowanie, walidację, transakcje per wiersz, logi postępu i błędów, zatrzymanie i wznowienie, wzbogacanie z rejestrów oraz potwierdzenie człowieka przed zapisaniem niepewnego dopasowania.',
    tagCanonicalModel: 'Model kanoniczny', tagRegistry: 'Integracja z rejestrami', tagHumanReview: 'Decyzja człowieka', tagAudit: 'Ślad audytowy', engineeringEvidence: 'Zweryfikowany zakres',
    case1Result: 'CSV · XLS · XLSX<br>59-polowy model danych<br>Fixture: 238 przypadków · 25 testów scalania', privateNote: 'Zweryfikowano w prywatnym repozytorium; pominięto klientów, wolumeny biznesowe i dane identyfikujące.',
    case2Kicker: 'Integracja regulowana · Anonimowo', case2Title: 'Most e-fakturowania dla procesu legacy w PHP',
    case2Text: 'Istniejący proces operatora musiał wymieniać faktury z regulowaną platformą zewnętrzną bez osadzania nowoczesnego stosu protokołów w monolicie. Zaprojektowałem konteneryzowany most FastAPI z typowanymi danymi, generowaniem XML FA(3), uwierzytelnianiem, obsługą wysyłki i statusów, wyszukiwaniem istniejącej faktury oraz odzyskiwaniem po duplikacie.',
    tagTypedApi: 'Typowana granica API', tagDuplicateRecovery: 'Obsługa duplikatu', case2Result: '4 endpointy API<br>Generowanie XML FA(3)<br>Obsługa duplikatu · 4 testy celowane',
    case3Kicker: 'Prywatny projekt inżynierski · Anonimowy', case3Title: 'Synchronizacja katalogu produktów między platformami',
    case3Text: 'Zbudowałem modułową integrację synchronizującą dane i zdjęcia produktów między platformą e-commerce a zewnętrznym marketplace’em, wraz z mapowaniem kategorii i atrybutów.',
    tagMapping: 'Mapowanie danych', tagAdapters: 'Modułowe adaptery', case3Result: 'Dane katalogowe<br>Materiały graficzne<br>Mapowanie taksonomii',
    case4Kicker: 'Prywatna integracja · Anonimowa', case4Title: 'Integracja programu lojalnościowego i portfela cyfrowego',
    case4Text: 'Połączyłem aplikację Django z zewnętrznym systemem sprzedażowym, integrując dane klientów i programu lojalnościowego z warstwą danych, panelem administracyjnym, interfejsem webowym i generowaniem kart do portfela mobilnego.',
    tagWallet: 'Portfel cyfrowy', tagAdmin: 'Procesy administracyjne', case4Result: 'Zewnętrzne API<br>Stan aplikacji<br>Karty mobilne', publicKicker: 'Projekt hackathonowy · Open source',
    publicText: 'Projekt w Pythonie zrealizowany przez zespół w ograniczonym czasie, pokazujący szybkie definiowanie problemu, prototypowanie i dostarczenie rozwiązania.',
    tagPrototyping: 'Szybkie prototypowanie', tagTeam: 'Praca zespołowa', viewGithub: 'Zobacz na GitHubie',
    awardTitle: 'CoinSwipe — 1. miejsce w bounty DragonSwap', awardText: 'Wyróżnienie za przekształcenie pomysłu w działające rozwiązanie techniczne w warunkach hackathonu.', recognitionPost: 'Post 42 Warsaw',
    warsawMossAwardTitle: 'Eco Navigate — 3. miejsce', warsawMossAwardText: 'Projekt zespołu Warsaw Moss nagrodzony podczas HumanTech Hack 2024 za innowacyjne rozwiązanie służące dobru społecznemu.',
    viewProject: 'Zobacz projekt', viewDiploma: 'Zobacz dyplom', diplomaAlt: 'Dyplom Dmytra Kolidy za 3. miejsce podczas HumanTech Hack 2024',
    aboutEyebrow: '03 / O mnie', aboutTitle: 'Decyzje techniczne oparte na doświadczeniu w prowadzeniu realnego biznesu.',
    aboutLead: 'Pracuję tam, gdzie spotykają się kod aplikacji, infrastruktura, niedoskonałe dane i realia biznesowe.',
    aboutText1: 'Moje doświadczenie inżynierskie obejmuje aplikacje Python i PHP, API, SQL, Linux, Docker, diagnozowanie problemów produkcyjnych oraz modernizację systemów legacy. Dziewięć lat prowadzenia e-commerce nauczyło mnie oceniać technologię przez pryzmat kosztu operacyjnego, ryzyka i efektów — nie nowości.',
    aboutText2: 'Najlepiej działam, gdy wymagania są niejednoznaczne, kilka systemów musi współpracować, a ktoś powinien wziąć odpowiedzialność za rezultat po wdrożeniu.',
    howIWork: 'Jak pracuję', workProcess: 'Analiza → projekt → wdrożenie → utrzymanie', currentFocus: 'Obecny kierunek', focusText: 'Niezawodne integracje chmurowe i kontrolowana automatyzacja AI',
    toolkitEyebrow: '04 / Narzędzia', toolkitTitle: 'Narzędzia służą rezultatom.', toolBuild: 'Tworzenie', toolIntegrate: 'Integracje', toolOperate: 'Utrzymanie',
    toolOperateList: 'Linux · Docker · Proxmox · CI/CD · Logi · Kopie zapasowe', toolData: 'Dane', toolDataList: 'PostgreSQL · MySQL · Redis · Walidacja · Mapowanie danych',
    toolExpanding: 'Rozwijam', toolBusiness: 'Biznes', toolBusinessList: 'Analiza potrzeb · Architektura · E-commerce · Mentoring · Odpowiedzialność',
    contactEyebrow: '05 / Kontakt', contactTitle: 'Masz trudny system do zintegrowania?', copyEmail: 'Kopiuj e-mail',
    viewCv: 'Zobacz CV (PL)',
    footerText: 'Zbudowane z myślą o przejrzystości, niezawodności i sieci.', backTop: 'Wróć na górę', emailCopied: 'Adres e-mail skopiowany',
    openMenu: 'Otwórz menu', closeMenu: 'Zamknij menu', switchLanguage: 'Przełącz na język angielski'
  }
};

const menuButton = document.querySelector('#menuButton');
const mobileMenu = document.querySelector('#mobileMenu');
const languageToggle = document.querySelector('#languageToggle');
const copyButton = document.querySelector('#copyEmail');
const toast = document.querySelector('#toast');
let currentLanguage = localStorage.getItem('portfolio-language') || (navigator.language.toLowerCase().startsWith('pl') ? 'pl' : 'en');

function applyLanguage(language) {
  const copy = translations[language] || translations.en;
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = copy.metaTitle;
  document.querySelector('meta[name="description"]').content = copy.metaDescription;
  document.querySelector('meta[property="og:title"]').content = copy.metaTitle;
  document.querySelector('meta[property="og:description"]').content = copy.ogDescription;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = copy[element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    const value = copy[element.dataset.i18nTitle];
    if (value !== undefined) element.title = value;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value !== undefined) element.alt = value;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value !== undefined) element.alt = value;
  });

  languageToggle.querySelector('.language-current').textContent = language.toUpperCase();
  languageToggle.querySelector('.language-next').textContent = language === 'en' ? 'PL' : 'EN';
  languageToggle.setAttribute('aria-label', copy.switchLanguage);
  languageToggle.title = copy.switchLanguage;
  const menuOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-label', menuOpen ? copy.closeMenu : copy.openMenu);
  localStorage.setItem('portfolio-language', language);
}

languageToggle?.addEventListener('click', () => applyLanguage(currentLanguage === 'en' ? 'pl' : 'en'));

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? translations[currentLanguage].openMenu : translations[currentLanguage].closeMenu);
  mobileMenu.classList.toggle('hidden', isOpen);
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', translations[currentLanguage].openMenu);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('dmytrokolida@gmail.com');
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 1800);
  } catch {
    window.location.href = 'mailto:dmytrokolida@gmail.com';
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
applyLanguage(currentLanguage);
