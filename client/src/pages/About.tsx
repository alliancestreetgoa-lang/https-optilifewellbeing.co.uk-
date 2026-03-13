import { motion } from "framer-motion";
import officeImage from "@assets/generated_images/modern_natural_supplement_laboratory.png";

export default function About() {
  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-in fade-in zoom-in duration-700">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">Our Story</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Dedicated to improving lives through nature, science, and a commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-primary">Serving You a Better Life</h2>
            <div className="h-1 w-20 bg-secondary rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
              Optilifewellbeing holds rich experience in the health nutritional business and understands the assorted needs of consumers. We are more than just a supplement company; we are partners in your health journey.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The brand is committed to helping people live healthier lives by providing the highest quality vitamins, natural health products, and reliable health information.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that health is the key to life and are uncompromising in our pursuit of innovation, integrity, and excellence in dietary supplements.
            </p>
          </div>
          <div className="bg-muted rounded-3xl aspect-[4/5] relative overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
             <img 
               src={officeImage} 
               alt="Optilifewellbeing Laboratory" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-20 text-center mb-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-bold mb-4 text-secondary">Our Mission</h3>
                <p className="text-white/80 leading-relaxed">
                  To provide accessible, high-quality nutritional solutions that empower individuals to take control of their health and longevity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-secondary">Our Vision</h3>
                <p className="text-white/80 leading-relaxed">
                  A world where preventive healthcare is the norm, and everyone has the knowledge and resources to lead a vibrant, healthy life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
