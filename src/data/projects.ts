export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly order: number;
  readonly image?: string;
  readonly imageAlt?: string;
  readonly category?: string;
  readonly role?: string;
  readonly duration?: string;
}

// Approved homepage content in its original display order. Images are not supplied.
export const projects = [
  {
    slug: 'international-money-transfer-platform',
    title: 'International money transfer platform',
    description:
      'Cross-border money transfers, onboarding, wallets and payment processing.',
    technologies: ['Vue.js', 'Nuxt.js', 'PHP', 'Symfony', 'Java'],
    order: 1,
  },
  {
    slug: 'project-management-tool',
    title: 'Project management tool',
    description:
      'Internal tool for managing tasks, project boards, sprints and team workflows.',
    technologies: ['React', 'Redux', 'TypeScript', 'Node.js', 'NestJS'],
    order: 2,
  },
  {
    slug: 'german-utility-payment-platform',
    title: 'German utility payment platform',
    description:
      'Web application for paying utility bills in Germany, with responsive UI and localization.',
    technologies: ['React', 'Redux', 'Bootstrap'],
    order: 3,
  },
  {
    slug: 'educational-collaboration-platform',
    title: 'Educational collaboration platform',
    description:
      'Platform connecting employers, educational institutions and professionals.',
    technologies: ['Vue 2', 'Vuex', 'Laravel', 'Highcharts', 'Storybook'],
    order: 4,
  },
  {
    slug: 'ecommerce-product-review-widget',
    title: 'E-commerce product review widget',
    description:
      'Embeddable widget for recording and submitting video product reviews in the browser.',
    technologies: ['Vue.js', 'Nuxt.js', 'HTML5 Video API'],
    order: 5,
  },
  {
    slug: 'corporate-website',
    title: 'Corporate website',
    description:
      'Company website with a focus on PageSpeed performance and SEO.',
    technologies: ['WordPress', 'PHP', 'SCSS'],
    order: 6,
  },
  {
    slug: 'travel-blog-website',
    title: 'Travel blog website',
    description:
      'Personal travel site with pixel-accurate, responsive layouts.',
    technologies: ['HTML', 'CSS', 'BEM'],
    order: 7,
  },
] as const satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]['slug'];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectNeighbors(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return undefined;
  return { previous: projects[index - 1], next: projects[index + 1] };
}
