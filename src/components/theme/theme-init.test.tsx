import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { themeInitScript } from './theme-init';

function initializeTheme() {
  // Execute the exact inline script that the static document sends to browsers.
  window.eval(themeInitScript);
}

beforeEach(() => {
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({ matches: false })),
  );
  localStorage.clear();
  document.documentElement.dataset.theme = 'light';
  vi.restoreAllMocks();
});

describe('pre-hydration theme initialization', () => {
  it('restores the saved dark theme without changing page content', () => {
    render(<main aria-label="Portfolio" />);
    localStorage.setItem('theme', 'dark');
    initializeTheme();
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    expect(screen.getByRole('main', { name: 'Portfolio' })).toBeInTheDocument();
  });

  it.each([null, 'invalid', 'light'])(
    'keeps light as the default for %s',
    (theme) => {
      if (theme !== null) localStorage.setItem('theme', theme);
      initializeTheme();
      expect(document.documentElement).toHaveAttribute('data-theme', 'light');
    },
  );

  it('uses the system dark theme without a saved choice', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: true })),
    );
    initializeTheme();
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'light');
    initializeTheme();
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  });

  it('does not fail when browser storage is blocked', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('Storage blocked', 'SecurityError');
    });
    expect(initializeTheme).not.toThrow();
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  });
});
