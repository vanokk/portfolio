import { SectionLinks } from '@/components/navigation/SectionLinks';
import { SectionNav } from '@/components/navigation/SectionNav';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { SocialLinks } from './SocialLinks';
import styles from './Sidebar.module.scss';

export function Sidebar({
  projectPage = false,
}: Readonly<{ projectPage?: boolean }>) {
  const Name = projectPage ? 'p' : 'h1';
  return (
    <aside className={styles['sidebar']} aria-label="Profile">
      <div>
        <Name className={styles['sidebar__name']}>Ivan Reshevskyi</Name>
        <p className={styles['sidebar__role']}>
          Senior Frontend / Full-Stack Engineer
        </p>
        <p className={styles['sidebar__location']}>Prague, Czech Republic</p>
        <p className={styles['sidebar__intro']}>
          I build web products with clean code and clear interfaces.
        </p>
        {projectPage ? <SectionLinks /> : <SectionNav />}
      </div>
      <div className={styles['sidebar__footer']}>
        <SocialLinks />
        <ThemeToggle />
      </div>
    </aside>
  );
}
