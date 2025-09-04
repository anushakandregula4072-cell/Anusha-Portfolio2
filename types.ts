export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  myRole: string;
}

export interface Skill {
  name: string;
  category: 'Technical' | 'Soft';
}

export interface Experience {
    title: string;
    company: string;
    date: string;
    description: string;
}

export interface Education {
    degree: string;
    institution: string;
    year: string;
    grade: string;
}

export interface Certification {
    name: string;
    issuer: string;
    year: string;
}

export interface PositionOfResponsibility {
    title: string;
    organization: string;
    year: string;
}

export interface Achievement {
    description: string;
    year: string;
}
