import { evaluate } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { useMDXComponents } from '@/mdx-components';

it('renders Markdown headings, paragraphs, lists, links, images and fenced code', async () => {
  // Test content only; this fixture is never included in exported project pages.
  const markdown = [
    '## Fixture heading',
    '',
    'Fixture paragraph.',
    '',
    '- First item',
    '- Second item',
    '',
    '[Home](/#projects)',
    '',
    '[External](https://example.com)',
    '',
    '![Fixture diagram](/test-only-diagram.svg)',
    '',
    '```ts',
    'const count = 1;',
    '```',
  ].join('\n');
  const { default: Content } = await evaluate(markdown, {
    ...runtime,
    useMDXComponents,
  });
  const { container } = render(<Content />);
  expect(
    screen.getByRole('heading', { level: 2, name: 'Fixture heading' }),
  ).toBeInTheDocument();
  expect(screen.getByText('Fixture paragraph.')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
  expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
    'href',
    '/#projects',
  );
  expect(screen.getByRole('link', { name: 'External' })).toHaveAttribute(
    'href',
    'https://example.com',
  );
  expect(screen.getByRole('img', { name: 'Fixture diagram' })).toHaveAttribute(
    'loading',
    'lazy',
  );
  expect(container.querySelector('pre code')).toHaveTextContent(
    'const count = 1;',
  );
  expect(container.querySelector('pre code')).toHaveClass('language-ts');
});
