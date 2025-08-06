import { Printer, Camera, CreditCard, FileText, Layers, Scissors, Zap, Image, Bookmark, Shirt } from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import ServiceCard from "@/components/ui/service-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const mainServices = [
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Digital Printing",
      description: "High-quality digital printing for documents, flyers, brochures, and more with vibrant colors and sharp details."
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Bulk Printing",
      description: "Cost-effective bulk printing solutions for large quantities with consistent quality throughout the entire run."
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photo Studio Services",
      description: "Professional photography services with modern equipment and expert lighting for portraits and product shots."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Business Cards",
      description: "Premium business cards in various finishes and materials to make lasting first impressions."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Flyers & Posters",
      description: "Eye-catching flyers and posters for marketing, events, and promotional campaigns in all sizes."
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Banners",
      description: "Durable banners with eyelet and hand hole options for indoor and outdoor advertising needs."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Laminations",
      description: "Professional lamination services to protect and enhance your important documents and materials."
    },
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "Heat Press Printing",
      description: "Custom t-shirt printing and promotional item customization with vibrant, long-lasting designs."
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
      <HeroSection>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">Our Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Comprehensive printing and branding solutions designed to meet all your business needs. 
            Professional quality, competitive pricing, available 24/7.
          </p>
        </div>
      </HeroSection>

      {/* Main Services */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From digital printing to photo studio services, we offer everything you need for professional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Binding Services */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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