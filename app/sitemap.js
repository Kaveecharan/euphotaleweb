import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

/**
 * The sitemap.
 *
 * Derived from one list so a new page is one line here rather than a URL that
 * exists and is never announced. The 404 is deliberately absent, and so are
 * in-page anchors: a fragment is not a separate document and listing them
 * dilutes the real pages.
 */
const ROUTES = [
  { path: '/',                priority: 1.0, changeFrequency: 'monthly' },
  { path: '/about',           priority: 0.7, changeFrequency: 'yearly' },
  { path: '/delete-account',  priority: 0.5, changeFrequency: 'yearly' },
  { path: '/privacy-policy',  priority: 0.4, changeFrequency: 'yearly' },
  { path: '/terms',           priority: 0.4, changeFrequency: 'yearly' },
];

export default function sitemap() {
  const lastModified = new Date();

  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    // trailingSlash is on in next.config.mjs, so the canonical form of every
    // URL below ends in one. A sitemap that disagrees with the served URL
    // reports a redirect on every entry.
    url: `${SITE_URL}${path === '/' ? '/' : `${path}/`}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
