interface BadgeProps {
  label: string;
  variant?: 'red' | 'orange' | 'green' | 'blue' | 'neutral' | 'sponsored';
  size?: 'sm' | 'md';
}

const variants = {
  red: 'bg-brand-red/10 text-brand-red border-brand-red/20',
  orange: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
  green: 'bg-brand-green/10 text-brand-green border-brand-green/20',
  blue: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
  neutral: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700',
  sponsored: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 border-yellow-300/40',
};

export function Badge({ label, variant = 'neutral', size = 'sm' }: BadgeProps) {
  const sizeClass = size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-2.5 py-1';
  return (
    <span className={`tag-pill border ${variants[variant]} ${sizeClass}`}>
      {label}
    </span>
  );
}
