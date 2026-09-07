// Site-wide constants and helpers. Name and links live here once.
export const SITE = {
  name: 'Siddharth Shekhar',
  description: 'Personal site of Siddharth Shekhar.',
  github: 'https://github.com/siddharthshekharr',
};

// Navigation, in order. Two links; the current one renders as bold text.
export const NAV = [
  { href: '/reading/', label: 'Reading' },
  { href: '/routine/', label: 'Routine' },
];

// Prefix an internal path with the configured base ("/site-astro" or "").
// BASE_URL carries a trailing slash when trailingSlash is "always", so strip it once.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => base + path;

// ISO date, the one date format used everywhere on the site.
export const fmtDate = (d: Date) => d.toISOString().slice(0, 10);
