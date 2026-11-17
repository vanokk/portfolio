import type { Metadata } from 'next';
import type { Project } from '@/data/projects';

export function createProjectMetadata(
  project: Project,
  siteUrl?: string,
): Metadata {
  const title = `${project.title} — Ivan Reshevskyi`;
  const canonical = siteUrl
    ? new URL(`/projects/${project.slug}/`, siteUrl).href
    : undefined;
  return {
    title,
    description: project.description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title,
      description: project.description,
      type: 'article',
      ...(canonical ? { url: canonical } : {}),
    },
  };
}
