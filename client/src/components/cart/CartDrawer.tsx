import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { Minus, Plus, ShoppingBag, Trash2, X, Lock } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export function CartDrawer() {
  const { items, removeFromCart, updateQuantity, cartTotal, isOpen, setIsOpen } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: "Proceeding to Secure Checkout",
      description: "Redirecting to secure payment gateway...",
    });
    // This is where we would redirect to the virtual terminal / payment gateway
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md w-full h-full sm:h-auto max-h-screen sm:max-h-[85vh] flex flex-col p-0 gap-0 overflow-hidden bg-background border-border">
        <DialogHeader className="p-6 border-b border-border bg-white/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-serif font-bold text-primary">Your Cart</DialogTitle>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 text-center p-8">
              <div className="bg-primary/5 p-6 rounded-full">
                <ShoppingBag className="w-12 h-12 text-primary/30" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">Your cart is empty</h3>
              <p className="text-muted-foreground">Looks like you haven't added any wellness products yet.</p>
              <Button 
                variant="outline" 
                onClick={() => setIsOpen(false)}
                className="mt-4 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center bg-white p-4 rounded-xl border border-border/50 shadow-sm">
                  <div className="h-20 w-20 rounded-lg overflow-hidden bg-muted flex-shrink-0 border border-border/50">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-primary truncate">{item.name}</h4>
                    <p className="text-sm text-secondary font-bold">£{parseFloat(item.price).toFixed(2)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-border rounded-md bg-background">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-muted transition-colors"
                        >
                          <Minus className="w-3 h-3 text-primary" />
                        </button>
                        <span className="text-xs w-8 text-center font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-muted transition-colors"
                        >
                          <Plus className="w-3 h-3 text-primary" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-muted-foreground hover:text-destructive transition-colors hover:bg-destructive/10 rounded-full"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-white sticky bottom-0 z-10">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>£{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-primary pt-3 border-t border-border">
                <span>Total</span>
                <span>£{cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <Button 
              onClick={handleCheckout}
              className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg shadow-lg flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              Secure Checkout
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" />
              SSL Encrypted Payment
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
