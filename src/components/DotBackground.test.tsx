import { fireEvent, render } from '@testing-library/react';
import { expect, it } from 'vitest';
import { DotBackground } from './DotBackground';

it('tracks the pointer, releases presses, and removes listeners on unmount', () => {
  const { unmount } = render(<DotBackground />);
  const spot = document.getElementById('spot')!;
  const press = document.getElementById('press')!;
  const move = new Event('pointermove');
  Object.assign(move, { clientX: 120, clientY: 240 });
  fireEvent(window, move);
  for (const layer of [spot, press]) {
    expect(layer.style.getPropertyValue('--x')).toBe('120px');
    expect(layer.style.getPropertyValue('--y')).toBe('240px');
  }
  for (const release of ['pointerup', 'pointercancel', 'blur']) {
    fireEvent(window, new Event('pointerdown'));
    expect(document.body).toHaveClass('pressed');
    fireEvent(window, new Event(release));
    expect(document.body).not.toHaveClass('pressed');
  }
  fireEvent(window, new Event('pointerdown'));
  fireEvent(window, move);
  unmount();
  expect(document.body).not.toHaveClass('pressed');
  fireEvent(window, new Event('pointerdown'));
  Object.assign(move, { clientX: 300, clientY: 400 });
  fireEvent(window, move);
  expect(document.body).not.toHaveClass('pressed');
  expect(spot.style.getPropertyValue('--x')).toBe('120px');
});
