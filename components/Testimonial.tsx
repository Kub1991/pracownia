'use client';

import { Card } from '@/components/ui/card';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Testimonial() {
  return (
    <section id="testimonial" className="py-16 bg-clr-gray">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl px-10 py-16 shadow-sm">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-clr-accent uppercase tracking-[0.08em] mb-4">
              OPINIE PACJENTÓW
            </p>
            <h2 className="font-unbounded font-bold text-heading text-clr-dark mb-6">
              Co mówią o nas nasi pacjenci
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-50 rounded-3xl p-8 lg:p-12 border-none shadow-none">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Profile Image */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden">
                    <Image
                      src="/profile_testimonial.jpg"
                      alt="Pacjent po naprawie protezy"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2 text-center lg:text-left">
                  {/* Stars */}
                  <div className="flex justify-center lg:justify-start gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg lg:text-xl text-clr-dark/90 leading-relaxed mb-6 font-medium">
                    &ldquo;Pękła mi proteza w piątek wieczorem i myślałem, że będę musiał czekać do poniedziałku.
                    Zadzwoniłem do Lume Dental i już w sobotę rano miałem naprawioną protezę!
                    Profesjonalna obsługa, szybko i bez bólu. Polecam każdemu!&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="space-y-1">
                    <p className="font-unbounded font-bold text-lg text-clr-dark">
                      Jan Kowalski
                    </p>
                    <p className="text-clr-dark/70 text-sm">
                      Pacjent z Zakrzewa
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
