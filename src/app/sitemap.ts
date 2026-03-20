import { LOCALES } from '@/i18n';

export const dynamic = 'force-static';

const BASE_URL = 'https://info.stoneiron.net';

export default function sitemap() {
  return LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: locale === 'ko' ? 1 : 0.8,
  }));
}
