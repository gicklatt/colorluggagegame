# Luggage Jam: Color Sort

Official bilingual EN/TR GitHub Pages game site. Updated October 7, 2026.

- Actual native gameplay screenshots and 29.8-second localized footage.
- Videos are hosted here; YouTube links open only when the visitor chooses.
- No external fonts, analytics, accounts or automatic YouTube embeds.
- Advertising privacy policy preserved, with the new product name.
- No level-count marketing claims.

## Mobile store routing

Only `https://gicklatt.github.io/colorluggagegame/#install` redirects Android visitors to the existing Google Play listing and iPhone/iPad visitors to the existing App Store listing. iPadOS desktop-style user agents are recognized through their touch capability. The normal website URL stays on the website on all devices. Desktop visitors using `#install` scroll to the store buttons; crawlers stay on the website.

Content anchors such as `#support` and `#gameplay` stay on the website. The privacy page does not load the redirect script. Routing works both for an initial `#install` visit and a hash change while the page is already open. Language links preserve the fragment.

The redirect uses the browser's local device information; it adds no tracking, cookies or external service. Store URLs are fixed to this game's existing application identities.

Browser reference: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/maxTouchPoints

## Preview

Run `python3 -m http.server 8877 --bind 127.0.0.1` and inspect EN/TR desktop and mobile views.
