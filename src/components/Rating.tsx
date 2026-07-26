interface RatingProps {
  value: number;
  max?: number;
  showValue?: boolean;
  size?: 'sm' | 'md';
}

export function Rating({ value, max = 10, showValue = true, size = 'md' }: RatingProps) {
  const percentage = (value / max) * 100;
  const color =
    value >= 9 ? 'bg-brand-green' : value >= 7 ? 'bg-brand-orange' : 'bg-brand-red';
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';

  return (
    <div className="flex items-center gap-2">
      {showValue && (
        <span className={`font-bold ${textSize} text-gray-900 dark:text-white`}>
          {value.toFixed(1)}
          <span className="text-gray-400 font-normal">/{max}</span>
        </span>
      )}
      <div className={`w-16 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden`}>
        <div className={`h-full rounded-full ${color}`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
