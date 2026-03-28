# Mike Ray Vision — v6 (Editorial Luxury Rebuild)

## Project Overview
A complete rebuild of **mikerayvision.com** inspired by the editorial luxury aesthetic of **omarihardwick.com** — minimal, cinematic, black-and-white, image-led, and premium.

---

## Design Philosophy (v6)
| Attribute | Choice |
|-----------|--------|
| Background | Pure black (#000) + near-black (#080808) |
| Text | White / off-white / grayscale |
| Accent | Muted gold (#c8a96e) — used **sparingly** for eyebrows + CTA borders only |
| Typography | Cormorant Garamond (luxury serif) + Inter (clean sans) |
| Layout | Full-bleed sections, editorial grid, large film tiles |
| Imagery | Grayscale-tinted with color-reveal on hover |
| Aesthetic | Cinematic, minimal, editorial — modeled after Omari Hardwick's site |

---

## Site Structure
1. **Hero** — Full-screen video background (FWC S3_EP9) + name lockup
2. **Intro Statement** — Editorial pull-quote + 4 stat blocks
3. **Featured Work** — 3-tile editorial grid (main large + 2 secondary)
4. **Quote Break** — Full-bleed cinematic image with Mike's quote
5. **About** — Two-column portrait + bio + award badge
6. **Filmography** — Large credit tile grid (1 wide + 6 standard)
7. **Director Break** — Full-bleed moody photo with editorial headline
8. **Voice Over** — Two-column content + portrait
9. **Journey Timeline** — 9-milestone grid (Fairbanks → World Stage)
10. **Contact** — Split layout form + social icons
11. **Footer** — Minimal copyright

---

## Assets Used (From AI Drive & Supabase)
| File | Usage |
|------|-------|
| FWC S3_EP9.MP4 | Hero video background (Supabase Media Bucket - same as MRV_Site3) |
| IMG_4385 3.JPG | Hero poster + About primary portrait |
| IMG_5373.jpg | Featured work tile 2 + About accent |
| LumixSync (Director's Chair).jpg | Featured work tile 1 |
| Barb-66.JPG | House of Payne credit + Voice section |
| IMG_6987.jpg | Director break + filmography |
| Mike Ray on camera.OTG.jpg | Voice over section |
| Mike And Arsenio.jpg | Social proof / Radio credit |
| WINNER Best Screenplay.PNG | Award badge + Credit tile |

---

## Social Media Links
- **Facebook**: https://www.facebook.com/mike.ray.733
- **Instagram**: https://www.instagram.com/A_Mike_Ray_Vision/
- **YouTube**: https://www.youtube.com/@MikeRayVision
- **LinkedIn**: https://www.linkedin.com/in/mikerayvision

---

## Hero CTA
- **Watch My Reel** → https://vimeo.com/149064587

---

## Key CSS Design Tokens
```css
--black:     #000000
--near-black: #080808
--accent:    #c8a96e    /* muted gold — used sparingly */
--font-serif: Cormorant Garamond
--font-sans:  Inter
```

---

## Technical Notes
- Pure HTML/CSS/JS — no frameworks, no build tools
- Intersection Observer for fade-up animations
- CSS `object-fit: cover` + `object-position: top center` for face visibility on all portrait images
- z-index stack: video=0 → overlay=1 → content=2 → nav=100
- Fully responsive: 3-col → 2-col → 1-col at breakpoints 1024px / 768px
- Loading screen with 1.2s delay

---

## Deployment
Go to the **Publish tab** to deploy this site live to mikerayvision.com.

---

## Next Steps Recommended
1. Replace YouTube/LinkedIn URLs with Mike's actual handles
2. Connect contact form to an email handler (Formspree or Netlify Forms)
3. Add a custom favicon (MRV monogram)
4. Add Google Analytics or similar tracking
5. Consider adding a dedicated page for "Journey to the Motherland" board game
6. Consider embedding actual Vimeo reel directly in hero for added production value
