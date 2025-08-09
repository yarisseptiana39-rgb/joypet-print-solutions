import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import contactBg from "@/assets/contact-bg.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Service Inquiry: ${formData.service || 'General Inquiry'}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nService Needed: ${formData.service}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:info@joypet.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email application will open with the pre-filled message.",
    });

    // Reset form
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone & WhatsApp",
      details: "0716971622",
      description: "Call or WhatsApp us anytime",
      action: "tel:0716971622",
      actionLabel: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@joypet.co.ke",
      description: "Send us an email for quotes",
      action: "mailto:info@joypet.co.ke",
      actionLabel: "Send Email"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "Westlands, Soin Arcade",
      description: "1st Floor",
      action: "https://maps.google.com/?q=Soin+Arcade+Westlands",
      actionLabel: "Get Directions"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Open 24/7",
      description: "Always available for your needs",
      action: null,
      actionLabel: null
    }
  ];

  const services = [
    "Digital Printing",
    "Bulk Printing", 
    "Photo Studio Services",
    "Business Cards",
    "Flyers & Posters",
    "Banners",
    "Laminations",
    "Wire Binding",
    "Spiral Binding",
    "Velo/Stripe Binding",
    "Tape Binding",
    "Hard Cover Binding",
    "Heat Press Printing",
    "Other"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection backgroundImage={contactBg}>
        <div className="space-y-6 w-full">
          <h1 className="text-4xl md:text-6xl font-bold w-full text-left md:text-center">Contact Us</h1>
          <p className="text-lg md:text-xl w-full text-left md:text-center text-primary-foreground/90">
            Ready to start your printing project? Get in touch with our team for a free consultation 
            and custom quote. We're available 24/7 to serve your needs.
          </p>
        </div>
      </HeroSection>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full text-left md:text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 w-full">Get In Touch</h2>
            <p className="text-lg text-muted-foreground w-full">
              Multiple ways to reach us for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary-foreground">
                      {method.icon}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {method.title}
                  </CardTitle>
                  <CardDescription className="font-semibold text-foreground">
                    {method.details}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  {method.action && method.actionLabel && (
                    <Button asChild size="sm" className="bg-gradient-primary">
                      <a href={method.action} target={method.action.startsWith('http') ? '_blank' : undefined}>
                        {method.actionLabel}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Quick Actions */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <Card className="border-0 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Get a Quote</CardTitle>
                  <CardDescription>
                    Tell us about your project and we'll get back to you with a custom quote.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your project requirements, quantity, timeline, and any specific details..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-primary hover:shadow-elegant">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions & Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Quick Actions</h2>
                
                {/* WhatsApp Card */}
                <Card className="border-0 bg-background/50 backdrop-blur-sm mb-6">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle>WhatsApp Us</CardTitle>
                        <CardDescription>Instant communication for urgent needs</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
                      <a href="https://wa.me/254716971622" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Start WhatsApp Chat
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="border-0 bg-background/50 backdrop-blur-sm mb-6">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle>Emergency Printing</CardTitle>
                        <CardDescription>Need something urgently? Call us now!</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full bg-gradient-primary">
                      <a href="tel:0716971622">
                        <Phone className="w-4 h-4 mr-2" />
                        Call 0716971622
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Business Info */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Business Information</h3>
                <Card className="border-0 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Physical Address</p>
                          <p className="text-muted-foreground">
                            Westlands, Soin Arcade<br />
                            1st Floor<br />
                            Nairobi, Kenya
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Operating Hours</p>
                          <p className="text-muted-foreground">
                            24/7 - Always Available<br />
                            <span className="text-primary font-medium">Round-the-clock service</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-muted-foreground">info@joypet.co.ke</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Phone & WhatsApp</p>
                          <p className="text-muted-foreground">0716971622</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">How quickly can you complete my order?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Turnaround time depends on the complexity and quantity. Simple jobs like business cards 
                  can be ready within a few hours, while bulk orders may take 1-2 days.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Do you offer delivery services?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Yes, we offer delivery within Nairobi and surrounding areas. Contact us for delivery 
                  options and rates for your location.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">What file formats do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We accept most common formats including PDF, JPG, PNG, AI, PSD, and more. 
                  For best results, we recommend high-resolution PDF files.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Can you help with design?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Yes! Our team can assist with design services for your printing projects. 
                  Contact us to discuss your design needs and requirements.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;