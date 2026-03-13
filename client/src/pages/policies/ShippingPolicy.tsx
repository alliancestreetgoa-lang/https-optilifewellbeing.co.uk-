import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShippingPolicy() {
  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Shipping Policy</h1>
        
        <div className="prose prose-stone max-w-none text-muted-foreground">
          <p className="mb-6">
            At Optilifewellbeing, we aim to deliver your natural health products as quickly and safely as possible.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">Shipping Destinations</h3>
          <p className="mb-4">
            We currently ship to addresses within the United Kingdom.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">Shipping Costs & Delivery Times</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Standard Shipping (UK):</strong> Free on all orders. Delivery typically takes 3-5 business days.</li>
            <li><strong>Express Shipping (UK):</strong> £5.99. Delivery typically takes 1-2 business days.</li>
          </ul>
          <p className="mb-4">
            Orders placed before 2:00 PM GMT Monday through Friday are typically processed and dispatched the same day. Orders placed after this time or on weekends/holidays will be processed the next business day.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">Order Tracking</h3>
          <p className="mb-4">
            Once your order has been dispatched, you will receive a confirmation email containing your tracking number and a link to track your package.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">Lost or Damaged Parcels</h3>
          <p className="mb-4">
            If your parcel has not arrived within the expected timeframe, or if it arrives damaged, please contact us immediately at <a href="mailto:customercare@optilifewellbeing.co.uk" className="text-primary hover:underline">customercare@optilifewellbeing.co.uk</a>. We will investigate with the courier and arrange for a replacement or refund if necessary.
          </p>
        </div>
      </div>
    </div>
  );
}
