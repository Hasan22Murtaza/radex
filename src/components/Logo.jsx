import { LOGO_ALT, LOGO_SRC } from '../constants/brand';

export default function Logo({ className = '', height = 56 }) {
  return (
    <img
      src={LOGO_SRC}
      alt={LOGO_ALT}
      className={className}
      height={height}
      style={{ height: `${height}px`, width: 'auto', display: 'block' }}
    />
  );
}
