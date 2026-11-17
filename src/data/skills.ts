import type { InfoRow } from './info-row';

export const skills = [
  {
    label: 'Frontend',
    primary:
      'JavaScript · TypeScript · Vue.js 2/3 · Nuxt.js · React · Vuex · Redux · HTML5 · CSS3 · SCSS · BEM',
  },
  {
    label: 'Backend',
    primary:
      'PHP · Symfony · Laravel · Node.js · Strapi · NestJS · REST APIs · Java',
  },
  {
    label: 'Testing',
    primary: 'Vitest · Jest',
  },
  {
    label: 'AI tools',
    primary:
      'Codex · MCP (Figma, GitLab, Atlassian, Elasticsearch, Chrome DevTools) · Prompt engineering',
  },
  {
    label: 'Infrastructure',
    primary: 'Git · Docker · GitLab CI/CD · AWS · Vite · Webpack · Storybook',
  },
  {
    label: 'Leadership',
    primary: 'Code review · Technical documentation · Mentoring · Onboarding',
  },
] as const satisfies readonly InfoRow[];
