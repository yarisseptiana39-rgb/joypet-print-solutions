import { CheckCircle, Users, Award, Clock } from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality First",
      description: "We never compromise on quality. Every project receives our full attention to detail."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Reliable Service",
      description: "Count on us for consistent, dependable service that meets your deadlines."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We listen, understand, and deliver."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Professional Excellence",
      description: "Years of experience backed by modern equipment and skilled professionals."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">About JOYPET</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Your trusted partner for professional printing and branding services. 
            Delivering excellence 24/7 with cutting-edge technology and unmatched customer service.
          </p>
        </div>
      </HeroSection>

      {/* Company Story */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                JOYPET Services & Printers Ltd. was founded with a simple mission: to provide 
                exceptional printing and branding services that help businesses and individuals 
                make a lasting impression.
              </p>
              <p className="text-lg text-muted-foreground">
                Located in the heart of Westlands at Soin Arcade, we have built our reputation 
                on reliability, quality, and round-the-clock availability. Our team of skilled 
                professionals combines years of experience with state-of-the-art equipment to 
                deliver results that exceed expectations.
              </p>
              <p className="text-lg text-muted-foreground">
                From small business cards to large-scale printing projects, we approach every 
                job with the same level of dedication and attention to detail. Because at JOYPET, 
                your success is our success.
              </p>
            </div>
            <div className="bg-gradient-primary p-8 rounded-lg text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-6">
                To be the leading printing and branding service provider by delivering 
                exceptional quality, innovation, and customer satisfaction 24/7.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To empower businesses and individuals with professional printing solutions 
                that help them achieve their goals and make a lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at JOYPET
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 bg-background/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <div className="text-primary-foreground">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Capabilities */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">State-of-the-Art Equipment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern technology meets skilled craftsmanship to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Digital Printing Press</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  High-resolution digital printing equipment capable of handling various paper 
                  sizes and weights with exceptional color accuracy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Professional Binding Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete range of binding machines including wire, spiral, and hard cover 
                  binding for professional document finishing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Heat Press Machines</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Modern heat press equipment for custom t-shirt printing and promotional 
                  item customization with vibrant, lasting results.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Lamination Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional lamination equipment to protect and enhance your important 
                  documents with various thickness options.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Large Format Printers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Capable of printing banners, posters, and large-scale materials with 
                  precision and vibrant colors.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Photo Studio Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional photography equipment and studio setup for high-quality 
                  photo sessions and product photography.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Businesses Trust JOYPET
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-lg">Always Available</div>
              <p className="text-primary-foreground/80">
                Round-the-clock service for urgent printing needs
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-lg">Quality Guaranteed</div>
              <p className="text-primary-foreground/80">
                Every project meets our high standards of excellence
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold">Fast</div>
              <div className="text-lg">Quick Turnaround</div>
              <p className="text-primary-foreground/80">
                Efficient service without compromising quality
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;