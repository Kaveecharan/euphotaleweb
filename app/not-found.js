import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SECTION_IDS, anchor } from '@/lib/site';

export const metadata = {
  title: 'Page not found',
  // A 404 has nothing worth indexing and every crawler should be told so.
  robots: { index: false, follow: true },
};

/**
 * 404.
 *
 * The static export emits this as `404.html`, which is what Apache serves via
 * the `ErrorDocument` rule in public/.htaccess. Without this file that rule
 * points at nothing and a mistyped URL gets the bare server error page.
 */
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main" className="wash">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-5 py-28 text-center sm:px-8 sm:py-36">
          <p className="eyebrow mb-4">
            <span aria-hidden="true" className="inline-block h-1 w-1 rounded-full bg-accent" />
            404
          </p>
          <h1 className="headline text-[clamp(2rem,5vw,3rem)]">This page was not kept.</h1>
          <p className="measure mt-5 text-[1.0625rem] leading-relaxed text-ink-mute">
            The link is wrong, or whatever was here has moved. Nothing of yours is affected.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary">
              Back to the start
            </Link>
            <Link href={anchor(SECTION_IDS.uses)} className="btn-secondary">
              See what EuphoTale is for
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
