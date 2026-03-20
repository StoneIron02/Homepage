'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { LOCALES } from '@/i18n';
import type { Locale } from '@/i18n';

const LOCALE_NAMES: Record<Locale, string> = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
};

interface LocaleSwitcherProps {
  lang: Locale;
}

export default function LocaleSwitcher({ lang }: LocaleSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (locale: Locale) => {
    setOpen(false);
    try {
      localStorage.setItem('kishi-locale', locale);
    } catch {}
    window.location.assign(`/${locale}/`);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 flex items-center justify-center glass rounded-full text-text-secondary hover:text-gold transition-colors"
        aria-label="Change language"
      >
        <Globe size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-12 right-0 glass rounded-lg overflow-hidden min-w-[120px]"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
          >
            {LOCALES.map((locale) => (
              <button
                key={locale}
                onClick={() => handleSelect(locale)}
                className={`w-full px-4 py-2.5 text-sm text-left transition-colors ${
                  locale === lang
                    ? 'text-gold bg-gold/10'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                }`}
              >
                {LOCALE_NAMES[locale]}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
