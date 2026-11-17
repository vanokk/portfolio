import type { ReactNode } from 'react';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import { SiteShell } from '@/components/layout/SiteShell';
import { Footer } from '@/components/layout/Footer';
import { ProjectNavigation } from '../ProjectNavigation/ProjectNavigation';
import { CaseStudyImage } from '../mdx-elements';
import contentStyles from '../ProjectContent.module.scss';
import styles from './ProjectLayout.module.scss';

export function ProjectLayout({
  project,
  children,
}: Readonly<{ project: Project; children: ReactNode }>) {
  return (
    <SiteShell projectPage>
      <article
        className={styles['project-layout']}
        aria-labelledby="project-title"
      >
        <header className={styles['project-layout__header']}>
          <Link className={styles['project-layout__back']} href="/#projects">
            Back to Projects
          </Link>
          {project.category && (
            <p className={styles['project-layout__category']}>
              {project.category}
            </p>
          )}
          <h1 id="project-title" className={styles['project-layout__title']}>
            {project.title}
          </h1>
          <p className={styles['project-layout__description']}>
            {project.description}
          </p>
        </header>
        <dl className={styles['project-layout__metadata']}>
          {project.role && (
            <div className={styles['project-layout__row']}>
              <dt className={styles['project-layout__label']}>Role</dt>
              <dd className={styles['project-layout__value']}>
                {project.role}
              </dd>
            </div>
          )}
          {project.duration && (
            <div className={styles['project-layout__row']}>
              <dt className={styles['project-layout__label']}>Duration</dt>
              <dd className={styles['project-layout__value']}>
                {project.duration}
              </dd>
            </div>
          )}
          <div className={styles['project-layout__row']}>
            <dt className={styles['project-layout__label']}>Technologies</dt>
            <dd className={styles['project-layout__value']}>
              {project.technologies.join(' • ')}
            </dd>
          </div>
        </dl>
        {project.image && project.imageAlt && (
          <CaseStudyImage src={project.image} alt={project.imageAlt} />
        )}
        <div className={contentStyles['case-content']}>{children}</div>
        <ProjectNavigation slug={project.slug} />
      </article>
      <Footer />
    </SiteShell>
  );
}
