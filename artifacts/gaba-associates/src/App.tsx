import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Team from "@/pages/team";
import Services from "@/pages/services";
import Downloads from "@/pages/downloads";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

// Layout
import { PageLayout } from "@/components/layout/PageLayout";

const queryClient = new QueryClient();

function Router() {
  return (
    <PageLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/services" component={Services} />
        <Route path="/downloads" component={Downloads} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </PageLayout>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
