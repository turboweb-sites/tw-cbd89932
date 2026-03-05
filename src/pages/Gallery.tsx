import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CTAButton from '../components/CTAButton';
import { useLanguage } from '../LanguageContext';

const galleryItems = [
  {
    before: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/bc6d1cc5-5f11-4ad7-97f0-e973cdaad7f8/IMG_0894_1772555143768_e4uk8j.webp',
    after: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/7e4bc8fb-fc57-4da3-8280-df910f9f002a/IMG_0895_1772555146915_4fz9pa.webp',
    category: 'Scratch Repair',
  },
  {
    before: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/1423a6b4-1de8-46fa-8492-b4ba69bcb93c/IMG_0896_1772555150450_b4f458.webp',
    after: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/d0a0c6ff-40ca-4f31-9c7d-4e1c5cf05a61/IMG_0897_1772555153646_8vtjdl.webp',
    category: 'Scuff Repair',
  },
  {
    before: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/1b3a20bd-20d7-43ea-9a5e-a9b4e634cb63/IMG_0898_1772555156839_mtzo3a.webp',
    after: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/dcf7fa2c-0d1a-4454-8132-8bf7b5264c98/IMG_0899_1772555160303_1qe6bd.webp',
    category: 'Boat Detailing',
  },
  {
    before: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/f3131fec-172c-4482-8b27-33af56a76c68/IMG_0900_1772555163504_3xfvhn.webp',
    after: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/3d91b972-466d-47b0-965b-1525ffd0d2b7/IMG_0901_1772555167082_vsk6mm.webp',
    category: 'Boat Detailing',
  },
  {
    before: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/d535ea1e-b273-4f29-84d1-de60932ddda8/IMG_0902_1772555170259_jrsyk1.webp',
    after: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/56528d20-2910-482f-8e8f-77d3cb28d64c/IMG_0903_1772555174113_wz60th.webp',
    category: 'Scratch Repair',
  },
  {
    before: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/abe64bf7-531f-4b07-b283-581cfa3557ff/IMG_0904_1772555188774_qqh0fx.webp',
    after: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/d458f618-217b-4ec1-bd70-41c7125feefb/IMG_0905_1772555190849_d2izl8.webp',
    category: 'Polishing',
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const categories = [
    { key: 'All', label: t('gallery.all') },
    { key: 'Scratch Repair', label: t('gallery.scratchRepair') },
    { key: 'Scuff Repair', label: t('gallery.scuffRepair') },
    { key: 'Polishing', label: t('gallery.polishing') },
    { key: 'Boat Detailing', label: t('gallery.boatDetailing') },
  ];

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=1920&h=600&fit=crop"
            alt="Auto detailing gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient">{t('gallery.title')}</span>
          </h1>
          <p className="text-dark-200 text-lg max-w-2xl mx-auto">{t('gallery.desc')}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? 'bg-primary-500 text-dark-900'
                    : 'bg-white/5 text-dark-200 hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((item, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden group cursor-pointer"
                onClick={() => setLightbox(index)}
              >
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={item.before}
                      alt="Before"
                      className="w-full h-48 sm:h-64 object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-dark-900/80 text-white text-xs px-3 py-1 rounded-full">
                      {t('gallery.before')}
                    </span>
                  </div>
                  <div className="relative">
                    <img
                      src={item.after}
                      alt="After"
                      className="w-full h-48 sm:h-64 object-cover"
                    />
                    <span className="absolute bottom-2 right-2 bg-primary-500/90 text-dark-900 text-xs px-3 py-1 rounded-full font-semibold">
                      {t('gallery.after')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-dark-950/95 flex items-center justify-center p-4">
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white hover:text-primary-400 transition-colors"
          >
            <X size={32} />
          </button>
          <button
            onClick={() => setLightbox(Math.max(0, lightbox - 1))}
            className="absolute left-4 text-white hover:text-primary-400 transition-colors"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={() => setLightbox(Math.min(filtered.length - 1, lightbox + 1))}
            className="absolute right-4 text-white hover:text-primary-400 transition-colors"
          >
            <ChevronRight size={40} />
          </button>
          <div className="max-w-5xl w-full">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img
                  src={filtered[lightbox].before}
                  alt="Before"
                  className="w-full rounded-xl"
                />
                <p className="text-center text-dark-300 text-sm mt-2">{t('gallery.before')}</p>
              </div>
              <div>
                <img
                  src={filtered[lightbox].after}
                  alt="After"
                  className="w-full rounded-xl"
                />
                <p className="text-center text-primary-400 text-sm mt-2">{t('gallery.after')}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-24 bg-dark-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t('gallery.ctaTitle1')}{' '}
            <span className="text-gradient">{t('gallery.ctaTitle2')}</span>
          </h2>
          <p className="text-dark-200 text-lg mb-8">{t('gallery.ctaDesc')}</p>
          <CTAButton href="/contact" variant="primary" size="lg">
            {t('home.bookMobile')}
          </CTAButton>
        </div>
      </section>
    </>
  );
}