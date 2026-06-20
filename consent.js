/* KatzenSchutz Miez – DSGVO Cookie-Consent
   Lädt Google Analytics 4 UND (optional) den Meta-Pixel NUR nach Zustimmung.
   Meta-Pixel: sobald du eine Pixel-ID hast, unten bei META_PIXEL_ID eintragen. */
(function () {
  var GA_ID = 'G-44LYYME2NX';
  var META_PIXEL_ID = ''; // <-- hier deine Meta-Pixel-ID eintragen (z. B. '1234567890'), dann ist der FB-Pixel aktiv
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

  function build() {
    var css = '.ksm-consent{position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#12101f;color:#fff;'
      + 'box-shadow:0 -6px 24px rgba(0,0,0,.35);padding:1rem 1.2rem;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}'
      + '.ksm-c-inner{max-width:1040px;margin:0 auto;display:flex;align-items:center;gap:1.2rem;flex-wrap:wrap;justify-content:space-between}'
      + '.ksm-c-inner p{font-size:.86rem;color:rgba(255,255,255,.85);line-height:1.55;margin:0;flex:1;min-width:240px}'
      + '.ksm-c-inner a{color:#c4b5fd;font-weight:700}'
      + '.ksm-c-btns{display:flex;gap:.6rem;flex-wrap:wrap}'
      + '.ksm-c-btns button{border:none;border-radius:30px;padding:.6rem 1.3rem;font-weight:800;font-size:.85rem;cursor:pointer;font-family:inherit}'
      + '.ksm-c-no{background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.3)!important}'
      + '.ksm-c-yes{background:#7c3aed;color:#fff}'
      + '@media(max-width:560px){.ksm-c-btns{width:100%}.ksm-c-btns button{flex:1}}';
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    var bar = document.createElement('div');
    bar.className = 'ksm-consent';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Cookie-Einwilligung');
    bar.innerHTML = '<div class="ksm-c-inner">'
      + '<p>Ich nutze Cookies für anonyme Statistiken (Google Analytics) und Werbe-Messung, um diese Seite zu verbessern. '
      + 'Nur mit deiner Zustimmung. <a href="/datenschutz.html">Mehr erfahren</a></p>'
      + '<div class="ksm-c-btns">'
      + '<button class="ksm-c-no" type="button">Ablehnen</button>'
      + '<button class="ksm-c-yes" type="button">Akzeptieren</button>'
      + '</div></div>';
    document.body.appendChild(bar);

    bar.querySelector('.ksm-c-yes').addEventListener('click', function () {
      save('granted'); bar.parentNode && bar.parentNode.removeChild(bar); loadAll();
    });
    bar.querySelector('.ksm-c-no').addEventListener('click', function () {
      save('denied'); bar.parentNode && bar.parentNode.removeChild(bar);
    });
  }

  if (document.body) build();
  else document.addEventListener('DOMContentLoaded', build);
})();
