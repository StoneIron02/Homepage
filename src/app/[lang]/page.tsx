import { getDictionary, isValidLocale, DEFAULT_LOCALE } from '@/i18n';
import HomePage from '@/components/HomePage';

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);

  return <HomePage dict={dict} lang={locale} />;
}
