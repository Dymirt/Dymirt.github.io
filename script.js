const translations = {
  en: {
    metaTitle: 'Dmytro Kolida, Solutions & Integration Engineer',
    metaDescription: 'Dmytro Kolida, Solutions & Integration Engineer. I connect business software, data, and external services, modernize legacy systems, and keep them running.',
    ogDescription: 'I connect business software, data, and external services so everyday work becomes faster, safer, and less manual.',
    skip: 'Skip to content', navLabel: 'Main navigation', homeLabel: 'Dmytro Kolida, home', navExpertise: 'Expertise', navWork: 'Selected work', navAbout: 'About', navMentoring: 'Mentoring', navContact: 'Contact',
    availability: 'Open to opportunities', portraitAlt: 'Dmytro Kolida in a grey suit against a dark studio background', location: 'Based near Warsaw, Poland',
    context: 'Engineering + operations + business context', ownership: 'OWNERSHIP: END → END', role: 'Solutions & Integration Engineer',
    heroTitle: 'Systems that<br><span class="text-acid">work in reality.</span>',
    heroDescription: 'I connect business software, data, and external services so everyday work becomes faster, safer, and less manual, from the first problem description to deployment and support.',
    exploreWork: 'Explore selected work', startConversation: 'Start a conversation',
    metricBackend: 'Backend systems', metricProduction: 'Production operations', metricIntegration: 'Integration & data', nineYears: '9 years', metricOwnership: 'E-commerce ownership',
    expertiseEyebrow: '01 / Expertise', expertiseTitle: 'One engineer across the whole system.',
    expertiseIntro: 'You explain what needs to work. I find the systems involved, build the connection, put it into production, and remain responsible when something fails.',
    expertise1Title: 'Connecting systems', expertise1Text: '<span class="comparison-part"><strong>Before:</strong> people copy the same data between applications or work around systems that do not communicate.</span><span class="comparison-part"><strong>After:</strong> the applications exchange the right data automatically through APIs, databases, or files.</span>',
    expertise1Item1: 'APIs & external services', expertise1Item2: 'Spreadsheet & database imports', expertise1Item3: 'Validation, logs & safe retries',
    expertise2Title: 'Keeping systems running', expertise2Text: '<span class="comparison-part"><strong>Before:</strong> when something fails, it is unclear whether the cause is code, a container, a database, or the network.</span><span class="comparison-part"><strong>After:</strong> the system is monitored, backed up, and easier to diagnose and restore.</span>',
    expertise2Item2: 'Monitoring & troubleshooting', expertise2Item3: 'Deployments, backups & security',
    expertise3Title: 'Improving legacy software', expertise3Text: '<span class="comparison-part"><strong>Before:</strong> manual steps and old code make every change slow and risky.</span><span class="comparison-part"><strong>After:</strong> repeatable automation and tests make work faster and changes safer to release.</span>',
    expertise3Item1: 'Python process automation', expertise3Item2: 'Legacy PHP modernization', expertise3Item3: 'AI suggestions with human approval',
    workEyebrow: '02 / Selected work', workTitle: 'Before, after, and measurable results.',
    workIntro: 'These examples explain what was difficult, what I changed, and what now works. Private client code and business data stay private; only verified evidence is shown.',
    modernizationKicker: 'Legacy system · Anonymized', modernizationTitle: 'Making a critical legacy system safer to change',
    modernizationText: '<span class="comparison-part"><strong>Before:</strong> important business rules were spread across old PHP code, database rules, and scheduled jobs. Even a small change could break another process.</span><span class="comparison-part"><strong>After:</strong> I mapped the risky parts, removed obsolete files, and added automated tests, repeatable database changes, Docker services, and two controlled deployment environments. Changes can now be checked before release instead of relying only on manual testing.</span>',
    measuredEvidence: 'Measured evidence', modernizationResult: '396 automated tests · 1,108 checks<br>29 documented releases<br>36.3% fewer files in the codebase',
    modernizationNote: 'Verified in July 2026: zero failures and one credential-dependent test skipped. Business details remain private.',
    case1Kicker: 'Client data import · Anonymized', case1Title: 'Different client spreadsheets, one importer',
    case1Text: '<span class="comparison-part"><strong>Before:</strong> every company sent CSV, XLS, or XLSX files with different columns and layouts. A new layout could stop the import and require a programmer to change the code.</span><span class="comparison-part"><strong>After:</strong> I built one import process that maps each file into a common structure, lets an operator correct the mapping, and remembers successful layouts for later imports. A bad row is logged instead of stopping the whole file, and the job can be stopped and resumed. If the company identity is uncertain, AI can suggest the most likely match, but a person must approve it before sensitive data is saved.</span>',
    tagCanonicalModel: 'Flexible column mapping', tagRegistry: 'Company registry', tagHumanReview: 'Human approval', tagAudit: 'Error log', engineeringEvidence: 'What now works',
    case1Result: 'Client file → mapping → common format<br>New layouts without code changes<br>AI suggestion + human approval', case1Note: 'Matching was checked against 238 scenarios and duplicate merging has 25 focused tests. Client names and volumes are omitted.',
    case2Kicker: 'Polish e-invoicing · Anonymized', case2Title: 'Connecting KSeF to a legacy invoicing system',
    case2Text: '<span class="comparison-part"><strong>Before:</strong> the legacy PHP system could not communicate directly with Poland’s National e-Invoice System (KSeF), which requires newer authentication and invoice formats.</span><span class="comparison-part"><strong>After:</strong> I added a separate Python service that converts invoice data to FA(3) XML, authenticates with KSeF, sends invoices, checks their status, and finds an invoice submitted earlier. The old system can now use KSeF without a risky rewrite of the whole application.</span>',
    tagDuplicateRecovery: 'Already-submitted invoices', case2Result: 'Legacy PHP → Python service → KSeF<br>Send invoices &amp; check status<br>Find an already-submitted invoice',
    case2Note: 'Implemented as four API endpoints with FA(3) XML generation and four focused tests. Business details remain private.',
    case4Kicker: 'Client loyalty product', case4Title: 'Personalized loyalty cards for a café',
    case4Text: '<span class="comparison-part"><strong>Before:</strong> customer and loyalty data stayed in the Dotykačka point-of-sale system, with no personalized card customers could keep on their phones.</span><span class="comparison-part"><strong>After:</strong> I connected Dotykačka to a Django application that creates a personal café loyalty card for Apple Wallet or Google Wallet and gives staff one place to manage the program.</span>',
    case4Result: 'Dotykačka → Django → mobile wallet<br>Apple Wallet + Google Wallet<br>Personalized customer cards', case4Note: 'The client-facing product is described here; private source code and customer data remain private.',
    awardTitle: 'CoinSwipe: 1st place in the DragonSwap bounty', awardText: 'CoinSwipe is a Telegram app that combines discovering memecoins, trading them, and meeting people interested in the same coins. I built it with my team during ETHWarsaw 2024; we won first place in the DragonSwap bounty, and 42 Warsaw later featured the project.', recognitionPost: '42 Warsaw recognition',
    warsawMossAwardTitle: 'Eco Navigate: 3rd place', warsawMossAwardText: '<span class="comparison-part"><strong>Before:</strong> route planners mainly compared time and distance.</span><span class="comparison-part"><strong>After:</strong> Eco Navigate compares walking and cycling routes through Warsaw using data about nearby trees, parks, and other green areas. It recommends a greener option while showing its distance, time, and extra detour, and it also displays live air-quality stations.</span>',
    viewProject: 'View project', viewDiploma: 'View diploma', diplomaAlt: 'HumanTech Hack 2024 third-place diploma for Dmytro Kolida',
    aboutEyebrow: '03 / About', aboutTitle: 'Engineering guided by real business experience.',
    aboutLead: 'I work where software, servers, data, and day-to-day business operations have to work together.',
    aboutText1: 'My engineering work covers Python and PHP applications, APIs, SQL, Linux, Docker, production problems, and legacy modernization. Nine years of running my own e-commerce business taught me to judge technology by whether it saves time, reduces risk, and works reliably, not by whether it is new.',
    aboutText2: 'I am most useful when the starting point is unclear, several systems must exchange data, and someone needs to take responsibility from the first discussion through production support.',
    howIWork: 'How I work', workProcess: 'Discover → design → deliver → operate', currentFocus: 'Current focus', focusText: 'Cloud integrations and AI-assisted work with human approval',
    mentoringEyebrow: '04 / Mentoring', mentoringTitle: 'Good questions create independent progress.', mentoringText: 'My approach comes from peer mentoring at 42 Warsaw and mentoring at HackYeah 2026. I help learners clarify a goal, examine a blocker, and choose their own next step.',
    mentoringCta: 'See my mentoring approach', mentoringAlt: 'Dmytro explaining code beside a laptop while his dog listens', mentoringCaption: 'Explaining code to my most honest reviewer.',
    toolkitEyebrow: '05 / Toolkit', toolkitTitle: 'Tools I use to build, connect, and run systems.', toolBuild: 'Build', toolIntegrate: 'Integrate', toolOperate: 'Operate',
    toolOperateList: 'Linux · Docker · Proxmox · CI/CD · Logging · Backups', toolData: 'Data', toolDataList: 'PostgreSQL · MySQL · Redis · Validation · Data mapping',
    toolExpanding: 'Expanding', toolBusiness: 'Business', toolBusinessList: 'Discovery · Architecture · E-commerce · Mentoring · Ownership',
    contactEyebrow: '06 / Contact', contactTitle: 'Have a difficult system to connect?', copyEmail: 'Copy email',
    viewCv: 'View CV (PL)',
    footerText: 'Built for clarity, reliability, and the web.', backTop: 'Back to top', emailCopied: 'Email copied',
    openMenu: 'Open menu', closeMenu: 'Close menu', switchLanguage: 'Switch to Polish'
  },
  pl: {
    metaTitle: 'Dmytro Kolida, Inżynier rozwiązań i integracji',
    metaDescription: 'Dmytro Kolida, Inżynier rozwiązań i integracji. Łączę oprogramowanie biznesowe, dane i usługi zewnętrzne, modernizuję systemy legacy i dbam o ich działanie.',
    ogDescription: 'Łączę oprogramowanie biznesowe, dane i usługi zewnętrzne, aby codzienna praca była szybsza, bezpieczniejsza i wymagała mniej ręcznych działań.',
    skip: 'Przejdź do treści', navLabel: 'Główna nawigacja', homeLabel: 'Dmytro Kolida, strona główna', navExpertise: 'Kompetencje', navWork: 'Wybrane realizacje', navAbout: 'O mnie', navMentoring: 'Mentoring', navContact: 'Kontakt',
    availability: 'Otwarty na nowe możliwości', portraitAlt: 'Dmytro Kolida w szarym garniturze na tle ciemnego studia', location: 'Okolice Warszawy, Polska',
    context: 'Inżynieria + operacje + kontekst biznesowy', ownership: 'ODPOWIEDZIALNOŚĆ: END TO END', role: 'Inżynier rozwiązań i integracji',
    heroTitle: 'Systemy, które<br><span class="text-acid">działają w praktyce.</span>',
    heroDescription: 'Łączę oprogramowanie biznesowe, dane i usługi zewnętrzne, aby codzienna praca była szybsza, bezpieczniejsza i wymagała mniej ręcznych działań, od opisu problemu po wdrożenie i wsparcie.',
    exploreWork: 'Zobacz wybrane realizacje', startConversation: 'Porozmawiajmy',
    metricBackend: 'Systemy backendowe', metricProduction: 'Utrzymanie produkcji', metricIntegration: 'Integracje i dane', nineYears: '9 lat', metricOwnership: 'Prowadzenie e-commerce',
    expertiseEyebrow: '01 / Kompetencje', expertiseTitle: 'Jeden inżynier, cały system.',
    expertiseIntro: 'Ty wyjaśniasz, co ma działać. Ja znajduję potrzebne systemy, buduję połączenie, wdrażam je i biorę odpowiedzialność, gdy coś przestaje działać.',
    expertise1Title: 'Łączenie systemów', expertise1Text: '<span class="comparison-part"><strong>Przed:</strong> ludzie kopiują te same dane między aplikacjami albo obchodzą systemy, które ze sobą nie rozmawiają.</span><span class="comparison-part"><strong>Po:</strong> aplikacje automatycznie wymieniają właściwe dane przez API, bazy danych lub pliki.</span>',
    expertise1Item1: 'API i usługi zewnętrzne', expertise1Item2: 'Import arkuszy i baz danych', expertise1Item3: 'Walidacja, logi i bezpieczne ponowienia',
    expertise2Title: 'Utrzymanie działających systemów', expertise2Text: '<span class="comparison-part"><strong>Przed:</strong> gdy coś przestaje działać, nie wiadomo, czy przyczyną jest kod, kontener, baza danych czy sieć.</span><span class="comparison-part"><strong>Po:</strong> system jest monitorowany, ma kopie zapasowe i łatwiej go zdiagnozować oraz przywrócić.</span>',
    expertise2Item2: 'Monitoring i diagnozowanie problemów', expertise2Item3: 'Wdrożenia, kopie zapasowe i bezpieczeństwo',
    expertise3Title: 'Ulepszanie oprogramowania legacy', expertise3Text: '<span class="comparison-part"><strong>Przed:</strong> ręczne kroki i stary kod sprawiają, że każda zmiana jest powolna i ryzykowna.</span><span class="comparison-part"><strong>Po:</strong> powtarzalna automatyzacja i testy przyspieszają pracę oraz pozwalają bezpieczniej wdrażać zmiany.</span>',
    expertise3Item1: 'Automatyzacja procesów w Pythonie', expertise3Item2: 'Modernizacja legacy PHP', expertise3Item3: 'Sugestie AI zatwierdzane przez człowieka',
    workEyebrow: '02 / Wybrane realizacje', workTitle: 'Przed, po i mierzalne rezultaty.',
    workIntro: 'Te przykłady wyjaśniają, co było trudne, co zmieniłem i co teraz działa. Prywatny kod klientów i dane biznesowe pozostają prywatne; pokazuję tylko zweryfikowane dowody.',
    modernizationKicker: 'System legacy · Anonimowo', modernizationTitle: 'Bezpieczniejsze zmiany w krytycznym systemie legacy',
    modernizationText: '<span class="comparison-part"><strong>Przed:</strong> ważne reguły biznesowe były rozproszone między starym kodem PHP, bazą danych i zadaniami cyklicznymi. Nawet niewielka zmiana mogła uszkodzić inny proces.</span><span class="comparison-part"><strong>Po:</strong> zmapowałem ryzykowne miejsca, usunąłem niepotrzebne pliki oraz dodałem automatyczne testy, powtarzalne zmiany bazy danych, serwisy Docker i dwa kontrolowane środowiska wdrożeniowe. Zmiany można teraz sprawdzić przed wydaniem, zamiast polegać wyłącznie na testach ręcznych.</span>',
    measuredEvidence: 'Zmierzony rezultat', modernizationResult: '396 testów automatycznych · 1 108 sprawdzeń<br>29 udokumentowanych wydań<br>36,3% mniej plików w kodzie',
    modernizationNote: 'Weryfikacja w lipcu 2026: zero błędów i jeden pominięty test wymagający poświadczeń. Szczegóły biznesowe pozostają prywatne.',
    case1Kicker: 'Import danych klientów · Anonimowo', case1Title: 'Różne arkusze klientów, jeden importer',
    case1Text: '<span class="comparison-part"><strong>Przed:</strong> każda firma przesyłała pliki CSV, XLS lub XLSX z innymi kolumnami i układem. Nowy układ mógł zatrzymać import i wymagać zmiany kodu przez programistę.</span><span class="comparison-part"><strong>Po:</strong> zbudowałem jeden proces, który mapuje każdy plik do wspólnej struktury, pozwala operatorowi poprawić mapowanie i zapamiętuje udane układy na kolejne importy. Błędny wiersz trafia do logu zamiast zatrzymywać cały plik, a zadanie można zatrzymać i wznowić. Gdy tożsamość firmy jest niepewna, AI może zaproponować najbardziej prawdopodobne dopasowanie, ale człowiek musi je zatwierdzić przed zapisaniem wrażliwych danych.</span>',
    tagCanonicalModel: 'Elastyczne mapowanie kolumn', tagRegistry: 'Rejestr firm', tagHumanReview: 'Akceptacja człowieka', tagAudit: 'Log błędów', engineeringEvidence: 'Co teraz działa',
    case1Result: 'Plik klienta → mapowanie → wspólny format<br>Nowe układy bez zmian w kodzie<br>Sugestia AI + akceptacja człowieka', case1Note: 'Dopasowanie sprawdzono na 238 scenariuszach, a scalanie duplikatów obejmuje 25 testów. Nazwy klientów i wolumeny pozostają prywatne.',
    case2Kicker: 'Polskie e-fakturowanie · Anonimowo', case2Title: 'Integracja KSeF z systemem fakturowania legacy',
    case2Text: '<span class="comparison-part"><strong>Przed:</strong> system legacy w PHP nie potrafił komunikować się bezpośrednio z Krajowym Systemem e-Faktur (KSeF), który wymaga nowszego uwierzytelniania i formatu faktur.</span><span class="comparison-part"><strong>Po:</strong> dodałem osobny serwis w Pythonie, który przekształca dane faktury do XML FA(3), uwierzytelnia się w KSeF, wysyła dokument, sprawdza jego status i znajduje fakturę wysłaną wcześniej. Stary system może korzystać z KSeF bez ryzykownego przepisywania całej aplikacji.</span>',
    tagDuplicateRecovery: 'Wcześniej wysłane faktury', case2Result: 'System PHP → serwis Python → KSeF<br>Wysyłka faktur i sprawdzanie statusu<br>Wyszukiwanie wcześniej wysłanej faktury',
    case2Note: 'Integracja ma cztery endpointy API, generuje XML FA(3) i obejmuje cztery testy celowane. Szczegóły biznesowe pozostają prywatne.',
    case4Kicker: 'Produkt lojalnościowy dla klienta', case4Title: 'Spersonalizowane karty lojalnościowe dla kawiarni',
    case4Text: '<span class="comparison-part"><strong>Przed:</strong> dane klientów i programu lojalnościowego pozostawały w systemie sprzedażowym Dotykačka, bez spersonalizowanej karty w telefonie klienta.</span><span class="comparison-part"><strong>Po:</strong> połączyłem Dotykačka z aplikacją Django, która tworzy osobistą kartę lojalnościową kawiarni do Apple Wallet lub Google Wallet i daje obsłudze jedno miejsce do zarządzania programem.</span>',
    case4Result: 'Dotykačka → Django → portfel w telefonie<br>Apple Wallet + Google Wallet<br>Spersonalizowane karty klientów', case4Note: 'Opisuję publiczny efekt dla klienta; prywatny kod źródłowy i dane klientów pozostają prywatne.',
    awardTitle: 'CoinSwipe: 1. miejsce w bounty DragonSwap', awardText: 'CoinSwipe to aplikacja w Telegramie, która łączy odkrywanie memecoinów, handel nimi i poznawanie osób zainteresowanych tymi samymi projektami. Zbudowałem ją z zespołem podczas ETHWarsaw 2024; zdobyliśmy 1. miejsce w bounty DragonSwap, a 42 Warsaw później opisało projekt.', recognitionPost: 'Post 42 Warsaw',
    warsawMossAwardTitle: 'Eco Navigate: 3. miejsce', warsawMossAwardText: '<span class="comparison-part"><strong>Przed:</strong> nawigacje porównywały głównie czas i odległość.</span><span class="comparison-part"><strong>Po:</strong> Eco Navigate porównuje trasy piesze i rowerowe przez Warszawę na podstawie danych o pobliskich drzewach, parkach i innych terenach zielonych. Poleca bardziej zieloną opcję, pokazując jej długość, czas i dodatkowe nadłożenie drogi, a także wyświetla aktualne stacje jakości powietrza.</span>',
    viewProject: 'Zobacz projekt', viewDiploma: 'Zobacz dyplom', diplomaAlt: 'Dyplom Dmytra Kolidy za 3. miejsce podczas HumanTech Hack 2024',
    aboutEyebrow: '03 / O mnie', aboutTitle: 'Inżynieria oparta na doświadczeniu w prawdziwym biznesie.',
    aboutLead: 'Pracuję tam, gdzie oprogramowanie, serwery, dane i codzienne działania firmy muszą współpracować.',
    aboutText1: 'Moja praca obejmuje aplikacje Python i PHP, API, SQL, Linux, Docker, problemy produkcyjne i modernizację systemów legacy. Dziewięć lat prowadzenia własnego e-commerce nauczyło mnie oceniać technologię po tym, czy oszczędza czas, ogranicza ryzyko i działa niezawodnie, a nie po tym, czy jest nowa.',
    aboutText2: 'Najwięcej wnoszę, gdy punkt wyjścia jest niejasny, kilka systemów musi wymieniać dane, a ktoś powinien odpowiadać za całość od pierwszej rozmowy po wsparcie produkcji.',
    howIWork: 'Jak pracuję', workProcess: 'Analiza → projekt → wdrożenie → utrzymanie', currentFocus: 'Obecny kierunek', focusText: 'Integracje chmurowe i praca wspierana przez AI z akceptacją człowieka',
    mentoringEyebrow: '04 / Mentoring', mentoringTitle: 'Dobre pytania prowadzą do samodzielnego postępu.', mentoringText: 'Moje podejście wynika z mentoringu rówieśniczego w 42 Warsaw i mentoringu podczas HackYeah 2026. Pomagam osobom uczącym się doprecyzować cel, zrozumieć blokadę i samodzielnie wybrać kolejny krok.',
    mentoringCta: 'Zobacz, jak mentoruję', mentoringAlt: 'Dmytro wyjaśnia kod przy laptopie, a jego pies uważnie słucha', mentoringCaption: 'Tłumaczę kod najbardziej szczeremu recenzentowi.',
    toolkitEyebrow: '05 / Narzędzia', toolkitTitle: 'Narzędzia, których używam do budowania, łączenia i utrzymania systemów.', toolBuild: 'Tworzenie', toolIntegrate: 'Integracje', toolOperate: 'Utrzymanie',
    toolOperateList: 'Linux · Docker · Proxmox · CI/CD · Logi · Kopie zapasowe', toolData: 'Dane', toolDataList: 'PostgreSQL · MySQL · Redis · Walidacja · Mapowanie danych',
    toolExpanding: 'Rozwijam', toolBusiness: 'Biznes', toolBusinessList: 'Analiza potrzeb · Architektura · E-commerce · Mentoring · Odpowiedzialność',
    contactEyebrow: '06 / Kontakt', contactTitle: 'Masz trudny system do zintegrowania?', copyEmail: 'Kopiuj e-mail',
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
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const value = copy[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute('aria-label', value);
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

function closeMenu(returnFocus = false) {
  mobileMenu.classList.add('hidden');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', translations[currentLanguage].openMenu);
  if (returnFocus) menuButton.focus();
}

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? translations[currentLanguage].openMenu : translations[currentLanguage].closeMenu);
  mobileMenu.classList.toggle('hidden', isOpen);
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => closeMenu());
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') closeMenu(true);
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

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
document.documentElement.classList.add('app-ready');
