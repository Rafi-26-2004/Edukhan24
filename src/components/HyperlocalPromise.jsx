import React from 'react';

export default function HyperlocalPromise() {
  return (
    <div className="w-full">
      {/* SECTION 6: Why Shop Local on dukhan24.in? Value Proposition */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 w-full py-10">
        <div className="bg-[#005934] text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-lg">
          <div className="relative z-10 max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-white/10 text-[#9ef5be] text-[10px] font-extrabold uppercase tracking-wider mb-4 inline-block">
              The Hyperlocal Promise
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
              Why your neighborhood chooses dukhan24.in
            </h2>
            <p className="text-sm sm:text-base text-white/80 mb-8 leading-relaxed">
              We don't replace local merchants with centralized faceless dark stores. We digitize the real grocers, corner chemists, and family restaurants who have served your streets for decades.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#157347]/40 p-5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#9ef5be] mb-3">
                  <span className="material-symbols-outlined text-2xl">handshake</span>
                </div>
                <h3 className="text-sm font-extrabold text-white mb-1">Support Real Dukandars</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Every rupee spent stays in your community, bolstering independent neighborhood retailers.
                </p>
              </div>

              <div className="bg-[#157347]/40 p-5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#ffdbcf] mb-3">
                  <span className="material-symbols-outlined text-2xl">money_off</span>
                </div>
                <h3 className="text-sm font-extrabold text-white mb-1">Zero Surge Pricing</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  No monsoon surcharges or artificial peak-hour markup. Pay actual retail MRP or lower.
                </p>
              </div>

              <div className="bg-[#157347]/40 p-5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#b0f1c7] mb-3">
                  <span className="material-symbols-outlined text-2xl">shopping_cart_checkout</span>
                </div>
                <h3 className="text-sm font-extrabold text-white mb-1">Combined or Express</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Order milk from dukhan, medicines from chemist, and biryani for lunch in one seamless checkout.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#a83900]/20 blur-3xl pointer-events-none"></div>
        </div>
      </section>

      {/* Neighborhood Live Activity Ticker */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 w-full pb-8">
        <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#e2e8f0]">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005934] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#005934]"></span>
            </span>
            <span className="text-xs text-[#191c1e]">
              <strong className="text-[#005934]">Live in Indiranagar:</strong> Priya K. just ordered <em>Aashirvaad Atta &amp; Amul Milk</em> (Fulfillment in 14 mins)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#6f7a71]">Are you a shop owner?</span>
            <a 
              href="#merchant" 
              className="text-xs font-bold text-[#005934] hover:underline flex items-center gap-1"
            >
              <span>List your dukhan in 5 mins</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
