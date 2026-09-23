import Link from 'next/link';
import Logo from '@/components/Logo';
import { BRAND, FOOTER_LINKS, SOCIALS } from '@/lib/site';

/**
 * The footer.
 *
 * Link columns come from lib/site.js, and the social strip renders only when
 * there is something to link to — an icon row full of `href="#"` is a set of
 * dead controls on the page that spends its whole argument on not faking
 * things.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-night bg-night">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-2">
            <Logo tone="night" />
            <p className="measure mt-5 max-w-xs text-sm leading-relaxed text-night-mute">
              {BRAND.blurb}
            </p>

            <a
              href={`mailto:${BRAND.supportEmail}`}
              className="mt-6 inline-block text-sm font-medium text-white/80 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
            >
              {BRAND.supportEmail}
            </a>

            {SOCIALS.length > 0 ? (
              <ul className="mt-6 flex items-center gap-2.5">
                {SOCIALS.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-9 w-9 place-items-center rounded-xl border border-night bg-white/[0.05] text-night-mute transition-colors hover:text-white"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, items]) => (
            <div key={heading}>
              {/* White, not the muted grey the links use. On a dark surface a
                  heading and its list rendered in the same ink read as one
                  block of text — the weight and tracking alone do not separate
                  them at 11px. */}
              <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white">
                {heading}
              </h2>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={`${heading}-${item.label}`}>
                    <Link
                      href={item.href}
                      className="text-sm text-night-mute transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-night pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-night-mute">
            © {year} {BRAND.legalName}. All rights reserved.
          </p>
          <p className="text-sm text-night-mute">Made for keeping things, not for killing time.</p>
        </div>
      </div>
    </footer>
  );
}
