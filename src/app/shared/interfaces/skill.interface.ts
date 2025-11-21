export interface Skill {
  name: string;
  level: number;
  color?: string;
}

export interface ExpertiseCard {
  icon: string;
  title: string;
  quote: string;
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  icon?: string;
}
