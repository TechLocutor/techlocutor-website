import { useEffect, useState } from 'react';
import { Cookie, X } from 'lucide-react';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setVisible(true);
  }, []);

  const handle = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem('cookieConsent', choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-4 md:right-auto md:max-w-sm z-[60] animate-slide-up">
      <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl shadow-2xl p-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <Cookie size={18} className="text-brand-orange" />
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm">We use cookies</h4>
          </div>
          <button onClick={() => handle('rejected')} aria-label="Close" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <X size={16} />
          </button>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
          We use cookies to personalise content, serve ads, and analyse traffic. By clicking "Accept", you agree to our use of cookies.
        </p>
        <div className="flex gap-2">
          <button onClick={() => handle('accepted')} className="btn-primary flex-1 text-xs py-2">Accept All</button>
          <button onClick={() => handle('rejected')} className="flex-1 text-xs py-2 rounded-lg border border-gray-300 dark:border-dark-border text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Reject</button>
        </div>
      </div>
    </div>
  );
}
