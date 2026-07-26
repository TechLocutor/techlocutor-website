import { useState } from 'react';
import { howToArticles } from '@/data/mockData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AdSlot } from '@/components/AdSlot';
import { Badge } from '@/components/Badge';
import { Lightbulb, Play, Clock, ArrowRight, BookOpen } from 'lucide-react';

const categories = ['All', 'Android Tips', 'iOS Tips', 'Windows', 'macOS', 'AI Tools', 'Privacy'];

const difficultyVariant: Record<string, 'green' | 'orange' | 'red'> = {
  Beginner: 'green',
  Intermediate: 'orange',
  Advanced: 'red',
};

export function HowToPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const filtered = activeCategory === 'All' ? howToArticles : howToArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'How-To & Tips' }]} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">How-To & Tips</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Step-by-step tutorials to help you get the most from your tech.</p>
      </div>

      {/* Featured tutorial with video */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer">
          <img src={howToArticles[0].image} alt={howToArticles[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={28} fill="white" className="text-white ml-1" />
            </div>
          </div>
          <div className="absolute top-3 left-3"><Badge label="Video Tutorial" variant="red" /></div>
        </div>
        <div className="flex flex-col justify-center">
          <Badge label={howToArticles[0].category} variant="blue" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-3">{howToArticles[0].title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{howToArticles[0].excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-5">
            <span className="flex items-center gap-1"><Clock size={14} /> {howToArticles[0].readTime}</span>
            <Badge label={howToArticles[0].difficulty} variant={difficultyVariant[howToArticles[0].difficulty]} />
          </div>
          <button className="btn-primary self-start flex items-center gap-2">Read Tutorial <ArrowRight size={16} /></button>
        </div>
      </div>

      <AdSlot size="leaderboard" className="mb-8" />

      {/* Category filter */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto scrollbar-hide pb-2">
        <Lightbulb size={16} className="text-gray-400 shrink-0" />
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

      {/* Articles grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article) => (
          <article
            key={article.id}
            className="group bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border overflow-hidden card-hover cursor-pointer"
          >
            <div className="relative aspect-video overflow-hidden">
              <img src={article.image} alt={article.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 flex gap-2">
                <Badge label={article.category} variant="blue" />
              </div>
              <div className="absolute top-3 right-3">
                <Badge label={article.difficulty} variant={difficultyVariant[article.difficulty]} />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-base text-gray-900 dark:text-white line-clamp-2 mb-2 group-hover:text-brand-orange transition-colors">{article.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">{article.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-100 dark:border-dark-border">
                <span>{article.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-500 dark:text-gray-400">
          <BookOpen size={32} className="mx-auto mb-3 opacity-50" />
          <p className="text-lg font-medium">No tutorials in this category yet</p>
        </div>
      )}
    </div>
  );
}
