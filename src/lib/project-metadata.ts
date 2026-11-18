import type { Metadata } from 'next';
import type { Project } from '@/data/projects';
import { absoluteUrl, site, socialImage } from './site';

export function createProjectMetadata(
  project: Project,
  origin = site.url,
): Metadata {
  const title = `${project.title} — Ivan Reshevskyi`;
  const canonical = absoluteUrl(`/projects/${project.slug}/`, origin);
  return {
    title,
    description: project.description,
    alternates: { canonical },
    openGraph: {
      title,
      description: project.description,
      type: 'article',
      url: canonical,
      siteName: site.name,
      locale: 'en_US',
      images: [socialImage(origin)],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: project.description,
      images: [socialImage(origin)],
    },
  };
}
