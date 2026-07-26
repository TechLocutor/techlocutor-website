interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 40, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Tech Locutor TL monogram"
    >
      <defs>
        <clipPath id="clip-outer">
          <circle cx="50" cy="50" r="48" />
        </clipPath>
        <clipPath id="clip-inner">
          <circle cx="50" cy="50" r="40" />
        </clipPath>
      </defs>
      {/* Black badge */}
      <circle cx="50" cy="50" r="50" fill="#000" />
      {/* 4 colored segments */}
      <g clipPath="url(#clip-inner)">
        <path d="M50 50 L50 0 A50 50 0 0 1 100 50 Z" fill="#E53935" />
        <path d="M50 50 L100 50 A50 50 0 0 1 50 100 Z" fill="#FB8C00" />
        <path d="M50 50 L50 100 A50 50 0 0 1 0 50 Z" fill="#7CB342" />
        <path d="M50 50 L0 50 A50 50 0 0 1 50 0 Z" fill="#039BE5" />
      </g>
      {/* Inner black circle with TL */}
      <circle cx="50" cy="50" r="30" fill="#000" />
      {/* TL monogram */}
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontSize="26"
        fontWeight="900"
        fontFamily="Inter, system-ui, sans-serif"
        fill="#fff"
        letterSpacing="-1"
      >
        TL
      </text>
    </svg>
  );
}
