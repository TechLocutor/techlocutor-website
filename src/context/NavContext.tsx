import { createContext, useContext, useState } from 'react';
import type { Page } from '@/types';

interface NavContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

const NavContext = createContext<NavContextType>({
  currentPage: 'home',
  setCurrentPage: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
});

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavContext.Provider value={{ currentPage, setCurrentPage: navigate, searchQuery, setSearchQuery }}>
      {children}
    </NavContext.Provider>
  );
}

export const useNav = () => useContext(NavContext);
