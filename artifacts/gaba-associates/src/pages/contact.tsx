import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "We will get back to you within 24 working hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Gaba Associates in Gurugram for all your legal and taxation queries."
        url="/contact"
      />
      
      <PageHeader 
        title="Get In Touch" 
        subtitle="We're here to help. Reach out to schedule a consultation with our experts." 
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start p-6 bg-muted rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Our Office</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      429A/16, Civil Lines,<br />
                      Near Rajiv Chowk,<br />
                      Gurugram, Haryana – 122001
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-muted rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
                    <div className="flex flex-col space-y-1">
                      <a href="tel:0124-2310100" className="text-muted-foreground hover:text-primary transition-colors text-lg">0124-2310100</a>
                      <a href="tel:+919811004759" className="text-muted-foreground hover:text-primary transition-colors text-lg">+91 98110 04759</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-muted rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                    <div className="flex flex-col space-y-1">
                      <a href="mailto:Gabaassociates1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">Gabaassociates1@gmail.com</a>
                      <a href="mailto:rajeshgabaadvocate@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">rajeshgabaadvocate@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-muted rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Working Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 10:00 AM to 7:00 PM<br />
                      Sunday: Closed (Available for emergencies)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl border border-border">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Full Name</label>
                      <Input required placeholder="John Doe" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Phone Number</label>
                      <Input required type="tel" placeholder="+91 XXXXX XXXXX" className="bg-background" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Email Address</label>
                    <Input required type="email" placeholder="john@example.com" className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Service Required</label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Select a service</option>
                      <option value="tax">Income Tax</option>
                      <option value="gst">GST Compliance</option>
                      <option value="company">Company Incorporation</option>
                      <option value="other">Other Legal Matter</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Your Message</label>
                    <Textarea 
                      required 
                      placeholder="Briefly describe your legal/tax requirement..." 
                      className="min-h-[120px] bg-background"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base font-bold" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-20">
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.135400518717!2d77.0242271!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM0LjIiTiA3N8KwMDEnMjcuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Gaba Associates Office Location"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
