import { useNav } from '@/context/NavContext';
import { reviews, newsArticles, buyingGuides, comparisonProducts } from '@/data/mockData';
import { ReviewCard, NewsCard, ComparisonCard } from '@/components/Cards';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { AdSlot } from '@/components/AdSlot';
import { Rating } from '@/components/Rating';
import { Badge } from '@/components/Badge';
import { Play, TrendingUp, Sparkles, ChevronRight, Flame, BookOpen } from 'lucide-react';

export function HomePage() {
  const { setCurrentPage } = useNav();
  const featuredReview = reviews[0];
  const featuredNews = newsArticles.filter((n) => n.featured)[0];
  const breakingNews = newsArticles.filter((n) => n.breaking)[0];
  const latestNews = newsArticles.slice(1, 5);
  const latestReviews = reviews.slice(0, 4);
  const topComparisons = [
    { id: 'c1', title: 'Samsung Galaxy S25 Ultra vs OnePlus 13', image: comparisonProducts[0].image, products: ['Samsung S25 Ultra', 'OnePlus 13'], voteCount: 12450 },
    { id: 'c2', title: 'iPhone 16 Pro vs Galaxy S25 Ultra', image: comparisonProducts[2].image, products: ['iPhone 16 Pro', 'Galaxy S25 Ultra'], voteCount: 18200 },
    { id: 'c3', title: 'Pixel 9 Pro vs OnePlus 13', image: comparisonProducts[3].image, products: ['Pixel 9 Pro', 'OnePlus 13'], voteCount: 8730 },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={featuredReview.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge label="Latest Review" variant="red" size="md" />
              <Badge label={featuredReview.category} variant="neutral" size="md" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">{featuredReview.title}</h1>
            <p className="text-gray-300 text-base md:text-lg mb-6 max-w-xl">{featuredReview.excerpt}</p>
            <div className="flex items-center gap-4 mb-6">
              <Rating value={featuredReview.rating} size="md" />
              <span className="text-2xl font-bold">{featuredReview.price}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setCurrentPage('reviews')} className="bg-brand-red px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-red-700 transition-colors">
                Read Full Review <ChevronRight size={18} />
              </button>
              <button onClick={() => setCurrentPage('videos')} className="border border-white/30 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors">
                <Play size={18} /> Watch Video
              </button>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => setCurrentPage('videos')}>
            <img src={featuredReview.image} alt={featuredReview.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-red flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={32} fill="white" className="text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <p className="text-sm font-semibold line-clamp-1">{featuredReview.title}</p>
              <p className="text-xs text-gray-300">18:42 · 2.4M views</p>
            </div>
          </div>
        </div>
      </section>

      {/* Breaking news strip */}
      {breakingNews && (
        <section className="bg-brand-red text-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
            <span className="bg-white text-brand-red text-xs font-bold uppercase px-2.5 py-1 rounded-full shrink-0 flex items-center gap-1">
              <Flame size={12} /> Breaking
            </span>
            <button onClick={() => setCurrentPage('news')} className="text-sm font-medium hover:underline text-left flex-1 line-clamp-1">
              {breakingNews.title}
            </button>
            <ChevronRight size={16} className="shrink-0 opacity-70" />
          </div>
        </section>
      )}

      {/* 3-column grid */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {/* Latest Reviews */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="section-heading flex items-center gap-2"><Sparkles size={22} className="text-brand-red" /> Latest Reviews</h2>
            <button onClick={() => setCurrentPage('reviews')} className="text-xs font-semibold text-brand-red hover:underline">View all</button>
          </div>
          <div className="space-y-4">
            {latestReviews.slice(0, 3).map((r) => (
              <div key={r.id} onClick={() => setCurrentPage('reviews')} className="group flex gap-3 cursor-pointer">
                <img src={r.image} alt={r.title} loading="lazy" className="w-24 h-24 rounded-lg object-cover shrink-0" />
                <div className="min-w-0 flex-1">
                  <Badge label={r.category} variant="neutral" />
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-white line-clamp-2 mt-1 group-hover:text-brand-red transition-colors">{r.title}</h3>
                  <div className="flex items-center justify-between mt-1.5">
                    <Rating value={r.rating} size="sm" showValue={false} />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">{r.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Breaking News */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="section-heading flex items-center gap-2"><TrendingUp size={22} className="text-brand-orange" /> Breaking News</h2>
            <button onClick={() => setCurrentPage('news')} className="text-xs font-semibold text-brand-orange hover:underline">View all</button>
          </div>
          {featuredNews && (
            <div onClick={() => setCurrentPage('news')} className="group cursor-pointer mb-4">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                <img src={featuredNews.image} alt={featuredNews.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 left-2"><Badge label="Featured" variant="orange" /></div>
              </div>
              <h3 className="font-bold text-base text-gray-900 dark:text-white line-clamp-2 group-hover:text-brand-orange transition-colors">{featuredNews.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{featuredNews.date} · {featuredNews.readTime}</p>
            </div>
          )}
          <div className="space-y-4 border-t border-gray-200 dark:border-dark-border pt-4">
            {latestNews.slice(0, 2).map((n) => (
              <NewsCard key={n.id} article={n} variant="compact" />
            ))}
          </div>
        </div>

        {/* Top Comparisons */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="section-heading flex items-center gap-2"><BookOpen size={22} className="text-brand-blue" /> Top Comparisons</h2>
            <button onClick={() => setCurrentPage('comparisons')} className="text-xs font-semibold text-brand-blue hover:underline">View all</button>
          </div>
          <div className="space-y-3">
            {topComparisons.map((c) => (
              <ComparisonCard key={c.id} {...c} />
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><AdSlot size="leaderboard" /></div>

      {/* Best Of buying guides */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="section-heading flex items-center gap-2"><BookOpen size={22} className="text-brand-green" /> Best Of — Buying Guides</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Curated picks for every budget and use case</p>
          </div>
          <button onClick={() => setCurrentPage('buying-guides')} className="text-sm font-semibold text-brand-green hover:underline shrink-0">All guides →</button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {buyingGuides.slice(0, 6).map((guide) => (
            <article
              key={guide.id}
              onClick={() => setCurrentPage('buying-guides')}
              className="group bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border overflow-hidden card-hover cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={guide.image} alt={guide.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3"><Badge label={guide.budget} variant="green" /></div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2 mb-1 group-hover:text-brand-green transition-colors">{guide.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">{guide.subtitle}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-100 dark:border-dark-border">
                  <span>{guide.itemCount} picks</span>
                  <span>Updated {guide.updatedDate}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <NewsletterSignup variant="banner" />
    </div>
  );
}
