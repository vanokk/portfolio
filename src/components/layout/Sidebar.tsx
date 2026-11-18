import { SectionNav } from '@/components/navigation/SectionNav';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { SocialLinks } from './SocialLinks';
import styles from './Sidebar.module.scss';

export function Sidebar() {
  return (
    <aside className={styles['sidebar']} aria-label="Profile">
      <div>
        <h1 className={styles['sidebar__name']}>Ivan Reshevskyi</h1>
        <p className={styles['sidebar__role']}>
          Senior Frontend / Full-Stack Engineer
        </p>
        <p className={styles['sidebar__location']}>Prague, Czech Republic</p>
        <p className={styles['sidebar__intro']}>
          I build web products with clean code and clear interfaces.
        </p>
        <SectionNav />
      </div>
      <div className={styles['sidebar__footer']}>
        <SocialLinks />
        <ThemeToggle />
      </div>
    </aside>
  );
}
