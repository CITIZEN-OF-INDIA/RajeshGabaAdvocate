import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/services", label: "Services" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 flex flex-col">
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:flex bg-primary text-primary-foreground py-2 px-8 justify-between items-center text-sm font-light">
        <div className="flex items-center space-x-6">
          <a href="mailto:Gabaassociates1@gmail.com" className="flex items-center hover:text-accent transition-colors">
            <Mail className="w-4 h-4 mr-2" />
            rajeshgabaadvocate@gmail.com
          </a>
          <a href="tel:0124-2310100" className="flex items-center hover:text-accent transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            0124-2310100
          </a>
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          429A/16, Civil Lines, Near Rajiv Chowk, Gurugram
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "w-full transition-all duration-300 px-4 md:px-8 py-4 bg-background border-b",
          scrolled ? "shadow-md py-3" : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm group-hover:bg-secondary transition-colors">
              <span className="text-accent font-display font-bold text-2xl">G</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-tight text-primary">Rajesh Gaba</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Legal & Taxation Firm</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium text-sm transition-colors hover:text-primary relative py-2",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
                {location === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-t-full" />
                )}
              </Link>
            ))}
            <Button asChild className="rounded-full shadow-lg shadow-primary/20 bg-primary hover:bg-secondary">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] flex flex-col pt-16 bg-background">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-display transition-colors hover:text-primary border-b border-border pb-2",
                      location === link.href ? "text-primary font-bold border-accent" : "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="pt-6 flex flex-col space-y-4">
                  <a href="tel:0124-2310100" className="flex items-center text-muted-foreground hover:text-primary">
                    <Phone className="w-5 h-5 mr-3 text-accent" />
                    0124-2310100
                  </a>
                  <a href="mailto:Gabaassociates1@gmail.com" className="flex items-center text-muted-foreground hover:text-primary break-all">
                    <Mail className="w-5 h-5 mr-3 text-accent" />
                    Gabaassociates1@gmail.com
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
