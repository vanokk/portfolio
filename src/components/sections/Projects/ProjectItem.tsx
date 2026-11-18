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
      className={`hover-panel ${styles['project-item']}${first ? ` ${styles['project-item--first']}` : ''}`}
    >
      <div className={styles['project-item__preview']} aria-hidden="true">
        {project.image && (
          // The linked title already names the project; the artwork is decorative.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className={styles['project-item__image']}
            src={project.image}
            alt=""
            loading="lazy"
          />
        )}
      </div>
      <div>
        <h3 className={styles['project-item__title']}>{project.title}</h3>
        <p className={styles['project-item__description']}>
          {project.description}
        </p>
        {project.duration && (
          <p className={styles['project-item__duration']}>
            Duration: {project.duration}
          </p>
        )}
        <div className={styles['project-item__technologies']}>
          {project.technologies.join(' • ')}
        </div>
      </div>
    </Link>
  );
}
