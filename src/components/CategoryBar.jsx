import React, { useState } from 'react';
import './CategoryBar.css';

export default function CategoryBar({ activeCategory, onSelectCategory }) {
  const categories = [
    { id: 'all', label: 'All Curated Provisions', icon: '🧺', count: '140+' },
    { id: 'bakery', label: 'Artisan Hearth & Sourdough', icon: '🥖', count: '18 items' },
    { id: 'dairy', label: 'Pasture Dairy & Farm Eggs', icon: '🧈', count: '24 items' },
    { id: 'produce', label: 'Farm Produce & Orchard', icon: '🍎', count: '32 items' },
    { id: 'pantry', label: 'Oils, Vinegars & Grains', icon: '🫒', count: '45 items' },
    { id: 'coffee', label: 'Single Origin Roastery', icon: '☕', count: '16 items' },
    { id: 'midnight', label: 'Midnight Cravings (24/7)', icon: '🌙', count: '28 items' },
    { id: 'apothecary', label: 'Apothecary & Herbal', icon: '🌿', count: '14 items' }
  ];

  return (
    <section className="category-section">
      <div className="category-container">
        <div className="category-header">
          <div className="header-left">
            <span className="section-eyebrow">CURATED AISLES</span>
            <h3 className="section-title">Explore Today's Neighborhood Provisions</h3>
          </div>
          <p className="header-desc">
            Directly sourced from trusted local bakeries, micro-creameries, and organic family orchards.
          </p>
        </div>

        <div className="category-scroll-strip">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`category-pill ${isSelected ? 'pill-active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                <span className="category-icon">{cat.icon}</span>
                <span className="category-name">{cat.label}</span>
                <span className="category-count">{cat.count}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
