import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "IC3",
      school: "Speak Now Institute",
      period: "Summer 2020",
      description: "Microsoft Office",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Sana'a, Sana'a",
      period: "2021 - 2025",
      description: "Full academic scholarship. Dean's List all semesters.",
    },
    {
      degree: "Web Development Bootcamp",
      school: "Sana'a University",
      period: "Summer 2024",
      description: "Intensive 4-week program focused on modern web technologies.",
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </div>

        <div className="mt-16 grid gap-6">
          {education.map((item, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{item.degree}</CardTitle>
                  <p className="text-muted-foreground">{item.school}</p>
                </div>
                <div className="text-sm text-muted-foreground">{item.period}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;