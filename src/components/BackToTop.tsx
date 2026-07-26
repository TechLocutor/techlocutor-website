import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-4 right-4 z-50 w-11 h-11 rounded-full bg-brand-red text-white shadow-lg flex items-center justify-center hover:bg-red-700 transition-all hover:scale-110 animate-fade-in"
    >
      <ArrowUp size={20} />
    </button>
  );
}
