import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Naprawa Protez dla Pacjentów z Złotowa – 24 h | Zakrzewo',
  description: 'Pracownia w Zakrzewie, naprawa protez dla mieszkańców Złotowa nawet w 24 h. Zadzwoń!',
  keywords: 'naprawa protez Złotów, protetyka stomatologiczna Złotów, technik dentystyczny Złotów, naprawa protez 24h Złotów',
  authors: [{ name: 'Karolina Szymańska' }],
  creator: 'Karolina Szymańska',
  publisher: 'Pracownia Protetyki Stomatologicznej',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://protetyka-zakrzewo.pl/naprawa-protez-zlotow'
  },
  openGraph: {
    title: 'Naprawa Protez dla Pacjentów z Złotowa – 24 h | Zakrzewo',
    description: 'Pracownia w Zakrzewie, naprawa protez dla mieszkańców Złotowa nawet w 24 h. Zadzwoń!',
    url: 'https://protetyka-zakrzewo.pl/naprawa-protez-zlotow',
    siteName: 'Pracownia Protetyki Stomatologicznej',
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naprawa Protez dla Pacjentów z Złotowa – 24 h | Zakrzewo',
    description: 'Pracownia w Zakrzewie, naprawa protez dla mieszkańców Złotowa nawet w 24 h. Zadzwoń!',
  },
};

const services = [
  {
    icon: <ExclamationTriangleIcon className="h-6 w-6" />,
    title: "Pęknięta proteza (obsługa Złotów)",
    description: "Pękniętą protezę naprawiam szybko i precyzyjnie. Stosuję nowoczesne techniki, by zapewnić trwałość. Twoja proteza odzyska dawną funkcjonalność w ciągu jednej wizyty."
  },
  {
    icon: <AdjustmentsHorizontalIcon className="h-6 w-6" />,
    title: "Luźna proteza (obsługa Złotów)",
    description: "Luźną protezę precyzyjnie dopasowuję, by poprawić komfort noszenia. Eliminuję dyskomfort i ryzyko otarć dziąseł. Znów poczujesz się swobodnie podczas mówienia i jedzenia."
  },
  {
    icon: <SparklesIcon className="h-6 w-6" />,
    title: "Zużyta proteza (obsługa Złotów)",
    description: "Zużytą protezę profesjonalnie odnawiam – poleruję, wymieniam elementy i poprawiam estetykę. Odzyskasz sprawność i estetyczny wygląd bez konieczności wymiany."
  },
  {
    icon: <SparklesIcon className="h-6 w-6" />,
    title: "Przebarwienia protezy (obsługa Złotów)",
    description: "Usuwam przebarwienia protezy za pomocą profesjonalnego piaskowania i dezynfekcji. Twoja proteza znów będzie czysta i estetyczna."
  },
  {
    icon: <WrenchScrewdriverIcon className="h-6 w-6" />,
    title: "Wypadł ząb z protezy (obsługa Złotów)",
    description: "Ząb wypadł z protezy? Błyskawicznie uzupełniam brakujące elementy, zapewniając estetykę i funkcjonalność. Przywracam wygodę użytkowania już tego samego dnia."
  }
];

const processSteps = [
  "Zgłoszenie: Zadzwoń lub napisz.",
  "Wysyłka/Odbiór: Wyślij protezę kurierem lub umów odbiór osobisty.",
  "Naprawa w 24 h: Szybka, fachowa naprawa.",
  "Doręczenie: Proteza wraca kurierem lub odbierasz ją osobiście."
];

const pricingData = [
  { service: "Naprawa pękniętej protezy", time: "1–2 godz.", price: "od 120 zł" },
  { service: "Dopasowanie luźnej protezy", time: "1–2 godz.", price: "od 120 zł" },
  { service: "Renowacja zużytej protezy", time: "2–3 godz.", price: "od 120 zł" },
  { service: "Czyszczenie przebarwień", time: "1 godz.", price: "od 120 zł" },
  { service: "Uzupełnienie wypadłego zęba", time: "1–2 godz.", price: "od 120 zł" }
];

const faqData = [
  {
    question: "Ile trwa naprawa protezy?",
    answer: "Naprawa protezy trwa zwykle od 1 do 2 godzin. Ekspresowa usługa możliwa nawet tego samego dnia."
  },
  {
    question: "Czy NFZ refunduje naprawę protez?",
    answer: "Tak, naprawa protez może być dofinansowana przez NFZ. Warunki refundacji zależą od typu protezy."
  },
  {
    question: "Czy każdą protezę można naprawić?",
    answer: "Większość protez można skutecznie naprawić. W wyjątkowych sytuacjach może być konieczna wymiana."
  },
  {
    question: "Ile kosztuje naprawa protezy w Złotowie?",
    answer: "Koszt naprawy protezy zaczyna się od 120 zł, w zależności od rodzaju usługi i zakresu prac."
  },
  {
    question: "Czy mogę wysłać protezę kurierem?",
    answer: "Tak, istnieje możliwość wysłania protezy kurierem. Proszę wcześniej o kontakt telefoniczny."
  },
  {
    question: "Czy muszę przyjechać do Zakrzewa?",
    answer: "Nie, możliwa jest wysyłka protezy kurierem lub umówiony odbiór po wcześniejszym kontakcie."
  }
];

export default function NaprawaProtezZlotowPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://protetyka-zakrzewo.pl/naprawa-protez-zlotow",
            "name": "Pracownia Protetyki Stomatologicznej - Karolina Szymańska - Obsługa Złotów",
            "alternateName": "Naprawa Protez Złotów",
            "description": "Profesjonalna pracownia protetyki stomatologicznej w Zakrzewie oferująca szybką naprawę protez dla mieszkańców Złotowa. Naprawa nawet w 24 godziny.",
            "url": "https://protetyka-zakrzewo.pl/naprawa-protez-zlotow",
            "telephone": "+48735491129",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ul. E. J, Osmańczyka 18",
              "addressLocality": "Zakrzewo",
              "postalCode": "77-424",
              "addressRegion": "wielkopolskie",
              "addressCountry": "PL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 53.7833,
              "longitude": 17.9167
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Złotów",
                "addressRegion": "wielkopolskie",
                "addressCountry": "PL"
              },
              {
                "@type": "City",
                "name": "Zakrzewo",
                "addressRegion": "wielkopolskie", 
                "addressCountry": "PL"
              }
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Monday",
                "opens": "12:00",
                "closes": "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Tuesday",
                "opens": "09:00",
                "closes": "15:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Wednesday",
                "opens": "09:00",
                "closes": "15:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Thursday",
                "opens": "09:00",
                "closes": "15:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Friday",
                "opens": "09:00",
                "closes": "14:00"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Usługi Naprawy Protez dla Złotowa",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Naprawa Pękniętych Protez Złotów",
                    "description": "Szybka naprawa pękniętych protez dla mieszkańców Złotowa"
                  },
                  "areaServed": "Złotów"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dopasowanie Luźnych Protez Złotów",
                    "description": "Precyzyjne dopasowanie luźnych protez dla pacjentów z Złotowa"
                  },
                  "areaServed": "Złotów"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Renowacja Protez Złotów",
                    "description": "Profesjonalna renowacja zużytych protez dla mieszkańców Złotowa"
                  },
                  "areaServed": "Złotów"
                }
              ]
            },
            "founder": {
              "@type": "Person",
              "name": "Karolina Szymańska",
              "jobTitle": "Technik Dentystyczny"
            }
          })
        }}
      />

      <div className="min-h-screen bg-clr-gray">
        {/* Hero Section */}
        <section className="pt-20 pb-8 bg-clr-gray">
          <div className="w-full px-6 lg:px-8">
            <div className="w-full max-w-[1200px] mx-auto">
              <div className="rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 shadow-sm bg-white">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
                  {/* Left Column */}
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
                    <div className="space-y-2">
                      <div className="inline-block bg-clr-accent text-clr-dark px-3 py-1 rounded-full text-sm font-medium">
                        Obsługa Złotów
                      </div>
                      <h1 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark leading-tight">
                        Naprawa protez Złotów – ekspresowa pomoc
                      </h1>
                    </div>
                    
                    <p className="text-base sm:text-lg text-clr-dark/80 leading-relaxed">
                      Pęknięta, luźna lub zużyta proteza? Pomagam szybko i skutecznie w pracowni protez w Zakrzewie. 
                      Naprawiam uzupełnienia dentystyczne nawet w 24 godziny, gwarantując komfort i trwałość naprawy.
                    </p>

                    <div className="bg-clr-accent/20 rounded-xl p-4">
                      <p className="text-clr-dark font-medium text-sm">
                        <strong>Dla mieszkańców Złotowa:</strong> Oferuję odbiór kurierem lub szybką wizytę po wcześniejszym ustaleniu terminu.
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <a href="tel:+48735491129" className="block">
                        <Card className="bg-clr-accent text-clr-dark rounded-2xl p-6 border-none shadow-none cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                          <div className="flex flex-col items-center text-center">
                            <PhoneIcon className="h-8 w-8 mb-3" />
                            <span className="font-unbounded font-bold text-lg">735-491-129</span>
                            <span className="text-sm text-clr-dark/80">Zadzwoń teraz</span>
                          </div>
                        </Card>
                      </a>
                      
                      <Link href="/#contact-section">
                        <Card className="bg-gray-50 rounded-2xl p-6 border border-clr-accent shadow-none cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                          <div className="flex flex-col items-center text-center">
                            <ArrowRightIcon className="h-8 w-8 mb-3 text-clr-dark" />
                            <span className="font-unbounded font-bold text-lg text-clr-dark">Formularz</span>
                            <span className="text-sm text-clr-dark/80">Napisz do mnie</span>
                          </div>
                        </Card>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="relative order-1 lg:order-2">
                    <div className="relative aspect-[4/3] sm:aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden">
                      <Image
                        src="/hero_PHOTO.jpg"
                        alt="Naprawa protez zębowych dla mieszkańców Złotowa - Pracownia Protetyki Stomatologicznej Zakrzewo"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-8 bg-clr-gray">
          <div className="w-full px-6 lg:px-8">
            <div className="w-full max-w-[1200px] mx-auto">
              <div className="bg-white rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 shadow-sm">
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                  <h2 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4 sm:mb-6">
                    Usługi naprawy protez dla Złotowa
                  </h2>
                  <p className="text-base sm:text-lg text-clr-dark/80 max-w-2xl mx-auto leading-relaxed">
                    Kompleksowa obsługa wszystkich problemów z protezami zębowymi
                  </p>
                </div>

                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {services.map((service, index) => (
                    <Card key={index} className="bg-gray-50 border border-gray-200 p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200" style={{ borderRadius: '16px' }}>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-clr-dark text-white mx-auto">
                          {service.icon}
                        </div>
                        <h3 className="font-unbounded font-bold text-base text-clr-dark text-center">
                          {service.title}
                        </h3>
                        <p className="text-sm text-clr-dark/70 leading-relaxed text-center">
                          {service.description}
                        </p>
                        <div className="text-center">
                          <Button className="bg-clr-accent text-clr-dark hover:bg-clr-dark hover:text-white transition-all duration-200 rounded-full px-4 py-2 text-sm font-medium">
                            Umów wizytę
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-8 bg-clr-gray">
          <div className="w-full px-6 lg:px-8">
            <div className="w-full max-w-[1200px] mx-auto">
              <div className="bg-white rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 shadow-sm">
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                  <h2 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4 sm:mb-6">
                    Jak to działa?
                  </h2>
                </div>

                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  {processSteps.map((step, index) => (
                    <Card key={index} className="bg-clr-accent/10 border border-clr-accent/20 p-6 text-center" style={{ borderRadius: '16px' }}>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-clr-dark text-white mx-auto font-bold">
                          {index + 1}
                        </div>
                        <p className="text-sm text-clr-dark font-medium leading-relaxed">
                          {step}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-8 bg-clr-gray">
          <div className="w-full px-6 lg:px-8">
            <div className="w-full max-w-[1200px] mx-auto">
              <div className="bg-white rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 shadow-sm">
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                  <h2 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4 sm:mb-6">
                    Cennik naprawy protez
                  </h2>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 font-unbounded font-bold text-clr-dark">Usługa</th>
                        <th className="text-left py-4 px-4 font-unbounded font-bold text-clr-dark">Czas</th>
                        <th className="text-left py-4 px-4 font-unbounded font-bold text-clr-dark">Cena</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingData.map((item, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-4 px-4 text-clr-dark">{item.service}</td>
                          <td className="py-4 px-4 text-clr-dark/70">{item.time}</td>
                          <td className="py-4 px-4 text-clr-dark font-medium">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 bg-clr-gray">
          <div className="w-full px-6 lg:px-8">
            <div className="w-full max-w-[1200px] mx-auto">
              <div className="bg-white rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 shadow-sm">
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                  <h2 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4 sm:mb-6">
                    Najczęściej zadawane pytania
                  </h2>
                </div>

                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                  {faqData.map((faq, index) => (
                    <Card key={index} className="bg-gray-50 border border-gray-200 p-6" style={{ borderRadius: '16px' }}>
                      <div className="space-y-3">
                        <h3 className="font-unbounded font-bold text-base text-clr-dark">
                          {faq.question}
                        </h3>
                        <p className="text-sm text-clr-dark/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 bg-clr-gray">
          <div className="w-full px-6 lg:px-8">
            <div className="w-full max-w-[1200px] mx-auto">
              <div className="bg-clr-accent rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 shadow-sm text-center">
                <h2 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4 sm:mb-6">
                  Zadzwoń teraz: 735-491-129
                </h2>
                <p className="text-base sm:text-lg text-clr-dark/80 mb-6 sm:mb-8">
                  Szybka pomoc dla mieszkańców Złotowa
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="tel:+48735491129">
                    <Button className="bg-clr-dark text-white hover:bg-white hover:text-clr-dark transition-all duration-200 rounded-full px-8 py-3 font-unbounded font-bold">
                      <PhoneIcon className="h-5 w-5 mr-2" />
                      Zadzwoń teraz
                    </Button>
                  </a>
                  <Link href="/#contact-section">
                    <Button variant="outline" className="border-clr-dark text-clr-dark hover:bg-clr-dark hover:text-white transition-all duration-200 rounded-full px-8 py-3 font-unbounded font-bold">
                      Formularz kontaktowy
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="py-8 bg-clr-gray">
          <div className="w-full px-6 lg:px-8">
            <div className="w-full max-w-[1200px] mx-auto">
              <div className="bg-white rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 shadow-sm text-center">
                <h3 className="font-unbounded font-bold text-xl text-clr-dark mb-4">
                  Zobacz również
                </h3>
                <Link href="/" className="inline-flex items-center text-clr-accent hover:text-clr-dark transition-colors font-medium">
                  Strona główna - Pracownia Protetyki Stomatologicznej
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}