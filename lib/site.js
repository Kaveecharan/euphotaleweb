// ─────────────────────────────────────────────────────────────────────────────
//  EuphoTale — the single source of truth for everything brand-level.
//
//  Every string, URL and identifier that appears in more than one place lives
//  HERE. Components import from this file and never inline a brand value of
//  their own, so renaming the app, moving the domain or publishing the iOS
//  build is one edit rather than a grep across forty JSX files.
//
//  Nothing secret belongs in this module. It is bundled into the client, so
//  treat every value here as public — which all of them are.
// ─────────────────────────────────────────────────────────────────────────────

/** Where the marketing site is served from. Used for canonical URLs + sitemap. */
export const SITE_URL = 'https://euphotale.com';

export const BRAND = {
  name: 'EuphoTale',
  /** One line, used in the OG description and the loading state. */
  tagline: 'The app that remembers your life.',
  /** Two sentences, used for meta descriptions and the footer blurb. */
  blurb:
    'EuphoTale keeps the life you are actually living — photo timelines, journals and a daily check-in — and gives you a companion who remembers all of it.',
  /** Support inbox. Mirrors SUPPORT_EMAIL in the backend environment. */
  supportEmail: 'support@euphotale.com',
  /** Legal entity shown in the footer + legal pages. */
  legalName: 'EuphoTale',

  // ── The two values a launch cannot ship without ───────────────────────────
  //
  // `null` means NOT SET YET, and every consumer omits the sentence rather than
  // printing a placeholder — the same rule STORES.ios.url follows above.
  //
  // These are not optional polish. GDPR Art. 13 requires the controller's
  // identity and a postal contact address in the privacy policy; consumer law
  // in most markets requires a governing law and forum in the terms; and both
  // stores ask for a real trading entity behind the listing. Fill them in with
  // the REGISTERED entity — the trading name above is not a legal person — and
  // both documents grow the clause automatically.
  /** Registered company name and postal address, as one display string. */
  legalAddress: null, // e.g. 'EuphoTale Ltd, 1 Example Street, London, N1 1AA, United Kingdom'
  /** Governing law and the courts that hear a dispute. */
  legalJurisdiction: null, // e.g. 'the laws of England and Wales'
  /** Displayed on the legal pages. Update when the documents change. */
  legalUpdated: '3 September 2026',
};

// ── App store links ──────────────────────────────────────────────────────────
//
// `url: null` means NOT PUBLISHED YET, and every consumer renders "coming soon"
// instead of a link. That is deliberate: a placeholder store id (the shape of
// `id0000000000`) ships a button that 404s for every visitor who taps it, which
// is worse than an honest label. Fill the id in and the whole site turns the
// button on — navbar, hero, pricing and final CTA all read from here.
export const STORES = {
  android: {
    label: 'Google Play',
    url: 'https://play.google.com/store/apps/details?id=com.kv14.euphotale',
  },
  ios: {
    label: 'App Store',
    url: null, // TODO: 'https://apps.apple.com/app/euphotale/id<APPLE_APP_ID>'
  },
};

/** True when at least one store listing is live — gates "Download" wording. */
export const HAS_ANY_STORE = Boolean(STORES.android.url || STORES.ios.url);

// ── Sections and in-page anchors ─────────────────────────────────────────────
//
// Declared BEFORE the link lists on purpose, because every in-page link below
// is built from this object rather than from a hand-typed string.
//
// A section id lives in exactly one place. Rename or delete one and `anchor()`
// throws while the site is being built, which is the only moment a broken
// fragment can still be fixed for free — an `href="/#features"` pointing at a
// section somebody deleted looks fine in review, ships, and then silently does
// nothing for every visitor who clicks it.
export const SECTION_IDS = {
  uses:      'uses',
  companion: 'companion',
  memories:  'memories',
  journal:   'journal',
  daylog:    'daylog',
  moon:      'moon',
  privacy:   'privacy',
  pricing:   'pricing',
  faq:       'faq',
  get:       'get',
};

const KNOWN_ANCHORS = new Set(Object.values(SECTION_IDS));

/**
 * Assert that an id names a real section, and return it.
 *
 * Used by the sections themselves, on the `id` attribute they render. That is
 * the other half of the guarantee: `anchor()` proves a link points somewhere
 * declared, and this proves the thing it points at is what actually rendered.
 * Without both, the two lists agree with SECTION_IDS and still not with each
 * other.
 *
 * Throws at module load, which on a static export means AT BUILD TIME — these
 * modules are imported while the pages are generated, so a bad id fails
 * `next build` rather than shipping a control that scrolls nowhere.
 *
 * @param {string} id - a value from SECTION_IDS
 * @returns {string} the same id
 */
export function sectionId(id) {
  if (!KNOWN_ANCHORS.has(id)) {
    throw new Error(
      `"${String(id)}" is not a section of this site. ` +
        `Add it to SECTION_IDS in lib/site.js, or fix the caller. ` +
        `Known ids: ${[...KNOWN_ANCHORS].join(', ')}`
    );
  }
  return id;
}

/**
 * A link to a section of the home page.
 *
 * @param {string} id - a value from SECTION_IDS
 * @param {string} [prefix] - '/' from another page, '' to stay on this one
 * @returns {string}
 */
export function anchor(id, prefix = '/') {
  return `${prefix}#${sectionId(id)}`;
}

// ── Navigation ───────────────────────────────────────────────────────────────
// One list, rendered by both the desktop bar and the mobile sheet. Five items
// is the ceiling: a marketing nav is a table of contents, and a sixth entry is
// almost always a section that should not have been written.
export const NAV_LINKS = [
  { label: 'What it’s for', href: anchor(SECTION_IDS.uses) },
  { label: 'The memory',      href: anchor(SECTION_IDS.companion) },
  { label: 'Privacy',         href: anchor(SECTION_IDS.privacy) },
  { label: 'Pricing',         href: anchor(SECTION_IDS.pricing) },
  { label: 'About',           href: '/about' },
];

export const FOOTER_LINKS = {
  Product: [
    { label: 'What it’s for',  href: anchor(SECTION_IDS.uses) },
    { label: 'Permanent memory', href: anchor(SECTION_IDS.companion) },
    { label: 'Memories',         href: anchor(SECTION_IDS.memories) },
    { label: 'Journal',          href: anchor(SECTION_IDS.journal) },
    { label: 'Day log',          href: anchor(SECTION_IDS.daylog) },
    { label: 'The Moon',         href: anchor(SECTION_IDS.moon) },
    { label: 'Pricing',          href: anchor(SECTION_IDS.pricing) },
  ],
  Company: [
    { label: 'About',   href: '/about' },
    { label: 'Support', href: '/about#support' },
  ],
  Legal: [
    { label: 'Privacy Policy',    href: '/privacy-policy' },
    { label: 'Terms of Service',  href: '/terms' },
    { label: 'Your data',         href: '/privacy-policy#your-rights' },
    // Google Play requires this to be reachable from OUTSIDE the app, without
    // signing in, for any app that creates accounts. It is a store condition,
    // not a nicety — the Data Safety form asks for the URL directly.
    { label: 'Delete your account', href: '/delete-account' },
  ],
};

/**
 * Outbound social profiles.
 *
 * Empty by design — an unlinked social icon (`href: '#'`) is a dead control
 * that costs trust on a page whose entire argument is "we do not fake things".
 * Add a row and the footer renders it; leave the array empty and the footer
 * renders no social strip at all.
 *
 * @type {{name: string, href: string}[]}
 */
export const SOCIALS = [];
