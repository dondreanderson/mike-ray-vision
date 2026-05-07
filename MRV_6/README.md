# Mike Ray Vision — Official Website
**Production-ready · Locally-hosted assets · Zero external timeouts**

---

## Project Overview
The official personal brand website for **Mike Ray** — Director, Actor, Writer, Voice Artist, and Entrepreneur. Designed in the editorial luxury aesthetic of **omarihardwick.com** (~90% alignment): minimal black-and-white, cinematic full-bleed sections, serif/sans typographic hierarchy, and a scrollable filmography poster grid.

---

## ✅ Completed Features

| Feature | Status |
|---|---|
| Full-screen cinematic hero with looping video fallback | ✅ |
| "MIKE RAY" serif nav logo (Omari-style) with scroll effect | ✅ |
| Large clickable About preview panel (Omari-style full-bleed image) | ✅ |
| Featured Work 3-tile editorial grid | ✅ |
| Full-bleed quote break section | ✅ |
| About section — portrait + accent image + full bio | ✅ |
| Best Screenplay Award badge | ✅ |
| **Filmography — Omari-style scrollable horizontal poster row** | ✅ |
| **About section** — full-width cinematic "In The Zone" banner + updated 2026 bio | ✅ |
| 13 IMDb-sourced + original film/TV credits with poster tiles | ✅ |
| Large "FILMOGRAPHY" label + "View Full Credits" link (Omari-style) | ✅ |
| Full-bleed Director Break section | ✅ |
| Voice Over section with portrait | ✅ |
| Journey / Timeline 9-milestone grid | ✅ |
| Contact form with inquiry selector | ✅ |
| Social icons: Facebook, Instagram, YouTube, LinkedIn | ✅ |
| "Watch My Reel" CTA → https://vimeo.com/149064587 | ✅ |
| All assets served locally (zero genspark.ai dependencies) | ✅ |
| Fully responsive (mobile hamburger menu) | ✅ |
| Fade-up scroll animations | ✅ |
| Drag-to-scroll poster grid | ✅ |

---

## 📁 File Structure

```
index.html                      Main page (single-page)
images/
  mike-ray-blue-blazer.jpg      Hero video poster / fallback
  mike-ray-about-preview.jpg    About preview panel image
  mike-ray-in-the-zone.jpg      About section wide banner + In The Zone filmography tile
  mike-ray-camera-bts.jpg       About accent + tiles
  mike-ray-director-bts.jpg     Quote break + director break BG
  mike-ray-director-chair.jpg   Featured Work main tile
  mike-ray-red-chair.jpg        Featured Work tile 2
  mike-ray-on-camera.jpg        Voice Over portrait
  best-screenplay-award.png     Award badge
  poster-house-of-payne.jpg     House of Payne · BET
  poster-zatima.jpg             Zatima · BET+
  poster-first-wives-club.jpg   First Wives Club · Paramount+
  poster-dynasty.jpg            Dynasty · CW
  poster-falcon-winter-soldier.jpg  Falcon & Winter Soldier · Disney+
  poster-finding-carter.jpg     Finding Carter · MTV
  poster-saints-sinners.jpg     Saints & Sinners · Bounce TV
  poster-greenleaf.jpg          Greenleaf · OWN
  poster-let-the-church.jpg     Let the Church Say Amen · TV Movie
video/
  hero-reel.mp4                 ← UPLOAD THIS (self-hosted reel)
```

---

## 🎬 Hero Video

The hero requires a self-hosted `video/hero-reel.mp4` file.
- Create the `video/` folder and upload your reel as `hero-reel.mp4`
- Until uploaded, the hero displays `images/mike-ray-blue-blazer.jpg` as a poster fallback
- The Vimeo reel link `https://vimeo.com/149064587` is preserved in the "Watch My Reel" CTA

---

## 🎭 IMDb Filmography Credits (nm1839026)

| # | Title | Network | Year | Role |
|---|---|---|---|---|
| 1 | House of Payne | BET | 2008–2025 | Q Anthony / Tony |
| 2 | Zatima | BET+ | 2022–2025 | Dr. Chantis |
| 3 | First Wives Club | Paramount+ / BET+ | 2021–2022 | Warren |
| 4 | Dynasty | CW | 2022 | Donald |
| 5 | The Falcon and the Winter Soldier | Disney+ | 2021 | Alonso Barber |
| 6 | Saints & Sinners | Bounce TV | 2018 | Attorney |
| 7 | Greenleaf | OWN | 2017 | Marks |
| 8 | Finding Carter | MTV | 2015 | Cop |
| 9 | Army Wives | Lifetime | 2012–2013 | SGT Boggs |
| 10 | Let the Church Say Amen | TV Movie | 2013 | Deacon Black |
| 11 | The Productive Lie | — | 2014 | Writer · Director · Actor |
| 12 | The Helen Lindsey Story | — | 2024 | Writer · Director |

---

## 🔗 Key Links

| Purpose | URL |
|---|---|
| Vimeo Reel | https://vimeo.com/149064587 |
| IMDb Profile | https://www.imdb.com/name/nm1839026/ |
| Helen Lindsey Story | https://mikerayvision.com/helen.html |
| The Productive Lie | https://mikerayvision.com/productive-lie.html |
| Facebook | https://www.facebook.com/mike.ray.733 |
| Instagram | https://www.instagram.com/A_Mike_Ray_Vision/ |
| YouTube | https://www.youtube.com/@MikeRayVision |
| LinkedIn | https://www.linkedin.com/in/mikerayvision |

---

## 🚀 Deployment

To publish the site, go to the **Publish tab** — it handles all deployment automatically and provides a live URL.

---

## ⚠️ Pending / Recommended Next Steps

1. **Upload hero video** — Create `video/` folder and add `hero-reel.mp4` to enable the cinematic video background
2. **Army Wives poster** — Army Wives tile uses a Mike Ray portrait as stand-in; if an official Lifetime poster image is available, swap it into `images/poster-army-wives.jpg` and update the `src` in index.html
3. **Connect contact form** — Add a backend or third-party service (Formspree, EmailJS) to make form submissions functional
4. **SEO** — Add `og:image` meta tag with an absolute URL once deployed
5. **Analytics** — Add Google Analytics or equivalent once the site is live

---

*Last updated: April 2025 · v7.2 — New About photo (In The Zone) + 2026 bio copy*
