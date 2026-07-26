import { useState } from 'react';
import { buyingGuides } from '@/data/mockData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AdSlot } from '@/components/AdSlot';
import { Badge } from '@/components/Badge';
import { BookOpen, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import type { Category } from '@/types';

const categories: (Category | 'All')[] = ['All', 'Mobiles', 'Laptops', 'Tablets', 'Audio', 'Wearables', 'Smart Home', 'PC Components', 'Cameras', 'Software'];

export function BuyingGuidesPage() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const filtered = activeCategory === 'All' ? buyingGuides : buyingGuides.filter((g) => g.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Buying Guides' }]} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Buying Guides</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Curated lists for every budget and use case — regularly updated to stay fresh.</p>
      </div>

      <AdSlot size="leaderboard" className="mb-8" />

      {/* Category filter */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto scrollbar-hide pb-2">
        <BookOpen size={16} className="text-gray-400 shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === cat
                ? 'bg-brand-green text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Guides grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((guide) => (
          <article
            key={guide.id}
            className="group bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border overflow-hidden card-hover cursor-pointer"
          >
            <div className="relative aspect-video overflow-hidden">
              <img src={guide.image} alt={guide.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 flex gap-2">
                <Badge label={guide.budget} variant="green" />
              </div>
              <div className="absolute top-3 right-3">
                <div className="bg-black/70 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 size={11} className="text-brand-green" /> Updated
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-2 mb-1.5 group-hover:text-brand-green transition-colors">{guide.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">{guide.subtitle}</p>

              {/* Quick view specs */}
              <div className="space-y-2 mb-4">
                {['Performance', 'Value for Money', 'Battery Life'].map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-xs">
                    <span className="text-gray-500 dark:text-gray-400 w-28 shrink-0">{spec}</span>
                    <div className="flex-1 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <div className="h-full rounded-full bg-brand-green" style={{ width: `${75 + Math.random() * 20}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-dark-border">
                <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1"><Clock size={12} /> {guide.updatedDate}</span>
                <span className="text-xs font-semibold text-brand-green flex items-center gap-1 group-hover:gap-2 transition-all">
                  {guide.itemCount} picks <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-500 dark:text-gray-400">
          <p className="text-lg font-medium">No guides in this category yet</p>
          <p className="text-sm mt-1">We're working on it — check back soon.</p>
        </div>
      )}
    </div>
  );
}
