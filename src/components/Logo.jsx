export default function Logo({ className = '', height = 56, width = 96 }) {
  // Maintain the logo's natural aspect ratio (1179 x 760 ≈ 1.55:1)

  return (
    <img
      src="/logo.png"
      alt="Radex Objektmanagement GmbH"
      className={className}
      width={Math.round(width)}
      height={height}
      style={{ height: `${height}px`, width: `${width}px`, display: 'block' }}
    />
  );
}
