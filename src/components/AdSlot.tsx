interface AdSlotProps {
  label?: string;
  className?: string;
  size?: 'leaderboard' | 'rectangle' | 'square' | 'skyscraper';
}

const sizes = {
  leaderboard: 'h-24 md:h-20',
  rectangle: 'h-64',
  square: 'h-48',
  skyscraper: 'h-96',
};

export function AdSlot({ label = 'Advertisement', className = '', size = 'leaderboard' }: AdSlotProps) {
  return (
    <div className={`ad-banner ${sizes[size]} ${className}`}>
      <div className="text-center">
        <p className="text-xs uppercase tracking-widest font-semibold">{label}</p>
        <p className="text-[10px] mt-1 opacity-60">Ad Space · 728×90</p>
      </div>
    </div>
  );
}
