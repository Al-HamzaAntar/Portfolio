import { CVData } from '../../types/cv';

export const cvData: CVData = {
  name: "Al-Hamza Antar",
  title: " Web Developer",
  summary: "I work with Tammam Company",
  contact: {
    email: "Al-HamzaAntar@outlook.sa",
    phone: "+967 772537330",
    location: "Sana'a, YE",
    linkedin: "https://www.linkedin.com/in/%D8%A7%D9%84%D8%AD%D9%85%D8%B2%D8%A9-%D8%B9%D9%86%D8%AA%D8%B1-404677304/",
    github: "https://github.com/Al-HamzaAntar"
  },
  education: [
    {
      institution: "University of Sana'a",
      degree: "Bachelor of Computer Science",
      period: "2021 - 2025",
      description: "Specialized in Web Design and Development"
    }
  ],
  experience: [
    {
      company: "Tammam Company",
      position: "Junior Developer",
      period: "Summer 2024",
      description: [
        "I programmed a blog with Vue,js and Tailwind"
      ]
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "SQL"]
    },
    {
      category: "Technologies",
      items: ["React", "Next.js", "Vue.js"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub"]
    }
  ]
};