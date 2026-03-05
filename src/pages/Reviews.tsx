import { Star, Quote } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CTAButton from '../components/CTAButton';
import { useLanguage } from '../LanguageContext';

const reviews = [
  {
    name: 'Michael Thompson',
    text: "They came to my office parking lot and fixed three deep scratches on my door panel. Took about an hour and you can't even tell they were there. The mobile service is incredibly convenient — I didn't have to miss any work.",
    rating: 5,
    date: '2 weeks ago',
    location: 'Irvine, CA',
  },
  {
    name: 'Sarah Kim',
    text: "Best mobile detailing in Orange County, period. They polished my entire car in my driveway and the paint looks absolutely flawless. I've tried four other shops before and the difference is night and day. So convenient!",
    rating: 5,
    date: '1 month ago',
    location: 'Newport Beach, CA',
  },
  {
    name: 'David Rodriguez',
    text: "Had paint damage from a shopping cart ding. They came to my house and fixed it on-site in under 2 hours. The repair is completely invisible — you'd never know there was damage there. Highly recommended!",
    rating: 5,
    date: '1 month ago',
    location: 'Costa Mesa, CA',
  },
  {
    name: 'Jennifer Walsh',
    text: "Used their mobile service since I couldn't take time off work. They showed up right on time at my office with a professional setup. The scratch repair and polishing results were stunning. Will absolutely use them again.",
    rating: 5,
    date: '2 months ago',
    location: 'Huntington Beach, CA',
  },
  {
    name: 'Kevin Nguyen',
    text: "The mobile ceramic coating was worth every penny. They spent a full day in my garage doing paint correction and coating. The hydrophobic effect is unreal — water just dances right off. Three months later and my car still looks freshly detailed.",
    rating: 5,
    date: '2 months ago',
    location: 'Laguna Beach, CA',
  },
  {
    name: 'Amanda Foster',
    text: "Had my car fully detailed at home including headlight restoration. The headlights were completely hazed over and now they're crystal clear. They also removed a nasty scratch on the bumper. Excellent communication and fair pricing.",
    rating: 5,
    date: '3 months ago',
    location: 'Mission Viejo, CA',
  },
  {
    name: 'Robert Chen',
    text: "As someone who's very particular about paint finish, I was impressed by the professionalism. They measured paint thickness before and after correction, used proper techniques, and achieved a level of clarity I didn't think was possible. All done in my driveway!",
    rating: 5,
    date: '3 months ago',
    location: 'Tustin, CA',
  },
  {
    name: 'Lisa Martinez',
    text: 'I was nervous about getting my new car ceramic coated. The team explained the entire process, came to my home, handled everything with extreme care, and the results speak for themselves. The 5-year coating gives me total peace of mind.',
    rating: 5,
    date: '4 months ago',
    location: 'Lake Forest, CA',
  },
  {
    name: 'James Patterson',
    text: "Someone keyed my car in a parking lot and I was devastated. They came out the next day and repaired the scratch at my home. You can't even see where the damage was. Fast, professional, and the mobile service made it so easy.",
    rating: 5,
    date: '5 months ago',
    location: 'Dana Point, CA',
  },
];

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            {t('reviewsPage.title').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gradient">{t('reviewsPage.title').split(' ').slice(-1)}</span>
          </h1>
          <p className="text-dark-200 text-lg max-w-2xl mx-auto mb-8">
            {t('reviewsPage.desc')}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="glass-card p-8 flex flex-col">
                <Quote size={32} className="text-primary-500/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-primary-500 fill-primary-500" />
                  ))}
                </div>
                <p className="text-dark-200 text-sm leading-relaxed flex-1 mb-6">"{review.text}"</p>
                <div className="border-t border-white/5 pt-4">
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-dark-400 text-xs">{review.location}</p>
                    <p className="text-dark-500 text-xs">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t('reviewsPage.ctaTitle1')}{' '}<span className="text-gradient">{t('reviewsPage.ctaTitle2')}</span>
          </h2>
          <p className="text-dark-200 text-lg mb-8">
            {t('reviewsPage.ctaDesc')}
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            {t('home.bookMobile')}
          </CTAButton>
        </div>
      </section>
    </>
  );
}