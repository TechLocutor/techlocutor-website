import { useNav } from '@/context/NavContext';
import type { Review, NewsArticle } from '@/types';
import { Rating } from '@/components/Rating';
import { Badge } from '@/components/Badge';
import { Clock, ArrowRight, Zap } from 'lucide-react';

export function ReviewCard({ review }: { review: Review }) {
  const { setCurrentPage } = useNav();
  return (
    <article
      onClick={() => setCurrentPage('reviews')}
      className="group bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border overflow-hidden card-hover cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img src={review.image} alt={review.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {review.badge && (
          <div className="absolute top-3 left-3">
            <Badge label={review.badge} variant={review.badge === "Editor's Choice" ? 'red' : review.badge === 'Best Value' ? 'orange' : 'green'} />
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge label={review.category} variant="neutral" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-base text-gray-900 dark:text-white line-clamp-2 mb-2 group-hover:text-brand-red transition-colors">{review.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">{review.excerpt}</p>
        <div className="flex items-center justify-between mb-3">
          <Rating value={review.rating} size="sm" />
          <span className="text-sm font-semibold text-gray-900 dark:text-white">{review.price}</span>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-dark-border">
          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1"><Clock size={12} /> {review.readTime}</span>
          <span className="text-xs font-semibold text-brand-red flex items-center gap-1 group-hover:gap-2 transition-all">Read Full Review <ArrowRight size={13} /></span>
        </div>
      </div>
    </article>
  );
}

export function NewsCard({ article, variant = 'default' }: { article: NewsArticle; variant?: 'default' | 'featured' | 'compact' }) {
  const { setCurrentPage } = useNav();
  const variantClass = variant === 'featured'
    ? 'lg:grid lg:grid-cols-2 lg:gap-0'
    : variant === 'compact'
    ? 'flex gap-3'
    : '';

  if (variant === 'compact') {
    return (
      <article
        onClick={() => setCurrentPage('news')}
        className="group flex gap-3 cursor-pointer"
      >
        <img src={article.image} alt={article.title} loading="lazy" className="w-20 h-20 rounded-lg object-cover shrink-0" />
        <div className="min-w-0">
          <Badge label={article.category} variant={article.category === 'Leaks' ? 'red' : article.category === 'AI' ? 'green' : 'blue'} />
          <h4 className="font-semibold text-sm text-gray-900 dark:text-white line-clamp-2 mt-1 group-hover:text-brand-red transition-colors">{article.title}</h4>
          <span className="text-xs text-gray-500 dark:text-gray-400">{article.date}</span>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={() => setCurrentPage('news')}
      className={`group bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border overflow-hidden card-hover cursor-pointer ${variantClass}`}
    >
      <div className={`relative overflow-hidden bg-gray-100 dark:bg-gray-800 ${variant === 'featured' ? 'aspect-video lg:h-full' : 'aspect-video'}`}>
        <img src={article.image} alt={article.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {article.breaking && (
          <div className="absolute top-3 left-3">
            <Badge label="Breaking" variant="red" />
          </div>
        )}
      </div>
      <div className={`p-4 ${variant === 'featured' ? 'lg:p-6 flex flex-col justify-center' : ''}`}>
        <div className="flex items-center gap-2 mb-2">
          <Badge label={article.category} variant={article.category === 'Leaks' ? 'red' : article.category === 'AI' ? 'green' : 'blue'} />
          <span className="text-xs text-gray-500 dark:text-gray-400">{article.date}</span>
        </div>
        <h3 className={`font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-brand-red transition-colors mb-2 ${variant === 'featured' ? 'text-xl lg:text-2xl' : 'text-base'}`}>{article.title}</h3>
        <p className={`text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3 ${variant === 'featured' ? 'lg:line-clamp-3' : ''}`}>{article.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>By {article.author}</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
        </div>
      </div>
    </article>
  );
}

interface ComparisonCardProps {
  title: string;
  image: string;
  products: string[];
  voteCount: number;
}

export function ComparisonCard({ title, image, products, voteCount }: ComparisonCardProps) {
  const { setCurrentPage } = useNav();
  return (
    <article
      onClick={() => setCurrentPage('comparisons')}
      className="group bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border overflow-hidden card-hover cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3">
          <Badge label="Comparison" variant="blue" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-base text-gray-900 dark:text-white line-clamp-2 mb-2 group-hover:text-brand-red transition-colors">{title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{products.join(' vs ')}</p>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1"><Zap size={12} className="text-brand-orange" /> {voteCount.toLocaleString()} votes</span>
          <span className="font-semibold text-brand-blue">Compare now →</span>
        </div>
      </div>
    </article>
  );
}
