import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import LazySection from '@/components/LazySection';

// Dynamic imports for sections that don't need to be immediately visible
const ProblemSection = dynamic(() => import('@/components/ProblemSection'), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse text-clr-dark/60">Ładowanie sekcji...</div>
  </div>
});

const ProcessSection = dynamic(() => import('@/components/ProcessSection'), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse text-clr-dark/60">Ładowanie sekcji...</div>
  </div>
});

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse text-clr-dark/60">Ładowanie sekcji...</div>
  </div>
});

const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse text-clr-dark/60">Ładowanie sekcji...</div>
  </div>
});

export default function Home() {
  return (
    <div>
      <Hero />
      
      <LazySection>
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">
          <div className="animate-pulse text-clr-dark/60">Ładowanie...</div>
        </div>}>
          <ProblemSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">
          <div className="animate-pulse text-clr-dark/60">Ładowanie...</div>
        </div>}>
          <ProcessSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">
          <div className="animate-pulse text-clr-dark/60">Ładowanie...</div>
        </div>}>
          <TestimonialsSection />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">
          <div className="animate-pulse text-clr-dark/60">Ładowanie...</div>
        </div>}>
          <ContactSection />
        </Suspense>
      </LazySection>
    </div>
  );
}