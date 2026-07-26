import { useState } from 'react';
import { videos } from '@/data/mockData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/Badge';
import { AdSlot } from '@/components/AdSlot';
import { Play, Youtube, Bell, Eye, Clock } from 'lucide-react';

const categories = ['All', 'Reviews', 'Unboxings', 'Comparisons', 'News', 'How-To', 'Deep Dive'];

export function VideosPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const filtered = activeCategory === 'All' ? videos : videos.filter((v) => v.category === activeCategory);
  const featured = videos[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Videos' }]} />

      {/* Subscribe CTA */}
      <div className="bg-gradient-to-r from-brand-red to-brand-orange rounded-2xl p-6 mb-8 text-white flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Youtube size={28} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Tech Locutor YouTube</h1>
            <p className="text-white/90 text-sm flex items-center gap-2">
              <Bell size={14} /> 1.2M subscribers · Join the community
            </p>
          </div>
        </div>
        <a
          href="#"
          className="bg-white text-brand-red px-6 py-3 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 shrink-0"
        >
          <Youtube size={18} /> Subscribe
        </a>
      </div>

      {/* Featured video */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer bg-black">
          <img src={featured.thumbnail} alt={featured.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-red flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={32} fill="white" className="text-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">{featured.duration}</div>
        </div>
        <div className="flex flex-col justify-center">
          <Badge label="Latest Video" variant="red" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-3">{featured.title}</h2>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span className="flex items-center gap-1"><Eye size={14} /> {featured.views} views</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {featured.date}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Watch our latest in-depth review. Don't forget to like and subscribe for more honest tech content!</p>
        </div>
      </div>

      <AdSlot size="leaderboard" className="mb-8" />

      {/* Category filter */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto scrollbar-hide pb-2">
        <Play size={16} className="text-gray-400 shrink-0" />
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

      {/* Videos grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((video) => (
          <article key={video.id} className="group bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border overflow-hidden card-hover cursor-pointer">
            <div className="relative aspect-video overflow-hidden bg-black">
              <img src={video.thumbnail} alt={video.title} loading="lazy" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-brand-red flex items-center justify-center">
                  <Play size={24} fill="white" className="text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded">{video.duration}</div>
              <div className="absolute top-2 left-2"><Badge label={video.category} variant="red" /></div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm text-gray-900 dark:text-white line-clamp-2 mb-2 group-hover:text-brand-red transition-colors">{video.title}</h3>
              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1"><Eye size={12} /> {video.views}</span>
                <span>{video.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
