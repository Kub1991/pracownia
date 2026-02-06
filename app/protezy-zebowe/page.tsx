import type { Metadata } from 'next';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Protezy zębowe Zakrzewo | Protetyka - Karolina Szymańska',
  description:
    'Protezy zębowe w Zakrzewie i okolicach. Dobór i wykonanie rozwiązań protetycznych dopasowanych do Twoich potrzeb.',
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
              Protezy zębowe - Zakrzewo
            </h1>
            <p className="text-base sm:text-lg text-clr-dark/80 max-w-3xl leading-relaxed">
              Oferuję kompleksową opiekę protetyczną - od konsultacji, przez dobór rozwiązania,
              po precyzyjne wykonanie i dopasowanie. Wszystko z myślą o komforcie i naturalnym wyglądzie.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Kiedy warto rozważyć protezy zębowe
            </h2>
            <ul className="list-disc pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
              <li>braki zębowe utrudniające jedzenie lub mówienie</li>
              <li>niewygodne dotychczasowe rozwiązanie</li>
              <li>potrzeba poprawy estetyki uśmiechu</li>
              <li>konieczność odbudowy funkcji zgryzu</li>
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
              <li>dobór rozwiązania protetycznego</li>
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
              FAQ - protezy zębowe
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-clr-dark/80">
              <div>
                <p className="font-medium text-clr-dark">Czy protezy będą wygodne?</p>
                <p>Tak, priorytetem jest komfort. Dopasowanie wykonuje się indywidualnie.</p>
              </div>
              <div>
                <p className="font-medium text-clr-dark">Czy potrzebne są wizyty kontrolne?</p>
                <p>Tak, pozwalają utrzymać wygodę i stabilność protezy.</p>
              </div>
              <div>
                <p className="font-medium text-clr-dark">Jak dbać o protezy?</p>
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
              Lokalne strony usługi
            </h2>
            <div className="flex flex-wrap gap-2 text-sm sm:text-base">
              <Link href="/protezy-zebowe/pila" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Protezy zębowe Piła</Link>
              <Link href="/protezy-zebowe/zlotow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Protezy zębowe Złotów</Link>
              <Link href="/protezy-zebowe/czluchow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Protezy zębowe Człuchów</Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
