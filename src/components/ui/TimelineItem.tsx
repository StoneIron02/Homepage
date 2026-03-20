'use client';

import { motion } from 'framer-motion';
import { slideInLeft } from '@/lib/animations';
import { TimelineEntry } from '@/types';

interface TimelineItemProps {
  item: TimelineEntry;
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div
      className="relative pl-8 pb-8 last:pb-0"
      style={{ paddingLeft: '2.5rem', paddingBottom: '2.5rem' }}
      variants={slideInLeft}
      custom={index * 0.15}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* 타임라인 라인 */}
      <div className="absolute left-[7px] top-2 bottom-0 w-px bg-navy" />

      {/* 도트 */}
      <div className="absolute left-0 top-2 flex items-center justify-center">
        <div
          className={`w-[15px] h-[15px] rounded-full border-2 ${
            item.active
              ? 'border-gold bg-gold/20 animate-pulse-dot'
              : 'border-text-secondary bg-bg-primary'
          }`}
        />
      </div>

      {/* 콘텐츠 */}
      <div>
        <span className="text-sm text-gold font-mono">{item.year}</span>
        <h4 className="text-lg font-semibold text-text-primary" style={{ marginTop: '0.5rem' }}>{item.title}</h4>
        {item.subtitle && (
          <p className="text-text-secondary" style={{ marginTop: '0.35rem', fontSize: '0.925rem' }}>
            {item.subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}
