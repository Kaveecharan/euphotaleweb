// ─────────────────────────────────────────────────────────────────────────────
//  Pricing, mirrored from be/config/pricing.js and be/config/plans.js.
//
//  These numbers are DISPLAY ONLY, and nothing on this site takes money. The
//  authority is whoever charges: Apple or Google in the app, Stripe on the web.
//  All three show their own figure before the customer confirms, so a drift
//  here is caught at the till rather than at the bank.
//
//  Keep it in step anyway: a site that advertises one price and bills another
//  is a refund request, not a bug report. `npm run check:web-pricing` in be/
//  fails the build when this file and be/config/pricing.js disagree — it exists
//  because these rows sat a full price rise behind the server for a release,
//  advertising 11.99 against a real 14.99, with nothing to catch it.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * The currencies EuphoTale sells in. `monthly`/`yearly` are formatted strings
 * because they are only ever printed — no arithmetic happens on the web, which
 * is the point: money maths belongs on the server, in minor units.
 *
 * `savingPct` is floored, exactly as the backend floors it, so the badge can
 * never claim a larger discount than the two prices actually support.
 */
export const CURRENCIES = [
  { code: 'USD', symbol: '$', monthly: '14.99', yearly: '149.99', savingPct: 16, credits: ['3.99', '8.99'] },
  { code: 'GBP', symbol: '£', monthly: '10.99', yearly: '109.99', savingPct: 16, credits: ['2.99', '6.99'] },
  { code: 'EUR', symbol: '€', monthly: '13.99', yearly: '139.99', savingPct: 16, credits: ['3.79', '8.49'] },
];

export const DEFAULT_CURRENCY = 'USD';

/**
 * What each plan is FOR, in one sentence, plus the bullets that justify it.
 *
 * Free is described as a complete product rather than as a trap, because it is
 * one: everything that keeps your life is on it forever. Pro sells the AI and
 * capacity, and the copy says so plainly instead of implying Free is broken.
 */
export const PLANS = [
  {
    key: 'free',
    name: 'Free',
    price: null, // rendered as "Free" rather than a currency amount
    tagline: 'Everything that keeps your life.',
    features: [
      'Memories, moments and full-quality photos',
      'Journals with photos and voice notes',
      'The daily check-in and your mood trend',
      'The Moon, all four levels',
      'Feed, profile, search and direct messages',
      'Every privacy control',
      'The friend companion, every day — no card needed',
    ],
    limitations: ['Shows ads', '5 companion replies a day, 150 a month', 'Friend only — no Guide'],
    // Free keeps 10 GB — roughly 21,000 photos, or eleven hours of video — with
    // no limit at all on how long any one video runs. The behaviour this app is
    // FOR arrives in bursts (a birthday, a school play, a holiday) and a parent
    // filming one good month should not meet a wall while doing exactly what it
    // is sold for. Nothing is ever deleted for being over: a full library stops
    // new uploads and keeps everything already in it.
    cta: 'Start free',
    highlight: false,
  },
  {
    key: 'pro',
    name: 'Pro',
    price: 'paid',
    tagline: 'The companion, plus room to keep more.',
    badge: 'Most popular',
    features: [
      'No daily reply limit on the friend',
      'The Guide, on the same shared memory',
      '1,200 replies a month, at full reply length',
      'A longer memory of the conversation — 12 exchanges, not 4',
      'No ads, anywhere',
      'Twice the photos and videos in a moment',
      // The library, not a monthly flow. This said "10 GB a month", which was
      // the old `videoBytesPerMonth` allowance — a number that no longer exists
      // and that described the wrong thing anyway: storage is billed for as long
      // as the bytes exist, so what a person wants to know is how much they can
      // KEEP. Understating 150 GB as 10 is not a safe direction to be wrong in
      // either; it advertises a fifteenth of what the plan actually gives.
      '600 MB a video — about forty minutes — and 150 GB to keep it all in',
      'Every slot in a moment can be a video, of any length',
      'Ten journal pages per entry instead of five',
      'Top-up credits when a month runs long',
    ],
    limitations: [],
    cta: 'Go Pro',
    highlight: true,
  },
];

/**
 * The comparison table. Two columns and no third "Enterprise" fiction.
 *
 * The rows that say IDENTICAL are the important ones and they are listed on
 * purpose: quality, comment length and every privacy control are the same on
 * both plans, and stating it is how the page proves the paywall lands on
 * capacity rather than on your own memories or on someone else's reply.
 */
export const COMPARISON = [
  { label: 'Memories, journals, day logs, Moon', free: 'Yes', pro: 'Yes' },
  { label: 'Photo and video quality',            free: 'Full',        pro: 'Full',       same: true },
  { label: 'Items in one moment',                free: '20',          pro: '40' },
  // The video ceiling in a moment is TIME now, not a count of files — any of
  // the slots may be video. A count refused fifteen short clips from a birthday
  // exactly as hard as fifteen long films, which is backwards.
  // Video is bounded by SIZE and by nothing else. There were duration caps
  // beside these and they measured a proxy for the one thing that costs
  // anything to keep — while asking people to cut a memory shorter to fit,
  // which is the one refusal an app for keeping memories should not have.
  { label: 'Largest video',                      free: '300 MB',      pro: '600 MB' },
  // Stated on the table rather than buried in the terms. It is a real ceiling
  // and people are entitled to see it before they pay — and at these sizes it
  // reads as the generous number it is, which a limit only does when the page
  // says it out loud instead of waiting for an upload to fail.
  //
  // A LIBRARY, and the row is named for it. This said "Video a month · 2 GB /
  // 10 GB", mirroring a monthly video allowance the server replaced: the
  // allowance is now everything the account keeps, photos and video together,
  // and it does not reset. Both halves of the old row were wrong — the unit and
  // both numbers — and `npm run check:web-pricing` now compares this row against
  // config/plans.js so it cannot drift again.
  { label: 'Storage for photos & video',         free: '10 GB',       pro: '150 GB' },
  { label: 'Journal pages per entry',            free: '5',           pro: '10' },
  { label: 'Caption length',                     free: '800',         pro: '1,600' },
  { label: 'Comment and reply length',           free: '800',         pro: '800',        same: true },
  { label: 'Direct messages',                    free: 'Yes',         pro: 'Yes',        same: true },
  { label: 'Privacy controls',                   free: 'All',         pro: 'All',        same: true },
  { label: 'Ads',                                free: 'Yes',         pro: 'None' },
  { label: 'AI friend',                          free: 'Yes',         pro: 'Yes' },
  { label: 'AI Guide',                           free: '—',           pro: 'Yes' },
  { label: 'AI replies',                         free: '150 / month', pro: '1,200 / month' },
  { label: 'Daily reply limit',                  free: '5 a day',     pro: 'None' },
  // Not the permanent memory — that is on both plans and is the product. This
  // is how much of the CURRENT conversation is carried into each reply, and
  // labelling it loosely ("conversation remembered") would read as Free only
  // remembering four exchanges of your life, which is the opposite of true.
  { label: 'Chat carried into each reply',       free: '4 exchanges', pro: '12 exchanges' },
  { label: 'AI top-up credits',                  free: '—',           pro: 'Yes' },
];

/**
 * Footnotes printed under the table. Short, and each one closes a question a
 * careful reader would otherwise have to email support about.
 */
export const PRICING_NOTES = [
  'The free plan needs no card and does not expire. Pro is billed from the day you subscribe, and cancels from your App Store or Google Play subscription settings.',
  'A reply is one answer from the companion, however long the conversation gets. The app shows you what is left at any time.',
  'Video is measured in gigabytes, not minutes, so a long video costs no more than a short one of the same size. There is no limit on how long a single video can run — only on how big it is.',
  'Top-up credits are yours. They do not expire at the end of a month, and they keep working if you later cancel.',
  'In the app, Apple and Google take the payment and show your storefront’s own local price before you confirm. On the web it is Stripe. Either way EuphoTale never sees your card details.',
];
