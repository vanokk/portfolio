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