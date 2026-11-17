import { act, render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import { SectionNav } from './SectionNav';

class Observer {
  static instances: Observer[] = [];
  observe = vi.fn();
  disconnect = vi.fn();
  constructor(
    readonly callback: IntersectionObserverCallback,
    readonly options?: IntersectionObserverInit,
  ) {
    Observer.instances.push(this);
  }
  notify() {
    this.callback([], this as unknown as IntersectionObserver);
  }
}

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  Observer.instances = [];
});

it('tracks boundary crossings down and back up, and rebuilds the boundary on resize', () => {
  vi.stubGlobal('IntersectionObserver', Observer);
  vi.stubGlobal('innerHeight', 900);
  render(
    <>
      <section id="about" />
      <section id="experience" />
    </>,
  );
  let scroll = 0;
  vi.spyOn(
    document.getElementById('about')!,
    'getBoundingClientRect',
  ).mockImplementation(() => new DOMRect(0, 96 - scroll, 600, 344));
  vi.spyOn(
    document.getElementById('experience')!,
    'getBoundingClientRect',
  ).mockImplementation(() => new DOMRect(0, 528 - scroll, 600, 1400));
  const nav = render(<SectionNav />);
  const first = Observer.instances[0];
  expect(first.options?.rootMargin).toBe('-270px 0px -629px 0px');
  expect(first.observe).toHaveBeenCalledTimes(2);
  expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
    'aria-current',
    'location',
  );

  act(() => {
    scroll = 300;
    first.notify();
  });
  expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute(
    'aria-current',
    'location',
  );
  act(() => {
    scroll = 200;
    first.notify();
  });
  expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
    'aria-current',
    'location',
  );

  act(() => {
    vi.stubGlobal('innerHeight', 1000);
    window.dispatchEvent(new Event('resize'));
  });
  expect(first.disconnect).toHaveBeenCalledOnce();
  const second = Observer.instances[1];
  expect(second.options?.rootMargin).toBe('-300px 0px -699px 0px');
  nav.unmount();
  expect(second.disconnect).toHaveBeenCalledOnce();
});
