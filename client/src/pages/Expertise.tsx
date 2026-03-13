import { HeartHandshake, Stethoscope, Shield, Sprout } from "lucide-react";

export default function Expertise() {
  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Expertise</h1>
          <p className="text-xl text-muted-foreground">
            Decades of experience in nutritional science and holistic wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-primary text-primary-foreground p-10 rounded-3xl md:col-span-2 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-serif font-bold mb-4">Customer Relationship Excellence</h2>
              <p className="text-white/80 leading-relaxed text-lg">
                We pride ourselves on building lasting bonds with our community. Our expertise lies not just in products, but in understanding the unique health narratives of each individual we serve.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-full shrink-0">
              <HeartHandshake className="w-16 h-16 text-secondary" />
            </div>
          </div>

          {[
            {
              icon: Stethoscope,
              title: "Health Advice Availability",
              desc: "Access to professional guidance to help you make informed decisions about your supplement regimen."
            },
            {
              icon: Shield,
              title: "Preventive Healthcare",
              desc: "Focusing on prevention rather than cure, strengthening the body's natural defenses."
            },
            {
              icon: Sprout,
              title: "Wellness Guidance",
              desc: "Holistic support that goes beyond pills, encompassing lifestyle, diet, and mental wellbeing."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-muted w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
