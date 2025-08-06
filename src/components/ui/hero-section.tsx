import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
}

const HeroSection = ({ children, className, backgroundImage }: HeroSectionProps) => {
  return (
    <section 
      className={cn(
        "relative min-h-[60vh] flex items-center justify-center bg-gradient-hero text-primary-foreground overflow-hidden",
        className
      )}
      style={backgroundImage ? { 
        backgroundImage: `linear-gradient(135deg, hsl(0 84% 60% / 0.9), hsl(224 71% 4% / 0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : undefined}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary-foreground/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-primary-foreground/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary-foreground/10 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {children}
      </div>
    </section>
  );
};

export default HeroSection;