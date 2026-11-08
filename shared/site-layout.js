(() => {
  const copy = {
    en:{navLabel:'Main navigation',homeLabel:'Dmytro Kolida, home',expertise:'Expertise',work:'Selected work',about:'Experience',mentoring:'Mentoring',contact:'Contact',languageLabel:'Language selection',openMenu:'Open menu',closeMenu:'Close menu',footer:'Built for clarity, reliability, and the web.',backTop:'Back to top'},
    pl:{navLabel:'Główna nawigacja',homeLabel:'Dmytro Kolida, strona główna',expertise:'Kompetencje',work:'Wybrane realizacje',about:'Doświadczenie',mentoring:'Mentoring',contact:'Kontakt',languageLabel:'Wybór języka',openMenu:'Otwórz menu',closeMenu:'Zamknij menu',footer:'Przejrzystość, niezawodność i użyteczność.',backTop:'Na górę'},
    it:{navLabel:'Navigazione principale',homeLabel:'Dmytro Kolida, pagina iniziale',expertise:'Competenze',work:'Progetti selezionati',about:'Esperienza',mentoring:'Mentoring',contact:'Contatti',languageLabel:'Selezione della lingua',openMenu:'Apri il menu',closeMenu:'Chiudi il menu',footer:'Chiarezza, affidabilità e utilità sul web.',backTop:'Torna in alto'}
  };
  const button = document.getElementById('menuButton');
  const menu = document.getElementById('mobileMenu');
  let language;
  try { language = localStorage.getItem('portfolio-language'); } catch {}
  language = copy[language] ? language : (navigator.languages || [navigator.language]).map(value => value.split('-')[0].toLowerCase()).find(value => copy[value]) || 'en';
  function applyLanguage(value) {
    language = copy[value] ? value : 'en';
    document.documentElement.lang = language;
    document.querySelectorAll('[data-shell-text]').forEach(element => {element.textContent = copy[language][element.dataset.shellText];});
    document.querySelectorAll('[data-shell-aria]').forEach(element => {element.setAttribute('aria-label',copy[language][element.dataset.shellAria]);});
    document.querySelectorAll('[data-language]').forEach(element => element.setAttribute('aria-pressed',String(element.dataset.language === language)));
    button.setAttribute('aria-label',copy[language][menu.hidden ? 'openMenu' : 'closeMenu']);
    try { localStorage.setItem('portfolio-language',language); } catch {}
    document.dispatchEvent(new CustomEvent('portfolio-language',{detail:{language}}));
  }
  function closeMenu(focus = false) {
    menu.hidden = true;
    button.setAttribute('aria-expanded','false');
    button.setAttribute('aria-label',copy[language].openMenu);
    if (focus) button.focus();
  }
  button.addEventListener('click',() => {
    menu.hidden = !menu.hidden;
    button.setAttribute('aria-expanded',String(!menu.hidden));
    button.setAttribute('aria-label',copy[language][menu.hidden ? 'openMenu' : 'closeMenu']);
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click',() => closeMenu()));
  document.addEventListener('keydown',event => {if (event.key === 'Escape' && !menu.hidden) closeMenu(true);});
  matchMedia('(min-width:1101px)').addEventListener('change',event => {if (event.matches) closeMenu();});
  document.querySelectorAll('[data-language]').forEach(element => element.addEventListener('click',() => applyLanguage(element.dataset.language)));
  const page = document.body.dataset.sitePage;
  document.querySelectorAll('[data-page]').forEach(link => {if (link.dataset.page === page) link.setAttribute('aria-current','page');});
  document.getElementById('year').textContent = new Date().getFullYear();
  applyLanguage(language);
})();
