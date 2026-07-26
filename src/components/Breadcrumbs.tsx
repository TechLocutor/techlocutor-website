import { useNav } from '@/context/NavContext';
import type { Page } from '@/types';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; page?: Page }[];
}

export function Breadcrumbs({ items }: BreadcrumbProps) {
  const { setCurrentPage } = useNav();
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-6 flex-wrap">
      <button onClick={() => setCurrentPage('home')} className="hover:text-brand-red transition-colors">Home</button>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1">
          <ChevronRight size={13} className="text-gray-400" />
          {item.page ? (
            <button onClick={() => item.page && setCurrentPage(item.page)} className="hover:text-brand-red transition-colors">{item.label}</button>
          ) : (
            <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
