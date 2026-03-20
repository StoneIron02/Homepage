'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative section-padding bg-grid-pattern">
      <div className="max-w-6xl mx-auto">
        {/* 섹션 타이틀 */}
        <motion.div
          className="flex items-center gap-4 justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="h-px bg-gradient-to-r from-transparent to-gold flex-1 max-w-[100px]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformOrigin: 'right' }}
          />
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">PROJECTS</h2>
          <motion.div
            className="h-px bg-gradient-to-l from-transparent to-gold flex-1 max-w-[100px]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformOrigin: 'left' }}
          />
        </motion.div>

        <div className="h-16" />

        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
