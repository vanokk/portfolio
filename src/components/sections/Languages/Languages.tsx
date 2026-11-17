import { InfoRows } from '@/components/ui/InfoRows/InfoRows';
import { languages } from '@/data/languages';

export function Languages() {
  return <InfoRows id="languages" title="LANGUAGES" rows={languages} />;
}
