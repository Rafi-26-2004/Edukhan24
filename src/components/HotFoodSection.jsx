import React from 'react';

const dishes = [
  {
    id: 'food-1',
    name: 'Chicken Dum Biryani',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByey1CjoPbBwrAgLTgsm9wRNzfL3pDWYWcyhltEhSgBs-I47DZG96eqwwemqFZ_YYF3cN5TcJRmsSuVlRr57yJTyp9giBjthohJF7UWnEoShrDphsGW1igH2Llv01kKuJBP0GlwIAGLrTwrMvZdsAKQYNa72WDDCULGMR2gQ2gynBR_Xa-GrQw5xk-ZC3zfRn-z5Ou4l2l9VRWBeD7iLDuHaI5TDnA2V7M8Rpd2wTTG2jdkDVjfZPKMw',
    badge: 'BESTSELLER',
    badgeClass: 'bg-[#ba1a1a] text-white',
    isVeg: false,
    restaurant: 'Meghana Foods • Served with Mirchi Ka Salan & Raita',
    rating: '4.8 ★ (1,400+ reviews)',
    price: 299
  },
  {
    id: 'food-2',
    name: 'Paneer Butter Masala Meal',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMyCYGoN49p_bpie1uIm9mcD5EoiYqsULd2mzbZyysXbXZm3f79NVmtvITDdxkQkexn_SV3XY0NezntG_REFtjxVjfPiQyc7paRrTTsL-vuELr8sCNvZ4j39vjSWlBptuIBxQNNXc0XAudv3bE5PYeI-VXMmr-fXd2Lp3WeLLLPizZVBMhLDemgInWmyuYBeCwPOkB7Foz11PptxqVMGh_2O4fUXaGoL4SKJS56RTbhZgzA93W66SO0Q',
    badge: 'PURE VEG',
    badgeClass: 'bg-[#b0f1c7] text-[#002111]',
    isVeg: true,
    restaurant: 'Punjabi Rasoi • With 2 Butter Naan & Jeera Rice',
    rating: '4.7 ★ (850+ reviews)',
    price: 229
  },
  {
    id: 'food-3',
    name: 'Ghee Roast Dosa & Kaapi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJCT6_lqYGkvm98I0AWqsZcB9S25AHf6zmtOz6fPrw1PDof1zzYopfPQenVYCdfzPSTrvjPgGGCrHL_DFcyRtDHblEvpXnYD067Qyj-ROAVZwBZ0i426OpijlWk7LlUnYFCd2pkTmv92zQxWSv83sYUk6Jg3J5E-oaYFe1pNklUZZB-mOiwv2WWa8HGLaVZKzg7BftPHwT8PTlFesVVptQ0p1JggB8TGXYPPFei9-ksl-GE3ckFfxCcQ',
    badge: 'MORNING SPECIAL',
    badgeClass: 'bg-[#b0f1c7] text-[#002111]',
    isVeg: true,
    restaurant: 'Sri Raghavendra Tiffin • Ghee podi, 3 chutneys & sambar',
    rating: '4.9 ★ (2,100+ reviews)',
    price: 145
  },
  {
    id: 'food-4',
    name: 'Classic Margherita Pizza',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBgAP1UjUc1TXTIUzFz2WZSdYct_Qd9milTNBNPLLZXBKAkKndsSWGGEtETpQP590y2RZLl_LfkgyQLs2c-4onMNYbauLr1KcmLsNIvajLkD2E-jeJjMDOyp93bw8E_0Ojte13mX_9Xl7cNZp66Jb9PodNHpm4FyVu3Axr3ooW2vcwhLR8d4dhfij__P9B1Nx5ZYP8f5ucAHfHOGVVXx6iB7xYtu-IE3ABCqHl3W7vBdrxO4iotT-qLg',
    badge: 'HAND-TOSSED',
    badgeClass: 'bg-[#ffdbcf] text-[#a83900]',
    isVeg: true,
    restaurant: 'Brik Oven Indiranagar • 11 inch sourdough base',
    rating: '4.8 ★ (620+ reviews)',
    price: 385
  }
];

export default function HotFoodSection({ onAddToCart, cartQuantities = {} }) {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 w-full py-8">
      <div className="bg-[#f2f4f6] rounded-2xl p-6 sm:p-8 border border-[#e2e8f0]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-[#a83900] font-bold mb-1">
              <span className="material-symbols-outlined text-xl">ramen_dining</span>
              <span className="text-[10px] uppercase tracking-wider font-extrabold">
                Fresh From Neighborhood Kitchens
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e]">
              Craving Something Hot?
            </h2>
            <p className="text-xs sm:text-sm text-[#3f4941]">
              Prepared fresh to order, packed in insulated thermal bags and delivered in 25 mins
            </p>
          </div>
          <a
            href="#restaurants"
            className="text-xs font-bold text-[#a83900] hover:underline inline-flex items-center gap-1"
          >
            <span>Explore 35+ restaurants</span>
            <span className="material-symbols-outlined text-base">chevron_right</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dishes.map((dish) => {
            const qty = cartQuantities[dish.id] || 0;

            return (
              <div
                key={dish.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#e2e8f0]"
              >
                <div>
                  <div className="relative h-40 w-full bg-[#eceef0] overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-extrabold flex items-center gap-1 shadow-sm ${dish.badgeClass}`}>
                      {dish.badge}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-extrabold text-[#191c1e] line-clamp-1">
                        {dish.name}
                      </h3>
                      {/* Veg / Non-Veg Indicator */}
                      <span
                        className={`w-3.5 h-3.5 rounded border flex items-center justify-center flex-shrink-0 ${
                          dish.isVeg ? 'border-[#005934]' : 'border-[#a83900]'
                        }`}
                        title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            dish.isVeg ? 'bg-[#005934]' : 'bg-[#a83900]'
                          }`}
                        ></span>
                      </span>
                    </div>

                    <p className="text-xs text-[#3f4941] mb-2 line-clamp-1">{dish.restaurant}</p>
                    <div className="text-[11px] text-[#6f7a71]">{dish.rating}</div>
                  </div>
                </div>

                <div className="p-4 pt-0 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[#191c1e]">₹{dish.price}</span>
                  {qty > 0 ? (
                    <div className="py-1 px-3 rounded-lg bg-[#005934] text-white text-xs font-bold flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onAddToCart(dish, -1)}
                        className="hover:bg-[#157347] rounded p-0.5"
                      >
                        -
                      </button>
                      <span>{qty}</span>
                      <button
                        type="button"
                        onClick={() => onAddToCart(dish, 1)}
                        className="hover:bg-[#157347] rounded p-0.5"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onAddToCart(dish, 1)}
                      className="px-4 py-1.5 rounded-lg bg-[#005934] hover:bg-[#157347] text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      Add to Plate
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
