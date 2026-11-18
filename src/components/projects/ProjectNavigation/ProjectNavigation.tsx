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
        >
          Previous project
        </Link>
      )}
      {neighbors.next && (
        <Link
          className={`${styles['project-navigation__link']} ${styles['project-navigation__link--next']}`}
          href={`/projects/${neighbors.next.slug}/`}
          rel="next"
        >
          Next project
        </Link>
      )}
    </nav>
  );
}
