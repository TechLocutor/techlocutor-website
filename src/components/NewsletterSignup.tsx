import { useState } from 'react';
import { Check, AlertCircle, Mail } from 'lucide-react';

export function NewsletterSignup({ variant = 'banner' }: { variant?: 'banner' | 'inline' }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (variant === 'inline') {
    return (
      <div className="bg-gradient-to-br from-brand-red/10 to-brand-blue/10 dark:from-brand-red/5 dark:to-brand-blue/5 rounded-xl p-6 border border-gray-200 dark:border-dark-border">
        {submitted ? (
          <div className="flex items-center gap-3 text-brand-green">
            <Check size={24} />
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">You're subscribed!</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Watch your inbox for our weekly tech digest.</p>
            </div>
          </div>
        ) : (
          <>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">Weekly Tech Digest</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Reviews, news, and deals — delivered every Sunday.</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-lg bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red/40"
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </>
        )}
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 my-16">
      <div className="brand-gradient rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative px-6 py-12 md:py-16 text-center text-white">
          <Mail size={36} className="mx-auto mb-3" />
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Join 50,000+ Tech Enthusiasts</h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">Get our weekly digest of the best reviews, breaking news, and exclusive deals — straight to your inbox.</p>
          {submitted ? (
            <div className="inline-flex items-center gap-2 bg-white text-brand-green px-5 py-3 rounded-lg font-semibold">
              <Check size={18} /> Thanks for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button type="submit" className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors whitespace-nowrap">Subscribe Free</button>
            </form>
          )}
          <p className="text-xs text-white/70 mt-4 flex items-center justify-center gap-1">
            <AlertCircle size={12} /> No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
