// ─────────────────────────────────────────────────────────────────────────────
//  Privacy, safety and the questions people actually ask.
//
//  Every claim below is enforced somewhere in the product. Nothing here is
//  aspirational, and nothing is hedged with "we strive to" — a privacy promise
//  that needs a qualifier is not a promise. If a rule changes, this file
//  changes with it.
// ─────────────────────────────────────────────────────────────────────────────

/** The privacy section. `icon` maps to an export in components/Icon.jsx. */
export const PRIVACY_PILLARS = [
  {
    icon: 'Eye',
    title: 'Visible to exactly who you chose',
    body:
      'Every memory, moment and journal entry is public, followers-only, mutuals-only or nobody but you. Change the account default and it applies backwards, to everything already posted — not just to what comes next.',
  },
  {
    icon: 'Shield',
    title: 'Sharing is consent, one moment at a time',
    body:
      'An invitation to a moment grants nothing until it is accepted, and it never opens the rest of the timeline. Block someone and every shared moment is severed in both directions.',
  },
  {
    icon: 'Lock',
    title: 'Your feelings are not ad data',
    body:
      'Day logs, emotion ratings and everything you say to your companion are excluded from ad targeting entirely. Health, beliefs, politics and sexuality can never become an interest, at any point, for anyone.',
  },
  {
    icon: 'Face',
    title: 'Real people, not bot farms',
    body:
      'One selfie, reviewed by a person, proves there is a human behind an account. It is never asked at signup, it is never a public badge, and it is deleted once the account is confirmed.',
  },
  {
    icon: 'Users',
    title: 'Ads you can switch off, and never for minors',
    body:
      'Personalised ads are opt-in wherever the law requires consent, and switchable everywhere else. Nobody under eighteen is ever profiled or targeted. Pro removes ads completely.',
  },
  {
    icon: 'Trash',
    title: 'Leaving works properly',
    body:
      'Deactivate to step away, or delete to go. Deletion erases your account, your posts, your messages and your interest profile — there is no shadow copy waiting for you to come back.',
  },
];

/**
 * The engineering-side claims. Deliberately separate from the pillars above:
 * these are about how the thing is BUILT, and they belong in smaller type under
 * a heading that promises less.
 */
export const SECURITY_FACTS = [
  'Passwords hashed with bcrypt, never stored or logged in the clear',
  'Sessions are revocable, and a password change signs the other devices out',
  'Email verification, Google sign-in, and bot checks on every sensitive form',
  'Rate limiting on authentication, posting, messaging and support',
  'Payments handled by Apple, Google or Stripe — card details never touch EuphoTale',
  'Uploads type-checked and size-capped before anything is stored',
  'Every read of a message, memory or profile re-checks permission at the door',
];

/**
 * FAQ. Ordered by how likely the question is to be the reason someone does not
 * install, which is not the same as how often it is asked.
 *
 * Answers are plain sentences with no marketing in them. A hedged FAQ answer
 * reads as a yes the writer did not want to say out loud.
 */
export const FAQ = [
  {
    q: 'Is my companion actually remembering me, or just re-reading the chat?',
    a: 'Remembering. What you tell it becomes a lasting understanding of your life that carries across conversations and across months — and it is anchored to your own words, so it cannot invent a version of you that never happened. Switching between the friend and the Guide does not reset any of it.',
  },
  {
    q: 'What stops it from making things up about me?',
    a: 'Every memory has to be backed by something you actually said, quoted from the conversation or check-in it came from. Nothing without that evidence is kept. When something about you changes, the new version replaces the old one and the old one is retained as history — so it can talk about how you have changed rather than confusing the two.',
  },
  {
    q: 'Is this a social media app or a private journal?',
    a: 'Both, and the line between them is yours to draw. Everything you make is private unless you decide otherwise, and there is no requirement to post anything to anyone. Plenty of people use EuphoTale entirely alone.',
  },
  {
    q: 'Does the AI write posts or content in my feed?',
    a: 'No. Nothing in the feed is generated — every memory, page and photo was made by a person you chose to follow. The companion talks to you, privately, and never posts anything anywhere.',
  },
  {
    q: 'Do I lose my progress if I skip a few days?',
    a: 'No. The Moon counts check-ins inside a period rather than consecutive days, so quiet days cost nothing, and a period that goes badly is held rather than punished. There is no streak to break.',
  },
  {
    q: 'What happens to my memories if I stop paying?',
    a: 'They stay. Free is a complete product, not a locked one: your memories, journals, day logs and Moon level are all still there, at full quality. You keep the friend companion too, with a daily limit. What you lose is the Guide, the larger allowance, the extra capacity, and the ad-free feed.',
  },
  {
    q: 'Do I have to pay to talk to a companion?',
    a: 'No. Every account can talk to the friend companion every day, free, with no card and no countdown — there is no trial to start or forget to cancel. Pro removes the daily limit, adds the Guide, and raises the allowance from 150 replies a month to 1,200.',
  },
  {
    q: 'Can people find me if I do not want to be found?',
    a: 'A private account holds new followers for approval, and search, tagging and messages all respect that. You can also restrict who may message you, who may tag you, and which parts of your profile anyone can see.',
  },
  {
    q: 'Why does it ask for a selfie?',
    a: 'To confirm there is a person behind the account, which is the only thing that reliably keeps bot farms out. It is never asked when you sign up, a human reviews it, and it is not a badge anyone else can see.',
  },
  {
    q: 'Can I really delete everything?',
    a: 'Yes. Deactivate to step away without losing anything, or delete permanently — which removes your account, your posts, your messages and your interest profile. There is no shadow copy kept in case you come back.',
  },
];
