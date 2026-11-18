export const site = {
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://reshevski.online')
    .origin,
  name: 'Ivan Reshevskyi',
  title: 'Ivan Reshevskyi - Senior Frontend / Full-Stack Engineer',
  description:
    'Portfolio of Ivan Reshevskyi, a senior full-stack engineer focused on fintech, frontend architecture, backend systems and AI-assisted development.',
  jobTitle: 'Senior Frontend / Full-Stack Engineer',
  image: {
    path: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Ivan Reshevskyi — Senior Frontend / Full-Stack Engineer',
  },
} as const;

export function absoluteUrl(path: string, origin = site.url) {
  return new URL(path, origin).href;
}

export function socialImage(origin = site.url) {
  return {
    url: absoluteUrl(site.image.path, origin),
    width: site.image.width,
    height: site.image.height,
    alt: site.image.alt,
    type: 'image/png',
  };
}
