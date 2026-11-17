# Architecture Guidelines

Functional requirements, stack, and project constraints are defined in
`docs/PROJECT.md`. Styling conventions are defined in
`docs/guidelines/STYLING.md`; verification is covered by
`docs/guidelines/TESTING.md`.

## Rendering and component boundaries

- Use Server Components for layouts, static sections, metadata, and MDX content.
- Keep Client Components small and limited to interactive behavior.
- Do not move a large subtree to the client to support one control.
- Reuse SiteShell, Sidebar, InfoRows, and the shared project-page layout.
- Keep all routes compatible with static export; avoid request-time APIs.

## Routing and static generation

- `src/app/page.tsx` renders the homepage.
- `src/app/projects/[slug]/page.tsx` renders project pages.
- Derive `generateStaticParams()` from `src/data/projects.ts` and disable dynamic
  parameters so unsupported slugs do not generate pages.
- Use Next.js Link for internal navigation. Shared sidebar links on project
  pages target homepage anchors such as `/#about` and `/#projects`.
- Generate page metadata with static-compatible APIs. Canonical URLs require a
  configured production origin.

## Source organization

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.scss
    projects/[slug]/page.tsx
  components/
    layout/              # SiteShell, Sidebar, SocialLinks, Footer
    navigation/          # Static links and homepage active-section tracking
    theme/               # Theme toggle and initialization
    sections/            # About, Experience, Projects, Skills, Education,
                         # Certifications, Languages
    projects/            # ProjectLayout, ProjectNavigation, MDX elements
    ui/InfoRows/         # Shared labelled rows
  content/projects/      # MDX files and an explicit typed registry
  data/                  # Typed project, experience, skill, and identity data
  lib/                   # Project metadata helpers
  styles/                # Shared tokens and responsive mixins
  types/                 # MDX declarations
  mdx-components.tsx
```

Keep documentation paths in sync with the implementation. Do not create unused
files or generic abstractions without a concrete need.

## Data and MDX

- Keep structured records separate from presentation, using readonly arrays and
  explicit TypeScript types where useful.
- Keep project metadata in `src/data/projects.ts` and bodies in
  `src/content/projects/`, compiled at build time by `@next/mdx`.
- Keep the explicit typed MDX registry in sync with the supported project slugs.
- Read shared metadata from the data module rather than duplicating it in MDX.
- Apply the content policy in `docs/PROJECT.md` when editing data or MDX.

## Browser behavior and hydration

- Initialize the root `data-theme` before hydration to avoid theme flashing;
  handle unavailable browser storage without breaking the page.
- Track homepage sections with an efficient observer and clean up observers and
  event listeners in effects.
- Use React state and props for rendered content and labels; do not directly
  mutate React-owned content.
- Ensure collapsed content is not keyboard-focusable or exposed to assistive
  technology.

## Assets and typing

- Use image handling compatible with static export. Native images need no runtime
  optimization server; next/image requires compatible configuration if adopted.
- Keep types strict and component boundaries intentional. Avoid `any` unless
  narrowly justified.
- Prefer readable implementations and pure functions for data transformations.
