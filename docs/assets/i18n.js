(() => {
  const SUPPORTED = [
    { code: 'en', label: 'English', dir: 'ltr' },
    { code: 'zh-CN', label: '简体中文', dir: 'ltr' },
    { code: 'zh-TW', label: '繁體中文', dir: 'ltr' },
    { code: 'ja', label: '日本語', dir: 'ltr' },
    { code: 'ko', label: '한국어', dir: 'ltr' },
    { code: 'vi', label: 'Tiếng Việt', dir: 'ltr' },
    { code: 'ar', label: 'العربية', dir: 'rtl' },
    { code: 'fr', label: 'Français', dir: 'ltr' },
    { code: 'es', label: 'Español', dir: 'ltr' }
  ];

  function mapLang(raw) {
    if (!raw) return 'en';
    const lc = raw.toLowerCase();
    if (lc.startsWith('zh-tw') || lc.startsWith('zh-hk') || lc.startsWith('zh-hant')) return 'zh-TW';
    if (lc.startsWith('zh') || lc.startsWith('cmn') || lc.startsWith('zh-hans')) return 'zh-CN';
    if (lc.startsWith('ja')) return 'ja';
    if (lc.startsWith('ko')) return 'ko';
    if (lc.startsWith('vi')) return 'vi';
    if (lc.startsWith('ar')) return 'ar';
    if (lc.startsWith('fr')) return 'fr';
    if (lc.startsWith('es')) return 'es';
    return 'en';
  }

  async function loadDict(code) {
    try {
      const res = await fetch(`/assets/i18n/${code}.json`);
      if (!res.ok) throw new Error(res.statusText);
      return await res.json();
    } catch (e) {
      if (code !== 'en') return loadDict('en');
      return {};
    }
  }

  function applyDict(dict) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    // Placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });
  }

  function setDir(lang) {
    const langCfg = SUPPORTED.find(l => l.code === lang) || SUPPORTED[0];
    document.documentElement.lang = lang;
    document.documentElement.dir = langCfg.dir || 'ltr';
  }

  function buildSelector(current) {
    const container = document.getElementById('langSwitcher');
    if (!container) return;
    const sel = document.createElement('select');
    sel.id = 'langSelect';
    sel.className = 'px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-sm';
    SUPPORTED.forEach(l => {
      const opt = document.createElement('option');
      opt.value = l.code; opt.textContent = l.label; if (l.code === current) opt.selected = true; sel.appendChild(opt);
    });
    sel.addEventListener('change', async () => {
      const lang = sel.value; localStorage.setItem('lang', lang); setDir(lang); const dict = await loadDict(lang); window.__i18n = { lang, dict, apply: ()=>applyDict(dict) }; applyDict(dict);
    });
    container.innerHTML = ''; container.appendChild(sel);
  }

  window.addEventListener('DOMContentLoaded', async () => {
    const saved = localStorage.getItem('lang');
    const detected = mapLang(navigator.language || (navigator.languages && navigator.languages[0]));
    const lang = saved || detected || 'en';
    setDir(lang);
    buildSelector(lang);
    const dict = await loadDict(lang);
    window.__i18n = { lang, dict, apply: ()=>applyDict(dict) };
    applyDict(dict);
  });
})();
