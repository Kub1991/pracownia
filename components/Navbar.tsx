'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ArrowRightIcon, Bars3Icon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const navLinks = [
  { name: 'Start', href: '/' },
  { name: 'Problemy', href: '#problem-section' },
  { name: 'Proces', href: '#process-section' },
  { name: 'Obszar', href: '#areas-served' },
  { name: 'Opinie', href: '#testimonials-section' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Kontakt', href: '#contact-section' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavHref = (href: string) => {
    if (href === '/') {
      return '/';
    }

    return pathname === '/' ? href : `/${href}`;
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

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
            <Link href="/" aria-label="Przejdź do strony głównej" className="block">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36">
                <Image
                  src="/Logo_Pracownia_Protetyki_K.Szymanska.v2.png"
                  alt="Logo Pracownia Protetyki Stomatologicznej Karolina Szymanska"
                  fill
                  className="object-contain"
                  sizes="144px"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={getNavHref(link.href)}
                className="font-inter font-medium text-clr-dark hover:text-clr-accent transition-colors duration-200 hover:underline underline-offset-4"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => {
                const contactSection = document.getElementById('contact-section');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-clr-accent text-clr-dark hover:bg-clr-dark hover:text-clr-white border border-clr-accent hover:border-clr-dark transition-all duration-200 rounded-full px-6 py-2 font-unbounded font-medium cursor-pointer text-sm hover:shadow-md"
              aria-label="Umów wizytę - przejdź do formularza kontaktowego"
            >
              Umów Wizytę
              <ArrowRightIcon className="ml-1 sm:ml-2 h-3 sm:h-4 w-3 sm:w-4" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Bars3Icon className="h-5 sm:h-6 w-5 sm:w-6 text-clr-dark" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80">
              <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Link href="/" aria-label="Przejdź do strony głównej" className="block" onClick={handleMenuClose}>
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36">
                      <Image
                        src="/Logo_Pracownia_Protetyki_K.Szymanska.v2.png"
                        alt="Logo Pracownia Protetyki Stomatologicznej Karolina Szymanska"
                        fill
                        className="object-contain"
                        sizes="144px"
                      />
                    </div>
                  </Link>
                </div>
                
                <nav className="flex flex-col gap-3 sm:gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={getNavHref(link.href)}
                      onClick={handleMenuClose}
                      className="font-inter font-medium text-clr-dark hover:text-clr-accent transition-colors duration-200 py-2 border-b border-gray-100 last:border-b-0 text-sm sm:text-base"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                
                <Button 
                  onClick={() => {
                    handleMenuClose();
                    const contactSection = document.getElementById('contact-section');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-clr-accent text-clr-dark hover:bg-clr-dark hover:text-clr-white border border-clr-accent hover:border-clr-dark transition-all duration-200 rounded-full px-6 py-3 font-unbounded font-medium mt-4 w-full cursor-pointer text-sm hover:shadow-md"
                  aria-label="Umów wizytę - przejdź do formularza kontaktowego"
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
