import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Konsultacje protetyczne Zakrzewo | Protetyka – Karolina Szymanska',
  description: 'Konsultacje protetyczne w Zakrzewie. Ocena sytuacji, omowienie mozliwych rozwiazan i plan dalszych krokow.',
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
              Konsultacje protetyczne – Zakrzewo
            </h1>
            <p className="text-base sm:text-lg text-clr-dark/80 max-w-3xl leading-relaxed">
              Masz problem z proteza lub potrzebujesz fachowej porady? Podczas konsultacji
              ocenie sytuacje i przedstawie mozliwe rozwiazania.
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
              <li>jasna ocena stanu protezy</li>
              <li>rekomendacje dalszych krokow</li>
              <li>orientacyjny koszt i czas realizacji</li>
              <li>mozliwosc zaplanowania naprawy lub dopasowania</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Jak sie umowic
            </h2>
            <ol className="list-decimal pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
              <li>zadzwoń i opisz problem</li>
              <li>ustalimy dogodny termin spotkania</li>
              <li>otrzymasz plan dalszego postepowania</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              FAQ – konsultacje protetyczne
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-clr-dark/80">
              <div>
                <p className="font-medium text-clr-dark">Ile trwa konsultacja?</p>
                <p>Zwykle kilkanascie minut, w zaleznosci od sytuacji.</p>
              </div>
              <div>
                <p className="font-medium text-clr-dark">Czy konsultacja zobowiazuje do dalszych prac?</p>
                <p>Nie, decyzja zawsze nalezy do Ciebie.</p>
              </div>
              <div>
                <p className="font-medium text-clr-dark">Czy moge omowic kilka problemow naraz?</p>
                <p>Tak, warto opisac wszystkie kwestie podczas rozmowy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
