
export interface Project {
  title: string;
  description: string;
  image: string;
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
