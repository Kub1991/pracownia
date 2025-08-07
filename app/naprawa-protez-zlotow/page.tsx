import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  PhoneIcon,
  ArrowRightIcon
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

      <div className="min-h-screen bg-clr-gray pt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
          <article className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            
            {/* Header */}
            <header className="mb-8">
              <div className="inline-block bg-clr-accent text-clr-dark px-3 py-1 rounded-full text-sm font-medium mb-4">
                Obsługa Złotów
              </div>
              <h1 className="font-unbounded font-bold text-3xl lg:text-4xl text-clr-dark mb-4">
                Naprawa protez Złotów – ekspresowa pomoc
              </h1>
              <p className="text-lg text-clr-dark/80 leading-relaxed">
                Pęknięta, luźna lub zużyta proteza? Pomagam szybko i skutecznie w pracowni protez w Zakrzewie. 
                Naprawiam uzupełnienia dentystyczne nawet w 24 godziny, gwarantując komfort i trwałość naprawy. 
                Pracownia znajduje się w Zakrzewie, a pacjentom z Złotowa oferuję odbiór kurierem lub szybką wizytę 
                po wcześniejszym ustaleniu terminu. Zadzwoń: <strong>735-491-129</strong> i odzyskaj pewność siebie oraz wygodę jedzenia.
              </p>
            </header>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <a href="tel:+48735491129" className="block">
                <Card className="bg-clr-accent text-clr-dark rounded-xl p-6 border-none shadow-none cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-center gap-3">
                    <PhoneIcon className="h-6 w-6" />
                    <div className="text-center">
                      <div className="font-unbounded font-bold text-lg">735-491-129</div>
                      <div className="text-sm text-clr-dark/80">Zadzwoń teraz</div>
                    </div>
                  </div>
                </Card>
              </a>
              
              <Link href="/#contact-section">
                <Card className="bg-gray-50 rounded-xl p-6 border border-clr-accent shadow-none cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-center gap-3">
                    <ArrowRightIcon className="h-6 w-6 text-clr-dark" />
                    <div className="text-center">
                      <div className="font-unbounded font-bold text-lg text-clr-dark">Formularz</div>
                      <div className="text-sm text-clr-dark/80">Napisz do mnie</div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>

            {/* Services Section */}
            <section className="mb-12">
              <h2 className="font-unbounded font-bold text-2xl text-clr-dark mb-6">
                Usługi naprawy protez dla mieszkańców Złotowa
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-unbounded font-bold text-lg text-clr-dark mb-2">
                    Pęknięta proteza (obsługa Złotów)
                  </h3>
                  <p className="text-clr-dark/80 leading-relaxed">
                    Pękniętą protezę naprawiam szybko i precyzyjnie. Stosuję nowoczesne techniki, by zapewnić trwałość. 
                    Twoja proteza odzyska dawną funkcjonalność w ciągu jednej wizyty.
                  </p>
                </div>

                <div>
                  <h3 className="font-unbounded font-bold text-lg text-clr-dark mb-2">
                    Luźna proteza (obsługa Złotów)
                  </h3>
                  <p className="text-clr-dark/80 leading-relaxed">
                    Luźną protezę precyzyjnie dopasowuję, by poprawić komfort noszenia. Eliminuję dyskomfort i ryzyko otarć dziąseł. 
                    Znów poczujesz się swobodnie podczas mówienia i jedzenia.
                  </p>
                </div>

                <div>
                  <h3 className="font-unbounded font-bold text-lg text-clr-dark mb-2">
                    Zużyta proteza (obsługa Złotów)
                  </h3>
                  <p className="text-clr-dark/80 leading-relaxed">
                    Zużytą protezę profesjonalnie odnawiam – poleruję, wymieniam elementy i poprawiam estetykę. 
                    Odzyskasz sprawność i estetyczny wygląd bez konieczności wymiany.
                  </p>
                </div>

                <div>
                  <h3 className="font-unbounded font-bold text-lg text-clr-dark mb-2">
                    Przebarwienia protezy (obsługa Złotów)
                  </h3>
                  <p className="text-clr-dark/80 leading-relaxed">
                    Usuwam przebarwienia protezy za pomocą profesjonalnego piaskowania i dezynfekcji. 
                    Twoja proteza znów będzie czysta i estetyczna.
                  </p>
                </div>

                <div>
                  <h3 className="font-unbounded font-bold text-lg text-clr-dark mb-2">
                    Wypadł ząb z protezy (obsługa Złotów)
                  </h3>
                  <p className="text-clr-dark/80 leading-relaxed">
                    Ząb wypadł z protezy? Błyskawicznie uzupełniam brakujące elementy, zapewniając estetykę i funkcjonalność. 
                    Przywracam wygodę użytkowania już tego samego dnia.
                  </p>
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section className="mb-12">
              <h2 className="font-unbounded font-bold text-2xl text-clr-dark mb-6">
                Jak to działa?
              </h2>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-clr-dark text-white text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong>Zgłoszenie:</strong> Zadzwoń lub napisz.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-clr-dark text-white text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <strong>Wysyłka/Odbiór:</strong> Wyślij protezę kurierem lub umów odbiór osobisty.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-clr-dark text-white text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <strong>Naprawa w 24 h:</strong> Szybka, fachowa naprawa.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-clr-dark text-white text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                    <div>
                      <strong>Doręczenie:</strong> Proteza wraca kurierem lub odbierasz ją osobiście.
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-12">
              <h2 className="font-unbounded font-bold text-2xl text-clr-dark mb-6">
                Cennik naprawy protez
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-unbounded font-bold text-clr-dark">Usługa</th>
                      <th className="text-left py-3 px-4 font-unbounded font-bold text-clr-dark">Czas</th>
                      <th className="text-left py-3 px-4 font-unbounded font-bold text-clr-dark">Cena</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-clr-dark">Naprawa pękniętej protezy</td>
                      <td className="py-3 px-4 text-clr-dark/70">1–2 godz.</td>
                      <td className="py-3 px-4 text-clr-dark font-medium">od 120 zł</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-clr-dark">Dopasowanie luźnej protezy</td>
                      <td className="py-3 px-4 text-clr-dark/70">1–2 godz.</td>
                      <td className="py-3 px-4 text-clr-dark font-medium">od 120 zł</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-clr-dark">Renowacja zużytej protezy</td>
                      <td className="py-3 px-4 text-clr-dark/70">2–3 godz.</td>
                      <td className="py-3 px-4 text-clr-dark font-medium">od 120 zł</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-clr-dark">Czyszczenie przebarwień</td>
                      <td className="py-3 px-4 text-clr-dark/70">1 godz.</td>
                      <td className="py-3 px-4 text-clr-dark font-medium">od 120 zł</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-clr-dark">Uzupełnienie wypadłego zęba</td>
                      <td className="py-3 px-4 text-clr-dark/70">1–2 godz.</td>
                      <td className="py-3 px-4 text-clr-dark font-medium">od 120 zł</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="font-unbounded font-bold text-2xl text-clr-dark mb-6">
                Najczęściej zadawane pytania
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-unbounded font-bold text-lg text-clr-dark mb-2">
                    Ile trwa naprawa protezy?
                  </h3>
                  <p className="text-clr-dark/80 leading-relaxed">
                    Naprawa protezy trwa zwykle od 1 do 2 godzin. Ekspresowa usługa możliwa nawet tego samego dnia.
                  </p>
                </div>

                <div>
                  <h3 className="font-unbounded font-bold text-lg text-clr-dark mb-2">
                    Czy NFZ refunduje naprawę protez?
                  </h3>
                  <p className="text-clr-dark/80 leading-relaxed">
                    Tak, naprawa protez może być dofinansowana przez NFZ. Warunki refundacji zależą od typu protezy.
                  </p>
                </div>

                <div>
                  <h3 className="font-unbounded font-bold text-lg text-clr-dark mb-2">
                    Czy każdą protezę można naprawić?
                  </h3>
                  <p className="text-clr-dark/80 leading-relaxed">
                    Większość protez można skutecznie naprawić. W wyjątkowych sytuacjach może być konieczna wymiana.
                  </p>
                </div>

                <div>
                  <h3 className="font-unbounded font-bold text-lg text-clr-dark mb-2">
                    Ile kosztuje naprawa protezy w Złotowie?
                  </h3>
                  <p className="text-clr-dark/80 leading-relaxed">
                    Koszt naprawy protezy zaczyna się od 120 zł, w zależności od rodzaju usługi i zakresu prac.
                  </p>
                </div>

                <div>
                  <h3 className="font-unbounded font-bold text-lg text-clr-dark mb-2">
                    Czy mogę wysłać protezę kurierem?
                  </h3>
                  <p className="text-clr-dark/80 leading-relaxed">
                    Tak, istnieje możliwość wysłania protezy kurierem. Proszę wcześniej o kontakt telefoniczny.
                  </p>
                </div>

                <div>
                  <h3 className="font-unbounded font-bold text-lg text-clr-dark mb-2">
                    Czy muszę przyjechać do Zakrzewa?
                  </h3>
                  <p className="text-clr-dark/80 leading-relaxed">
                    Nie, możliwa jest wysyłka protezy kurierem lub umówiony odbiór po wcześniejszym kontakcie.
                  </p>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center">
              <div className="bg-clr-accent rounded-xl p-8 mb-8">
                <h2 className="font-unbounded font-bold text-2xl text-clr-dark mb-4">
                  Zadzwoń teraz: 735-491-129
                </h2>
                <p className="text-lg text-clr-dark/80 mb-6">
                  Szybka pomoc dla mieszkańców Złotowa
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

              {/* Internal Link */}
              <div className="text-center">
                <Link href="/" className="inline-flex items-center text-clr-accent hover:text-clr-dark transition-colors font-medium">
                  Zobacz również: Strona główna - Pracownia Protetyki Stomatologicznej
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </section>

          </article>
        </div>
      </div>
    </>
  );
}