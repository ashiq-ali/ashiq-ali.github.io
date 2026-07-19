import { Hero } from '@/components/Hero';
import { Mission } from '@/components/Mission';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Certifications } from '@/components/Certifications';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
      <Hero />
      <Mission />
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
