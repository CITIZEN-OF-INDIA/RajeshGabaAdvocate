import { Link } from "wouter";
import { Mail, Phone, MapPin, ChevronRight, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-sm">
                <span className="text-primary font-display font-bold text-2xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight text-white">Gaba Associates</span>
                <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">Legal & Taxation Firm</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Trusted Tax & Legal Experts with over 27 years of excellence serving Gurugram and beyond. Guided by Customer Satisfaction, Professionalism, and Integrity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-6 border-b border-secondary pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Team", href: "/team" },
                { name: "Services", href: "/services" },
                { name: "Downloads", href: "/downloads" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center text-sm">
                    <ChevronRight className="w-3 h-3 mr-2 text-accent" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-6 border-b border-secondary pb-2">Our Services</h3>
            <ul className="space-y-3">
              {["Income Tax", "GST Compliance", "Accounting & Payroll", "Company Incorporation", "Litigation & Representation"].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center text-sm">
                    <ChevronRight className="w-3 h-3 mr-2 text-accent" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-6 border-b border-secondary pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80 leading-relaxed">
                  429A/16, Civil Lines, <br />Near Rajiv Chowk, <br />Gurugram, Haryana – 122001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:0124-2310100" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">0124-2310100</a>
                  <a href="tel:+919811004759" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">+91 98110 04759</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:Gabaassociates1@gmail.com" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors break-all">Gabaassociates1@gmail.com</a>
                  <a href="mailto:rajeshgabaadvocate@gmail.com" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors break-all">rajeshgabaadvocate@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/60">
          <p>&copy; {currentYear} Gaba Associates. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/contact" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
