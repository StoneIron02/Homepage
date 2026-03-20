import type { Metadata } from 'next';
import { LOCALES, getDictionary, isValidLocale } from '@/i18n';
import type { Locale } from '@/i18n';

const BASE_URL = 'https://info.stoneiron.net';

const OG_LOCALE_MAP: Record<Locale, string> = {
  ko: 'ko_KR',
  en: 'en_US',
  ja: 'ja_JP',
};

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'ko';
  const dict = await getDictionary(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${BASE_URL}/${locale}/`,
      languages: Object.fromEntries(
        LOCALES.map((l) => [l, `${BASE_URL}/${l}/`])
      ),
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.ogDescription,
      type: 'website',
      url: `${BASE_URL}/${locale}/`,
      siteName: 'KISHI',
      locale: OG_LOCALE_MAP[locale],
      images: [
        {
          url: '/images/og-image.png',
          width: 598,
          height: 598,
          alt: 'KISHI',
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: dict.meta.title,
      description: dict.meta.ogDescription,
    },
  };
}

export default async function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
