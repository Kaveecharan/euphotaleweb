import Link from 'next/link';
import { BRAND } from '@/lib/site';

/**
 * The brand lockup: the app icon, plus the wordmark.
 *
 * The mark is drawn EDGE TO EDGE, with nothing behind it. The logo is already a
 * tile — a white aperture on its own red field — so the raised white tile and
 * hairline ring this used to sit in were a second tile around the first: a pale
 * border framing the red on the light header, and a lighter square bleeding
 * around it in the dark footer. Neither is part of the mark, and both made it
 * read as an image someone had pasted onto the page rather than as the brand.
 *
 * That is also why the image FILLS its box rather than being contained inside a
 * larger one. Contained, a 28px mark centred in a 36px box leaves four pixels
 * of whatever is behind it showing on every side — which is the background this
 * is removing, just at a smaller radius.
 *
 * `rounded-xl` is the one thing kept: the corner radius is how a square mark
 * reads as an app icon, and it clips the artwork rather than painting anything.
 *
 * Explicit width/height so the row reserves its space before the PNG arrives —
 * the navigation bar is the first thing painted, and a logo that pops in shifts
 * the whole header.
 *
 * `tone="night"` is for the footer and the inverted sections. It sets the
 * WORDMARK only: the mark carries its own colour and looks the same on both,
 * which is the point of a logo.
 */
export default function Logo({ tone = 'light', className = '', showWordmark = true }) {
  const night = tone === 'night';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${BRAND.name} — home`}
    >
      <img
        src="/logo.png"
        alt=""
        width={36}
        height={36}
        // `object-cover`, not `contain`: the source is square, so the two agree
        // today — but if the file is ever replaced with a non-square one,
        // `contain` would letterbox it and put a strip of page colour back
        // inside the mark. Cover keeps the box full whatever it is given.
        className="h-9 w-9 shrink-0 rounded-xl object-cover"
        decoding="async"
      />
      {showWordmark ? (
        <span
          className={`font-sans text-[1.0625rem] font-semibold tracking-[-0.01em] ${
            night ? 'text-white' : 'text-ink'
          }`}
        >
          {BRAND.name}
        </span>
      ) : null}
    </Link>
  );
}
