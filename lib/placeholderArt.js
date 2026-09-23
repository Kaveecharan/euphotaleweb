// ─────────────────────────────────────────────────────────────────────────────
//  Generated stand-in artwork for an unfilled photograph slot.
//
//  ── Why this is generated and not a folder of stock JPEGs ───────────────────
//
//  The obvious fix for 22 empty slots is 22 placeholder files. That is the
//  approach this deliberately does NOT take, for the reason every photo-heavy
//  app eventually arrives at: a placeholder that ships as an asset is paid for
//  on every install and every cold load, forever, to show something nobody is
//  meant to look at. Instagram and Facebook both DRAW their pre-load state
//  rather than downloading it — a tone block under the real image, never a
//  picture of a missing picture.
//
//  So a slot with no photograph costs ONE inline background-image string. No
//  file, no network round trip, no decode, nothing added to the bundle, and no
//  layout shift, because every caller already fixes the box.
//
//  ── It has to read as art direction, not as a to-do list ────────────────────
//
//  This is a shipped marketing site, so the stand-in cannot look like a
//  stand-in. Flat grey with the filename on it is honest in development and
//  embarrassing in production. Each slot instead gets a tonal field and a soft
//  light source placed where that photograph's light would actually be — the
//  lamp low and warm on a first night indoors, the window cool and high on a
//  dark street — so the frame reads as a muted photograph seen small, which at
//  phone-frame scale is all it ever has to be.
//
//  ── The palettes are not invented here ──────────────────────────────────────
//
//  They are the same set the app draws behind its own sign-up screen
//  (fe/src/components/auth/AuthBackdrop.js, FILM), lifted one register lighter
//  because these sit inside bright phone frames on a pale page rather than
//  behind a dark card. Same memory, same order, same light — the site and the
//  app are telling one story and should not disagree about what it looked like.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * A tonal field and where its light comes from.
 *
 * `from`/`to` run along the diagonal; `glow` is a soft radial dropped at
 * `x`/`y` (percentages of the box) and faded out well before the edge, so it
 * reads as light in a room rather than as a second gradient.
 */
const P = {
  // Warm interiors — lamplight, low and to one side.
  lamp:     { from: '#6B5237', to: '#B9905C', glow: '#F0C88A', x: 30, y: 72 },
  hearth:   { from: '#7A5340', to: '#C08A5E', glow: '#F4CE9C', x: 68, y: 66 },
  amber:    { from: '#6E5A3A', to: '#BFA271', glow: '#F2D6A2', x: 42, y: 60 },

  // Cool exteriors — a window, high and pale.
  window:   { from: '#3A4A56', to: '#7E97A4', glow: '#CFE0E8', x: 62, y: 26 },
  night:    { from: '#2E3A4B', to: '#63758C', glow: '#A9BBD2', x: 70, y: 22 },
  rain:     { from: '#333C52', to: '#6C7794', glow: '#B7C2DC', x: 55, y: 30 },

  // Daylight — flat, even, nothing burning.
  //
  // These two carry the WEAKEST glow in the set, and deliberately: their field
  // is already pale, so a near-white light on it has nothing to fall off
  // against and renders as a bright disc sitting on top — a spotlight in an
  // empty room rather than daylight in one. The glow has to stay near its own
  // field for a pale tone, which is the opposite of what the dark interiors
  // want.
  daylight: { from: '#8A9096', to: '#C7CCD1', glow: '#DFE3E6', x: 50, y: 24 },
  bare:     { from: '#96999B', to: '#D2D4D6', glow: '#E4E6E8', x: 46, y: 26 },

  // Lived-in neutrals.
  clay:     { from: '#7B6A5A', to: '#BCA893', glow: '#E6D5BF', x: 38, y: 58 },
  sage:     { from: '#5E6B54', to: '#9BAA8C', glow: '#D3DFC6', x: 44, y: 40 },
  dusk:     { from: '#544E5C', to: '#93899B', glow: '#CFC5D6', x: 58, y: 48 },
  blush:    { from: '#8A6663', to: '#C8A09B', glow: '#EFD2CC', x: 48, y: 44 },
};

/**
 * Which field each slot gets.
 *
 * Written out rather than hashed from the id, because these are NARRATIVE sets
 * — home-1 through home-6 are one flat over five months and the arc is the
 * whole demo (see lib/content/photos.js). A hash would scatter that: the empty
 * bright room could come back warmer than the lamp-lit one, and the
 * progression the screens are built to show would run backwards.
 *
 * The five faces are the other deliberate case. They are five DIFFERENT fields
 * for exactly the reason the manifest gives for wanting five different
 * photographs — one tone repeated five times down a feed is the fastest way to
 * make it read as fake.
 */
const TONE = {
  // The hero reel's memory: bare → first night → lived in.
  'home-1': 'bare',      // moving in, nothing unpacked
  'home-2': 'lamp',      // first night, one warm light on the floor
  'home-3': 'window',    // condensation, dark street beyond
  'home-4': 'hearth',    // months later, furnished and lamp-lit
  'home-5': 'clay',      // the kitchen shelf, close and domestic
  'home-6': 'dusk',      // two people on a sofa, watching something

  // The memory timeline: the same flat emptying out.
  'moment-1': 'lamp',
  'moment-2': 'window',
  'moment-3': 'clay',
  'moment-4': 'daylight',

  // The feed: three posts that must look like three different lives.
  'feed-1': 'amber',     // a cafe table in the afternoon
  'feed-2': 'blush',     // hands at a wedding
  'feed-3': 'daylight',  // a cat in weak winter sun

  // The journal: private rather than shareable.
  'journal-1': 'rain',   // rain on a window at night
  'journal-2': 'lamp',   // the floor of a half-empty room
  'journal-3': 'bare',   // the same room the morning after

  // Faces.
  'face-1': 'clay',
  'face-2': 'night',
  'face-3': 'blush',
  'face-4': 'sage',
  'face-5': 'dusk',
};

/**
 * Deterministic fallback for a slot added to the manifest without a tone.
 *
 * A new id gets a stable, reasonable field instead of nothing — the page still
 * renders complete, and the only cost of forgetting is that the picture is not
 * *chosen*. Stable across builds because a static export renders a page more
 * than once, and a placeholder that changed between those renders would show
 * up as a diff on every deploy.
 */
const NAMES = Object.keys(P);
const fallback = (id) => {
  let h = 0;
  for (let i = 0; i < id.length; i += 1) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return NAMES[h % NAMES.length];
};

/**
 * The inline style for one slot's stand-in.
 *
 * Two layers, painted top-down: the light source, then the field it falls on.
 *
 * The glow fades to its OWN colour at zero alpha (`#RRGGBB00`) before it hits
 * `transparent`, which matters more than it looks: a colour interpolated
 * straight to `transparent` passes through transparent BLACK in some engines
 * and leaves a dirty grey ring at the boundary — visible at exactly the small
 * sizes these render at.
 *
 * @param {string} id - a key from lib/content/photos.js
 * @param {boolean} round - an avatar: light centred and high, as a portrait
 * @returns {{ backgroundImage: string }} an inline style object
 */
export function placeholderArt(id, round = false) {
  const p = P[TONE[id] ?? fallback(id)];

  // An avatar is a face, not a room: the light is centred and high rather than
  // off to one side.
  //
  // It is also much WEAKER (`55` = 33% alpha) and much WIDER than a room's. A
  // tight, bright core on a circle is the exact recipe for a shaded sphere,
  // and at avatar size that does not read as a portrait — it reads as a
  // polished marble, five of them down one feed.
  const x = round ? 50 : p.x;
  const y = round ? 34 : p.y;
  const r = round ? 92 : 58;
  const core = round ? `${p.glow}55` : p.glow;

  return {
    backgroundImage:
      `radial-gradient(circle at ${x}% ${y}%, ${core} 0%, ${p.glow}00 ${r}%, transparent ${r}%), ` +
      `linear-gradient(135deg, ${p.from} 0%, ${p.to} 100%)`,
  };
}
