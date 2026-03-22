import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { MobileStickyCTA } from "./MobileStickyCTA";
import { ScrollToTop } from "./ScrollToTop";

export function PageLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <Footer />
      <MobileStickyCTA />
      <ScrollToTop />
    </div>
  );
}
