export const dynamic = 'force-static';

export default function sitemap() {
  return [
    {
      url: 'https://info.stoneiron.net',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ];
}
