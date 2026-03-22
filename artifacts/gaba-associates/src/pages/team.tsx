import { motion } from "framer-motion";
import { Mail, Phone, GraduationCap, Briefcase } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { SEO } from "@/components/SEO";

export default function Team() {
  const team = [
    {
      name: "Adv. Rajesh Gaba",
      role: "Senior Counsel",
      image: `${import.meta.env.BASE_URL}images/rajesh-gaba.png`,
      bio: "Advocate Rajesh Gaba is a distinguished legal professional with over 27 years of extensive experience in Taxation and Mercantile Laws. He has successfully represented hundreds of clients before various appellate authorities and tribunals.",
      credentials: [
        "Specialist in Income Tax & GST Litigation",
        "Strategic Corporate Advisory",
        "Member of Bar Council"
      ],
      email: "rajeshgabaadvocate@gmail.com",
      phone: "+91 98110 04759"
    },
    {
      name: "Adv. Mihir Gaba",
      role: "Associate Counsel",
      image: `${import.meta.env.BASE_URL}images/mihir-gaba.png`,
      bio: "Advocate Mihir Gaba brings dynamic modern legal strategies to the firm, specializing in corporate compliances, startup advisory, and direct taxation. He ensures comprehensive legal health for emerging businesses.",
      credentials: [
        "Company Incorporation Expert",
        "Drafting & Conveyancing",
        "Tax Planning Consultant"
      ],
      email: "Gabaassociates1@gmail.com",
      phone: "0124-2310100"
    }
  ];

  return (
    <>
      <SEO 
        title="Our Team"
        description="Meet the expert legal minds at Gaba Associates, led by Senior Counsel Adv. Rajesh Gaba."
        url="/team"
      />
      
      <PageHeader 
        title="Our Team" 
        subtitle="Experienced legal professionals dedicated to protecting your interests." 
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/3">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 shadow-inner rounded-2xl pointer-events-none" />
                </div>
              </div>
              
              <div className="w-full lg:w-2/3 space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{member.name}</h2>
                  <p className="text-xl text-accent font-semibold mt-1">{member.role}</p>
                </div>
                
                <div className="w-12 h-1 bg-border rounded-full" />
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 pt-4">
                  <div>
                    <h3 className="flex items-center text-foreground font-bold mb-4">
                      <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                      Key Expertise
                    </h3>
                    <ul className="space-y-2">
                      {member.credentials.map((cred, i) => (
                        <li key={i} className="flex items-start text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2 flex-shrink-0" />
                          {cred}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="flex items-center text-foreground font-bold mb-4">
                      <Briefcase className="w-5 h-5 mr-2 text-primary" />
                      Contact Info
                    </h3>
                    <div className="space-y-3">
                      <a href={`mailto:${member.email}`} className="flex items-center text-muted-foreground hover:text-primary text-sm transition-colors">
                        <Mail className="w-4 h-4 mr-3" />
                        {member.email}
                      </a>
                      <a href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center text-muted-foreground hover:text-primary text-sm transition-colors">
                        <Phone className="w-4 h-4 mr-3" />
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
