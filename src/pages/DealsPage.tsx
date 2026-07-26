import { useState } from 'react';
import { deals } from '@/data/mockData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AdSlot } from '@/components/AdSlot';
import { Badge } from '@/components/Badge';
import { Flame, TrendingDown, Bell, Check, Clock, ShoppingBag } from 'lucide-react';
import type { Category } from '@/types';

const categories: (Category | 'All')[] = ['All', 'Mobiles', 'Laptops', 'Audio', 'Wearables', 'PC Components'];

export function DealsPage() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const filtered = activeCategory === 'All' ? deals : deals.filter((d) => d.category === activeCategory);

  const badgeVariant: Record<string, 'red' | 'orange' | 'blue'> = {
    'Hot Deal': 'red',
    'Lightning Deal': 'orange',
    'Limited Time': 'blue',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Deals' }]} />

      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white flex items-center gap-3">
          <Flame className="text-brand-red" /> Today's Best Deals
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Hand-picked deals updated daily. Prices verified before posting.</p>
      </div>

      {/* Affiliate disclosure */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/40 rounded-lg p-3 mb-6 flex items-start gap-2 text-sm">
        <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Affiliate Disclosure:</span>
        <span className="text-yellow-700 dark:text-yellow-300/80">Some links on this page are affiliate links. We may earn a commission if you buy through them — at no extra cost to you.</span>
      </div>

      {/* Price drop alert signup */}
      <div className="bg-gradient-to-r from-brand-red to-brand-orange rounded-2xl p-6 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Bell size={28} className="shrink-0" />
            <div>
              <h2 className="font-bold text-lg">Price Drop Alerts</h2>
              <p className="text-white/90 text-sm">Get notified when products you care about drop in price.</p>
            </div>
          </div>
          {subscribed ? (
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2.5 rounded-lg font-semibold">
              <Check size={18} /> You're subscribed!
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
              className="flex gap-2 w-full md:w-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="px-4 py-2.5 rounded-lg text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-white/50 flex-1 md:w-56"
              />
              <button type="submit" className="bg-black px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-900 transition-colors whitespace-nowrap">Sign Up</button>
            </form>
          )}
        </div>
      </div>

      {/* Category filter */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto scrollbar-hide pb-2">
        <TrendingDown size={16} className="text-gray-400 shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === cat
                ? 'bg-brand-red text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Deals grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filtered.map((deal) => (
          <article
            key={deal.id}
            className="group bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border overflow-hidden card-hover"
          >
            <div className="relative aspect-square bg-gray-50 dark:bg-gray-800 overflow-hidden flex items-center justify-center">
              <img src={deal.image} alt={deal.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {deal.badge && <Badge label={deal.badge} variant={badgeVariant[deal.badge]} />}
                <span className="bg-brand-green text-white text-xs font-bold px-2.5 py-1 rounded-full">-{deal.discount}%</span>
              </div>
              {deal.expiresAt && (
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Clock size={11} /> {deal.expiresAt}
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm text-gray-900 dark:text-white line-clamp-2 mb-3">{deal.title}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-bold text-brand-red">₹{deal.salePrice.toLocaleString('en-IN')}</span>
                <span className="text-sm text-gray-400 line-through">₹{deal.originalPrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <ShoppingBag size={12} /> {deal.store}
                </span>
                <button className="btn-primary text-xs py-2">Buy Now</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <AdSlot size="leaderboard" />
    </div>
  );
}
