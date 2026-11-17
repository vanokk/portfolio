export interface ExperienceRecord {
  readonly title: string;
  readonly company: string;
  readonly dates: string;
  readonly achievements: readonly string[];
  readonly technologies: readonly string[];
}

// Approved professional experience in display order.
export const experience = [
  {
    title: 'Senior Fullstack Engineer',
    company: 'FinTech Company',
    dates: 'Jun 2026 — Present',
    achievements: [
      'Accelerated UI development using Figma MCP and validated implementations with Chrome DevTools MCP, reducing implementation time for new designs from hours to minutes.',
      'Reduced root cause investigation time for production incidents and failed payments from 2–3 hours to 10 minutes by building AI-assisted workflows with Elasticsearch MCP for log analysis.',
      'Resolved urgent customer issues during support rotations to keep payment services stable.',
      'Maintained 90% unit test coverage on features I delivered using Vitest.',
    ],
    technologies: [
      'Vue.js',
      'Nuxt.js',
      'JavaScript',
      'PHP',
      'Symfony',
      'Java',
      'REST APIs',
      'Vitest',
      'GitLab CI/CD',
      'Docker',
      'Storybook',
      'Codex',
      'MCP',
    ],
  },
  {
    title: 'Frontend Team Lead',
    company: 'GroupBWT',
    dates: 'Jul 2021 — Jun 2026',
    achievements: [
      'Guided 10 developers from Junior to Middle level through regular one-on-ones and technical growth plans.',
      'Mentored 15 trainees who joined the company; several advanced to Middle level.',
      'Introduced CI/CD and AI-assisted reviews, cutting merge request review time by 30%.',
      'Built an onboarding system and internal documentation, which significantly improved the adaptation process for new team members.',
    ],
    technologies: [
      'Vue.js',
      'Nuxt.js',
      'Node.js',
      'Strapi',
      'Laravel',
      'PHP',
      'Code review standards',
      'Technical documentation',
    ],
  },
  {
    title: 'Senior Frontend Developer',
    company: 'GroupBWT',
    dates: 'Jan 2019 — Jun 2021',
    achievements: [
      'Refactored landing pages, resulting in faster load times and consistent 90+ scores in PageSpeed Insights.',
      'Led the migration from Vue 2 to Vue 3 with no major regressions.',
      'Conducted internal workshops and presentations on Vue/Nuxt architecture.',
      'Improved dashboard UX/UI, making it more intuitive and responsive, which simplified navigation and daily usage.',
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'React', 'TypeScript', 'SCSS'],
  },
  {
    title: 'Frontend Developer',
    company: 'GroupBWT',
    dates: 'May 2015 — Dec 2018',
    achievements: [
      'Created a Storybook component system for a major project, reducing feature development time by 25%.',
      'Promoted to Senior Developer in recognition of consistent contributions and strong project delivery.',
    ],
    technologies: ['HTML', 'SCSS', 'BEM', 'Vue.js', 'Storybook'],
  },
] as const satisfies readonly ExperienceRecord[];
