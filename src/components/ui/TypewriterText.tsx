'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
}

export default function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  className = '',
  showCursor = true,
}: TypewriterTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [isInView, delay]);

  useEffect(() => {
    if (!started) return;
    if (displayText.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayText(text.slice(0, displayText.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [started, displayText, text, speed]);

  return (
    <motion.div
      ref={ref}
      className={`${className} space-y-3`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {displayText.split('\n').map((line, i, arr) => (
        <p key={i} className="leading-relaxed">
          {line}
          {showCursor && i === arr.length - 1 && displayText.length < text.length && (
            <span
              className="inline-block w-[2px] h-[1em] ml-0.5 align-middle bg-gold"
              style={{ animation: 'blink-caret 1s step-end infinite' }}
            />
          )}
        </p>
      ))}
    </motion.div>
  );
}
