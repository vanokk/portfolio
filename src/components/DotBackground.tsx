'use client';

import { useEffect, useRef } from 'react';

export function DotBackground() {
  const spot = useRef<HTMLDivElement>(null);
  const press = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trackPointer = (event: PointerEvent) => {
      for (const layer of [spot.current, press.current]) {
        layer?.style.setProperty('--x', `${event.clientX}px`);
        layer?.style.setProperty('--y', `${event.clientY}px`);
      }
    };
    const release = () => document.body.classList.remove('pressed');
    const hold = (event: PointerEvent) => {
      trackPointer(event);
      document.body.classList.add('pressed');
    };

    window.addEventListener('pointermove', trackPointer);
    window.addEventListener('pointerdown', hold);
    window.addEventListener('pointerup', release);
    window.addEventListener('pointercancel', release);
    window.addEventListener('blur', release);
    return () => {
      window.removeEventListener('pointermove', trackPointer);
      window.removeEventListener('pointerdown', hold);
      window.removeEventListener('pointerup', release);
      window.removeEventListener('pointercancel', release);
      window.removeEventListener('blur', release);
      release();
    };
  }, []);

  return (
    <>
      <div id="dots" aria-hidden="true" />
      <div id="spot" ref={spot} aria-hidden="true" />
      <div id="press" ref={press} aria-hidden="true" />
    </>
  );
}
