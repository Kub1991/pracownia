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
  title: 'Naprawa protez Zakrzewo | Pilna pomoc i konkretny plan',
  description:
    'Naprawa protez zębowych w Zakrzewie dla pacjentów z Piły, Złotowa, Człuchowa i okolic. Ocena uszkodzenia, bezpieczna naprawa i zalecenia po wizycie.',
  alternates: {
    canonical: '/naprawa-protez/',
  },
};

export default function NaprawaProtezPage() {
  return (
    <div className="bg-clr-gray">
      <section className="pt-20 pb-6">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14 shadow-sm">
            <h1 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4">
              Naprawa protez w Zakrzewie
            </h1>
            <p className="text-base sm:text-lg text-clr-dark/80 max-w-3xl leading-relaxed">
              Jeśli proteza pękła, wypadł ząb albo pojawił się ból podczas noszenia, możesz liczyć na szybką
              ocenę i jasny plan działania. W wielu przypadkach naprawę da się wykonać w krótkim terminie,
              bez odkładania problemu na później.
            </p>
          </div>
        </div>
      </section>

      <ContactSection layoutVariant="subpage" />

      <section className="pt-6 pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14 shadow-sm">
            <div className="space-y-10">
              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Najczęstsze problemy z protezą
                </h2>
                <ul className="list-disc pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
                  <li>pęknięcie lub złamanie płyty protezy po upadku albo przeciążeniu</li>
                  <li>wypadnięcie zęba z protezy, które utrudnia jedzenie i estetykę uśmiechu</li>
                  <li>poluzowanie protezy i brak pewności podczas mówienia</li>
                  <li>otarcia, ból i uczucie ucisku pojawiające się w trakcie dnia</li>
                </ul>
              </div>

              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Jak wygląda naprawa
                </h2>
                <ol className="list-decimal pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
                  <li>Najpierw krótka rozmowa telefoniczna, aby ocenić pilność i rodzaj uszkodzenia.</li>
                  <li>Na miejscu sprawdzam stan protezy i potwierdzam bezpieczny zakres naprawy.</li>
                  <li>Wykonuję naprawę oraz kontrolę dopasowania, żeby ograniczyć ryzyko kolejnych problemów.</li>
                  <li>Przy odbiorze otrzymujesz konkretne zalecenia dotyczące użytkowania i higieny.</li>
                </ol>
              </div>

              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Informacje przed wizytą
                </h2>
                <ul className="list-disc pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
                  <li>W rozmowie opisz, czy uszkodzenie pojawiło się nagle, czy narastało przez kilka dni.</li>
                  <li>Zabierz protezę oraz wszystkie odłączone elementy, nawet drobne fragmenty.</li>
                  <li>Po naprawie obserwuj komfort przez pierwsze dni i od razu zgłaszaj nowe punkty ucisku.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  FAQ - naprawa protez
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-clr-dark/80">
                  <div>
                    <p className="font-medium text-clr-dark">Ile trwa naprawa protezy?</p>
                    <p>Zwykle do 24 godzin. W pilnych przypadkach możliwy szybszy termin.</p>
                  </div>
                  <div>
                    <p className="font-medium text-clr-dark">Czy mogę naprawić protezę tego samego dnia?</p>
                    <p>Tak, jeśli uszkodzenie na to pozwala, ustalimy ekspresowy termin.</p>
                  </div>
                  <div>
                    <p className="font-medium text-clr-dark">Ile kosztuje naprawa?</p>
                    <p>Cena zależy od rodzaju uszkodzenia. Podam widełki po krótkiej konsultacji.</p>
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
                      href={`/naprawa-protez/${city.slug}`}
                      className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors"
                    >
                      Naprawa protez w {city.locative}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Pozostałe usługi w wybranych miastach
                </h2>
                <div className="flex flex-wrap gap-2 text-sm sm:text-base">
                  <Link href="/protezy-zebowe/pila" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Protezy zębowe w Pile</Link>
                  <Link href="/dopasowanie-protez/pila" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Dopasowanie protez w Pile</Link>
                  <Link href="/konsultacje-protetyczne/pila" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Konsultacje protetyczne w Pile</Link>
                  <Link href="/protezy-zebowe/zlotow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Protezy zębowe w Złotowie</Link>
                  <Link href="/dopasowanie-protez/zlotow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Dopasowanie protez w Złotowie</Link>
                  <Link href="/konsultacje-protetyczne/zlotow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Konsultacje protetyczne w Złotowie</Link>
                  <Link href="/protezy-zebowe/czluchow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Protezy zębowe w Człuchowie</Link>
                  <Link href="/dopasowanie-protez/czluchow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Dopasowanie protez w Człuchowie</Link>
                  <Link href="/konsultacje-protetyczne/czluchow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Konsultacje protetyczne w Człuchowie</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

