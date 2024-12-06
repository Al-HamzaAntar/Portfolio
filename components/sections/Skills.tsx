import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "Figma", level: 95 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 95 },
    { name: "Bootstrap", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Vue,js", level: 80 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 90 },
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the technologies I work with on a daily basis
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;