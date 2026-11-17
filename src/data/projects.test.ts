import { describe, expect, it } from 'vitest';
import { getProject, getProjectNeighbors, projects } from './projects';

describe('project route navigation', () => {
  it('uses only known unique slugs in the approved order', () => {
    expect(new Set(projects.map(({ slug }) => slug)).size).toBe(7);
    expect(projects.map(({ order }) => order)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(getProject('unknown')).toBeUndefined();
    expect(getProjectNeighbors('unknown')).toBeUndefined();
  });
  it.each(projects)(
    'finds adjacent projects for $slug without wrapping',
    ({ slug }) => {
      const index = projects.findIndex((project) => project.slug === slug);
      expect(getProjectNeighbors(slug)).toEqual({
        previous: projects[index - 1],
        next: projects[index + 1],
      });
    },
  );
});
