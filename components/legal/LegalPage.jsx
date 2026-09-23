import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BRAND } from '@/lib/site';

/**
 * The shell both legal documents render into.
 *
 * Legal pages are the two places on a site where the typography matters most
 * and gets the least attention — they are long, dense, and read by people who
 * are already slightly worried. One shell means both documents get the same
 * measured line length, the same heading rhythm, and the same "last updated"
 * date from lib/site.js rather than two dates that quietly drift apart.
 */
export default function LegalPage({ title, intro, children }) {
  return (
    <>
      <Navbar />
      <main id="main">
        <div className="wash border-b border-hair">
          <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="eyebrow mb-4">
              <span aria-hidden="true" className="inline-block h-1 w-1 rounded-full bg-accent" />
              Legal
            </p>
            <h1 className="headline text-[clamp(2.25rem,5vw,3.25rem)]">{title}</h1>
            <p className="mt-4 text-sm text-ink-mute">Last updated: {BRAND.legalUpdated}</p>
            {intro ? (
              <p className="measure mt-6 text-[1.0625rem] leading-relaxed text-ink-mute">{intro}</p>
            ) : null}
          </div>
        </div>

        <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-20">{children}</div>
      </main>
      <Footer />
    </>
  );
}

/** One numbered clause. `id` makes it linkable from the footer or from support. */
export function Clause({ id, title, children }) {
  return (
    <section id={id} className={`mb-11 ${id ? 'scroll-mt-24' : ''}`}>
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-[0.9375rem] leading-relaxed text-ink-mute">{children}</div>
    </section>
  );
}

/** A labelled row inside a clause — "Account information: …". */
export function Term({ label, children }) {
  return (
    <p>
      <strong className="font-semibold text-ink">{label}:</strong> {children}
    </p>
  );
}

/** A plain bulleted list, styled once so neither document invents its own. */
export function List({ items }) {
  return (
    <ul className="ml-5 list-disc space-y-2 marker:text-ink-faint">
      {items.map((item) => (
        <li key={typeof item === 'string' ? item : item.key}>
          {typeof item === 'string' ? item : item.node}
        </li>
      ))}
    </ul>
  );
}
