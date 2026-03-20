'use client';

import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { centerSkill, skillNodes } from '@/data/skills';

export default function SkillOrbit() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <motion.div
      className="relative w-[380px] h-[380px] md:w-[520px] md:h-[520px] mx-auto overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* 궤도 링 */}
      {[85, 145, 210].map((r) => (
        <div
          key={r}
          className="absolute rounded-full border border-white/5"
          style={{
            width: r * 2,
            height: r * 2,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* 중앙 노드 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div
          className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-sm md:text-base font-bold"
          style={{
            background: `radial-gradient(circle, ${centerSkill.color}30, ${centerSkill.color}10)`,
            border: `2px solid ${centerSkill.color}`,
            color: centerSkill.color,
            boxShadow: `0 0 30px ${centerSkill.color}20`,
          }}
        >
          {centerSkill.name}
        </div>
      </div>

      {/* 위성 노드 */}
      {skillNodes.map((node, i) => {
        const scale = isMobile ? 0.7 : 1;
        const radius = node.orbitRadius * scale;

        return (
          <div
            key={node.name}
            className="absolute top-1/2 left-1/2"
            style={{
              width: 0,
              height: 0,
              animation: `orbit ${node.speed}s linear infinite`,
              // @ts-expect-error CSS custom property
              '--orbit-radius': `${radius}px`,
              animationDelay: `${-(i * 3)}s`,
            }}
          >
            <div
              className="w-14 h-14 md:w-16 md:h-16 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-xs md:text-sm font-medium text-center overflow-hidden p-1"
              style={{
                background: `radial-gradient(circle, ${node.color}25, ${node.color}08)`,
                border: `1.5px solid ${node.color}80`,
                color: node.color,
                boxShadow: `0 0 15px ${node.color}15`,
              }}
            >
              <span className={node.name.length > 6 ? 'text-[10px] md:text-xs' : ''}>{node.name}</span>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
