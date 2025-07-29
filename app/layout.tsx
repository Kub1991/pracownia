import './globals.css';
import type { Metadata } from 'next';
import { Inter, Unbounded } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter'
});

const unbounded = Unbounded({ 
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-unbounded'
});

export const metadata: Metadata = {
  title: 'Pracownia Protetyki Stomatologicznej – Karolina Szymańska | Naprawa Protez Zakrzewo',
  description: 'Szybka naprawa protez w Zakrzewie i okolicach. Profesjonalna pracownia protetyki stomatologicznej Karoliny Szymańskiej. Naprawa nawet w 24h.',
  keywords: 'naprawa protez, protetyka stomatologiczna, Zakrzewo, technik dentystyczny, naprawa protez 24h, Karolina Szymańska',
  authors: [{ name: 'Karolina Szymańska' }],
  creator: 'Karolina Szymańska',
  publisher: 'Pracownia Protetyki Stomatologicznej',
  robots: 'index, follow',
  openGraph: {
    title: 'Pracownia Protetyki Stomatologicznej – Karolina Szymańska',
    description: 'Szybka naprawa protez w Zakrzewie i okolicach. Naprawa nawet w 24h.',
    url: 'https://protetyka-zakrzewo.pl',
    siteName: 'Pracownia Protetyki Stomatologicznej',
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pracownia Protetyki Stomatologicznej – Karolina Szymańska',
    description: 'Szybka naprawa protez w Zakrzewie i okolicach. Naprawa nawet w 24h.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#FAD7DB',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://protetyka-zakrzewo.pl",
              "name": "Pracownia Protetyki Stomatologicznej - Karolina Szymańska",
              "alternateName": "Protetyka Stomatologiczna Zakrzewo",
              "description": "Profesjonalna pracownia protetyki stomatologicznej oferująca szybką naprawę protez w Zakrzewie i okolicach. Naprawa nawet w 24 godziny.",
              "url": "https://protetyka-zakrzewo.pl",
              "telephone": "+48667289807",
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
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 52.7833,
                  "longitude": 16.9167
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Usługi Protetyki Stomatologicznej",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Naprawa Protez Zębowych",
                      "description": "Szybka i profesjonalna naprawa protez zębowych, często w ciągu 24 godzin"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wykonanie Nowych Protez",
                      "description": "Profesjonalne wykonanie nowych protez zębowych dopasowanych indywidualnie"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Konsultacje Protetyczne",
                      "description": "Profesjonalne konsultacje w zakresie protetyki stomatologicznej"
                    }
                  }
                ]
              },
              "founder": {
                "@type": "Person",
                "name": "Karolina Szymańska",
                "jobTitle": "Technik Dentystyczny"
              },
              "sameAs": [
                "https://www.facebook.com/protetyka.zakrzewo",
                "https://g.page/protetyka-zakrzewo"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${unbounded.variable} font-inter bg-clr-gray`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}