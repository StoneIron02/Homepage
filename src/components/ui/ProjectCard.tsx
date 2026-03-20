'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      style={{ perspective: '1000px' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
    >
      <motion.div
        className="relative rounded-xl overflow-hidden glass h-full"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        {/* 진행중 프로젝트: 사이클링 그라디언트 보더 */}
        {project.status === 'developing' && (
          <div
            className="absolute inset-0 rounded-xl pointer-events-none animate-cycling-gradient"
            style={{
              background: `linear-gradient(90deg, ${project.accentColor}40, #E8C54740, ${project.accentColor}40)`,
              backgroundSize: '200% 200%',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              padding: '1.5px',
              borderRadius: '0.75rem',
            }}
          />
        )}

        {/* 커버 영역 */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-navy/50 to-bg-secondary/50">
          {/* 좌측 액센트 스트립 — 커버 영역에만 표시 */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 z-10"
            style={{ backgroundColor: project.accentColor }}
          />
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              width={600}
              height={192}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span
                className="text-4xl font-bold opacity-20"
                style={{ color: project.accentColor }}
              >
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* 정보 영역 */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-text-primary group-hover:text-gold transition-colors">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-xs text-text-muted mt-0.5">{project.subtitle}</p>
              )}
            </div>
            {project.status === 'developing' ? (
              <span className="flex items-center gap-1.5 text-xs text-gold whitespace-nowrap bg-gold/10 px-2 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-dot" />
                DEVELOPING
              </span>
            ) : (
              <span className="text-xs text-text-muted whitespace-nowrap bg-white/5 px-2 py-1 rounded-full">
                COMPLETED
              </span>
            )}
          </div>

          {/* 설명 */}
          {project.description && (
            <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-5">
              {project.description}
            </p>
          )}

          {/* 카드 전체 클릭 링크 */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-20"
              aria-label={`${project.title} 열기`}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
