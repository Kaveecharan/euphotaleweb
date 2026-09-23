import { SHOTS } from '@/lib/content/screenshots';
import { SCREENS } from '@/components/screens';
import PhoneFrame from '@/components/PhoneFrame';

/**
 * One phone frame.
 *
 * ── What changed, and why it was worth changing ──────────────────────────────
 *
 * These frames used to hold PNG screenshots of the running app, resolved off
 * disk at build time. That worked, and it cost a capture session every time
 * anything moved: seven images, at the right density, re-taken for a palette
 * tweak, a copy change or a new feature — which in practice meant they were
 * never re-taken, and the shopfront slowly drifted away from the product.
 *
 * The screens are now rebuilt in code (components/screens/) from the SAME
 * tokens the app uses. web/tailwind.config.js and fe/src/theme/glass.js hold
 * identical values, so a re-theme in the app is a token change here rather than
 * a photo shoot. What that buys, beyond never capturing again:
 *
 *   • sharp at every density, on a page that ships no image optimiser
 *   • real text — selectable, translatable, and legible to a crawler
 *   • roughly two megabytes of PNG deleted from the bundle
 *   • the frames stay honest, because they are built from the design system
 *     rather than from a photograph of it six months ago
 *
 * The one thing code cannot generate is photography, so the pictures INSIDE
 * these screens are still files on disk — see components/Photo.jsx.
 *
 * ── Accessibility ────────────────────────────────────────────────────────────
 *
 * The frame is announced as a single image with the manifest's description,
 * exactly as the screenshot was, and its contents are hidden from assistive
 * tech. The UI text in there is sample data illustrating a claim the
 * surrounding prose already makes; read aloud, row by row, it would bury that
 * prose in fake usernames and mood scores.
 *
 * @param {{ id: string, tone?: 'light'|'night', className?: string }} props
 */
export default function Shot({ id, tone = 'light', className = '' }) {
  const meta = SHOTS[id];
  const Screen = SCREENS[id];

  // An id missing from either side is a content bug, not a runtime one. Fail
  // visibly in development and render nothing in production rather than
  // crashing a page over a frame.
  if (!meta || !Screen) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(
        !meta
          ? `<Shot id="${id}"> has no entry in lib/content/screenshots.js`
          : `<Shot id="${id}"> has no screen in components/screens/index.js`
      );
    }
    return null;
  }

  return (
    <PhoneFrame tone={tone} className={className}>
      <div role="img" aria-label={meta.alt} className="h-full w-full">
        <div aria-hidden="true" className="h-full w-full">
          <Screen />
        </div>
      </div>
    </PhoneFrame>
  );
}
