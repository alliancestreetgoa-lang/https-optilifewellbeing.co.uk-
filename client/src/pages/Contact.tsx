import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // In a real app, we would send this to the backend
    window.location.href = `mailto:customercare@optilifewellbeing.co.uk?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`)}`;
    
    toast({
      title: "Opening Email Client",
      description: "Drafting your message to our support team.",
    });
    form.reset();
  }

  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Have questions? We're here to help you on your wellness journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid gap-8">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-primary mb-2">Our Location</h3>
                  <p className="text-muted-foreground">
                    <a href="https://maps.google.com/?q=PineTree+House,+Gardiners+Close,+Basildon+SS14+3AN" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">PineTree House, Gardiners Close,<br />Basildon SS14 3AN</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-primary mb-2">Email Us</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:customercare@optilifewellbeing.co.uk" className="hover:text-primary transition-colors">customercare@optilifewellbeing.co.uk</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-primary mb-2">Call Us</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+447568919917" className="hover:text-primary transition-colors">+44 7568 919917</a><br />
                    Mon-Fri, 9am - 6pm GMT
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                 <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-primary mb-2">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9am - 6pm<br />
                    Saturday: 10am - 4pm<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-2xl h-64 w-full flex items-center justify-center text-muted-foreground font-medium border border-border">
              [Google Map Placeholder]
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-border/50">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="How can we help?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more..." 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
