import { motion } from "framer-motion";
import { CheckCircle2, Shield, Target, Users } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { SEO } from "@/components/SEO";

export default function About() {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Gaba Associates, our CPI principle, and our history of delivering expert legal and taxation services in Gurugram."
        url="/about"
      />
      
      <PageHeader 
        title="About Our Firm" 
        subtitle="Dedicated to excellence in legal and taxation services since our inception." 
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-6 text-foreground">A Legacy of Trust and Expertise</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                <p>
                  Gaba Associates is a premier legal and taxation firm located in the heart of Gurugram, Haryana. Led by Advocate Rajesh Gaba, a Senior Counsel with over 27 years of deep-rooted experience in Taxation and Mercantile Laws.
                </p>
                <p>
                  Our firm is built on the foundation of delivering highly specialized, ethical, and commercially viable legal solutions. We understand that in the dynamic Indian regulatory environment, businesses and individuals require more than just compliance—they require strategic foresight.
                </p>
                <p>
                  With a dedicated team of professionals, we serve a diverse clientele ranging from high-net-worth individuals to emerging startups and established corporate houses, ensuring their financial and legal interests are rigorously protected.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src={`${import.meta.env.BASE_URL}images/about-office.png`}
                  alt="Gaba Associates Office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl w-48">
                <div className="text-4xl font-display font-bold text-accent mb-1">300+</div>
                <div className="text-sm font-medium">Satisfied Clients Nationwide</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CPI Principle */}
      <section className="py-20 bg-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4 text-foreground">The CPI Principle</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our firm's philosophy is encapsulated in the CPI principle, guiding every interaction and strategy we develop for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Customer Satisfaction",
                desc: "We prioritize understanding our clients' unique needs, delivering tailored solutions that provide peace of mind and tangible results."
              },
              {
                icon: Target,
                title: "Professionalism",
                desc: "Our approach is characterized by rigorous attention to detail, timely execution, and maintaining the highest standards of legal practice."
              },
              {
                icon: Shield,
                title: "Integrity",
                desc: "Honesty and ethical conduct are non-negotiable. We maintain absolute confidentiality and transparent communication."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center hover:border-primary transition-colors"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
