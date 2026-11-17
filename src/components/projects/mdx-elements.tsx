import type { ComponentProps } from 'react';
import Link from 'next/link';
import styles from './ProjectContent.module.scss';

export function CaseStudyLink({ href, ...props }: ComponentProps<'a'>) {
  if (
    (href?.startsWith('/') && !href.startsWith('//')) ||
    href?.startsWith('#')
  ) {
    return (
      <Link {...props} href={href} className={styles['case-content__link']} />
    );
  }
  return <a {...props} href={href} className={styles['case-content__link']} />;
}

export function CaseStudyImage({
  src,
  alt = '',
  ...props
}: ComponentProps<'img'>) {
  if (!src) return null;
  // Native images support Markdown assets without a runtime optimization server.
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      src={src}
      alt={alt}
      loading="lazy"
      className={styles['case-content__image']}
    />
  );
}
