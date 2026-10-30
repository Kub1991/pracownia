'use client';

import { Card } from '@/components/ui/card';
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="flex items-start pt-20 pb-2 bg-clr-gray">
      <div className="w-full px-6 lg:px-8">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 shadow-sm bg-white">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1">
                <h1 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark leading-tight">
                  Pracownia protetyczna w Zakrzewie — protezy i naprawa protez.
                </h1>
                
                <h2 className="font-inter font-medium text-base sm:text-lg lg:text-xl text-clr-dark/70 -mt-2">
                  Pracownia Protetyki Stomatologicznej - Karolina Szymańska
                </h2>
                
                <p className="text-base sm:text-lg text-clr-dark/80 max-w-lg leading-relaxed">
                  Naprawa, wykonanie i dopasowanie protez oraz konsultacje protetyczne w pracowni Karoliny Szymańskiej. Zadzwoń, aby ustalić zakres pomocy i termin wizyty w Zakrzewie.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  {/* Phone Number Card */}
                  <a href="tel:+48735491129" className="block">
                    <Card className="bg-clr-accent text-clr-dark rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg border-none shadow-none">
                      <div className="flex flex-col items-center text-center h-full min-h-[96px] sm:min-h-[140px] lg:min-h-[160px]">
                        <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white text-clr-dark mb-3 sm:mb-4 mt-2 sm:mt-6">
                          <PhoneIcon className="h-5 sm:h-6 w-5 sm:w-6" />
                        </div>
                        {/* Mobile shows text, desktop shows phone number */}
                        <h3 className="font-unbounded font-bold text-sm sm:text-base mb-1 sm:mb-2 lg:hidden">
                          Kliknij i Zadzwoń
                        </h3>
                        <span className="font-unbounded font-bold text-sm sm:text-base lg:text-lg hidden lg:block">
                          735 491 129
                        </span>
                      </div>
                    </Card>
                  </a>

                  {/* Ask About Repair Card */}
                  <a href="#contact-section"
                    className="bg-gray-50 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg border border-clr-accent shadow-none"
                  >
                    <div className="flex flex-col items-center text-center h-full min-h-[96px] sm:min-h-[140px] lg:min-h-[160px]">
                      <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-clr-dark text-white mb-3 sm:mb-4 mt-2 sm:mt-6">
                      <ArrowRightIcon className="h-5 sm:h-6 w-5 sm:w-6" />
                      </div>
                      <span className="font-unbounded font-bold text-sm sm:text-base lg:text-lg text-clr-dark">
                        Zapytaj o usługę
                      </span>
                    </div>
                  </a>
                </div>

                {/* Testimonial */}
                <div className="p-4 sm:p-5 lg:p-6 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/profile_testimonial.webp"
                        alt="Pacjent po naprawie protezy"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 40px, 48px"
                        loading="eager"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex gap-1 mb-1 sm:mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-clr-dark/80 mb-1 sm:mb-2 leading-relaxed">
                        &ldquo;Bardzo miła pani, od razu poczułam, że jestem w dobrych rękach. Polecam!&rdquo;
                      </p>
                      <p className="text-xs text-clr-dark/60 font-medium">
                        Pani Krystyna, Złotów
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="relative order-2">
                <div className="relative aspect-[4/3] sm:aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/hero_PHOTO.webp"
                    alt="Pracownia protetyki stomatologicznej w Zakrzewie"
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
  );
}
