'use strict';

(() => {
  function routeToStore() {
    const url = new URL(window.location.href);
    // Only the shared install link should navigate away from the website.
    if (url.hash !== '#install') return;

    const userAgent = navigator.userAgent || '';
    if (/bot|crawler|spider|slurp/i.test(userAgent)) return;

    const isIOS = /iPhone|iPad|iPod/i.test(userAgent)
      || (/Macintosh/i.test(userAgent) && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/i.test(userAgent);
    const store = isIOS
      ? 'https://apps.apple.com/app/id6778817570'
      : isAndroid
        ? 'https://play.google.com/store/apps/details?id=com.gicklatt.colorluggage'
        : null;

    if (store) window.location.replace(store);
  }

  window.addEventListener('hashchange', routeToStore);
  routeToStore();
})();
