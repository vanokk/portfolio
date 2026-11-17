import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles['footer']}>
      Thanks for visiting. © {new Date().getFullYear()} Ivan Reshevskyi
    </footer>
  );
}
