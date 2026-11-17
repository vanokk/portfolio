import { InfoRows } from '@/components/ui/InfoRows/InfoRows';
import { skills } from '@/data/skills';

export function Skills() {
  return <InfoRows id="skills" title="SKILLS" rows={skills} />;
}
