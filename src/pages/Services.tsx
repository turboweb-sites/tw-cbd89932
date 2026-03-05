import {
  Sparkles,
  Lightbulb,
  Droplets,
  Check,
  Zap,
  Truck,
  Wrench,
  Anchor,
} from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const serviceDetails = [
    {
      icon: Zap,
      title: t('services.scratch'),
      priceRange: '$99 – $500',
      description: t('services.scratchDesc'),
      includes: ['Free damage assessment', 'Surface & deep scratch removal', 'Clear coat restoration', 'Color-matched touch-up when needed', 'Protective sealant application', 'Completed on-site at your location'],
    },
    {
      icon: Wrench,
      title: t('services.scuff'),
      priceRange: '$79 – $400',
      description: t('services.scuffDesc'),
      includes: ['Free damage assessment', 'Bumper scuff repair', 'Door scrape removal', 'Paint transfer removal', 'Protective sealant', 'Completed on-site'],
    },
    {
      icon: Sparkles,
      title: t('services.polishing'),
      priceRange: '$200 – $600',
      description: t('services.polishingDesc'),
      includes: ['Full exterior wash & decontamination', 'Clay bar treatment', 'Single or multi-stage machine polishing', 'Swirl mark & haze removal', 'Water spot elimination', 'Paint sealant for lasting shine'],
    },
    {
      icon: Droplets,
      title: t('services.ceramic'),
      priceRange: '$599 – $2,500',
      description: t('services.ceramicDesc'),
      includes: ['Full paint decontamination', 'Paint correction included', 'Ceramic coat application', '2-10 year coating options', 'Hydrophobic properties', 'UV & chemical resistance'],
    },
    {
      icon: Lightbulb,
      title: t('services.headlight'),
      priceRange: '$80 – $200',
      description: t('services.headlightDesc'),
      includes: ['Multi-stage wet sanding', 'Machine polishing', 'UV-protective clear coat', 'Improves nighttime visibility', 'Restores vehicle appearance', 'Done in under 1 hour'],
    },
    {
      icon: Truck,
      title: t('services.mobile'),
      priceRange: '$199 – $799',
      description: t('services.mobileDesc'),
      includes: ['Self-contained water & power supply', 'Full tool & product setup', 'Interior deep clean & sanitize', 'Exterior wash, clay, & polish', 'Leather conditioning', 'Serving all of Orange County'],
    },
    {
      icon: Anchor,
      title: t('boats.label'),
      priceRange: '$299 – $3,000',
      description: t('boats.desc'),
      includes: ['Gel coat scratch repair', 'Full hull polishing', 'Oxidation removal', 'Marine ceramic coating', 'We come to your marina or dock', 'Free estimate'],
    },
  ];

  return (
    <>
      {/* Hero — фото полировки авто / мобильный сервис */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1632823471565-1ecdf5c6da24?w=1920&h=600&fit=crop"
            alt="Professional car polishing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
            <Truck size={14} className="text-primary-500" />
            <span className="text-primary-400 text-sm font-medium">{t('servicesPage.badge')}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"><span className="text-gradient">{t('servicesPage.title')}</span></h1>
          <p className="text-dark-200 text-lg max-w-2xl mx-auto">{t('servicesPage.desc')}</p>
        </div>
      </section>

      {/* All Services */}
      <section className="py-24 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label={t('servicesPage.detailLabel')} title={t('servicesPage.detailTitle')} description={t('servicesPage.detailDesc')} />
          <div className="space-y-8">
            {serviceDetails.map((service) => (
              <div key={service.title} className="glass-card p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-700/10 flex items-center justify-center">
                        <service.icon size={24} className="text-primary-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                        <span className="text-primary-400 text-sm font-semibold">{service.priceRange}</span>
                      </div>
                    </div>
                    <p className="text-dark-300 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="md:w-1/3">
                    <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">{t('servicesPage.whatsIncluded')}</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-dark-200 text-sm">
                          <Check size={14} className="text-primary-500 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t('servicesPage.notSure')}</h2>
          <p className="text-dark-200 text-lg mb-8">{t('servicesPage.notSureDesc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">{t('servicesPage.getFreeQuote')}</CTAButton>
            <a href="https://wa.me/19169173541" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-9 py-4 text-base rounded-xl border-2 border-white/20 text-white hover:bg-white/5 font-semibold transition-all">WhatsApp (916) 917-3541</a>
          </div>
        </div>
      </section>
    </>
  );
}