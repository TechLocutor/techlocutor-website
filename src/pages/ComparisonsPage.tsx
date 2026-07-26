import { useState } from 'react';
import { comparisonProducts } from '@/data/mockData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AdSlot } from '@/components/AdSlot';
import { Rating } from '@/components/Rating';
import { Badge } from '@/components/Badge';
import { GitCompare, X, Plus, Trophy, ThumbsUp } from 'lucide-react';
import type { ComparisonProduct } from '@/types';

const popularComparisons = [
  { id: 'p1', title: 'Samsung Galaxy S25 Ultra vs OnePlus 13', products: ['Samsung S25 Ultra', 'OnePlus 13'], image: comparisonProducts[0].image, votes: 12450 },
  { id: 'p2', title: 'iPhone 16 Pro vs Galaxy S25 Ultra', products: ['iPhone 16 Pro', 'Galaxy S25 Ultra'], image: comparisonProducts[2].image, votes: 18200 },
  { id: 'p3', title: 'Pixel 9 Pro vs OnePlus 13', products: ['Pixel 9 Pro', 'OnePlus 13'], image: comparisonProducts[3].image, votes: 8730 },
  { id: 'p4', title: 'Galaxy S25 Ultra vs iPhone 16 Pro vs Pixel 9 Pro', products: ['Galaxy S25 Ultra', 'iPhone 16 Pro', 'Pixel 9 Pro'], image: comparisonProducts[1].image, votes: 21340 },
];

export function ComparisonsPage() {
  const [selected, setSelected] = useState<ComparisonProduct[]>([]);
  const [votes, setVotes] = useState<Record<string, number>>({});

  const toggleProduct = (product: ComparisonProduct) => {
    setSelected((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) return prev.filter((p) => p.id !== product.id);
      if (prev.length >= 3) return prev;
      return [...prev, product];
    });
  };

  const allSpecKeys = selected.length > 0 ? Array.from(new Set(selected.flatMap((p) => Object.keys(p.specs)))) : [];

  const vote = (productId: string) => {
    setVotes((prev) => ({ ...prev, [productId]: (prev[productId] ?? 0) + 1 }));
  };

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Comparisons' }]} />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Comparisons</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Compare products side-by-side and let the community help you decide.</p>
      </div>

      {/* Popular comparisons */}
      <section className="mb-12">
        <h2 className="section-heading mb-5 flex items-center gap-2"><GitCompare size={22} className="text-brand-blue" /> Popular Comparisons</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {popularComparisons.map((c) => (
            <article key={c.id} className="group bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border overflow-hidden card-hover cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 left-2"><Badge label={`${c.products.length}-way`} variant="blue" /></div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm text-gray-900 dark:text-white line-clamp-2 group-hover:text-brand-blue transition-colors mb-2">{c.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{c.votes.toLocaleString()} community votes</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <AdSlot size="leaderboard" className="mb-10" />

      {/* Interactive comparison tool */}
      <section className="mb-12">
        <h2 className="section-heading mb-2 flex items-center gap-2"><GitCompare size={22} className="text-brand-red" /> Interactive Comparison Tool</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Select 2-3 products to auto-generate a detailed specs table.</p>

        {/* Product picker */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {comparisonProducts.map((p) => {
            const isSelected = selected.find((s) => s.id === p.id);
            const disabled = !isSelected && selected.length >= 3;
            return (
              <button
                key={p.id}
                onClick={() => toggleProduct(p)}
                disabled={disabled}
                className={`relative p-3 rounded-xl border-2 transition-all text-left ${
                  isSelected
                    ? 'border-brand-red bg-brand-red/5'
                    : disabled
                    ? 'border-gray-100 dark:border-dark-border opacity-40 cursor-not-allowed'
                    : 'border-gray-200 dark:border-dark-border hover:border-brand-red/40'
                }`}
              >
                <img src={p.image} alt={p.name} loading="lazy" className="w-full h-20 object-contain mb-2" />
                <p className="text-xs font-semibold text-gray-900 dark:text-white line-clamp-2">{p.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{p.price}</p>
                {isSelected && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-brand-red text-white flex items-center justify-center">
                    <X size={12} />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected products + vote */}
        {selected.length >= 2 && (
          <>
            <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-5 mb-5">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"><Trophy size={18} className="text-brand-orange" /> Which one would you buy?</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {selected.map((p) => {
                  const v = votes[p.id] ?? 0;
                  const pct = totalVotes > 0 ? Math.round((v / totalVotes) * 100) : 0;
                  return (
                    <div key={p.id} className="border border-gray-200 dark:border-dark-border rounded-lg p-4 text-center">
                      <img src={p.image} alt={p.name} className="w-16 h-16 object-contain mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2">{p.name}</p>
                      <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mb-2">
                        <div className="h-full brand-gradient" style={{ width: `${pct}%` }} />
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{v} votes ({pct}%)</p>
                      <button onClick={() => vote(p.id)} className="w-full btn-outline text-xs py-2 flex items-center justify-center gap-1.5">
                        <ThumbsUp size={13} /> Vote
                      </button>
                    </div>
                  );
                })}
              </div>
              {totalVotes > 0 && (
                <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3">{totalVotes} total votes</p>
              )}
            </div>

            {/* Specs table */}
            <div className="overflow-x-auto bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-dark-border">
                    <th className="text-left p-4 font-semibold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">Specification</th>
                    {selected.map((p) => (
                      <th key={p.id} className="text-left p-4 min-w-[180px]">
                        <img src={p.image} alt={p.name} className="w-12 h-12 object-contain mb-2" />
                        <p className="font-bold text-gray-900 dark:text-white text-sm">{p.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{p.price}</p>
                        <div className="mt-2"><Rating value={p.rating} size="sm" /></div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allSpecKeys.map((key) => (
                    <tr key={key} className="border-b border-gray-100 dark:border-dark-border last:border-0">
                      <td className="p-4 font-medium text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">{key}</td>
                      {selected.map((p) => (
                        <td key={p.id} className="p-4 text-gray-900 dark:text-white">{p.specs[key] ?? '—'}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {selected.length < 2 && (
          <div className="border-2 border-dashed border-gray-200 dark:border-dark-border rounded-xl p-12 text-center">
            <Plus size={32} className="mx-auto text-gray-400 mb-3" />
            <p className="text-gray-500 dark:text-gray-400">Select at least 2 products to compare</p>
            <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">You can compare up to 3 products at once</p>
          </div>
        )}
      </section>
    </div>
  );
}
