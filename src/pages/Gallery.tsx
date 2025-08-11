import { Play, Image as ImageIcon, Video } from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import galleryDigitalPrinting from "@/assets/gallery-digital-printing.jpg";
import galleryBusinessCards from "@/assets/gallery-business-cards.jpg";

const Gallery = () => {
  // Sample media items - in a real app, these would come from a CMS or API
  const mediaItems = [
    {
      id: 1,
      title: "Digital Printing Showcase",
      description: "High-quality digital printing samples and process demonstration",
      type: "image",
      url: galleryDigitalPrinting
    },
    {
      id: 2,
      title: "Business Card Collection",
      description: "Premium business cards with various finishes and designs",
      type: "image",
      url: galleryBusinessCards
    },
    {
      id: 3,
      title: "Custom Heat Press Projects",
      description: "T-shirt and promotional item printing examples",
      type: "video",
      thumbnail: "/api/placeholder/400/225",
      url: "https://youtube.com/watch?v=example2"
    },
    {
      id: 4,
      title: "Large Format Banners",
      description: "Eye-catching banners for various events and promotions",
      type: "video",
      thumbnail: "/api/placeholder/400/225",
      url: "https://youtube.com/watch?v=example3"
    }
  ];

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
            <h1 className="text-4xl md:text-6xl font-bold w-full text-left md:text-center text-primary-foreground">Our Gallery</h1>
            <p className="text-lg md:text-xl w-full text-left md:text-center text-primary-foreground/90">
              Explore our collection of work samples, videos, and project showcases that demonstrate 
              the quality and creativity that makes JOYPET your trusted printing partner.
            </p>
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
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
            <h2 className="text-3xl font-bold mb-4 w-full">Media Gallery</h2>
            <p className="text-lg text-muted-foreground w-full">
              Browse through our collection of completed projects, process videos, and work samples
            </p>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                 <div className="relative overflow-hidden">
                   {item.type === "video" ? (
                     <div className="aspect-video bg-muted flex items-center justify-center">
                       <Play className="w-12 h-12 text-muted-foreground" />
                     </div>
                   ) : (
                     <img 
                       src={item.url} 
                       alt={item.title}
                       className="w-full aspect-video object-cover"
                     />
                   )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.type === "video" ? (
                      <Button 
                        size="lg" 
                        className="bg-primary hover:bg-primary/90"
                        asChild
                      >
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <Play className="w-6 h-6 mr-2" />
                          Watch Video
                        </a>
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" className="text-primary-foreground border-primary-foreground">
                        <ImageIcon className="w-4 h-4 mr-2" />
                        View Image
                      </Button>
                    )}
                  </div>
                  <div className="absolute top-2 right-2">
                    <div className="bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                      {item.type === "video" ? (
                        <Video className="w-3 h-3" />
                      ) : (
                        <ImageIcon className="w-3 h-3" />
                      )}
                      <span className="capitalize">{item.type}</span>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
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