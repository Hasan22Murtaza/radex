import { LOGO_ALT, LOGO_SRC } from '../constants/brand';

export default function Logo({ className = 'site-logo', height }) {
  return (
    <img
      src={LOGO_SRC}
      alt={LOGO_ALT}
      className={className}
      {...(height ? { style: { height: `${height}px` } } : {})}
    />
  );
}
