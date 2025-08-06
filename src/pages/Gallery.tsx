import { useState } from "react";
import { Play, ExternalLink, Image as ImageIcon, FileText, CreditCard, Shirt } from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample portfolio items - in a real app, these would come from a CMS or API
  const portfolioItems = [
    {
      id: 1,
      title: "Corporate Business Cards",
      category: "business-cards",
      description: "Premium business cards with embossed logo and special finish",
      image: "/api/placeholder/400/300",
      type: "image"
    },
    {
      id: 2,
      title: "Event Poster Campaign",
      category: "posters",
      description: "Large format posters for music festival promotion",
      image: "/api/placeholder/400/300",
      type: "image"
    },
    {
      id: 3,
      title: "Custom T-Shirt Design",
      category: "apparel",
      description: "Heat press printing for company uniforms and promotional wear",
      image: "/api/placeholder/400/300",
      type: "image"
    },
    {
      id: 4,
      title: "Annual Report Binding",
      category: "binding",
      description: "Hard cover binding for corporate annual reports",
      image: "/api/placeholder/400/300",
      type: "image"
    },
    {
      id: 5,
      title: "Product Photography Session",
      category: "photography",
      description: "Professional product photography for e-commerce",
      image: "/api/placeholder/400/300",
      type: "image"
    },
    {
      id: 6,
      title: "Marketing Flyer Design",
      category: "flyers",
      description: "Eye-catching flyers for restaurant grand opening",
      image: "/api/placeholder/400/300",
      type: "image"
    }
  ];

  const videoShowcase = [
    {
      id: 1,
      title: "Digital Printing Process",
      description: "Behind the scenes look at our digital printing workflow",
      thumbnail: "/api/placeholder/400/225",
      videoUrl: "https://youtube.com/watch?v=example1"
    },
    {
      id: 2,
      title: "Binding Services Overview",
      description: "Complete guide to our professional binding services",
      thumbnail: "/api/placeholder/400/225",
      videoUrl: "https://youtube.com/watch?v=example2"
    },
    {
      id: 3,
      title: "Custom Heat Press Projects",
      description: "Examples of custom t-shirt and promotional item printing",
      thumbnail: "/api/placeholder/400/225",
      videoUrl: "https://youtube.com/watch?v=example3"
    }
  ];

  const categories = [
    { id: "all", name: "All Work", icon: <ImageIcon className="w-4 h-4" /> },
    { id: "business-cards", name: "Business Cards", icon: <CreditCard className="w-4 h-4" /> },
    { id: "posters", name: "Posters & Banners", icon: <FileText className="w-4 h-4" /> },
    { id: "apparel", name: "Custom Apparel", icon: <Shirt className="w-4 h-4" /> },
    { id: "binding", name: "Binding Services", icon: <FileText className="w-4 h-4" /> },
    { id: "photography", name: "Photography", icon: <ImageIcon className="w-4 h-4" /> },
    { id: "flyers", name: "Flyers & Marketing", icon: <FileText className="w-4 h-4" /> }
  ];

  const filteredItems = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">Our Gallery</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Explore our portfolio of successful projects and see the quality that makes JOYPET 
            the preferred choice for printing and branding services.
          </p>
        </div>
      </HeroSection>

      {/* Portfolio Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="portfolio" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="videos">Video Showcase</TabsTrigger>
              <TabsTrigger value="testimonials">Client Work</TabsTrigger>
            </TabsList>

            <TabsContent value="portfolio" className="space-y-8">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center space-x-2"
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </Button>
                ))}
              </div>

              {/* Portfolio Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <ImageIcon className="w-12 h-12 text-muted-foreground" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button size="sm" variant="outline" className="text-primary-foreground border-primary-foreground">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {item.title}
                        </CardTitle>
                        <Badge variant="secondary">
                          {categories.find(cat => cat.id === item.category)?.name || "Other"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Video Showcase</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Get an inside look at our processes and see the quality of our work in action.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videoShowcase.map((video) => (
                  <Card key={video.id} className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <Play className="w-12 h-12 text-muted-foreground" />
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button 
                          size="lg" 
                          className="bg-primary hover:bg-primary/90"
                          asChild
                        >
                          <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                            <Play className="w-6 h-6 mr-2" />
                            Watch Video
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {video.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {video.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="testimonials" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Client Success Stories</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  See how we've helped businesses achieve their goals with our printing and branding services.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-0 bg-card/50 backdrop-blur-sm p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        AB
                      </div>
                      <div>
                        <h3 className="font-semibold">Acme Business Solutions</h3>
                        <p className="text-sm text-muted-foreground">Corporate Identity Package</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      "JOYPET delivered exceptional quality business cards and branding materials. 
                      Their 24/7 availability saved us when we needed urgent printing for a last-minute presentation."
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card className="border-0 bg-card/50 backdrop-blur-sm p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        SE
                      </div>
                      <div>
                        <h3 className="font-semibold">Stellar Events</h3>
                        <p className="text-sm text-muted-foreground">Event Marketing Materials</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      "From banners to flyers, JOYPET handled all our event printing needs with 
                      professionalism and speed. The quality was outstanding and delivery was on time."
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card className="border-0 bg-card/50 backdrop-blur-sm p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        TF
                      </div>
                      <div>
                        <h3 className="font-semibold">TechFlow Solutions</h3>
                        <p className="text-sm text-muted-foreground">Employee Handbook Binding</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      "Perfect binding service for our company handbooks. The hard cover binding 
                      looks professional and durable. Great attention to detail and competitive pricing."
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card className="border-0 bg-card/50 backdrop-blur-sm p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        CM
                      </div>
                      <div>
                        <h3 className="font-semibold">Creative Minds Agency</h3>
                        <p className="text-sm text-muted-foreground">Custom T-Shirt Printing</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      "Amazing heat press printing for our team t-shirts and client promotional items. 
                      The colors are vibrant and the print quality is excellent. Highly recommended!"
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Let's discuss your project and bring your vision to life with our professional printing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href="/contact">Start Your Project</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="/services">View All Services</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;