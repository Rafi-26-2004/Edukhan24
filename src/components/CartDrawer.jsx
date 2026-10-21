import React from 'react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 199 || subtotal === 0 ? 0 : 29;
  const handlingFee = subtotal > 0 ? 5 : 0;
  const total = subtotal + deliveryFee + handlingFee;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-200" onClick={onClose}>
      <aside 
        className="w-full max-w-md h-full bg-white shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div>
          <div className="p-4 border-b border-[#e2e8f0] flex items-center justify-between bg-[#f2f4f6]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#005934]">shopping_bag</span>
              <div>
                <h3 className="font-extrabold text-sm text-[#191c1e]">Your Dukhan Basket</h3>
                <span className="text-[11px] text-[#64748b]">Fulfillment in 15-20 mins</span>
              </div>
            </div>
            <button 
              type="button" 
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white text-[#6f7a71] hover:text-[#191c1e] transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Free Delivery Bar */}
          <div className="p-3 bg-[#eaf1ed] border-b border-[#9ef5be]/40 text-xs">
            {subtotal >= 199 ? (
              <span className="text-[#005934] font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">check_circle</span>
                Free neighborhood delivery unlocked!
              </span>
            ) : (
              <div className="space-y-1.5">
                <div className="flex justify-between text-[#3f4941]">
                  <span>Add <strong>₹{199 - subtotal}</strong> more for free delivery</span>
                  <span className="font-bold">₹{subtotal}/₹199</span>
                </div>
                <div className="w-full h-1.5 bg-white rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#005934] transition-all"
                    style={{ width: `${Math.min(100, (subtotal / 199) * 100)}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-[#f1f5f9]">
          {cartItems.length === 0 ? (
            <div className="py-20 text-center">
              <span className="material-symbols-outlined text-5xl text-[#bec9bf] mb-2">production_quantity_limits</span>
              <h4 className="font-bold text-sm text-[#191c1e] mb-1">Your cart is empty</h4>
              <p className="text-xs text-[#64748b] mb-4">Add daily essentials, veggies, or hot meals from nearby dukans.</p>
              <button 
                type="button" 
                onClick={onClose}
                className="px-4 py-2 bg-[#005934] text-white text-xs font-bold rounded-lg"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="py-3 flex items-center justify-between gap-3">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-lg object-contain bg-[#f8fafc] p-1 border border-[#e2e8f0]"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="text-xs font-bold text-[#191c1e] truncate">{item.name}</h5>
                  <div className="text-[11px] text-[#64748b]">{item.weight || item.restaurant || '1 unit'}</div>
                  <div className="text-xs font-extrabold text-[#005934] mt-0.5">₹{item.price}</div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-[#f2f4f6] rounded-lg border border-[#e2e8f0] px-1 py-0.5">
                    <button 
                      type="button" 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-5 h-5 flex items-center justify-center text-[#191c1e] font-bold text-sm"
                    >
                      -
                    </button>
                    <span className="w-5 text-center text-xs font-bold">{item.quantity}</span>
                    <button 
                      type="button" 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-5 h-5 flex items-center justify-center text-[#005934] font-bold text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout Summary Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 bg-[#f8fafc] border-t border-[#e2e8f0] space-y-3">
            <div className="space-y-1.5 text-xs text-[#3f4941]">
              <div className="flex justify-between">
                <span>Item Subtotal</span>
                <span className="font-bold text-[#191c1e]">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Partner Fee</span>
                <span>{deliveryFee === 0 ? <strong className="text-[#005934]">FREE</strong> : `₹${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Handling &amp; Packaging</span>
                <span>₹{handlingFee}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#e2e8f0] text-sm font-extrabold text-[#191c1e]">
                <span>To Pay</span>
                <span className="text-[#005934]">₹{total}</span>
              </div>
            </div>

            <button 
              type="button" 
              className="w-full py-3 rounded-xl bg-[#005934] hover:bg-[#157347] text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-between px-4"
            >
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-[#9ef5be] leading-none">Total: ₹{total}</div>
                <div className="text-xs font-bold">Proceed to Pay via UPI / COD</div>
              </div>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
