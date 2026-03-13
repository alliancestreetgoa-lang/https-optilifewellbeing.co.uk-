import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount, setIsOpen: setIsCartOpen } = useCart();

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About Us" },
    { href: "/objectives", label: "Our Objectives" },
    { href: "/expertise", label: "Our Expertise" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 group cursor-pointer">
            <img 
              src="/optilife-logo.png"
              alt="Optilifewellbeing" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full cursor-pointer",
                  location === link.href
                    ? "text-primary after:w-full"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="hidden lg:flex border-primary text-primary hover:bg-primary hover:text-white">
            Sign In
          </Button>
          <Button 
            onClick={() => setIsCartOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                {itemCount}
              </span>
            )}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={cn(
                  "text-lg font-medium py-2 transition-colors hover:text-primary cursor-pointer",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <div className="h-px bg-border my-2" />
          <Button 
             className="w-full bg-primary text-white"
             onClick={() => {
               setIsOpen(false);
               setIsCartOpen(true);
             }}
          >
            Cart ({itemCount})
          </Button>
        </div>
      )}
    </nav>
  );
}
