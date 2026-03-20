// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ParticleOptions = Record<string, any>;

export const sakuraParticles: ParticleOptions = {
  fullScreen: false,
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  particles: {
    number: { value: 18, density: { enable: true } },
    color: { value: ["#FFB7C5", "#FF69B4", "#FFC0CB", "#FFD1DC"] },
    shape: {
      type: "circle",
    },
    opacity: {
      value: { min: 0.3, max: 0.7 },
      animation: { enable: true, speed: 0.5, sync: false },
    },
    size: {
      value: { min: 3, max: 8 },
    },
    move: {
      enable: true,
      speed: { min: 0.5, max: 1.5 },
      direction: "bottom",
      outModes: { default: "out" },
      drift: { min: -1, max: 1 },
    },
    rotate: {
      value: { min: 0, max: 360 },
      direction: "random",
      animation: { enable: true, speed: 3 },
    },
    wobble: {
      enable: true,
      distance: 15,
      speed: 3,
    },
  },
  detectRetina: true,
};

export const starParticles: ParticleOptions = {
  fullScreen: false,
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  particles: {
    number: { value: 50, density: { enable: true } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.1, max: 0.8 },
      animation: { enable: true, speed: 0.8, sync: false },
    },
    size: {
      value: { min: 0.5, max: 2 },
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      outModes: { default: "bounce" },
    },
  },
  detectRetina: true,
};
