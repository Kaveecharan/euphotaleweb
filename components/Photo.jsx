import { PHOTOS } from '@/lib/content/photos';
import { resolvePhoto } from '@/lib/photos.server';
import { placeholderArt } from '@/lib/placeholderArt';

/**
 * One photograph inside a coded screen.
 *
 * This is the ONLY thing in the phone frames that is not generated from code,
 * and therefore the only thing that has to be added by hand. It renders the
 * real picture if `public/photos/<id>.(jpg|webp|png|jpeg)` exists at build
 * time, and generated tonal artwork if it does not — so every screen is
 * complete and shippable before a single photograph has been taken.
 *
 * A SERVER component: the disk lookup happens once, during the build, and
 * nothing about it reaches the browser.
 *
 * The placeholder deliberately does NOT print its own filename. At avatar size
 * that text is illegible, and at moment size it turns a calm screen into a
 * to-do list rendered for every visitor. The list of what is still missing goes
 * to the build log instead — see lib/photos.server.js.
 *
 * It is also not a FILE. Shipping 22 stand-in JPEGs would put weight in the
 * deploy — and eventually in a user's cache — for pictures nobody is meant to
 * look at; the stand-in is one inline gradient instead, drawn per slot in the
 * light that photograph would have had. See lib/placeholderArt.js.
 *
 * @param {{ id: string, className?: string, round?: boolean }} props
 */
export default function Photo({ id, className = '', round = false }) {
  const meta = PHOTOS[id];
  const src = resolvePhoto(id);

  // An id with no manifest entry is a content bug, not a runtime one. Fail
  // visibly in development, render nothing in production rather than crashing a
  // page over a missing caption.
  if (!meta) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(`<Photo id="${id}"> has no entry in lib/content/photos.js`);
    }
    return null;
  }

  if (src) {
    // Plain <img>, deliberately. Image optimisation is off for the static
    // export, so next/image would add a wrapper and a client runtime to emit
    // the same tag. Every caller fixes the box, so there is no layout shift.
    return (
      <img
        src={src}
        alt=""
        className={`h-full w-full object-cover ${className}`}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    );
  }

  // No `bg-well` underneath. The gradient is fully opaque and covers the box,
  // so a fill behind it is a paint the browser does for nothing — and on the
  // one slot that is a circle, the square well showed at the corners for the
  // frame before the background image resolved.
  return <div aria-hidden="true" className={`h-full w-full ${className}`} style={placeholderArt(id, round)} />;
}
