import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import printingServices from "@/assets/printing-services.jpg";
import photoStudio from "@/assets/photo-studio.jpg";
import heatPress from "@/assets/heat-press.jpg";
import bindingServices from "@/assets/binding-services.jpg";

const ServicesCarousel = () => {
  const [api, setApi] = useState<any>();

  const carouselItems = [
    {
      image: printingServices,
      title: "Digital Printing Services",
      description: "High-quality digital printing with modern equipment"
    },
    {
      image: photoStudio,
      title: "Professional Photo Studio",
      description: "Complete photo studio setup with professional lighting"
    },
    {
      image: heatPress,
      title: "Heat Press Printing",
      description: "Custom t-shirt and promotional item printing"
    },
    {
      image: bindingServices,
      title: "Document Binding",
      description: "Professional binding services for all your documents"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-scroll every 4 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services in Action</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See our professional equipment and services at work
          </p>
        </div>
        
        <Carousel 
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 bg-background/50 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-white/90 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesCarousel;