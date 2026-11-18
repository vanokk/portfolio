# Ivan Reshevskyi — Portfolio

A statically exported portfolio built with Next.js App Router, React, strict
TypeScript, SCSS Modules, and BEM.

## Before working

Read `AGENTS.MD`, `docs/PROJECT.md`, `docs/DESIGN.md`, and the relevant guidelines
in `docs/guidelines/`. Requirements and design rules live in those documents;
approved content lives in the source data, components, and local MDX files.

## Local development

Use the Node.js version in `.nvmrc`. Install dependencies with `npm ci`, then run
`npm run dev`.

- `npm run check` — formatting, ESLint, strict TypeScript, and Vitest.
- `npm run build` — production static export into `out/`.
- `npm run format` — format maintained source and configuration.
- `npm run test:watch` — interactive unit tests.

## SEO and social previews

Production defaults to `https://reshevski.online`. Shared title, description,
origin, and social-image settings are in `src/lib/site.ts`.
`NEXT_PUBLIC_SITE_URL` optionally overrides the origin at build time.

- Root metadata supplies the homepage canonical, Open Graph, and large-image
  Twitter Card. Project pages have their own canonical, title, and description.
- `public/og-image.png` is the supplied 1200×630 social cover, reused across pages
  until project-specific covers are available.
- `src/app/robots.ts` and `src/app/sitemap.ts` export `robots.txt` and `sitemap.xml`.