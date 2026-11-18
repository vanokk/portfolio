import { profileStructuredData } from '@/lib/profile-structured-data';
import { SiteShell } from '@/components/layout/SiteShell';
import { Footer } from '@/components/layout/Footer';
import { About } from '@/components/sections/About/About';
import { Experience } from '@/components/sections/Experience/Experience';
import { Projects } from '@/components/sections/Projects/Projects';
import { Skills } from '@/components/sections/Skills/Skills';
import { Education } from '@/components/sections/Education/Education';
import { Certifications } from '@/components/sections/Certifications/Certifications';
import { Languages } from '@/components/sections/Languages/Languages';

export default function HomePage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileStructuredData).replace(
            /</g,
            '\\u003c',
          ),
        }}
      />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Languages />
      <Footer />
    </SiteShell>
  );
}
