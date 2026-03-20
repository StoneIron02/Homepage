'use client';

import { motion } from 'framer-motion';
import { letterAnimation } from '@/lib/animations';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedHeading({ text, className = '', delay = 0 }: AnimatedHeadingProps) {
  return (
    <motion.div
      className={`flex overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      style={{ perspective: '600px' }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          custom={i + delay}
          variants={letterAnimation}
          className="inline-block"
          style={{ transformOrigin: 'bottom center' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
