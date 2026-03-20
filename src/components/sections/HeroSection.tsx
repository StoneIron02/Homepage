'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Twitter, Youtube, Github, ChevronDown } from 'lucide-react';
import PixivIcon from '@/components/ui/icons/PixivIcon';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import TypewriterText from '@/components/ui/TypewriterText';
import MagneticButton from '@/components/ui/MagneticButton';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { sakuraParticles } from '@/lib/particles';
import { fadeInUp } from '@/lib/animations';
import { socialLinks } from '@/data/about';

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  twitter: <Twitter size={20} />,
  youtube: <Youtube size={20} />,
  github: <Github size={20} />,
  pixiv: <PixivIcon size={20} />,
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const characterY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const characterOpacity = useTransform(scrollYProgress, [0.3, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24"
      style={{
        background: 'linear-gradient(135deg, #0D0D1A 0%, #1a0a2e 50%, #0D0D1A 100%)',
      }}
    >
      {/* 벚꽃 파티클 */}
      <ParticleBackground id="sakura" options={sakuraParticles} className="z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-0 px-6 md:px-16 lg:pl-32 lg:pr-16">
        {/* 좌측: 텍스트 */}
        <motion.div className="flex-[50] flex flex-col gap-6 text-center lg:text-left" style={{ opacity: textOpacity }}>
          {/* 캡션 */}
          <motion.p
            className="text-text-secondary text-sm md:text-base tracking-[0.3em] uppercase"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            Creator pursuing ideals
          </motion.p>

          {/* KISHI 대형 타이틀 */}
          <AnimatedHeading
            text="KISHI"
            className="text-[80px] md:text-[120px] lg:text-[150px] font-bold tracking-tight leading-none justify-center lg:justify-start"
            delay={0.5}
          />

          {/* 한국어 서브타이틀 */}
          <motion.p
            className="text-3xl md:text-4xl text-gold"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1.2}
          >
            키시 キシ
          </motion.p>

          {/* 타이프라이터 */}
          <div className="text-lg md:text-xl text-text-secondary min-h-[2em]">
            <TypewriterText
              text="이상을 좇는 크리에이터"
              speed={80}
              delay={1500}
            />
          </div>

          {/* 소셜 링크 */}
          <motion.div
            className="flex gap-4 justify-center lg:justify-start mt-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {socialLinks.map((link) => (
              <MagneticButton
                key={link.name}
                href={link.url}
                className="w-12 h-12 rounded-full glass text-text-secondary hover:text-gold hover:border-gold/30 transition-colors"
              >
                {SOCIAL_ICONS[link.icon]}
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        {/* 우측: 캐릭터 아트 */}
        <motion.div
          className="flex-[50] flex justify-center lg:justify-end"
          style={{ y: characterY, opacity: characterOpacity }}
        >
          <motion.div
            className="relative animate-float"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            {/* 캐릭터 이미지 플레이스홀더 */}
            <div className="max-w-[320px] w-full h-[450px] md:max-w-[420px] md:h-[580px] lg:max-w-[500px] lg:h-[700px] rounded-2xl overflow-hidden">
              <Image
                src="/images/kishi_ld.png"
                alt="Kishi Character"
                width={500}
                height={700}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            {/* 글로우 이펙트 */}
            <div className="absolute -inset-10 bg-gradient-radial from-gold/5 to-transparent rounded-full blur-3xl -z-10" />
          </motion.div>
        </motion.div>
      </div>

      {/* 스크롤 유도 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-text-muted text-xs tracking-widest uppercase">Scroll</span>
        <div className="flex flex-col">
          <ChevronDown size={16} className="text-text-muted animate-scroll-chevron" />
          <ChevronDown size={16} className="text-text-muted animate-scroll-chevron -mt-2" style={{ animationDelay: '0.3s' }} />
        </div>
      </motion.div>
    </section>
  );
}
