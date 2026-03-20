import { SkillNode } from '@/types';

export const centerSkill = {
  name: 'Ideal',
  color: '#E8C547',
};

// 3단 궤도 (85, 145, 210) — 2/2/2 배분
export const skillNodes: SkillNode[] = [
  { name: 'Game Dev', orbitRadius: 85, speed: 14, color: '#FF7043' },
  { name: 'Drawing', orbitRadius: 85, speed: 20, color: '#7CB342' },
  { name: 'Blue Archive', orbitRadius: 145, speed: 15, color: '#4FC3F7' },
  { name: 'AI', orbitRadius: 145, speed: 21, color: '#26C6DA' },
  { name: 'Anime', orbitRadius: 210, speed: 24, color: '#FFD54F' },
  { name: 'Algorithm', orbitRadius: 210, speed: 28, color: '#90A4AE' },
];
