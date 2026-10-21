import React, { useState } from 'react';

export default function Hero({ onSelectService, onClaimVoucher }) {
  const [claimed, setClaimed] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'Fastest (<15m)', 'Pure Veg', 'Certified Kirana', 'Rating 4.5+', 'Free Delivery'];

  return (
    <div className="w-full">
      {/* Dynamic Top Banner / Neighborhood Radar Alert */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full pt-4 pb-2">
        <div className="bg-[#f2f4f6] rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 shadow-sm border border-[#e2e8f0]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#ffdbcf] text-[#a83900] font-bold">
              <span className="material-symbols-outlined text-lg">near_me</span>
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold text-[#191c1e]">Indiranagar Sector 2 Radar</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#b0f1c7] text-[#002111]">
                  48 Dukans Open Now
                </span>
              </div>
              <p className="text-xs text-[#3f4941] mt-0.5">
                Combined checkout enabled • Free delivery from your trusted local kiranas &amp; pharmacies
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg shadow-sm border border-[#e2e8f0]">
              <span className="material-symbols-outlined text-sm text-[#005934]">timer</span>
              <span className="text-xs text-[#191c1e]">Average fulfillment: <strong className="text-[#005934]">16 mins</strong></span>
            </div>

            {/* Filter Stores Trigger */}
            <div className="relative">
              <button 
                type="button"
                onClick={() => setFilterModalOpen(!filterModalOpen)}
                className="px-3.5 py-1.5 rounded-lg bg-[#eceef0] hover:bg-[#e0e3e5] transition-colors text-xs font-bold text-[#191c1e] flex items-center gap-1.5 border border-[#bec9bf]/40"
              >
                <span>Filter Stores</span>
                <span className="material-symbols-outlined text-sm">tune</span>
              </button>

              {filterModalOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#e2e8f0] p-3 z-30">
                  <h5 className="text-xs font-bold text-[#191c1e] mb-2">Filter Radar by:</h5>
                  <div className="space-y-1">
                    {filterOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setActiveFilter(opt);
                          setFilterModalOpen(false);
                        }}
                        className={`w-full text-left p-2 rounded-lg text-xs flex items-center justify-between ${
                          activeFilter === opt ? 'bg-[#eaf1ed] text-[#005934] font-bold' : 'hover:bg-[#f8fafc] text-[#191c1e]'
                        }`}
                      >
                        <span>{opt}</span>
                        {activeFilter === opt && <span className="material-symbols-outlined text-sm">check</span>}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: Quick Service Selector Cards (4 Pillars) */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 w-full py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Instant Groceries */}
          <div 
            onClick={() => onSelectService && onSelectService('fresh-groceries')}
            className="group relative overflow-hidden bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-[#e2e8f0] cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#b0f1c7] flex items-center justify-center text-[#005934] group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">local_mall</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#ffdbcf] text-[#a83900] text-[10px] font-extrabold uppercase tracking-wide">
                15-MIN EXPRESS
              </span>
            </div>
            <h3 className="text-base font-extrabold text-[#191c1e] mb-1">Instant Groceries</h3>
            <p className="text-xs text-[#3f4941] mb-4 leading-relaxed">
              Daily milk, fresh bread, butter, eggs &amp; breakfast staples at flat 20% off.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#005934]">Explore 2,400+ items</span>
              <span className="material-symbols-outlined text-[#005934] text-base group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Card 2: Neighborhood Kirana */}
          <div 
            onClick={() => onSelectService && onSelectService('local-kirana')}
            className="group relative overflow-hidden bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-[#e2e8f0] cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffdbcf] flex items-center justify-center text-[#a83900] group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">storefront</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#eceef0] text-[#3f4941] text-[10px] font-extrabold uppercase tracking-wide">
                MONTHLY RATION
              </span>
            </div>
            <h3 className="text-base font-extrabold text-[#191c1e] mb-1">Neighborhood Kirana</h3>
            <p className="text-xs text-[#3f4941] mb-4 leading-relaxed">
              Order monthly pulses, authentic spices, flours &amp; oils from your trusted corner dukandar.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#a83900]">18 Corner Dukans</span>
              <span className="material-symbols-outlined text-[#a83900] text-base group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Card 3: Hot Food & Kitchens */}
          <div 
            onClick={() => onSelectService && onSelectService('restaurants')}
            className="group relative overflow-hidden bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-[#e2e8f0] cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#e6e8ea] flex items-center justify-center text-[#191c1e] group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">restaurant</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#ba1a1a] text-[10px] font-extrabold uppercase tracking-wide">
                FRESH &amp; HOT
              </span>
            </div>
            <h3 className="text-base font-extrabold text-[#191c1e] mb-1">Hot Food &amp; Dining</h3>
            <p className="text-xs text-[#3f4941] mb-4 leading-relaxed">
              Legendary Hyderabadi biryani, filter coffee combos, and neighborhood darshini snacks.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#005934]">Order from ₹149</span>
              <span className="material-symbols-outlined text-[#005934] text-base group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Card 4: 24x7 Express Chemist */}
          <div 
            onClick={() => onSelectService && onSelectService('pharmacy')}
            className="group relative overflow-hidden bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-[#e2e8f0] cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#9ef5be] flex items-center justify-center text-[#005934] group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">medication</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#9ef5be] text-[#002110] text-[10px] font-extrabold uppercase tracking-wide">
                24/7 DISPATCH
              </span>
            </div>
            <h3 className="text-base font-extrabold text-[#191c1e] mb-1">Express Pharmacy</h3>
            <p className="text-xs text-[#3f4941] mb-4 leading-relaxed">
              Emergency OTC care, prescription upload, diabetic testing &amp; baby supplies in 12 mins.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#005934]">Upload Rx Now</span>
              <span className="material-symbols-outlined text-[#005934] text-base group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Interactive Promotional Banner Carousel / Split Showcase */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 w-full py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Banner 1: Super Saver Tuesday (7 cols) */}
          <div className="lg:col-span-7 bg-[#005934] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-md">
            <div className="relative z-10 max-w-md">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[10px] font-extrabold uppercase tracking-wide text-[#9ef5be] mb-3">
                <span className="material-symbols-outlined text-sm">agriculture</span>
                Direct Farm Sourcing
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                Super Saver Tuesday:<br />Farm Veggies from ₹9/kg
              </h2>
              <p className="text-xs sm:text-sm text-white/90 mb-6 leading-relaxed">
                Harvested at dawn from Hoskote &amp; Nelamangala farms, stocked straight into local stalls by 8 AM. Crisp greens, desi tomatoes &amp; native root crops.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a 
                  href="#groceries"
                  className="px-6 py-2.5 rounded-lg bg-[#a83900] hover:bg-[#fc6018] text-white text-xs sm:text-sm font-bold shadow-sm transition-all inline-flex items-center gap-2"
                >
                  <span>Shop Farm Fresh</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
                <span className="text-xs text-white/80">Offer valid till 11:00 PM today</span>
              </div>
            </div>

            <div className="absolute -right-12 -bottom-10 w-72 h-72 rounded-full bg-[#157347]/40 blur-2xl pointer-events-none"></div>
            <div className="absolute right-0 bottom-0 top-0 w-2/5 hidden sm:block pointer-events-none">
              <img 
                className="w-full h-full object-cover object-left opacity-90 rounded-r-2xl" 
                alt="Fresh farm produce" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_4jEvWUxbJZx_eSEi7JLK7pZuSSOJKEn3K-y3HVHWenB5UabFsjf6roADefgyzK-N_IxfdT8OWuANBHL8HGIe4M3kgMqwOYVrj5o5Ks4ie8w6Qwg3LDrufdISglaueWTq-xbr7gw7MdDsDrm31HEBcQbMO13J-toootPzToWGfcmC-WqJrXiLOuijqp3uNB5NcIBakmvUEez3z2ZzSvaQGOs1-UfBsfXSSi-kxN7JJCq1FGsIgOuX8Q"
              />
            </div>
          </div>

          {/* Banner 2: Kirana Cashback (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm border border-[#e2e8f0] relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-md bg-[#ffdbcf] text-[#a83900] text-[10px] font-extrabold uppercase tracking-wide">
                  KIRANA CASHBACK
                </span>
                <span className="text-xs font-mono font-bold text-[#6f7a71] bg-[#f2f4f6] px-2 py-0.5 rounded">
                  CODE: DUKHAN100
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-[#191c1e] mb-2">
                Flat ₹100 Off on Kirana Essentials
              </h3>
              <p className="text-xs text-[#3f4941] mb-6 leading-relaxed">
                Support your neighborhood grocers. Valid on all orders above ₹599 from certified Dukhan24 retail partners.
              </p>
            </div>
            
            <div className="flex items-center justify-between pt-4 bg-[#f2f4f6] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 border-t border-[#e2e8f0]">
              <div>
                <span className="text-[10px] text-[#3f4941] block font-medium">Credited instantly to</span>
                <span className="text-xs font-extrabold text-[#191c1e]">Dukhan Wallet / UPI</span>
              </div>
              <button 
                type="button"
                onClick={() => {
                  setClaimed(true);
                  if (onClaimVoucher) onClaimVoucher();
                }}
                disabled={claimed}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-sm ${
                  claimed 
                    ? 'bg-[#157347] text-white cursor-default' 
                    : 'bg-[#005934] hover:bg-[#157347] text-white'
                }`}
              >
                {claimed ? '✓ Voucher Claimed' : 'Claim Voucher'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
