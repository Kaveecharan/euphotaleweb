// ─────────────────────────────────────────────────────────────────────────────
//  What EuphoTale is, written once.
//
//  The site renders this file; it does not restate it. There is no second list
//  to keep in step, and nothing here is a slogan — every line is a decision
//  enforced in the product.
//
//  ── The editing rule ────────────────────────────────────────────────────────
//
//  A row earns its place only if it is something this app does DIFFERENTLY.
//  Direct messages, search, likes, comments and notifications used to have
//  twelve cards of their own on the home page; they are table stakes, they are
//  present in every app a visitor is comparing this one against, and a grid of
//  them said nothing except "we also have the normal things". They are now one
//  sentence (TABLE_STAKES, below), which is the weight the claim deserves.
//
//  Ordered by PRIORITY. PILLARS[0] is the reason someone installs the app, and
//  the page is laid out in exactly this order.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * What the app is actually FOR — the situations it pays off in.
 *
 * This section exists because a feature list answers "what does it have", and
 * nobody installs anything for that reason. Each entry is a real moment in a
 * real life and the part of the app that meets it. `anchor` deep-links to the
 * pillar explaining the mechanism, so curiosity has somewhere to go.
 *
 * `anchor` MUST be a value in SECTION_IDS (lib/site.js) — the section asserts
 * it at build time, so a use case cannot point at a pillar that is not there.
 * `icon` maps to an export in components/Icon.jsx.
 */
export const USES = [
  {
    icon: 'Pulse',
    anchor: 'daylog',
    title: 'The ordinary Tuesday you would never have kept',
    body:
      'Ten seconds, once a day. Nothing happened — which is exactly why nothing else would have recorded it, and why the flat middle of a year is the part you genuinely cannot reconstruct later.',
    payoff: 'Ask how that spring went and get an answer, not a guess.',
  },
  {
    icon: 'Timeline',
    anchor: 'memories',
    title: 'Three weeks abroad, in one place, in order',
    body:
      'Not four hundred photos scattered through a camera roll between screenshots and receipts. One timeline you open, with the days in sequence and the words still attached to them.',
    payoff: 'Findable in ten years, not merely backed up.',
  },
  {
    icon: 'Chat',
    anchor: 'companion',
    title: 'Someone to talk to at 1am who has the backstory',
    body:
      'No re-explaining who your sister is, which job this is, or why last month was hard. It already knows, because you told it — and it has not forgotten in the weeks since.',
    payoff: 'You get to start in the middle of the sentence.',
  },
  {
    icon: 'Sparkle',
    anchor: 'companion',
    title: 'Why February was hard, with the evidence',
    body:
      'Check-ins, entries and conversations are one record, so a pattern you could not see from inside it becomes visible from outside — quoted back from your own words, never invented.',
    payoff: 'The thing you half-noticed, confirmed or corrected.',
  },
  {
    icon: 'Shield',
    anchor: 'memories',
    title: 'Showing one afternoon without handing over your life',
    body:
      'Share the moment, not the timeline. The person you invite sees that afternoon and nothing added to it later, and the invitation grants nothing at all until they accept it.',
    payoff: 'A door, not a key to the building.',
  },
  {
    icon: 'Moon',
    anchor: 'moon',
    title: 'Disappearing for three months and losing nothing',
    body:
      'No streak to break, no flame to lose, no notification engineered to shame you back in. The Moon counts what you kept inside a period, so a bad month is held rather than erased.',
    payoff: 'It waited. That is the whole feature.',
  },
];

/**
 * The five things EuphoTale is. Each gets a full-width section with ONE
 * screenshot — one, not a gallery, because a screenshot is evidence for a
 * specific claim, and a rail of fourteen is a slideshow of an interface the
 * visitor has no reason to study yet.
 *
 * `shot` is the screenshot id — see lib/content/screenshots.js. `id` MUST be a
 * value in SECTION_IDS (lib/site.js); the Pillars component asserts it, so a
 * pillar cannot exist that the footer is unable to link to.
 *
 * Three or four points each, and no more. Anything the pricing table or the
 * privacy section already states was cut from here rather than said twice.
 */
export const PILLARS = [
  {
    id: 'companion',
    eyebrow: 'Permanent memory',
    title: 'A companion that actually remembers you.',
    lede:
      'Not a chatbot that forgets you between sessions. EuphoTale builds one permanent understanding of your life — and speaks it back in the voice you need that day.',
    shot: 'companion-chat',
    points: [
      {
        title: 'One memory, two voices',
        body:
          'A friend you name yourself, and a Guide. Both draw on the same life you have shared — switching voice never resets what is known about you.',
      },
      {
        title: 'Every memory is evidenced',
        body:
          'Each thing it remembers is anchored to your own words, quoted from the conversation or check-in it came from. No evidence, no memory. That is the whole anti-invention guarantee.',
      },
      {
        title: 'People change, and it keeps up',
        body:
          'New information updates a memory rather than duplicating it, and the old version is kept as history. So it can say you used to dread something and lately you sound different — and it picks unfinished things back up without you re-explaining any of it.',
      },
      {
        title: 'It reads like a person',
        body:
          'No bullet points, no rehearsed sympathy, no summarising you back to yourself. Short when short is right. Quiet when quiet is right.',
      },
    ],
  },
  {
    id: 'memories',
    eyebrow: 'Memories',
    title: 'A memory is a timeline, not a post.',
    lede:
      'Start Iceland, or the first year with the dog, and keep adding to it for as long as it keeps happening. Each moment carries its own date, photos, video and words.',
    shot: 'memory-timeline',
    points: [
      {
        title: 'It grows with you',
        body:
          'Add a moment today and another one in March. The timeline holds the whole arc — a memory is never finished just because you closed the app.',
      },
      {
        title: 'Share one moment, not your life',
        body:
          'Sharing is per moment. Someone you invite sees the moment you chose and nothing that gets added later, an invite grants nothing until it is accepted, and blocking severs it in both directions.',
      },
      {
        title: 'Somewhere for the loose ones',
        body:
          'Everything that does not belong to a trip or a chapter lands in Me — your default memory — so nothing has to be filed to be kept.',
      },
    ],
  },
  {
    id: 'journal',
    eyebrow: 'Journal',
    title: 'Pages that feel like paper.',
    lede:
      'Write, place a photo where you want it, leave a voice note. Then choose the face it is written in — eight of them, from a hand script to a Garamond.',
    shot: 'journal-entry',
    points: [
      {
        title: 'Text, photos and your voice',
        body:
          'Drop images into the page and size them by hand. Add a voice note for the days writing does not come, across as many pages as the day actually needed.',
      },
      {
        title: 'How you felt, attached',
        body:
          'Rate happiness, stress, sadness, anger, calm, fatigue and motivation on the entry — with a reason, if you want one. Only what you actually rate is stored.',
      },
      {
        title: 'Private unless you say otherwise',
        body:
          'Every entry has its own visibility: public, followers, mutuals, or nobody but you.',
      },
    ],
  },
  {
    id: 'daylog',
    eyebrow: 'Day log',
    title: 'Rate your day in about ten seconds.',
    lede:
      'One check-in a day. Pick up to three feelings in the order they mattered, put the day somewhere between 0 and 10, add a line if you feel like it. Seven plain feelings and one slider — there is no mood taxonomy to learn and nothing to configure.',
    shot: 'day-log',
    points: [
      {
        title: 'It turns into a picture',
        body:
          'Weeks of check-ins become a mood trend on your profile — the shape of a season, rather than a number.',
      },
      {
        title: 'Your companion sees it too',
        body:
          'The check-ins are part of what it knows, so it can notice the flat stretch you would have talked yourself out of mentioning.',
      },
      {
        title: 'Yours alone',
        body:
          'Day logs are never posted to a feed and are never used for ad targeting. Mood data stays in the parts of EuphoTale that need it.',
      },
    ],
  },
  {
    id: 'moon',
    eyebrow: 'The Moon',
    title: 'Progress that forgives a bad month.',
    lede:
      'New Moon, Growing, Half, Full. The ladder rewards keeping your life — not opening an app every single day.',
    shot: 'moon',
    points: [
      {
        title: 'Not a streak',
        body:
          'A level asks for a number of check-ins somewhere inside a week, a month, a quarter or a year. A quiet Tuesday costs you nothing at all.',
      },
      {
        title: 'Grace is built in',
        body:
          'Illness, travel, a hard month — a missed period is held rather than punished, and Full Moon opens a sixty-day catch-up window instead of vanishing.',
      },
      {
        title: 'Full Moon is a year of your life',
        body:
          'A hundred and fifty check-ins, and real memories kept, across twelve months. The date you first reached it is never erased, even if the level later slips.',
      },
    ],
  },
];

/**
 * The Moon ladder, stated as numbers. Rendered as a small table beside the
 * Moon pillar — mirrors LEVELS in be/services/moon.service.js.
 */
export const MOON_LEVELS = [
  { level: 'New Moon',     span: 'a week',    required: '3 check-ins',   note: 'Once earned, it is yours to keep.' },
  { level: 'Growing Moon', span: 'a month',   required: '12 check-ins',  note: 'Plus one memory kept that month.' },
  { level: 'Half Moon',    span: 'a quarter', required: '40 check-ins',  note: 'Plus a memory kept that quarter.' },
  { level: 'Full Moon',    span: 'a year',    required: '150 check-ins', note: 'Plus a memory that year. A missed year opens a 60-day window, not a reset.' },
];

/**
 * The ordinary things, in one line.
 *
 * This is what a twelve-card feature grid was reduced to. A visitor comparing
 * apps does need to know these exist; not one of them is a reason to choose
 * this app over another, and giving each its own card with an icon implied the
 * opposite. Rendered as a single sentence in small type.
 */
export const TABLE_STAKES = [
  'direct messages with photos and voice',
  'a feed of the people you chose, which ends',
  'search and hashtags',
  'follows, mutuals and private-account requests',
  'comments, likes, saves and reposts',
  'tagging only mutuals can do, and only if you allow it',
  'block, mute, hide and report',
  'push notifications you can silence channel by channel',
  'human verification that keeps bot farms out',
];

/**
 * The negative space — what EuphoTale deliberately refuses to do.
 *
 * This is the most-read block on the page and every line is a real product
 * decision enforced in code, not a slogan. If one of these ever stops being
 * true, delete the line the same day.
 */
export const NOT_HERE = [
  {
    title: 'No infinite scroll',
    body: 'The feed is the people you chose, and it ends. Nothing here is designed to be bottomless.',
  },
  {
    title: 'No AI slop',
    body: 'Nothing in your feed is generated. Every memory, page and photo was made by a person you decided to follow.',
  },
  {
    title: 'No streak guilt',
    body: 'No counter to break, no flame to lose, no notification engineered to shame you back in.',
  },
  {
    title: 'No rage bait',
    body: 'Nothing ranks your feed by whatever upsets people fastest. It is the people you know, in the order things happened.',
  },
  {
    title: 'No off-platform tracking',
    body: 'No pixel on other websites, no SDK inside other apps, no contact upload, no profile of anyone without an account.',
  },
  {
    title: 'No profiling minors',
    body: 'Under eighteen is never interest-profiled and never targetable. An unverified age is treated as under eighteen.',
  },
];
