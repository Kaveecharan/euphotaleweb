import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

/**
 * robots.txt.
 *
 * Everything is crawlable except the screenshot directory's raw listing, which
 * is not a page and has nothing useful in an index. The sitemap URL is built
 * from lib/site.js so moving the domain does not leave a pointer at the old one.
 */
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
