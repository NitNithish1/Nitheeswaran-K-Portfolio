export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'AI & Full Stack' | 'Mobile & ERP' | 'DevOps & Cloud';
  imagePlaceholder: string;
  githubUrl: string;
  liveUrl: string;
  features: string[];
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  category: 'Languages' | 'Frontend & Mobile' | 'Backend & Cloud' | 'DevOps & Tools';
  level: number; // percentage 0-100
  iconName: string;
  highlight?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  credentialUrl?: string;
  badgeColor: string;
}
