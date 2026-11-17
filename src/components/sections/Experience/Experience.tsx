import { experience } from '@/data/experience';
import { ExperienceItem } from './ExperienceItem';
import styles from './Experience.module.scss';

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className={styles['experience']}
    >
      <h2 id="experience-heading" className={styles['experience__heading']}>
        EXPERIENCE
      </h2>
      {experience.map((position) => (
        <ExperienceItem key={position.dates} position={position} />
      ))}
    </section>
  );
}
