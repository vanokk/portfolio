import { InfoRows } from '@/components/ui/InfoRows/InfoRows';
import { education } from '@/data/education';

export function Education() {
  return <InfoRows id="education" title="EDUCATION" rows={education} />;
}
