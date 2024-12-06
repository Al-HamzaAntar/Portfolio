import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DownloadCV } from './DownloadCV';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Hi, I'm</span>
            <span className="block text-primary mt-2">Al-Hamza Antar</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate Full Stack Developer crafting beautiful and functional web experiences
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg">
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            {/* <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button> */}
            <DownloadCV />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;