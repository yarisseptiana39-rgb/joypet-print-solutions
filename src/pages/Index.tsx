import { ArrowRight, CheckCircle, Clock, Printer, Camera, CreditCard, FileText, Scissors, Zap, Copy, ClipboardList, Hash, Trash2, Star, Users, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/ui/hero-section";
import ServiceCard from "@/components/ui/service-card";
import ServicesCarousel from "@/components/ui/services-carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import servicesBg from "@/assets/services-bg.jpg";
import homepagePrintingBg from "@/assets/homepage-printing-bg.jpg";
import serviceDigitalPrinting from "@/assets/service-digital-printing.jpg";
import servicePhotoStudio from "@/assets/service-photo-studio.jpg";
import serviceBusinessCards from "@/assets/service-business-cards.jpg";
import serviceBinding from "@/assets/service-binding.jpg";
import serviceLamination from "@/assets/service-lamination.jpg";
import serviceHeatPress from "@/assets/service-heat-press.jpg";
import servicePhotocopying from "@/assets/service-photocopying.jpg";
import serviceTendering from "@/assets/service-tendering.jpg";
import serviceNumbering from "@/assets/service-numbering.jpg";
import serviceRemoval from "@/assets/service-removal.jpg";
import serviceLargeFormat from "@/assets/service-large-format.jpg";
import printingMachinesHero from "@/assets/printing-machines-hero.jpg";
import servicesSectionBg from "@/assets/services-section-bg.jpg";

const Index = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVideoInView, setIsVideoInView] = useState(false);
  const [isStatsInView, setIsStatsInView] = useState(false);
  const [counters, setCounters] = useState({ clients: 0, projects: 0, years: 0 });

  useEffect(() => {
    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVideoInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isStatsInView) {
          setIsStatsInView(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      videoObserver.observe(videoRef.current);
    }

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      if (videoRef.current) {
        videoObserver.unobserve(videoRef.current);
      }
      if (statsRef.current) {
        statsObserver.unobserve(statsRef.current);
      }
    };
  }, [isStatsInView]);

  const animateCounters = () => {
    const targets = { clients: 500, projects: 1200, years: 5 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        clients: Math.floor(targets.clients * progress),
        projects: Math.floor(targets.projects * progress),
        years: Math.floor(targets.years * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  const features = [
    { icon: <Clock className="w-6 h-6" />, text: "24/7 Service Available" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Professional Quality" },
    { icon: <Zap className="w-6 h-6" />, text: "Fast Turnaround" },
  ];

  const services = [
    {
      icon: <Copy className="w-6 h-6" />,
      title: "Photocopying",
      description: "Professional photocopying services with high-quality output for all your document needs.",
      image: servicePhotocopying
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Digital Printing",
      description: "High-quality digital printing for documents, flyers, brochures, and more with vibrant colors.",
      image: serviceDigitalPrinting
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Large Format Printing",
      description: "Professional large format printing for banners, posters, and signage.",
      image: serviceLargeFormat
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Binding Services",
      description: "Complete binding solutions including wire, spiral, and hard cover binding.",
      image: serviceBinding
    },
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Tendering Process from Applications",
      description: "Complete tendering process assistance from application preparation to submission.",
      image: serviceTendering
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Heat Press Printing",
      description: "Custom t-shirt printing and promotional item customization with vibrant, long-lasting designs.",
      image: serviceHeatPress
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Laminations",
      description: "Professional lamination services to protect and enhance your important documents and materials.",
      image: serviceLamination
    }
  ];

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(/lovable-uploads/9670f2e8-a83a-4c75-8bc8-376ce607e773.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/35 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
        <div className="absolute bottom-1/3 right-1/2 w-2.5 h-2.5 bg-primary/25 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
      </div>
      <div className="relative z-10">{/* Hero Section */}
      <HeroSection backgroundImage={printingMachinesHero}>
        <div className="space-y-6">
          <h1 className="text-5xl md:text-8xl font-bold leading-tight w-full text-center animate-fade-in">
            <span className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground/80 bg-clip-text text-transparent animate-pulse">Our Quality</span> <br />
            <span className="text-primary-foreground/90 font-extrabold tracking-tight drop-shadow-2xl animate-bounce">Your Confidence</span>
          </h1>
          <p className="text-xl md:text-3xl w-full text-center text-primary-foreground/90 animate-fade-in delay-300 drop-shadow-md max-w-4xl mx-auto leading-relaxed">
            Professional printing and branding services available 24/7. 
            From photocopying to large format printing, we deliver excellence every time.
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/20 backdrop-blur-md border border-white/30 px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                <div className="text-white animate-pulse">
                  {feature.icon}
                </div>
                <span className="text-base font-semibold text-white">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 animate-fade-in delay-700">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl px-8 py-6 text-lg font-bold">
              <a href="https://wa.me/254716971622?text=Hello%20JOYPET,%20I%20would%20like%20to%20place%20an%20order">Place Your Order</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl px-8 py-6">
              <a href="tel:0716971622" className="flex items-center space-x-3">
                <span className="text-xl font-bold">📞 0716971622</span>
              </a>
            </Button>
          </div>
        </div>
      </HeroSection>

      {/* Services Carousel */}
      <div className="animate-fade-in delay-1000">
        <ServicesCarousel />
      </div>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="py-16 relative"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.8) 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-primary-foreground">
            <div className="space-y-2 animate-fade-in hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-6xl font-bold">{counters.clients}+</div>
              <div className="text-lg md:text-xl text-primary-foreground/90">Happy Clients</div>
            </div>
            <div className="space-y-2 animate-fade-in delay-200 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-6xl font-bold">{counters.projects}+</div>
              <div className="text-lg md:text-xl text-primary-foreground/90">Projects Completed</div>
            </div>
            <div className="space-y-2 animate-fade-in delay-400 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-6xl font-bold">{counters.years}+</div>
              <div className="text-lg md:text-xl text-primary-foreground/90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Preview Section */}
      <section className="py-16 bg-background" ref={videoRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              See Our Services in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Watch how we deliver exceptional printing and branding solutions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/zfNGsJk7AGU?autoplay=${isVideoInView ? '1' : '0'}&mute=1&controls=1`}
                title="Joypet Services Preview"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section 
        className="py-16 relative"
        style={{
          backgroundImage: `url(${servicesSectionBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-full text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 w-full animate-fade-in bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">Our Priority Services</h2>
            <p className="text-lg md:text-xl text-muted-foreground w-full max-w-3xl mx-auto animate-fade-in delay-200">
              Comprehensive printing and document services to meet all your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in hover-scale" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-gradient-primary hover:shadow-elegant">
              <a href="/services" className="flex items-center space-x-2">
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section 
        className="py-16 relative"
        style={{
          backgroundImage: `url(/lovable-uploads/9670f2e8-a83a-4c75-8bc8-376ce607e773.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-full text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 w-full animate-fade-in bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">Why Choose JOYPET?</h2>
            <p className="text-lg md:text-xl text-muted-foreground w-full max-w-3xl mx-auto animate-fade-in delay-200">
              Experience the difference of professional service and quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 bg-background/70 backdrop-blur-sm hover:bg-background/80 hover:scale-105 transition-all duration-300 animate-fade-in group">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Always open to serve your urgent printing needs, day or night.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-background/70 backdrop-blur-sm hover:bg-background/80 hover:scale-105 transition-all duration-300 animate-fade-in delay-100 group">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>Fast Turnaround</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Quick and efficient service without compromising on quality.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-background/70 backdrop-blur-sm hover:bg-background/80 hover:scale-105 transition-all duration-300 animate-fade-in delay-200 group">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional quality with attention to detail in every project.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-background/70 backdrop-blur-sm hover:bg-background/80 hover:scale-105 transition-all duration-300 animate-fade-in delay-300 group">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>Affordable Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Competitive rates for all our printing and branding services.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 relative"
        style={{
          backgroundImage: `url(/lovable-uploads/9670f2e8-a83a-4c75-8bc8-376ce607e773.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[1px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-primary-foreground">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 w-full animate-fade-in">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 w-full max-w-3xl mx-auto animate-fade-in delay-200">
              Contact us today for a free consultation and quote for your printing needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href="https://wa.me/254716971622?text=Hello%20JOYPET,%20I%20would%20like%20to%20get%20a%20quote">Get Quote</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="https://wa.me/254716971622">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Index;