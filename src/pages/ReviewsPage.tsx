import { useState } from 'react';
import { reviews } from '@/data/mockData';
import { ReviewCard } from '@/components/Cards';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AdSlot } from '@/components/AdSlot';
import { ReviewDetail } from '@/pages/ReviewDetail';
import { Search, SlidersHorizontal } from 'lucide-react';
import type { Category, Review } from '@/types';

const categories: (Category | 'All')[] = ['All', 'Mobiles', 'Laptops', 'Tablets', 'Audio', 'Wearables', 'Smart Home', 'PC Components', 'Cameras', 'Software'];

export function ReviewsPage() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [search, setSearch] = useState('');
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  if (selectedReview) {
    return <ReviewDetail review={selectedReview} onBack={() => setSelectedReview(null)} />;
  }

  const filtered = reviews.filter((r) => {
    const matchCat = activeCategory === 'All' || r.category === activeCategory;
    const matchSearch = !search || r.title.toLowerCase().includes(search.toLowerCase()) || r.brand.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Reviews' }]} />
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Reviews</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Honest, in-depth reviews of the latest tech products available in India.</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search reviews..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red/40"
          />
        </div>
      </div>

      {/* Category filter */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto scrollbar-hide pb-2">
        <SlidersHorizontal size={16} className="text-gray-400 shrink-0" />
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

      <AdSlot size="leaderboard" className="mb-8" />

      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((review) => (
            <div key={review.id} onClick={() => setSelectedReview(review)}>
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500 dark:text-gray-400">
          <p className="text-lg font-medium">No reviews found</p>
          <p className="text-sm mt-1">Try a different category or search term.</p>
        </div>
      )}
    </div>
  );
}
