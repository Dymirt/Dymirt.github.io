const translations = {
  en: {
    metaTitle: 'Technical Mentoring & Advisory — Dmytro Kolida',
    metaDescription: 'Focused technical sessions for system integrations, legacy modernization, production problems, and AI-assisted workflows with human approval.',
    ogDescription: 'Understand the dependencies, compare the trade-offs, and leave with a safe next step.',
    skip: 'Skip to content', navLabel: 'Main navigation', homeLabel: 'Dmytro Kolida, home', navWork: 'Selected work', navAbout: 'About', navMentoring: 'Mentoring', navContact: 'Contact',
    heroEyebrow: 'Technical mentoring & advisory', heroTitle: 'Understand the system. Then change it with confidence.',
    heroText: 'I offer focused technical sessions built around a real system or decision. Together, we establish what depends on what, where the risk is, and what should happen next.',
    describeProblem: 'Describe the problem', viewWork: 'View engineering work',
    heroAlt: 'Dmytro Kolida discusses code with a dog beside a laptop', photoCaption: 'Explaining code to my most honest reviewer. If the idea cannot be made clear, it is not ready to be built.',
    experienceLabel: 'Areas of experience', metric1Title: 'Integrations', metric1Text: 'Systems & data flow', metric2Title: 'Legacy systems', metric2Text: 'Safe, staged change', metric3Title: 'Production', metric3Text: 'Failure & operations', metric4Title: '9 years', metric4Text: 'Business ownership',
    offerEyebrow: '01 / How I can help', offerTitle: 'Practical help with the difficult part.', offerIntro: 'The session starts with the real system, decision, or failure—not a generic presentation.',
    offer1Title: 'Integration review', offer1Text: 'We map how applications, databases, files, and external services exchange data: what starts the flow, where data changes, who owns each step, and what happens when one dependency fails.',
    offer1Result: 'A dependency map, clear responsibilities, and a practical integration plan.',
    offer2Title: 'Legacy modernization plan', offer2Text: '<strong>Before:</strong> every change feels risky and a full rewrite looks like the only option. <strong>After:</strong> we identify the smallest safe improvements, the tests required before release, and a way back if something fails.',
    offer2Result: 'What to change first, what to leave alone, and how to verify the result.',
    offer3Title: 'Engineering problem-solving', offer3Text: 'Bring a concrete design, debugging, automation, or production problem. We compare realistic options, failure paths, and operational consequences. Sensitive AI-assisted actions remain subject to human review and approval.',
    offer3Result: 'A decision you understand—not instructions you must trust blindly.', youLeaveWith: 'You leave with',
    audienceEyebrow: '02 / Who it is for', audienceTitle: 'For people who own the result, not just the ticket.',
    audience1: 'Engineers facing an unfamiliar integration, legacy, or production problem.', audience2: 'Technical founders and product owners whose tools and data no longer fit the business process.', audience3: 'Small teams that need an independent second opinion before a costly or risky change.',
    processEyebrow: '03 / Working process', processTitle: 'One real problem. One useful outcome.', processIntro: 'Only share material you can safely disclose. The goal is a decision and a written next step, not more abstraction.',
    process1Title: 'Bring the real problem', process1Text: 'A short description, safe code excerpt, sample data, diagram, or relevant logs.', process2Title: 'Map dependencies', process2Text: 'Follow the flow from input to outcome and name every important owner and failure point.',
    process3Title: 'Compare trade-offs', process3Text: 'Check assumptions and compare options by risk, effort, maintainability, and operations.', process4Title: 'Leave with next steps', process4Text: 'Receive a concise summary with decisions, risks, priorities, and a release or rollback checklist.',
    contactEyebrow: '04 / Start a conversation', contactTitle: 'Bring the difficult part.', contactText: 'Have a system that is hard to connect, change, or explain? Send me the context. I will tell you whether a focused working session is the right next step.', startConversation: 'Start a conversation',
    advisoryAlt: 'Dmytro Kolida thinking through a technical problem over coffee', footerText: 'Clear systems. Deliberate decisions.', backPortfolio: 'Back to portfolio',
    openMenu: 'Open menu', closeMenu: 'Close menu', switchLanguage: 'Switch to Polish'
  },
  pl: {
    metaTitle: 'Mentoring techniczny i konsultacje — Dmytro Kolida',
    metaDescription: 'Konkretne sesje techniczne dotyczące integracji systemów, modernizacji legacy, problemów produkcyjnych i pracy wspieranej przez AI z akceptacją człowieka.',
    ogDescription: 'Zrozum zależności, porównaj kompromisy i wyjdź z bezpiecznym kolejnym krokiem.',
    skip: 'Przejdź do treści', navLabel: 'Główna nawigacja', homeLabel: 'Dmytro Kolida, strona główna', navWork: 'Wybrane realizacje', navAbout: 'O mnie', navMentoring: 'Mentoring', navContact: 'Kontakt',
    heroEyebrow: 'Mentoring techniczny i konsultacje', heroTitle: 'Najpierw zrozum system. Potem zmieniaj go bezpiecznie.',
    heroText: 'Prowadzę skoncentrowane sesje techniczne wokół konkretnego systemu lub decyzji. Wspólnie ustalamy, co od czego zależy, gdzie znajduje się ryzyko i jaki powinien być kolejny krok.',
    describeProblem: 'Opisz problem', viewWork: 'Zobacz projekty inżynierskie',
    heroAlt: 'Dmytro Kolida omawia kod z psem przy laptopie', photoCaption: 'Tłumaczę kod najbardziej szczeremu recenzentowi. Jeśli pomysłu nie da się wyjaśnić jasno, nie jest jeszcze gotowy do wdrożenia.',
    experienceLabel: 'Obszary doświadczenia', metric1Title: 'Integracje', metric1Text: 'Systemy i przepływ danych', metric2Title: 'Systemy legacy', metric2Text: 'Bezpieczna zmiana etapami', metric3Title: 'Produkcja', metric3Text: 'Awarie i utrzymanie', metric4Title: '9 lat', metric4Text: 'Prowadzenie biznesu',
    offerEyebrow: '01 / Jak mogę pomóc', offerTitle: 'Praktyczna pomoc w najtrudniejszym miejscu.', offerIntro: 'Punktem wyjścia jest realny system, decyzja lub awaria — nie ogólna prezentacja.',
    offer1Title: 'Przegląd integracji', offer1Text: 'Rozpisujemy, jak aplikacje, bazy danych, pliki i usługi zewnętrzne wymieniają dane: co uruchamia przepływ, gdzie dane się zmieniają, kto odpowiada za każdy krok i co się dzieje, gdy jedna zależność zawiedzie.',
    offer1Result: 'Mapa zależności, jasny podział odpowiedzialności i praktyczny plan integracji.',
    offer2Title: 'Plan modernizacji systemu legacy', offer2Text: '<strong>Przed:</strong> każda zmiana wydaje się ryzykowna, a przepisanie wszystkiego może wyglądać na jedyne wyjście. <strong>Po:</strong> wskazujemy najmniejsze bezpieczne usprawnienia, testy potrzebne przed wdrożeniem oraz sposób wycofania zmiany, jeśli coś zawiedzie.',
    offer2Result: 'Co zmienić najpierw, czego na razie nie ruszać i jak sprawdzić efekt.',
    offer3Title: 'Wspólne rozwiązywanie problemów', offer3Text: 'Przynieś konkretny problem z projektem systemu, debugowaniem, automatyzacją lub produkcją. Porównujemy realne rozwiązania, scenariusze awarii i konsekwencje dla utrzymania. Wrażliwe działania wspierane przez AI nadal sprawdza i zatwierdza człowiek.',
    offer3Result: 'Decyzja, którą rozumiesz — nie instrukcja, której musisz ślepo zaufać.', youLeaveWith: 'Rezultat',
    audienceEyebrow: '02 / Dla kogo', audienceTitle: 'Dla osób, które odpowiadają za rezultat, nie tylko za zadanie.',
    audience1: 'Dla inżyniera mierzącego się z nowym problemem integracyjnym, legacy lub produkcyjnym.', audience2: 'Dla technicznego założyciela lub product ownera, którego narzędzia i dane przestały pasować do procesu biznesowego.', audience3: 'Dla małego zespołu potrzebującego niezależnej opinii przed kosztowną lub ryzykowną zmianą.',
    processEyebrow: '03 / Proces współpracy', processTitle: 'Jeden realny problem. Jeden użyteczny rezultat.', processIntro: 'Udostępniasz tylko materiały, które możesz bezpiecznie przekazać. Celem jest decyzja i zapisany kolejny krok, a nie kolejna warstwa abstrakcji.',
    process1Title: 'Przynieś realny problem', process1Text: 'Krótki opis, bezpieczny fragment kodu, przykładowe dane, diagram lub odpowiednie logi.', process2Title: 'Mapujemy zależności', process2Text: 'Śledzimy przepływ od danych wejściowych do rezultatu i nazywamy właścicieli oraz punkty awarii.',
    process3Title: 'Porównujemy kompromisy', process3Text: 'Sprawdzamy założenia i porównujemy opcje według ryzyka, nakładu pracy, utrzymania i działania na produkcji.', process4Title: 'Ustalamy kolejne kroki', process4Text: 'Otrzymujesz krótkie podsumowanie decyzji, ryzyk, priorytetów oraz listę kontroli dla wdrożenia i wycofania zmiany.',
    contactEyebrow: '04 / Rozpocznij rozmowę', contactTitle: 'Przynieś najtrudniejszy fragment.', contactText: 'Masz system, który trudno połączyć, zmienić lub wyjaśnić? Prześlij mi kontekst. Powiem Ci, czy skoncentrowana sesja robocza będzie właściwym kolejnym krokiem.', startConversation: 'Rozpocznij rozmowę',
    advisoryAlt: 'Dmytro Kolida analizuje problem techniczny przy kawie', footerText: 'Jasne systemy. Świadome decyzje.', backPortfolio: 'Wróć do portfolio',
    openMenu: 'Otwórz menu', closeMenu: 'Zamknij menu', switchLanguage: 'Przełącz na język angielski'
  }
};

const menuButton = document.querySelector('#menuButton');
const mobileMenu = document.querySelector('#mobileMenu');
const languageToggle = document.querySelector('#languageToggle');
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
  menuButton.setAttribute('aria-label', menuButton.getAttribute('aria-expanded') === 'true' ? copy.closeMenu : copy.openMenu);
  localStorage.setItem('portfolio-language', language);
}

function closeMenu(returnFocus = false) {
  mobileMenu.classList.add('hidden');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', translations[currentLanguage].openMenu);
  if (returnFocus) menuButton.focus();
}

languageToggle.addEventListener('click', () => applyLanguage(currentLanguage === 'en' ? 'pl' : 'en'));

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? translations[currentLanguage].openMenu : translations[currentLanguage].closeMenu);
  mobileMenu.classList.toggle('hidden', isOpen);
});

mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
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

document.querySelector('#year').textContent = new Date().getFullYear();
applyLanguage(currentLanguage);
document.documentElement.classList.add('app-ready');
