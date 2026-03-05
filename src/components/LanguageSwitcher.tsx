import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Lang } from '../i18n';

const langLabels: Record<Lang, string> = {
  en: 'EN',
  ru: 'RU',
  es: 'ES',
};

const langNames: Record<Lang, string> = {
  en: 'English',
  ru: 'Русский',
  es: 'Español',
};

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-dark-200 hover:text-white hover:bg-white/10 transition-all text-sm"
      >
        <Globe size={14} />
        {langLabels[lang]}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 bg-dark-800 border border-white/10 rounded-xl overflow-hidden shadow-xl z-50 min-w-[140px]">
          {(Object.keys(langLabels) as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                lang === l
                  ? 'bg-primary-500/10 text-primary-400'
                  : 'text-dark-200 hover:bg-white/5 hover:text-white'
              }`}
            >
              {langNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}