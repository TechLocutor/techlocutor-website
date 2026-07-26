import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useNav } from '@/context/NavContext';
import type { Page } from '@/types';
import { Search, Menu, X, Youtube, Instagram, Twitter, Facebook } from 'lucide-react';
import { useState } from 'react';

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Reviews', page: 'reviews' },
  { label: 'News', page: 'news' },
  { label: 'Comparisons', page: 'comparisons' },
  { label: 'Buying Guides', page: 'buying-guides' },
  { label: 'How-To', page: 'how-to' },
  { label: 'Deals', page: 'deals' },
  { label: 'Videos', page: 'videos' },
  { label: 'About', page: 'about' },
  { label: 'Contact', page: 'contact' },
];

export function Header() {
  const { currentPage, setCurrentPage, searchQuery, setSearchQuery } = useNav();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleNav = (page: Page) => {
    setCurrentPage(page);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md border-b border-gray-200 dark:border-dark-border">
      {/* Top bar */}
      <div className="hidden md:block border-b border-gray-100 dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-9">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Your Voice in Technology · India's Honest Tech Review Channel
          </p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-brand-red transition-colors"><Youtube size={15} /></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-brand-orange transition-colors"><Instagram size={15} /></a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-brand-blue transition-colors"><Twitter size={15} /></a>
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-brand-blue transition-colors"><Facebook size={15} /></a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 gap-4">
        <button onClick={() => handleNav('home')} className="flex items-center gap-2.5 shrink-0">
          <Logo size={38} />
          <div className="hidden sm:block text-left leading-tight">
            <div className="font-extrabold text-lg tracking-tight text-gray-900 dark:text-white">Tech Locutor</div>
            <div className="text-[10px] text-gray-500 dark:text-gray-400 -mt-0.5">Your Voice in Technology</div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNav(item.page)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentPage === item.page
                  ? 'text-brand-red'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Search size={18} />
          </button>
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reviews, news, guides..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/40"
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-2 grid grid-cols-2 gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`px-3 py-2.5 text-sm font-medium rounded-lg text-left transition-colors ${
                  currentPage === item.page
                    ? 'text-brand-red bg-brand-red/5'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
