import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Privacy Policy</h1>
        
        <div className="prose prose-stone max-w-none text-muted-foreground">
          <p className="mb-6">
            Optilifewellbeing is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our website or purchase our products.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">Information We Collect</h3>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you create an account, make a purchase, or contact customer support. This may include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Name and contact details (email address, phone number).</li>
            <li>Billing and shipping addresses.</li>
            <li>Payment information (processed securely by our payment providers).</li>
            <li>Order history and preferences.</li>
          </ul>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">How We Use Your Information</h3>
          <p className="mb-4">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Process and fulfill your orders.</li>
            <li>Communicate with you about your order status.</li>
            <li>Send you updates, newsletters, and promotional offers (if you have opted in).</li>
            <li>Improve our website and customer service.</li>
          </ul>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">Data Security</h3>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We do not store your payment card details on our servers.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">Cookies</h3>
          <p className="mb-4">
            Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage your cookie preferences through your browser settings.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">Contact Us</h3>
          <p className="mb-4">
            If you have any questions about our privacy practices or wish to exercise your data rights, please contact us at <a href="mailto:customercare@optilifewellbeing.co.uk" className="text-primary hover:underline">customercare@optilifewellbeing.co.uk</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
