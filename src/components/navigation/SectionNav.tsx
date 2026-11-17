'use client';

import { SectionLinks } from './SectionLinks';
import { useEffect, useState } from 'react';
import { sections } from '@/data/navigation';

type SectionId = (typeof sections)[number]['id'];

export function SectionNav() {
  const [active, setActive] = useState<SectionId>('about');

  useEffect(() => {
    const targets = sections.flatMap(({ id }) => {
      const target = document.getElementById(id);
      return target ? [target] : [];
    });
    if (!targets.length) return;

    const update = () => {
      const line = Math.floor(window.innerHeight * 0.3);
      const current =
        targets.find((target) => {
          const bounds = target.getBoundingClientRect();
          return bounds.top <= line && bounds.bottom > line;
        }) ??
        [...targets]
          .reverse()
          .find((target) => target.getBoundingClientRect().top <= line) ??
        targets[0];
      setActive(current.id as SectionId);
    };
    let observer: IntersectionObserver;
    const observe = () => {
      observer?.disconnect();
      const line = Math.floor(window.innerHeight * 0.3);
      // Observe a 1px horizontal line at the activation boundary. Root-margin
      // percentages are relative to width, so use viewport-height pixels.
      observer = new IntersectionObserver(update, {
        rootMargin: `-${line}px 0px -${window.innerHeight - line - 1}px 0px`,
      });
      targets.forEach((target) => observer.observe(target));
      update();
    };
    observe();
    window.addEventListener('resize', observe);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', observe);
    };
  }, []);

  return <SectionLinks active={active} />;
}
