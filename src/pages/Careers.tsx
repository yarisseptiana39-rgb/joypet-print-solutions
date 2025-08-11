import { Briefcase } from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Careers = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(/lovable-uploads/9670f2e8-a83a-4c75-8bc8-376ce607e773.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[1px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="space-y-6 w-full">
            <h1 className="text-4xl md:text-6xl font-bold w-full text-left md:text-center text-primary-foreground">Join Our Team</h1>
            <p className="text-lg md:text-xl w-full text-left md:text-center text-primary-foreground/90">
              Be part of a dynamic team that's passionate about delivering exceptional printing 
              and branding services. Grow your career with JOYPET Services & Printers Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section 
        className="py-16 relative"
        style={{
          backgroundImage: `url(/lovable-uploads/9670f2e8-a83a-4c75-8bc8-376ce607e773.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Alert className="mb-8 border-primary/20 bg-accent/50">
            <Briefcase className="h-4 w-4" />
            <AlertDescription className="text-lg">
              <strong>Current Status:</strong> We are not actively hiring at the moment, but we're always 
              interested in connecting with talented individuals who share our passion for excellence. 
              Feel free to submit your resume for future opportunities.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Even though we don't have current openings, we'd love to hear from talented individuals 
            who are passionate about the printing industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href="mailto:info@joypet.co.ke?subject=Career Inquiry">Send Resume</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="/contact">Contact HR</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;