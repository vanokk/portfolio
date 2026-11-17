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
      <Link className={styles['project-navigation__back']} href="/#projects">
        Back to Projects
      </Link>
      <div className={styles['project-navigation__neighbors']}>
        {neighbors.previous && (
          <Link
            className={styles['project-navigation__link']}
            href={`/projects/${neighbors.previous.slug}/`}
            rel="prev"
          >
            <span className={styles['project-navigation__label']}>
              Previous project
            </span>
            <span>{neighbors.previous.title}</span>
          </Link>
        )}
        {neighbors.next && (
          <Link
            className={styles['project-navigation__link']}
            href={`/projects/${neighbors.next.slug}/`}
            rel="next"
          >
            <span className={styles['project-navigation__label']}>
              Next project
            </span>
            <span>{neighbors.next.title}</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
