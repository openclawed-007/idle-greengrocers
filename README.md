# Idle Greengrocers

Marketing & catalog website for Idle Greengrocers — fresh fruit, vegetables and local produce
from the heart of Idle village, West Yorkshire.

Built with **[Astro 4](https://astro.build)** + **Tailwind CSS**. Fully static, tiny JS
footprint, deploys free to Netlify or Cloudflare Pages.

---

## Quick start

```bash
npm install
npm run dev          # dev server on http://localhost:4321
npm run build        # production build → ./dist
npm run preview      # preview the production build locally
npm run check        # TypeScript + Astro diagnostics
```

Requires **Node ≥ 18.17** (Node 20 recommended — matched in CI and Netlify).

---

## Project structure

```
idle-greengrocers/
├─ astro.config.mjs         Astro + integrations (tailwind, sitemap, robots, compress)
├─ tailwind.config.mjs      Design tokens (palette, fonts)
├─ netlify.toml             Deploy config for Netlify
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ images/               ← drop your real photos in here (see "Images" below)
└─ src/
   ├─ layouts/BaseLayout.astro   <head>, SEO, JSON-LD, image fallback
   ├─ components/                Shared UI (Header, Footer, ProductCard, Badge, …)
   │  └─ sections/               Page sections (Hero, LocalPicks, …)
   ├─ content/                   Markdown-driven content
   │  ├─ config.ts               Zod schemas (type-safe front-matter)
   │  ├─ products/*.md
   │  ├─ makers/*.md
   │  └─ seasonal/*.md
   ├─ lib/
   │  ├─ site.ts                 Business info — single source of truth
   │  └─ nav.ts                  Header/footer nav items
   ├─ pages/                     Routes: /, /our-produce, /local-makers, /about,
   │                              /delivery, /contact, /404
   └─ styles/global.css          Tailwind layers + tokens
```

---

## Maintenance guide

Everything that changes regularly lives as **Markdown** — no code changes required.

### Update the business info (address, hours, phone, socials)

Edit `src/lib/site.ts`. It's referenced by the footer, contact page, schema.org JSON-LD
and more — change it once and every page updates.

### Add a new product

Create `src/content/products/<slug>.md`:

```md
---
name: Heritage Tomatoes
category: vegetables           # fruit | vegetables | dairy-eggs | bakery | pantry | preserves
origin: Pocklington, East Yorkshire
supplier: Wolds Glasshouse     # optional
price: 4.20
unit: 500g                     # e.g. kg, bunch, 200g, dozen, each
image: /images/products/heritage-tomatoes.jpg
imageAlt: A wooden tray of heritage tomatoes in reds, yellows and greens.
isLocal: true
featured: false                # true = shows in "Local Picks" on home
order: 110                     # lower = earlier
season: [summer, autumn]
---

Short description (1–2 sentences).
```

The build is type-safe — if you forget a field or use an invalid category, the build fails
with a clear error (no silent breakage).

### Show a different product in "Local Picks" on the home page

Set `featured: true` on up to five products. Use `order:` (lower first) to sequence them.

### Swap the active season shown on the home page

Open the four `src/content/seasonal/*.md` files and set exactly one to `active: true`.

### Add a local maker

Create `src/content/makers/<slug>.md`:

```md
---
name: Ellerby Grove Farm
location: Ellerby, East Yorkshire
speciality: Seasonal vegetables & salad leaves
image: /images/makers/ellerby-grove.jpg
imageAlt: A misty Yorkshire field at dawn.
website: https://example.com   # optional
order: 10
---

Short paragraph about them.
```

---

## Images

While real photography isn't in place yet the site works perfectly — any missing image
is automatically swapped for a branded placeholder at runtime (see `BaseLayout.astro`).

Drop real photos into `public/images/` at the **exact paths** referenced in content's
`image:` fields. Paths are also listed below.

### File list

| Path | Aspect | Used on |
|---|---|---|
| `public/images/hero/hero-crate.png` | 4:3 landscape | Home hero |
| `public/images/products/yorkshire-apples.jpg` | 4:5 portrait | Local Picks, catalog |
| `public/images/products/heritage-carrots.jpg` | 4:5 | Local Picks, catalog |
| `public/images/products/wensleydale-creamery.jpg` | 4:5 | Local Picks, catalog |
| `public/images/products/free-range-eggs.jpg` | 4:5 | Local Picks, catalog |
| `public/images/products/yorkshire-rhubarb.jpg` | 4:5 | Local Picks, catalog |
| `public/images/products/savoy-cabbage.jpg` | 4:5 | Catalog |
| `public/images/products/new-potatoes.jpg` | 4:5 | Catalog |
| `public/images/products/purple-sprouting-broccoli.jpg` | 4:5 | Catalog |
| `public/images/products/sourdough-loaf.jpg` | 4:5 | Catalog |
| `public/images/products/local-honey.jpg` | 4:5 | Catalog |
| `public/images/products/heritage-tomatoes.jpg` | 4:5 | Catalog |
| `public/images/seasonal/spring.jpg` | 3:2 | Home seasonal section |
| `public/images/seasonal/summer.jpg` | 3:2 | Home seasonal section |
| `public/images/seasonal/autumn.jpg` | 3:2 | Home seasonal section |
| `public/images/seasonal/winter.jpg` | 3:2 | Home seasonal section |
| `public/images/makers/polaroid-cow.jpg` | 4:5 | Home "Meet the Makers" polaroid |
| `public/images/makers/polaroid-preserves.jpg` | 4:5 | Home "Meet the Makers" polaroid |
| `public/images/makers/polaroid-bread.jpg` | 4:5 | Home "Meet the Makers" polaroid |
| `public/images/makers/ellerby-grove.jpg` | 4:5 | Local Makers page |
| `public/images/makers/craven-farms.jpg` | 4:5 | Local Makers page |
| `public/images/makers/wensleydale-creamery.jpg` | 4:5 | Local Makers page |
| `public/images/makers/salt-mill.jpg` | 4:5 | Local Makers page |
| `public/images/makers/wharfedale-apiaries.jpg` | 4:5 | Local Makers page |
| `public/images/makers/rhubarb-triangle.jpg` | 4:5 | Local Makers page |
| `public/images/shop/shopfront.jpg` | 3:4 portrait | Home "Visit our Shop" |
| `public/images/about/shop-interior.jpg` | 4:5 | About page |
| `public/og-image.jpg` | 1200×630 | Social share image |

**Target size:** ~1600px on the long edge, saved as `.jpg` at ~80–85% quality. Astro
doesn't re-process files in `public/`, so optimise before dropping them in
(e.g. [squoosh.app](https://squoosh.app) or `cwebp`/`jpegoptim`).

---

## AI image prompts

Paste any of these into an image model (Midjourney, SDXL, DALL·E, Nano Banana, etc.).

**Style anchor** — prepend to every prompt for a consistent look:

> *Editorial food photography, natural daylight, warm cream & deep forest-green palette,
> rustic wooden surfaces, soft film grain, shallow depth of field, muted earthy tones,
> high detail, no text, no watermark.*

### Hero (`public/images/hero/hero-crate.png`, 3:2)

> A rustic weathered wooden crate branded "IDLE GREENGROCERS" overflowing with fresh
> British produce — savoy cabbage, leeks, kale, new potatoes, beetroot, radishes, carrots
> with tops — on a cream linen backdrop with a green-striped cloth. Warm morning light from
> the right. Shallow depth of field. The only text in the image is the branding on the
> crate.

### Products (each 4:5 portrait)

- `yorkshire-apples.jpg` — *A small pile of red and green English heritage apples with
  leaves still attached, resting on aged pine. Natural window light, soft shadows.
  Editorial still life.*
- `heritage-carrots.jpg` — *A tied bunch of muddy heritage carrots with vibrant green
  feathery tops, laid diagonally on dark forest-green linen. Rustic, painterly.*
- `wensleydale-creamery.jpg` — *A wedge cut from a round of pale Wensleydale cheese on
  parchment, crumbs scattered, wooden board, soft daylight.*
- `free-range-eggs.jpg` — *A dozen mixed-colour free-range eggs (cream, brown, speckled,
  pale blue) nestled in straw inside an open kraft egg carton, top-down view.*
- `yorkshire-rhubarb.jpg` — *A bundle of vivid pink Yorkshire forced rhubarb stalks, pale
  yellow tips, tied with twine, on a cream background.*
- `savoy-cabbage.jpg` — *A single dew-flecked savoy cabbage with deeply crinkled dark
  green leaves, side-lit on a dark wooden surface.*
- `new-potatoes.jpg` — *A pile of small waxy new potatoes lightly dusted with soil, in
  a shallow enamel bowl, overhead view.*
- `purple-sprouting-broccoli.jpg` — *A bunch of purple sprouting broccoli with tender
  stems and deep purple florets, arranged on a cream linen napkin.*
- `sourdough-loaf.jpg` — *A round, floured artisan sourdough loaf with a dark caramelised
  crust and dramatic scoring, on a dark wooden peel, side-lit.*
- `local-honey.jpg` — *A glass jar of golden wildflower honey with a handwritten kraft
  label, a wooden honey dipper beside it, on rough hessian cloth.*
- `heritage-tomatoes.jpg` — *A wooden tray of heritage tomatoes in reds, yellows, greens
  and stripes, of varying sizes and shapes, overhead view.*

### Seasonal (each 3:2 landscape)

- `seasonal/spring.jpg` — *A rustic arrangement of spring produce — purple-sprouting
  broccoli, cauliflower, wild garlic, spring greens — on a weathered dark wood board.
  Moody editorial lighting, deep shadows.*
- `seasonal/summer.jpg` — *A wooden crate of summer produce — heritage tomatoes, green
  courgettes, strawberries, cherries — on a cream linen cloth in bright natural light.*
- `seasonal/autumn.jpg` — *An overhead arrangement of autumn produce — pumpkins, squashes,
  heritage apples, pears, kale — on hessian with dried wheat stems.*
- `seasonal/winter.jpg` — *Winter produce — leeks, savoy cabbage, parsnips and forced
  rhubarb — on dark wood with soft, cold morning light.*

### Makers — home polaroids (each 4:5)

- `makers/polaroid-cow.jpg` — *A single brown-and-white Yorkshire dairy cow in a green
  pasture on a misty morning, looking toward the camera. Soft, naturalistic.*
- `makers/polaroid-preserves.jpg` — *Three small jars of homemade preserves (chutney, jam,
  honey) with handwritten kraft labels, on rough hessian cloth, warm light.*
- `makers/polaroid-bread.jpg` — *Two artisan sourdough boules, floured and scored, on a
  dark wooden peel, top-down, dramatic side lighting.*

### Makers — Local Makers page (each 4:5)

- `makers/ellerby-grove.jpg` — *A misty Yorkshire field at dawn with rows of leafy salad
  crops, a wooden fence in the foreground.*
- `makers/craven-farms.jpg` — *A brown-and-white hen in a grassy paddock, Yorkshire Dales
  hills behind, golden hour.*
- `makers/wensleydale-creamery.jpg` — *A wheel of traditional Wensleydale cheese aging on
  a wooden shelf in a small dairy, soft daylight from a side window.*
- `makers/salt-mill.jpg` — *Freshly baked sourdough loaves cooling on a wire rack in a
  small artisan bakery, warm tones.*
- `makers/wharfedale-apiaries.jpg` — *A row of wooden beehives in a wildflower meadow in
  Upper Wharfedale, sunny summer day, Yorkshire Dales in the distance.*
- `makers/rhubarb-triangle.jpg` — *Forced pink rhubarb stalks growing in a candlelit
  forcing shed, shallow depth of field, moody low light.*

### Shopfront (`public/images/shop/shopfront.jpg`, 3:4 portrait)

> A charming independent greengrocer's shopfront painted deep forest green with cream
> signage reading "IDLE GREENGROCERS". A chalkboard A-frame sign outside reads "Fresh
> fruit & veg, local produce daily". Wooden crates of colourful produce arranged on the
> pavement. Late-afternoon golden light. Photorealistic, editorial.

### About page interior (`public/images/about/shop-interior.jpg`, 4:5)

> Inside a small independent greengrocer's shop — wooden shelves and crates lined with
> colourful seasonal produce, chalkboard price tags, warm pendant lighting, a cream-tiled
> floor. Empty of people, inviting.

### OG image (`public/og-image.jpg`, 1200×630)

> Same hero produce-crate scene but composed to keep the top-left third clear for overlay
> text. Generous negative space on a cream backdrop.

---

## Deployment

### Netlify (recommended)

1. Push the repo to GitHub.
2. "Add new site → Import from Git" in Netlify, pick the repo.
3. Netlify reads `netlify.toml` automatically. No config needed.
4. Add your custom domain under *Domain management*. HTTPS is automatic.

The contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/) — no backend,
no keys. Submissions appear in the Netlify dashboard and can be forwarded to an email.

### Cloudflare Pages

1. "Create project → Connect to Git".
2. Build command: `npm run build`, output directory: `dist`, Node version: `20`.

---

## Conventions

- **One responsibility per component.** Section components (`src/components/sections/`)
  compose primitives from `src/components/`.
- **No client-side JS unless necessary.** Current footprint: mobile nav toggle, category
  filter on `/our-produce`, image-error fallback. That's it.
- **Type-safe content.** Changing a field in `src/content/config.ts` re-validates every
  Markdown file on the next build.
- **Single source of truth for business info:** `src/lib/site.ts`.
- **Accessibility:** semantic landmarks, single `h1` per page, visible focus rings,
  `prefers-reduced-motion` respected, colour contrast WCAG AA.

---

## Licence

© Idle Greengrocers. Site code MIT; content & imagery are property of Idle Greengrocers.
