import React, { useState } from 'react';

const groceryItems = [
  {
    id: 'gro-1',
    name: 'Aashirvaad Shudh Chakki Atta',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsAMue12CCHyRLwrzcN6GH-T-DZIHJLUdfk9cEB3J1Ukgi0xy3WRiYZ8nr2DY0TbAkHsZ5qlZkLMS6ronOvWb6mPFv4Kzc93jDmCoB-7khIHcd9juZY0F6x-L8A5CSBov8YbcZQ77cwvHcdhnOE0nzazK2Pg-haHs1oS988_RjREdLFdy2NfOWRVPxXHnC1KK1gotbal2ay1o3zv0mqwt0RrCgUHq3EURtsjYlNE7iARchuTx7XmcYKg',
    discount: '11% OFF',
    discountClass: 'bg-[#ffdbcf] text-[#a83900]',
    store: 'Sri Venkateshwara',
    weight: '5 kg',
    price: 245,
    mrp: 275,
    category: 'atta'
  },
  {
    id: 'gro-2',
    name: 'Amul Taaza Homogenised Toned Milk',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZWQ73NSwdf0dzgqONMmrDcq3k-1HRuvvBm5S_04ab-aqeKIYHx-5MjiEKdd8IsRrj6Wx6KyK6IY0bW7pXPQWem4wkSr4alJvdsJxScy3LhoxEevO5A505qCijjSaTEuNfVLxy351xhgvJ2OsR18GapCsLYH71iRJeVNqAf_vts2OCn1QHknLtrEN7um-1OoJAZf6XMXJK-yAK2YoNYfeH8ar3BjX5FcEfa0kdh6u-RJivXuBRtg7SFg',
    discount: 'DAILY FRESH',
    discountClass: 'bg-[#b0f1c7] text-[#002111]',
    store: "Namdhari's",
    weight: '1 L',
    price: 56,
    mrp: null,
    category: 'dairy'
  },
  {
    id: 'gro-3',
    name: 'Fresh Farm Alphonso Mangoes (GI Tagged)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLMu_g9HqRvHrk22saunTQL0U1eu68eW3xMxWYaqgqgtlCM82wS005bzcEnm4DXuPd9zUfyMrgQEKfQx0Qc-kUm1gr5c0Wpobv1OWkDrnCqTxojBMXRWdzbX4T0l52eAt-eucUaaSxT7Q8acdhW7oQyYyGgArZHxjWS2pAAlv4K6MwYfBPkkaIdyiaRw0beXxDQUJLDIv6H-eN4cO0YtxTDznUtJY0gyNIbo3t9bQDsaq1ww9x2Ju-hA',
    discount: '20% OFF',
    discountClass: 'bg-[#ffdbcf] text-[#a83900]',
    store: "Namdhari's Fresh",
    weight: '1 kg (3-4 pcs)',
    price: 320,
    mrp: 399,
    category: 'fruits'
  },
  {
    id: 'gro-4',
    name: 'Fortune Sunlite Refined Sunflower Oil',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdIlk5ik9PNoLHChIGYlwM_TvFq2O1bEYnunsXKZmLiFVw0ivHSBuEZZUgQyjhWPPFiCs4u4QxII55iyOKJCC-drxz0x2ZVycY8Hn0cAZsDeihhnDP5ow1mRjP3nCx5X1U8e2Yo97Zpkhakt0zbKClPWKNJDvw_J4tLovQCGN3ymVwRhZobC_UxxSkNak31O8tvfy41mVOOaXMttufIlevIt9OXEQmieHHRP1NPri-GoYnWxb4tAlV8g',
    discount: '13% OFF',
    discountClass: 'bg-[#ffdbcf] text-[#a83900]',
    store: 'Sri Venkateshwara',
    weight: '1 L Pouch',
    price: 135,
    mrp: 155,
    category: 'oil'
  },
  {
    id: 'gro-5',
    name: 'Britannia 100% Whole Wheat Brown Bread',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcNbVuTJTru6FGh939cN6-EpFUHL0W4_0o1WJGaTwyDQj8RVE5WWKFadLInAe0I1scEzlkpLjowzzOaHZK_1AaUPQCmvV6uY9b-GKvmk7d8Ppd5sL6Ool4Y0i3T3TL-9Y3cMyUoVkqJKVniFT_v4Vd6nLlQk0eXqzVOpUMnsctRorWnJdbtbmva7Jv-blZTTSo3EIsjXusVBJdfp74g_D7v9rlhidPF8KSgSNoZOxys2k21hWzvTXjLA',
    discount: 'BAKERY',
    discountClass: 'bg-[#eceef0] text-[#191c1e]',
    store: 'Modern Daily Dukhan',
    weight: '400 g',
    price: 45,
    mrp: null,
    category: 'dairy'
  },
  {
    id: 'gro-6',
    name: 'Farm Fresh Crisp Red Onions (Nashik Medium)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA29jcgv95T-kv72yhJTxBD14Gs3TCl9lUS0mS6yaOaFzyNl8z0rNLtFRwnObKjhoMGCeGbGIuQASdSF6dTyrnBKN7teK6W55OLvYZFhAaqP22X59v99hc_rHD5WOU2b2kYQWUrGtrWbdAV4rEv4ATBi8sw6d5uMo5RehLplrYyOoIrXGVvWcHpRCUMroN6tG_1MfwTte7OVxEqNzulyN0jJPYOH1aiPPxWIIWU_9-VH4uTHYuvLan7dg',
    discount: '28% OFF',
    discountClass: 'bg-[#ffdbcf] text-[#a83900]',
    store: 'Hoskote Mandi Direct',
    weight: '2 kg Net',
    price: 58,
    mrp: 80,
    category: 'vegetables'
  }
];

export default function TrendingGroceries({ onAddToCart, cartQuantities = {} }) {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Staples' },
    { id: 'atta', label: 'Atta & Dal' },
    { id: 'dairy', label: 'Dairy & Bread' },
    { id: 'produce', label: 'Fruits & Veg' }
  ];

  const filteredItems = groceryItems.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'atta') return item.category === 'atta' || item.category === 'oil';
    if (activeTab === 'dairy') return item.category === 'dairy';
    if (activeTab === 'produce') return item.category === 'fruits' || item.category === 'vegetables';
    return true;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 w-full py-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-[#005934] font-extrabold">
            Daily Pantry Restock
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e]">
            Trending Grocery Essentials
          </h2>
          <p className="text-xs sm:text-sm text-[#3f4941]">
            Guaranteed lowest local market prices with 15-minute fulfillment
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#005934] text-white shadow-xs'
                  : 'bg-[#eceef0] text-[#3f4941] hover:bg-[#e0e3e5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards Grid: 6 Real SKUs */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {filteredItems.map((item) => {
          const qty = cartQuantities[item.id] || 0;

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group border border-[#e2e8f0]"
            >
              <div>
                <div className="relative w-full aspect-square bg-[#f2f4f6] rounded-lg mb-3 overflow-hidden flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform"
                  />
                  <span className={`absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-extrabold tracking-wide ${item.discountClass}`}>
                    {item.discount}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#005934] inline-block"></span>
                  <span className="text-[10px] text-[#6f7a71] truncate">{item.store}</span>
                </div>

                <h4 className="text-xs font-bold text-[#191c1e] line-clamp-2 mb-1 leading-snug">
                  {item.name}
                </h4>
                <span className="inline-block px-2 py-0.5 rounded bg-[#eceef0] text-[#3f4941] text-[10px] font-semibold mb-3">
                  {item.weight}
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-sm font-extrabold text-[#191c1e]">₹{item.price}</span>
                  {item.mrp && (
                    <span className="text-[11px] text-[#6f7a71] line-through">₹{item.mrp}</span>
                  )}
                </div>

                {qty > 0 ? (
                  <div className="w-full py-1 rounded-lg bg-[#005934] text-white text-xs font-bold flex items-center justify-between px-2">
                    <button
                      type="button"
                      onClick={() => onAddToCart(item, -1)}
                      className="hover:bg-[#157347] rounded p-0.5 text-base leading-none"
                    >
                      -
                    </button>
                    <span>{qty}</span>
                    <button
                      type="button"
                      onClick={() => onAddToCart(item, 1)}
                      className="hover:bg-[#157347] rounded p-0.5 text-base leading-none"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => onAddToCart(item, 1)}
                    className="w-full py-1.5 rounded-lg bg-[#eceef0] hover:bg-[#005934] hover:text-white text-[#005934] text-xs font-bold transition-colors flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">add</span> ADD
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
