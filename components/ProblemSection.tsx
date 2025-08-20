'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon,
  PhoneIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const problems = [
  {
    icon: <ExclamationTriangleIcon className="h-6 w-6" />,
    title: "Pęknięta proteza – u mnie naprawisz ją szybko!",
    description: "Profesjonalna naprawa pęknięć i złamań protez w ekspresowym tempie."
  },
  {
    icon: <WrenchScrewdriverIcon className="h-6 w-6" />,
    title: "Wypadł ząb z protezy? Wstawię go od ręki.",
    description: "Szybkie i trwałe mocowanie zębów w protezie."
  },
  {
    icon: <AdjustmentsHorizontalIcon className="h-6 w-6" />,
    title: "Proteza jest luźna lub niewygodna? Dopasuję ją idealnie.",
    description: "Precyzyjne dopasowanie protezy dla maksymalnego komfortu noszenia."
  },
  {
    icon: <SparklesIcon className="h-6 w-6" />,
    title: "Przebarwienia i zużycie? Przywrócę jej estetykę.",
    description: "Profesjonalnie doradzę najlepszą zmianę."
  }
];

export default function ProblemSection() {
  return (
    <section id="problem-section" className="py-2 bg-clr-gray">
      <div className="w-full px-6 lg:px-8">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 shadow-sm">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4 sm:mb-6">
              Złamana proteza? Wypadł ząb? Na pewno pomogę!
            </h2>
            <p className="text-base sm:text-lg text-clr-dark/80 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Znam każdy problem z protezami. Bez względu na to, co się stało - znajdę rozwiązanie!
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-10 lg:mb-12">
            {problems.map((problem, index) => (
              <Card 
                key={index}
                className="bg-white border border-gray-200 custom-shadow p-4 sm:p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer"
                style={{ borderRadius: '16px' }}
              >
                <div className="space-y-3 sm:space-y-4">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-clr-dark text-white mx-auto">
                    <div className="scale-75 sm:scale-100">
                      {problem.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-unbounded font-bold text-sm sm:text-base text-clr-dark leading-tight text-center">
                    {problem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-clr-dark/70 leading-relaxed text-center">
                    {problem.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Highlighted Message */}
          <div className="bg-gradient-to-r from-white/60 to-clr-accent rounded-2xl lg:rounded-3xl p-6 sm:p-8 mb-6 sm:mb-8 text-center">
            <h3 className="font-unbounded font-bold text-lg sm:text-xl lg:text-2xl text-clr-dark mb-3 sm:mb-4">
              Nie musisz iść do dentysty! Ja się tym zajmę.
            </h3>
            <p className="text-clr-dark/80 text-base sm:text-lg">
              Specjalizuję się w naprawie protez - to moja pasja i codzienność!
            </p>
          </div>

          {/* CTA Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Ask About Repair Card */}
            <Card 
              className="bg-gray-50 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg border border-clr-accent shadow-none"
              onClick={() => {
                const element = document.getElementById('contact-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="flex flex-col items-center justify-center text-center h-full">
                <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-clr-dark text-white mb-3 sm:mb-4">
                  <ArrowRightIcon className="h-5 sm:h-6 w-5 sm:w-6" />
                </div>
                <span className="font-unbounded font-bold text-sm sm:text-base lg:text-lg text-clr-dark">
                  Zapytaj o Naprawę
                </span>
              </div>
            </Card>

            {/* Phone Number Card */}
            <a href="tel:+48735491129" className="block">
              <Card className="bg-clr-accent text-clr-dark rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border-none shadow-none cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex flex-col items-center justify-center text-center h-full">
                <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white text-clr-dark mb-3 sm:mb-4">
                  <PhoneIcon className="h-5 sm:h-6 w-5 sm:w-6" />
                </div>
                <h3 className="font-unbounded font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                  Zadzwoń Teraz!
                </h3>
                <span className="font-unbounded font-bold text-base sm:text-lg lg:text-xl">
                  735 491 129
                </span>
              </div>
              </Card>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}