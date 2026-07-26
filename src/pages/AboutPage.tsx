import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Logo } from '@/components/Logo';
import { Badge } from '@/components/Badge';
import { Heart, Shield, Download, Users, Target, Award, FileText, Mail } from 'lucide-react';

const team = [
  { name: 'Ravi Sharma', role: 'Founder & Editor-in-Chief', initials: 'RS', color: 'bg-brand-red' },
  { name: 'Priya Nair', role: 'Senior Reviewer', initials: 'PN', color: 'bg-brand-orange' },
  { name: 'Ankit Verma', role: 'News Editor', initials: 'AV', color: 'bg-brand-green' },
  { name: 'Sneha Pillai', role: 'How-To Writer', initials: 'SP', color: 'bg-brand-blue' },
];

const methodology = [
  { title: 'Independent Testing', desc: 'We test every product for at least 2 weeks before publishing our review. No shortcuts.' },
  { title: 'No Paid Reviews', desc: 'We never accept payment for positive reviews. Brands cannot buy our verdict.' },
  { title: 'Real-World Usage', desc: 'Beyond benchmarks, we use products as you would — daily commutes, gaming, work.' },
  { title: 'Indian Context', desc: 'Pricing, availability, and service quality are evaluated for the Indian market.' },
  { title: 'Transparent Affiliates', desc: 'Affiliate links never influence our ratings. We clearly disclose all affiliate content.' },
  { title: 'Continuous Updates', desc: 'Reviews are updated when products receive major updates or prices change significantly.' },
];

export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'About' }]} />

      {/* Hero */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4"><Logo size={72} /></div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">About Tech Locutor</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Your Voice in Technology — India's friendly, honest, and accessible tech review channel.</p>
      </div>

      {/* Brand story */}
      <section className="mb-12">
        <h2 className="section-heading mb-4 flex items-center gap-2"><Heart size={22} className="text-brand-red" /> Our Story</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>Tech Locutor was born from a simple frustration: tech reviews in India were either too technical, too biased, or too focused on international markets. We believed Indian consumers deserved better — honest reviews that speak their language, understand their budgets, and respect their intelligence.</p>
          <p>Founded in Bengaluru, Tech Locutor has grown from a one-person YouTube channel into a full-fledged tech media brand covering smartphones, laptops, gadgets, AI, and everything in between. Our team tests products the way you use them — in real Indian conditions, with real Indian pricing, for real Indian consumers.</p>
          <p>The word "Locutor" comes from the Latin for "speaker" — and that's exactly what we aim to be. Your voice in technology. We cut through the jargon, the marketing spin, and the hype to tell you what's actually worth your hard-earned money.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="grid md:grid-cols-3 gap-4 mb-12">
        <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-5">
          <Target size={24} className="text-brand-red mb-3" />
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">Our Mission</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Make technology accessible and understandable for every Indian, regardless of their tech background.</p>
        </div>
        <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-5">
          <Shield size={24} className="text-brand-green mb-3" />
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">Our Promise</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Honest reviews you can trust. We call it like we see it — good, bad, and everything in between.</p>
        </div>
        <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-5">
          <Users size={24} className="text-brand-blue mb-3" />
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">Our Community</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Over 1.2 million subscribers across YouTube and social platforms — and growing every day.</p>
        </div>
      </section>

      {/* Review methodology */}
      <section className="mb-12">
        <h2 className="section-heading mb-4 flex items-center gap-2"><Award size={22} className="text-brand-orange" /> Review Methodology & Ethics</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-5">These principles guide every review we publish. They're non-negotiable.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {methodology.map((m) => (
            <div key={m.title} className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-5">
              <h3 className="font-bold text-gray-900 dark:text-white mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full brand-gradient shrink-0" />
                {m.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mb-12">
        <h2 className="section-heading mb-5 flex items-center gap-2"><Users size={22} className="text-brand-blue" /> Meet the Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member) => (
            <div key={member.name} className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-5 text-center">
              <div className={`w-16 h-16 rounded-full ${member.color} text-white font-bold text-xl flex items-center justify-center mx-auto mb-3`}>
                {member.initials}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm">{member.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{member.role}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-4">Team section is a placeholder — more members coming soon.</p>
      </section>

      {/* Press kit */}
      <section className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white text-center">
        <FileText size={36} className="mx-auto mb-3 text-brand-red" />
        <h2 className="text-2xl font-bold mb-2">Press Kit</h2>
        <p className="text-gray-300 mb-5 max-w-md mx-auto">Download our brand assets, logos, and media information for press and partnership inquiries.</p>
        <button className="bg-brand-red px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-red-700 transition-colors">
          <Download size={18} /> Download Press Kit (ZIP)
        </button>
      </section>
    </div>
  );
}
