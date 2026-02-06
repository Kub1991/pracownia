'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';

const AREAS_SERVED: Array<{ label: string; href?: string }> = [
  { label: 'Zakrzewo' },
  { label: 'Złotów', href: '/naprawa-protez/zlotow' },
  { label: 'Jastrowie', href: '/naprawa-protez/jastrowie' },
  { label: 'Krajenka', href: '/naprawa-protez/krajenka' },
  { label: 'Okonek', href: '/naprawa-protez/okonek' },
  { label: 'Więcbork', href: '/naprawa-protez/wiecbork' },
  { label: 'Sępólno Krajeńskie', href: '/naprawa-protez/sepolno-krajenskie' },
  { label: 'Piła', href: '/naprawa-protez/pila' },
  { label: 'Debrzno' },
  { label: 'Człuchów', href: '/naprawa-protez/czluchow' },
  { label: 'Wysoka' },
  { label: 'Lipka' },
  { label: 'Tarnówka' },
  { label: 'Łobżenica' },
  { label: 'Koczała' },
];

export default function AreasServed() {
  return (
    <section id="areas-served" className="py-2 bg-clr-gray">
      <div className="w-full px-6 lg:px-8">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 shadow-sm">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4 sm:mb-6">
                Pacjenci odwiedzają mnie z tych miejscowości
              </h2>
              <p className="text-base sm:text-lg text-clr-dark/80 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                Moja pracownia w Zakrzewie to punkt, do którego najczęściej przyjeżdżają pacjenci
                z poniższych miejscowości, szukający szybkiej i profesjonalnej pomocy.
              </p>
            </div>

            <Card className="bg-gray-50 rounded-2xl lg:rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-none">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 sm:gap-y-4">
                {AREAS_SERVED.map((area) => (
                  <div
                    key={area.label}
                    className="flex items-center text-sm sm:text-base text-clr-dark before:content-['•'] before:mr-2 sm:before:mr-3 before:opacity-60 before:text-clr-accent before:font-bold"
                  >
                    {area.href ? (
                      <Link
                        href={area.href}
                        className="underline underline-offset-2 hover:text-clr-accent transition-colors"
                      >
                        {area.label}
                      </Link>
                    ) : (
                      area.label
                    )}
                  </div>
                ))}
              </div>
            </Card>

            <div className="text-center mt-6 sm:mt-8">
              <p className="text-sm sm:text-base text-clr-dark/70">
                Nie widzisz swojej miejscowości?{' '}
                <span className="font-medium text-clr-dark">Zadzwoń - chętnie odpowiem na Twoje pytania!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
