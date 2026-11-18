import type { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import styles from './SiteShell.module.scss';

export function SiteShell({
  children,
  projectPage = false,
}: Readonly<{ children: ReactNode; projectPage?: boolean }>) {
  return (
    <div
      className={`${styles['site-shell']}${projectPage ? ` ${styles['site-shell--project']}` : ''}`}
    >
      {!projectPage && <Sidebar />}
      <main
        className={styles['site-shell__main']}
        aria-label={projectPage ? 'Project case study' : 'Portfolio'}
      >
        {children}
      </main>
    </div>
  );
}
