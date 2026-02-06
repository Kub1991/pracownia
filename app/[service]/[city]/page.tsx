import type { Metadata } from 'next';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

const SERVICES = {
  'naprawa-protez': {
    name: 'Naprawa protez',
    short: 'naprawa protez',
    description:
      'Szybka pomoc przy pęknięciach, wypadnięciu zęba i luźnej protezie. Często możliwe naprawy w 24h.',
  },
  'protezy-zebowe': {
    name: 'Protezy zębowe',
    short: 'protezy zębowe',
    description:
      'Dobór i wykonanie rozwiązań protetycznych dopasowanych do potrzeb, estetyki i komfortu.',
  },
  'dopasowanie-protez': {
    name: 'Dopasowanie protez',
    short: 'dopasowanie protez',
    description:
      'Korekta i dopasowanie, gdy proteza jest luźna, powoduje dyskomfort lub przesuwa się.',
  },
  'konsultacje-protetyczne': {
    name: 'Konsultacje protetyczne',
    short: 'konsultacje protetyczne',
    description:
      'Ocena sytuacji i plan dalszych kroków. Konkretne zalecenia i możliwe rozwiązania.',
  },
} as const;

const CITIES: Record<string, string> = {
  zakrzewo: 'Zakrzewo',
  zlotow: 'Złotów',
  jastrowie: 'Jastrowie',
  krajenka: 'Krajenka',
  okonek: 'Okonek',
  wiecbork: 'Więcbork',
  'sepolno-krajenskie': 'Sępólno Krajeńskie',
  pila: 'Piła',
  debrzno: 'Debrzno',
  czluchow: 'Człuchów',
  wysoka: 'Wysoka',
  lipka: 'Lipka',
  tarnowka: 'Tarnówka',
  lobzenica: 'Łobżenica',
};

type ServiceSlug = keyof typeof SERVICES;

export function generateStaticParams() {
  const services = Object.keys(SERVICES);
  const cities = Object.keys(CITIES);

  return services.flatMap((service) =>
    cities.map((city) => ({ service, city }))
  );
}

export function generateMetadata({
  params,
}: {
  params: { service: ServiceSlug; city: string };
}): Metadata {
  const service = SERVICES[params.service];
  const city = CITIES[params.city];

  if (!service || !city) {
    return {};
  }

  return {
    title: `${service.name} ${city} | Protetyka – Karolina Szymańska`,
    description: `${service.name} w ${city}. ${service.description} Umów termin w Zakrzewie.`,
    alternates: {
      canonical: `/${params.service}/${params.city}`,
    },
  };
}

export default function LocationServicePage({
  params,
}: {
  params: { service: ServiceSlug; city: string };
}) {
  const service = SERVICES[params.service];
  const city = CITIES[params.city];

  if (!service || !city) {
    return null;
  }

  const relatedCities = Object.keys(CITIES)
    .filter((slug) => slug !== params.city)
    .slice(0, 3);

  return (
    <div className="bg-clr-gray">
      <section className="pt-20 pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14 shadow-sm">
            <h1 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4">
              {service.name} – {city}
            </h1>
            <p className="text-base sm:text-lg text-clr-dark/80 max-w-3xl leading-relaxed">
              {service.description} Obsługujemy pacjentów z {city} i okolic, a wizyty
              realizujemy w Zakrzewie po wcześniejszym kontakcie.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Najczęstsze sytuacje z {city}
            </h2>
            <ul className="list-disc pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
              <li>nagła potrzeba pomocy z protezą przed ważnym wydarzeniem</li>
              <li>dyskomfort przy jedzeniu lub mówieniu</li>
              <li>problem z dopasowaniem po dłuższym użytkowaniu</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Jak wygląda proces
            </h2>
            <ol className="list-decimal pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
              <li>kontakt telefoniczny i opis problemu</li>
              <li>ustalenie terminu w Zakrzewie</li>
              <li>wykonanie usługi i dopasowanie</li>
              <li>zalecenia po wizycie</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Powiązane lokalizacje
            </h2>
            <div className="flex flex-wrap gap-2 text-sm sm:text-base">
              {relatedCities.map((slug) => (
                <Link
                  key={slug}
                  href={`/${params.service}/${slug}`}
                  className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors"
                >
                  {CITIES[slug]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
