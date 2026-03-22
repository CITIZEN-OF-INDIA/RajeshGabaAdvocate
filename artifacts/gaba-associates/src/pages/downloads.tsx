import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function Downloads() {
  const forms = [
    {
      category: "Income Tax Forms",
      items: [
        { name: "Form 16 - TDS Certificate", type: "PDF" },
        { name: "Form 15G / 15H", type: "PDF" },
        { name: "ITR-1 (Sahaj) Utility", type: "ZIP" },
      ]
    },
    {
      category: "GST Forms",
      items: [
        { name: "GST Registration Form (REG-01)", type: "PDF" },
        { name: "Letter of Undertaking (LUT)", type: "Word" },
        { name: "E-Way Bill Format", type: "PDF" },
      ]
    },
    {
      category: "Company Law",
      items: [
        { name: "Format of Board Resolution", type: "Word" },
        { name: "Consent to act as Director (DIR-2)", type: "PDF" },
        { name: "Standard MOA & AOA Drafts", type: "ZIP" },
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Downloads & Resources"
        description="Download essential Income Tax, GST, and Company Law forms and formats provided by Gaba Associates."
        url="/downloads"
      />
      
      <PageHeader 
        title="Resources & Downloads" 
        subtitle="Quick access to important forms, utilities, and formats for your compliance needs." 
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-3 gap-8">
            {forms.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full bg-card">
                  <div className="bg-primary px-6 py-4 rounded-t-xl border-b border-primary-border">
                    <h3 className="text-xl font-display font-bold text-white">{section.category}</h3>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-center justify-between group">
                          <div className="flex items-center">
                            <FileText className="w-5 h-5 text-muted-foreground mr-3" />
                            <div>
                              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.name}</p>
                              <p className="text-xs text-muted-foreground uppercase">{item.type}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="text-accent hover:text-accent hover:bg-accent/10" onClick={() => {}}>
                            <Download className="w-4 h-4" />
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Useful Links */}
          <div className="mt-16 bg-muted rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">Important Government Portals</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild className="bg-background">
                <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer">
                  Income Tax Portal <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" asChild className="bg-background">
                <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer">
                  GST Portal <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" asChild className="bg-background">
                <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer">
                  MCA Portal <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
