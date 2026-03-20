export const LOCALES = ['ko', 'en', 'ja'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'ko';

export function isValidLocale(lang: string): lang is Locale {
  return LOCALES.includes(lang as Locale);
}

interface Paragraph {
  text: string;
  highlights?: string[];
}

interface TimelineEntry {
  year: string;
  title: string;
  subtitle?: string;
  active?: boolean;
}

interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogDescription: string;
  };
  nav: {
    hero: string;
    about: string;
    projects: string;
    contact: string;
  };
  loading: {
    skip: string;
  };
  hero: {
    caption: string;
    subtitle: string;
    typewriter: string;
    scroll: string;
  };
  about: {
    title: string;
    background: string;
    activities: string;
    interests: string;
    introduction: {
      quote: string;
      paragraphs: Paragraph[];
    };
    education: TimelineEntry[];
    affiliations: TimelineEntry[];
  };
  projects: {
    title: string;
    developing: string;
    completed: string;
    items: Record<string, ProjectItem>;
  };
  contact: {
    heading: string;
    copyEmail: string;
    copied: string;
    emailFallback: string;
  };
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  switch (locale) {
    case 'ko':
      return (await import('./ko')).default;
    case 'en':
      return (await import('./en')).default;
    case 'ja':
      return (await import('./ja')).default;
  }
}
