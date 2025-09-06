import { ArrowRight, CheckCircle, Clock, Printer, Camera, CreditCard, FileText, Scissors, Zap, Copy, ClipboardList, Hash, Trash2 } from "lucide-react";
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

const Index = () => {
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
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Tendering Process from Applications",
      description: "Complete tendering process assistance from application preparation to submission.",
      image: serviceTendering
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Binding Services",
      description: "Complete binding solutions including wire, spiral, and hard cover binding.",
      image: serviceBinding
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Large Format Printing",
      description: "Professional large format printing for banners, posters, and signage.",
      image: serviceLargeFormat
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
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Digital Printing",
      description: "High-quality digital printing for documents, flyers, brochures, and more with vibrant colors.",
      image: serviceDigitalPrinting
    }
  ];

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(/lovable-uploads/9670f2e8-a83a-4c75-8bc8-376ce607e773.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
      <div className="relative z-10">{/* Hero Section */}
      <HeroSection backgroundImage={printingMachinesHero}>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight w-full text-left md:text-center">
            Our Strength is <br />
            <span className="text-primary-foreground/80">Your Advantage</span>
          </h1>
          <p className="text-lg md:text-xl w-full text-left md:text-center text-primary-foreground/90">
            Professional printing and branding services available 24/7. 
            From photocopying to large format printing, we deliver excellence every time.
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full shadow-lg">
                <div className="text-white">
                  {feature.icon}
                </div>
                <span className="text-sm font-medium text-white">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href="https://wa.me/254716971622?text=Hello%20JOYPET,%20I%20would%20like%20to%20place%20an%20order">Place Your Order</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:0716971622" className="flex items-center space-x-2">
                <span className="text-lg font-semibold">📞 0716971622</span>
              </a>
            </Button>
          </div>
        </div>
      </HeroSection>

      {/* Services Carousel */}
      <ServicesCarousel />

      {/* Video Preview Section */}
      <section className="py-16 bg-background">
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
                src="https://www.youtube.com/embed/zfNGsJk7AGU"
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
          backgroundImage: `url(/lovable-uploads/9670f2e8-a83a-4c75-8bc8-376ce607e773.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-full text-left md:text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 w-full">Our Priority Services</h2>
            <p className="text-lg text-muted-foreground w-full">
              Comprehensive printing and document services to meet all your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
              />
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
          <div className="w-full text-left md:text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 w-full">Why Choose JOYPET?</h2>
            <p className="text-lg text-muted-foreground w-full">
              Experience the difference of professional service and quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 bg-background/70 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
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

            <Card className="text-center border-0 bg-background/70 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
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

            <Card className="text-center border-0 bg-background/70 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
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

            <Card className="text-center border-0 bg-background/70 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
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
          <div className="w-full text-left md:text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 w-full">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 w-full">
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