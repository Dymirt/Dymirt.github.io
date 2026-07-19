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
    case4Kicker: 'Loyalty-card platform · Public source', case4Title: 'A loyalty-card platform designed and built from scratch',
    case4Text: '<span class="comparison-part"><strong>Before:</strong> I designed and wrote the first version from scratch for one business. It handled customer registration, physical cards, Dotykačka customer synchronization, Wallet cards, and email, but all customers, settings, and integrations belonged to one setup.</span><span class="comparison-part"><strong>After:</strong> I then developed it into a Django platform that keeps every business separate. A customer scans a physical card; the system assigns it, records consent, synchronizes the customer with Dotykačka, prepares a personal Apple Wallet or Google Wallet card, updates Brevo, and sends the card by email. Each business has separate branding, inventory, users, and encrypted integration credentials. If an external service fails temporarily, background jobs can retry safely.</span>',
    case4Result: '267 customer records preserved<br>Complete 600-card inventory preserved<br>228 automated tests · SQLite + MariaDB', case4Note: 'The technical expansion into a platform is complete. Adding more businesses remains disabled until final human, provider, and printing checks. Public source is available; customer data, credentials, and generated Wallet cards stay private.', viewPublicSource: 'View public source',
    awardTitle: 'CoinSwipe: 1st place in the DragonSwap bounty', awardText: 'CoinSwipe is a Telegram app that combines discovering memecoins, trading them, and meeting people interested in the same coins. I built it with my team during ETHWarsaw 2024; we won first place in the DragonSwap bounty, and 42 Warsaw later featured the project.', recognitionPost: '42 Warsaw recognition',
    warsawMossAwardTitle: 'Eco Navigate: 3rd place', warsawMossAwardText: '<span class="comparison-part"><strong>Before:</strong> route planners mainly compared time and distance.</span><span class="comparison-part"><strong>After:</strong> Eco Navigate compares walking and cycling routes through Warsaw using data about nearby trees, parks, and other green areas. It recommends a greener option while showing its distance, time, and extra detour, and it also displays live air-quality stations.</span>',
    viewProject: 'View project', viewDiploma: 'View diploma', diplomaAlt: 'HumanTech Hack 2024 third-place diploma for Dmytro Kolida',
    aboutEyebrow: '03 / About', aboutTitle: 'Engineering guided by real business experience.',
    aboutLead: 'I work where software, servers, data, and day-to-day business operations have to work together.',
    aboutText1: 'My engineering work covers Python and PHP applications, APIs, SQL, Linux, Docker, production problems, and legacy modernization. Nine years of running my own e-commerce business taught me to judge technology by whether it saves time, reduces risk, and works reliably, not by whether it is new.',
    aboutText2: 'I am most useful when the starting point is unclear, several systems must exchange data, and someone needs to take responsibility from the first discussion through production support.',
    howIWork: 'How I work', workProcess: 'Discover → design → deliver → operate', currentFocus: 'Current focus', focusText: 'Cloud integrations and AI-assisted work with human approval',
    mentoringEyebrow: '04 / Mentoring', mentoringTitle: 'Good questions create independent progress.', mentoringText: 'As a Space Eagle at 42 Warsaw, I mentored new participants during the four-week Piscine, an intensive, on-campus introduction to peer-to-peer and project-based learning. I helped them reason through problems and find their own next steps. My experience also includes mentoring at HackYeah 2026.',
    mentoringCta: 'See my mentoring approach', mentoringAlt: 'Dmytro explaining code beside a laptop while his dog listens', mentoringCaption: 'Explaining code to my most honest reviewer.',
    toolkitEyebrow: '05 / Toolkit', toolkitTitle: 'Tools I use to build, connect, and run systems.', toolBuild: 'Build', toolIntegrate: 'Integrate', toolOperate: 'Operate',
    toolOperateList: 'Linux · Docker · Proxmox · CI/CD · Logging · Backups', toolData: 'Data', toolDataList: 'PostgreSQL · MySQL · Redis · Validation · Data mapping',
    toolExpanding: 'Expanding', toolBusiness: 'Business', toolBusinessList: 'Discovery · Architecture · E-commerce · Mentoring · Ownership',
    contactEyebrow: '06 / Contact', contactTitle: 'Have a difficult system to connect?', copyEmail: 'Copy email',
    viewCv: 'View CV (PL)',
    footerText: 'Built for clarity, reliability, and the web.', backTop: 'Back to top', emailCopied: 'Email copied',
    openMenu: 'Open menu', closeMenu: 'Close menu', languageLabel: 'Language selection'
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
    case4Kicker: 'Platforma kart lojalnościowych · Publiczny kod', case4Title: 'Platforma kart lojalnościowych zaprojektowana i napisana od zera',
    case4Text: '<span class="comparison-part"><strong>Przed:</strong> pierwszą wersję zaprojektowałem i napisałem od zera dla jednej firmy. Obsługiwała rejestrację klientów, karty fizyczne, synchronizację klientów z systemem Dotykačka, karty Wallet i e-mail, ale wszystkie dane klientów, ustawienia i integracje korzystały z jednej konfiguracji.</span><span class="comparison-part"><strong>Po:</strong> następnie rozwinąłem ją w platformę Django, która oddziela dane każdej firmy. Klient skanuje kartę fizyczną, a system przypisuje ją, zapisuje zgodę, synchronizuje dane klienta z systemem Dotykačka, przygotowuje osobistą kartę Apple Wallet lub Google Wallet, aktualizuje kontakt w Brevo i wysyła kartę e-mailem. Każda firma ma osobny wygląd, pulę kart, użytkowników i zaszyfrowane dane dostępowe do integracji. Gdy usługa zewnętrzna chwilowo nie działa, zadanie może zostać bezpiecznie ponowione.</span>',
    case4Result: 'Zachowano 267 rekordów klientów<br>Zachowano pełną pulę 600 kart fizycznych<br>228 testów automatycznych · SQLite + MariaDB', case4Note: 'Techniczne rozwinięcie systemu w platformę jest ukończone. Dodawanie kolejnych firm pozostaje wyłączone do czasu końcowego odbioru oraz testów integracji i druku. Kod źródłowy jest publiczny; dane klientów, dane dostępowe i wygenerowane karty Wallet pozostają prywatne.', viewPublicSource: 'Zobacz publiczny kod',
    awardTitle: 'CoinSwipe: 1. miejsce w bounty DragonSwap', awardText: 'CoinSwipe to aplikacja w Telegramie, która łączy odkrywanie memecoinów, handel nimi i poznawanie osób zainteresowanych tymi samymi projektami. Zbudowałem ją z zespołem podczas ETHWarsaw 2024; zdobyliśmy 1. miejsce w bounty DragonSwap, a 42 Warsaw później opisało projekt.', recognitionPost: 'Post 42 Warsaw',
    warsawMossAwardTitle: 'Eco Navigate: 3. miejsce', warsawMossAwardText: '<span class="comparison-part"><strong>Przed:</strong> nawigacje porównywały głównie czas i odległość.</span><span class="comparison-part"><strong>Po:</strong> Eco Navigate porównuje trasy piesze i rowerowe przez Warszawę na podstawie danych o pobliskich drzewach, parkach i innych terenach zielonych. Poleca bardziej zieloną opcję, pokazując jej długość, czas i dodatkowe nadłożenie drogi, a także wyświetla aktualne stacje jakości powietrza.</span>',
    viewProject: 'Zobacz projekt', viewDiploma: 'Zobacz dyplom', diplomaAlt: 'Dyplom Dmytra Kolidy za 3. miejsce podczas HumanTech Hack 2024',
    aboutEyebrow: '03 / O mnie', aboutTitle: 'Inżynieria oparta na doświadczeniu w prawdziwym biznesie.',
    aboutLead: 'Pracuję tam, gdzie oprogramowanie, serwery, dane i codzienne działania firmy muszą współpracować.',
    aboutText1: 'Moja praca obejmuje aplikacje Python i PHP, API, SQL, Linux, Docker, problemy produkcyjne i modernizację systemów legacy. Dziewięć lat prowadzenia własnego e-commerce nauczyło mnie oceniać technologię po tym, czy oszczędza czas, ogranicza ryzyko i działa niezawodnie, a nie po tym, czy jest nowa.',
    aboutText2: 'Najwięcej wnoszę, gdy punkt wyjścia jest niejasny, kilka systemów musi wymieniać dane, a ktoś powinien odpowiadać za całość od pierwszej rozmowy po wsparcie produkcji.',
    howIWork: 'Jak pracuję', workProcess: 'Analiza → projekt → wdrożenie → utrzymanie', currentFocus: 'Obecny kierunek', focusText: 'Integracje chmurowe i praca wspierana przez AI z akceptacją człowieka',
    mentoringEyebrow: '04 / Mentoring', mentoringTitle: 'Dobre pytania prowadzą do samodzielnego postępu.', mentoringText: 'Jako Space Eagle w 42 Warsaw wspierałem nowe osoby podczas czterotygodniowej Piscine, intensywnego, stacjonarnego wprowadzenia do nauki peer-to-peer i pracy projektowej. Pomagałem im przeanalizować problemy i samodzielnie znaleźć kolejne kroki. Moje doświadczenie obejmuje również mentoring podczas HackYeah 2026.',
    mentoringCta: 'Zobacz, jak mentoruję', mentoringAlt: 'Dmytro wyjaśnia kod przy laptopie, a jego pies uważnie słucha', mentoringCaption: 'Tłumaczę kod najbardziej szczeremu recenzentowi.',
    toolkitEyebrow: '05 / Narzędzia', toolkitTitle: 'Narzędzia, których używam do budowania, łączenia i utrzymania systemów.', toolBuild: 'Tworzenie', toolIntegrate: 'Integracje', toolOperate: 'Utrzymanie',
    toolOperateList: 'Linux · Docker · Proxmox · CI/CD · Logi · Kopie zapasowe', toolData: 'Dane', toolDataList: 'PostgreSQL · MySQL · Redis · Walidacja · Mapowanie danych',
    toolExpanding: 'Rozwijam', toolBusiness: 'Biznes', toolBusinessList: 'Analiza potrzeb · Architektura · E-commerce · Mentoring · Odpowiedzialność',
    contactEyebrow: '06 / Kontakt', contactTitle: 'Masz trudny system do zintegrowania?', copyEmail: 'Kopiuj e-mail',
    viewCv: 'Zobacz CV (PL)',
    footerText: 'Zbudowane z myślą o przejrzystości, niezawodności i sieci.', backTop: 'Wróć na górę', emailCopied: 'Adres e-mail skopiowany',
    openMenu: 'Otwórz menu', closeMenu: 'Zamknij menu', languageLabel: 'Wybór języka'
  },
  it: {
    metaTitle: 'Dmytro Kolida, Solutions & Integration Engineer',
    metaDescription: 'Dmytro Kolida, ingegnere di soluzioni e integrazioni. Collego software aziendali, dati e servizi esterni, modernizzo sistemi legacy e ne garantisco l’operatività.',
    ogDescription: 'Collego software aziendali, dati e servizi esterni per rendere il lavoro quotidiano più rapido, più sicuro e con meno attività manuali.',
    skip: 'Vai al contenuto', navLabel: 'Navigazione principale', homeLabel: 'Dmytro Kolida, pagina iniziale', navExpertise: 'Competenze', navWork: 'Progetti selezionati', navAbout: 'Chi sono', navMentoring: 'Mentoring', navContact: 'Contatti',
    availability: 'Disponibile per nuove opportunità', portraitAlt: 'Dmytro Kolida in abito grigio davanti a uno sfondo scuro da studio', location: 'Nei pressi di Varsavia, Polonia',
    context: 'Ingegneria + operatività + contesto aziendale', ownership: 'RESPONSABILITÀ: END → END', role: 'Solutions & Integration Engineer',
    heroTitle: 'Sistemi che<br><span class="text-acid">funzionano davvero.</span>',
    heroDescription: 'Collego software aziendali, dati e servizi esterni per rendere il lavoro quotidiano più rapido, più sicuro e con meno attività manuali, dalla prima analisi del problema fino al rilascio e al supporto.',
    exploreWork: 'Scopri i progetti selezionati', startConversation: 'Parliamone',
    metricBackend: 'Sistemi backend', metricProduction: 'Gestione dei sistemi in produzione', metricIntegration: 'Integrazioni e dati', nineYears: '9 anni', metricOwnership: 'Gestione di un e-commerce',
    expertiseEyebrow: '01 / Competenze', expertiseTitle: 'Un solo ingegnere per l’intero sistema.',
    expertiseIntro: 'Tu spieghi cosa deve funzionare. Io individuo i sistemi coinvolti, progetto e realizzo l’integrazione, la porto in produzione e ne resto responsabile quando qualcosa non funziona.',
    expertise1Title: 'Integrare sistemi', expertise1Text: '<span class="comparison-part"><strong>Prima:</strong> le persone copiano gli stessi dati tra applicazioni o aggirano sistemi che non comunicano tra loro.</span><span class="comparison-part"><strong>Dopo:</strong> le applicazioni scambiano automaticamente i dati corretti tramite API, database o file.</span>',
    expertise1Item1: 'API e servizi esterni', expertise1Item2: 'Importazione da fogli di calcolo e database', expertise1Item3: 'Validazione, log e tentativi controllati',
    expertise2Title: 'Mantenere operativi i sistemi', expertise2Text: '<span class="comparison-part"><strong>Prima:</strong> quando qualcosa non funziona, non è chiaro se la causa sia il codice, un container, il database o la rete.</span><span class="comparison-part"><strong>Dopo:</strong> il sistema è monitorato, dispone di backup ed è più semplice da diagnosticare e ripristinare.</span>',
    expertise2Item2: 'Monitoraggio e risoluzione dei problemi', expertise2Item3: 'Rilasci, backup e sicurezza',
    expertise3Title: 'Modernizzare software legacy', expertise3Text: '<span class="comparison-part"><strong>Prima:</strong> procedure manuali e codice datato rendono ogni modifica lenta e rischiosa.</span><span class="comparison-part"><strong>Dopo:</strong> automazione ripetibile e test velocizzano il lavoro e rendono più sicuro il rilascio delle modifiche.</span>',
    expertise3Item1: 'Automazione dei processi con Python', expertise3Item2: 'Modernizzazione di sistemi PHP legacy', expertise3Item3: 'Suggerimenti dell’IA con approvazione umana',
    workEyebrow: '02 / Progetti selezionati', workTitle: 'Prima, dopo e risultati misurabili.',
    workIntro: 'Questi esempi spiegano cosa era difficile, cosa ho cambiato e cosa funziona oggi. Il codice privato dei clienti e i dati aziendali restano riservati; mostro solo risultati verificati.',
    modernizationKicker: 'Sistema legacy · Anonimizzato', modernizationTitle: 'Rendere più sicure le modifiche a un sistema legacy critico',
    modernizationText: '<span class="comparison-part"><strong>Prima:</strong> importanti regole aziendali erano distribuite tra vecchio codice PHP, regole del database e job pianificati. Anche una piccola modifica poteva compromettere un altro processo.</span><span class="comparison-part"><strong>Dopo:</strong> ho mappato le aree a rischio, rimosso i file obsoleti e aggiunto test automatici, migrazioni del database ripetibili, servizi Docker e due ambienti di deployment controllati. Ora le modifiche possono essere verificate prima del rilascio, invece di affidarsi soltanto ai test manuali.</span>',
    measuredEvidence: 'Risultati misurati', modernizationResult: '396 test automatizzati · 1.108 verifiche<br>29 rilasci documentati<br>36,3% di file in meno nel codebase',
    modernizationNote: 'Verifica di luglio 2026: zero errori e un test che richiede credenziali è stato saltato. I dettagli aziendali restano riservati.',
    case1Kicker: 'Importazione dei dati dei clienti · Anonimizzato', case1Title: 'Fogli di calcolo diversi, un unico importatore',
    case1Text: '<span class="comparison-part"><strong>Prima:</strong> ogni azienda inviava file CSV, XLS o XLSX con colonne e strutture diverse. Un nuovo formato poteva bloccare l’importazione e richiedere a un programmatore di modificare il codice.</span><span class="comparison-part"><strong>Dopo:</strong> ho creato un unico processo che mappa ogni file in una struttura comune, consente all’operatore di correggere la mappatura e memorizza le configurazioni che hanno funzionato per riutilizzarle nelle importazioni successive. Una riga non valida viene registrata nel log invece di bloccare l’intero file, mentre il processo può essere interrotto e ripreso. Se non è chiaro a quale azienda appartengano i dati, l’IA può suggerire la corrispondenza più probabile, ma una persona deve approvarla prima che vengano salvati dati sensibili.</span>',
    tagCanonicalModel: 'Mappatura flessibile delle colonne', tagRegistry: 'Registro delle aziende', tagHumanReview: 'Approvazione umana', tagAudit: 'Log degli errori', engineeringEvidence: 'Cosa funziona oggi',
    case1Result: 'File del cliente → mappatura → formato comune<br>Nuovi formati senza modifiche al codice<br>Suggerimento dell’IA + approvazione umana', case1Note: 'La logica di abbinamento è stata verificata in 238 scenari e 25 test mirati coprono la fusione dei duplicati. I nomi e i volumi dei clienti sono omessi.',
    case2Kicker: 'Fatturazione elettronica polacca · Anonimizzato', case2Title: 'Collegare KSeF a un sistema di fatturazione legacy',
    case2Text: '<span class="comparison-part"><strong>Prima:</strong> il sistema PHP legacy non poteva comunicare direttamente con il Sistema nazionale polacco di fatturazione elettronica (KSeF), che richiede metodi di autenticazione e formati di fattura più recenti.</span><span class="comparison-part"><strong>Dopo:</strong> ho aggiunto un servizio Python separato che converte i dati delle fatture in XML FA(3), si autentica con KSeF, invia le fatture, ne controlla lo stato e individua una fattura già inviata. Il vecchio sistema può ora utilizzare KSeF senza una rischiosa riscrittura dell’intera applicazione.</span>',
    tagDuplicateRecovery: 'Fatture già inviate', case2Result: 'PHP legacy → servizio Python → KSeF<br>Invio fatture &amp; verifica dello stato<br>Ricerca di una fattura già inviata',
    case2Note: 'L’integrazione comprende quattro endpoint API, la generazione di XML FA(3) e quattro test mirati. I dettagli aziendali restano riservati.',
    case4Kicker: 'Piattaforma per carte fedeltà · Codice pubblico', case4Title: 'Una piattaforma per carte fedeltà progettata e sviluppata da zero',
    case4Text: '<span class="comparison-part"><strong>Prima:</strong> ho progettato e sviluppato da zero la prima versione per una sola azienda. Gestiva la registrazione dei clienti, le carte fisiche, la sincronizzazione dei clienti con Dotykačka, le carte Wallet e le e-mail, ma tutti i clienti, le impostazioni e le integrazioni erano gestiti da un’unica configurazione.</span><span class="comparison-part"><strong>Dopo:</strong> l’ho sviluppata ulteriormente come piattaforma Django che mantiene separati i dati di ogni azienda. Un cliente scansiona una carta fisica; il sistema la assegna, registra il consenso, sincronizza il cliente con Dotykačka, genera una carta personalizzata Apple Wallet o Google Wallet, aggiorna Brevo e invia la carta tramite e-mail. Ogni azienda ha una propria identità visiva, un inventario dedicato, utenti distinti e credenziali di integrazione crittografate. Se un servizio esterno non è temporaneamente disponibile, i job in background possono ripetere l’operazione in sicurezza.</span>',
    case4Result: 'Conservati 267 record di clienti<br>Conservato l’intero inventario di 600 carte<br>228 test automatizzati · SQLite + MariaDB', case4Note: 'La trasformazione tecnica in piattaforma è completa. L’attivazione di nuove aziende resta disabilitata fino al collaudo finale del primo cliente e alle verifiche in produzione delle integrazioni esterne e del processo di stampa. Il codice sorgente è pubblico; i dati dei clienti, le credenziali e le carte Wallet generate restano riservati.', viewPublicSource: 'Vedi il codice pubblico',
    awardTitle: 'CoinSwipe: 1° posto nel bounty DragonSwap', awardText: 'CoinSwipe è un’app Telegram che unisce la scoperta di memecoin, il trading e la possibilità di conoscere persone interessate agli stessi token. L’ho sviluppata con il mio team durante ETHWarsaw 2024; abbiamo vinto il primo posto nel bounty DragonSwap e in seguito 42 Warsaw ha presentato il progetto.', recognitionPost: 'Post di 42 Warsaw',
    warsawMossAwardTitle: 'Eco Navigate: 3° posto', warsawMossAwardText: '<span class="comparison-part"><strong>Prima:</strong> i pianificatori di percorso confrontavano soprattutto tempo e distanza.</span><span class="comparison-part"><strong>Dopo:</strong> Eco Navigate confronta percorsi a piedi e in bicicletta a Varsavia utilizzando dati su alberi, parchi e altre aree verdi nelle vicinanze. Consiglia l’opzione più verde mostrandone distanza, tempo e deviazione aggiuntiva e mostra anche i dati in tempo reale delle stazioni che monitorano la qualità dell’aria.</span>',
    viewProject: 'Vedi il progetto', viewDiploma: 'Vedi il diploma', diplomaAlt: 'Diploma di Dmytro Kolida per il terzo posto a HumanTech Hack 2024',
    aboutEyebrow: '03 / Chi sono', aboutTitle: 'Ingegneria guidata dall’esperienza concreta d’impresa.',
    aboutLead: 'Lavoro nei contesti in cui software, server, dati e operazioni aziendali quotidiane devono funzionare insieme.',
    aboutText1: 'Il mio lavoro comprende applicazioni Python e PHP, API, SQL, Linux, Docker, problemi in produzione e modernizzazione di sistemi legacy. Nove anni alla guida del mio e-commerce mi hanno insegnato a valutare la tecnologia in base alla sua capacità di far risparmiare tempo, ridurre i rischi e funzionare in modo affidabile, non in base a quanto sia nuova.',
    aboutText2: 'Il mio contributo è più efficace quando il punto di partenza non è chiaro, più sistemi devono scambiarsi dati e serve qualcuno che si assuma la responsabilità dalla prima conversazione fino al supporto in produzione.',
    howIWork: 'Come lavoro', workProcess: 'Analisi → progettazione → rilascio → gestione', currentFocus: 'Focus attuale', focusText: 'Integrazioni cloud e lavoro assistito dall’IA con approvazione umana',
    mentoringEyebrow: '04 / Mentoring', mentoringTitle: 'Le domande giuste aiutano a progredire in autonomia.', mentoringText: 'Come Space Eagle a 42 Warsaw, ho affiancato i nuovi partecipanti durante la Piscine di quattro settimane, un percorso intensivo in presenza basato sull’apprendimento tra pari e sui progetti. Li ho aiutati a ragionare sui problemi e a individuare autonomamente i passi successivi. Ho inoltre svolto attività di mentoring durante HackYeah 2026.',
    mentoringCta: 'Scopri il mio approccio al mentoring', mentoringAlt: 'Dmytro spiega il codice accanto a un laptop mentre il suo cane ascolta', mentoringCaption: 'Spiego il codice al mio revisore più sincero.',
    toolkitEyebrow: '05 / Strumenti', toolkitTitle: 'Gli strumenti che utilizzo per sviluppare, integrare e gestire sistemi.', toolBuild: 'Sviluppo', toolIntegrate: 'Integrazione', toolOperate: 'Gestione',
    toolOperateList: 'Linux · Docker · Proxmox · CI/CD · Logging · Backup', toolData: 'Dati', toolDataList: 'PostgreSQL · MySQL · Redis · Validazione · Mappatura dei dati',
    toolExpanding: 'In evoluzione', toolBusiness: 'Business', toolBusinessList: 'Analisi dei requisiti · Architettura · E-commerce · Mentoring · Responsabilità end to end',
    contactEyebrow: '06 / Contatti', contactTitle: 'Hai un sistema complesso da integrare?', copyEmail: 'Copia l’e-mail',
    viewCv: 'Vedi il CV (PL)',
    footerText: 'Costruito per essere chiaro, affidabile e funzionare bene sul web.', backTop: 'Torna in alto', emailCopied: 'Indirizzo e-mail copiato',
    openMenu: 'Apri il menu', closeMenu: 'Chiudi il menu', languageLabel: 'Selezione della lingua'
  }
};

const menuButton = document.querySelector('#menuButton');
const mobileMenu = document.querySelector('#mobileMenu');
const languageOptions = [...document.querySelectorAll('[data-language]')];
const copyButton = document.querySelector('#copyEmail');
const toast = document.querySelector('#toast');
const supportedLanguages = Object.keys(translations);
let storedLanguage = null;
try {
  storedLanguage = localStorage.getItem('portfolio-language');
} catch {
  storedLanguage = null;
}
const browserLanguage = (navigator.languages || [navigator.language])
  .map((value) => value.toLowerCase().split('-')[0])
  .find((value) => supportedLanguages.includes(value)) || 'en';
let currentLanguage = supportedLanguages.includes(storedLanguage) ? storedLanguage : (supportedLanguages.includes(browserLanguage) ? browserLanguage : 'en');

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : 'en';
  const copy = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
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

  languageOptions.forEach((option) => option.setAttribute('aria-pressed', String(option.dataset.language === currentLanguage)));
  const menuOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-label', menuOpen ? copy.closeMenu : copy.openMenu);
  try {
    localStorage.setItem('portfolio-language', currentLanguage);
  } catch {
    // Keep the selected language for this page even when browser storage is unavailable.
  }
}

languageOptions.forEach((option) => option.addEventListener('click', () => applyLanguage(option.dataset.language)));

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
