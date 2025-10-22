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
    label: 'Przebarwienia'
  },
  {
    id: 'wear',
    icon: <SparklesIcon className="h-5 w-5" />,
    label: 'Zużycie'
  },
  {
    id: 'other',
    icon: <ExclamationTriangleIcon className="h-5 w-5" />,
    label: 'Inne'
  }
];

export default function ContactSection() {
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    phone: '',
    repairDate: '',
    consent: false
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setSubmitStatus('submitting');
    
    try {
      // Prepare data for Make webhook
      const webhookData = {
        phone: formData.phone,
        repairDate: formData.repairDate,
        problems: selectedProblems,
        problemsText: selectedProblems.map(id => 
          problemOptions.find(option => option.id === id)?.label
        ).join(', '),
        consent: formData.consent,
        submittedAt: new Date().toISOString(),
        source: 'Website Contact Form'
      };

      const response = await fetch('https://hook.eu2.make.com/eon9x3dqgv1bj83fo6hft8qtca2f4y5t', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          phone: '',
          repairDate: '',
          consent: false
        });
        setSelectedProblems([]);
      } else {
        const errorText = await response.text();
        console.error('Webhook error details:', {
          status: response.status,
          statusText: response.statusText,
          body: errorText
        });
        throw new Error(`Failed to submit form: ${response.status} ${response.statusText}${errorText ? ` - ${errorText}` : ''}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };

  // Get minimum date (tomorrow) in YYYY-MM-DD format
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  // Reset status after 5 seconds
  useState(() => {
    if (submitStatus === 'success' || submitStatus === 'error') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  });
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
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
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
                      735 491 129
                    </div>
                    <p className="text-clr-dark/80 text-xs sm:text-sm">
                      Najszybszy sposób na uzyskanie pomocy
                    </p>
                    </div>
                  </Card>
                </a>

                {/* Google Map */}
                <Card className="bg-gray-50 rounded-2xl lg:rounded-3xl p-0 border border-gray-200 shadow-none overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.1582626101435!2d17.1516095!3d53.411995700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703cf2aafc11835%3A0x64a424f50f9471f2!2sPracownia%20Protetyki%20Stomatologicznej%20-%20Karolina%20Szyma%C5%84ska!5e0!3m2!1spl!2spl!4v1753817064223!5m2!1spl!2spl"
                    width="100%"
                    height="300"
                    className="lg:h-[430px]"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokalizacja Pracowni Protetyki Stomatologicznej - Karolina Szymańska"
                  />
                </Card>
              </div>

              {/* Right Column - Contact Form */}
              <div className="order-1 lg:order-2">
                <Card className="bg-gray-50 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-none">
                  <h3 className="font-unbounded font-bold text-lg sm:text-xl text-clr-dark mb-4 sm:mb-6 text-center">
                    Formularz Kontaktowy
                  </h3>
                  
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-100 border border-green-300 rounded-xl">
                      <p className="text-green-800 text-sm sm:text-base font-medium text-center">
                        ✅ Formularz został wysłany pomyślnie! Oddzwonię w ciągu 2 godzin.
                      </p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-100 border border-red-300 rounded-xl">
                      <p className="text-red-800 text-sm sm:text-base font-medium text-center">
                        ❌ Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub zadzwoń: 735 491 129
                      </p>
                    </div>
                  )}
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
                        disabled={submitStatus === 'submitting'}
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
                            } ${submitStatus === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''}`}
                            style={{ borderRadius: '10px' }}
                            onClick={() => submitStatus !== 'submitting' && handleProblemToggle(problem.id)}
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
                        disabled={submitStatus === 'submitting'}
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
                        className="mt-1 h-5 w-5 min-h-[20px] min-w-[20px] flex-shrink-0 aspect-square"
                        disabled={submitStatus === 'submitting'}
                      />
                      <Label htmlFor="consent" className="text-xs sm:text-sm text-clr-dark/80 leading-relaxed cursor-pointer">
                        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na zapytanie zgodnie z polityką prywatności.
                      </Label>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-clr-dark text-white hover:bg-clr-accent hover:text-clr-dark transition-all duration-200 rounded-full py-3 font-unbounded font-bold text-sm sm:text-base hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!formData.consent || submitStatus === 'submitting'}
                      aria-label="Wyślij formularz kontaktowy"
                    >
                      {submitStatus === 'submitting' ? (
                        <>
                          <div className="animate-spin rounded-full h-4 sm:h-5 w-4 sm:w-5 border-b-2 border-white mr-2"></div>
                          Wysyłanie...
                        </>
                      ) : (
                        <>
                          <PaperAirplaneIcon className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                          Wyślij Zapytanie
                        </>
                      )}
                    </Button>
                    
                    {submitStatus !== 'success' && (
                      <div className="text-center">
                      <div className="bg-clr-accent/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                        <p className="text-clr-dark font-unbounded font-bold text-base sm:text-lg mb-1">
                          ⏰ Oddzwonię w ciągu 2 godzin!
                        </p>
                        <p className="text-clr-dark/80 text-xs sm:text-sm">
                          Szybka odpowiedź gwarantowana
                        </p>
                      </div>
                      
                      <div className="mt-4 sm:mt-6">
                        <a 
                          href="#faq" 
                          className="text-clr-dark/70 hover:text-clr-accent transition-colors text-xs sm:text-sm underline underline-offset-2"
                        >
                          Masz pytania? Zobacz FAQ ↓
                        </a>
                      </div>
                      </div>
                    )}
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