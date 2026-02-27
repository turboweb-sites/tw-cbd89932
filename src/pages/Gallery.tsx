import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CTAButton from '../components/CTAButton';
import { useLanguage } from '../LanguageContext';

const galleryItems = [
  { before: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop', after: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&h=400&fit=crop', title: 'Deep Scratch Removal — Door Panel', titleRu: 'Глубокая царапина на двери — удаление', titleUa: 'Глибока подряпина на дверях — видалення', category: 'Scratch Repair' },
  { before: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=400&fit=crop', after: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop', title: 'Multiple Scratch Repair — Hood', titleRu: 'Множественные царапины на капоте', titleUa: 'Множинні подряпини на капоті', category: 'Scratch Repair' },
  { before: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop', after: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600&h=400&fit=crop', title: 'Bumper Scuff Repair', titleRu: 'Потёртость бампера — ремонт', titleUa: 'Потертість бампера — ремонт', category: 'Scuff Repair' },
  { before: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop', after: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&h=400&fit=crop', title: 'Full Body Polish — Swirl Removal', titleRu: 'Полная полировка — удаление разводов', titleUa: 'Повне полірування — видалення розводів', category: 'Polishing' },
  { before: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop', after: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&h=400&fit=crop', title: 'Ceramic Coating — Full Vehicle', titleRu: 'Нанесение керамики — весь автомобиль', titleUa: 'Нанесення кераміки — весь автомобіль', category: 'Ceramic Coating' },
  { before: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop', after: 'https://images.unsplash.com/photo-1471479917193-f00955256257?w=600&h=400&fit=crop', title: 'Key Scratch Repair — Side Panel', titleRu: 'Царапина от ключа — боковая панель', titleUa: 'Подряпина від ключа — бокова панель', category: 'Scratch Repair' },
  { before: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&h=400&fit=crop', after: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop', title: 'Ceramic Coating — Hydrophobic Finish', titleRu: 'Керамика — гидрофобный эффект', titleUa: 'Кераміка — гідрофобний ефект', category: 'Ceramic Coating' },
  { before: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=400&fit=crop', after: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600&h=400&fit=crop', title: 'Paint Enhancement — Mobile Polishing', titleRu: 'Улучшение ЛКП — мобильная полировка', titleUa: 'Покращення ЛФП — мобільне полірування', category: 'Polishing' },
  { before: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop', after: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&h=400&fit=crop', title: 'Door Scrape Repair', titleRu: 'Потёртость двери — ремонт', titleUa: 'Потертість дверей — ремонт', category: 'Scuff Repair' },
  { before: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=600&h=400&fit=crop', after: 'https://images.unsplash.com/photo-1471479917193-f00955256257?w=600&h=400&fit=crop', title: 'Shopping Cart Scratch Fix', titleRu: 'Царапина от тележки — крыло', titleUa: 'Подряпина від візка — крило', category: 'Scratch Repair' },
];

export default function Gallery() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const categories = [
    { key: 'All', label: t('gallery.all') },
    { key: 'Scratch Repair', label: t('gallery.scratchRepair') },
    { key: 'Scuff Repair', label: t('gallery.scuffRepair') },
    { key: 'Polishing', label: t('gallery.polishing') },
    { key: 'Ceramic Coating', label: t('gallery.ceramicCoating') },
  ];

  const filtered = activeCategory === 'All' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  const getTitle = (item: typeof galleryItems[0]) => {
    if (lang === 'ru') return item.titleRu;
    if (lang === 'ua') return item.titleUa;
    return item.title;
  };

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=1920&h=600&fit=crop" alt="Auto detailing gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-950/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"><span className="text-gradient">{t('gallery.title')}</span></h1>
          <p className="text-dark-200 text-lg max-w-2xl mx-auto">{t('gallery.desc')}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button key={cat.key} onClick={() => setActiveCategory(cat.key)} className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${activeCategory === cat.key ? 'bg-primary-500 text-dark-900' : 'bg-white/5 text-dark-200 hover:bg-white/10 border border-white/10'}`}>{cat.label}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((item, index) => (
              <div key={item.title} className="glass-card overflow-hidden group cursor-pointer" onClick={() => setLightbox(index)}>
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={item.before} alt={`Before - ${getTitle(item)}`} className="w-full h-48 sm:h-64 object-cover" />
                    <span className="absolute bottom-2 left-2 bg-dark-900/80 text-white text-xs px-3 py-1 rounded-full">{t('gallery.before')}</span>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt={`After - ${getTitle(item)}`} className="w-full h-48 sm:h-64 object-cover" />
                    <span className="absolute bottom-2 right-2 bg-primary-500/90 text-dark-900 text-xs px-3 py-1 rounded-full font-semibold">{t('gallery.after')}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold mb-1 group-hover:text-primary-400 transition-colors">{getTitle(item)}</h3>
                  <span className="text-primary-500 text-sm">{categories.find((c) => c.key === item.category)?.label || item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-dark-950/95 flex items-center justify-center p-4">
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white hover:text-primary-400 transition-colors"><X size={32} /></button>
          <button onClick={() => setLightbox(Math.max(0, lightbox - 1))} className="absolute left-4 text-white hover:text-primary-400 transition-colors"><ChevronLeft size={40} /></button>
          <button onClick={() => setLightbox(Math.min(filtered.length - 1, lightbox + 1))} className="absolute right-4 text-white hover:text-primary-400 transition-colors"><ChevronRight size={40} /></button>
          <div className="max-w-5xl w-full">
            <div className="grid grid-cols-2 gap-4">
              <div><img src={filtered[lightbox].before} alt="Before" className="w-full rounded-xl" /><p className="text-center text-dark-300 text-sm mt-2">{t('gallery.before')}</p></div>
              <div><img src={filtered[lightbox].after} alt="After" className="w-full rounded-xl" /><p className="text-center text-primary-400 text-sm mt-2">{t('gallery.after')}</p></div>
            </div>
            <h3 className="text-center text-white font-semibold text-lg mt-6">{getTitle(filtered[lightbox])}</h3>
          </div>
        </div>
      )}

      <section className="py-24 bg-dark-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t('gallery.ctaTitle1')}{' '}<span className="text-gradient">{t('gallery.ctaTitle2')}</span></h2>
          <p className="text-dark-200 text-lg mb-8">{t('gallery.ctaDesc')}</p>
          <CTAButton href="/contact" variant="primary" size="lg">{t('home.bookMobile')}</CTAButton>
        </div>
      </section>
    </>
  );
}