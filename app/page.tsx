import Link from 'next/link';
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

      <section className="py-8 bg-clr-gray">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-2xl sm:text-3xl text-clr-dark mb-4">
              Usługi protetyczne
            </h2>
            <p className="text-base sm:text-lg text-clr-dark/80 max-w-3xl leading-relaxed mb-6">
              Poznaj zakres usług i wybierz to, czego potrzebujesz. Każda usługa ma osobną stronę z opisem i FAQ.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/naprawa-protez/"
                className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-clr-accent/60 hover:shadow-md transition-all"
              >
                <h3 className="font-unbounded font-bold text-base text-clr-dark mb-2">
                  Naprawa protez
                </h3>
                <p className="text-sm text-clr-dark/70">
                  Pęknięcia, wypadnięte zęby i szybka pomoc.
                </p>
              </Link>
              <Link
                href="/protezy-zebowe/"
                className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-clr-accent/60 hover:shadow-md transition-all"
              >
                <h3 className="font-unbounded font-bold text-base text-clr-dark mb-2">
                  Protezy zębowe
                </h3>
                <p className="text-sm text-clr-dark/70">
                  Dobór i wykonanie rozwiązań dopasowanych do potrzeb.
                </p>
              </Link>
              <Link
                href="/dopasowanie-protez/"
                className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-clr-accent/60 hover:shadow-md transition-all"
              >
                <h3 className="font-unbounded font-bold text-base text-clr-dark mb-2">
                  Dopasowanie protez
                </h3>
                <p className="text-sm text-clr-dark/70">
                  Korekta, stabilność i komfort noszenia.
                </p>
              </Link>
              <Link
                href="/konsultacje-protetyczne/"
                className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-clr-accent/60 hover:shadow-md transition-all"
              >
                <h3 className="font-unbounded font-bold text-base text-clr-dark mb-2">
                  Konsultacje protetyczne
                </h3>
                <p className="text-sm text-clr-dark/70">
                  Ocena sytuacji i jasne zalecenia dalszych kroków.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AreasServed />
      <ContactSection />
      <FAQ />
    </div>
  );
}
