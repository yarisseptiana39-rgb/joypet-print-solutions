import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import servicePhotocopying from "@/assets/service-photocopying.jpg";
import serviceTendering from "@/assets/service-tendering.jpg";
import serviceNumbering from "@/assets/service-numbering.jpg";
import serviceBinding from "@/assets/service-binding.jpg";
import serviceRemoval from "@/assets/service-removal.jpg";
import serviceBusinessCards from "@/assets/service-business-cards.jpg";
import serviceLargeFormat from "@/assets/service-large-format.jpg";

const ServicesCarousel = () => {
  const [api, setApi] = useState<any>();

  const carouselItems = [
    {
      image: servicePhotocopying,
      title: "Photocopying",
      description: "Professional photocopying services with high-quality output for all your document needs"
    },
    {
      image: serviceTendering,
      title: "Tendering Process from Applications",
      description: "Complete tendering process assistance from application preparation to submission"
    },
    {
      image: serviceBinding,
      title: "Binding Services",
      description: "Complete binding solutions including wire, spiral, and hard cover binding"
    },
    {
      image: serviceLargeFormat,
      title: "Large Format Printing",
      description: "Professional large format printing for banners, posters, and signage"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 w-full">Our Core Services in Action</h2>
          <p className="text-lg text-muted-foreground w-full">
            See our core professional services and equipment at work
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
                        className="w-full h-80 object-cover"
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