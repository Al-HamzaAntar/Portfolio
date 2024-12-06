import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "Junior Developer",
      company: "Tammam Company",
      period: "Summer 2024",
      description: "Web development of web applications using modern JavaScript frameworks.",
      achievements: [
        "Build the product using VUE.JS",
        "Implement a blog site",
        "Using the Tailwind CSS framework",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="mt-16 grid gap-6">
          {experiences.map((item, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{item.position}</CardTitle>
                  <p className="text-muted-foreground">{item.company}</p>
                </div>
                <div className="text-sm text-muted-foreground">{item.period}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;