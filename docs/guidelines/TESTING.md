# Testing and Verification Guidelines

Choose verification appropriate to the affected code. Functional requirements
and content policy are in `docs/PROJECT.md`; visual specifications are in
`docs/DESIGN.md`. Documentation-only changes need review and link validation,
not an application rebuild.

## Code checks

- `npm run format:check` — formatting.
- `npm run lint` — ESLint.
- `npm run typecheck` — strict TypeScript.
- `npm test` — Vitest and React Testing Library tests.
- `npm run check` — all four checks above.
- `npm run build` — production static export. Check that `out/` contains the
  homepage and a page for every project in `src/data/projects.ts`, with no
  unsupported project slugs.

## Unit tests

Use the existing Vitest and React Testing Library setup. Test meaningful behavior
rather than snapshots of static text or trivial markup. Do not add another test
framework or browser automation dependency without a concrete need and approval.

Useful cases include:

- Project expansion/collapse, accessibility attributes, and focus management.
- Theme switching, persistence, system fallback, and storage failures.
- Active-section tracking and observer cleanup.
- Project lookup and previous/next navigation boundaries.
- MDX rendering and project metadata with and without a configured domain.
- Nontrivial data transformations.

## Browser verification

For UI changes, inspect the affected views at desktop, tablet, and mobile widths
and in both themes. Check applicable scenarios:

- Sticky desktop sidebar and stacked layout around the breakpoint in DESIGN.md.
- Project-row and InfoRows stacking around their responsive breakpoints.
- Theme initialization, accessible toggle labels, and persistence after reload.
- Anchor links, active navigation, and dash states while scrolling down and up.
- Three initial projects, Show all / Show less, and inaccessible collapsed links.
- All homepage project links, Back to Projects, previous/next links, and unsupported
  slug handling in the static export.
- Keyboard order, visible focus, accessible names, and reduced-motion behavior.
- Contact/social links, valid image sources, no placeholder navigation URLs,
  horizontal overflow, or browser console errors.

For content changes, verify the affected values, order, and privacy requirements
against the approved content and the policy in `docs/PROJECT.md`. Resolve pending
factual questions with the owner before publication.

Follow `AGENTS.MD` when reporting results. State any skipped or unavailable checks;
do not claim visual verification unless the rendered UI was actually inspected.
