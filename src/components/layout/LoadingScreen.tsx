'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState<'draw' | 'burst' | 'curtain' | 'done'>('done');

  useEffect(() => {
    if (!sessionStorage.getItem('kishi-loaded')) {
      setShow(true);
      setPhase('draw');
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    // SVG 그리기: 1.5초 → 버스트: 0.5초 → 커튼: 0.8초
    const t1 = setTimeout(() => setPhase('burst'), 1500);
    const t2 = setTimeout(() => setPhase('curtain'), 2000);
    const t3 = setTimeout(() => {
      setPhase('done');
      setShow(false);
      sessionStorage.setItem('kishi-loaded', '1');
    }, 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [show]);

  const skip = useCallback(() => {
    setPhase('done');
    setShow(false);
    sessionStorage.setItem('kishi-loaded', '1');
  }, []);

  if (phase === 'done' && !show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer"
          onClick={skip}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* 커튼 좌측 */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-bg-primary"
            animate={phase === 'curtain' || phase === 'done' ? { x: '-100%' } : {}}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
          {/* 커튼 우측 */}
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-bg-primary"
            animate={phase === 'curtain' || phase === 'done' ? { x: '100%' } : {}}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* KISHI SVG 스트로크 */}
          <motion.svg
            viewBox="0 0 400 80"
            className="relative z-10 w-[300px] md:w-[400px]"
            animate={phase === 'burst' || phase === 'curtain' ? { opacity: 0, scale: 1.1 } : {}}
            transition={{ duration: 0.3 }}
          >
            <motion.text
              x="50%"
              y="50%"
              dominantBaseline="central"
              textAnchor="middle"
              className="text-[60px] font-bold"
              fill="none"
              stroke="#E8C547"
              strokeWidth="1.5"
              strokeDasharray="600"
              strokeDashoffset="600"
              style={{
                fontFamily: "'Pretendard', sans-serif",
                animation: phase === 'draw' ? 'stroke-draw 1.5s ease forwards' : undefined,
              }}
            >
              KISHI
            </motion.text>
          </motion.svg>

          {/* 골드 파티클 버스트 */}
          {phase === 'burst' && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => {
                const angle = (i / 20) * Math.PI * 2;
                const dist = 80 + ((i * 7 + 3) % 12) * 10;
                return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-gold"
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{
                      x: Math.cos(angle) * dist,
                      y: Math.sin(angle) * dist,
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                );
              })}
            </div>
          )}

          {/* 스킵 힌트 */}
          <motion.p
            className="absolute bottom-8 text-text-muted text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.8 }}
          >
            Click to skip
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
