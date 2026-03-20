export interface ProjectMeta {
  id: string;
  coverImage?: string;
  accentColor: string;
  status: 'developing' | 'completed';
  url?: string;
  github?: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  subtitle?: string;
  active?: boolean;
}

export interface SkillNode {
  name: string;
  icon?: string;
  orbitRadius: number;
  speed: number;
  color: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export type SectionId = 'hero' | 'about' | 'projects' | 'contact';
