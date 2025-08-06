import { ArrowRight, CheckCircle, Clock, Printer, Camera, CreditCard, FileText, Scissors, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/ui/hero-section";
import ServiceCard from "@/components/ui/service-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const features = [
    { icon: <Clock className="w-6 h-6" />, text: "24/7 Service Available" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Professional Quality" },
    { icon: <Zap className="w-6 h-6" />, text: "Fast Turnaround" },
  ];

  const services = [
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Digital Printing",
      description: "High-quality digital printing for all your documents and marketing materials."
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photo Studio",
      description: "Professional photography services with modern equipment and expertise."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Business Cards",
      description: "Premium business cards that make lasting first impressions."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Binding Services",
      description: "Complete binding solutions including wire, spiral, and hard cover binding."
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Laminations",
      description: "Protect and enhance your documents with professional lamination services."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Heat Press Printing",
      description: "Custom t-shirt printing and heat press services for promotional items."
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Our Strength is <br />
            <span className="text-primary bg-primary-foreground bg-clip-text">Your Advantage</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-primary-foreground/90">
            Professional printing and branding services available 24/7. 
            From business cards to large format printing, we deliver excellence every time.
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
                {feature.icon}
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href="/contact">Place Your Order</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:0716971622">Call Now</a>
            </Button>
          </div>
        </div>
      </HeroSection>

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive printing and branding solutions to meet all your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
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
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose JOYPET?</h2>
            <p className="text-lg text-muted-foreground">
              Experience the difference of professional service and quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 bg-background/50 backdrop-blur-sm">
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

            <Card className="text-center border-0 bg-background/50 backdrop-blur-sm">
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

            <Card className="text-center border-0 bg-background/50 backdrop-blur-sm">
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

            <Card className="text-center border-0 bg-background/50 backdrop-blur-sm">
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
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Contact us today for a free consultation and quote for your printing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href="/contact">Get Quote</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="https://wa.me/254716971622">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;