import type { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import styles from './SiteShell.module.scss';

export function SiteShell({
  children,
  projectPage = false,
}: Readonly<{ children: ReactNode; projectPage?: boolean }>) {
  return (
    <div className={styles['site-shell']}>
      <Sidebar projectPage={projectPage} />
      <main
        className={styles['site-shell__main']}
        aria-label={projectPage ? 'Project case study' : 'Portfolio'}
      >
        {children}
      </main>
    </div>
  );
}
