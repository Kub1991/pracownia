import type { Metadata } from 'next';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

const SERVICES = {
  'naprawa-protez': {
    name: 'Naprawa protez',
    short: 'naprawa protez',
    description:
      'Szybka pomoc przy peknieciach, wypadnieciu zeba i luznej protezie. Cesto mozliwe naprawy w 24h.',
  },
  'protezy-zebowe': {
    name: 'Protezy zebowe',
    short: 'protezy zebowe',
    description:
      'Dobor i wykonanie rozwiazan protetycznych dopasowanych do potrzeb, estetyki i komfortu.',
  },
  'dopasowanie-protez': {
    name: 'Dopasowanie protez',
    short: 'dopasowanie protez',
    description:
      'Korekta i dopasowanie, gdy proteza jest luzna, powoduje dyskomfort lub przesuwa sie.',
  },
  'konsultacje-protetyczne': {
    name: 'Konsultacje protetyczne',
    short: 'konsultacje protetyczne',
    description:
      'Ocena sytuacji i plan dalszych krokow. Konkretne zalecenia i mozliwe rozwiazania.',
  },
} as const;

type ServiceSlug = keyof typeof SERVICES;

const CITIES: Record<string, string> = {
  pila: 'Pila',
  zlotow: 'Zlotow',
  czluchow: 'Czluchow',
};

const SERVICE_HUB_PATHS: Record<ServiceSlug, string> = {
  'naprawa-protez': '/naprawa-protez',
  'protezy-zebowe': '/protezy-zebowe',
  'dopasowanie-protez': '/dopasowanie-protez',
  'konsultacje-protetyczne': '/konsultacje-protetyczne',
};

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
    title: `${service.name} ${city} | Protetyka - Karolina Szymanska`,
    description: `${service.name} w ${city}. ${service.description} Umow termin w Zakrzewie.`,
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
  const serviceHubPath = SERVICE_HUB_PATHS[params.service];

  return (
    <div className="bg-clr-gray">
      <section className="pt-20 pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14 shadow-sm">
            <h1 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4">
              {service.name} - {city}
            </h1>
            <p className="text-base sm:text-lg text-clr-dark/80 max-w-3xl leading-relaxed">
              {service.description} Obslugujemy pacjentow z {city} i okolic, a wizyty
              realizujemy w Zakrzewie po wczesniejszym kontakcie.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Najczestsze sytuacje z {city}
            </h2>
            <ul className="list-disc pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
              <li>nagla potrzeba pomocy z proteza przed waznym wydarzeniem</li>
              <li>dyskomfort przy jedzeniu lub mowieniu</li>
              <li>problem z dopasowaniem po dluzszym uzytkowaniu</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Jak wyglada proces
            </h2>
            <ol className="list-decimal pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
              <li>kontakt telefoniczny i opis problemu</li>
              <li>ustalenie terminu w Zakrzewie</li>
              <li>wykonanie uslugi i dopasowanie</li>
              <li>zalecenia po wizycie</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-sm">
            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Strona glowna uslugi
            </h2>
            <p className="text-sm sm:text-base text-clr-dark/80 mb-4">
              Zobacz pelny opis uslugi, FAQ i szczegoly na stronie glownej:
            </p>
            <Link
              href={serviceHubPath}
              className="inline-flex mb-8 px-4 py-2 rounded-full bg-clr-accent/30 hover:bg-clr-accent/40 text-clr-dark transition-colors"
            >
              {service.name} - Zakrzewo
            </Link>

            <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
              Powiazane lokalizacje
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
