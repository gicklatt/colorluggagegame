# Color Luggage — Website

Landing page and privacy policy for **Color Luggage — Sort Puzzle**, a
game by [Gicklatt](https://gicklatt.github.io).

🔗 **Live:** [gicklatt.github.io/colorluggagegame](https://gicklatt.github.io/colorluggagegame)

## About the game

Tap a cart, watch matching suitcases ride the belt, and pack every last
bag onto the plane. A bright, candy-colored sorting puzzle set in the
world's happiest little airport. 200 hand-tuned levels, two boosters
(Fly Out and Shuffle), three-star ranks and a gift chest that fills as
you play — all in soft, cozy, clutter-free art.

One finger is all it takes.

## Tech stack

- Plain static **HTML + CSS** — no build step
- Fonts: Fredoka + Inter (Google Fonts)
- Hosted on **GitHub Pages**

## Structure

| Path | Purpose |
|------|---------|
| `index.html` | Game landing page |
| `privacy/index.html` | Privacy policy (App Store / Google Play URL) |
| `assets/` | Icon (`icon.png`) and screenshots |
| `robots.txt`, `sitemap.xml` | SEO |
| `.nojekyll` | Disables Jekyll processing |

## Develop

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## Deploy

GitHub Pages → **Settings → Pages → Deploy from a branch → `main` / root**.

## Store URLs

- Privacy Policy: `https://gicklatt.github.io/colorluggagegame/privacy/`
- Support / Marketing: `https://gicklatt.github.io/colorluggagegame/`

> Color Luggage 1.0 ships **ad-free**, so it needs no `app-ads.txt`. The
> shared `app-ads.txt` lives in the
> [`gicklatt.github.io`](https://github.com/gicklatt/gicklatt.github.io)
> repo and serves ad-supported games only.

---

© Gicklatt · [gicklatt@gmail.com](mailto:gicklatt@gmail.com)
