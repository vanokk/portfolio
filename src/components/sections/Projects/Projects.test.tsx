import { fireEvent, render, screen, within } from '@testing-library/react';
import { expect, it } from 'vitest';
import { Projects } from './Projects';

it('exposes only three project links initially, reveals four more, and restores focus on collapse', () => {
  render(<Projects />);
  const section = screen.getByRole('region', { name: 'PROJECTS' });
  const button = within(section).getByRole('button', { name: 'Show all' });
  const additional = document.getElementById(
    button.getAttribute('aria-controls')!,
  );

  expect(within(section).getAllByRole('link')).toHaveLength(3);
  expect(section.querySelectorAll('a')).toHaveLength(7);
  expect(button).toHaveAttribute('aria-expanded', 'false');
  expect(additional).toHaveAttribute('inert');
  expect(additional).toHaveAttribute('aria-hidden', 'true');

  fireEvent.click(button);
  expect(within(section).getAllByRole('link')).toHaveLength(7);
  expect(button).toHaveAccessibleName('Show less');
  expect(button).toHaveAttribute('aria-expanded', 'true');
  expect(additional).not.toHaveAttribute('inert');
  expect(additional).toHaveAttribute('aria-hidden', 'false');

  within(additional!).getAllByRole('link')[0].focus();
  fireEvent.click(button);
  expect(button).toHaveFocus();
  expect(button).toHaveAccessibleName('Show all');
  expect(within(section).getAllByRole('link')).toHaveLength(3);
  expect(additional).toHaveAttribute('inert');
});
