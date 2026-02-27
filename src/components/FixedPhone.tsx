import { Phone } from 'lucide-react';

export default function FixedPhone() {
  return (
    <a
      href="tel:+19169173541"
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary-600 to-primary-700 text-dark-900 py-2 text-center font-semibold text-sm flex items-center justify-center gap-2 hover:from-primary-500 hover:to-primary-600 transition-all"
    >
      <Phone size={14} />
      <span>Call Now: (916) 917-3541</span>
    </a>
  );
}