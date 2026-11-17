'use client';

import { useRef, useState, type ReactNode } from 'react';
import styles from './ProjectExpander.module.scss';

export function ProjectExpander({
  children,
}: Readonly<{ children: readonly ReactNode[] }>) {
  const [expanded, setExpanded] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  function toggle() {
    if (expanded) button.current?.focus({ preventScroll: true });
    setExpanded(!expanded);
  }

  return (
    <div
      className={`${styles['project-expander']}${expanded ? ` ${styles['project-expander--expanded']}` : ''}`}
    >
      <div id="additional-projects" inert={!expanded} aria-hidden={!expanded}>
        {children.map((child, index) => (
          <div key={index} className={styles['project-expander__row']}>
            <div className={styles['project-expander__content']}>{child}</div>
          </div>
        ))}
      </div>
      <button
        ref={button}
        className={styles['project-expander__button']}
        type="button"
        aria-expanded={expanded}
        aria-controls="additional-projects"
        onClick={toggle}
      >
        {expanded ? 'Show less' : 'Show all'}
      </button>
    </div>
  );
}
