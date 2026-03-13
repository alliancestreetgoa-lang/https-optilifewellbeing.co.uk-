import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReturnsPolicy() {
  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Return & Refund Policy</h1>
        
        <div className="prose prose-stone max-w-none text-muted-foreground">
          <p className="mb-6">
            We want you to be completely satisfied with your purchase from Optilifewellbeing. If you are not happy with your order, we are here to help.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">Returns</h3>
          <p className="mb-4">
            You have 30 calendar days to return an item from the date you received it. To be eligible for a return:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Your item must be unused and in the same condition that you received it.</li>
            <li>Your item must be in the original packaging, with the safety seal intact.</li>
            <li>You must have the receipt or proof of purchase.</li>
          </ul>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">Refunds</h3>
          <p className="mb-4">
            Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.
          </p>
          <p className="mb-4">
            If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">Shipping Returns</h3>
          <p className="mb-4">
            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund if we provided the label.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-4">Damaged or Defective Items</h3>
          <p className="mb-4">
            If you received a damaged or defective product, please contact us immediately at <a href="mailto:customercare@optilifewellbeing.co.uk" className="text-primary hover:underline">customercare@optilifewellbeing.co.uk</a> with photos of the product and packaging. We will arrange for a replacement to be sent to you at no extra cost.
          </p>
        </div>
      </div>
    </div>
  );
}
