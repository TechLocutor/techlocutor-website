import { useState } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/Badge';
import { Check, Mail, Package, Download, Youtube, Instagram, Twitter, Facebook, MapPin, Send } from 'lucide-react';

type FormType = 'business' | 'pr';

export function ContactPage() {
  const [formType, setFormType] = useState<FormType>('business');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">Get in Touch</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Have a question, business inquiry, or review unit request? We'd love to hear from you.</p>
      </div>

      {/* Form type toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setFormType('business')}
            className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-colors flex items-center gap-2 ${
              formType === 'business' ? 'bg-white dark:bg-dark-card text-brand-red shadow-sm' : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <Mail size={15} /> Business Inquiry
          </button>
          <button
            onClick={() => setFormType('pr')}
            className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-colors flex items-center gap-2 ${
              formType === 'pr' ? 'bg-white dark:bg-dark-card text-brand-red shadow-sm' : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <Package size={15} /> PR / Review Unit
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Form */}
        <div className="md:col-span-2">
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-6">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-brand-green" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Thanks for reaching out. We'll get back to you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name <span className="text-brand-red">*</span></label>
                    <input required type="text" className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-dark-border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red/40" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email <span className="text-brand-red">*</span></label>
                    <input required type="email" className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-dark-border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red/40" placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Subject <span className="text-brand-red">*</span></label>
                  <input required type="text" className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-dark-border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red/40" placeholder="What's this about?" />
                </div>

                {formType === 'pr' && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Company / Brand</label>
                      <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-dark-border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red/40" placeholder="Brand name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Product for Review</label>
                      <input type="text" className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-dark-border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red/40" placeholder="Product name & model" />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message <span className="text-brand-red">*</span></label>
                  <textarea required rows={5} className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-dark-border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red/40 resize-none" placeholder={formType === 'pr' ? 'Tell us about the product, review timeline, and any specific requirements...' : 'Tell us how we can help...'} />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto flex items-center gap-2 justify-center">
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-5">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Direct Contact</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:hello@techlocutor.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-brand-red transition-colors">
                <Mail size={15} className="text-brand-red" /> hello@techlocutor.com
              </a>
              <a href="mailto:pr@techlocutor.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-brand-red transition-colors">
                <Package size={15} className="text-brand-orange" /> pr@techlocutor.com
              </a>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin size={15} className="text-brand-green" /> Bengaluru, Karnataka, India
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-5">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Follow Us</h3>
            <div className="grid grid-cols-4 gap-2">
              <a href="#" aria-label="YouTube" className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-red hover:bg-brand-red/10 transition-colors"><Youtube size={18} /></a>
              <a href="#" aria-label="Instagram" className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-orange hover:bg-brand-orange/10 transition-colors"><Instagram size={18} /></a>
              <a href="#" aria-label="Twitter" className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-blue hover:bg-brand-blue/10 transition-colors"><Twitter size={18} /></a>
              <a href="#" aria-label="Facebook" className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-blue hover:bg-brand-blue/10 transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-red/10 to-brand-blue/10 dark:from-brand-red/5 dark:to-brand-blue/5 rounded-xl p-5 border border-gray-200 dark:border-dark-border">
            <div className="flex items-center gap-2 mb-2">
              <Download size={18} className="text-brand-red" />
              <h3 className="font-bold text-gray-900 dark:text-white text-sm">Media Kit</h3>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">Brand logos, stats, and advertising rates.</p>
            <button className="btn-outline w-full text-xs py-2">Download Media Kit</button>
            <div className="mt-3"><Badge label="PDF · 2.4 MB" variant="neutral" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
