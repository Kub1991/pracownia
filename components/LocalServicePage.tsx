import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import type { LocalServiceContent } from '@/lib/local-service-pages';

const SITE = 'https://protetyka-zakrzewo.pl';
const DESTINATION = '53.41201728970456,17.151588043383537';
const headingClass = 'font-unbounded font-bold text-xl sm:text-2xl text-clr-dark mb-4';
const panelClass = 'bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm';

export default function LocalServicePage({ content, pageKey }: {
  content: LocalServiceContent;
  pageKey: string;
}) {
  const isRepair = content.service === 'naprawa-protez';
  const serviceName = isRepair ? 'Naprawa protez' : 'Protezy zębowe';
  const url = `${SITE}/${pageKey}/`;
  const directions = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(`${content.city}, Polska`)}&destination=${encodeURIComponent(DESTINATION)}&travelmode=driving`;
  const citySlug = pageKey.split('/')[1];
  const related = [
    { slug: 'naprawa-protez', label: 'Naprawa protez' },
    { slug: 'protezy-zebowe', label: 'Protezy zębowe' },
    { slug: 'dopasowanie-protez', label: 'Dopasowanie protez' },
    { slug: 'konsultacje-protetyczne', label: 'Konsultacje protetyczne' },
  ]
    .filter((service) => service.slug !== content.service)
    .map((service) => ({
      href: `/${service.slug}/${citySlug}/`,
      label: `${service.label} — ${content.city} (wizyta w Zakrzewie)`,
    }));
  const relatedLinkClass = 'inline-block px-3 py-2 rounded-full bg-gray-100 hover:bg-clr-accent/30 text-clr-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clr-dark';

  return (
    <article className="bg-clr-gray pt-24 pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'Service', '@id': `${url}#service`, name: content.heading,
            serviceType: serviceName, url, description: content.description,
            provider: { '@id': SITE }, areaServed: { '@type': 'City', name: content.city } },
          { '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Strona główna', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: `${serviceName} — Zakrzewo`, item: `${SITE}/${content.service}/` },
            { '@type': 'ListItem', position: 3, name: content.heading, item: url },
          ] },
        ],
      }).replace(/</g, '\\u003c') }} />
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 space-y-6">
        <nav aria-label="Ścieżka nawigacji" className="text-sm text-clr-dark/75 flex flex-wrap gap-x-2 gap-y-1">
          <Link href="/" className="underline underline-offset-4">Start</Link><span aria-hidden="true">/</span>
          <Link href={`/${content.service}/`} className="underline underline-offset-4">{serviceName}</Link>
          <span aria-hidden="true">/</span><span aria-current="page">{content.city}</span>
        </nav>
        <header className={panelClass}>
          <p className="text-sm font-medium text-clr-dark/70 mb-3">Karolina Szymańska · Pracownia w Zakrzewie</p>
          <h1 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-5 leading-tight">{content.heading}</h1>
          <p className="text-base sm:text-lg text-clr-dark/80 max-w-3xl leading-relaxed">{content.intro}</p>
          <p className="mt-5 text-clr-dark font-medium">ul. E. J. Osmańczyka 18, 77-424 Zakrzewo</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a href="tel:+48735491129" className="rounded-xl bg-clr-accent px-5 py-4 text-center font-semibold text-clr-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Zadzwoń: 735 491 129</a>
            <a href={directions} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-clr-dark/20 px-5 py-4 text-center font-medium text-clr-dark hover:bg-clr-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Sprawdź dojazd z {content.from}<span className="sr-only"> — Google Maps, nowa karta</span></a>
          </div>
          <a href="#plan-wizyty" className="inline-block mt-5 text-sm underline underline-offset-4 text-clr-dark">Jak przygotować wizytę i odbiór?</a>
        </header>

        <section aria-labelledby="dojazd" className={`${panelClass} border-l-4 border-clr-accent`}>
          <h2 id="dojazd" className={headingClass}>Dojazd z {content.from} do pracowni w Zakrzewie</h2>
          <p className="text-clr-dark/80 leading-relaxed max-w-3xl">{content.travel}</p>
          {content.city === 'Złotów' && <p className="text-sm text-clr-dark/70 mt-3">Orientacyjna odległość między miejscowościami: <a className="underline underline-offset-4" href="https://conadrogach.pl/wyznaczanie-trasy/zlotow-zakrzewo/" target="_blank" rel="noopener noreferrer">CoNaDrogach.pl<span className="sr-only">, nowa karta</span></a>. Trasę do samego budynku sprawdź w nawigacji.</p>}
          <div className="mt-6 max-w-md">
            <table className="w-full text-sm sm:text-base text-clr-dark border-collapse">
              <caption className="text-left font-semibold pb-3">Godziny otwarcia</caption>
              <tbody className="divide-y divide-gray-200 border-y border-gray-200">
                {[
                  ['Poniedziałek', '12:00–19:00'],
                  ['Wtorek–czwartek', '9:00–15:00'],
                  ['Piątek', '9:00–14:00'],
                  ['Sobota–niedziela', 'Zamknięte'],
                ].map(([days, hours]) => (
                  <tr key={days}>
                    <th scope="row" className="py-3 pr-3 text-left font-medium">{days}</th>
                    <td className="py-3 text-right whitespace-nowrap tabular-nums">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-sm text-clr-dark/80">Termin wizyty potwierdź telefonicznie.</p>
          </div>
        </section>

        {content.sections.map((section) => (
          <section key={section.title} className={panelClass}>
            <h2 className={headingClass}>{section.title}</h2>
            <p className="text-clr-dark/80 leading-relaxed max-w-3xl">{section.text}</p>
            {section.bullets && <ul className="list-disc pl-5 mt-5 space-y-3 text-clr-dark/80 leading-relaxed max-w-3xl">{section.bullets.map((text) => <li key={text}>{text}</li>)}</ul>}
          </section>
        ))}

        <section id="plan-wizyty" className={`${panelClass} scroll-mt-24`}>
          <h2 className={headingClass}>{isRepair ? 'Od pierwszego telefonu do odbioru protezy' : 'Jak przygotować wykonanie nowej protezy'}</h2>
          <ol className="list-decimal pl-5 space-y-4 text-clr-dark/80 leading-relaxed max-w-3xl">{content.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>

        <section id="faq" className={`${panelClass} scroll-mt-24`}>
          <h2 className={headingClass}>Pytania przed przyjazdem z {content.from}</h2>
          <div className="divide-y divide-gray-200">{content.faqs.map((faq) => (
            <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
              <h3 className="font-semibold text-lg text-clr-dark mb-2">{faq.question}</h3>
              <p className="text-clr-dark/80 leading-relaxed max-w-3xl">{faq.answer}</p>
            </div>
          ))}</div>
        </section>

        <section id={isRepair ? undefined : 'contact-section'} className={`${panelClass} scroll-mt-24`}>
          <h2 className={headingClass}>Powiązane usługi</h2>
          <p className="text-clr-dark/80 mb-4">Uszkodzenie, brak stabilności i wykonanie nowej protezy wymagają innego zakresu pracy. Zobacz także:</p>
          <ul className="flex flex-wrap gap-2 text-sm">
            {related.map((link) => (
              <li key={link.href}><Link href={link.href} className={relatedLinkClass}>{link.label}</Link></li>
            ))}
            <li><Link href={`/${content.service}/`} className={relatedLinkClass}>{serviceName} — pełny opis usługi w Zakrzewie</Link></li>
          </ul>
          <p className="mt-6 text-clr-dark/80">Chcesz ustalić termin? <a href="tel:+48735491129" className="text-clr-dark font-semibold underline underline-offset-4">Zadzwoń pod 735 491 129</a>.</p>
        </section>
      </div>
      {isRepair && <div className="mt-6"><ContactSection layoutVariant="subpage" showMap={false} /></div>}
    </article>
  );
}
