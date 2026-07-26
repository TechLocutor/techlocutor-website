import { tickerItems } from '@/data/mockData';
import { useNav } from '@/context/NavContext';
import { Radio } from 'lucide-react';

export function NewsTicker() {
  const { setCurrentPage } = useNav();
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="bg-black text-white border-y border-dark-border overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="shrink-0 bg-brand-red px-3 py-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider z-10">
          <Radio size={13} className="animate-pulse" /> Trending
        </div>
        <div className="ticker-wrap flex-1 py-2">
          <div className="ticker-content">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage('news')}
                className="inline-block px-6 text-xs text-gray-200 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
