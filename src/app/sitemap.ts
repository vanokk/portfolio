import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { absoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl('/') },
    ...projects.map(({ slug }) => ({ url: absoluteUrl(`/projects/${slug}/`) })),
  ];
}
