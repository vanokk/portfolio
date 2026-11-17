import { projects } from '@/data/projects';
import { ProjectItem } from './ProjectItem';
import { ProjectExpander } from './ProjectExpander';
import styles from './Projects.module.scss';

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={styles['projects']}
    >
      <h2 id="projects-heading" className={styles['projects__heading']}>
        PROJECTS
      </h2>
      {projects.slice(0, 3).map((project, index) => (
        <ProjectItem key={project.slug} project={project} first={index === 0} />
      ))}
      <ProjectExpander>
        {projects.slice(3).map((project) => (
          <ProjectItem key={project.slug} project={project} />
        ))}
      </ProjectExpander>
    </section>
  );
}
