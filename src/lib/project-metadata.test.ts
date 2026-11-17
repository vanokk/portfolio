import { expect, it } from 'vitest';
import { projects } from '@/data/projects';
import { createProjectMetadata } from './project-metadata';

it('uses unique approved descriptions and omits invented URLs', () => {
  const metadata = projects.map((project) => createProjectMetadata(project));
  expect(new Set(metadata.map(({ title }) => title)).size).toBe(7);
  metadata.forEach((entry, index) => {
    expect(entry.description).toBe(projects[index].description);
    expect(entry.openGraph).toMatchObject({
      title: entry.title,
      description: entry.description,
      type: 'article',
    });
    expect(entry.alternates).toBeUndefined();
    expect(entry.openGraph).not.toHaveProperty('url');
  });
});

it('emits canonical and Open Graph URLs only for a configured production origin', () => {
  const entry = createProjectMetadata(projects[0], 'https://portfolio.example');
  const url = `https://portfolio.example/projects/${projects[0].slug}/`;
  expect(entry.alternates).toEqual({ canonical: url });
  expect(entry.openGraph).toHaveProperty('url', url);
});
