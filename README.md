# jeanbaptisteazan.fr

Portfolio, built with [Astro](https://astro.build) 7, static output, deployed on Vercel.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + static build in dist/
npm run preview
```

## Structure

- `src/styles/tokens.css` — design tokens. Primitives (one warm neutral, one brand hue) → semantic tokens. Components only use semantic tokens.
- `src/styles/global.css`, `src/styles/bento.css` — base, glass panels, bento grid.
- `src/content/cases/*.md` — one file per use case: bento tile (`tag`, `hook`, `teaser`, `visual`, `tile`) + page `/cas/<id>`. Schema in `src/content.config.ts`.
- `src/pages/index.astro` — the bento. `src/pages/cas/[slug].astro` — use case template.
- `src/components/visuals/` — tile animations (CSS only).
- `src/components/HarpDrone.astro` — Harp's real FPV-drone tutorial, rendered live.

## Harp 3D demo

`src/lib/harp/` is a framework-free subset of Harp's viewer (`GuideStage`, animation engine), copied from the Harp frontend. Inspired by [bygga](https://github.com/Nutlope/bygga) (MIT).
Differences: models load from static files (`services/model/model-cache.ts`), and the drawing accents use the site's brand hue (`materials.ts`).

The tutorial is a snapshot, not fetched from Harp's API at runtime:
`public/harp/drone-fpv.json` (compact tutorial) and `public/harp/drone-fpv.glb` (model).
To refresh: download `https://harp3d.fr/api/tutorials/<id>?compact=1` and the model through `/api/tutorials/model-file?key=<key>`, then replace the model key with `/harp/drone-fpv.glb`.
