import { useParams, Link } from "wouter";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star, CheckCircle2, ArrowLeft, ShieldCheck, Truck, Clock } from "lucide-react";
import { motion } from "framer-motion";
import NotFound from "./not-found";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <Link href="/shop">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 border border-border/50 shadow-sm flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-muted/30" />
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full max-w-md h-auto object-contain relative z-10 drop-shadow-2xl"
            />
             <div className="absolute top-6 left-6 z-20">
              <Badge className="bg-secondary text-secondary-foreground px-3 py-1 text-sm font-bold shadow-sm">
                Premium
              </Badge>
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">(120 Reviews)</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              {product.name}
            </h1>
            
            <p className="text-2xl font-bold text-primary mb-6">
              £{parseFloat(product.price).toFixed(2)}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={() => addToCart(product)}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-lg flex-1 md:flex-none"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-t border-border mb-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Lab Tested</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
               <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">30-Day Returns</span>
              </div>
            </div>

            {/* Product Tabs/Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary mb-3">Product Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.longDescription || product.description}
                </p>
              </div>

              {product.benefits && (
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">Key Benefits</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.ingredients && (
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">Ingredients</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed bg-muted/50 p-4 rounded-xl border border-border/50">
                    {product.ingredients}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
