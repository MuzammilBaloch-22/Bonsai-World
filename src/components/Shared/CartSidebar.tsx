import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const CartSidebar = ({ isOpen, onClose, onCheckout }: CartSidebarProps) => {
  const { cart, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckout = () => {
    onCheckout();
    scrollToSection('#contact');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-lg bg-background shadow-2xl z-[70] flex flex-col border-l border-border"
          >
            {/* Header */}
            <div className="relative p-6 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-semibold text-foreground">
                      Your Cart
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {cartCount} {cartCount === 1 ? 'item' : 'items'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-muted rounded-full transition-colors group"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                  <div className="w-24 h-24 bg-muted/30 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-sm">
                    Discover our beautiful bonsai collection and add some zen to your space
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      scrollToSection('#catalog');
                    }}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    Browse Collection
                  </button>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  {cart.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative bg-muted/20 hover:bg-muted/40 rounded-xl p-4 transition-all duration-300 border border-transparent hover:border-border"
                    >
                      {/* Image */}
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-muted">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif font-medium text-foreground mb-1 truncate">
                            {item.name}
                          </h3>
                          <p className="text-lg font-bold text-primary mb-3">
                            ${item.price.toFixed(2)}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 bg-background rounded-full p-1 border border-border">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-2 hover:bg-muted rounded-full transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-4 h-4 text-muted-foreground" />
                              </button>
                              <span className="w-12 text-center text-sm font-semibold text-foreground">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-2 hover:bg-muted rounded-full transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-4 h-4 text-muted-foreground" />
                              </button>
                            </div>

                            {/* Subtotal */}
                            <div className="text-right">
                              <p className="text-sm font-semibold text-foreground">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="absolute top-2 right-2 p-2 opacity-0 group-hover:opacity-100 hover:bg-destructive/10 hover:text-destructive rounded-full transition-all duration-200"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-border bg-gradient-to-t from-muted/20 to-transparent">
                <div className="p-6 space-y-4">
                  {/* Shipping Info */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground font-medium">
                      {cartTotal >= 100 ? 'Free' : '$15.00'}
                    </span>
                  </div>
                  
                  {cartTotal < 100 && (
                    <div className="text-xs text-muted-foreground bg-secondary/10 p-3 rounded-lg">
                      💡 Add ${(100 - cartTotal).toFixed(2)} more for free shipping!
                    </div>
                  )}

                  {/* Total */}
                  <div className="flex items-center justify-between text-xl font-bold border-t border-border pt-4">
                    <span className="text-foreground">Total:</span>
                    <span className="text-primary">
                      ${(cartTotal + (cartTotal >= 100 ? 0 : 15)).toFixed(2)}
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                    className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Proceed to Checkout
                  </motion.button>

                  <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <span>🔒 Secure checkout</span>
                    <span>•</span>
                    <span>🚚 Fast delivery</span>
                    <span>•</span>
                    <span>💚 Eco-friendly</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;