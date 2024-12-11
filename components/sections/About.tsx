import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Lightbulb } from "lucide-react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code is my top priority",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design Focus",
      description: "Creating beautiful and intuitive user interfaces",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Problem Solver",
      description: "Turning complex problems into simple solutions",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('about.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('about.description')}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-none">
              <CardContent className="pt-6 text-center hover:scale-110 transition duration-700">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;