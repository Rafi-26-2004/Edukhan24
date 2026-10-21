import React, { useState } from 'react';
import { Plus, Check, Heart, Sparkles, Filter } from 'lucide-react';
import './ProvisionsSection.css';

const allProducts = [
  // Bakery
  {
    id: 101,
    title: "Artisan Sourdough Country Loaf",
    category: "bakery",
    origin: "Local Stone Hearth Bakery",
    subtitle: "Naturally leavened with 100% organic local heritage grains",
    price: "$7.25",
    numericPrice: 7.25,
    tag: "Baked 2 hrs ago",
    icon: "🥖"
  },
  {
    id: 102,
    title: "Flaky French Butter Croissants (2-Pack)",
    category: "bakery",
    origin: "Greenpoint Pastry Guild",
    subtitle: "Laminated with 84% butterfat Normandy cultured butter",
    price: "$6.50",
    numericPrice: 6.50,
    tag: "Morning Fresh",
    icon: "🥐"
  },
  {
    id: 103,
    title: "Seeded NY Rye Bread",
    category: "bakery",
    origin: "Old World Hearth",
    subtitle: "Caraway, fennel & toasted sesame with dense golden crumb",
    price: "$6.80",
    numericPrice: 6.80,
    tag: "Daily Bake",
    icon: "🍞"
  },

  // Dairy
  {
    id: 104,
    title: "Pasture-Raised Golden Egg Carton (Dozen)",
    category: "dairy",
    origin: "Willow Creek Family Farm",
    subtitle: "Deep amber yolks from hens roaming clover meadows",
    price: "$6.95",
    numericPrice: 6.95,
    tag: "Pasture Roamed",
    icon: "🥚"
  },
  {
    id: 105,
    title: "Jersey Cow Whole Creamline Milk",
    category: "dairy",
    origin: "Lancaster Meadow Co-op",
    subtitle: "Glass bottle pasteurized at low temps • Cream on top",
    price: "$5.45",
    numericPrice: 5.45,
    tag: "Returnable Glass",
    icon: "🥛"
  },
  {
    id: 106,
    title: "Aged Clothbound Cheddar (8oz)",
    category: "dairy",
    origin: "Grafton Village Cellars",
    subtitle: "Cave-matured 14 months • Nutty & crumbly with mineral notes",
    price: "$9.50",
    numericPrice: 9.50,
    tag: "Cave Aged",
    icon: "🧀"
  },

  // Produce
  {
    id: 107,
    title: "Heirloom Vine-Ripened Tomatoes (1 lb)",
    category: "produce",
    origin: "Hudson Farm Collective",
    subtitle: "Cherokee Purple & Green Zebra varieties • Sweet & acidic",
    price: "$5.85",
    numericPrice: 5.85,
    tag: "Vine Picked",
    icon: "🍅"
  },
  {
    id: 108,
    title: "Wild Arugula & Field Herbs Bouquet",
    category: "produce",
    origin: "Queens Hydro-Greenhouses",
    subtitle: "Peppery baby greens, tender dill, chives & French sorrel",
    price: "$4.50",
    numericPrice: 4.50,
    tag: "Harvested Today",
    icon: "🥗"
  },
  {
    id: 109,
    title: "Honeycrisp Orchard Apples (3-Pack)",
    category: "produce",
    origin: "Finger Lakes Orchard",
    subtitle: "Crisp, snappy crunch with floral honey finish",
    price: "$4.95",
    numericPrice: 4.95,
    tag: "Cold Stored",
    icon: "🍎"
  },

  // Pantry & Oils
  {
    id: 110,
    title: "Early Harvest Unfiltered Olive Oil (500ml)",
    category: "pantry",
    origin: "Valley Grove Estate",
    subtitle: "Cold-pressed Koroneiki olives • Grass & green artichoke notes",
    price: "$19.00",
    numericPrice: 19.00,
    tag: "Limited Tin",
    icon: "🫒"
  },
  {
    id: 111,
    title: "Raw Wildflower Mountain Honey (12oz)",
    category: "pantry",
    origin: "Catskill Apiary Collective",
    subtitle: "Raw unheated nectar with natural propolis & pollen",
    price: "$11.50",
    numericPrice: 11.50,
    tag: "Unfiltered",
    icon: "🍯"
  },

  // Coffee & Roastery
  {
    id: 112,
    title: "Mercantile House Blend Whole Bean (12oz)",
    category: "coffee",
    origin: "Brooklyn Micro-Roasters",
    subtitle: "Notes of chocolate truffle, Meyer lemon & sweet almond",
    price: "$16.50",
    numericPrice: 16.50,
    tag: "Roasted Monday",
    icon: "☕"
  },

  // Midnight / Bodega
  {
    id: 113,
    title: "Midnight Kettle Cooked Truffle Chips",
    category: "midnight",
    origin: "Hudson Snack Co.",
    subtitle: "Hand-cooked in small kettles with black summer truffles",
    price: "$4.25",
    numericPrice: 4.25,
    tag: "Late Night Fav",
    icon: "🥔"
  },
  {
    id: 114,
    title: "Artisanal Sparkling Blood Orange Soda (4-pk)",
    category: "midnight",
    origin: "Mercantile Bottling Works",
    subtitle: "Natural cane sugar, Sicilian citrus extract, crisp fizz",
    price: "$7.50",
    numericPrice: 7.50,
    tag: "Chilled Can",
    icon: "🍊"
  }
];

export default function ProvisionsSection({ activeCategory, onAddToCart }) {
  const [addedMap, setAddedMap] = useState({});

  const filtered = activeCategory === 'all'
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory);

  const handleAdd = (product) => {
    setAddedMap((prev) => ({ ...prev, [product.id]: true }));
    onAddToCart(product);
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [product.id]: false }));
    }, 1400);
  };

  return (
    <section id="provisions" className="provisions-section">
      <div className="provisions-container">
        <div className="section-title-wrap">
          <div className="badge-row">
            <span className="small-pill">
              <Sparkles size={13} />
              STOCK LIST • UPDATED HOURLY
            </span>
          </div>
          <h2 className="main-section-heading">
            {activeCategory === 'all' 
              ? 'Hand-Selected Everyday Essentials' 
              : `Curated ${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Provisions`}
          </h2>
          <p className="section-subtext">
            Every item on our shelves is tasted and approved by our neighborhood mercantile curators.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="mercantile-catalog-grid">
          {filtered.map((item) => {
            const isAdded = addedMap[item.id];
            return (
              <article key={item.id} className="catalog-card">
                <div className="card-header">
                  <div className="card-avatar">
                    <span>{item.icon}</span>
                  </div>
                  <span className="fresh-tag">{item.tag}</span>
                </div>

                <div className="card-content">
                  <span className="card-origin">{item.origin}</span>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.subtitle}</p>
                </div>

                <div className="card-bottom">
                  <div className="price-box">
                    <span className="currency-val">{item.price}</span>
                  </div>

                  <button 
                    type="button"
                    className={`catalog-add-btn ${isAdded ? 'btn-success' : ''}`}
                    onClick={() => handleAdd(item)}
                  >
                    {isAdded ? (
                      <>
                        <Check size={15} />
                        <span>In Basket</span>
                      </>
                    ) : (
                      <>
                        <Plus size={15} />
                        <span>Add</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
