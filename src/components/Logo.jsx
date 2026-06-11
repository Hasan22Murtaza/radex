export default function Logo({ className = '', height = 40 }) {
  // SVG scales based on height
  const width = (160 / 40) * height; // standard aspect ratio 4:1

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Radex Objektmanagement Logo"
    >
      {/* Icon: Modern shield with interlocking roof + wave */}
      <g transform="translate(4, 2)">
        {/* Hexagon/Shield Outline */}
        <path
          d="M18 2L32 10V26L18 34L4 26V10L18 2Z"
          stroke="var(--navy)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* House Roof Accent */}
        <path
          d="M10 12L18 6L26 12"
          stroke="var(--gold)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Abstract 'R' tail & Plumbing Wave */}
        <path
          d="M13 22C13 18.5 15.5 16 18 16H22V22H18C15.5 22 13 24.5 13 28"
          stroke="var(--navy-light)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 22L23 28"
          stroke="var(--gold)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      {/* Brand Typography */}
      <g transform="translate(48, 8)">
        {/* RADEX Text */}
        <text
          x="0"
          y="15"
          fill="var(--navy)"
          fontFamily="var(--font-heading)"
          fontSize="20px"
          fontWeight="900"
          letterSpacing="0.08em"
        >
          RADEX
        </text>
        {/* OBJEKTMANAGEMENT Underline/Subtitle */}
        <text
          x="1"
          y="26"
          fill="var(--text-light)"
          fontFamily="var(--font-body)"
          fontSize="6.5px"
          fontWeight="700"
          letterSpacing="0.16em"
        >
          OBJEKTMANAGEMENT GMBH
        </text>
      </g>
    </svg>
  );
}
