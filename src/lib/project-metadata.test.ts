import { expect, it } from 'vitest';
import { projects } from '@/data/projects';
import { createProjectMetadata } from './project-metadata';
import { absoluteUrl } from './site';

it('gives every project unique metadata, its own canonical URL, and social cards', () => {
  const metadata = projects.map((project) => createProjectMetadata(project));
  expect(new Set(metadata.map(({ title }) => title)).size).toBe(
    projects.length,
  );
  metadata.forEach((entry, index) => {
    const canonical = absoluteUrl(`/projects/${projects[index].slug}/`);
    expect(entry.description).toBe(projects[index].description);
    expect(entry.alternates).toEqual({ canonical });
    expect(entry.openGraph).toMatchObject({
      title: entry.title,
      description: entry.description,
      type: 'article',
      url: canonical,
      images: [{ url: absoluteUrl('/og-image.png'), width: 1200, height: 630 }],
    });
    expect(entry.twitter).toMatchObject({
      card: 'summary_large_image',
      title: entry.title,
      description: entry.description,
      images: [{ url: absoluteUrl('/og-image.png') }],
    });
  });
});

it('uses the configured origin consistently for canonical and social image URLs', () => {
  const entry = createProjectMetadata(projects[0], 'https://portfolio.example');
  const url = `https://portfolio.example/projects/${projects[0].slug}/`;
  expect(entry.alternates).toEqual({ canonical: url });
  expect(entry.openGraph).toHaveProperty('url', url);
  expect(entry.openGraph).toMatchObject({
    images: [{ url: 'https://portfolio.example/og-image.png' }],
  });
  expect(entry.twitter).toMatchObject({
    images: [{ url: 'https://portfolio.example/og-image.png' }],
  });
});
