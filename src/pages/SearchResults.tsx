import { useNav } from '@/context/NavContext';
import { reviews, newsArticles, buyingGuides, howToArticles, videos } from '@/data/mockData';
import { ReviewCard, NewsCard } from '@/components/Cards';
import { Badge } from '@/components/Badge';
import { Search, ArrowRight } from 'lucide-react';

export function SearchResults() {
  const { searchQuery, setCurrentPage } = useNav();
  const q = searchQuery.toLowerCase().trim();

  const matchedReviews = reviews.filter((r) => r.title.toLowerCase().includes(q) || r.excerpt.toLowerCase().includes(q) || r.brand.toLowerCase().includes(q));
  const matchedNews = newsArticles.filter((n) => n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q));
  const matchedGuides = buyingGuides.filter((g) => g.title.toLowerCase().includes(q) || g.subtitle.toLowerCase().includes(q));
  const matchedHowTo = howToArticles.filter((h) => h.title.toLowerCase().includes(q) || h.excerpt.toLowerCase().includes(q));
  const matchedVideos = videos.filter((v) => v.title.toLowerCase().includes(q));

  const total = matchedReviews.length + matchedNews.length + matchedGuides.length + matchedHowTo.length + matchedVideos.length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Search size={24} className="text-brand-red" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Search results for "{searchQuery}"</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{total} result{total !== 1 ? 's' : ''} found</p>
        </div>
      </div>

      {total === 0 && (
        <div className="text-center py-20">
          <Search size={48} className="mx-auto text-gray-300 dark:text-gray-700 mb-4" />
          <p className="text-lg font-medium text-gray-500 dark:text-gray-400">No results found</p>
          <p className="text-sm text-gray-400 dark:text-gray-600 mt-1">Try different keywords or browse our sections.</p>
        </div>
      )}

      {matchedReviews.length > 0 && (
        <section className="mb-10">
          <h2 className="section-heading mb-4 flex items-center gap-2"><Badge label="Reviews" variant="red" /> {matchedReviews.length} found</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedReviews.map((r) => (
              <div key={r.id} onClick={() => setCurrentPage('reviews')}>
                <ReviewCard review={r} />
              </div>
            ))}
          </div>
        </section>
      )}

      {matchedNews.length > 0 && (
        <section className="mb-10">
          <h2 className="section-heading mb-4 flex items-center gap-2"><Badge label="News" variant="orange" /> {matchedNews.length} found</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedNews.map((n) => (
              <NewsCard key={n.id} article={n} />
            ))}
          </div>
        </section>
      )}

      {matchedGuides.length > 0 && (
        <section className="mb-10">
          <h2 className="section-heading mb-4 flex items-center gap-2"><Badge label="Buying Guides" variant="green" /> {matchedGuides.length} found</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {matchedGuides.map((g) => (
              <article key={g.id} onClick={() => setCurrentPage('buying-guides')} className="group bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border overflow-hidden card-hover cursor-pointer">
                <img src={g.image} alt={g.title} loading="lazy" className="w-full aspect-video object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-brand-green transition-colors">{g.title}</h3>
                  <p className="text-xs text-brand-green mt-2 flex items-center gap-1">View guide <ArrowRight size={12} /></p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {matchedHowTo.length > 0 && (
        <section className="mb-10">
          <h2 className="section-heading mb-4 flex items-center gap-2"><Badge label="How-To" variant="blue" /> {matchedHowTo.length} found</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {matchedHowTo.map((h) => (
              <article key={h.id} onClick={() => setCurrentPage('how-to')} className="group bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border overflow-hidden card-hover cursor-pointer">
                <img src={h.image} alt={h.title} loading="lazy" className="w-full aspect-video object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-brand-orange transition-colors">{h.title}</h3>
                  <p className="text-xs text-brand-orange mt-2 flex items-center gap-1">Read tutorial <ArrowRight size={12} /></p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {matchedVideos.length > 0 && (
        <section className="mb-10">
          <h2 className="section-heading mb-4 flex items-center gap-2"><Badge label="Videos" variant="red" /> {matchedVideos.length} found</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {matchedVideos.map((v) => (
              <article key={v.id} onClick={() => setCurrentPage('videos')} className="group bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border overflow-hidden card-hover cursor-pointer">
                <img src={v.thumbnail} alt={v.title} loading="lazy" className="w-full aspect-video object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-brand-red transition-colors">{v.title}</h3>
                  <p className="text-xs text-brand-red mt-2 flex items-center gap-1">Watch now <ArrowRight size={12} /></p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
