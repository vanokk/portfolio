import type { MDXComponents } from 'mdx/types';
import {
  CaseStudyImage,
  CaseStudyLink,
} from '@/components/projects/mdx-elements';
import styles from '@/components/projects/ProjectContent.module.scss';

const components: MDXComponents = {
  // The layout owns the page h1; Markdown headings begin at h2.
  h1: (props) => <h2 {...props} className={styles['case-content__heading']} />,
  h2: (props) => <h2 {...props} className={styles['case-content__heading']} />,
  h3: (props) => (
    <h3 {...props} className={styles['case-content__subheading']} />
  ),
  h4: (props) => (
    <h4 {...props} className={styles['case-content__subheading']} />
  ),
  h5: (props) => (
    <h5 {...props} className={styles['case-content__subheading']} />
  ),
  h6: (props) => (
    <h6 {...props} className={styles['case-content__subheading']} />
  ),
  p: (props) => <p {...props} className={styles['case-content__paragraph']} />,
  ul: (props) => <ul {...props} className={styles['case-content__list']} />,
  ol: (props) => <ol {...props} className={styles['case-content__list']} />,
  li: (props) => <li {...props} className={styles['case-content__item']} />,
  pre: (props) => <pre {...props} className={styles['case-content__pre']} />,
  code: ({ className = '', ...props }) => (
    <code
      {...props}
      className={`${styles['case-content__code']} ${className}`}
    />
  ),
  blockquote: (props) => (
    <blockquote {...props} className={styles['case-content__quote']} />
  ),
  hr: (props) => <hr {...props} className={styles['case-content__rule']} />,
  a: CaseStudyLink,
  img: CaseStudyImage,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
