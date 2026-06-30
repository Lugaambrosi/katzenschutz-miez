/* KatzenSchutz Miez – DSGVO Cookie-Consent (3 Kategorien)
   Wesentlich (immer aktiv), Funktionell = Google Analytics 4,
   Marketing = Meta-Pixel. Laden NUR nach Einwilligung. Zentriertes
   Modal mit abgedunkeltem/unscharfem Hintergrund. Widerruf jederzeit
   über den Link "Cookie-Einstellungen" im Footer. */
(function () {
  var GA_ID = 'G-44LYYME2NX';
  var META_PIXEL_ID = '2082663425935593';
  var KEY = 'ksm_consent_v2';

  function loadGA() {
    if (window.__ksmGA) return;
    window.__ksmGA = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }

  function loadMeta() {
    if (!META_PIXEL_ID || window.__ksmMeta) return;
    window.__ksmMeta = true;
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  function apply(p) {
    if (p && p.functional) loadGA();
    if (p && p.marketing) loadMeta();
  }

  function read() {
    try { var r = localStorage.getItem(KEY); return r ? JSON.parse(r) : null; } catch (e) { return null; }
  }
  function write(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {} }

  function lockScroll(lock) {
    document.documentElement.style.overflow = lock ? 'hidden' : '';
    document.body.style.overflow = lock ? 'hidden' : '';
  }

  var saved = read();
  if (saved) apply(saved);

  function injectStyle() {
    if (document.getElementById('ksm-c-style')) return;
    var css = ''
      + '.ksm-c-overlay{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;padding:1.2rem;background:rgba(10,8,20,.55);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);animation:ksmFade .25s ease}'
      + '@keyframes ksmFade{from{opacity:0}to{opacity:1}}'
      + '.ksm-c-card{background:#fff;color:#1a1a2e;max-width:540px;width:100%;max-height:86vh;overflow:auto;border-radius:20px;padding:1.8rem 1.7rem;box-shadow:0 24px 70px rgba(0,0,0,.45);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;animation:ksmPop .28s cubic-bezier(.2,.8,.3,1.2)}'
      + '@keyframes ksmPop{from{transform:translateY(16px) scale(.96);opacity:0}to{transform:none;opacity:1}}'
      + '.ksm-c-card h3{font-size:1.2rem;font-weight:900;margin:0 0 .8rem}'
      + '.ksm-c-card .ksm-legal{font-size:.8rem;line-height:1.6;color:#555;margin:0 0 1rem}'
      + '.ksm-c-card .ksm-legal a{color:#7c3aed;font-weight:700}'
      + '.ksm-cat{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;padding:.85rem 0;border-top:1px solid #eee}'
      + '.ksm-cat:first-of-type{border-top:none}'
      + '.ksm-cat .ksm-cat-t{font-size:.92rem;font-weight:800;margin:0 0 .15rem}'
      + '.ksm-cat .ksm-cat-d{font-size:.78rem;color:#777;line-height:1.45;margin:0}'
      + '.ksm-sw{position:relative;flex:0 0 auto;width:44px;height:25px}'
      + '.ksm-sw input{opacity:0;width:0;height:0}'
      + '.ksm-sw .sl{position:absolute;inset:0;background:#ccc;border-radius:25px;transition:.2s;cursor:pointer}'
      + '.ksm-sw .sl:before{content:"";position:absolute;height:19px;width:19px;left:3px;top:3px;background:#fff;border-radius:50%;transition:.2s}'
      + '.ksm-sw input:checked + .sl{background:#7c3aed}'
      + '.ksm-sw input:checked + .sl:before{transform:translateX(19px)}'
      + '.ksm-sw input:disabled + .sl{background:#7c3aed;opacity:.5;cursor:not-allowed}'
      + '.ksm-c-btns{display:flex;flex-direction:column;gap:.6rem;margin-top:1.3rem}'
      + '.ksm-c-btns button{border:none;border-radius:30px;padding:.8rem 1.3rem;font-weight:800;font-size:.92rem;cursor:pointer;font-family:inherit}'
      + '.ksm-c-yes{background:#7c3aed;color:#fff;box-shadow:0 8px 22px rgba(124,58,237,.4)}'
      + '.ksm-c-yes:hover{background:#6d28d9}'
      + '.ksm-c-save{background:#f0edfa;color:#5b21b6}'
      + '.ksm-c-save:hover{background:#e6e0f7}'
      + '.ksm-c-min{background:transparent;color:#888;font-size:.82rem;padding:.3rem}'
      + '.ksm-c-min:hover{color:#555}';
    var style = document.createElement('style');
    style.id = 'ksm-c-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function open() {
    if (document.querySelector('.ksm-c-overlay')) return;
    injectStyle();
    var cur = read() || { functional: false, marketing: false };

    var ov = document.createElement('div');
    ov.className = 'ksm-c-overlay';
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-modal', 'true');
    ov.setAttribute('aria-label', 'Cookie-Einstellungen');
    ov.innerHTML =
      '<div class="ksm-c-card">'
      + '<h3>Cookie-Einstellungen</h3>'
      + '<div class="ksm-legal">Diese Webseite nutzt Cookies und vergleichbare Technologien. Ein Teil davon ist für das fehlerfreie Funktionieren der Seite erforderlich (Wesentlich). Andere dienen der Auswertung des Nutzerverhaltens (Funktionell) oder dem Ausspielen interessengerechter Werbung (Marketing) und werden erst nach deiner Einwilligung aktiviert. Du kannst deine Einwilligung jederzeit über „Cookie-Einstellungen" im Footer dieser Webseite widerrufen.<br><br>Hinweis: Diese Webseite verwendet Technologien aus den USA (Google Analytics, Meta). Wenn du zustimmst, willigst du nach Art. 49 Abs. 1 lit. a DSGVO ein, dass deine Daten in die USA übermittelt werden. Die USA haben kein mit der EU vergleichbares Datenschutzniveau, und US-Unternehmen können von US-Behörden zur Herausgabe deiner Daten verpflichtet werden, ohne dass dir dagegen wirksame Rechtsmittel zustehen. Details in der <a href="/datenschutz.html">Datenschutzerklärung</a>.</div>'
      + '<div class="ksm-cat"><div><p class="ksm-cat-t">Wesentlich</p><p class="ksm-cat-d">Für den Betrieb der Seite nötig, etwa um deine Cookie-Auswahl zu speichern. Immer aktiv.</p></div><label class="ksm-sw"><input type="checkbox" checked disabled><span class="sl"></span></label></div>'
      + '<div class="ksm-cat"><div><p class="ksm-cat-t">Funktionell</p><p class="ksm-cat-d">Google Analytics – anonyme Statistik darüber, wie die Seite genutzt wird, um sie zu verbessern.</p></div><label class="ksm-sw"><input type="checkbox" id="ksm-fn"' + (cur.functional ? ' checked' : '') + '><span class="sl"></span></label></div>'
      + '<div class="ksm-cat"><div><p class="ksm-cat-t">Marketing</p><p class="ksm-cat-d">Meta-Pixel – misst den Erfolg von Werbeanzeigen auf Facebook und Instagram.</p></div><label class="ksm-sw"><input type="checkbox" id="ksm-mk"' + (cur.marketing ? ' checked' : '') + '><span class="sl"></span></label></div>'
      + '<div class="ksm-c-btns">'
      + '<button class="ksm-c-yes" type="button">Alle akzeptieren</button>'
      + '<button class="ksm-c-save" type="button">Auswahl speichern</button>'
      + '<button class="ksm-c-min" type="button">Nur wesentliche</button>'
      + '</div>'
      + '</div>';
    document.body.appendChild(ov);
    lockScroll(true);

    function close() { lockScroll(false); if (ov.parentNode) ov.parentNode.removeChild(ov); }
    function finish(p) {
      var downgrade = (window.__ksmGA && !p.functional) || (window.__ksmMeta && !p.marketing);
      write(p); close();
      if (downgrade) { location.reload(); return; }
      apply(p);
    }

    ov.querySelector('.ksm-c-yes').addEventListener('click', function () {
      finish({ functional: true, marketing: true });
    });
    ov.querySelector('.ksm-c-save').addEventListener('click', function () {
      finish({ functional: ov.querySelector('#ksm-fn').checked, marketing: ov.querySelector('#ksm-mk').checked });
    });
    ov.querySelector('.ksm-c-min').addEventListener('click', function () {
      finish({ functional: false, marketing: false });
    });
  }

  window.ksmOpenConsent = open;

  function ready(fn) { if (document.body) fn(); else document.addEventListener('DOMContentLoaded', fn); }
  ready(function () {
    var links = document.querySelectorAll('.ksm-cookie-settings');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (e) { e.preventDefault(); open(); });
    }
    if (!saved) open();
  });
})();
/* KatzenSchutz Miez – DSGVO Cookie-Consent
   Lädt Google Analytics 4 UND den Meta-Pixel NUR nach Zustimmung.
   Zentriertes Modal mit abgedunkeltem/unscharfem Hintergrund, blockiert
   die Seite bis zur Entscheidung. "Ablehnen" lässt ebenfalls auf die Seite
   (nur ohne Tracking) – DSGVO-konform, keine Cookie-Wall. */
(function () {
  var GA_ID = 'G-44LYYME2NX';
  var META_PIXEL_ID = '2082663425935593';
  var KEY = 'ksm_consent_v1';

  function loadGA() {
    if (window.__ksmGA) return;
    window.__ksmGA = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }

  function loadMeta() {
    if (!META_PIXEL_ID || window.__ksmMeta) return;
    window.__ksmMeta = true;
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  function loadAll() { loadGA(); loadMeta(); }

  var choice;
  try { choice = localStorage.getItem(KEY); } catch (e) { choice = null; }
  if (choice === 'granted') { loadAll(); return; }
  if (choice === 'denied') { return; }

  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function lockScroll(lock) {
    document.documentElement.style.overflow = lock ? 'hidden' : '';
    document.body.style.overflow = lock ? 'hidden' : '';
  }

  function build() {
    var css = ''
      + '.ksm-c-overlay{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;padding:1.2rem;background:rgba(10,8,20,.55);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);animation:ksmFade .25s ease}'
      + '@keyframes ksmFade{from{opacity:0}to{opacity:1}}'
      + '.ksm-c-card{background:#fff;color:#1a1a2e;max-width:460px;width:100%;border-radius:20px;padding:2rem 1.8rem;box-shadow:0 24px 70px rgba(0,0,0,.45);text-align:center;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;animation:ksmPop .28s cubic-bezier(.2,.8,.3,1.2)}'
      + '@keyframes ksmPop{from{transform:translateY(16px) scale(.96);opacity:0}to{transform:none;opacity:1}}'
      + '.ksm-c-card .ksm-ic{font-size:2.4rem;margin-bottom:.6rem}'
      + '.ksm-c-card h3{font-size:1.25rem;font-weight:900;margin:0 0 .6rem}'
      + '.ksm-c-card p{font-size:.9rem;line-height:1.6;color:#555;margin:0 0 1.4rem}'
      + '.ksm-c-card a{color:#7c3aed;font-weight:700}'
      + '.ksm-c-btns{display:flex;flex-direction:column;gap:.6rem}'
      + '.ksm-c-btns button{border:none;border-radius:30px;padding:.85rem 1.3rem;font-weight:800;font-size:.95rem;cursor:pointer;font-family:inherit}'
      + '.ksm-c-yes{background:#7c3aed;color:#fff;box-shadow:0 8px 22px rgba(124,58,237,.4)}'
      + '.ksm-c-yes:hover{background:#6d28d9}'
      + '.ksm-c-no{background:transparent;color:#888;font-size:.85rem;padding:.4rem}'
      + '.ksm-c-no:hover{color:#555}';
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    var ov = document.createElement('div');
    ov.className = 'ksm-c-overlay';
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-modal', 'true');
    ov.setAttribute('aria-label', 'Cookie-Einwilligung');
    ov.innerHTML = '<div class="ksm-c-card">'
      + '<div class="ksm-ic">🐱</div>'
      + '<h3>Kurz bevor es losgeht</h3>'
      + '<p>Ich nutze Cookies für anonyme Statistiken (Google Analytics) und Werbe-Messung, um diese Seite zu verbessern. Nur mit deiner Zustimmung. <a href="/datenschutz.html">Mehr erfahren</a></p>'
      + '<div class="ksm-c-btns">'
      + '<button class="ksm-c-yes" type="button">Akzeptieren</button>'
      + '<button class="ksm-c-no" type="button">Nur notwendige – ablehnen</button>'
      + '</div></div>';
    document.body.appendChild(ov);
    lockScroll(true);

    function close() { lockScroll(false); if (ov.parentNode) ov.parentNode.removeChild(ov); }

    ov.querySelector('.ksm-c-yes').addEventListener('click', function () {
      save('granted'); close(); loadAll();
    });
    ov.querySelector('.ksm-c-no').addEventListener('click', function () {
      save('denied'); close();
    });
  }

  if (document.body) build();
  else document.addEventListener('DOMContentLoaded', build);
})();
