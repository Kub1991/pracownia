import type { Metadata } from 'next';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Naprawa protez Zakrzewo | Protetyka - Karolina Szymańska',
  description:
    'Naprawa protez zębowych w Zakrzewie i okolicach. Szybka ocena, naprawy często w 24h. Zadzwoń i umów termin.',
  alternates: {
    canonical: '/naprawa-protez',
  },
};

export default function NaprawaProtezPage() {
  return (
    <div className="bg-clr-gray">
      <section className="pt-20 pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14 shadow-sm">
            <h1 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4">
              Naprawa protez w Zakrzewie
            </h1>
            <p className="text-base sm:text-lg text-clr-dark/80 max-w-3xl leading-relaxed">
              Jeśli proteza pękła, wypadł ząb albo przestała trzymać się stabilnie, pomogę szybko i bezpiecznie.
              W większości przypadków naprawa możliwa jest nawet w 24h.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Najczęstsze problemy z protezą
            </h2>
            <ul className="list-disc pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
              <li>pęknięcia i złamania płyty protezy</li>
              <li>wypadnięcie zęba z protezy</li>
              <li>luźna proteza i brak stabilności</li>
              <li>otarcia i dyskomfort przy noszeniu</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Jak wygląda naprawa
            </h2>
            <ol className="list-decimal pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
              <li>Krótka rozmowa telefoniczna i opis problemu.</li>
              <li>Szybka ocena protezy na miejscu.</li>
              <li>Naprawa i dopasowanie.</li>
              <li>Odbiór i wskazówki jak dbać o protezę.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
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
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Lokalne strony usługi
            </h2>
            <div className="flex flex-wrap gap-2 text-sm sm:text-base">
              <Link href="/naprawa-protez/pila" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Naprawa protez Piła</Link>
              <Link href="/naprawa-protez/zlotow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Naprawa protez Złotów</Link>
              <Link href="/naprawa-protez/czluchow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Naprawa protez Człuchów</Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
