import type { InfoRow } from '@/data/info-row';
import styles from './InfoRows.module.scss';

type Props = Readonly<{
  id: string;
  title: string;
  rows: readonly InfoRow[];
}>;

export function InfoRows({ id, title, rows }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={styles['info-rows']}
    >
      <h2 id={`${id}-heading`} className={styles['info-rows__heading']}>
        {title}
      </h2>
      <dl className={styles['info-rows__list']}>
        {rows.map(({ label, primary, secondary }) => (
          <div key={`${label}-${primary}`} className={styles['info-rows__row']}>
            <dt className={styles['info-rows__label']}>{label}</dt>
            {secondary ? (
              <dd className={styles['info-rows__content']}>
                <span className={styles['info-rows__primary']}>{primary}</span>
                <br />
                <span className={styles['info-rows__secondary']}>
                  {secondary}
                </span>
              </dd>
            ) : (
              <dd
                className={`${styles['info-rows__content']} ${styles['info-rows__primary']}`}
              >
                {primary}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </section>
  );
}
