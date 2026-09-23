// ─────────────────────────────────────────────────────────────────────────────
//  Photograph slots.
//
//  The seven phone frames on this site are no longer PNG screenshots — they are
//  the app's UI rebuilt in code (components/screens/). That leaves exactly one
//  thing a build cannot generate: the photographs a person would have taken.
//
//  ── How to fill one ─────────────────────────────────────────────────────────
//
//    1. Generate or shoot the picture.
//    2. Save it as  web/public/photos/<id>.jpg  using an id from the table
//       below — e.g. web/public/photos/moment-1.jpg
//    3. Rebuild.
//
//  No code changes. components/Photo.jsx looks the file up on disk AT BUILD
//  TIME and renders it if it is there, or a quiet tonal placeholder if it is
//  not. .jpg, .webp, .png and .jpeg are all accepted, in that order.
//
//  ── Why these ids and no others ─────────────────────────────────────────────
//
//  A slot exists only because a screen needs a photograph to make its point.
//  The day log, the Moon and the privacy screens have no entries here at all —
//  they are type, controls and data, so they render complete with nothing
//  added. Do not add a slot to decorate a screen that already works.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Every photograph the coded screens ask for.
 *
 * `alt` describes the picture for assistive tech and image-search crawlers.
 * `note` is for whoever fills the slot — it says what the picture has to DO,
 * which is the part a filename cannot carry.
 */
export const PHOTOS = {
  // ── The hero reel's memory: "Our first home", in three moments ───────────
  //
  // Six photographs of ONE flat over five months, and the ARC is the whole
  // demo: empty and boxed, then the first night in it, then the same rooms
  // once they are lived in. That progression is what the companion notices
  // and what a single post could never hold, so these must be shot as one
  // set, in one place, in this order.
  //
  // Nothing here should look postable. No keys held up to camera, no
  // champagne, no sign on the door — the pictures are the ordinary evenings
  // in between, which is the distinction the whole product rests on.
  //
  // They are deliberately NOT the moment-* set below. That one belongs to a
  // different memory by the same person, and two memories sharing one
  // photograph is the kind of small lie a visitor notices without being able
  // to say why.
  'home-1': {
    alt: 'A woman in sunglasses beside an open van, unloading tins of paint on moving-in day',
    note: 'Sep 9, moving in. Bare, bright, nothing unpacked. Only ever seen as a thumbnail.',
  },
  'home-2': {
    alt: 'Two people painting a bare room, paint-spattered, a stepladder against the wall',
    note: 'Nov 2, first night. One warm light, eaten sitting down on the floor. Nobody posing.',
  },
  'home-3': {
    alt: 'A woman painting a window frame while a man works on the wall behind her',
    note: 'Nov 2, later the same night. Same room, close, no faces.',
  },
  'home-4': {
    alt: 'Two people raising drinks in a finished living room beside a New Home sign',
    note: 'Jan 18. The same wall as home-1, now lived in. This one carries the arc.',
  },
  'home-5': {
    alt: 'A couple on the sofa of a furnished, lamp-lit living room',
    note: 'Jan 18. Close, domestic, small. The detail that says somebody cooks here.',
  },
  'home-6': {
    alt: 'Two people opening a bottle on the doorstep of their new front door',
    note: 'Jan 18. Backs of heads, no faces. The room being used rather than shown.',
  },

  // ── The memory timeline: one flat, one winter, in order ──────────────────
  // The ARC is the product demo. moment-1 is the room still lived in and
  // moment-4 is the same room emptied — that change is what the companion
  // notices and what a feed could never show you. Shot as a SET, in one place,
  // or the timeline stops meaning anything.
  //
  // Nothing in this arc should look postable. A holiday would make the app
  // indistinguishable from the two it is defined against.
  'moment-1': {
    alt: 'Two people in a car on a coastal road, photographed at arm’s length',
    note: 'Nov 2, "first night". Warm, cluttered, nobody posing. The largest photo in the timeline.',
  },
  'moment-2': {
    alt: 'A woman sitting on a beach at sunset, seen from behind',
    note: 'Jan 18. Same flat, close, no faces.',
  },
  'moment-3': {
    alt: 'Boxes stacked against a wall in the same room',
    note: 'Mar 6, "last night". Same room, packed up.',
  },
  'moment-4': {
    alt: 'The same kitchen empty, bare walls, flat daylight',
    note: 'Spare. Use if you want a fourth beat — this one carries the emotion.',
  },

  // ── The feed: three posts that must look like three different lives ───────
  'feed-1': {
    alt: 'Friends around a cafe table in the afternoon',
    note: 'Landscape. Candid, nobody looking at the camera.',
  },
  'feed-2': {
    alt: 'A woman standing on the grass in front of the Leaning Tower of Pisa',
    note: 'Landscape. Close, no faces.',
  },
  'feed-3': {
    alt: 'A cat asleep on a windowsill in weak winter sun',
    note: 'Landscape. Quiet and domestic.',
  },

  // ── The journal: private rather than shareable ────────────────────────────
  //
  // Two entries, two authors, and they do not share a picture — journal-1 is
  // Sam's, the pair below are Erin's. The pair is the only place on the site
  // where two photographs are seen side by side at the same size, so they have
  // to work as a couplet: same room, same night, one wide and one closer.
  'journal-1': {
    alt: 'Rain on a window at night with blurred street lights beyond',
    note: "Sam's entry, in the journal pillar. Portrait. Should mean something only to the person who took it.",
  },
  'journal-2': {
    alt: 'A latte on a cafe table with two people sitting across it',
    note: "Erin's entry, in the hero feed. Floor level, one lamp, the sofa already gone. Landscape, cropped square-ish — it sits beside journal-3 at half the column each.",
  },
  'journal-3': {
    alt: 'The front of a corner cafe with a Coffee Brunch Good Times sign',
    note: "Erin's entry, the morning after. Same room as journal-2, empty and lit differently. The pair only works if the room is recognisably the same one.",
  },

  // ── Faces. Five, because five identical studio headshots is the single
  //    fastest way to make a populated feed read as fake. ────────────────────
  'face-1': { alt: 'Rhea, walking along a beach in a floral dress', note: 'Avatar. Candid, not a headshot.' },
  'face-2': { alt: 'Portrait of a man with dark curly hair',     note: 'Avatar. Candid, not a headshot.' },
  'face-3': { alt: 'Rhea, walking along a beach in a floral dress', note: 'Avatar. Candid, not a headshot.' },
  'face-4': { alt: 'Priya, on a tree-lined street in summer', note: 'Avatar. Candid, not a headshot.' },
  'face-5': { alt: 'Erin, sitting on a hillside at sunset', note: 'Avatar. Candid, not a headshot.' },
};
