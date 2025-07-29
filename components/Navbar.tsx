'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ArrowRightIcon, Bars3Icon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const navLinks = [
  { name: 'Problemy', href: '#problem-section', id: 'problem-section' },
  { name: 'Proces', href: '#process-section', id: 'process-section' },
  { name: 'Opinie', href: '#testimonials-section', id: 'testimonials-section' },
  { name: 'Kontakt', href: '#contact-section', id: 'contact-section' },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ToothIcon = () => (
    <svg 
      width="28" 
      height="28" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-clr-dark sm:w-8 sm:h-8"
    >
      <path 
        d="M16 4C12.5 4 10 6.5 10 10c0 2 0 4-1 6-1 2-2 3-2 5 0 2.5 2 4 4 4s4-1.5 4-4c0-1 0-2 1-2s1 1 1 2c0 2.5 2 4 4 4s4-1.5 4-4c0-2-1-3-2-5-1-2-1-4-1-6 0-3.5-2.5-6-6-6z" 
        fill="currentColor"
      />
    </svg>
  );

  return (
    <header className={clsx(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    )}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <ToothIcon />
            <span className="font-unbounded font-bold text-lg sm:text-xl text-clr-dark tracking-tight">
              Pracownia Protetyki
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="font-inter font-medium text-clr-dark hover:text-clr-accent transition-colors duration-200 hover:underline underline-offset-4"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => {
                const contactSection = document.getElementById('contact-section');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-clr-accent text-clr-dark hover:bg-clr-dark hover:text-clr-white border border-clr-accent hover:border-clr-dark transition-all duration-200 rounded-full px-4 sm:px-6 py-2 font-medium cursor-pointer text-sm sm:text-base"
            >
              Umów Wizytę
              <ArrowRightIcon className="ml-1 sm:ml-2 h-3 sm:h-4 w-3 sm:w-4" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Bars3Icon className="h-5 sm:h-6 w-5 sm:w-6 text-clr-dark" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80">
              <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <ToothIcon />
                  <span className="font-unbounded font-bold text-lg sm:text-xl text-clr-dark tracking-tight">
                    Pracownia Protetyki
                  </span>
                </div>
                
                <nav className="flex flex-col gap-3 sm:gap-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.id)}
                      className="font-inter font-medium text-clr-dark hover:text-clr-accent transition-colors duration-200 py-2 border-b border-gray-100 last:border-b-0 text-sm sm:text-base"
                    >
                      {link.name}
                    </button>
                  ))}
                </nav>
                
                <Button 
                  onClick={() => {
                    scrollToSection('contact-section');
                  }}
                  className="bg-clr-accent text-clr-dark hover:bg-clr-dark hover:text-clr-white border border-clr-accent hover:border-clr-dark transition-all duration-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 font-medium mt-3 sm:mt-4 w-full cursor-pointer text-sm sm:text-base"
                >
                  Umów Wizytę
                  <ArrowRightIcon className="ml-1 sm:ml-2 h-3 sm:h-4 w-3 sm:w-4" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}