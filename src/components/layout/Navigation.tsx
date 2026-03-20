'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollSection } from '@/hooks/useScrollSection';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import ScrollProgress from '@/components/ui/ScrollProgress';
import type { SectionId } from '@/types';

const LABELS: Record<SectionId, string> = {
  hero: 'Home',
  about: 'About',
  projects: 'Projects',
  contact: 'Contact',
};

export default function Navigation() {
  const { activeSection, scrollProgress, scrollTo, sections } = useScrollSection();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: SectionId) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <ScrollProgress progress={scrollProgress} />

      {/* 데스크탑: 우측 플로팅 도트 */}
      {!isMobile && (
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-6">
          {/* 진행률 라인 */}
          <div className="absolute right-[5px] top-0 bottom-0 w-px bg-white/10">
            <motion.div
              className="w-full bg-gold origin-top"
              style={{ scaleY: scrollProgress, height: '100%' }}
            />
          </div>

          {sections.map((id) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="group relative flex items-center gap-3"
            >
              {/* 라벨 */}
              <span className="text-xs text-text-secondary opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
                {LABELS[id]}
              </span>

              {/* 도트 */}
              <motion.div
                className="relative z-10 rounded-full transition-colors duration-300"
                animate={{
                  width: activeSection === id ? 12 : 8,
                  height: activeSection === id ? 12 : 8,
                  backgroundColor: activeSection === id ? '#E8C547' : 'rgba(255,255,255,0.3)',
                  boxShadow: activeSection === id ? '0 0 12px rgba(232,197,71,0.5)' : 'none',
                }}
              />
            </button>
          ))}
        </nav>
      )}

      {/* 모바일: 햄버거 */}
      {isMobile && (
        <>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center glass rounded-full"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ backdropFilter: 'blur(20px)', background: 'rgba(13,13,26,0.9)' }}
              >
                {sections.map((id, i) => (
                  <motion.button
                    key={id}
                    onClick={() => handleNav(id)}
                    className={`text-2xl font-semibold transition-colors ${
                      activeSection === id ? 'text-gold' : 'text-text-secondary hover:text-text-primary'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {LABELS[id]}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
