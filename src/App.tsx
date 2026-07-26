import { ThemeProvider } from '@/context/ThemeContext';
import { NavProvider, useNav } from '@/context/NavContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NewsTicker } from '@/components/NewsTicker';
import { CookieConsent } from '@/components/CookieConsent';
import { BackToTop } from '@/components/BackToTop';
import { HomePage } from '@/pages/HomePage';
import { ReviewsPage } from '@/pages/ReviewsPage';
import { NewsPage } from '@/pages/NewsPage';
import { ComparisonsPage } from '@/pages/ComparisonsPage';
import { BuyingGuidesPage } from '@/pages/BuyingGuidesPage';
import { HowToPage } from '@/pages/HowToPage';
import { DealsPage } from '@/pages/DealsPage';
import { VideosPage } from '@/pages/VideosPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { SearchResults } from '@/pages/SearchResults';

function PageRouter() {
  const { currentPage, searchQuery } = useNav();

  if (searchQuery.trim().length > 0) {
    return <SearchResults />;
  }

  switch (currentPage) {
    case 'home': return <HomePage />;
    case 'reviews': return <ReviewsPage />;
    case 'news': return <NewsPage />;
    case 'comparisons': return <ComparisonsPage />;
    case 'buying-guides': return <BuyingGuidesPage />;
    case 'how-to': return <HowToPage />;
    case 'deals': return <DealsPage />;
    case 'videos': return <VideosPage />;
    case 'about': return <AboutPage />;
    case 'contact': return <ContactPage />;
    default: return <HomePage />;
  }
}

function AppContent() {
  const { searchQuery, setSearchQuery } = useNav();
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-white transition-colors">
      <Header />
      <NewsTicker />
      <main>
        <PageRouter />
      </main>
      <Footer />
      <CookieConsent />
      <BackToTop />
      {searchQuery.trim().length > 0 && (
        <button
          onClick={() => setSearchQuery('')}
          className="fixed top-20 right-4 z-50 bg-brand-red text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg"
        >
          Clear search ✕
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavProvider>
        <AppContent />
      </NavProvider>
    </ThemeProvider>
  );
}
