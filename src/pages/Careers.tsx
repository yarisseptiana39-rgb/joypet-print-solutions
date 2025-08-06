import { Users, Clock, Award, Heart, Briefcase, GraduationCap } from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Careers = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Schedule",
      description: "Work-life balance with flexible working hours and 24/7 operational support."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Professional Growth",
      description: "Continuous learning opportunities and career advancement in the printing industry."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Benefits",
      description: "Comprehensive health coverage and wellness programs for all employees."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Environment",
      description: "Collaborative, supportive team culture where everyone's contribution matters."
    }
  ];

  const futureRoles = [
    {
      title: "Digital Printing Specialist",
      department: "Production",
      description: "Operate and maintain digital printing equipment, ensure quality control, and assist with customer orders."
    },
    {
      title: "Graphic Design Associate",
      department: "Creative",
      description: "Create compelling designs for business cards, flyers, posters, and other marketing materials."
    },
    {
      title: "Customer Service Representative",
      department: "Customer Relations",
      description: "Provide excellent customer service, handle orders, and maintain client relationships."
    },
    {
      title: "Binding & Finishing Technician",
      department: "Production",
      description: "Perform various binding services including wire, spiral, and hard cover binding with attention to detail."
    },
    {
      title: "Photography Assistant",
      department: "Studio",
      description: "Assist with photo studio operations, lighting setup, and product photography sessions."
    },
    {
      title: "Sales & Marketing Coordinator",
      department: "Business Development",
      description: "Develop marketing strategies, manage social media presence, and build client relationships."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">Join Our Team</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Be part of a dynamic team that's passionate about delivering exceptional printing 
            and branding services. Grow your career with JOYPET Services & Printers Ltd.
          </p>
        </div>
      </HeroSection>

      {/* Current Status */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="mb-8 border-primary/20 bg-accent/50">
            <Briefcase className="h-4 w-4" />
            <AlertDescription className="text-lg">
              <strong>Current Status:</strong> We are not actively hiring at the moment, but we're always 
              interested in connecting with talented individuals who share our passion for excellence. 
              Feel free to submit your resume for future opportunities.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With JOYPET?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a company that values innovation, quality, and employee growth in the dynamic printing industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 bg-background/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <div className="text-primary-foreground">
                      {benefit.icon}
                    </div>
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Culture</h2>
              <p className="text-lg text-muted-foreground">
                At JOYPET, we believe that our employees are our greatest asset. We foster an 
                environment of creativity, collaboration, and continuous learning where everyone 
                can thrive and contribute to our success.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Innovation & Creativity</h3>
                    <p className="text-muted-foreground">
                      We encourage new ideas and creative solutions to challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Continuous Learning</h3>
                    <p className="text-muted-foreground">
                      Stay updated with the latest printing technologies and techniques.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Team Collaboration</h3>
                    <p className="text-muted-foreground">
                      Work together to deliver exceptional results for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-primary p-8 rounded-lg text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Employee Testimonial</h3>
              <blockquote className="text-lg italic mb-4">
                "Working at JOYPET has been an incredible journey. The company truly cares about 
                employee development and provides opportunities to learn and grow. The 24/7 
                nature of our business means there's always something exciting happening!"
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Sarah M.</div>
                  <div className="text-primary-foreground/80">Senior Printing Specialist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Opportunities */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              While we don't have current openings, these are the types of roles we typically look for 
              as we continue to grow and expand our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureRoles.map((role, index) => (
              <Card key={index} className="border-0 bg-background/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="text-sm text-primary font-medium">{role.department}</span>
                  </div>
                  <CardTitle className="text-lg">{role.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {role.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Application Process</h2>
            <p className="text-lg text-muted-foreground">
              Interested in joining our team? Here's how to get in touch for future opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit Resume</h3>
              <p className="text-muted-foreground">
                Send your resume and cover letter to our HR department via email.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Initial Review</h3>
              <p className="text-muted-foreground">
                We'll review your application and contact you if there's a potential match.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
              <p className="text-muted-foreground">
                We'll keep your information on file for future opportunities that match your skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Even though we don't have current openings, we'd love to hear from talented individuals 
            who are passionate about the printing industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href="mailto:info@joypet.co.ke?subject=Career Inquiry">Send Resume</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="/contact">Contact HR</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;