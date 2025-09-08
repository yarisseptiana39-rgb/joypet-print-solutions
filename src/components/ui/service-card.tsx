import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  image?: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, image, className }: ServiceCardProps) => {
  return (
    <Card className={cn(
      "group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm overflow-hidden",
      className
    )}>
      {image && (
        <div className="relative h-48 overflow-hidden rounded-xl mx-auto">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300 shadow-lg">
              {icon}
            </div>
          </div>
        </div>
      )}
      <CardHeader className="text-center">
        {!image && (
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;