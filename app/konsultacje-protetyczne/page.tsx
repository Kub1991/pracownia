import type { Metadata } from 'next';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Konsultacje protetyczne Zakrzewo | Protetyka - Karolina Szymańska',
  description:
    'Konsultacje protetyczne w Zakrzewie. Ocena sytuacji, omówienie możliwych rozwiązań i plan dalszych kroków.',
  alternates: {
    canonical: '/konsultacje-protetyczne',
  },
};

export default function KonsultacjeProtetycznePage() {
  return (
    <div className="bg-clr-gray">
      <section className="pt-20 pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14 shadow-sm">
            <h1 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4">
              Konsultacje protetyczne - Zakrzewo
            </h1>
            <p className="text-base sm:text-lg text-clr-dark/80 max-w-3xl leading-relaxed">
              Masz problem z protezą lub potrzebujesz fachowej porady? Podczas konsultacji
              ocenię sytuację i przedstawię możliwe rozwiązania.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Co zyskujesz na konsultacji
            </h2>
            <ul className="list-disc pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
              <li>jasną ocenę stanu protezy</li>
              <li>rekomendacje dalszych kroków</li>
              <li>orientacyjny koszt i czas realizacji</li>
              <li>możliwość zaplanowania naprawy lub dopasowania</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Jak się umówić
            </h2>
            <ol className="list-decimal pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
              <li>zadzwoń i opisz problem</li>
              <li>ustalimy dogodny termin spotkania</li>
              <li>otrzymasz plan dalszego postępowania</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
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
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Lokalne strony usługi
            </h2>
            <div className="flex flex-wrap gap-2 text-sm sm:text-base">
              <Link href="/konsultacje-protetyczne/pila" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Konsultacje protetyczne Piła</Link>
              <Link href="/konsultacje-protetyczne/zlotow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Konsultacje protetyczne Złotów</Link>
              <Link href="/konsultacje-protetyczne/czluchow" className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors">Konsultacje protetyczne Człuchów</Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
