import { expect, it } from 'vitest';
import { projects } from '@/data/projects';
import robots from '@/app/robots';
import sitemap from '@/app/sitemap';
import { siteMetadata } from './site-metadata';
import { absoluteUrl, site } from './site';
import { profileStructuredData } from './profile-structured-data';

it('uses the supplied title and description for the homepage and social cards', () => {
  expect(siteMetadata.title).toBe(
    'Ivan Reshevskyi - Senior Frontend / Full-Stack Engineer',
  );
  expect(siteMetadata.description).toBe(
    'Portfolio of Ivan Reshevskyi, a senior full-stack engineer focused on fintech, frontend architecture, backend systems and AI-assisted development.',
  );
  expect(siteMetadata.alternates).toEqual({ canonical: absoluteUrl('/') });
  expect(siteMetadata.openGraph).toMatchObject({
    type: 'website',
    url: absoluteUrl('/'),
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: absoluteUrl('/og-image.png'),
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    ],
  });
  expect(siteMetadata.twitter).toMatchObject({
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
  });
});

it('allows crawling and exposes a sitemap containing exactly the exported content pages', () => {
  expect(robots()).toEqual({
    rules: { userAgent: '*', allow: '/' },
    sitemap: absoluteUrl('/sitemap.xml'),
  });
  const urls = sitemap().map(({ url }) => url);
  expect(urls).toEqual([
    absoluteUrl('/'),
    ...projects.map(({ slug }) => absoluteUrl(`/projects/${slug}/`)),
  ]);
  expect(new Set(urls).size).toBe(projects.length + 1);
  expect(
    urls.every((url) => url.startsWith(site.url) && !url.includes('#')),
  ).toBe(true);
});

it('identifies the existing portfolio owner in structured data without invented profile claims', () => {
  const profile = profileStructuredData['@graph'].find(
    (node) => node['@type'] === 'ProfilePage',
  );
  const person = profileStructuredData['@graph'].find(
    (node) => node['@type'] === 'Person',
  );
  expect(profile).toMatchObject({
    mainEntity: { '@id': absoluteUrl('/#person') },
    url: absoluteUrl('/'),
  });
  expect(person).toMatchObject({
    name: 'Ivan Reshevskyi',
    jobTitle: site.jobTitle,
    url: absoluteUrl('/'),
  });
  expect(person).not.toHaveProperty('image');
  expect(person).not.toHaveProperty('worksFor');
});
