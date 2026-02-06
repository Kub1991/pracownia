import type { Metadata } from 'next';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Protezy zebowe Zakrzewo | Protetyka - Karolina Szymanska',
  description: 'Protezy zebowe w Zakrzewie i okolicach. Dobor i wykonanie rozwiazan protetycznych dopasowanych do Twoich potrzeb.',
  alternates: {
    canonical: '/protezy-zebowe',
  },
};

export default function ProtezyZebowePage() {
  return (
    <div className="bg-clr-gray">
      <section className="pt-20 pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14 shadow-sm">
            <h1 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4">
              Protezy zebowe - Zakrzewo
            </h1>
            <p className="text-base sm:text-lg text-clr-dark/80 max-w-3xl leading-relaxed">
              Oferuje kompleksowa opieke protetyczna - od konsultacji, przez dobor rozwiazania,
              po precyzyjne wykonanie i dopasowanie. Wszystko z mysla o komforcie i naturalnym wygladzie.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Kiedy warto rozwazyc protezy zebowe
            </h2>
            <ul className="list-disc pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
              <li>braki zebowe utrudniajace jedzenie lub mowienie</li>
              <li>niewygodne dotychczasowe rozwiazanie</li>
              <li>potrzeba poprawy estetyki usmiechu</li>
              <li>koniecznosc odbudowy funkcji zgryzu</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Proces wykonania i dopasowania
            </h2>
            <ol className="list-decimal pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
              <li>konsultacja i ocena potrzeb</li>
              <li>dobor rozwiazania protetycznego</li>
              <li>precyzyjne wykonanie i dopasowanie</li>
              <li>kontrola komfortu i ewentualne korekty</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              FAQ - protezy zebowe
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-clr-dark/80">
              <div>
                <p className="font-medium text-clr-dark">Czy protezy beda wygodne?</p>
                <p>Tak, priorytetem jest komfort. Dopasowanie wykonuje sie indywidualnie.</p>
              </div>
              <div>
                <p className="font-medium text-clr-dark">Czy potrzebne sa wizyty kontrolne?</p>
                <p>Tak, pozwalaja utrzymac wygode i stabilnosc protezy.</p>
              </div>
              <div>
                <p className="font-medium text-clr-dark">Jak dbac o protezy?</p>
                <p>Wszystkie zalecenia otrzymasz po wykonaniu - dopasowane do Twojej sytuacji.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Lokalne strony uslugi
            </h2>
            <div className="flex flex-wrap gap-2 text-sm sm:text-base">
              <Link href="/protezy-zebowe/pila" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Protezy zebowe Pila</Link>
              <Link href="/protezy-zebowe/zlotow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Protezy zebowe Zlotow</Link>
              <Link href="/protezy-zebowe/czluchow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Protezy zebowe Czluchow</Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
