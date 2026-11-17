import { act, fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, expect, it, vi } from 'vitest';
import { ThemeToggle } from './ThemeToggle';

beforeEach(() => {
  vi.restoreAllMocks();
  localStorage.clear();
  document.documentElement.dataset.theme = 'dark';
});

it('reflects the initial theme and persists both toggle directions', async () => {
  render(<ThemeToggle />);
  await act(async () =>
    fireEvent.click(
      screen.getByRole('button', { name: 'Switch to light theme' }),
    ),
  );
  expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  expect(localStorage.getItem('theme')).toBe('light');
  await act(async () =>
    fireEvent.click(
      screen.getByRole('button', { name: 'Switch to dark theme' }),
    ),
  );
  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  expect(localStorage.getItem('theme')).toBe('dark');
});

it('switches even when saving preferences fails', async () => {
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
    throw new Error('Blocked');
  });
  render(<ThemeToggle />);
  await act(async () =>
    fireEvent.click(
      screen.getByRole('button', { name: 'Switch to light theme' }),
    ),
  );
  expect(
    screen.getByRole('button', { name: 'Switch to dark theme' }),
  ).toBeInTheDocument();
});
