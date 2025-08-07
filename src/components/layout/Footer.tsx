import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import TikTokIcon from "@/components/ui/tiktok-icon";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="/lovable-uploads/c418808e-dfab-4752-95e7-b52a35382a02.png"
              alt="JOYPET Services & Printers"
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-sm text-background/80">
              Professional printing and branding services available 24/7. 
              Our strength is your advantage.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" className="text-background/80 hover:text-primary">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" className="text-background/80 hover:text-primary">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" className="text-background/80 hover:text-primary">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" className="text-background/80 hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" className="text-background/80 hover:text-primary">
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://wa.me/254716971622" className="text-background/80 hover:text-primary">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-background/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/services" className="text-background/80 hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="/gallery" className="text-background/80 hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="/careers" className="text-background/80 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-background/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80">Digital Printing</li>
              <li className="text-background/80">Bulk Printing</li>
              <li className="text-background/80">Photo Studio</li>
              <li className="text-background/80">Business Cards</li>
              <li className="text-background/80">Binding Services</li>
              <li className="text-background/80">Heat Press Printing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:0716971622" className="text-background/80 hover:text-primary transition-colors">
                  0716971622
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@joypet.co.ke" className="text-background/80 hover:text-primary transition-colors">
                  info@joypet.co.ke
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <p className="text-background/80">
                  Westlands, Soin Arcade<br />
                  1st Floor
                </p>
              </div>
              <div className="bg-primary/20 p-3 rounded-md">
                <p className="text-sm font-semibold text-primary">Open 24/7</p>
                <p className="text-xs text-background/80">Always available for your printing needs</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-background/60">
            © 2024 JOYPET Services & Printers Ltd. All rights reserved.
          </p>
          <p className="text-sm text-background/60 mt-2 md:mt-0">
            Designed with ❤️ for excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;