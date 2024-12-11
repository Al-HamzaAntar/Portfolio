import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: "Blog",
      description: "A front-end Blog built with Vue.js, JaveScript, and Tailwind with AI",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVmlBsAqFt46mnauCTiJQJg098mlM0EUL_A&s",
      tags: ["Vue.js", "JaveScript", "Tailwind", "AI"],
      liveUrl: "#",
      githubUrl: "https://github.com/Al-HamzaAntar/tpt",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      tags: ["HTML", "CSS", "JavaScript", "AI"],
      liveUrl: "https://al-hamzaantar.github.io/Task-Management-App/",
      githubUrl: "https://github.com/Al-HamzaAntar/Task-Management-App",
    },
    {
      title: "Portfolio",
      description: "My first personal website was created",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQodrRGCOcCpTi_7Wp-YAkweY54Uks-QHSFng&s",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://al-hamzaantar.github.io/prtofilo/",
      githubUrl: "https://github.com/Al-HamzaAntar/prtofilo",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('projects.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-4">
                <Button asChild variant="outline" size="sm">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button asChild size="sm"> 
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;