import type { InfoRow } from './info-row';

export const languages = [
  {
    label: 'Ukrainian',
    primary: 'Native',
  },
  {
    label: 'English',
    primary: 'Upper-intermediate',
  },
  {
    label: 'Czech',
    primary: 'Beginner',
  },
] as const satisfies readonly InfoRow[];
