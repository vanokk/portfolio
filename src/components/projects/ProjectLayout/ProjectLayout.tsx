import type { ReactNode } from 'react';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import { SiteShell } from '@/components/layout/SiteShell';
import { Footer } from '@/components/layout/Footer';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
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
          <div className={styles['project-layout__controls']}>
            <Link className={styles['project-layout__back']} href="/#projects">
              Back to Projects
            </Link>
            <ThemeToggle />
          </div>
          {project.category && (
            <p className={styles['project-layout__category']}>
              {project.category}
            </p>
          )}
          <h1 id="project-title" className={styles['project-layout__title']}>
            {project.title}
          </h1>
          {project.role && (
            <p className={styles['project-layout__role']}>{project.role}</p>
          )}
          {project.duration && (
            <p className={styles['project-layout__duration']}>
              Duration: {project.duration}
            </p>
          )}
          <p className={styles['project-layout__technologies']}>
            {project.technologies.join(' • ')}
          </p>
        </header>
        {project.image && project.imageAlt && (
          <CaseStudyImage src={project.image} alt={project.imageAlt} />
        )}
        <div className={contentStyles['case-content']}>{children}</div>
        {project.confidential !== false && (
          <aside
            className={styles['project-layout__confidentiality']}
            aria-label="Confidentiality Notice"
          >
            <p className={styles['project-layout__notice-title']}>
              <strong>Confidentiality Notice</strong>
            </p>
            <p className={styles['project-layout__notice-text']}>
              This project is subject to confidentiality restrictions. The
              visuals shown are conceptual representations created for portfolio
              purposes and do not reflect the actual product interface.
            </p>
          </aside>
        )}
        <ProjectNavigation slug={project.slug} />
      </article>
      <Footer />
    </SiteShell>
  );
}
