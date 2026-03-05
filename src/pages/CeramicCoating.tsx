import {
  Droplets,
  Shield,
  Sun,
  Zap,
  Clock,
  Check,
  ChevronRight,
  Sparkles,
  Truck,
} from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../LanguageContext';

const benefits = [
  { icon: Shield, title: 'Ultimate Paint Protection', text: 'Forms an invisible shield against scratches, chemical stains, bird droppings, tree sap, and road contaminants.' },
  { icon: Droplets, title: 'Hydrophobic Surface', text: 'Water beads and rolls off effortlessly, taking dirt and grime with it. Makes washing your car a breeze.' },
  { icon: Sun, title: 'UV Ray Protection', text: 'Blocks harmful UV rays that cause paint oxidation and fading. Keeps your color vibrant for years.' },
  { icon: Sparkles, title: 'Unmatched Gloss', text: 'Adds a deep, liquid-like gloss that surpasses any wax or sealant. Your car will look perpetually fresh.' },
  { icon: Clock, title: 'Long-Lasting Protection', text: 'Professional ceramic coatings last 2-10 years depending on the package. No more monthly waxing.' },
  { icon: Zap, title: 'Easy Maintenance', text: 'Dramatically reduces the time and effort needed to keep your vehicle clean.' },
];

const coatingPackages = [
  {
    name: 'Essential Ceramic',
    price: '$599',
    duration: '2-Year Protection',
    description: 'Entry-level ceramic coating for everyday vehicles seeking enhanced protection and gloss.',
    features: ['Single-stage polishing', 'Full paint decontamination', 'One layer ceramic coating', '2-year warranty', 'Hydrophobic finish', 'UV protection', 'Maintenance kit included', 'Applied at your location'],
    popular: false,
  },
  {
    name: 'Premium Ceramic',
    price: '$1,299',
    duration: '5-Year Protection',
    description: 'Our most popular package. Complete polishing with premium 5-year ceramic coating.',
    features: ['Two-stage polishing', 'Full paint decontamination', 'Two layers premium ceramic', '5-year warranty', 'Superior hydrophobic effect', 'Enhanced scratch resistance', 'Glass coating included', 'Wheel coating included', 'Annual inspection & boost', 'Mobile application at your location'],
    popular: true,
  },
  {
    name: 'Ultimate Ceramic',
    price: '$2,499',
    duration: '10-Year Protection',
    description: 'The pinnacle of paint protection. Multi-stage polishing with our most durable ceramic coating.',
    features: ['Multi-stage polishing', 'Full paint decontamination', 'Three layers top-tier ceramic', '10-year manufacturer warranty', 'Maximum hydrophobic performance', 'Highest scratch resistance (9H+)', 'Full glass coating', 'Full wheel coating', 'Trim & plastic coating', 'Annual inspection & maintenance', 'Priority booking for life'],
    popular: false,
  },
];

const processSteps = [
  { step: '01', title: 'Inspection & Assessment', description: 'We thoroughly inspect your vehicle under specialized lighting to assess paint condition and identify defects.' },
  { step: '02', title: 'Decontamination', description: 'Complete wash, iron fallout removal, clay bar treatment, and chemical decontamination to prepare a clean surface.' },
  { step: '03', title: 'Polishing', description: 'Machine polishing to remove swirls, scratches, and imperfections. Critical for proper coating adhesion.' },
  { step: '04', title: 'IPA Wipe Down', description: 'Isopropyl alcohol wipe to remove all polishing oils, ensuring the coating bonds directly to the clear coat.' },
  { step: '05', title: 'Ceramic Coating Application', description: 'Meticulous panel-by-panel application of the ceramic coating with proper flash and leveling times.' },
  { step: '06', title: 'Curing & Quality Check', description: 'The vehicle cures under controlled conditions. We perform a final inspection under LED lighting before handover.' },
];

const faqs = [
  { question: 'Can you apply ceramic coating at my location?', answer: 'Yes! Our mobile service is fully equipped for on-site ceramic coating application. We bring professional-grade lighting, tools, and climate-controlled tenting when needed.' },
  { question: 'How long does ceramic coating last?', answer: 'Depending on the package, our ceramic coatings last between 2-10 years. The longevity depends on the coating selected, maintenance, and driving conditions.' },
  { question: 'Is ceramic coating worth it?', answer: 'Absolutely. Ceramic coating provides unmatched protection that wax and sealants simply cannot match.' },
  { question: 'Can I wash my car after ceramic coating?', answer: 'We recommend waiting 7 days before the first wash to allow full curing. After that, regular washing is fine.' },
  { question: 'Does ceramic coating prevent scratches?', answer: 'Ceramic coating provides an additional layer of hardness (rated up to 9H+) that increases scratch resistance, but it does not make your paint scratch-proof.' },
  { question: 'Do you also coat boats?', answer: 'Yes! We offer ceramic coating specifically designed for boats and yachts. It protects against UV, salt water, and environmental damage. Contact us for a free estimate.' },
  { question: 'How long does the application process take?', answer: 'The full process typically takes 1-3 days depending on the package.' },
];

export default function CeramicCoating() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=1920&h=800&fit=crop"
            alt="Ceramic coating Orange County"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
              <Truck size={14} className="text-primary-500" />
              <span className="text-primary-400 text-sm font-medium">
                {t('ceramicPage.badge')}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
              {t('ceramicPage.title1')}{' '}
              <span className="text-gradient">{t('ceramicPage.title2')}</span>{' '}
              {t('ceramicPage.title3')}
            </h1>
            <p className="text-dark-200 text-lg mb-8 leading-relaxed">
              {t('ceramicPage.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/contact" variant="primary" size="lg">
                {t('ceramicPage.getFreeQuote')}
              </CTAButton>
              <CTAButton href="#packages" variant="secondary" size="lg">
                {t('ceramicPage.viewPackages')}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Why Ceramic Coating?"
            title="Benefits of Professional Ceramic Coating"
            description="Discover why ceramic coating is the ultimate investment for protecting and enhancing your vehicle or boat."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="glass-card p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-700/10 flex items-center justify-center mb-5">
                  <b.icon size={28} className="text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{b.title}</h3>
                <p className="text-dark-300 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Our Process"
            title="How We Apply Ceramic Coating"
            description="A meticulous 6-step process — performed at your location."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((item) => (
              <div key={item.step} className="glass-card p-8 relative">
                <span className="text-6xl font-black text-primary-500/10 absolute top-4 right-6">
                  {item.step}
                </span>
                <div className="relative">
                  <span className="text-primary-500 text-sm font-bold">Step {item.step}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">{item.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Coating Packages"
            title="Ceramic Coating Packages & Pricing"
            description="Choose the level of protection that's right for your vehicle or boat."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coatingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-primary-500/10 to-dark-900 border-2 border-primary-500/50 scale-[1.02]'
                    : 'glass-card hover:border-white/20'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-700 text-dark-900 px-6 py-1.5 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{pkg.name}</h3>
                  <span className="text-primary-400 text-sm font-semibold">{pkg.duration}</span>
                  <p className="text-dark-300 text-sm mt-2">{pkg.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-black text-primary-500">{pkg.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-dark-200">
                      <Check size={16} className="text-primary-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <CTAButton
                  href="/contact"
                  variant={pkg.popular ? 'primary' : 'outline'}
                  className="w-full justify-center"
                >
                  Get This Package
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="glass-card group">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-semibold list-none">
                  {faq.question}
                  <ChevronRight
                    size={20}
                    className="text-primary-500 transition-transform group-open:rotate-90 shrink-0 ml-4"
                  />
                </summary>
                <div className="px-6 pb-6 text-dark-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Protect Your <span className="text-gradient">Investment?</span>
          </h2>
          <p className="text-dark-200 text-lg mb-8">
            Schedule your mobile ceramic coating consultation today. Free estimate!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Book Your Consultation
            </CTAButton>
            <a
              href="https://wa.me/19169173541"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-9 py-4 text-base rounded-xl border-2 border-white/20 text-white hover:bg-white/5 font-semibold transition-all"
            >
              WhatsApp (916) 917-3541
            </a>
          </div>
        </div>
      </section>
    </>
  );
}