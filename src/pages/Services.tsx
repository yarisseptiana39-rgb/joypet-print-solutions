import { Printer, Camera, CreditCard, FileText, Layers, Scissors, Zap, Image, Bookmark, Shirt, Copy, ClipboardList, Hash, Trash2 } from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import ServiceCard from "@/components/ui/service-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import servicesBg from "@/assets/services-bg.jpg";
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

const Services = () => {
  const coreServices = [
    {
      icon: <Copy className="w-6 h-6" />,
      title: "Photocopying",
      description: "Professional photocopying services with high-quality output for all your document needs.",
      image: servicePhotocopying
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Digital Printing",
      description: "High-quality digital printing for documents, flyers, brochures, and more with vibrant colors and sharp details.",
      image: serviceDigitalPrinting
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Large Format Printing",
      description: "Professional large format printing for banners, posters, and signage.",
      image: serviceLargeFormat
    },
    {
      icon: <Bookmark className="w-6 h-6" />,
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
      icon: <Shirt className="w-6 h-6" />,
      title: "Heat Press Printing",
      description: "Custom t-shirt printing and promotional item customization with vibrant, long-lasting designs.",
      image: serviceHeatPress
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Laminations",
      description: "Professional lamination services to protect and enhance your important documents and materials.",
      image: serviceLamination
    }
  ];

  // Additional Services
  const additionalServices = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photo Studio Services",
      description: "Professional photography services with modern equipment and expert lighting for portraits and product shots.",
      image: servicePhotoStudio
    }
  ];

  const bindingServices = [
    {
      title: "Wire Binding",
      description: "Professional wire binding for reports, presentations, and documents that need to lay flat."
    },
    {
      title: "Spiral Binding",
      description: "Durable spiral binding that allows 360-degree page rotation, perfect for manuals and notebooks."
    },
    {
      title: "Velo/Stripe Binding",
      description: "Clean, professional binding system ideal for presentations and important documents."
    },
    {
      title: "Tape Binding",
      description: "Simple and cost-effective binding solution for everyday documents and reports."
    },
    {
      title: "Hard Cover Binding",
      description: "Premium hard cover binding for books, theses, and important documents requiring durability."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection backgroundImage={servicesBg}>
        <div className="space-y-6 w-full">
          <h1 className="text-4xl md:text-6xl font-bold w-full text-left md:text-center">Our Services</h1>
          <p className="text-lg md:text-xl w-full text-left md:text-center text-primary-foreground/90">
            Comprehensive printing and document services designed to meet all your business needs. 
            Professional quality, competitive pricing, available 24/7.
          </p>
        </div>
      </HeroSection>

      {/* Main Services */}
      <section 
        className="py-16 bg-background relative"
        style={{
          backgroundImage: `url(${servicesBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-full text-left md:text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 w-full">Core Services</h2>
            <p className="text-lg text-muted-foreground w-full">
              Our priority services - from photocopying to large format printing, we offer everything you need for professional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 w-full">Additional Services</h2>
            <p className="text-lg text-muted-foreground w-full">
              Extended services to complement our core offerings and meet all your printing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Binding Services */}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Binding Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional binding solutions to give your documents a polished, professional finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bindingServices.map((service, index) => (
              <Card key={index} className="border-0 bg-background/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    <Bookmark className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-center group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, streamlined process to get your printing projects completed efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-muted-foreground">
                Discuss your requirements and get expert advice on the best solutions for your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Design & Approval</h3>
              <p className="text-muted-foreground">
                Review designs and specifications. We ensure everything meets your expectations before printing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Production</h3>
              <p className="text-muted-foreground">
                Professional printing and finishing using state-of-the-art equipment and techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-muted-foreground">
                Quality check and timely delivery of your completed project to your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Modern Equipment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We invest in the latest technology to ensure the highest quality output for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <Printer className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Digital Press Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  High-resolution digital printing with exceptional color accuracy and consistency 
                  for professional results every time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <Camera className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Professional Studio</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Fully equipped photo studio with professional lighting and backdrops for 
                  portraits, product photography, and commercial shoots.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <Scissors className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Finishing Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete range of binding, laminating, and finishing equipment to give 
                  your projects a professional, polished appearance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Get in touch with our team for a free consultation and custom quote for your printing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href="/contact">Get Quote Now</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:0716971622">Call 0716971622</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;