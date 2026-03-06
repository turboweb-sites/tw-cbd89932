import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../LanguageContext';

const LOGO_URL = 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/4a3a8266-ff3c-49e0-92ff-ce05f4990589/media__1__1772751803275_rea8z1.webp';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/services', label: t('nav.services') },
    { href: '/ceramic-coating', label: t('nav.ceramic') },
    { href: '/gallery', label: t('nav.gallery') },
    { href: '/reviews', label: t('nav.reviews') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isOpen
            ? 'bg-dark-950/95 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
        style={{ top: 36 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-xl overflow-hidden bg-dark-800 shrink-0 flex items-center justify-center">
                  <img
                    src={LOGO_URL}
                    alt="R.A.D. US Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xl font-black tracking-wider leading-none">
                    R.A.D.{' '}<span className="text-primary-500">US</span>
                  </span>
                  <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-dark-300 mt-0.5">
                    Real Auto Detailing
                  </span>
                </div>
              </a>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      location === link.href
                        ? 'text-primary-400 bg-primary-500/10'
                        : 'text-dark-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <Link href="/contact">
                <a className="bg-gradient-to-r from-primary-500 to-primary-700 text-dark-900 px-6 py-2.5 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center gap-1">
                  {t('nav.bookNow')} <ChevronRight size={16} />
                </a>
              </Link>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <LanguageSwitcher />
              <button
                className="p-2 text-white relative z-50"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ top: 0 }}
        >
          <div
            className="absolute inset-0 bg-dark-950/98 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="relative w-full overflow-y-auto"
            style={{ paddingTop: 'calc(36px + 72px)' }}
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      location === link.href
                        ? 'text-primary-400 bg-primary-500/10'
                        : 'text-dark-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+19169173541"
                  className="flex items-center gap-2 text-dark-200 px-4 py-2"
                >
                  <Phone size={16} />
                  (916) 917-3541
                </a>
                <Link href="/contact">
                  <a className="block text-center bg-gradient-to-r from-primary-500 to-primary-700 text-dark-900 px-6 py-3 rounded-lg font-semibold">
                    {t('nav.bookNow')}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}