import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../LanguageContext';

const serviceOptions = [
  'Scratch Repair',
  'Scuff & Scrape Repair',
  'Polishing',
  'Ceramic Coating',
  'Headlight Restoration',
  'Mobile Detailing',
  'Boat Detailing',
  'Other',
];

const vehicleTypes = [
  'Sedan / Coupe',
  'SUV / Crossover',
  'Truck',
  'Van / Minivan',
  'Boat / Yacht',
];

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    vehicleType: '',
    vehicleMake: '',
    preferredDate: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            {t('contactPage.title1')}{' '}
            <span className="text-gradient">{t('contactPage.title2')}</span>
          </h1>
          <p className="text-dark-200 text-lg max-w-2xl mx-auto">
            {t('contactPage.desc')}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  {t('contactPage.getInTouch')}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{t('contactPage.serviceArea')}</h4>
                      <p className="text-dark-300 text-sm whitespace-pre-line">{t('contactPage.serviceAreaDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                      <Phone size={22} className="text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{t('contactPage.phone')}</h4>
                      <a href="tel:+19169173541" className="text-dark-300 hover:text-primary-400 transition-colors text-sm">(916) 917-3541</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                      <Mail size={22} className="text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{t('contactPage.email')}</h4>
                      <a href="mailto:info@radus.com" className="text-dark-300 hover:text-primary-400 transition-colors text-sm">info@radus.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                      <Clock size={22} className="text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{t('contactPage.hours')}</h4>
                      <p className="text-dark-300 text-sm whitespace-pre-line">{t('contactPage.hoursValue')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h4 className="text-white font-semibold mb-4">{t('contactPage.serviceAreas')}</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Newport Beach', 'Irvine', 'Costa Mesa', 'Huntington Beach',
                    'Laguna Beach', 'Dana Point', 'Mission Viejo', 'Lake Forest',
                    'Tustin', 'Anaheim', 'Fullerton', 'Yorba Linda',
                  ].map((area) => (
                    <span key={area} className="bg-white/5 text-dark-200 text-xs px-3 py-1.5 rounded-full border border-white/5">{area}</span>
                  ))}
                </div>
              </div>

              <div className="glass-card overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106094.41699527498!2d-117.93572295!3d33.6189101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd0e689140e3%3A0xa77ab575604a9a39!2sNewport%20Beach%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="R.A.D. US Location"
                  className="w-full"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="glass-card p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{t('contactPage.thankYou')}</h3>
                    <p className="text-dark-300 mb-2">{t('contactPage.received')}</p>
                    <p className="text-dark-300 mb-8">{t('contactPage.respond')}</p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', service: '', vehicleType: '', vehicleMake: '', preferredDate: '', message: '' });
                      }}
                      className="bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                    >
                      {t('contactPage.another')}
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-8">
                      <MessageSquare size={24} className="text-primary-500" />
                      <h3 className="text-2xl font-bold text-white">{t('contactPage.requestBooking')}</h3>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-dark-200 text-sm font-medium mb-2">{t('contactPage.fullName')}</label>
                          <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Smith" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors" />
                        </div>
                        <div>
                          <label className="block text-dark-200 text-sm font-medium mb-2">{t('contactPage.emailAddr')}</label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-dark-200 text-sm font-medium mb-2">{t('contactPage.phoneNum')}</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(916) 917-3541" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors" />
                        </div>
                        <div>
                          <label className="block text-dark-200 text-sm font-medium mb-2">{t('contactPage.prefDate')}</label>
                          <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-dark-200 text-sm font-medium mb-2">{t('contactPage.serviceNeeded')}</label>
                          <select name="service" value={formData.service} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors appearance-none">
                            <option value="" className="bg-dark-800">{t('contactPage.selectService')}</option>
                            {serviceOptions.map((s) => (<option key={s} value={s} className="bg-dark-800">{s}</option>))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-dark-200 text-sm font-medium mb-2">{t('contactPage.vehicleType')}</label>
                          <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors appearance-none">
                            <option value="" className="bg-dark-800">{t('contactPage.selectVehicle')}</option>
                            {vehicleTypes.map((v) => (<option key={v} value={v} className="bg-dark-800">{v}</option>))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-dark-200 text-sm font-medium mb-2">{t('contactPage.vehicleMake')}</label>
                        <input type="text" name="vehicleMake" value={formData.vehicleMake} onChange={handleChange} placeholder="e.g. Toyota Camry, Honda Civic, Bayliner 175" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-dark-200 text-sm font-medium mb-2">{t('contactPage.additionalDetails')}</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about the damage..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none" />
                      </div>
                      <button type="submit" className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-dark-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                        <Send size={20} />
                        {t('contactPage.submit')}
                      </button>
                      <p className="text-dark-500 text-xs text-center">{t('contactPage.disclaimer')}</p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="FAQ" title={t('contactPage.faqTitle')} />
          <div className="space-y-4">
            {[
              { q: 'How do I book an appointment?', a: 'You can book through our online form above, call us at (916) 917-3541, or email us. We\'ll confirm within 1 hour during business hours.' },
              { q: 'Do you offer free estimates?', a: 'Yes! We offer free estimates for all services. Send us a photo of the damage or describe the issue and we\'ll give you an honest assessment.' },
              { q: 'Do you offer mobile service?', a: 'Yes! We are 100% mobile. Our fully equipped unit comes to your location — home, office, marina, or anywhere in Orange County.' },
              { q: 'Do you service boats too?', a: 'Absolutely! We offer the same scratch repair, polishing, and ceramic coating services for boats and yachts. We come right to your marina or dock.' },
              { q: 'How long does a typical repair take?', a: 'Scratch repairs typically take 1-2 hours. Full polishing takes 4-6 hours. Ceramic coating packages can take 1-3 days.' },
              { q: 'Do you offer financing?', a: 'Yes, we offer financing options for ceramic coating packages over $1,000. Ask us for details during your consultation.' },
            ].map((faq) => (
              <details key={faq.q} className="glass-card group">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-semibold list-none">
                  {faq.q}
                  <span className="text-primary-500 transition-transform group-open:rotate-45 text-2xl shrink-0 ml-4">+</span>
                </summary>
                <div className="px-6 pb-6 text-dark-300 text-sm leading-relaxed border-t border-white/5 pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}