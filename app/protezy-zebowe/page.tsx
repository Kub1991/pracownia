import type { Metadata } from 'next';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

const LOCATION_LINKS = [
  { slug: 'pila', label: 'Piła', locative: 'Pile' },
  { slug: 'zlotow', label: 'Złotów', locative: 'Złotowie' },
  { slug: 'czluchow', label: 'Człuchów', locative: 'Człuchowie' },
  { slug: 'wiecbork', label: 'Więcbork', locative: 'Więcborku' },
  { slug: 'sepolno-krajenskie', label: 'Sępólno Krajeńskie', locative: 'Sępólnie Krajeńskim' },
  { slug: 'jastrowie', label: 'Jastrowie', locative: 'Jastrowiu' },
  { slug: 'krajenka', label: 'Krajenka', locative: 'Krajence' },
  { slug: 'okonek', label: 'Okonek', locative: 'Okonku' },
] as const;

export const metadata: Metadata = {
  title: 'Protezy zębowe Zakrzewo | Indywidualne dopasowanie',
  description:
    'Protezy zębowe w Zakrzewie dla pacjentów z Piły, Złotowa, Człuchowa i okolic. Dobór rozwiązania, wykonanie i kontrola komfortu codziennego użytkowania.',
  alternates: {
    canonical: '/protezy-zebowe/',
  },
};

export default function ProtezyZebowePage() {
  return (
    <div className="bg-clr-gray">
      <section className="pt-20 pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14 shadow-sm">
            <h1 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4">
              Protezy zębowe - Zakrzewo
            </h1>
            <p className="text-base sm:text-lg text-clr-dark/80 max-w-3xl leading-relaxed">
              Od pierwszej konsultacji po oddanie gotowej pracy skupiam się na tym, aby proteza była
              wygodna, stabilna i naturalna w codziennym użytkowaniu. Każde rozwiązanie dobieram indywidualnie
              do potrzeb pacjenta oraz warunków w jamie ustnej.
            </p>

            <div className="mt-10 space-y-10">
              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Kiedy warto rozważyć protezy zębowe
                </h2>
                <ul className="list-disc pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
                  <li>braki zębowe utrudniają gryzienie, mówienie albo swobodne funkcjonowanie</li>
                  <li>dotychczasowa proteza jest niestabilna lub nie daje komfortu przez cały dzień</li>
                  <li>zależy Ci na poprawie estetyki uśmiechu bez rezygnacji z wygody</li>
                  <li>potrzebna jest odbudowa funkcji zgryzu i równomierne obciążenie</li>
                </ul>
              </div>

              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Proces wykonania i dopasowania
                </h2>
                <ol className="list-decimal pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
                  <li>Rozmowa o oczekiwaniach i ocena warunków potrzebnych do wykonania protezy.</li>
                  <li>Dobór rozwiązania, które łączy estetykę, trwałość i komfort noszenia.</li>
                  <li>Wykonanie pracy oraz precyzyjne dopasowanie do codziennych funkcji.</li>
                  <li>Kontrola po oddaniu i korekty, jeśli są potrzebne po pierwszym okresie użytkowania.</li>
                </ol>
              </div>

              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Jak przygotować się do wizyty
                </h2>
                <ul className="list-disc pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
                  <li>Zapisz sytuacje, w których najbardziej odczuwasz dyskomfort lub brak stabilności.</li>
                  <li>Jeśli masz obecną protezę, zabierz ją na wizytę i wskaż elementy wymagające poprawy.</li>
                  <li>Przygotuj pytania dotyczące estetyki, wygody i czasu adaptacji po oddaniu pracy.</li>
                </ul>
              </div>

              <div>
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

              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Lokalne strony usługi
                </h2>
                <div className="flex flex-wrap gap-2 text-sm sm:text-base">
                  {LOCATION_LINKS.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/protezy-zebowe/${city.slug}`}
                      className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors"
                    >
                      Protezy zębowe w {city.locative}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Pozostałe usługi w wybranych miastach
                </h2>
                <div className="flex flex-wrap gap-2 text-sm sm:text-base">
                  <Link href="/naprawa-protez/pila" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Naprawa protez w Pile</Link>
                  <Link href="/dopasowanie-protez/pila" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Dopasowanie protez w Pile</Link>
                  <Link href="/konsultacje-protetyczne/pila" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Konsultacje protetyczne w Pile</Link>
                  <Link href="/naprawa-protez/zlotow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Naprawa protez w Złotowie</Link>
                  <Link href="/dopasowanie-protez/zlotow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Dopasowanie protez w Złotowie</Link>
                  <Link href="/konsultacje-protetyczne/zlotow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Konsultacje protetyczne w Złotowie</Link>
                  <Link href="/naprawa-protez/czluchow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Naprawa protez w Człuchowie</Link>
                  <Link href="/dopasowanie-protez/czluchow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Dopasowanie protez w Człuchowie</Link>
                  <Link href="/konsultacje-protetyczne/czluchow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Konsultacje protetyczne w Człuchowie</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

