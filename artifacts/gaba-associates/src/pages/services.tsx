import { motion } from "framer-motion";
import { Calculator, FileText, Briefcase, Scale, Check } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

const services = [
  {
    id: "income-tax",
    title: "Income Tax Services",
    icon: Calculator,
    description: "Comprehensive direct tax solutions ensuring compliance while optimizing your tax liabilities.",
    features: [
      "Strategic Tax Planning for Individuals & Corporates",
      "Filing of Income Tax Returns (ITR)",
      "TDS/TCS Returns and Compliance",
      "Representation before Assessing Authorities",
      "Handling Scrutiny Assessments & Appeals",
      "Advance Tax Computations"
    ]
  },
  {
    id: "gst",
    title: "GST Compliance",
    icon: FileText,
    description: "End-to-end Indirect Tax management navigating the complexities of the GST regime.",
    features: [
      "New GST Registration & Amendments",
      "Monthly/Quarterly Returns (GSTR-1, GSTR-3B)",
      "Annual Returns & Reconciliation",
      "Input Tax Credit (ITC) Management",
      "Reply to Show Cause Notices",
      "GST Refunds & Audits"
    ]
  },
  {
    id: "accounting",
    title: "Accounting & Payroll",
    icon: Briefcase,
    description: "Outsourced financial management allowing you to focus on your core business operations.",
    features: [
      "Comprehensive Bookkeeping",
      "Preparation of Financial Statements",
      "MIS Reporting for Management",
      "End-to-End Payroll Processing",
      "PF, ESI, and PT Compliance",
      "Bank Reconciliation"
    ]
  },
  {
    id: "incorporation",
    title: "Company Incorporation",
    icon: Scale,
    description: "Turnkey solutions for establishing and structuring your business legally in India.",
    features: [
      "Incorporation of Private Limited / LLP",
      "Procurement of DIN and DSC",
      "Drafting of MOA & AOA",
      "Partnership Deeds",
      "Startup Registration & Advisory",
      "Annual ROC Compliances"
    ]
  }
];

export default function Services() {
  return (
    <>
      <SEO 
        title="Our Services"
        description="Comprehensive legal and taxation services including Income Tax, GST, Accounting, Payroll, and Company Incorporation in Gurugram."
        url="/services"
      />
      
      <PageHeader 
        title="Practice Areas" 
        subtitle="Expert solutions customized to safeguard your financial and legal interests." 
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="scroll-mt-32"
              >
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3">
                    <div className="sticky top-32">
                      <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        <service.icon className="w-8 h-8" />
                      </div>
                      <h2 className="text-3xl font-display font-bold text-foreground mb-4">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <Card className="bg-card shadow-lg border-border/50 overflow-hidden">
                      <CardContent className="p-8 md:p-10">
                        <h3 className="text-xl font-bold text-foreground mb-8 border-b border-border pb-4">Key Offerings</h3>
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start">
                              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                                <Check className="w-3.5 h-3.5 text-accent" />
                              </div>
                              <span className="text-muted-foreground font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
