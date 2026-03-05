import { Shield, Award, Eye, Truck, Zap } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CTAButton from '../components/CTAButton';
import { useLanguage } from '../LanguageContext';

const certifications = [
  'IDA (International Detailing Association) Certified',
  'Gyeon Quartz Certified Installer',
  'Gtechniq Accredited Detailer',
  'STEK PPF Certified Installer',
  'Fully Licensed',
  'EPA Compliant Operations',
];

export default function About() {
  const { t } = useLanguage();

  const values = [
    { icon: Truck, title: t('aboutPage.convenience'), text: t('aboutPage.convenienceDesc') },
    { icon: Zap, title: t('aboutPage.speed'), text: t('aboutPage.speedDesc') },
    { icon: Shield, title: t('aboutPage.integrity'), text: t('aboutPage.integrityDesc') },
    { icon: Eye, title: t('aboutPage.attention'), text: t('aboutPage.attentionDesc') },
  ];

  return (
    <>
      {/* Hero — реальное фото полировки машины крупным планом */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&h=800&fit=crop"
            alt="Professional auto detailing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-primary-500 text-sm font-semibold tracking-widest uppercase mb-4">{t('aboutPage.label')}</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
              {t('aboutPage.title1')}{' '}<span className="text-gradient">{t('aboutPage.title2')}</span>
            </h1>
            <p className="text-dark-200 text-lg leading-relaxed">{t('aboutPage.desc')}</p>
          </div>
        </div>
      </section>

      {/* Story — используем реальное фото из галереи */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase mb-4 block">{t('aboutPage.storyLabel')}</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t('aboutPage.storyTitle')}</h2>
              <div className="space-y-4 text-dark-300 leading-relaxed">
                <p>{t('aboutPage.storyP1')}</p>
                <p>{t('aboutPage.storyP2')}</p>
                <p>{t('aboutPage.storyP3')}</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/6632dda3-f092-48bf-a7d8-de1ff60e1cf0/Screenshot_2026_03_05_150904_1772752152935_d4ii2c.webp"
                alt="R.A.D. US mobile detailing at work"
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label={t('aboutPage.valuesLabel')} title={t('aboutPage.valuesTitle')} description={t('aboutPage.valuesDesc')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="glass-card p-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-700/10 flex items-center justify-center mb-5">
                  <value.icon size={32} className="text-primary-500" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{value.title}</h3>
                <p className="text-dark-300 text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications — реальные фото результатов из галереи */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle label={t('aboutPage.certLabel')} title={t('aboutPage.certTitle')} description={t('aboutPage.certDesc')} align="left" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-3 glass-card p-4">
                    <Award size={20} className="text-primary-500 shrink-0" />
                    <span className="text-dark-200 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/d458f618-217b-4ec1-bd70-41c7125feefb/IMG_0905_1772555190849_d2izl8.webp"
                alt="Mirror finish polishing result"
                className="rounded-2xl object-cover w-full h-48"
              />
              <img
                src="https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/d535ea1e-b273-4f29-84d1-de60932ddda8/IMG_0902_1772555170259_jrsyk1.webp"
                alt="Panel scratch repair"
                className="rounded-2xl object-cover w-full h-48 mt-8"
              />
              <img
                src="https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/56528d20-2910-482f-8e8f-77d3cb28d64c/IMG_0903_1772555174113_wz60th.webp"
                alt="Deep key scratch removal"
                className="rounded-2xl object-cover w-full h-48"
              />
              <img
                src="https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/1423a6b4-1de8-46fa-8492-b4ba69bcb93c/IMG_0896_1772555150450_b4f458.webp"
                alt="Bumper scuff repair"
                className="rounded-2xl object-cover w-full h-48 mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-center">
            {[
              { value: '100%', label: t('aboutPage.mobileServiceStat') },
              { value: '4.9/5', label: 'Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-black text-primary-500 mb-2">{stat.value}</div>
                <div className="text-dark-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t('aboutPage.doorstepTitle1')}{' '}<span className="text-gradient">{t('aboutPage.doorstepTitle2')}</span>
          </h2>
          <p className="text-dark-200 text-lg mb-8">{t('aboutPage.doorstepDesc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">{t('aboutPage.bookMobile')}</CTAButton>
            <CTAButton href="/services" variant="secondary" size="lg">{t('aboutPage.viewServices')}</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}