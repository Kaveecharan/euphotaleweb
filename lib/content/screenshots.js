// ─────────────────────────────────────────────────────────────────────────────
//  Phone frame manifest.
//
//  ── These are not screenshots any more ───────────────────────────────────────
//
//  They were, and the workflow was: boot the app, capture seven portrait PNGs
//  at the right density, drop them in public/shots/. Which meant that every
//  palette change, copy tweak and new feature silently invalidated the
//  shopfront until somebody found an afternoon to re-capture it. Nobody ever
//  did, which is the real argument against the approach.
//
//  Each frame is now the app's UI rebuilt in code — see components/screens/ —
//  from the same token values the app itself uses. The file name here is
//  historical; renaming it would touch four imports to say nothing new.
//
//  ── What still comes from disk ───────────────────────────────────────────────
//
//  Photography, and only photography. The pictures inside these screens live in
//  public/photos/ and are listed in lib/content/photos.js. Everything else —
//  layout, type, colour, state, copy — is generated at build time.
//
//  ── Why this list is short ───────────────────────────────────────────────────
//
//  It once held fourteen ids feeding a horizontal gallery of every screen in
//  the app. A rail like that is a tour of an interface nobody has a reason to
//  study yet. Every id below sits beside a specific claim as the evidence for
//  it. If a frame is not proving something, it does not belong here.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Every phone frame on the site.
 *
 * `alt` is the whole entry, because it is the whole accessible surface: the
 * frame is announced as one image carrying this description, and the UI inside
 * it is hidden from assistive tech (see components/Shot.jsx for why). So this
 * string has to describe the SCREEN rather than repeat the copy beside it.
 *
 * Keys must also exist in components/screens/index.js. Shot.jsx asserts both
 * halves at build time, so a frame can never be half-defined.
 */
export const SHOTS = {
  'home-feed': {
    alt: 'The EuphoTale home feed showing memories and journal entries from people the viewer follows',
  },
  'companion-chat': {
    alt: 'A chat with the EuphoTale companion, which refers back to earlier conversations',
  },
  'companion-guide': {
    // The second voice. It earns its own frame because "two voices, one memory"
    // is the line people repeat to other people, and one screenshot plus a
    // bullet point does not make it believable — the pair does.
    alt: 'The same companion in its Guide voice, quoting a pattern back from months of journal entries',
  },
  'memory-timeline': {
    alt: 'A memory timeline with dated moments, each holding its own photos and words',
  },
  'journal-entry': {
    alt: 'A journal entry with text, a placed photo and a voice note',
  },
  'day-log': {
    // Describes the REPORT, not the composer. The frame shows what a run of
    // check-ins turns into — a trend line over dated entries — because the
    // pillar's claim is "it turns into a picture", and a rating slider cannot
    // show that whereas a chart with a flat week and one good day can.
    alt: 'A mood trend built from daily check-ins, with each day’s rating, feelings and note',
  },
  moon: {
    alt: 'The Moon screen showing the current level and the check-ins it needs',
  },
  profile: {
    // Where the three halves of the product finally sit together — the memories
    // as a grid, the Moon as a level, the tabs holding logs, likes and saves.
    alt: 'A EuphoTale profile: memories in a grid, follower counts and the current Moon level',
  },
  privacy: {
    alt: 'Privacy settings covering post visibility, tagging, messages and activity',
  },
};

/** Portrait phone shape. One constant so every frame on the site agrees. */
export const SHOT_ASPECT = '9 / 19.5';
