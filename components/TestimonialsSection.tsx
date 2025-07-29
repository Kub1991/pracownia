'use client';

import { Card } from '@/components/ui/card';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    text: "Nie wierzyłem, że tak szybko się da! Proteza naprawiona, a wszystko wyjaśnione i bez stresu.",
    author: "Pan Wojciech",
    location: "Tarnowo Podgórne"
  },
  {
    text: "Bardzo miła pani, od razu poczułam, że jestem w dobrych rękach. Polecam!",
    author: "Pani Krystyna",
    location: "Złotów"
  },
  {
    text: "Przystępna cena i naprawa tego samego dnia! Nie spodziewałem się tak profesjonalnej obsługi.",
    author: "Pan Marek",
    location: "Zakrzewo"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials-section" className="py-2 bg-clr-gray">
      <div className="w-full px-6 lg:px-8">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 shadow-sm" style={{ backgroundColor: '#F9EAEC' }}>
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-4xl text-clr-dark mb-4 sm:mb-6">
                Co Mówią Pacjenci?
              </h2>
              <p className="text-base sm:text-lg text-clr-dark/80 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                Dołącz do grona zadowolonych pacjentów!
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-3 mb-8 sm:mb-10 lg:mb-12">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="bg-white border border-gray-200 custom-shadow p-4 sm:p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                  style={{ borderRadius: '16px' }}
                >
                  <div className="space-y-3 sm:space-y-4">
                    {/* Stars */}
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-3 sm:h-4 w-3 sm:w-4 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xs sm:text-sm text-clr-dark/90 leading-relaxed text-center font-medium">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author */}
                    <div className="text-center space-y-0.5 sm:space-y-1">
                      <p className="font-unbounded font-bold text-xs sm:text-sm text-clr-dark">
                        {testimonial.author}
                      </p>
                      <p className="text-clr-dark/70 text-xs">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}