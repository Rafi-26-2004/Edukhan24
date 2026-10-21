import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StoresNearYou from './components/StoresNearYou';
import TrendingGroceries from './components/TrendingGroceries';
import HotFoodSection from './components/HotFoodSection';
import HyperlocalPromise from './components/HyperlocalPromise';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Initial cart items matching reference design (Total = ₹485, 3 line items)
  const [cartItems, setCartItems] = useState([
    {
      id: 'gro-1',
      name: 'Aashirvaad Shudh Chakki Atta',
      weight: '5 kg',
      price: 245,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsAMue12CCHyRLwrzcN6GH-T-DZIHJLUdfk9cEB3J1Ukgi0xy3WRiYZ8nr2DY0TbAkHsZ5qlZkLMS6ronOvWb6mPFv4Kzc93jDmCoB-7khIHcd9juZY0F6x-L8A5CSBov8YbcZQ77cwvHcdhnOE0nzazK2Pg-haHs1oS988_RjREdLFdy2NfOWRVPxXHnC1KK1gotbal2ay1o3zv0mqwt0RrCgUHq3EURtsjYlNE7iARchuTx7XmcYKg'
    },
    {
      id: 'gro-2',
      name: 'Amul Taaza Homogenised Toned Milk',
      weight: '1 L',
      price: 56,
      quantity: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZWQ73NSwdf0dzgqONMmrDcq3k-1HRuvvBm5S_04ab-aqeKIYHx-5MjiEKdd8IsRrj6Wx6KyK6IY0bW7pXPQWem4wkSr4alJvdsJxScy3LhoxEevO5A505qCijjSaTEuNfVLxy351xhgvJ2OsR18GapCsLYH71iRJeVNqAf_vts2OCn1QHknLtrEN7um-1OoJAZf6XMXJK-yAK2YoNYfeH8ar3BjX5FcEfa0kdh6u-RJivXuBRtg7SFg'
    },
    {
      id: 'gro-4',
      name: 'Fortune Sunlite Refined Sunflower Oil',
      weight: '1 L Pouch',
      price: 128,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdIlk5ik9PNoLHChIGYlwM_TvFq2O1bEYnunsXKZmLiFVw0ivHSBuEZZUgQyjhWPPFiCs4u4QxII55iyOKJCC-drxz0x2ZVycY8Hn0cAZsDeihhnDP5ow1mRjP3nCx5X1U8e2Yo97Zpkhakt0zbKClPWKNJDvw_J4tLovQCGN3ymVwRhZobC_UxxSkNak31O8tvfy41mVOOaXMttufIlevIt9OXEQmieHHRP1NPri-GoYnWxb4tAlV8g'
    }
  ]);

  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const cartCount = cartItems.length;

  // Build a map of item.id -> quantity for quick button display
  const cartQuantities = cartItems.reduce((acc, item) => {
    acc[item.id] = item.quantity;
    return acc;
  }, {});

  const handleAddToCart = (product, delta = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === product.id);
      if (existing) {
        const newQty = existing.quantity + delta;
        if (newQty <= 0) {
          return prevItems.filter((i) => i.id !== product.id);
        }
        return prevItems.map((i) =>
          i.id === product.id ? { ...i, quantity: newQty } : i
        );
      } else if (delta > 0) {
        return [
          ...prevItems,
          {
            id: product.id,
            name: product.name,
            weight: product.weight || product.restaurant,
            price: product.price,
            quantity: delta,
            image: product.image
          }
        ];
      }
      return prevItems;
    });

    if (delta > 0) {
      setToastMessage(`Added "${product.name}" to basket`);
      setTimeout(() => setToastMessage(null), 2000);
    }
  };

  const handleUpdateQuantity = (id, delta) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClaimVoucher = () => {
    setToastMessage('🎉 Voucher DUKHAN100 applied! ₹100 cashback active.');
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] flex flex-col font-sans antialiased selection:bg-[#9ef5be] selection:text-[#002110]">
      {/* Enhanced Sticky Navbar with Mega Menu, Location Selector & Search */}
      <Navbar
        cartTotal={cartTotal}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeCategory={activeCategory}
        onSelectCategory={(catId) => setActiveCategory(catId)}
      />

      {/* Main Content Area (Offset by header height) */}
      <main className="w-full pt-44 bg-[#f7f9fb] flex-1">
        {/* Hero Section: Neighborhood Radar Alert, 4 Quick Service Cards & Split Showcase */}
        <Hero 
          onSelectService={(catId) => setActiveCategory(catId)}
          onClaimVoucher={handleClaimVoucher}
        />

        {/* Section 3: Stores Near You (Indiranagar Radar) */}
        <StoresNearYou location="Indiranagar" />

        {/* Section 4: Trending Everyday Grocery Essentials Grid */}
        <TrendingGroceries 
          onAddToCart={handleAddToCart}
          cartQuantities={cartQuantities}
        />

        {/* Section 5: Craving Something Hot? Top Restaurant Dishes */}
        <HotFoodSection 
          onAddToCart={handleAddToCart}
          cartQuantities={cartQuantities}
        />

        {/* Section 6: Why Shop Local on dukhan24.in & Live Activity Ticker */}
        <HyperlocalPromise />
      </main>

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#005934] text-white px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2 text-xs font-bold animate-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#9ef5be] animate-pulse"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
