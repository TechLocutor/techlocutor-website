import { Logo } from '@/components/Logo';
import { useNav } from '@/context/NavContext';
import type { Page } from '@/types';
import { Youtube, Instagram, Twitter, Facebook, Mail, MapPin, Send } from 'lucide-react';

const footerNav: { title: string; links: { label: string; page: Page }[] }[] = [
  {
    title: 'Content',
    links: [
      { label: 'Reviews', page: 'reviews' },
      { label: 'News', page: 'news' },
      { label: 'Comparisons', page: 'comparisons' },
      { label: 'Buying Guides', page: 'buying-guides' },
      { label: 'How-To & Tips', page: 'how-to' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Videos', page: 'videos' },
      { label: 'Deals', page: 'deals' },
      { label: 'About Us', page: 'about' },
      { label: 'Contact', page: 'contact' },
    ],
  },
];

export function Footer() {
  const { setCurrentPage } = useNav();

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-border mt-16">
      {/* Newsletter banner */}
      <div className="brand-gradient">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl font-bold">Never miss a review</h3>
            <p className="text-white/90 text-sm mt-1">Get the latest tech reviews, news, and deals delivered to your inbox weekly.</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full md:w-auto gap-2 max-w-md"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button type="submit" className="bg-black text-white px-5 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-gray-900 transition-colors whitespace-nowrap">
              <Send size={16} /> Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 mb-3">
            <Logo size={36} />
            <div>
              <div className="font-extrabold text-lg text-gray-900 dark:text-white">Tech Locutor</div>
              <div className="text-[10px] text-gray-500 dark:text-gray-400">Your Voice in Technology</div>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            India's friendly, honest tech review channel. We make technology simple — covering smartphones, laptops, gadgets, AI, and everything in between.
          </p>
          <div className="flex items-center gap-2">
            <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-red hover:bg-brand-red/10 transition-colors"><Youtube size={17} /></a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-orange hover:bg-brand-orange/10 transition-colors"><Instagram size={17} /></a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-blue hover:bg-brand-blue/10 transition-colors"><Twitter size={17} /></a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-blue hover:bg-brand-blue/10 transition-colors"><Facebook size={17} /></a>
          </div>
        </div>

        {footerNav.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => setCurrentPage(link.page)}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-red transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-2"><Mail size={15} className="text-brand-red" /> hello@techlocutor.com</li>
            <li className="flex items-center gap-2"><MapPin size={15} className="text-brand-green" /> Bengaluru, India</li>
          </ul>
          <button
            onClick={() => setCurrentPage('contact')}
            className="mt-4 btn-primary"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400">
          <p>© 2025 Tech Locutor. All rights reserved. techlocutor.com</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center">
            <a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-red transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-brand-red transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-brand-red transition-colors">Affiliate Disclosure</a>
            <span className="text-gray-400 dark:text-gray-600">|</span>
            <span className="text-gray-400 dark:text-gray-600">Made with ♥ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
