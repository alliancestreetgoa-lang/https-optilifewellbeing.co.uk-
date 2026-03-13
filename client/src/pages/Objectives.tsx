import { CheckCircle2 } from "lucide-react";

export default function Objectives() {
  const objectives = [
    {
      title: "Customer Satisfaction",
      desc: "Our primary goal is to exceed customer expectations through quality products and exceptional service."
    },
    {
      title: "Well-Researched Products",
      desc: "We invest heavily in R&D to ensure every product is backed by science and proven to work."
    },
    {
      title: "Long-Term Support",
      desc: "We don't just sell products; we build relationships to support your health journey for a lifetime."
    },
    {
      title: "Empowerment",
      desc: "To empower healthier lives through education, awareness, and premium nutrition."
    },
    {
      title: "Expert Guidance",
      desc: "Providing access to dedicated health advisors and friendly, skilled customer support."
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center">Our Objectives</h1>
          <p className="text-center text-muted-foreground mb-16">
            Guiding principles that drive our commitment to your health.
          </p>

          <div className="space-y-6">
            {objectives.map((obj, i) => (
              <div 
                key={i} 
                className="bg-white p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow flex gap-6 items-start group"
              >
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors mt-1 shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">{obj.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
