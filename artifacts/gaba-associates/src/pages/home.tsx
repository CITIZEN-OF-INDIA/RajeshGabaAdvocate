import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Scale, Calculator, FileText, Briefcase, Award, Users, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";

// Custom animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <>
      <SEO 
        title="Trusted Tax & Legal Experts"
        description="Gaba Associates is a leading Legal & Taxation Firm in Gurugram with 27+ years of excellence. We specialize in Income Tax, GST, and corporate laws."
        keywords="GST Consultant in Gurugram, Income Tax Lawyer India, Tax Advocate Haryana"
        url="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Law firm office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85 dark:bg-background/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent tracking-wide uppercase">Est. 1996</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Trusted Tax & Legal Experts with <span className="text-accent">27+ Years</span> of Excellence.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
              Based in Gurugram, we provide comprehensive taxation, accounting, and mercantile law services guided by Customer Satisfaction, Professionalism, and Integrity.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm font-semibold text-base shadow-xl shadow-accent/20 h-14 px-8">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-white border-white/30 hover:bg-white/10 rounded-sm font-semibold text-base h-14 px-8">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Counters Section */}
      <section className="py-12 bg-secondary text-primary-foreground relative -mt-8 z-20 mx-4 sm:mx-6 lg:mx-8 rounded-xl shadow-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {[
              { icon: Clock, label: "Years Experience", value: "27+" },
              { icon: Users, label: "Happy Clients", value: "300+" },
              { icon: CheckCircle, label: "Satisfaction", value: "100%" },
              { icon: Briefcase, label: "Cases Handled", value: "5000+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center px-4"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Our Core Expertise</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground">
              Comprehensive legal and taxation solutions tailored to individuals, startups, and established enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Income Tax",
                desc: "Strategic tax planning, ITR filing, TDS returns, and representation before authorities.",
                icon: Calculator,
                link: "/services#income-tax"
              },
              {
                title: "GST Compliance",
                desc: "Registration, monthly returns, ITC management, and robust litigation support.",
                icon: FileText,
                link: "/services#gst"
              },
              {
                title: "Accounting & Payroll",
                desc: "Meticulous bookkeeping, MIS reporting, and complete payroll & PF/ESI management.",
                icon: Briefcase,
                link: "/services#accounting"
              },
              {
                title: "Company Incorporation",
                desc: "Pvt Ltd/LLP setups, DIN/DSC, startup advisory and complete MOA/AOA drafting.",
                icon: Scale,
                link: "/services#incorporation"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border border-border/50 hover:border-accent/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group bg-card">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                      <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <Link href={service.link} className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">The CPI Principle</h2>
              <div className="w-20 h-1 bg-accent mb-8 rounded-full" />
              <p className="text-lg text-muted-foreground mb-8">
                At Gaba Associates, we don't just process forms; we build lasting relationships through our foundational CPI Principle.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Customer Satisfaction", desc: "Your peace of mind is our priority. We offer personalized attention to every case." },
                  { title: "Professionalism", desc: "Expert guidance backed by 27+ years of deep industry knowledge and continuous learning." },
                  { title: "Integrity", desc: "Transparent, ethical, and uncompromising adherence to the law in all our dealings." }
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Button asChild>
                  <Link href="/about">Read Our Full Story</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src={`${import.meta.env.BASE_URL}images/about-office.png`}
                  alt="Law office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-4 border-white/20 rounded-2xl z-10 m-4 pointer-events-none" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-border hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Scale className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">Top Rated</div>
                    <div className="text-sm text-muted-foreground">Legal Firm in Gurugram</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="bg-card px-6 rounded-lg border border-border mb-4 shadow-sm">
              <AccordionTrigger className="hover:no-underline font-semibold text-base py-6">
                What documents do I need for a new Private Limited Company incorporation?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                You will generally need PAN cards, Aadhar cards, photos of directors, utility bills for registered office address, and NOC from the landlord. We assist in preparing the MOA, AOA, and filing all necessary forms with the MCA.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-card px-6 rounded-lg border border-border mb-4 shadow-sm">
              <AccordionTrigger className="hover:no-underline font-semibold text-base py-6">
                How often do I need to file GST returns?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                Depending on your turnover and chosen scheme (like QRMP), you may need to file returns monthly or quarterly. We manage the entire lifecycle of GSTR-1, GSTR-3B, and Annual Returns so you can focus on your business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-card px-6 rounded-lg border border-border mb-4 shadow-sm">
              <AccordionTrigger className="hover:no-underline font-semibold text-base py-6">
                Do you represent clients facing Income Tax notices?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                Yes. Advocate Rajesh Gaba has extensive experience representing clients before the Income Tax Department and Appellate Authorities for scrutiny assessments, appeals, and penalty proceedings.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
