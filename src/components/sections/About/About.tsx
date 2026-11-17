import styles from './About.module.scss';

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={styles['about']}
    >
      <h2 id="about-heading" className={styles['about__heading']}>
        ABOUT
      </h2>
      <p className={styles['about__paragraph']}>
        I’m a senior frontend and full-stack engineer with more than eleven
        years of experience on complex web applications, mostly FinTech: payment
        integrations, transaction management and cross-border transfers.
      </p>
      <p className={styles['about__paragraph']}>
        My core is{' '}
        <b className={styles['about__highlight']}>
          Vue.js, React, TypeScript, Nuxt.js and JavaScript
        </b>
        , with a backend in{' '}
        <b className={styles['about__highlight']}>
          PHP/Symfony, Java and Node.js
        </b>{' '}
        around it. For five years I led a team of five to ten developers:
        hiring, mentoring, code review and performance reviews.
      </p>
      <p className={styles['about__paragraph']}>
        I use AI tools in my daily work, including Codex and MCP integrations
        for UI implementation, testing and production debugging.
      </p>
      <p className={styles['about__paragraph']}>
        Outside of work, I like long walks, travelling, and rewatching Marvel
        movies.
      </p>
    </section>
  );
}
