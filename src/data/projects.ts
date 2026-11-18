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
  readonly confidential?: boolean;
}

// Approved project metadata in its original display order.
export const projects = [
  {
    slug: 'international-money-transfer-platform',
    title: 'International money transfer platform',
    description:
      'Cross-border money transfers, onboarding, wallets and payment processing.',
    technologies: ['Vue.js', 'Nuxt.js', 'PHP', 'Symfony', 'Java'],
    role: 'Senior Full-Stack Engineer',
    duration: '7.5 years',
    image: '/images/projects/international-money-transfer-platform.webp',
    imageAlt:
      'Anonymized money transfer interface mockup with obscured amounts',
    order: 1,
  },
  {
    slug: 'project-management-tool',
    title: 'Project management tool',
    description:
      'Internal tool for managing tasks, project boards, sprints and team workflows.',
    technologies: ['React', 'Redux-Saga', 'TailwindCSS', 'WebSocket'],
    role: 'Full-Stack Engineer',
    duration: '3 months',
    image: '/images/projects/project-management-tool.webp',
    imageAlt:
      'Project management dashboard with a task board and sprint charts',
    order: 2,
  },
  {
    slug: 'german-utility-payment-platform',
    title: 'German Utility Payment Platform',
    description:
      'Web application for paying utility bills in Germany, with responsive UI and localization.',
    technologies: ['React', 'Redux', 'Bootstrap'],
    role: 'React Developer',
    duration: '4 months',
    image: '/images/projects/german-utility-payment-platform.webp',
    imageAlt:
      'Utility dashboard showing bills, payments, and consumption charts',
    order: 3,
  },
  {
    slug: 'career-development-talent-platform',
    title: 'Career Development & Talent Platform',
    description:
      'Platform connecting employers, educational institutions and professionals.',
    technologies: ['Vue 2', 'Vuex', 'Laravel', 'Highcharts', 'Storybook'],
    role: 'Frontend Developer',
    duration: '2 years',
    image: '/images/projects/career-development-talent-platform.webp',
    imageAlt: 'Career and talent platform dashboard with application analytics',
    order: 4,
  },
  {
    slug: 'ecommerce-product-review-widget',
    title: 'E-commerce product review widget',
    description:
      'Embeddable widget for recording and submitting video product reviews in the browser.',
    technologies: ['Vue.js', 'Nuxt.js', 'HTML5 Video API'],
    role: 'Team Lead',
    duration: '6 months',
    image: '/images/projects/ecommerce-product-review-widget.webp',
    imageAlt: 'E-commerce product page with a photo and video review widget',
    order: 5,
  },
  {
    slug: 'corporate-website',
    title: 'GroupBWT Website',
    description:
      'Company website with a focus on PageSpeed performance and SEO.',
    technologies: ['WordPress', 'PHP', 'SCSS', 'JavaScript'],
    role: 'Team Lead',
    duration: '3 years',
    confidential: false,
    image: '/images/projects/groupbwt-website.webp',
    imageAlt: 'GroupBWT corporate website homepage',
    order: 6,
  },
  {
    slug: 'travel-blog-website',
    title: 'Travel Blog Website',
    description:
      'Personal travel site with pixel-accurate, responsive layouts.',
    technologies: ['HTML', 'CSS', 'BEM'],
    role: 'Frontend Developer',
    duration: '3 months',
    image: '/images/projects/travel-blog-website.webp',
    imageAlt:
      'Travel blog homepage with destinations, stories, and photography',
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
