import type { Metadata } from 'next';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Dopasowanie protez Zakrzewo | Protetyka - Karolina Szymańska',
  description: 'Dopasowanie i korekta protez w Zakrzewie. Poprawa stabilności, komfortu i funkcji zgryzu.',
  alternates: {
    canonical: '/dopasowanie-protez',
  },
};

export default function DopasowanieProtezPage() {
  return (
    <div className="bg-clr-gray">
      <section className="pt-20 pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14 shadow-sm">
            <h1 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4">
              Dopasowanie protez - Zakrzewo
            </h1>
            <p className="text-base sm:text-lg text-clr-dark/80 max-w-3xl leading-relaxed">
              Jeśli proteza jest luźna, powoduje otarcia lub dyskomfort, dopasowanie i korekta
              pozwolą odzyskać wygodę i pewność noszenia.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Kiedy potrzebne jest dopasowanie
            </h2>
            <ul className="list-disc pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
              <li>proteza się przesuwa lub wypada</li>
              <li>pojawiły się otarcia lub ból</li>
              <li>masz trudność w jedzeniu lub mówieniu</li>
              <li>zgryz przestał być stabilny</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Jak przebiega korekta
            </h2>
            <ol className="list-decimal pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
              <li>ocena miejsc ucisku i stabilności</li>
              <li>korekta powierzchni i dopasowanie</li>
              <li>sprawdzenie komfortu i funkcji zgryzu</li>
              <li>zalecenia do dalszego użytkowania</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              FAQ - dopasowanie protez
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-clr-dark/80">
              <div>
                <p className="font-medium text-clr-dark">Czy dopasowanie boli?</p>
                <p>Nie. Wszystko odbywa się delikatnie i z myślą o komforcie.</p>
              </div>
              <div>
                <p className="font-medium text-clr-dark">Jak szybko można wykonać korektę?</p>
                <p>W wielu przypadkach tego samego dnia po wizycie.</p>
              </div>
              <div>
                <p className="font-medium text-clr-dark">Czy dopasowanie wystarcza na długo?</p>
                <p>Tak, ale przy zmianach w jamie ustnej potrzebne mogą być kolejne korekty.</p>
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
              <Link href="/dopasowanie-protez/pila" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Dopasowanie protez Piła</Link>
              <Link href="/dopasowanie-protez/zlotow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Dopasowanie protez Złotów</Link>
              <Link href="/dopasowanie-protez/czluchow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Dopasowanie protez Człuchów</Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
