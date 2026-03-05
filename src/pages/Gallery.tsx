import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CTAButton from '../components/CTAButton';
import { useLanguage } from '../LanguageContext';

const galleryItems = [
  {
    image: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/bc6d1cc5-5f11-4ad7-97f0-e973cdaad7f8/IMG_0894_1772555143768_e4uk8j.webp',
    category: 'Scratch Repair',
    title: 'Deep Scratch Removal — Black Sedan Door Panel',
  },
  {
    image: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/7e4bc8fb-fc57-4da3-8280-df910f9f002a/IMG_0895_1772555146915_4fz9pa.webp',
    category: 'Scratch Repair',
    title: 'Clear Coat Scratch Fix — Dark Paint Restoration',
  },
  {
    image: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/1423a6b4-1de8-46fa-8492-b4ba69bcb93c/IMG_0896_1772555150450_b4f458.webp',
    category: 'Scuff Repair',
    title: 'Bumper Scuff Repair — White SUV',
  },
  {
    image: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/d0a0c6ff-40ca-4f31-9c7d-4e1c5cf05a61/IMG_0897_1772555153646_8vtjdl.webp',
    category: 'Scuff Repair',
    title: 'Paint Transfer Removal — Bumper Restoration',
  },
  {
    image: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/1b3a20bd-20d7-43ea-9a5e-a9b4e634cb63/IMG_0898_1772555156839_mtzo3a.webp',
    category: 'Boat Detailing',
    title: 'Boat Hull Scratch Repair — Gel Coat Restoration',
  },
  {
    image: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/dcf7fa2c-0d1a-4454-8132-8bf7b5264c98/IMG_0899_1772555160303_1qe6bd.webp',
    category: 'Boat Detailing',
    title: 'Boat Hull Polishing — Oxidation Removal',
  },
  {
    image: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/f3131fec-172c-4482-8b27-33af56a76c68/IMG_0900_1772555163504_3xfvhn.webp',
    category: 'Boat Detailing',
    title: 'Gel Coat Deep Scratch Fix — Boat Side Panel',
  },
  {
    image: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/3d91b972-466d-47b0-965b-1525ffd0d2b7/IMG_0901_1772555167082_vsk6mm.webp',
    category: 'Boat Detailing',
    title: 'Boat Surface Restoration — Scuff & Scratch Removal',
  },
  {
    image: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/d535ea1e-b273-4f29-84d1-de60932ddda8/IMG_0902_1772555170259_jrsyk1.webp',
    category: 'Scratch Repair',
    title: 'Panel Scratch Repair — Silver Car Fender',
  },
  {
    image: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/56528d20-2910-482f-8e8f-77d3cb28d64c/IMG_0903_1772555174113_wz60th.webp',
    category: 'Scratch Repair',
    title: 'Deep Key Scratch Removal — Side Panel Restoration',
  },
  {
    image: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/abe64bf7-531f-4b07-b283-581cfa3557ff/IMG_0904_1772555188774_qqh0fx.webp',
    category: 'Polishing',
    title: 'Full Paint Polishing — Swirl Mark Removal',
  },
  {
    image: 'https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/d458f618-217b-4ec1-bd70-41c7125feefb/IMG_0905_1772555190849_d2izl8.webp',
    category: 'Polishing',
    title: 'Mirror Finish Polishing — Dark Paint Correction',
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

  const openLightbox = (index: number) => {
    setLightbox(index);
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const prevItem = () => {
    if (lightbox !== null) {
      setLightbox(lightbox <= 0 ? filtered.length - 1 : lightbox - 1);
    }
  };

  const nextItem = () => {
    if (lightbox !== null) {
      setLightbox(lightbox >= filtered.length - 1 ? 0 : lightbox + 1);
    }
  };

  return (
    <>
      {/* Hero — реальное фото из галереи вместо стокового */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/cbd89932-3d41-47d9-b9b2-f22101e85658/48223622-12da-4c86-9589-d3ae1dc07e03/Screenshot_2026_03_05_150523_1772751974556_jq0265.webp"
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

      {/* Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-primary-500 text-dark-900 shadow-lg shadow-primary-500/20'
                    : 'bg-white/5 text-dark-200 hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-dark-800/50 border border-white/5 overflow-hidden hover:border-primary-500/30 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-primary-500/5"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-dark-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <ZoomIn size={16} className="text-white" />
                  </div>
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-primary-500/90 text-dark-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-base group-hover:text-primary-400 transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-dark-950/98 backdrop-blur-lg flex flex-col items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-20"
          >
            <X size={24} className="text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevItem(); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-20"
          >
            <ChevronLeft size={28} className="text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextItem(); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-20"
          >
            <ChevronRight size={28} className="text-white" />
          </button>
          <div
            className="max-w-5xl w-full px-4 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <span className="text-primary-400 text-xs font-semibold uppercase tracking-widest">
                {filtered[lightbox].category}
              </span>
              <h3 className="text-white text-xl sm:text-2xl font-bold mt-1">
                {filtered[lightbox].title}
              </h3>
            </div>
            <div className="flex justify-center">
              <img
                src={filtered[lightbox].image}
                alt={filtered[lightbox].title}
                className="w-full max-w-3xl rounded-2xl object-cover max-h-[75vh]"
              />
            </div>
            <div className="text-center mt-4">
              <span className="text-dark-400 text-sm">
                {lightbox + 1} / {filtered.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
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