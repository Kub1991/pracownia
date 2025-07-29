'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon,
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const problemOptions = [
  {
    id: 'broken',
    icon: <ExclamationTriangleIcon className="h-5 w-5" />,
    label: 'Pęknięta proteza'
  },
  {
    id: 'tooth-fell',
    icon: <WrenchScrewdriverIcon className="h-5 w-5" />,
    label: 'Wypadł ząb z protezy'
  },
  {
    id: 'loose',
    icon: <AdjustmentsHorizontalIcon className="h-5 w-5" />,
    label: 'Proteza jest luźna'
  },
  {
    id: 'discoloration',
    icon: <SparklesIcon className="h-5 w-5" />,
    label: 'Przebarwienia/zużycie'
  }
];

export default function ContactSection() {
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    phone: '',
    repairDate: '',
    consent: false
  });

  const handleProblemToggle = (problemId: string) => {
    setSelectedProblems(prev => 
      prev.includes(problemId) 
        ? prev.filter(id => id !== problemId)
        : [...prev, problemId]
    );
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { 
      ...formData, 
      problems: selectedProblems
    });
  };

  // Get minimum date (tomorrow) in YYYY-MM-DD format
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <section id="contact-section" className="py-2 bg-clr-gray">
      <div className="w-full px-6 lg:px-8">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="bg-white rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 shadow-sm">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4 sm:mb-6">
                Potrzebujesz Pomocy? Jestem Blisko!
              </h2>
              <p className="text-base sm:text-lg text-clr-dark/80 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                Skontaktuj się ze mną już dziś - pomogę rozwiązać problem z Twoją protezą
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {/* Left Column - Contact Info */}
              <div className="space-y-6 sm:space-y-8">
                {/* Phone Number - Main CTA */}
                <a href="tel:+48735491129" className="block">
                  <Card className="bg-clr-accent text-clr-dark rounded-2xl lg:rounded-3xl p-6 sm:p-8 border-none shadow-none cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-white text-clr-dark mb-4 sm:mb-6">
                      <PhoneIcon className="h-6 sm:h-8 w-6 sm:w-8" />
                    </div>
                    <h3 className="font-unbounded font-bold text-lg sm:text-xl mb-3 sm:mb-4">
                      Zadzwoń Teraz!
                    </h3>
                    <div className="font-unbounded font-bold text-2xl sm:text-3xl mb-3 sm:mb-4">
                      735-491-129
                    </div>
                    <p className="text-clr-dark/80 text-xs sm:text-sm">
                      Najszybszy sposób na uzyskanie pomocy
                    </p>
                    </div>
                  </Card>
                </a>

                {/* Address */}
                <Card className="bg-gray-50 rounded-2xl lg:rounded-3xl p-4 sm:p-6 border border-gray-200 shadow-none">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-clr-dark text-white flex-shrink-0">
                      <MapPinIcon className="h-5 sm:h-6 w-5 sm:w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-unbounded font-bold text-base sm:text-lg text-clr-dark mb-2">
                        Adres Pracowni
                      </h3>
                      <a 
                        href="https://maps.google.com/?q=ul.+E.+J,+Osmańczyka+18,+77-424+Zakrzewo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-clr-dark/80 hover:text-clr-accent transition-colors cursor-pointer text-sm sm:text-base"
                      >
                        ul. E. J, Osmańczyka 18<br />
                        77-424 Zakrzewo<br />
                        woj. wielkopolskie
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Opening Hours */}
                <Card className="bg-gray-50 rounded-2xl lg:rounded-3xl p-4 sm:p-6 border border-gray-200 shadow-none">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-clr-dark text-white flex-shrink-0">
                      <ClockIcon className="h-5 sm:h-6 w-5 sm:w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-unbounded font-bold text-base sm:text-lg text-clr-dark mb-2 sm:mb-3">
                        Godziny Otwarcia
                      </h3>
                      <div className="space-y-1 text-sm text-clr-dark/80">
                        <p><span className="font-medium text-clr-dark">Poniedziałek:</span> 12:00 - 19:00</p>
                        <p><span className="font-medium text-clr-dark">Wt - Czw:</span> 9:00 - 15:00</p>
                        <p><span className="font-medium text-clr-dark">Piątek:</span> 9:00 - 14:00</p>
                        <p><span className="font-medium text-clr-dark">Sobota - Niedziela:</span> Zamknięte</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <Card className="bg-gray-50 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-none">
                  <h3 className="font-unbounded font-bold text-lg sm:text-xl text-clr-dark mb-4 sm:mb-6 text-center">
                    Formularz Kontaktowy
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone" className="text-clr-dark font-medium mb-2 block text-sm sm:text-base">
                        Numer telefonu
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full text-sm sm:text-base"
                        placeholder="Podaj numer, żebym mogła oddzwonić"
                        required
                      />
                    </div>

                    {/* Problem Selection */}
                    <div>
                      <Label className="text-clr-dark font-medium mb-2 sm:mb-3 block text-sm sm:text-base">
                        Jaki jest problem z protezą?
                      </Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {problemOptions.map((problem) => (
                          <Card
                            key={problem.id}
                            className={`p-2 sm:p-3 cursor-pointer transition-all duration-200 border-2 ${
                              selectedProblems.includes(problem.id)
                                ? 'bg-clr-accent border-clr-accent text-clr-dark'
                                : 'bg-white border-gray-200 hover:border-clr-accent/50'
                            }`}
                            style={{ borderRadius: '10px' }}
                            onClick={() => handleProblemToggle(problem.id)}
                          >
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className={`flex-shrink-0 ${
                                selectedProblems.includes(problem.id) ? 'text-clr-dark' : 'text-clr-dark/70'
                              }`}>
                                <div className="scale-75 sm:scale-100">
                                  {problem.icon}
                                </div>
                              </div>
                              <span className="text-xs sm:text-sm font-medium">
                                {problem.label}
                              </span>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Date Picker */}
                    <div>
                      <Label className="text-clr-dark font-medium mb-2 block text-sm sm:text-base">
                        Na kiedy naprawa?
                      </Label>
                      <Input
                        type="date"
                        value={formData.repairDate}
                        onChange={(e) => handleInputChange('repairDate', e.target.value)}
                        min={getMinDate()}
                        className="w-full text-sm sm:text-base"
                        required
                      />
                      <p className="text-xs text-clr-dark/60 mt-1">
                        Wybierz dogodny termin naprawy (najwcześniej jutro)
                      </p>
                    </div>

                    {/* Consent */}
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                        required
                        className="mt-0.5"
                      />
                      <Label htmlFor="consent" className="text-xs sm:text-sm text-clr-dark/80 leading-relaxed cursor-pointer">
                        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na zapytanie zgodnie z polityką prywatności.
                      </Label>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-clr-dark text-white hover:bg-clr-accent hover:text-clr-dark transition-all duration-200 rounded-full py-3 font-unbounded font-bold text-sm sm:text-base hover:shadow-md"
                      disabled={!formData.consent}
                      aria-label="Wyślij formularz kontaktowy"
                    >
                      <PaperAirplaneIcon className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                      Wyślij Zapytanie
                    </Button>
                    
                    <div className="text-center">
                      <div className="bg-clr-accent/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                        <p className="text-clr-dark font-unbounded font-bold text-base sm:text-lg mb-1">
                          ⏰ Oddzwonię w ciągu 2 godzin!
                        </p>
                        <p className="text-clr-dark/80 text-xs sm:text-sm">
                          Szybka odpowiedź gwarantowana
                        </p>
                      </div>
                    </div>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}