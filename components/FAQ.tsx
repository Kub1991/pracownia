'use client';

import { Card } from '@/components/ui/card';

const faqData = [
  {
    question: "Ile trwa naprawa protezy?",
    answer: "Zwykle do 24 godzin. W pilnych przypadkach możliwy szybszy termin po uzgodnieniu telefonicznie."
  },
  {
    question: "Czy wykonujecie naprawy ekspresowe?",
    answer: "Tak, w nagłych przypadkach możliwe są naprawy ekspresowe tego samego dnia. Najszybciej ustalisz szczegóły, dzwoniąc pod numer 735 491 129."
  },
  {
    question: "Jaki jest koszt naprawy?",
    answer: "Zależy od rodzaju uszkodzenia. Po krótkiej konsultacji podaję widełki ceny oraz termin."
  },
  {
    question: "Czy naprawiacie na miejscu, czy muszę zostawić protezę?",
    answer: "W większości przypadków proteza zostaje w pracowni na czas naprawy. To skraca termin i podnosi jakość wykonania."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-16 bg-clr-gray">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 shadow-sm">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4 sm:mb-6">
              Najczęstsze pytania (FAQ)
            </h2>
            <p className="text-base sm:text-lg text-clr-dark/80 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Odpowiedzi na najważniejsze pytania dotyczące naprawy protez
            </p>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {faqData.map((item, index) => (
              <Card 
                key={index}
                className="rounded-xl border border-gray-200 p-5 sm:p-6 shadow-sm bg-white"
              >
                <h3 className="font-unbounded font-bold text-base sm:text-lg text-clr-dark mb-3 sm:mb-4">
                  {item.question}
                </h3>
                <p className="text-clr-dark/80 text-sm sm:text-base leading-relaxed">
                  {item.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}