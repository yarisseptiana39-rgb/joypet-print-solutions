import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";

// Import partner logos
import partner1 from "@/assets/partner-1.png";
import partner2 from "@/assets/partner-2.png";
import partner3 from "@/assets/partner-3.png";
import partner4 from "@/assets/partner-4.png";
import partner5 from "@/assets/partner-5.png";
import partner6 from "@/assets/partner-6.png";
import partner7 from "@/assets/partner-7.png";
import partner8 from "@/assets/partner-8.png";
import partner9 from "@/assets/partner-9.png";
import partner10 from "@/assets/partner-10.png";
import partner11 from "@/assets/partner-11.png";
import partner12 from "@/assets/partner-12.png";
import partner13 from "@/assets/partner-13.png";
import partner14 from "@/assets/partner-14.png";
import partner15 from "@/assets/partner-15.png";
import partner16 from "@/assets/partner-16.png";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const PartnersCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  // Partner data with imported logos
  const partners: Partner[] = [
    { id: 1, name: "TechCorp Solutions", logo: partner1 },
    { id: 2, name: "FinanceFirst Group", logo: partner2 },
    { id: 3, name: "LogiFlow Express", logo: partner3 },
    { id: 4, name: "HealthCare Plus", logo: partner4 },
    { id: 5, name: "RetailMax Corp", logo: partner5 },
    { id: 6, name: "BuildRight Construction", logo: partner6 },
    { id: 7, name: "EduLearn Academy", logo: partner7 },
    { id: 8, name: "ManufacturePro", logo: partner8 },
    { id: 9, name: "Strategic Consulting", logo: partner9 },
    { id: 10, name: "MediaVision Studios", logo: partner10 },
    { id: 11, name: "AutoDrive Systems", logo: partner11 },
    { id: 12, name: "PropertyPrime Realty", logo: partner12 },
    { id: 13, name: "FoodServe Excellence", logo: partner13 },
    { id: 14, name: "GreenEnergy Solutions", logo: partner14 },
    { id: 15, name: "TravelMax Adventures", logo: partner15 },
    { id: 16, name: "LegalPro Services", logo: partner16 },
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent text-center">
            Our Trusted Partners
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200 text-center">
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                  {group.map((partner) => (
                    <div
                      key={partner.id}
                      className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border hover:shadow-elegant transition-all duration-300 hover:scale-105 group w-full max-w-[200px]"
                    >
                      <div className="aspect-square w-20 h-20 mx-auto flex items-center justify-center bg-background/80 rounded-lg mb-3">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-16 h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <div className="text-xs text-muted-foreground text-center font-medium">
                        {partner.name}
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