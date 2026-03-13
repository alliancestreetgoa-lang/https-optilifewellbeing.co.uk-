import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star, Leaf, ShieldCheck, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import { Link } from "wouter";

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615486511484-92e030802d7b?q=80&w=2074')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-4 py-1.5 text-sm uppercase tracking-wider mb-6 border-none">
            Premium Collection
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Natural Wellness Solutions</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Scientifically formulated nutraceuticals designed to support your body's natural potential.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Filters/Categories could go here */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <Link href={`/product/${product.id}`}>
                <div className="relative aspect-square overflow-hidden bg-muted cursor-pointer">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm flex items-center gap-1">
                    <Star className="w-3 h-3 fill-secondary text-secondary" />
                    4.9
                  </div>
                  {index === 0 && (
                     <div className="absolute top-4 left-4 z-30 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      BESTSELLER
                    </div>
                  )}
                </div>
              </Link>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-2 group-hover:text-secondary transition-colors cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-border/30 flex flex-col gap-4">
                  <span className="text-2xl font-bold text-primary">£{parseFloat(product.price).toFixed(2)}</span>
                  <Button 
                    onClick={() => addToCart(product)}
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 transition-all duration-300 shadow-lg hover:shadow-primary/20 group-hover:scale-105 w-full"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 py-12 border-t border-border">
          {[
            { icon: Leaf, title: "100% Natural", desc: "Sourced from organic farms" },
            { icon: ShieldCheck, title: "Lab Tested", desc: "Verified for purity & potency" },
            { icon: Heart, title: "Satisfaction Guarantee", desc: "30-day money back promise" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 justify-center text-center md:text-left">
              <div className="bg-primary/5 p-3 rounded-full text-primary">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-primary">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
