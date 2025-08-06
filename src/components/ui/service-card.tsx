import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, className }: ServiceCardProps) => {
  return (
    <Card className={cn(
      "group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm",
      className
    )}>
      <CardHeader className="text-center">
        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
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