import 'server-only';
import fs from 'node:fs';
import path from 'node:path';
import { PHOTOS } from '@/lib/content/photos';

// ─────────────────────────────────────────────────────────────────────────────
//  Build-time photograph resolution.
//
//  This replaces the old shots.server.js, and the change is worth stating: the
//  phone frames used to hold PNG screenshots of the running app, which meant
//  every copy tweak, every palette change and every new feature needed somebody
//  to boot a simulator and re-capture seven images at the right density.
//
//  The screens are now rebuilt in code (components/screens/), so the only thing
//  that still has to come from outside is the photography. Same mechanism as
//  before, one level down: drop a file in public/photos/ and it appears.
//
//  `import 'server-only'` is the guard. If a client component ever imports this
//  module the BUILD fails, loudly, instead of shipping a bundle that tries to
//  require node:fs in a browser.
// ─────────────────────────────────────────────────────────────────────────────

const PHOTOS_DIR = path.join(process.cwd(), 'public', 'photos');

/** Preference order — the first extension present on disk wins. */
const EXTENSIONS = ['.jpg', '.webp', '.png', '.jpeg'];

/**
 * Ids come from our own manifest, never from user input, and this still
 * validates them: `id` becomes a filesystem path here and a URL downstream, and
 * a rule that holds only because of where the caller happens to get its data
 * from is a rule that breaks the first time this is wired to a CMS. Lower-case,
 * digits and single hyphens only — which excludes `.`, `/`, `\` and every other
 * traversal primitive.
 */
const VALID_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Filenames present in public/photos, read once per process.
 *
 * A Set rather than an fs.existsSync per lookup: the home page resolves every
 * slot in a single synchronous render pass, and a static export renders every
 * page. One readdir is enough.
 */
const availableFiles = (() => {
  try {
    return new Set(fs.readdirSync(PHOTOS_DIR));
  } catch {
    // No directory yet. Every slot falls back to its placeholder, which is
    // exactly the intended behaviour on a fresh checkout.
    return new Set();
  }
})();

/**
 * The public URL for a photograph, or null when none has been added yet.
 *
 * @param {string} id - a key from lib/content/photos.js
 * @returns {string | null} e.g. "/photos/moment-1.jpg"
 */
export function resolvePhoto(id) {
  if (typeof id !== 'string' || !VALID_ID.test(id)) return null;

  for (const ext of EXTENSIONS) {
    const filename = `${id}${ext}`;
    if (availableFiles.has(filename)) return `/photos/${filename}`;
  }
  return null;
}

// ── Build-time report ────────────────────────────────────────────────────────
//
// One aggregated line, emitted once per process, listing what is still empty.
// It goes to the build log rather than onto the page, for the same reason the
// old screenshot counter did: a note to the site's author is not something
// every visitor should have to read.
//
// ── Why console.log and not console.warn ─────────────────────────────────────
//
// It was a warn, and that was wrong twice over. A missing photograph is not a
// defect — every frame renders complete with a neutral stand-in, which is the
// designed behaviour on a fresh checkout, so there is nothing here to warn
// about. And a build that prints red on a green run teaches whoever reads it to
// stop reading, which costs you the one warning that will eventually matter.
//
// So it says the build is fine first, and says what to do second. It never
// fails the build and it never should.
(() => {
  const total = Object.keys(PHOTOS).length;
  const missing = Object.keys(PHOTOS).filter((id) => !resolvePhoto(id));
  if (missing.length === 0) return;

  // Built as lines rather than one template literal full of escapes, so the
  // message reads here the way it reads in the terminal.
  console.log(
    [
      '',
      '[photos] Not a problem — every frame renders with a neutral stand-in.',
      `[photos] ${missing.length} of ${total} slots are still waiting for a photograph.`,
      '[photos] Drop files at public/photos/<id>.(jpg|webp|png). lib/content/photos.js',
      `[photos] says what each one has to show. Still empty: ${missing.join(', ')}`,
      '',
    ].join('\n')
  );
})();
