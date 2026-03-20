import type { Metadata, Viewport } from 'next';
import MotionProvider from '@/components/providers/MotionProvider';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D0D1A',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://info.stoneiron.net'),
  title: 'KISHI — 이상을 좇는 크리에이터',
  description: '상상을 현실로 만드는 크리에이터 키시의 포트폴리오.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://info.stoneiron.net' },
  openGraph: {
    title: 'KISHI — 이상을 좇는 크리에이터',
    description: '상상을 현실로 만들어가는 키시의 이야기.',
    type: 'website',
    url: 'https://info.stoneiron.net',
    siteName: 'KISHI',
    locale: 'ko_KR',
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
    title: 'KISHI — 이상을 좇는 크리에이터',
    description: '상상을 현실로 만들어가는 키시의 이야기.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' cdn.jsdelivr.net; img-src 'self' data:; font-src 'self' cdn.jsdelivr.net; connect-src 'self'"
        />
      </head>
      <body className="antialiased">
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
