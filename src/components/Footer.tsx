import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, ArrowUpRight, MessageCircle } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/services', label: t('nav.services') },
    { href: '/ceramic-coating', label: t('nav.ceramic') },
    { href: '/gallery', label: t('nav.gallery') },
    { href: '/reviews', label: t('nav.reviews') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const servicesList = [
    t('footer.scratchRepair'),
    t('footer.scuffRepair'),
    t('footer.polishing'),
    t('footer.ceramicCoating'),
    t('footer.mobileDetailing'),
    t('footer.headlight'),
    t('footer.boatDetailing'),
  ];

  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-dark-900 font-black text-lg">R</span>
              </div>
              <div>
                <span className="text-xl font-black tracking-wider">
                  R.A.D.{' '}<span className="text-primary-500">US</span>
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-dark-300 -mt-0.5">
                  Real Auto Detailing
                </span>
              </div>
            </div>
            <p className="text-dark-300 text-sm leading-relaxed mb-6">
              {t('footer.desc')}
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/19169173541" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-green-500/20 flex items-center justify-center transition-colors">
                <MessageCircle size={18} className="text-dark-200" />
              </a>
              <a href="https://www.instagram.com/r.a.d._us" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary-500/20 flex items-center justify-center transition-colors">
                <Instagram size={18} className="text-dark-200" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587611498426" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary-500/20 flex items-center justify-center transition-colors">
                <Facebook size={18} className="text-dark-200" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-dark-300 hover:text-primary-400 transition-colors text-sm flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t('footer.servicesTitle')}</h4>
            <ul className="space-y-3">
              {servicesList.map((service) => (
                <li key={service}>
                  <span className="text-dark-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t('footer.contactInfo')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 mt-0.5 shrink-0" />
                <span className="text-dark-300 text-sm whitespace-pre-line">
                  {t('footer.serviceAreaFooter')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500 shrink-0" />
                <a href="tel:+19169173541" className="text-dark-300 hover:text-primary-400 transition-colors text-sm">
                  (916) 917-3541
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-green-500 shrink-0" />
                <a href="https://wa.me/19169173541" target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-green-400 transition-colors text-sm">
                  WhatsApp: (916) 917-3541
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <a href="mailto:p.radion@gmail.com" className="text-dark-300 hover:text-primary-400 transition-colors text-sm">
                  p.radion@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-pink-500 shrink-0" />
                <a href="https://www.instagram.com/r.a.d._us" target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-pink-400 transition-colors text-sm">
                  @r.a.d._us
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Facebook size={18} className="text-blue-500 shrink-0" />
                <a href="https://www.facebook.com/profile.php?id=61587611498426" target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-blue-400 transition-colors text-sm">
                  R.A.D. US
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-primary-500 mt-0.5 shrink-0" />
                <span className="text-dark-300 text-sm">
                  Mon–Sat: 7 AM – 7 PM<br />
                  Sun: By appointment
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t('qr.title')}</h4>
            <div className="bg-white p-3 rounded-xl inline-block">
              <QRCodeSVG
                value="https://radus.com"
                size={120}
                bgColor="#ffffff"
                fgColor="#000000"
                level="M"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-400 text-sm">
            © {new Date().getFullYear()} R.A.D. US — Real Auto Detailing. {t('footer.copyright')}
          </p>
          <p className="text-dark-400 text-sm">
            {t('footer.areas')}
          </p>
        </div>
      </div>
    </footer>
  );
}