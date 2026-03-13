import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Leaf, ShieldCheck, Heart, Users, Star, ShoppingBag } from "lucide-react";
import heroImage from "@assets/generated_images/woman_stretching_in_sunlit_meadow.png";
import { Link } from "wouter";
import { useCart } from "@/lib/cart";
import { products } from "@/lib/products";

// Define the two featured products consistent with Shop page
const featuredProducts = products.filter(p => ["sea-kelp", "bee-propolis"].includes(p.id));

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Wellness Lifestyle" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 md:to-transparent" />
        </div>
        
        <div className="container relative z-10 px-6 pt-20">
          <div className="max-w-2xl text-white space-y-8 animate-in slide-in-from-bottom-10 duration-1000 fade-in">
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-4 py-1.5 text-sm uppercase tracking-wider mb-4 border-none">
              Welcome to Optilifewellbeing
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight">
              Empowering <br />
              <span className="text-secondary italic">Healthier</span> Lives
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
              Health is the key to life. Discover our premium range of scientifically researched vitamins and natural supplements designed to support your journey to optimal wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/shop">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 h-auto">
                  Shop Products
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Why Choose Us?</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground">
              We are uncompromising in our pursuit of innovation, integrity, and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Natural Ingredients", desc: "Sourced from the finest organic farms." },
              { icon: ShieldCheck, title: "Scientifically Researched", desc: "Formulated by experts for effectiveness." },
              { icon: Star, title: "Trusted Quality", desc: "Rigorous testing at every stage." },
              { icon: Users, title: "Customer First", desc: "Dedicated to your long-term wellness." }
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/5 p-4 rounded-full w-fit mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-4">Featured Collection</h2>
              <p className="text-muted-foreground">Our most popular solutions for your health.</p>
            </div>
            <Link href="/shop">
              <Button variant="link" className="text-primary font-medium group">
                View All Products <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="group cursor-pointer">
                <Link href={`/product/${product.id}`}>
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted mb-6">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm flex items-center gap-1">
                      <Star className="w-3 h-3 fill-secondary text-secondary" />
                      4.9
                    </div>
                    <div className="absolute top-4 left-4 z-30 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      {index === 0 ? "BESTSELLER" : "TRENDING"}
                    </div>
                  </div>
                </Link>
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-muted-foreground mb-4 min-h-[48px]">{product.description}</p>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg font-bold text-primary">£{parseFloat(product.price).toFixed(2)}</span>
                  <Button 
                    onClick={() => addToCart(product)}
                    variant="outline" 
                    size="sm" 
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Quote/Mission Strip */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <Heart className="w-12 h-12 mx-auto mb-8 text-secondary" />
          <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
            "We believe that health is the key to life. Our mission is to serve you a better life through quality and integrity."
          </h2>
          <Link href="/about">
            <Button className="bg-white text-primary hover:bg-white/90">Read Our Story</Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-center text-primary mb-16">Stories from Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white border-none p-6 shadow-sm">
                <div className="flex gap-1 mb-4 text-secondary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "I've never felt better since I started using Optilifewellbeing products. The quality is noticeably different from anything else on the market."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full" />
                  <div>
                    <p className="font-bold text-primary text-sm">Sarah Mitchell</p>
                    <p className="text-xs text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
