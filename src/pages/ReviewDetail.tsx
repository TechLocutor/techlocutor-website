import type { Review } from '@/types';
import { Rating } from '@/components/Rating';
import { Badge } from '@/components/Badge';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AdSlot } from '@/components/AdSlot';
import { reviews } from '@/data/mockData';
import { ReviewCard } from '@/components/Cards';
import { Check, X, Play, ShoppingCart, ThumbsUp, ThumbsDown, Calendar, Clock, Share2, Bookmark } from 'lucide-react';
import { useState } from 'react';

const specTable: Record<string, string> = {
  Display: '6.9" Dynamic AMOLED 2X, 120Hz, 2600 nits',
  Processor: 'Snapdragon 8 Elite',
  RAM: '12GB LPDDR5X',
  Storage: '256GB / 512GB / 1TB UFS 4.0',
  Camera: '200MP main + 50MP periscope + 10MP tele + 50MP ultrawide',
  Battery: '5000mAh',
  Charging: '45W wired, 15W wireless, 4.5W reverse',
  OS: 'Android 15, One UI 7.1',
  Build: 'Titanium frame, Gorilla Armor 2',
  Weight: '218g',
  'IP Rating': 'IP68 dust/water resistant',
  Connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, USB-C 3.2',
};

export function ReviewDetail({ review, onBack }: { review: Review; onBack: () => void }) {
  const [vote, setVote] = useState<'up' | 'down' | null>(null);
  const related = reviews.filter((r) => r.id !== review.id && r.category === review.category).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Reviews', page: 'reviews' }, { label: review.title }]} />

      {/* Hero */}
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 group">
        <img src={review.image} alt={review.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <button className="absolute inset-0 flex items-center justify-center" aria-label="Play video review">
          <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play size={28} fill="white" className="text-white ml-1" />
          </div>
        </button>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <div className="flex gap-2 mb-2">
              {review.badge && <Badge label={review.badge} variant="red" size="md" />}
              <Badge label={review.category} variant="neutral" size="md" />
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white">{review.title}</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <span className="flex items-center gap-1.5"><Calendar size={14} /> {review.date}</span>
        <span className="flex items-center gap-1.5"><Clock size={14} /> {review.readTime}</span>
        <span className="font-semibold text-gray-900 dark:text-white">By Tech Locutor Team</span>
        <div className="flex gap-2 ml-auto">
          <button className="w-9 h-9 rounded-lg border border-gray-200 dark:border-dark-border flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Share"><Share2 size={15} /></button>
          <button className="w-9 h-9 rounded-lg border border-gray-200 dark:border-dark-border flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Save"><Bookmark size={15} /></button>
        </div>
      </div>

      <AdSlot size="leaderboard" className="mb-8" />

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">{review.excerpt}</p>

      {/* Quick specs */}
      <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-6 mb-8">
        <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Quick Specs</h2>
        <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
          {Object.entries(specTable).map(([key, val]) => (
            <div key={key} className="flex justify-between gap-4 text-sm border-b border-gray-100 dark:border-dark-border pb-2">
              <dt className="text-gray-500 dark:text-gray-400 font-medium shrink-0">{key}</dt>
              <dd className="text-gray-900 dark:text-white text-right">{val}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Pros & Cons */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-6">
          <h3 className="font-bold text-lg text-brand-green mb-4 flex items-center gap-2"><Check size={20} /> Pros</h3>
          <ul className="space-y-2.5">
            {review.pros.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <Check size={16} className="text-brand-green shrink-0 mt-0.5" /> {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-brand-red/5 border border-brand-red/20 rounded-xl p-6">
          <h3 className="font-bold text-lg text-brand-red mb-4 flex items-center gap-2"><X size={20} /> Cons</h3>
          <ul className="space-y-2.5">
            {review.cons.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <X size={16} className="text-brand-red shrink-0 mt-0.5" /> {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Detailed review body */}
      <div className="prose-content mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">In-Depth Review</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>{review.title} arrives at a time when the {review.category.toLowerCase()} market in India is more competitive than ever. We tested it extensively over two weeks across everyday tasks, gaming, and content creation to give you a verdict you can trust.</p>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white pt-2">Design and Build</h3>
          <p>The first thing you notice is the premium feel in hand. Every detail has been considered — from the weight distribution to the button placement. The build quality inspires confidence, and the materials used are top-tier for this price segment.</p>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white pt-2">Performance</h3>
          <p>In our benchmark suite, the device consistently outperformed its predecessors. Real-world usage matches the synthetic numbers — apps open instantly, multitasking is fluid, and even heavy workloads don't break a sweat.</p>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white pt-2">Display and Audio</h3>
          <p>The display is one of the standout features. Colors are vibrant without being oversaturated, blacks are deep, and brightness is more than adequate for outdoor use. Paired with the capable speaker system, media consumption is a joy.</p>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white pt-2">Battery and Charging</h3>
          <p>Battery life comfortably lasts a full day of mixed usage. The charging speed is impressive — you can top up from 0 to 50% in under 20 minutes, perfect for those quick top-ups before heading out.</p>
        </div>
      </div>

      {/* Benchmark placeholder */}
      <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-6 mb-8">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Performance Benchmarks</h3>
        <div className="space-y-3">
          {[
            { name: 'AnTuTu v10', score: '2,340,521', pct: 95 },
            { name: 'Geekbench 6 Single', score: '3,142', pct: 88 },
            { name: 'Geekbench 6 Multi', score: '9,876', pct: 92 },
            { name: '3DMark Wild Life', score: '4,521', pct: 90 },
          ].map((b) => (
            <div key={b.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700 dark:text-gray-300">{b.name}</span>
                <span className="font-semibold text-gray-900 dark:text-white">{b.score}</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <div className="h-full rounded-full brand-gradient" style={{ width: `${b.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verdict */}
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">The Verdict</h2>
            <p className="text-gray-300 leading-relaxed mb-4">{review.verdict}</p>
            <div className="flex items-center gap-3">
              <span className="text-4xl font-extrabold">{review.rating.toFixed(1)}</span>
              <div>
                <Rating value={review.rating} showValue={false} />
                <span className="text-xs text-gray-400">out of 10</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
          <button
            onClick={() => setVote(vote === 'up' ? null : 'up')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${vote === 'up' ? 'bg-brand-green text-white' : 'bg-white/10 hover:bg-white/20'}`}
          >
            <ThumbsUp size={15} /> Helpful
          </button>
          <button
            onClick={() => setVote(vote === 'down' ? null : 'down')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${vote === 'down' ? 'bg-brand-red text-white' : 'bg-white/10 hover:bg-white/20'}`}
          >
            <ThumbsDown size={15} /> Not helpful
          </button>
        </div>
      </div>

      {/* Price & availability */}
      <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Price & Availability</h3>
          <Badge label="Affiliate Links" variant="sponsored" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Prices may vary. As an affiliate we may earn a commission from qualifying purchases.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          <a href="#" className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-dark-border hover:border-brand-orange transition-colors group">
            <div className="flex items-center gap-3">
              <ShoppingCart size={20} className="text-brand-orange" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Amazon India</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">In stock · Free delivery</p>
              </div>
            </div>
            <span className="font-bold text-gray-900 dark:text-white group-hover:text-brand-orange transition-colors">{review.price}</span>
          </a>
          <a href="#" className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-dark-border hover:border-brand-blue transition-colors group">
            <div className="flex items-center gap-3">
              <ShoppingCart size={20} className="text-brand-blue" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Flipkart</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">In stock · Fast delivery</p>
              </div>
            </div>
            <span className="font-bold text-gray-900 dark:text-white group-hover:text-brand-blue transition-colors">{review.price}</span>
          </a>
        </div>
      </div>

      <AdSlot size="leaderboard" className="mb-8" />

      {/* Related reviews */}
      {related.length > 0 && (
        <div>
          <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">Related Reviews</h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </div>
      )}

      <button onClick={onBack} className="mt-8 text-sm font-semibold text-brand-red hover:underline">← Back to all reviews</button>
    </div>
  );
}
