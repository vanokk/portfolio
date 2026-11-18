import Link from 'next/link';
import { getProjectNeighbors } from '@/data/projects';
import styles from './ProjectNavigation.module.scss';

export function ProjectNavigation({ slug }: Readonly<{ slug: string }>) {
  const neighbors = getProjectNeighbors(slug);
  if (!neighbors) return null;
  return (
    <nav
      className={styles['project-navigation']}
      aria-label="Project navigation"
    >
      {neighbors.previous && (
        <Link
          className={styles['project-navigation__link']}
          href={`/projects/${neighbors.previous.slug}/`}
          rel="prev"
          aria-label="Previous project"
        >
          Previous
          <span className={styles['project-navigation__suffix']}>
            &nbsp;project
          </span>
        </Link>
      )}
      {neighbors.next && (
        <Link
          className={`${styles['project-navigation__link']} ${styles['project-navigation__link--next']}`}
          href={`/projects/${neighbors.next.slug}/`}
          rel="next"
          aria-label="Next project"
        >
          Next
          <span className={styles['project-navigation__suffix']}>
            &nbsp;project
          </span>
        </Link>
      )}
    </nav>
  );
}
