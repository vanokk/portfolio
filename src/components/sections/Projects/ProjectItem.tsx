import Link from 'next/link';
import type { Project } from '@/data/projects';
import styles from './ProjectItem.module.scss';

export function ProjectItem({
  project,
  first = false,
}: Readonly<{ project: Project; first?: boolean }>) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className={`${styles['project-item']}${first ? ` ${styles['project-item--first']}` : ''}`}
    >
      <div className={styles['project-item__preview']} aria-hidden="true" />
      <div>
        <h3 className={styles['project-item__title']}>{project.title}</h3>
        <p className={styles['project-item__description']}>
          {project.description}
        </p>
        <div className={styles['project-item__technologies']}>
          {project.technologies.join(' • ')}
        </div>
      </div>
    </Link>
  );
}
