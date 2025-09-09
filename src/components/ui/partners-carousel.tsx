import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const PartnersCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  // Partner data - replace each logo with your actual partner logos from assets
  const partners: Partner[] = [
    { id: 1, name: "Partner 1", logo: "/src/assets/partner-1.png" }, // Replace with your actual logo
    { id: 2, name: "Partner 2", logo: "/src/assets/partner-2.png" }, // Replace with your actual logo
    { id: 3, name: "Partner 3", logo: "/src/assets/partner-3.png" }, // Replace with your actual logo
    { id: 4, name: "Partner 4", logo: "/src/assets/partner-4.png" }, // Replace with your actual logo
    { id: 5, name: "Partner 5", logo: "/src/assets/partner-5.png" }, // Replace with your actual logo
    { id: 6, name: "Partner 6", logo: "/src/assets/partner-6.png" }, // Replace with your actual logo
    { id: 7, name: "Partner 7", logo: "/src/assets/partner-7.png" }, // Replace with your actual logo
    { id: 8, name: "Partner 8", logo: "/src/assets/partner-8.png" }, // Replace with your actual logo
    { id: 9, name: "Partner 9", logo: "/src/assets/partner-9.png" }, // Replace with your actual logo
    { id: 10, name: "Partner 10", logo: "/src/assets/partner-10.png" }, // Replace with your actual logo
    { id: 11, name: "Partner 11", logo: "/src/assets/partner-11.png" }, // Replace with your actual logo
    { id: 12, name: "Partner 12", logo: "/src/assets/partner-12.png" }, // Replace with your actual logo
    { id: 13, name: "Partner 13", logo: "/src/assets/partner-13.png" }, // Replace with your actual logo
    { id: 14, name: "Partner 14", logo: "/src/assets/partner-14.png" }, // Replace with your actual logo
    { id: 15, name: "Partner 15", logo: "/src/assets/partner-15.png" }, // Replace with your actual logo
    { id: 16, name: "Partner 16", logo: "/src/assets/partner-16.png" }, // Replace with your actual logo
  ];

  // Group partners into sets of 4
  const partnerGroups = [];
  for (let i = 0; i < partners.length; i += 4) {
    partnerGroups.push(partners.slice(i, i + 4));
  }

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(intervalId);
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
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Our Trusted Partners
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
            Collaborating with industry leaders to deliver exceptional results
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {partnerGroups.map((group, groupIndex) => (
              <CarouselItem key={groupIndex}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {group.map((partner) => (
                    <div
                      key={partner.id}
                      className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="aspect-square w-24 h-24 mx-auto flex items-center justify-center bg-muted/20 rounded-lg">
                        {partner.logo ? (
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          />
                        ) : (
                          <div className="text-xs text-muted-foreground text-center p-2">
                            {partner.name}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {partnerGroups.map((_, index) => (
              <button
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30 transition-all duration-300 hover:bg-muted-foreground/60"
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;