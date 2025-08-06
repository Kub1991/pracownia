'use client';

import { Card } from '@/components/ui/card';
import { PhoneIcon, MapPinIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const ToothIcon = () => (
    <svg 
      width="28" 
      height="28" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-white sm:w-8 sm:h-8"
    >
      <path 
        d="M16 4C12.5 4 10 6.5 10 10c0 2 0 4-1 6-1 2-2 3-2 5 0 2.5 2 4 4 4s4-1.5 4-4c0-1 0-2 1-2s1 1 1 2c0 2.5 2 4 4 4s4-1.5 4-4c0-2-1-3-2-5-1-2-1-4-1-6 0-3.5-2.5-6-6-6z" 
        fill="currentColor"
      />
    </svg>
  );

  return (
    <footer className="bg-black text-white py-12 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div>
              <h3 className="font-unbounded font-bold text-base sm:text-lg text-white mb-4">
                Pracownia Protetyki Stomatologicznej - Karolina Szymańska
              </h3>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                Profesjonalna pracownia protetyki stomatologicznej w Zakrzewie. 
                Specjalizujemy się w szybkiej naprawie protez zębowych - często w ciągu 24 godzin.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-unbounded font-bold text-base sm:text-lg text-white">
              Kontakt
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-4 sm:h-5 w-4 sm:w-5 text-clr-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">Adres:</p>
                  <p className="text-white/80 text-sm sm:text-base">
                    ul. E. J, Osmańczyka 18<br />
                    77-424 Zakrzewo<br />
                    woj. wielkopolskie
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-4 sm:h-5 w-4 sm:w-5 text-clr-accent flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">Telefon:</p>
                  <a href="tel:+48735491129" className="text-clr-accent hover:text-white transition-colors text-sm sm:text-base">
                    735-491-129
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-4 sm:h-5 w-4 sm:w-5 text-clr-accent flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">Email:</p>
                  <a href="mailto:protetyka.zakrzewo@gmail.com" className="text-clr-accent hover:text-white transition-colors text-sm sm:text-base">
                    protetyka.zakrzewo@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <h3 className="font-unbounded font-bold text-base sm:text-lg text-white">
              Godziny Otwarcia
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-3">
                <ClockIcon className="h-4 sm:h-5 w-4 sm:w-5 text-clr-accent flex-shrink-0" />
                <div className="text-white/80 text-sm sm:text-base">
                  <p><span className="font-medium text-white">Poniedziałek:</span> 12:00 - 19:00</p>
                  <p><span className="font-medium text-white">Wt - Czw:</span> 9:00 - 15:00</p>
                  <p><span className="font-medium text-white">Piątek:</span> 9:00 - 14:00</p>
                  <p><span className="font-medium text-white">Sobota - Niedziela:</span> Zamknięte</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-clr-accent/10 border-clr-accent/20 p-3 sm:p-4">
              <p className="text-clr-accent font-medium text-xs sm:text-sm">
                <strong>Naprawa ekspresowa!</strong><br />
                W nagłych przypadkach naprawa protez możliwa w ciągu 24h
              </p>
            </Card>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Pracownia Protetyki Stomatologicznej - Karolina Szymańska. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="/policies/Polityka prywatności_Karolina.pdf" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-clr-accent transition-colors">
                Polityka Prywatności
              </a>
              <a href="/policies/Polityka cookies_Karolina.pdf" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-clr-accent transition-colors">
                Polityka Cookies
              </a>
              <a href="/naprawa-protez-zlotow" className="text-white/60 hover:text-clr-accent transition-colors">
                Naprawa Protez Złotów
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}