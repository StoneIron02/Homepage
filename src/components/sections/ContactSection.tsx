'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, Twitter, Youtube, Github } from 'lucide-react';
import PixivIcon from '@/components/ui/icons/PixivIcon';
import { fadeInUp, staggerContainer, staggerChild } from '@/lib/animations';
import ParticleBackground from '@/components/ui/ParticleBackground';
import MagneticButton from '@/components/ui/MagneticButton';
import { starParticles } from '@/lib/particles';
import { socialLinks } from '@/data/about';
import type { Dictionary } from '@/i18n';

const EMAIL = 'contact@stoneiron.net';

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  twitter: <Twitter size={28} />,
  youtube: <Youtube size={28} />,
  github: <Github size={28} />,
  pixiv: <PixivIcon size={28} />,
};

interface ContactSectionProps {
  dict: Dictionary['contact'];
}

export default function ContactSection({ dict }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt(dict.emailFallback, EMAIL);
    }
  }, [dict.emailFallback]);

  return (
    <section
      id="contact"
      className="relative section-padding min-h-[60vh] flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(180deg, #0D0D1A 0%, #050510 100%)',
      }}
    >
      {/* 별 파티클 */}
      <ParticleBackground id="stars" options={starParticles} />

      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-12">
        {/* 헤딩 */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-text-primary"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {dict.heading}
        </motion.h2>

        {/* 이메일 */}
        <motion.div
          className="flex items-center justify-center gap-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          <Mail size={20} className="text-gold" />
          <span className="text-sm md:text-lg text-text-secondary break-all">{EMAIL}</span>
          <button
            onClick={copyEmail}
            className="relative w-8 h-8 flex items-center justify-center rounded-lg glass hover:border-gold/30 transition-colors text-text-secondary hover:text-gold"
            title={dict.copyEmail}
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Check size={14} className="text-green-accent" />
                </motion.div>
              ) : (
                <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Copy size={14} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* 토스트 */}
        <AnimatePresence>
          {copied && (
            <motion.div
              className="fixed bottom-8 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-lg text-sm text-green-accent z-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {dict.copied}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 소셜 링크 */}
        <motion.div
          className="flex justify-center gap-4 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((link) => (
            <motion.div key={link.name} variants={staggerChild}>
              <MagneticButton
                href={link.url}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full glass text-text-secondary hover:text-gold hover:border-gold/30 transition-all hover:shadow-[0_0_20px_rgba(232,197,71,0.2)]"
              >
                {SOCIAL_ICONS[link.icon]}
              </MagneticButton>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 저작권 */}
      <motion.footer
        className="relative z-10 mt-auto pt-16 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-text-muted text-xs">
          &copy; 2024-{new Date().getFullYear()} StoneIron=Kishi. All rights reserved.
        </p>
      </motion.footer>
    </section>
  );
}
