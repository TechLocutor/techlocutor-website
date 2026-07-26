import { useState } from 'react';
import { newsArticles } from '@/data/mockData';
import { NewsCard } from '@/components/Cards';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AdSlot } from '@/components/AdSlot';
import { Flame, TrendingUp } from 'lucide-react';
import type { NewsCategory } from '@/types';

const categories: (NewsCategory | 'All')[] = ['All', 'Launches', 'Leaks', 'Industry', 'AI', 'Policy', 'Events'];

export function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory | 'All'>('All');

  const featured = newsArticles.find((n) => n.featured) ?? newsArticles[0];
  const rest = newsArticles.filter((n) => n.id !== featured.id);
  const filtered = activeCategory === 'All' ? rest : rest.filter((n) => n.category === activeCategory);
  const breaking = newsArticles.find((n) => n.breaking);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'News' }]} />

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Tech News</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">The latest from the world of technology — launches, leaks, AI, and more.</p>
        </div>
        {breaking && (
          <div className="flex items-center gap-2 text-sm bg-brand-red/10 text-brand-red px-3 py-2 rounded-lg">
            <Flame size={16} className="animate-pulse" /> Breaking: {breaking.title.slice(0, 40)}...
          </div>
        )}
      </div>

      {/* Featured */}
      <div className="mb-10">
        <NewsCard article={featured} variant="featured" />
      </div>

      <AdSlot size="leaderboard" className="mb-8" />

      {/* Category filter */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto scrollbar-hide pb-2">
        <TrendingUp size={16} className="text-gray-400 shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === cat
                ? 'bg-brand-orange text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Feed */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-500 dark:text-gray-400">
          <p className="text-lg font-medium">No news in this category yet</p>
          <p className="text-sm mt-1">Check back soon for updates.</p>
        </div>
      )}
    </div>
  );
}
