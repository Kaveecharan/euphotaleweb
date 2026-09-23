import { SHOT_ASPECT } from '@/lib/content/screenshots';

/**
 * The device frame every screenshot sits in.
 *
 * Drawn rather than imported as an image: a PNG bezel is a few hundred
 * kilobytes that has to be shipped at three densities and still goes soft on a
 * wide screen, while this is a rounded rectangle with a hairline and costs
 * nothing.
 *
 * The aspect ratio is FIXED and shared (SHOT_ASPECT), which is what stops the
 * page shifting as screenshots load in — the box is the right size before the
 * image exists, and stays the right size if a slot is still a placeholder.
 */
export default function PhoneFrame({ children, className = '', tone = 'light' }) {
  const night = tone === 'night';

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[2.25rem] p-2 shadow-phone ${
        night ? 'bg-night-raised' : 'bg-raised'
      } ${night ? 'ring-1 ring-white/10' : 'ring-1 ring-black/[0.06]'} ${className}`}
      style={{ aspectRatio: SHOT_ASPECT }}
    >
      {/* The speaker pill. Decorative, and small enough not to cover content. */}
      <div
        aria-hidden="true"
        className={`absolute left-1/2 top-[0.9rem] z-10 h-1.5 w-16 -translate-x-1/2 rounded-full ${
          night ? 'bg-white/15' : 'bg-black/[0.08]'
        }`}
      />
      <div
        className={`h-full w-full overflow-hidden rounded-[1.75rem] ${
          night ? 'bg-night' : 'bg-page'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
