import React from 'react';

const stores = [
  {
    id: 1,
    name: 'Sri Lakshmi Venkateshwara Supermarket',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPNqn8MmgSRmBpgr0PGobSnurmoaUGyt70k-qUHAolv-rf_zaKRjrCZex6kVp4JO1mZyw4igDMzFvMhouQXrBV_PZkMos6J50veIBNDLfABRRoKrzqS4Px2Gm0GYPVsXNii28yxkTIgJ0OHTewtImbd1lixUoejH9AiMd2jJ4aD0-m13f73bAiYzYuBoDF2qMSH-9YKNBbxcvdhLsOTZWySY7zi2RMAwjwLg12z-Tc3OpNHORKdt6c8w',
    badge: 'Certified Kirana',
    badgeClass: 'bg-[#005934] text-white',
    badgeIcon: 'verified',
    time: '18 mins',
    rating: '4.8',
    category: 'Groceries, Daily Dals & Ration Packs',
    minOrder: '₹99',
    distance: '1.1 km away',
    topItems: 'Top: Idli Rice, Sona Masoori'
  },
  {
    id: 2,
    name: "Namdhari's Fresh & Organic",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWtgciGLYMUu98_KBijb6eOGzyhXaKFLFSoOs_eiSsIHvXTmQuHjCyd4onUVaSEU4F4JiO-663VCuS-I-jSW_oGm5jP1y1f7L-kU5nqJFYzF7mzaKsN3v98WPFJ003l1yoFTd1tOOQE3Nhp1d00Y-x6pm6W95S7PoAE4Lc0wxbZkKo3_BKQZtFs7f56aO5A7_XFHRWjFihdG-M_mkfdmKjS9Ev7cVen6HW6AK5XeqXO_u24KPxS9GZDg',
    badge: 'Organic Certified',
    badgeClass: 'bg-[#185738] text-white',
    badgeIcon: 'eco',
    time: '15 mins',
    rating: '4.9',
    category: 'Farm Fresh Fruits, Exotic Vegetables & Dairy',
    minOrder: '₹149',
    distance: '850 m away',
    topItems: 'Top: Baby Spinach, Tender Coconut'
  },
  {
    id: 3,
    name: 'Meghana Biryani & Kitchen',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJxVKos7D0y6p3oy7unUn-mKDqczLfwuyYzPXdQPQCVQ1OOauiM0-PWSsHH0x8KEOCtxVGRuWhDt3xLJXGs3s2dbuaTfmHZpzcEt3UDUce_Ph_ETrgGt0gQkilVlNsgEdKY42YI4AuJwF_Q32azjLd43yGZfHSi4NK_qI1VfnNaCF3HuDLVUfbP79IkjcxCFmoaJhFQj3Evc5IwhLZj6pvfwca5vjKjfISdXJiGViY8VHilbXjgmpKDA',
    badge: 'High Demand',
    badgeClass: 'bg-[#a83900] text-white',
    badgeIcon: 'local_fire_department',
    time: '25 mins',
    rating: '4.7',
    category: 'Andhra Spiced Biryanis & Tandoori Starters',
    minOrder: '₹199',
    distance: '1.8 km away',
    topItems: 'Top: Special Boneless Biryani'
  },
  {
    id: 4,
    name: 'Apollo & MedPlus Chemist',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnwVGf8z7-OT2ec6fZSOx1rQdPGZAA8U49EOpZWYum5FUMBSRuRrkqsXlVOQmK2ixVHiSkf9g3AnP44p59q2dOBVt8yta7aAddD2kJdlNxtWMKVziRhb0C1-Iy8AKGimLzgh9sqkYKLyC_LloMQA4jxHDeGU5T0e68hTyGQpbKTVq9JmdnoDbTI-Pj1SgxxSNDqe4QH6NK38-C6wLUrGb6I9598JcdhXwXgTe3E0L7QJ8qMsHc_4RWfQ',
    badge: 'Licensed Chemist',
    badgeClass: 'bg-[#33704e] text-white',
    badgeIcon: 'local_pharmacy',
    time: '12 mins',
    rating: '4.9',
    category: 'Prescriptions, OTC Pain Relief & Baby Essentials',
    minOrder: '₹49',
    distance: '400 m away',
    topItems: 'Top: Paracetamol, Baby Food'
  }
];

export default function StoresNearYou({ location = 'Indiranagar' }) {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 w-full py-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-[#a83900]">explore</span>
            <span className="text-[10px] uppercase tracking-wider text-[#a83900] font-extrabold">
              Hyperlocal Dispatch
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e]">
            Stores Near {location}
          </h2>
          <p className="text-xs sm:text-sm text-[#3f4941]">
            Real certified merchant storefronts within 2.5 km radius
          </p>
        </div>
        <a 
          href="#stores" 
          className="text-xs font-bold text-[#005934] hover:underline inline-flex items-center gap-1"
        >
          <span>View all 48 nearby stores</span>
          <span className="material-symbols-outlined text-base">chevron_right</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stores.map((s) => (
          <div 
            key={s.id} 
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#e2e8f0]"
          >
            <div>
              <div className="relative h-44 w-full bg-[#eceef0] overflow-hidden">
                <img 
                  src={s.image} 
                  alt={s.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm ${s.badgeClass}`}>
                  <span className="material-symbols-outlined text-xs">{s.badgeIcon}</span>
                  {s.badge}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2 py-1 rounded text-[#191c1e] text-[10px] font-bold flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-xs text-[#a83900]">schedule</span>
                  {s.time}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-extrabold text-[#191c1e] line-clamp-1">
                    {s.name}
                  </h3>
                  <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[#b0f1c7] text-[#002111] text-[10px] font-extrabold flex-shrink-0 ml-2">
                    {s.rating} <span className="material-symbols-outlined text-[10px]">star</span>
                  </span>
                </div>
                <p className="text-xs text-[#3f4941] mb-2 line-clamp-1">{s.category}</p>
                <div className="flex items-center gap-2 text-[11px] text-[#6f7a71]">
                  <span>Min. Order {s.minOrder}</span>
                  <span>•</span>
                  <span>{s.distance}</span>
                </div>
              </div>
            </div>

            <div className="p-4 pt-0">
              <div className="bg-[#f2f4f6] px-3 py-2 rounded-lg flex items-center justify-between">
                <span className="text-[11px] text-[#3f4941] font-medium truncate max-w-[150px]">
                  {s.topItems}
                </span>
                <button type="button" className="text-xs font-bold text-[#005934] hover:underline">
                  Visit Store
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
