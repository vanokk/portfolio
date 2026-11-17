import Link from 'next/link';
import { sections } from '@/data/navigation';
import styles from './SectionNav.module.scss';

export function SectionLinks({
  active,
}: Readonly<{ active?: (typeof sections)[number]['id'] }>) {
  return (
    <nav className={styles['section-nav']} aria-label="Sections">
      {sections.map(({ id, label }) => (
        <Link
          key={id}
          className={styles['section-nav__link']}
          href={`/#${id}`}
          aria-current={active === id ? 'location' : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
