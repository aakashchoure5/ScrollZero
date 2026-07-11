# ScrollZero

Premium startup website for ScrollZero — **Reclaim Your Attention.**

## Stack

- Next.js 15 (App Router, TypeScript)
- Tailwind CSS
- Framer Motion
- Shadcn-style UI primitives (Radix + CVA)
- Lucide icons

## Run locally

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run lint
npm run build
```

## Railway deployment

This repository includes `nixpacks.toml` for Railway so build/runtime are pinned.

- Build: `npm run build`
- Start: `npm run start -- -p $PORT`
- Node: `20.x`

## Pages

- /
- /features
- /pricing
- /about
- /blog
- /contact
- /privacy-policy
- /terms

## SEO

- Metadata + OpenGraph + Twitter cards
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- JSON-LD schema on home page
