import { CheckCircle, Users, Award, Clock } from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PartnersCarousel from "@/components/ui/partners-carousel";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Customer Delight",
      description: "A commitment to surpassing our customer expectations."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Leadership by Example",
      description: "A commitment to set standards in our business dealings and be exemplar for the industry."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Integrity and Transparency",
      description: "A commitment to be ethical, sincere and open in our business dealings."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Pursuit of Excellence",
      description: "A commitment to strive relentlessly, to constantly improve ourselves, our teams, our services and products."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection backgroundImage={aboutBg}>
        <div className="space-y-6 w-full">
          <h1 className="text-4xl md:text-6xl font-bold w-full text-left md:text-center">About JOYPET</h1>
          <p className="text-lg md:text-xl w-full text-left md:text-center text-primary-foreground/90">
            Your trusted partner for professional printing and branding services. 
            Delivering excellence 24/7 with cutting-edge technology and unmatched customer service.
          </p>
        </div>
      </HeroSection>

      {/* Company Story */}
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
                Our mission is to build relationships based on "integrity with Performance" and single minded focus to achieve business objectives.
                We are uniquely poised for growth and to this end we leverage the strength of our professional management.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 w-full">Our Values</h2>
            <p className="text-lg text-muted-foreground w-full">
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

      {/* Our Team */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our customer service department is here to assist you in planning your projects' requirements, while adhering to your deadlines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Our team has vast knowledge in print management and are also trained in guiding you on improving your corporate image through promotional materials and branded items. Printing is a complex task and our client service is there to walk you through it.
              </p>
              <p className="text-lg text-muted-foreground">
                We understand that in order to be the best printing company locally and regionally, we must take care of our most valuable asset, you the client.
              </p>
              <p className="text-lg text-muted-foreground">
                Our staff is knowledgeable, and experienced in printing procedures and requirements, branding and packaging and best of all, they're friendly!
              </p>
            </div>
            <div className="bg-gradient-primary p-8 rounded-lg text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">What Sets Our Team Apart</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Vast knowledge in print management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Expert guidance on corporate image improvement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Experience in branding and packaging</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Friendly and approachable service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives & Principles */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Objectives & Principles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence drives everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 bg-card/50 backdrop-blur-sm p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Our Main Objective</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our main objective is to serve customers both in public and private sectors in such areas as NGOs, banks, government institutions.
                </p>
                <p className="text-muted-foreground">
                  Our main pressing goal is to ensure that our clients concentrate on their core businesses while we manage documents.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-card/50 backdrop-blur-sm p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Innovation & Excellence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We are always researching in order to come up with the latest document solutions to keep abreast with the trend and be ahead of competitors.
                </p>
                <p className="text-muted-foreground">
                  Our commitment to continuous improvement ensures we deliver cutting-edge printing solutions.
                </p>
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

      {/* Partners Carousel */}
      <PartnersCarousel />
    </div>
  );
};

export default About;