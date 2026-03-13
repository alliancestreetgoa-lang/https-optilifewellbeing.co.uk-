import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Objectives from "@/pages/Objectives";
import Expertise from "@/pages/Expertise";
import Contact from "@/pages/Contact";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import ShippingPolicy from "@/pages/policies/ShippingPolicy";
import PrivacyPolicy from "@/pages/policies/PrivacyPolicy";
import ReturnsPolicy from "@/pages/policies/ReturnsPolicy";
import TermsConditions from "@/pages/policies/TermsConditions";
import { CartProvider } from "@/lib/cart";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { useEffect } from "react";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/about" component={About} />
          <Route path="/objectives" component={Objectives} />
          <Route path="/expertise" component={Expertise} />
          <Route path="/contact" component={Contact} />
          <Route path="/shipping-policy" component={ShippingPolicy} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/return-policy" component={ReturnsPolicy} />
          <Route path="/terms-conditions" component={TermsConditions} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
