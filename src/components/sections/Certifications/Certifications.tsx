import { InfoRows } from '@/components/ui/InfoRows/InfoRows';
import { certifications } from '@/data/certifications';

export function Certifications() {
  return (
    <InfoRows
      id="certifications"
      title="CERTIFICATIONS"
      rows={certifications}
    />
  );
}
