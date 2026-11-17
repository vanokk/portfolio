import type { MDXContent } from 'mdx/types';
import type { ProjectSlug } from '@/data/projects';
import Project0 from './international-money-transfer-platform.mdx';
import Project1 from './project-management-tool.mdx';
import Project2 from './german-utility-payment-platform.mdx';
import Project3 from './educational-collaboration-platform.mdx';
import Project4 from './ecommerce-product-review-widget.mdx';
import Project5 from './corporate-website.mdx';
import Project6 from './travel-blog-website.mdx';

// Explicit registry prevents unapproved content from creating routes.
export const projectContent = {
  'international-money-transfer-platform': Project0,
  'project-management-tool': Project1,
  'german-utility-payment-platform': Project2,
  'educational-collaboration-platform': Project3,
  'ecommerce-product-review-widget': Project4,
  'corporate-website': Project5,
  'travel-blog-website': Project6,
} satisfies Record<ProjectSlug, MDXContent>;
