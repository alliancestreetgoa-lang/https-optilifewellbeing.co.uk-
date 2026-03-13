import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import logo from "@assets/Logo_PNG_AA_1768467046990.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 bg-white/10 p-2 rounded-lg w-fit">
               <img 
                src={logo}
                alt="Optilifewellbeing" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              Health is the key to life. Empowering you to live a healthier life through nature and science.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Objectives", href: "/objectives" },
                { label: "Our Expertise", href: "/expertise" },
                { label: "Contact", href: "/contact" },
                { label: "Shop", href: "/shop" }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-primary-foreground/70 hover:text-white transition-colors text-sm cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: "Shipping Policy", href: "/shipping-policy" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Returns Policy", href: "/return-policy" },
                { label: "Terms & Conditions", href: "/terms-conditions" }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-primary-foreground/70 hover:text-white transition-colors text-sm cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-5 h-5 shrink-0 text-secondary mt-0.5" />
                <a href="https://maps.google.com/?q=PineTree+House,+Gardiners+Close,+Basildon+SS14+3AN" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors leading-relaxed">
                  PineTree House,<br />Gardiners Close,<br />Basildon SS14 3AN
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-5 h-5 shrink-0 text-secondary" />
                <a href="tel:+447568919917" className="hover:text-white transition-colors">+44 7568 919917</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-5 h-5 shrink-0 text-secondary mt-0.5" />
                <a href="mailto:customercare@optilifewellbeing.co.uk" className="hover:text-white transition-colors break-all">customercare@optilifewellbeing.co.uk</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Stay Connected</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Join our newsletter for wellness tips and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-none text-white placeholder:text-white/50 px-4 py-2 rounded-md w-full focus:ring-1 focus:ring-secondary"
              />
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md font-medium hover:bg-secondary/90 transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-primary-foreground/40">
          <p>&copy; {new Date().getFullYear()} Optilifewellbeing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
