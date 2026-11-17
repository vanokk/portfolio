# Portfolio Website — Project Specification

## 1. Purpose and source of truth

Build a personal portfolio for **Ivan Reshevskyi**, a Senior Frontend / Full-Stack Engineer.

This document defines the approved functionality, content order, and routes. `docs/DESIGN.md` defines the visual rules. Approved content is maintained in `src/data/`, the About component, shared identity components, and `src/content/projects/`. Preserve the current wording and design unless a task explicitly requests a change. Report conflicting requirements before changing UI or factual content.

The initial site has **one homepage** and **individual project pages**. English is the only language for now.

## 2. Technology and rendering requirements

- Next.js App Router, React, TypeScript with strict type checking.
- Fully static build using `output: 'export'`. The deployed site must not need a Node.js server.
- SCSS Modules and BEM naming (`block__element--modifier`); shared SCSS and semantic CSS custom properties for theme tokens.
- Avoid Tailwind CSS, shadcn/ui, UI kits, Motion for React, and unnecessary client-side dependencies.
- CSS transitions/keyframes for subtle interactions; honor `prefers-reduced-motion`.
- Project metadata is stored in typed structured data; case-study bodies use local MDX compiled at build time. Do not duplicate metadata in MDX files.
- No CMS, database, authentication, backend API, contact-form backend, or runtime server features.
- Hosting provider is undecided; do not configure GitHub Pages, Cloudflare Pages, or any other host without a request.

## 3. Routes

| Route | Purpose |
| --- | --- |
| `/` | Single-page portfolio with all existing content sections |
| `/projects/[slug]/` | Static project case study; generate every known slug at build time |

Use `generateStaticParams()` for project detail routes. All internal project links must point to real generated pages. Do not leave `href="#"` in production. Provide a deliberate back-to-home/projects link on every project page.

## 4. Homepage structure

### Desktop shell

- A centered page wrapper, approximately 1160 px maximum width.
- Two-column layout: **left sticky sidebar** + **right main content**.
- Sidebar contains name, job title, brief tagline, section navigation, social links, and theme toggle.
- Main column scrolls through content sections.
- Do **not** add a separate top header, full-width hero, statistic strip, or standalone contact banner; preserve the approved sidebar layout.

### Sidebar

Displayed identity:
- Name: **Ivan Reshevskyi**
- Role: **Senior Frontend / Full-Stack Engineer**
- Tagline: **I build web products with clean code and clear interfaces.**

Section navigation order:
1. About
2. Experience
3. Projects
4. Skills

Footer area of sidebar:
- Email: `mailto:reshevskiivan@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/ivan-reshevskyi-2639b6a8/`
- GitHub: `https://github.com/vanokk`
- Instagram: `https://www.instagram.com/ivanreshevskii/`
- Light/dark theme toggle

Keep the navigation labels, destinations, and social links consistent with the URLs and labels defined here. Use accessible link names, real anchor links, keyboard focus states, and secure attributes for new-tab external links where appropriate.

### Main content order

1. `#about` — four biographical paragraphs, including development experience, core technologies, leadership, AI/MCP, and interests outside work.
2. `#experience` — dated vertical timeline, with **four entries**:
   - Senior Fullstack Engineer — FinTech Company — Jun 2026–Present
   - Frontend Team Lead — GroupBWT — Jul 2021–Jun 2026
   - Senior Frontend Developer — GroupBWT — Jan 2019–Jun 2021
   - Frontend Developer — GroupBWT — May 2015–Dec 2018
3. `#projects` — seven project rows, initially showing three; button toggles the remaining four.
4. `#skills` — six labeled rows (Frontend, Backend, Testing, AI tools, Infrastructure, Leadership).
5. `#education` — university, Master's degree, 2010.
6. `#certifications` — two AWS Partner certificates, dated **2025**. Verify these dates before final publication; do not silently replace them.
7. `#languages` — Ukrainian (Native), English (Upper-intermediate), Czech (Beginner).
8. Bottom footer text — **Thanks for visiting. © {current year} Ivan Reshevskyi**.

**Prague, Czech Republic** appears below the professional title in the sidebar.

Preserve the approved descriptions and achievement bullets in the content modules. Separate lengthy static data from rendering components without changing its meaning.

## 5. Projects

- Initially show the first three projects; reveal the remaining projects with a button.
- Each project has a unique slug and a statically generated page.
- Metadata lives in `src/data/projects.ts`; detailed content lives in MDX.

## 6. Responsive behavior

- At desktop widths, use the sticky left-column shell.
- Use a stacked layout at widths at or below approximately 1024 px: profile information first, content below; desktop navigation is hidden.
- On smaller screens, social links use icons, and project rows stack image above text at approximately 640 px and below.
- Preserve this responsive behavior. Improvements to mobile navigation require a separate, explicit decision.
- Avoid fixed elements that cover content, horizontal overflow, and inaccessible icon controls.

## 7. Interaction behavior

- Navigation anchors scroll to matching section IDs and show an active state during scrolling.
- Existing navigation interaction uses the **dash** style (a short line appearing beside the active or hovered link). Keep this one variant.
- Use only the dash navigation animation; do not add animation-mode controls.
- Light/dark theme toggle persists the visitor's preference. Use a saved `localStorage.theme` selection when present; otherwise follow the system theme preference.
- Make active/current states accessible and ensure theme initialization minimizes visible flashing.
- All interactions should remain usable with a keyboard.

## 8. Accessibility and SEO

- Semantic landmarks: sidebar/aside, navigation, main, sections, footer.
- One top-level heading per page; meaningful heading order.
- Descriptive links and buttons, keyboard focus visibility, accessible theme toggle.
- Reduced-motion support, readable contrast, useful alternative text for actual images.
- Per-page metadata (title, description, Open Graph when useful), canonical links after a domain is selected, static sitemap and robots when appropriate.
- Do not assume images exist. Empty decorative placeholders should not receive misleading alt text.

## 9. Source-content policy

- The current content modules contain the approved dates, role names, biographies, skills, and social links.
- Earlier CV discussions are background context, not authorization to overwrite approved wording.
- Do not invent employment details, statistics, companies, certificates, awards, image assets, or project results.
- If a date or statement seems inconsistent with another document, report it and request confirmation; don't silently 'correct' it.
- Avoid exposing confidential FinTech/client information on project pages.

## 10. Development workflow

1. Read the relevant requirements, design rules, and affected source files.
2. Preserve the strict TypeScript, SCSS Modules, BEM, and static export setup.
3. Reuse the shared shell, sidebar, section components, and project-page layout.
4. Keep interactions accessible: active navigation, theme persistence, project expansion, keyboard focus, and reduced motion.
5. Keep metadata and approved MDX in sync with the seven known project routes.
6. Verify desktop, tablet, and mobile layouts, run checks, and validate the static export.

Before adding dependencies or changing architecture, explain the benefit and request approval.

## 11. Acceptance criteria

- The homepage follows `docs/DESIGN.md` and preserves all approved content at supported screen widths.
- Left sidebar is sticky on desktop and stacked on smaller screens.
- Light and dark themes work, persist preferences, and have accessible controls.
- Section links and active-state behavior work.
- The first three projects show by default; Show all / Show less works.
- All seven projects have working statically generated detail URLs.
- Content remains consistent, with no invented copy or images.
- No Tailwind, shadcn/ui, or Motion for React.
- Type checking, linting, relevant tests, and static export build succeed.
