
export interface Project {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: any; // Using any to avoid complex type imports, or use React.ComponentType
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
export interface Plan {
  title: string;
  subtitle: string;
  priceUsd: string;
  priceBs: string;
  includes: string[];
  recommended?: string;
  category: 'landing' | 'system';
  techSpecs?: string[];
  originalPriceUsd?: string;
}
