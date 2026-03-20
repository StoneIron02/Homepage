'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerChild, scaleIn } from '@/lib/animations';
import TimelineItem from '@/components/ui/TimelineItem';
import SkillOrbit from '@/components/ui/SkillOrbit';
import type { Dictionary } from '@/i18n';

interface AboutSectionProps {
  dict: Dictionary['about'];
}

export default function AboutSection({ dict }: AboutSectionProps) {
  return (
    <section id="about" className="relative section-padding">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* 섹션 타이틀 */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">{dict.title}</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" style={{ marginTop: '1rem', marginBottom: '2rem' }} />
        </motion.div>

        {/* 프로필 + 인트로 */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* 아바타 */}
          <motion.div
            className="relative flex-shrink-0"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-gold/30 relative">
              <Image
                src="/images/profile.png"
                alt="Kishi"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* 글로우 보더 */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent" style={{
                background: 'conic-gradient(from 0deg, #E8C547, #E91E8F, #4FC3F7, #E8C547) border-box',
                mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
              }} />
            </div>
          </motion.div>

          {/* VN 텍스트박스 */}
          <motion.div
            className="glass rounded-xl p-8 flex-1 max-w-2xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            <blockquote className="text-xl md:text-2xl text-gold mb-6 leading-relaxed">
              &ldquo;{dict.introduction.quote}&rdquo;
            </blockquote>
            <motion.div
              className="space-y-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {dict.introduction.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  variants={staggerChild}
                  className="text-text-secondary leading-relaxed border-l-2 border-gold/20"
                  style={{ paddingLeft: '1.5rem' }}
                >
                  {para.highlights
                    ? para.text.split(new RegExp(`(${para.highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')).map((part, j) =>
                        para.highlights!.includes(part)
                          ? <span key={j} className="text-gold/90 font-medium">{part}</span>
                          : part
                      )
                    : para.text
                  }
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* 학력 */}
        <div style={{ marginTop: '6rem' }}>
          <motion.h3
            className="text-2xl font-bold text-text-primary mb-8 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {dict.background}
          </motion.h3>
          <div className="max-w-2xl mx-auto" style={{ marginTop: '2rem' }}>
            {dict.education.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* 소속 */}
        <div style={{ marginTop: '6rem' }}>
          <motion.h3
            className="text-2xl font-bold text-text-primary mb-8 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {dict.activities}
          </motion.h3>
          <div className="max-w-2xl mx-auto" style={{ marginTop: '2rem' }}>
            {dict.affiliations.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* 스킬 오비탈 */}
        <div className="text-center">
          <motion.h3
            className="text-2xl font-bold text-text-primary mb-8 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {dict.interests}
          </motion.h3>
          <SkillOrbit />
        </div>
      </div>
    </section>
  );
}
