import { Link } from 'wouter';
import {
  Shield,
  Award,
  Clock,
  Sparkles,
  Star,
  ChevronRight,
  Droplets,
  Paintbrush,
  Car,
  Lightbulb,
  MapPin,
  CheckCircle,
  ArrowRight,
  Zap,
  Truck,
  Wrench,
  Anchor,
  Gift,
} from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../LanguageContext';

const heroPhotos = [
  'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1471479917193-f00955256257?w=800&h=600&fit=crop',
];

export default function Home() {
  const { t } = useLanguage();

  const services = [
    { icon: Zap, title: t('services.scratch'), description: t('services.scratchDesc'), href: '/services' },
    { icon: Wrench, title: t('services.scuff'), description: t('services.scuffDesc'), href: '/services' },
    { icon: Sparkles, title: t('services.polishing'), description: t('services.polishingDesc'), href: '/services' },
    { icon: Droplets, title: t('services.ceramic'), description: t('services.ceramicDesc'), href: '/ceramic-coating' },
    { icon: Truck, title: t('services.mobile'), description: t('services.mobileDesc'), href: '/services' },
    { icon: Lightbulb, title: t('services.headlight'), description: t('services.headlightDesc'), href: '/services' },
  ];

  const stats = [
    { value: '2,500+', label: t('stats.cars') },
    { value: '< 2hrs', label: t('stats.time') },
    { value: '4.9★', label: t('stats.rating') },
    { value: '100%', label: t('stats.mobile') },
  ];

  const howItWorks = [
    { step: '01', title: t('how.step1'), description: t('how.step1Desc') },
    { step: '02', title: t('how.step2'), description: t('how.step2Desc') },
    { step: '03', title: t('how.step3'), description: t('how.step3Desc') },
    { step: '04', title: t('how.step4'), description: t('how.step4Desc') },
  ];

  const reviews = [
    { name: 'Michael T.', text: 'They came to my office parking lot and removed three deep scratches from my door panel. Took about an hour and you can\'t even tell they were there. Incredible mobile service!', rating: 5 },
    { name: 'Sarah K.', text: 'Best mobile detailing in Orange County. They polished my entire car in my driveway and the paint looks absolutely flawless now. So convenient!', rating: 5 },
    { name: 'David R.', text: 'Had paint damage from a shopping cart ding. They fixed it on-site at my house in under 2 hours. The repair is invisible. Highly recommended!', rating: 5 },
  ];

  const boatServices = [
    { icon: Zap, title: t('boats.scratch'), description: t('boats.scratchDesc') },
    { icon: Sparkles, title: t('boats.polishing'), description: t('boats.polishingDesc') },
    { icon: Droplets, title: t('boats.ceramic'), description: t('boats.ceramicDesc') },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&h=1080&fit=crop" alt="Car detailing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-8">
              <Truck size={14} className="text-primary-500" />
              <span className="text-primary-400 text-sm font-medium">{t('home.badge')}</span>
            </div>

            <div className="mb-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider leading-none">
                R.A.D.{' '}<span className="text-gradient">US</span>
              </h1>
              <p className="text-primary-400 text-sm sm:text-base font-semibold tracking-[0.25em] uppercase mt-2">
                Real Auto Detailing
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 mt-6">
              {t('home.title1')}<br />
              {t('home.title2')}{' '}<span className="text-gradient">{t('home.title3')}</span>
            </h2>

            <p className="text-lg sm:text-xl text-dark-200 mb-10 max-w-xl leading-relaxed">{t('home.subtitle')}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <CTAButton href="/contact" variant="primary" size="lg">{t('home.bookMobile')}</CTAButton>
              <a href="tel:+19169173541" className="inline-flex items-center gap-2 px-9 py-4 text-base rounded-xl bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10 font-semibold transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Call (916) 917-3541
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-dark-300">
              <div className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-500" />{t('home.mobileService')}</div>
              <div className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-500" />{t('home.sameDay')}</div>
              <div className="flex items-center gap-2"><Gift size={16} className="text-primary-500" />{t('home.freeEstimate')}</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
      </section>

      {/* SHOWCASE GALLERY */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {heroPhotos.map((src, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl group ${i === 0 ? 'md:row-span-2 md:col-span-1' : ''}`}>
                <img src={src} alt={`Auto detailing showcase ${i + 1}`} className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${i === 0 ? 'h-48 md:h-full' : 'h-48 md:h-64'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="glass-card p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-1">{stat.value}</div>
              <div className="text-dark-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label={t('services.label')} title={t('services.title')} description={t('services.desc')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <a className="glass-card p-8 group hover:border-primary-500/30 transition-all duration-500 hover:premium-shadow">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-700/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={28} className="text-primary-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{service.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="text-primary-500 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">Learn more <ArrowRight size={14} /></span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOAT DETAILING SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&h=900&fit=crop" alt="Boat detailing service" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-950/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
              <Anchor size={14} className="text-primary-500" />
              <span className="text-primary-400 text-sm font-medium">{t('boats.label')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{t('boats.title')}</h2>
            <p className="text-dark-200 text-lg max-w-2xl mx-auto">{t('boats.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {boatServices.map((service) => (
              <div key={service.title} className="glass-card p-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-700/10 flex items-center justify-center mb-5">
                  <service.icon size={32} className="text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-dark-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="relative overflow-hidden rounded-2xl group">
              <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop" alt="Boat polishing" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
              <div className="absolute bottom-3 left-3"><span className="bg-primary-500/90 text-dark-900 text-xs font-bold px-3 py-1 rounded-full">Polishing</span></div>
            </div>
            <div className="relative overflow-hidden rounded-2xl group">
              <img src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=600&h=400&fit=crop" alt="Boat ceramic coating" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
              <div className="absolute bottom-3 left-3"><span className="bg-primary-500/90 text-dark-900 text-xs font-bold px-3 py-1 rounded-full">Ceramic</span></div>
            </div>
            <div className="relative overflow-hidden rounded-2xl group">
              <img src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=600&h=400&fit=crop" alt="Boat scratch repair" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
              <div className="absolute bottom-3 left-3"><span className="bg-primary-500/90 text-dark-900 text-xs font-bold px-3 py-1 rounded-full">Repair</span></div>
            </div>
          </div>

          <div className="text-center">
            <CTAButton href="/contact" variant="primary" size="lg">{t('boats.bookBoat')}</CTAButton>
          </div>
        </div>
      </section>

      {/* WIDE PHOTO BREAK */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&h=900&fit=crop" alt="Freshly detailed car" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-dark-950/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-wider mb-3">R.A.D.{' '}<span className="text-gradient">US</span></h2>
            <p className="text-primary-400 text-sm sm:text-base font-semibold tracking-[0.25em] uppercase">Real Auto Detailing</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label={t('how.label')} title={t('how.title')} description={t('how.desc')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="glass-card p-8 relative text-center">
                <span className="text-6xl font-black text-primary-500/10 absolute top-4 right-6">{item.step}</span>
                <div className="relative">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-700/10 flex items-center justify-center mb-5">
                    <span className="text-primary-500 font-black text-xl">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE SERVICE CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=800&fit=crop" alt="Mobile detailing service" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-950/85 backdrop-blur-sm" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary-500 text-sm font-semibold tracking-widest uppercase mb-4">{t('mobileCta.label')}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{t('mobileCta.title')}</h2>
            <p className="text-dark-200 text-lg mb-8 leading-relaxed">{t('mobileCta.desc')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="primary" size="lg">{t('mobileCta.schedule')}</CTAButton>
              <CTAButton href="/services" variant="outline" size="lg">{t('mobileCta.seeAll')}</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GRID 2 */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-2xl group h-72 md:h-96">
              <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=900&h=600&fit=crop" alt="Detailed sedan close up" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 to-transparent" />
              <div className="absolute bottom-6 left-6"><span className="bg-primary-500/90 text-dark-900 text-xs font-bold px-3 py-1.5 rounded-full">Polishing</span></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl group">
                <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop" alt="Car ceramic coating" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
                <div className="absolute bottom-3 left-3"><span className="bg-primary-500/90 text-dark-900 text-xs font-bold px-3 py-1 rounded-full">Ceramic</span></div>
              </div>
              <div className="relative overflow-hidden rounded-2xl group">
                <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&h=400&fit=crop" alt="Paint correction close-up" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
                <div className="absolute bottom-3 left-3"><span className="bg-primary-500/90 text-dark-900 text-xs font-bold px-3 py-1 rounded-full">Scratch Fix</span></div>
              </div>
              <div className="relative overflow-hidden rounded-2xl group">
                <img src="https://images.unsplash.com/photo-1471479917193-f00955256257?w=600&h=400&fit=crop" alt="Mirror-like finish after detailing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
                <div className="absolute bottom-3 left-3"><span className="bg-primary-500/90 text-dark-900 text-xs font-bold px-3 py-1 rounded-full">Detail</span></div>
              </div>
              <div className="relative overflow-hidden rounded-2xl group">
                <img src="https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600&h=400&fit=crop" alt="SUV after full detailing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
                <div className="absolute bottom-3 left-3"><span className="bg-primary-500/90 text-dark-900 text-xs font-bold px-3 py-1 rounded-full">Mobile</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label={t('reviews.label')} title={t('reviews.title')} description={t('reviews.desc')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="glass-card p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-primary-500 fill-primary-500" />
                  ))}
                </div>
                <p className="text-dark-200 text-sm leading-relaxed mb-6">"{review.text}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  <p className="text-dark-400 text-xs">Orange County, CA</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton href="/reviews" variant="outline">{t('reviews.readAll')}</CTAButton>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="py-24 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label={t('guarantees.label')} title={t('guarantees.title')} description={t('guarantees.desc')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: t('guarantees.mobile'), text: t('guarantees.mobileDesc') },
              { icon: Zap, title: t('guarantees.fast'), text: t('guarantees.fastDesc') },
              { icon: Shield, title: t('guarantees.satisfaction'), text: t('guarantees.satisfactionDesc') },
              { icon: Gift, title: t('guarantees.freeEstimate'), text: t('guarantees.freeEstimateDesc') },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 glass-card">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-700/10 flex items-center justify-center mb-5">
                  <item.icon size={32} className="text-primary-500" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-dark-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {t('finalCta.title1')}{' '}<span className="text-gradient">{t('finalCta.title2')}</span>
          </h2>
          <p className="text-dark-200 text-lg mb-10 max-w-2xl mx-auto">{t('finalCta.desc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">{t('nav.bookNow')}</CTAButton>
            <a href="tel:+19169173541" className="inline-flex items-center gap-2 px-9 py-4 text-base rounded-xl bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10 font-semibold transition-all duration-300">Call (916) 917-3541</a>
          </div>
        </div>
      </section>
    </>
  );
}