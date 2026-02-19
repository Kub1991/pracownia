import type { Metadata } from 'next';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

const SERVICES = {
  'naprawa-protez': {
    name: 'Naprawa protez',
    short: 'naprawie protez',
    description:
      'Pomoc przy pęknięciach, wypadnięciu zęba i poluzowaniu protezy. Zakres pracy zawsze dobierany jest do rzeczywistego uszkodzenia.',
    focusPoints: [
      'bezpieczne użytkowanie protezy po naprawie i kontrola stabilności',
      'estetykę po odtworzeniu uszkodzonego elementu',
      'jasne zalecenia, jak zmniejszyć ryzyko kolejnych uszkodzeń',
    ],
    firstContactTips: [
      'powiedz, czy uszkodzenie pojawiło się nagle, czy narastało',
      'opisz, czy proteza pękła, obciera, czy utraciła stabilność',
      'zabezpiecz i zabierz wszystkie odłączone elementy',
    ],
  },
  'protezy-zebowe': {
    name: 'Protezy zębowe',
    short: 'protezie zębowej',
    description:
      'Dobór i wykonanie protez dopasowanych do warunków w jamie ustnej, estetyki i codziennego komfortu.',
    focusPoints: [
      'dobór rozwiązania do codziennych nawyków i oczekiwań pacjenta',
      'komfort noszenia podczas mówienia i jedzenia',
      'kontrola po oddaniu pracy i ewentualne korekty',
    ],
    firstContactTips: [
      'opisz, czego najbardziej oczekujesz od nowej protezy',
      'powiedz, jakie trudności pojawiają się przy obecnym rozwiązaniu',
      'przygotuj pytania o komfort, estetykę i czas adaptacji',
    ],
  },
  'dopasowanie-protez': {
    name: 'Dopasowanie protez',
    short: 'dopasowaniu protezy',
    description:
      'Korekta i dopasowanie, gdy proteza się przesuwa, obciera albo przestaje być wygodna w codziennym użytkowaniu.',
    focusPoints: [
      'miejsca ucisku wymagające korekty',
      'stabilność protezy podczas jedzenia, mówienia i ruchu',
      'zalecenia dotyczące dalszej kontroli dopasowania',
    ],
    firstContactTips: [
      'opisz, kiedy proteza najbardziej się przesuwa lub obciera',
      'wskaż miejsca bólu i czas, od kiedy objawy się utrzymują',
      'zabierz protezę, aby od razu ocenić punkty wymagające korekty',
    ],
  },
  'konsultacje-protetyczne': {
    name: 'Konsultacje protetyczne',
    short: 'konsultacji protetycznej',
    description:
      'Ocena aktualnej sytuacji i wybór najlepszych dalszych kroków. Konkretne zalecenia bez niepotrzebnego przeciągania decyzji.',
    focusPoints: [
      'zrozumiały plan postępowania krok po kroku',
      'dobór rozwiązania do aktualnego stanu i budżetu',
      'realny harmonogram dalszych wizyt i prac',
    ],
    firstContactTips: [
      'krótko opisz, co obecnie najbardziej utrudnia codzienne funkcjonowanie',
      'powiedz, czy problem dotyczy naprawy, dopasowania czy nowej protezy',
      'przygotuj listę pytań, które chcesz wyjaśnić podczas wizyty',
    ],
  },
} as const;

type ServiceSlug = keyof typeof SERVICES;

type CityData = {
  nominative: string;
  locative: string;
  from: string;
  intro: string;
  localNeeds: [string, string, string];
  planningTips: [string, string, string];
  metaHook: string;
};

const CITIES: Record<string, CityData> = {
  pila: {
    nominative: 'Piła',
    locative: 'Pile',
    from: 'Piły',
    intro:
      'Dla pacjentów dojeżdżających z Piły zwykle najważniejsze jest sprawne umówienie konkretnej godziny.',
    localNeeds: [
      'szybka pomoc przy nagłym uszkodzeniu protezy',
      'korekta dyskomfortu utrudniającego codzienne funkcjonowanie',
      'jasny plan wizyty bez niepotrzebnych formalności',
    ],
    planningTips: [
      'zadzwoń wcześniej i opisz objawy lub rodzaj uszkodzenia',
      'zabierz protezę i, jeśli masz, dotychczasowe zalecenia',
      'zarezerwuj czas na krótką kontrolę po wykonanej usłudze',
    ],
    metaHook: 'Priorytetem jest sprawna organizacja i czytelny plan wizyty.',
  },
  zlotow: {
    nominative: 'Złotów',
    locative: 'Złotowie',
    from: 'Złotowa',
    intro:
      'Pacjenci ze Złotowa najczęściej oczekują szybkiej oceny problemu i konkretnej informacji o kolejnych krokach.',
    localNeeds: [
      'bezpieczna naprawa uszkodzonej protezy bez odkładania sprawy',
      'dopasowanie poprawiające komfort mówienia i jedzenia',
      'czytelna rekomendacja dalszego postępowania',
    ],
    planningTips: [
      'najpierw skontaktuj się telefonicznie, aby dobrać odpowiedni termin',
      'nie odkładaj wizyty, jeśli pojawił się ból lub otarcia',
      'po usłudze stosuj się do zaleceń dotyczących użytkowania',
    ],
    metaHook: 'Skupiamy się na szybkim rozpoznaniu problemu i realnym terminie.',
  },
  czluchow: {
    nominative: 'Człuchów',
    locative: 'Człuchowie',
    from: 'Człuchowa',
    intro:
      'Dla osób z Człuchowa ważne jest, aby już w pierwszym kontakcie otrzymać jasną informację o możliwym zakresie pomocy.',
    localNeeds: [
      'ocena, czy problem wymaga naprawy, korekty czy nowego rozwiązania',
      'zmniejszenie dyskomfortu utrudniającego codzienne funkcjonowanie',
      'uporządkowany plan zrozumiały jeszcze przed wizytą',
    ],
    planningTips: [
      'przed rozmową przygotuj krótki opis problemu i kiedy się pojawił',
      'na wizytę przynieś używaną protezę oraz elementy, które się odłączyły',
      'po realizacji zaplanuj kontrolę, jeśli pojawią się nowe punkty ucisku',
    ],
    metaHook: 'Stawiamy na precyzyjną ocenę i spokojne prowadzenie całego procesu.',
  },
  wiecbork: {
    nominative: 'Więcbork',
    locative: 'Więcborku',
    from: 'Więcborka',
    intro:
      'Pacjenci z Więcborka często szukają rozwiązania, które pozwoli szybko wrócić do normalnego komfortu dnia codziennego.',
    localNeeds: [
      'pomoc przy protezie, która nagle przestała być stabilna',
      'korekta, gdy pojawiają się otarcia lub ból',
      'czytelny plan kolejnych etapów bez niejasności',
    ],
    planningTips: [
      'umów wizytę z wyprzedzeniem i opisz objawy przez telefon',
      'na miejscu zgłoś wszystkie punkty ucisku, nawet drobne',
      'po usłudze monitoruj komfort przez pierwsze dni użytkowania',
    ],
    metaHook: 'Wizytę planujemy tak, aby ograniczyć niepotrzebne wizyty i stres.',
  },
  'sepolno-krajenskie': {
    nominative: 'Sępólno Krajeńskie',
    locative: 'Sępólnie Krajeńskim',
    from: 'Sępólna Krajeńskiego',
    intro:
      'Osoby dojeżdżające z Sępólna Krajeńskiego najczęściej oczekują konkretu: co zrobić teraz i jak zadbać o komfort na dłużej.',
    localNeeds: [
      'szybkie uporządkowanie problemu z uszkodzoną protezą',
      'dopasowanie poprawiające wygodę codziennego noszenia',
      'zrozumiałe zalecenia po wykonanej usłudze',
    ],
    planningTips: [
      'w pierwszym kontakcie opisz, czy problem jest nagły czy narastający',
      'na wizytę zabierz aktualnie używaną protezę i akcesoria do pielęgnacji',
      'po wizycie stosuj zalecenia dotyczące higieny i przechowywania',
    ],
    metaHook: 'Każdy etap omawiamy prostym językiem i bez pośpiechu.',
  },
  jastrowie: {
    nominative: 'Jastrowie',
    locative: 'Jastrowiu',
    from: 'Jastrowia',
    intro:
      'Pacjenci z Jastrowia zwykle chcą szybko odzyskać stabilność protezy i pewność podczas mówienia oraz jedzenia.',
    localNeeds: [
      'naprawa lub korekta po nagłym pogorszeniu komfortu',
      'ocena, czy obecna proteza nadal spełnia swoją funkcję',
      'praktyczne zalecenia na codzienne użytkowanie',
    ],
    planningTips: [
      'opisz przez telefon, czy proteza się przesuwa, pęka czy obciera',
      'na miejscu wskaż sytuacje, w których problem jest najbardziej odczuwalny',
      'po wykonanej usłudze zapisz uwagi do ewentualnej kontroli',
    ],
    metaHook: 'Skupiamy się na komforcie użytkowania i czytelnym planie działania.',
  },
  krajenka: {
    nominative: 'Krajenka',
    locative: 'Krajence',
    from: 'Krajenki',
    intro:
      'Dla pacjentów z Krajenki kluczowe jest połączenie szybkiej pomocy z dokładnym dopasowaniem rozwiązania do ich potrzeb.',
    localNeeds: [
      'usunięcie przyczyny bólu lub niestabilności protezy',
      'dobór postępowania adekwatnego do obecnego stanu',
      'realny harmonogram kolejnych kroków',
    ],
    planningTips: [
      'przed wizytą przygotuj informacje o czasie trwania problemu',
      'przynieś dotychczasową protezę oraz elementy po naprawach',
      'po korekcie obserwuj komfort i zgłoś ewentualne nowe objawy',
    ],
    metaHook: 'Dobieramy zakres pomocy do sytuacji, bez zbędnego przeciągania procesu.',
  },
  okonek: {
    nominative: 'Okonek',
    locative: 'Okonku',
    from: 'Okonka',
    intro:
      'Osoby z Okonka najczęściej oczekują szybkiej oceny i prostych wskazówek, które od razu można zastosować.',
    localNeeds: [
      'szybka reakcja przy pęknięciu lub poluzowaniu protezy',
      'dopasowanie poprawiające komfort codziennego funkcjonowania',
      'jasna informacja o dalszym postępowaniu po usłudze',
    ],
    planningTips: [
      'zadzwoń i krótko opisz objawy, aby dobrać właściwy termin',
      'na wizytę przynieś protezę i wskaż miejsca największego dyskomfortu',
      'po naprawie lub korekcie stosuj się do zaleceń dotyczących użytkowania',
    ],
    metaHook: 'Priorytetem jest szybkie uporządkowanie problemu i komfort pacjenta.',
  },
};

type CitySlug = keyof typeof CITIES;

const SERVICE_HUB_PATHS: Record<ServiceSlug, string> = {
  'naprawa-protez': '/naprawa-protez/',
  'protezy-zebowe': '/protezy-zebowe/',
  'dopasowanie-protez': '/dopasowanie-protez/',
  'konsultacje-protetyczne': '/konsultacje-protetyczne/',
};

const INDEXABLE_CITY_SLUGS = [
  'zlotow',
  'krajenka',
  'czluchow',
  'jastrowie',
] as const;

const INDEXABLE_CITY_SET = new Set<string>(INDEXABLE_CITY_SLUGS);

function shouldIndexCity(city: CitySlug): boolean {
  return INDEXABLE_CITY_SET.has(city);
}

export function generateStaticParams() {
  const services = Object.keys(SERVICES) as ServiceSlug[];
  const cities = Object.keys(CITIES) as CitySlug[];

  return services.flatMap((service) =>
    cities.map((city) => ({ service, city }))
  );
}

export function generateMetadata({
  params,
}: {
  params: { service: ServiceSlug; city: CitySlug };
}): Metadata {
  const service = SERVICES[params.service];
  const city = CITIES[params.city];

  if (!service || !city) {
    return {};
  }

  const isIndexableCity = shouldIndexCity(params.city);
  const serviceHubPath = SERVICE_HUB_PATHS[params.service];

  const metadata: Metadata = {
    title: `${service.name} ${city.nominative} | Termin w Zakrzewie`,
    description: `${service.name} dla pacjentów z ${city.from}. ${city.metaHook} Umów kontakt i wizytę w Zakrzewie.`,
    alternates: {
      canonical: isIndexableCity
        ? `/${params.service}/${params.city}/`
        : serviceHubPath,
    },
  };

  if (!isIndexableCity) {
    metadata.robots = {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
      },
    };
  }

  return metadata;
}

export default function LocationServicePage({
  params,
}: {
  params: { service: ServiceSlug; city: CitySlug };
}) {
  const service = SERVICES[params.service];
  const city = CITIES[params.city];

  if (!service || !city) {
    return null;
  }

  const relatedCities = (Object.keys(CITIES) as CitySlug[])
    .filter((slug) => shouldIndexCity(slug) && slug !== params.city)
    .slice(0, 6);
  const relatedServices = (Object.keys(SERVICES) as ServiceSlug[]).filter(
    (slug) => slug !== params.service
  );
  const serviceHubPath = SERVICE_HUB_PATHS[params.service];

  return (
    <div className="bg-clr-gray">
      <section className="pt-20 pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14 shadow-sm">
            <h1 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4">
              {service.name} - {city.nominative}
            </h1>
            <p className="text-base sm:text-lg text-clr-dark/80 max-w-3xl leading-relaxed mb-4">
              {service.description}
            </p>
            <p className="text-sm sm:text-base text-clr-dark/80 max-w-3xl leading-relaxed">
              {city.intro} Obsługujemy pacjentów z {city.from} i okolic, a wizyty
              realizujemy w Zakrzewie po wcześniejszym kontakcie.
            </p>

            <div className="mt-10 space-y-10">
              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Najczęstsze potrzeby pacjentów w {city.locative}
                </h2>
                <ul className="list-disc pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
                  {city.localNeeds.map((need) => (
                    <li key={need}>{need}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Na czym skupiamy się przy {service.short}
                </h2>
                <ul className="list-disc pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
                  {service.focusPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Co przekazać przy pierwszym kontakcie
                </h2>
                <ul className="list-disc pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
                  {service.firstContactTips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Jak przygotować wizytę przy dojeździe z {city.from}
                </h2>
                <ol className="list-decimal pl-5 text-clr-dark/80 space-y-2 text-sm sm:text-base">
                  {city.planningTips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Powiązane usługi w {city.locative}
                </h2>
                <div className="flex flex-wrap gap-2 text-sm sm:text-base mb-8">
                  {relatedServices.map((serviceSlug) => (
                    <Link
                      key={serviceSlug}
                      href={`/${serviceSlug}/${params.city}`}
                      className="px-3 py-1 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors"
                    >
                      {SERVICES[serviceSlug].name} w {city.locative}
                    </Link>
                  ))}
                </div>

                <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4">
                  Strona główna usługi
                </h2>
                <p className="text-sm sm:text-base text-clr-dark/80 mb-4">
                  Zobacz pełny opis usługi i zakres pomocy na stronie głównej:
                </p>
                <Link
                  href={serviceHubPath}
                  className="inline-flex mb-8 px-4 py-2 rounded-full bg-clr-accent/30 hover:bg-clr-accent/40 text-clr-dark transition-colors"
                >
                  {service.name} - Zakrzewo
                </Link>

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
                      {service.name} w {CITIES[slug].locative}
                    </Link>
                  ))}
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

