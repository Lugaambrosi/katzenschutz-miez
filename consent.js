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
