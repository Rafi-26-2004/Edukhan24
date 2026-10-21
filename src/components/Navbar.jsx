import React, { useState, useEffect, useRef } from 'react';

export default function Navbar({ cartTotal = 485, cartCount = 3, onOpenCart, activeCategory, onSelectCategory }) {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    area: 'Indiranagar, BLR',
    pincode: '560038',
    fullAddress: 'Indiranagar Sector 2, 100ft Road, Bengaluru'
  });
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedSearchScope, setSelectedSearchScope] = useState('All dukhan');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const locationModalRef = useRef(null);
  const searchContainerRef = useRef(null);
  const megaMenuRef = useRef(null);

  const locations = [
    { area: 'Indiranagar, BLR', pincode: '560038', tag: 'Fast 15m', fullAddress: '100ft Road, Near Metro Station, Bengaluru' },
    { area: 'Koramangala, BLR', pincode: '560034', tag: 'Fast 18m', fullAddress: '4th Block, 80ft Road, Bengaluru' },
    { area: 'HSR Layout, BLR', pincode: '560102', tag: 'Fast 20m', fullAddress: 'Sector 3, 27th Main Road, Bengaluru' },
    { area: 'Bandra West, BOM', pincode: '400050', tag: 'Fast 20m', fullAddress: 'Hill Road, Near Mehboob Studio, Mumbai' },
    { area: 'South Extension, DEL', pincode: '110049', tag: 'Fast 20m', fullAddress: 'Part 2 Market, New Delhi' },
    { area: 'Cyber City, GGN', pincode: '122002', tag: 'Fast 15m', fullAddress: 'DLF Phase 2, Gurugram' }
  ];

  const searchScopes = [
    'All dukhan',
    'Fresh Groceries',
    'Local Kirana',
    'Restaurants',
    'Pharmacy',
    'Dairy & Bakery'
  ];

  const quickSearchSuggestions = [
    { text: 'Aashirvaad Shudh Chakki Atta 5kg', cat: 'Kirana', price: '₹245' },
    { text: 'Amul Taaza Milk 1L', cat: 'Dairy', price: '₹56' },
    { text: 'Farm Fresh Alphonso Mangoes', cat: 'Produce', price: '₹320' },
    { text: 'Meghana Chicken Dum Biryani', cat: 'Food', price: '₹299' },
    { text: 'Fortune Sunflower Oil 1L', cat: 'Kirana', price: '₹135' }
  ];

  const categories = [
    { id: 'all', label: 'All Stores', icon: null, badge: null },
    { 
      id: 'fresh-groceries', 
      label: '🥦 Fresh Groceries & Veggies', 
      megaTitle: 'Farm-Fresh Vegetables & Seasonal Fruits',
      columns: [
        {
          title: 'Daily Fresh Veggies',
          items: ['Desi Tomatoes & Hybrid', 'Nashik Red Onions', 'Mountain Potatoes', 'Fresh Ginger & Green Chillies', 'Cauliflower & Cabbage']
        },
        {
          title: 'Greens & Herbs',
          items: ['Fresh Coriander (Kothmir)', 'Palak / Spinach Bunch', 'Methi / Fenugreek Leaves', 'Mint / Pudina Bunch', 'Curry Leaves (Kadi Patta)']
        },
        {
          title: 'Orchard Fresh Fruits',
          items: ['Ratnagiri Alphonso Mangoes', 'Shimla Royal Apples', 'Robusta Bananas', 'Nagpur Sweet Oranges', 'Fresh Pomegranate Arils']
        }
      ]
    },
    { 
      id: 'local-kirana', 
      label: '🏪 Local Kirana & Supermarkets', 
      megaTitle: 'Neighborhood Kiranas & Monthly Ration Supplies',
      columns: [
        {
          title: 'Atta, Flours & Grains',
          items: ['Chakki Atta (Aashirvaad, Fortune)', 'Sona Masoori Raw Rice', 'Kolam & Basmati Rice', 'Maida, Sooji & Rava', 'Millets & Ragi Flour']
        },
        {
          title: 'Dals & Pulses',
          items: ['Toor Dal (Unpolished)', 'Moong Dal & Chana Dal', 'Urad Gota for Idli/Dosa', 'Kabuli Chana & Rajma', 'Green Moong & Masoor']
        },
        {
          title: 'Edible Oils & Ghee',
          items: ['Refined Sunflower Oil', 'Pure Mustard & Groundnut Oil', 'Amul / Nandini Pure Ghee', 'Cold-Pressed Sesame Oil', 'Olive Oil & Canola']
        }
      ]
    },
    { 
      id: 'restaurants', 
      label: '🍛 Food & Restaurants', 
      megaTitle: 'Hot Kitchen Meals & Darshini Snacks',
      columns: [
        {
          title: 'Biryanis & Meals',
          items: ['Hyderabadi Dum Biryani', 'Andhra Meals Thali', 'Paneer Butter Masala Combo', 'Dal Makhani & Butter Naan', 'Chicken Tikka Roll']
        },
        {
          title: 'South Indian Tiffins',
          items: ['Ghee Roast Masala Dosa', 'Steaming Idli Vada Combo', 'Khara Bath & Kesari Bath', 'Podi Thatte Idli', 'Traditional Filter Coffee']
        },
        {
          title: 'Evening Snacks & Street',
          items: ['Samosa & Chai Combo', 'Pani Puri & Chaat Boxes', 'Pav Bhaji with Extra Pav', 'Momos & Hakka Noodles', 'Masala Vada & Mirchi Bajji']
        }
      ]
    },
    { 
      id: 'pharmacy', 
      label: '💊 24x7 Pharmacy', 
      megaTitle: 'Licensed Neighborhood Chemists & Health Essentials',
      columns: [
        {
          title: 'Emergency OTC Care',
          items: ['Paracetamol & Pain Relief', 'Cold, Cough & Throat Lozenges', 'Antacids & Digestion Care', 'Bandages, Dettol & First Aid', 'ORS & Electrolyte Drinks']
        },
        {
          title: 'Chronic & Health Devices',
          items: ['Blood Pressure Monitors', 'Digital Glucose Test Strips', 'Pulse Oximeters & Thermometers', 'Ayurvedic Chyawanprash', 'Vitamins & Multivitamin Caps']
        },
        {
          title: 'Baby & Personal Care',
          items: ['Pampers / Huggies Diapers', 'Baby Wipes & Baby Soap', 'Cerelac & Formula Food', 'Hand Sanitizers & Masks', 'Oral Care & Skin Moisturisers']
        }
      ]
    },
    { 
      id: 'dairy-and-bakery', 
      label: '🥛 Dairy & Bakery', 
      megaTitle: 'Daily Milk, Artisan Breads & Farmstead Butter',
      columns: [
        {
          title: 'Daily Fresh Milk & Curd',
          items: ['Amul Taaza / Gold Milk', 'Nandini Blue / Orange Pouch', 'Mother Dairy Cow Milk', 'Fresh Set Curd / Dahi Pouch', 'Malai Paneer Cubes (200g)']
        },
        {
          title: 'Bakery & Morning Breads',
          items: ['Whole Wheat Brown Bread', 'White Sandwich Bread', 'Pav Buns (6-Pack)', 'French Croissants & Buns', 'Rusk & Khari Biscuits']
        },
        {
          title: 'Eggs & Table Butter',
          items: ['Farm White Eggs (6 / 12 pcs)', 'Organic Country Eggs (Brown)', 'Salted Butter (Amul, Nandini)', 'Cheese Slices & Mozzarella', 'Fresh Cooking Cream']
        }
      ]
    },
    { 
      id: 'meat-and-seafood', 
      label: '🥩 Meat & Seafood', 
      megaTitle: '100% Halal Cut, Antibiotic-Free Fresh Meats',
      columns: [
        {
          title: 'Fresh Tender Chicken',
          items: ['Curry Cut Skinless (500g)', 'Boneless Breast Fillets', 'Tender Chicken Drumsticks', 'Chicken Keema (Minced)', 'Whole Roaster Chicken']
        },
        {
          title: 'Mutton & Lamb',
          items: ['Fresh Curry Cut Mutton', 'Rich Bone-In Lamb Chops', 'Tender Mutton Keema', 'Soup Bones & Marrow', 'Liver & Organ Cuts']
        },
        {
          title: 'Fresh Catch Seafood',
          items: ['Freshwater Rohu & Katla', 'Seer Fish / Surmai Steaks', 'Cleaned Deveined Prawns', 'Pomfret (White / Black)', 'Basa Fillets']
        }
      ]
    },
    { 
      id: 'express-delivery', 
      label: '⚡ 15-Min Express', 
      isHighlight: true,
      badge: 'SPEED'
    }
  ];

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (locationModalRef.current && !locationModalRef.current.contains(event.target)) {
        setIsLocationOpen(false);
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setActiveMegaMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f9fb]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e2e8f0]">
      {/* Top Superfast Delivery Announcement Bar */}
      <div className="bg-[#005934] text-white py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-2 mx-auto">
            <span className="material-symbols-outlined text-base text-[#9ef5be]">bolt</span>
            <span>Superfast 15-20 min delivery across Bangalore, Mumbai & Delhi NCR | Free delivery on orders over ₹199</span>
          </div>
          <div className="hidden xl:flex items-center gap-4 text-xs font-medium text-[#9ef5be]">
            <span>📞 1800-DUKHAN-24</span>
            <span>•</span>
            <span>🟢 48 Dukans Open in Indiranagar</span>
          </div>
        </div>
      </div>

      {/* Main Bar: Logo, Location, Search, Actions */}
      <div className="h-20 max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Location Switcher */}
        <div className="flex items-center gap-5 flex-shrink-0">
          <a href="#" className="flex items-center gap-3 group">
            {/* Logo Emblem */}
            <div className="w-10 h-10 rounded-xl bg-[#005934] text-white flex flex-col items-center justify-center shadow-sm group-hover:bg-[#157347] transition-colors">
              <span className="text-[10px] font-bold text-[#9ef5be] tracking-wider leading-none">D24</span>
              <span className="material-symbols-outlined text-base -mt-0.5">storefront</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl tracking-tight font-extrabold text-[#005934] leading-none">
                dukhan24<span className="text-[#a83900] font-bold italic">.in</span>
              </span>
              <span className="text-[9px] font-bold text-[#6f7a71] tracking-widest uppercase mt-0.5">
                NEIGHBORHOOD MERCANTILE
              </span>
            </div>
          </a>

          {/* Location Selector Button */}
          <div className="relative" ref={locationModalRef}>
            <button 
              type="button"
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="hidden md:flex items-center gap-2 bg-[#eceef0] hover:bg-[#e0e3e5] px-3.5 py-1.5 rounded-lg text-left transition-colors border border-transparent hover:border-[#bec9bf]"
            >
              <span className="material-symbols-outlined text-[#a83900] text-xl">location_on</span>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-[#6f7a71] tracking-wider leading-none">
                  Deliver to
                </span>
                <span className="text-xs font-bold text-[#191c1e] truncate max-w-[170px] leading-tight mt-0.5">
                  {selectedLocation.area} - {selectedLocation.pincode}
                </span>
              </div>
              <span className="material-symbols-outlined text-[#6f7a71] text-base">expand_more</span>
            </button>

            {/* Location Selector Modal Dropdown */}
            {isLocationOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-[#e2e8f0] p-4 z-50">
                <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9] mb-3">
                  <h4 className="font-bold text-sm text-[#191c1e] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-[#005934]">my_location</span>
                    Choose Delivery Zone
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#9ef5be] text-[#002110]">
                    15-Min Radar
                  </span>
                </div>
                <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                  {locations.map((loc, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSelectedLocation(loc);
                        setIsLocationOpen(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-lg text-xs flex items-start justify-between gap-2 transition-colors ${
                        selectedLocation.pincode === loc.pincode 
                          ? 'bg-[#eaf1ed] text-[#005934] font-bold border border-[#9ef5be]' 
                          : 'hover:bg-[#f8fafc] text-[#191c1e]'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm">{loc.area}</div>
                        <div className="text-[11px] text-[#64748b] truncate max-w-[190px]">{loc.fullAddress}</div>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#ffdbcf] text-[#802a00] flex-shrink-0">
                        {loc.tag}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Global Smart Search Bar */}
        <div className="flex-1 max-w-2xl mx-2" ref={searchContainerRef}>
          <div className="relative flex items-center bg-white rounded-full shadow-[0_1px_3px_0_rgba(15,23,42,0.06)] border border-[#e2e8f0] focus-within:border-[#005934] focus-within:ring-2 focus-within:ring-[#9ef5be]/40 px-3 py-1.5 transition-all">
            {/* Scope dropdown pill */}
            <div className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                className="flex items-center gap-1 bg-[#f2f4f6] hover:bg-[#e6e8ea] px-2.5 py-1 rounded-full text-xs font-semibold text-[#3f4941] mr-2 transition-colors"
              >
                <span>{selectedSearchScope}</span>
                <span className="material-symbols-outlined text-xs">keyboard_arrow_down</span>
              </button>

              {isCategoryDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-[#e2e8f0] py-1 z-50 text-xs">
                  {searchScopes.map((scope, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setSelectedSearchScope(scope);
                        setIsCategoryDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 hover:bg-[#f8fafc] text-[#191c1e]"
                    >
                      {scope}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="material-symbols-outlined text-[#6f7a71] text-xl mr-2">search</span>
            
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder='Search "fresh cow milk", "biryani", "atta", or "local shop"...'
              className="w-full bg-transparent text-sm text-[#191c1e] placeholder:text-[#6f7a71] focus:outline-none"
            />

            {searchQuery && (
              <button 
                type="button" 
                onClick={() => setSearchQuery('')}
                className="text-[#6f7a71] hover:text-[#191c1e] p-1 text-xs"
              >
                ✕
              </button>
            )}

            <kbd className="hidden md:inline-flex items-center gap-0.5 bg-[#eceef0] px-2 py-0.5 rounded text-[#6f7a71] text-[10px] font-bold">
              ⌘K
            </kbd>

            {/* Live Search Suggestions Popover */}
            {isSearchFocused && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#e2e8f0] p-3 z-50">
                <div className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider mb-2 px-2">
                  Popular in {selectedLocation.area.split(',')[0]}
                </div>
                <div className="space-y-1">
                  {quickSearchSuggestions.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSearchQuery(item.text);
                        setIsSearchFocused(false);
                      }}
                      className="w-full text-left p-2 rounded-lg hover:bg-[#f8fafc] text-xs flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#64748b] group-hover:text-[#005934]">
                          trending_up
                        </span>
                        <span className="text-[#191c1e] font-medium">{item.text}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#f1f5f9] text-[#475569]">
                          {item.cat}
                        </span>
                        <span className="font-bold text-[#005934]">{item.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Support, Merchant Onboarding, Profile & Cart */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="hidden lg:flex items-center gap-4 text-xs font-semibold text-[#3f4941]">
            <a href="#merchant" className="hover:text-[#005934] transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-base">store</span>
              <span>Open Dukhan</span>
            </a>
            <a href="#offers" className="hover:text-[#005934] transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-base text-[#a83900]">local_offer</span>
              <span>Offers & Deals</span>
            </a>
            <a href="#support" className="hover:text-[#005934] transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-base">support_agent</span>
              <span>24/7 Support</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* User Profile */}
            <a href="#profile" className="flex items-center gap-2 p-1 rounded-full hover:bg-[#eceef0] transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#157347] text-white flex items-center justify-center font-bold text-xs">
                R
              </div>
              <span className="hidden sm:inline text-xs font-bold text-[#191c1e]">Hi, Rahul</span>
            </a>

            {/* Cart Button */}
            <button
              type="button"
              onClick={onOpenCart}
              className="flex items-center gap-2 bg-[#005934] px-3.5 py-2 rounded-full text-white hover:bg-[#157347] transition-all shadow-sm group"
            >
              <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">
                shopping_cart
              </span>
              <span className="text-xs font-extrabold">₹{cartTotal}</span>
              <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[11px] font-bold">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#191c1e] hover:bg-[#eceef0] rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Categories & Mega-Menu Navigation Bar */}
      <div className="bg-white shadow-[0_1px_4px_rgba(0,0,0,0.03)] border-t border-[#f1f5f9] relative" ref={megaMenuRef}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <nav className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const hasMega = !!cat.columns;
              const isHovered = activeMegaMenu === cat.id;

              return (
                <div key={cat.id} className="relative flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectCategory(cat.id);
                      if (hasMega) {
                        setActiveMegaMenu(isHovered ? null : cat.id);
                      } else {
                        setActiveMegaMenu(null);
                      }
                    }}
                    onMouseEnter={() => {
                      if (hasMega) setActiveMegaMenu(cat.id);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      cat.isHighlight
                        ? 'text-[#a83900] bg-[#ffdbcf] font-bold hover:bg-[#ffb59a]'
                        : isActive
                        ? 'text-[#005934] font-extrabold bg-[#eaf1ed] shadow-xs'
                        : 'text-[#3f4941] hover:text-[#005934] hover:bg-[#f2f4f6]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    {hasMega && (
                      <span className="material-symbols-outlined text-xs opacity-60">
                        {isHovered ? 'expand_less' : 'keyboard_arrow_down'}
                      </span>
                    )}
                    {cat.badge && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#fc6018] text-white font-extrabold uppercase">
                        {cat.badge}
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Dynamic Mega-Menu Dropdown Panel */}
        {activeMegaMenu && (
          <div 
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-b border-[#e2e8f0] py-6 z-40 animate-in fade-in slide-in-from-top-1 duration-150"
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
              {categories
                .filter((cat) => cat.id === activeMegaMenu && cat.columns)
                .map((cat) => (
                  <div key={cat.id}>
                    <div className="flex items-center justify-between pb-4 border-b border-[#f1f5f9] mb-5">
                      <div>
                        <span className="text-[10px] font-bold text-[#a83900] uppercase tracking-wider">
                          Dukhan24 Neighborhood Aisle
                        </span>
                        <h3 className="text-base font-extrabold text-[#005934]">{cat.megaTitle}</h3>
                      </div>
                      <button 
                        type="button" 
                        onClick={() => {
                          onSelectCategory(cat.id);
                          setActiveMegaMenu(null);
                        }}
                        className="text-xs font-bold text-[#005934] hover:underline flex items-center gap-1"
                      >
                        <span>View all in {cat.label.replace(/^[^\s]+\s*/, '')}</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {cat.columns.map((col, cIdx) => (
                        <div key={cIdx} className="space-y-2.5">
                          <h4 className="text-xs font-bold text-[#191c1e] uppercase tracking-wider border-b border-[#f1f5f9] pb-1">
                            {col.title}
                          </h4>
                          <ul className="space-y-1.5">
                            {col.items.map((item, iIdx) => (
                              <li key={iIdx}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSearchQuery(item);
                                    setActiveMegaMenu(null);
                                  }}
                                  className="text-xs text-[#64748b] hover:text-[#005934] hover:font-bold transition-all text-left w-full"
                                >
                                  {item}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Promo Banner inside Mega Menu */}
                      <div className="bg-[#eaf1ed] rounded-xl p-4 flex flex-col justify-between border border-[#9ef5be]/50">
                        <div>
                          <span className="text-[10px] font-bold text-[#005934] uppercase tracking-wider">
                            ⚡ 15-Min Radar Promise
                          </span>
                          <h5 className="font-extrabold text-sm text-[#002110] mt-1 mb-2">
                            Fresh From Real Certified Stalls
                          </h5>
                          <p className="text-[11px] text-[#3f4941] leading-relaxed">
                            No warehouse delays. Packed by your local shopkeeper and dispatched instantly.
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-[#9ef5be]/40 text-xs font-bold text-[#005934]">
                          Combined delivery enabled
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e2e8f0] p-4 shadow-xl max-h-[85vh] overflow-y-auto">
          {/* Mobile Location Selector */}
          <div className="bg-[#eceef0] p-3 rounded-lg mb-4">
            <span className="text-[10px] font-bold text-[#6f7a71] uppercase">Delivering To</span>
            <div className="font-bold text-sm text-[#191c1e] mt-0.5">
              {selectedLocation.area} ({selectedLocation.pincode})
            </div>
            <div className="text-xs text-[#64748b]">{selectedLocation.fullAddress}</div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <a href="#merchant" className="p-2.5 bg-[#f8fafc] rounded-lg text-xs font-bold text-[#005934] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">store</span>
              <span>Open Dukhan</span>
            </a>
            <a href="#offers" className="p-2.5 bg-[#ffdbcf] rounded-lg text-xs font-bold text-[#802a00] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">local_offer</span>
              <span>Offers & Deals</span>
            </a>
          </div>

          {/* Mobile Categories */}
          <h4 className="text-xs font-bold text-[#6f7a71] uppercase tracking-wider mb-2">Shop Aisles</h4>
          <ul className="space-y-1 mb-4">
            {categories.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory(c.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-lg text-xs font-semibold flex items-center justify-between ${
                    activeCategory === c.id ? 'bg-[#005934] text-white font-bold' : 'hover:bg-[#f8fafc] text-[#191c1e]'
                  }`}
                >
                  <span>{c.label}</span>
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
