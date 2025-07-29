'use client';

import { Card } from '@/components/ui/card';
import { 
  PhoneIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  HandThumbUpIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const processSteps = [
  {
    icon: <PhoneIcon className="h-6 w-6" />,
    title: "Telefon i Krótka Rozmowa",
    description: "Zadzwoń do mnie i opowiedz o problemie – doradzę."
  },
  {
    icon: <ClipboardDocumentCheckIcon className="h-6 w-6" />,
    title: "Szybka Wizyta i Ocena",
    description: "Zapraszam na krótką wizytę – ocenię uszkodzenie."
  },
  {
    icon: <WrenchScrewdriverIcon className="h-6 w-6" />,
    title: "Naprawa już w 24h",
    description: "Zajmę się protezą od razu lub umówimy dogodny termin."
  },
  {
    icon: <HandThumbUpIcon className="h-6 w-6" />,
    title: "Odbiór i Uśmiech!",
    description: "Odbierz naprawioną protezę i ciesz się komfortem."
  }
];

export default function ProcessSection() {
  return (
    <section id="process-section" className="py-2 bg-clr-light">
      <div className="w-full px-6 lg:px-8">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 shadow-sm">
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
              {/* Left Column - Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/SECTION_PHOTO copy.jpg"
                    alt="Pracownia protetyki stomatologicznej"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                {/* Section Header */}
                <div className="text-center lg:text-left">
                  <h2 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4 sm:mb-6">
                    Jak wygląda proces naprawy?
                  </h2>
                  <p className="text-base sm:text-lg text-clr-dark/80 leading-relaxed">
                    Proste kroki do odzyskania komfortu i uśmiechu.
                  </p>
                </div>

                {/* Process Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {processSteps.map((step, index) => (
                    <Card 
                      key={index}
                      className="bg-gray-50 border border-gray-200 custom-shadow p-4 sm:p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                      style={{ borderRadius: '16px' }}
                    >
                      <div className="space-y-3 sm:space-y-4">
                        {/* Icon */}
                        <div className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-clr-dark text-white">
                          <div className="scale-75 sm:scale-100">
                            {step.icon}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-unbounded font-bold text-sm sm:text-base text-clr-dark leading-tight">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-clr-dark/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}