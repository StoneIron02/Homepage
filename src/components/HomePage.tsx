'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import LoadingScreen from '@/components/layout/LoadingScreen';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import type { Dictionary } from '@/i18n';
import type { Locale } from '@/i18n';

interface HomePageProps {
  dict: Dictionary;
  lang: Locale;
}

export default function HomePage({ dict, lang }: HomePageProps) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let lenis: Lenis | null = null;

    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis!.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }

    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      lenis?.destroy();
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <>
      <LoadingScreen dict={dict.loading} />
      <Navigation dict={dict.nav} lang={lang} />
      <main>
        <HeroSection dict={dict.hero} />
        <AboutSection dict={dict.about} />
        <ProjectsSection dict={dict.projects} />
        <ContactSection dict={dict.contact} />
      </main>
    </>
  );
}
