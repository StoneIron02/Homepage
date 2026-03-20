'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DEFAULT_LOCALE, isValidLocale } from '@/i18n';
import type { Locale } from '@/i18n';

function detectLocale(): Locale {
  // localStorage 선호 로캘 복원
  try {
    const saved = localStorage.getItem('kishi-locale');
    if (saved && isValidLocale(saved)) return saved;
  } catch {}

  // navigator.language 감지
  const browserLang = navigator.language.split('-')[0];
  if (isValidLocale(browserLang)) return browserLang;

  return DEFAULT_LOCALE;
}

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const locale = detectLocale();
    router.replace(`/${locale}/`);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
