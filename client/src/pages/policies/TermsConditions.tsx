import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsConditions() {
  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-stone max-w-none text-muted-foreground">
          <p className="mb-6">
            Welcome to Optilifewellbeing. These terms and conditions outline the rules and regulations for the use of our website.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">1. Acceptance of Terms</h3>
          <p className="mb-4">
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use Optilifewellbeing if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">2. Products and Services</h3>
          <p className="mb-4">
            All products listed on our website are subject to availability. We reserve the right to discontinue any product at any time. Prices for our products are subject to change without notice.
          </p>
          <p className="mb-4">
            Our products are nutritional supplements and are not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare professional before starting any new dietary supplement.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">3. Ordering and Payment</h3>
          <p className="mb-4">
            When you place an order, you agree to provide current, complete, and accurate purchase and account information. We use secure third-party payment gateways to process transactions. We do not store your credit card information.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">4. Intellectual Property</h3>
          <p className="mb-4">
            Unless otherwise stated, Optilifewellbeing and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">5. Limitation of Liability</h3>
          <p className="mb-4">
            In no event shall Optilifewellbeing, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website or our products.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">6. Governing Law</h3>
          <p className="mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">7. Contact Information</h3>
          <p className="mb-4">
            If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:customercare@optilifewellbeing.co.uk" className="text-primary hover:underline">customercare@optilifewellbeing.co.uk</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
