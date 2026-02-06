import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AreasServed from '@/components/AreasServed';
import ContactSection from '@/components/ContactSection';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <div>
      <Hero />

      <ProblemSection />
      <ProcessSection />
      <TestimonialsSection />
      <AreasServed />
      <ContactSection />
      <FAQ />
    </div>
  );
}
