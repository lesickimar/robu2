import site from '../data/site.json';
import brandsData from '../data/brands.json';
import basketsData from '../data/baskets.json';
import packagesData from '../data/packages.json';

export type Site = typeof site;
export type Brand = (typeof brandsData.items)[number];
export type Basket = (typeof basketsData.items)[number];
export type GiftPackage = (typeof packagesData.items)[number];

export { site };

export const brands = brandsData.items;
export const baskets = basketsData.items;
export const packages = packagesData.items;

/**
 * Prefix path with Astro `base` (e.g. `/robu2` on GitHub Pages).
 * Use for public assets and internal links so they work under a subpath.
 */
export function asset(path: string) {
  if (!path) return path;
  if (/^(https?:|tel:|mailto:|#)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL || '/';
  if (path === '/') return base;
  const clean = path.replace(/^\//, '');
  return `${base.endsWith('/') ? base : `${base}/`}${clean}`;
}

export function activeBrands() {
  return brands
    .filter((b) => b.active)
    .sort((a, b) => a.order - b.order);
}

export function featuredBaskets() {
  return baskets
    .filter((b) => b.featured)
    .sort((a, b) => a.order - b.order);
}

export function allBaskets() {
  return [...baskets].sort((a, b) => a.order - b.order);
}

export function allPackages() {
  return [...packages].sort((a, b) => a.order - b.order);
}

export function featuredPackages() {
  return packages
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order);
}

export function telHref() {
  return `tel:${site.phone.replace(/\s/g, '')}`;
}

export function fullAddress() {
  const a = site.address;
  return `${a.street}, ${a.postalCode} ${a.city}`;
}

/** Google Maps embed — override w site.mapEmbedUrl albo auto z miasta/adresu */
export function mapEmbedSrc() {
  if (site.mapEmbedUrl) return site.mapEmbedUrl;
  const a = site.address;
  const placeholder = /uzupełn|do uzup/i.test(a.street);
  const q = placeholder
    ? `${a.postalCode} ${a.city}, Polska`
    : fullAddress() + ', Polska';
  return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=14&output=embed`;
}

export function mapLinkHref() {
  const a = site.address;
  const placeholder = /uzupełn|do uzup/i.test(a.street);
  const q = placeholder
    ? `${a.postalCode} ${a.city}, Polska`
    : fullAddress() + ', Polska';
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}
