import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f2f4f6] pt-12 pb-8 border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Top 3 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 border-b border-[#e2e8f0]">
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-[#e2e8f0] shadow-xs">
            <span className="material-symbols-outlined text-3xl text-[#005934]">verified</span>
            <div>
              <h4 className="text-sm font-extrabold text-[#191c1e]">100% Genuine Neighborhood Stores</h4>
              <p className="text-xs text-[#3f4941]">Handpicked local vendors, certified quality goods</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-[#e2e8f0] shadow-xs">
            <span className="material-symbols-outlined text-3xl text-[#a83900]">speed</span>
            <div>
              <h4 className="text-sm font-extrabold text-[#191c1e]">Instant 15-30 Min Delivery</h4>
              <p className="text-xs text-[#3f4941]">Lightning fast dispatch straight from nearby stores</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-[#e2e8f0] shadow-xs">
            <span className="material-symbols-outlined text-3xl text-[#185738]">payments</span>
            <div>
              <h4 className="text-sm font-extrabold text-[#191c1e]">Cash on Delivery &amp; UPI</h4>
              <p className="text-xs text-[#3f4941]">Pay with zero friction via UPI, card, or liquid cash</p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#005934] text-white flex items-center justify-center font-bold text-xs">
                D24
              </div>
              <span className="text-xl font-extrabold text-[#005934]">dukhan24<span className="text-[#a83900]">.in</span></span>
            </div>
            <p className="text-xs text-[#3f4941] max-w-sm mb-4 leading-relaxed">
              India's premier neighborhood commerce engine connecting local shoppers with neighborhood kiranas, specialty stalls, and daily essentials 24/7.
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-white border border-[#e2e8f0] px-3 py-2 rounded-lg flex items-center gap-2 shadow-xs">
                <span className="material-symbols-outlined text-xl text-[#005934]">install_mobile</span>
                <div>
                  <p className="text-[10px] text-[#6f7a71] uppercase font-bold">Available on</p>
                  <p className="text-xs font-bold text-[#191c1e]">App Store &amp; Play Store</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-extrabold text-[#191c1e] uppercase tracking-wider mb-3">For Customers</h5>
            <ul className="space-y-2 text-xs text-[#3f4941]">
              <li className="hover:text-[#005934] cursor-pointer">Track Active Orders</li>
              <li className="hover:text-[#005934] cursor-pointer">dukhan24 Pass (Zero Fee)</li>
              <li className="hover:text-[#005934] cursor-pointer">Prescription Upload</li>
              <li className="hover:text-[#005934] cursor-pointer">Refund Policies &amp; Returns</li>
              <li className="hover:text-[#005934] cursor-pointer">Safety Measures</li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-extrabold text-[#191c1e] uppercase tracking-wider mb-3">Dukhan Partners</h5>
            <ul className="space-y-2 text-xs text-[#3f4941]">
              <li className="hover:text-[#005934] cursor-pointer">Register Your Shop</li>
              <li className="hover:text-[#005934] cursor-pointer">Merchant Portal &amp; POS</li>
              <li className="hover:text-[#005934] cursor-pointer">Delivery Fleet Sign-up</li>
              <li className="hover:text-[#005934] cursor-pointer">B2B Sourcing Hub</li>
              <li className="hover:text-[#005934] cursor-pointer">Partner Help Desk</li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-extrabold text-[#191c1e] uppercase tracking-wider mb-3">Cities Served</h5>
            <ul className="space-y-2 text-xs text-[#3f4941]">
              <li>Bengaluru Urban</li>
              <li>Mumbai &amp; MMR</li>
              <li>Delhi NCR &amp; Gurugram</li>
              <li>Hyderabad Metro</li>
              <li>Pune &amp; PCMC</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6f7a71]">
          <p>© {new Date().getFullYear()} dukhan24 Technologies India Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#191c1e] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#191c1e] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#191c1e] cursor-pointer">FSSAI License Info</span>
            <span className="hover:text-[#191c1e] cursor-pointer">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
