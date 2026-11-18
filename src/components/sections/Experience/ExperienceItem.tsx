import type { ExperienceRecord } from '@/data/experience';
import styles from './ExperienceItem.module.scss';

export function ExperienceItem({
  position,
}: Readonly<{ position: ExperienceRecord }>) {
  return (
    <article className={`${styles['experience-item']} hover-panel`}>
      <div className={styles['experience-item__dates']}>{position.dates}</div>
      <div>
        <h3 className={styles['experience-item__title']}>
          {position.title}{' '}
          <span className={styles['experience-item__company']}>
            {position.company}
          </span>
        </h3>
        <ul className={styles['experience-item__achievements']}>
          {position.achievements.map((achievement) => (
            <li
              key={achievement}
              className={styles['experience-item__achievement']}
            >
              {achievement}
            </li>
          ))}
        </ul>
        <div className={styles['experience-item__technologies']}>
          {position.technologies.join(' • ')}
        </div>
      </div>
    </article>
  );
}
