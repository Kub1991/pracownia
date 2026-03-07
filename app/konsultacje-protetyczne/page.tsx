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
  title: 'Konsultacje protetyczne Zakrzewo | Plan dalszych kroków',
  description:
    'Konsultacje protetyczne w Zakrzewie dla pacjentów z Piły, Złotowa, Człuchowa i okolic. Ocena problemu, rekomendacje i praktyczny plan działania.',
  alternates: {
    canonical: '/konsultacje-protetyczne/',
  },
};

export default function KonsultacjeProtetycznePage() {
  return (
    <div className="bg-clr-gray">
      <section className="pt-20 pb-6">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14 shadow-sm">
            <h1 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4">
              Konsultacje protetyczne - Zakrzewo
            </h1>
            <p className="text-base sm:text-lg text-clr-dark/80 max-w-3xl leading-relaxed">
              Jeśli nie masz pewności, czy potrzebna jest naprawa, korekta czy nowe rozwiązanie,
              konsultacja pozwoli szybko uporządkować temat. Otrzymasz jasną ocenę i realne warianty
              dalszego postępowania.
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
                  Co zyskujesz na konsultacji
                </h2>
                <ul className="list-disc pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
                  <li>jasną ocenę stanu protezy i najważniejszych problemów do rozwiązania</li>
                  <li>rekomendację, czy lepsza będzie naprawa, dopasowanie czy nowe rozwiązanie</li>
                  <li>orientacyjny koszt i czas realizacji kolejnych etapów</li>
                  <li>plan działania dopasowany do Twojej aktualnej sytuacji</li>
                </ul>
              </div>

              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Jak się umówić
                </h2>
                <ol className="list-decimal pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
                  <li>Zadzwoń i opisz objawy lub problem z użytkowaniem protezy.</li>
                  <li>Ustalimy termin konsultacji odpowiedni do pilności sytuacji.</li>
                  <li>Na wizycie otrzymasz czytelny plan dalszego postępowania krok po kroku.</li>
                </ol>
              </div>

              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Co przygotować przed konsultacją
                </h2>
                <ul className="list-disc pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
                  <li>krótki opis: od kiedy problem trwa i co najbardziej przeszkadza na co dzień</li>
                  <li>obecną protezę oraz informacje o wcześniejszych naprawach lub korektach</li>
                  <li>listę pytań o komfort, estetykę i możliwy harmonogram dalszych prac</li>
                </ul>
              </div>

              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  FAQ - konsultacje protetyczne
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-clr-dark/80">
                  <div>
                    <p className="font-medium text-clr-dark">Ile trwa konsultacja?</p>
                    <p>Zwykle kilkanaście minut, w zależności od sytuacji.</p>
                  </div>
                  <div>
                    <p className="font-medium text-clr-dark">Czy konsultacja zobowiązuje do dalszych prac?</p>
                    <p>Nie, decyzja zawsze należy do Ciebie.</p>
                  </div>
                  <div>
                    <p className="font-medium text-clr-dark">Czy mogę omówić kilka problemów naraz?</p>
                    <p>Tak, warto opisać wszystkie kwestie podczas rozmowy.</p>
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
                      href={`/konsultacje-protetyczne/${city.slug}`}
                      className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors"
                    >
                      Konsultacje protetyczne w {city.locative}
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
                  <Link href="/protezy-zebowe/pila" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Protezy zębowe w Pile</Link>
                  <Link href="/dopasowanie-protez/pila" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Dopasowanie protez w Pile</Link>
                  <Link href="/naprawa-protez/zlotow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Naprawa protez w Złotowie</Link>
                  <Link href="/protezy-zebowe/zlotow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Protezy zębowe w Złotowie</Link>
                  <Link href="/dopasowanie-protez/zlotow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Dopasowanie protez w Złotowie</Link>
                  <Link href="/naprawa-protez/czluchow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Naprawa protez w Człuchowie</Link>
                  <Link href="/protezy-zebowe/czluchow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Protezy zębowe w Człuchowie</Link>
                  <Link href="/dopasowanie-protez/czluchow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Dopasowanie protez w Człuchowie</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

