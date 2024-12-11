export interface Education {
    institution: string;
    degree: string;
    period: string;
    description: string;
  }
  
  export interface Experience {
    company: string;
    position: string;
    period: string;
    description: string[];
  }
  
  export interface Skill {
    category: string;
    items: string[];
  }
  
  export interface CVData {
    name: string;
    title: string;
    summary: string;
    contact: {
      email: string;
      phone: string;
      location: string;
      linkedin: string;
      github: string;
    };
    education: Education[];
    experience: Experience[];
    skills: Skill[];
  }