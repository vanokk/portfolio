# Styling Guidelines — SCSS Modules & BEM

Visual specifications, including palettes, typography, dimensions, spacing, and
breakpoints, are defined in `docs/DESIGN.md`. UI verification procedures are in
`docs/guidelines/TESTING.md`.

## CSS architecture

- Use SCSS Modules (`Component.module.scss`) for component-specific styles.
- Use one minimal global SCSS entry for resets, base typography, theme variables, and accessible defaults.
- Declare theme colors with semantic CSS custom properties on `:root` and `:root[data-theme='dark']`.
- Keep CSS selectors low specificity and avoid heavy nesting, `!important`, broad element selectors inside components, and hardcoded repeated colors.
- Avoid styling by IDs; use component classes or semantic state attributes.

## BEM convention

- Every component has a clear root **block**.
- Use `block__element` and `block--modifier` / `block__element--modifier`.
- Use kebab-case for multiword names.
- Keep root, elements, and modifiers under local SCSS Modules. Do not rely on global BEM selectors.
- Avoid ambiguous nested blocks; use a new standalone block for components that need to be reused.

### SCSS parent-selector rule

In every SCSS file that defines BEM classes, declare the block once and write its
elements and modifiers inside it using the Sass parent selector `&`:

- Elements: `&__element`.
- Block modifiers: `&--modifier`.
- Element modifiers: `&__element--modifier`, or `&--modifier` inside `&__element`.
- States, pseudo-elements, and responsive overrides stay inside the relevant
  block or element, using `&:hover`, `&:focus-visible`, `&::before`, and nested
  media queries as appropriate.

Do not repeat the full block name in standalone element or modifier selectors.
For example, define the main element of the site shell as `&__main` inside
`.site-shell`. This is an authoring convention: the compiled selectors remain
flat BEM classes, not descendant selectors. Do not add DOM-dependent nesting or
increase selector specificity while applying it.

For relationships between a block state and one of its elements, use parent
selectors such as `&:hover &__title` at block scope. Theme ancestors may use
`:global([data-theme='dark']) &__element` at the same scope. Global resets,
semantic element selectors, tokens, and mixin definitions are not BEM blocks and
do not need an artificial class wrapper.

Example:

```scss
.project-row {
  display: grid;
  gap: 24px;

  &__title {
    color: var(--strong);

    &--muted {
      color: var(--muted);
    }
  }

  &__preview {
    background: var(--panel);
    border: 1px solid var(--line);
  }

  &--featured {
    border-color: var(--accent);
  }
}
```

```tsx
import styles from './ProjectRow.module.scss';

export function ProjectRow() {
  return (
    <article className={styles['project-row']}>
      <div className={styles['project-row__preview']} aria-hidden="true" />
      <h3 className={styles['project-row__title']}>Project name</h3>
    </article>
  );
}
```

When a modifier is conditional, combine the root and modifier classes explicitly; do not assume SCSS Modules infer modifiers from HTML class names.

## Tokens and responsive styles

- Reuse semantic CSS custom properties from `src/styles/tokens.scss`; do not copy
  palette values into component styles.
- Use the shared mixins in `src/styles/mixins.scss` where applicable. Keep media
  queries inside the relevant BEM block or element.
- Keep theme variants scoped to the relevant component and root theme attribute.
- Implement motion with CSS and honor `prefers-reduced-motion` according to
  `docs/DESIGN.md`.
