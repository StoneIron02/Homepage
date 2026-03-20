'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

interface ParticleBackgroundProps {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;
  className?: string;
}

export default function ParticleBackground({ id, options, className = '' }: ParticleBackgroundProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let cancelled = false;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (!cancelled) setReady(true);
    });
    return () => { cancelled = true; };
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id={id}
      options={options}
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
}
