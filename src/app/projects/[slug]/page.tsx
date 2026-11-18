import type { Metadata } from 'next';
import { createProjectMetadata } from '@/lib/project-metadata';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/data/projects';
import { projectContent } from '@/content/projects';
import { ProjectLayout } from '@/components/projects/ProjectLayout/ProjectLayout';
import contentStyles from '@/components/projects/ProjectContent.module.scss';

type Props = Readonly<{ params: Promise<{ slug: string }> }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return createProjectMetadata(project);
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const Content = projectContent[project.slug];
  return (
    <ProjectLayout project={project}>
      <Content
        components={{
          ProjectOverview: () => (
            <p className={contentStyles['case-content__paragraph']}>
              {project.description}
            </p>
          ),
        }}
      />
    </ProjectLayout>
  );
}
