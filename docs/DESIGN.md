# Portfolio Website — Design Specification

## 1. Design intent

This document defines the approved typography, spacing, split-screen structure, light/dark colors, component presentation, and visual states. Preserve these rules and the current implementation unless a task explicitly requests a design change.

Design direction: **minimal, engineering-focused editorial portfolio**. Use technical typography, subtle details, readable content, quiet hierarchy, and ample whitespace. Keep the sticky-sidebar composition.

Functional requirements and content structure are defined in `docs/PROJECT.md`.
SCSS Modules, BEM, and Sass nesting rules are defined in `docs/guidelines/STYLING.md`.
Verification procedures are defined in `docs/guidelines/TESTING.md`.

## 2. Layout geometry

### Large screens

- Overall wrapper: `max-width: 1160px`, centered.
- The two-column sticky-sidebar layout applies **above 1024px**. At 1024px and below, use the single-column layout.
- Desktop grid: sidebar `310px`, content `minmax(0, 1fr)`, column gap `60px`, wrapper horizontal padding `48px`.
- Sidebar (`aside`): `position: sticky`, `top: 0`, `height: 100vh`, vertical flex with `justify-content: space-between`; vertical padding `80px 0 40px`.
- Main content: `padding: 96px 0`.

### Small and intermediate screens

- At `max-width: 1024px`, wrapper becomes a single column with `max-width: 760px`, horizontal padding `24px`.
- Sidebar becomes static and stacked, top padding `72px`.
- Main content starts below profile/social links; padding `72px 0 96px`.
- Desktop navigation is hidden at that breakpoint (no replacement mobile menu).
- Link text is hidden in favor of social icons; layout remains usable with accessible labels.
- Project media/text rows stack to one column at `max-width: 640px`.

## 3. Design colors

### Light theme (`:root`)

| Semantic role | CSS variable | Value |
| --- | --- | --- |
| Page background | `--bg` | `#FAFCFC` |
| Subtle panel/background | `--panel` | `#EAF2F4` |
| Surface | `--surface` | `#FFFFFF` |
| Body text | `--fg` | `#3A4D61` |
| Strong headings | `--strong` | `#19324F` |
| Secondary labels | `--muted` | `#5E7185` |
| Hairline borders | `--line` | `#D3E0E5` |
| Primary accent | `--accent` | `#087F8C` |

### Dark theme (`data-theme="dark"`)

| Semantic role | CSS variable | Value |
| --- | --- | --- |
| Page background | `--bg` | `#0E1C2C` |
| Subtle panel/background | `--panel` | `#15283D` |
| Surface | `--surface` | `#15283D` |
| Body text | `--fg` | `#C5D2DE` |
| Strong headings | `--strong` | `#EAF2F4` |
| Secondary labels | `--muted` | `#8AA0B3` |
| Hairline borders | `--line` | `#23384F` |
| Primary accent | `--accent` | `#3FB3BE` |

Use the shared semantic tokens in `src/styles/tokens.scss` for the current values of these palettes.

## 4. Typography

- Primary website font: **Space Grotesk**, weights 400, 500, 600; fallback to system sans serif.
- Main body: `16px / 1.65`, weight 400, antialiased.
- Desktop name (`h1`): `clamp(2rem, 3.4vw, 2.6rem)`, line-height `1.08`, weight 600, letter-spacing `-.03em`.
- Stacked-layout name: `clamp(2.6rem, 8vw, 3.6rem)`.
- Existing section headings: uppercase, `1.15rem`, weight 600, accent teal.
- Experience titles: `1.2rem`, medium weight; project titles `1.25rem`, medium weight.
- Dates, skill labels, and project metadata: native UI monospace (`ui-monospace`, SFMono, Menlo, etc.).
- Text paragraphs have a natural editorial measure determined by the right column.

## 5. Spacing and content density

The site is intentionally text-driven, not card-heavy.

- Sections have approximately `88px` bottom margin.
- Section headings have approximately `28px` bottom margin.
- Body paragraphs use about `16px` bottom margin.
- Important words in About are moderately bold and use strong navy/light heading color.

## 6. Sidebar composition

Top:
- Name, role text, location, short tagline.
- Display the location below the role in small muted text
  (0.85rem, 6px top margin).
- Vertical section navigation.

Bottom:
- Inline social links.
- Small circular theme toggle, approximately `32×32px`, with sun/moon icon.

At smaller widths:
- The profile remains above content.
- The navigation is hidden.
- Social links become icons while preserving accessible names.

Maintain generous vertical breathing room and alignment.

## 7. Navigation hover and active design

Use the **dash** navigation animation.

Production behavior:
- A short horizontal line expands before hovered/active navigation text.
- Hovered and keyboard-focused navigation/social links use
  `var(--accent)` (#087f8c in light mode, #3fb3be in dark mode). The active
  navigation link retains the stronger foreground color when not hovered/focused.
  Motion remains understated.
- Visual design: ~`24px` line, `1px` thickness, ~`12px` right margin, ease timing around `300ms`.
- Keep visible `:focus-visible` outlines (accent border/outline with offset).

## 8. Experience timeline

- Vertical thin teal track, with circular teal markers and a soft accent halo.
- Timeline entries have left indentation of approximately `28px` and generous bottom spacing (~`44px`).
- Monospace teal date label above each role.
- Navy/light role heading; company name shown underneath or within the heading as quieter secondary text.
- Achievement bullet lists are fully visible (not accordions).
- Technologies appear as a subdued metadata line, separated by bullets.

## 9. Project preview rows

Use **vertical project rows**.

- Each row: `display: grid`, columns approximately `200px minmax(0, 1fr)`, gap `24px`, top/bottom padding `24px`.
- Preview box: `aspect-ratio: 4 / 3`, light-blue/blue panel, 1px border, radius ~`6px`.
- To the right: project title, short description, teal technology line.
- Fine horizontal rules separate rows.
- On hover, project heading shifts from strong color to teal.
- At <=640px, media stacks above text.
- Preserve a clear focus-visible state for project rows.
- Empty project previews retain the same background, border, and aspect ratio.

## 10. Skills, education, certifications, languages

Use consistent **ruled rows** rather than cards:

- Thin border above group and between entries.
- Small monospace label on the left, primary content on the right.
- At >=640px, typical two-column row is about `150px 1fr`, with `20px` gap.
- At narrow widths, rows collapse to one column.
- Skill values and educational credentials use the same primary text color.
- Education year and certificate years are metadata, not colored badges.

## 11. Footer

Use a single line of small muted text with a thin top border, aligned with the
main content column. Preserve 24px top padding and a 0.82rem font size.

## 12. Light and dark themes

Both themes use the same layout and typography. Colors use the shared semantic
palette, including text, surfaces, dividers, accents, and focus outlines.

## 13. Motion

Use around `0.2–0.6s` transitions for links and expandable project rows.

- Keep hover/focus states subdued.
- Avoid heavy effects, gradients, parallax, animated backgrounds, and layout jumps.
- Under `prefers-reduced-motion: reduce`, disable nonessential movement and smooth scrolling.

## 14. Case study pages

Use a consistent editorial layout for all case-study pages.

- Reuse the existing site identity and left sidebar when appropriate.
- Preserve typography, colors, link interactions, and content widths.
- Back and previous/next navigation use the same link styling as the rest of the site.
- Maintain clear visual hierarchy between the page title, metadata, headings, and body text.
- Keep body text narrower if needed for readability.
