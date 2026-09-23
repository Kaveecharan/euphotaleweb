import Link from 'next/link';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon, { ArrowRight } from '@/components/Icon';
import { USES, TABLE_STAKES } from '@/lib/content/features';
import { SECTION_IDS, anchor } from '@/lib/site';

/**
 * The heading counts the array rather than stating a number.
 *
 * A count typed into copy that a content file controls is drift waiting to
 * happen: somebody adds a seventh use case, nobody re-reads the heading, and
 * the page miscounts itself on a site whose whole argument is that it does not
 * overstate things. Spelled out, because a numeral in a headline reads as data.
 */
const NUMBER_WORDS = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

function countedTitle(n) {
  const word = NUMBER_WORDS[n] ?? String(n);
  return `${word} ${n === 1 ? 'reason' : 'reasons'} this ends up mattering.`;
}

/**
 * What the app is for.
 *
 * This section replaced two: a twelve-card grid of ordinary features (direct
 * messages, search, likes, notifications) and a horizontal rail of fourteen
 * screenshots. Both described the app. Neither gave anyone a reason to install
 * it — a feature list answers "what does it have", and the question a visitor
 * is actually holding is "what would I use this for".
 *
 * So each card is a situation rather than a capability, and closes on the thing
 * you get back. The link under each one goes down to the pillar that explains
 * the mechanism, which is how somebody who wants the detail reaches it without
 * the detail being spent on somebody who does not.
 *
 * `anchor()` validates every one of those targets AT BUILD TIME — see
 * lib/site.js. A use case pointing at a pillar that was renamed or deleted
 * fails `next build` rather than shipping a link that scrolls nowhere.
 */
export default function Uses() {
  return (
    <Section id={SECTION_IDS.uses} tone="paper" space="lg">
      <SectionHeading
        align="center"
        className="max-w-2xl"
        eyebrow="What it is for"
        title={countedTitle(USES.length)}
        lede="Not a list of what is in the app — a list of the moments it earns its place. Nothing here needs setting up first: there are no categories to design and no onboarding that asks you to imagine your goals."
      />

      <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {USES.map((use) => (
          <li key={use.title} className="reveal flex flex-col">
            <span
              aria-hidden="true"
              className="grid h-11 w-11 place-items-center rounded-2xl bg-raised text-accent-deep ring-1 ring-black/[0.05]"
            >
              <Icon name={use.icon} className="h-5 w-5" />
            </span>

            <h3 className="mt-5 text-[1.0625rem] font-semibold leading-snug text-ink">
              {use.title}
            </h3>

            <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-mute">{use.body}</p>

            {/* The payoff, in the editorial serif — the same face the app's own
                journal uses. It is the line worth remembering off this card, so
                it is set apart from the explanation rather than appended to it.
                `mt-auto` keeps it on a common baseline across a row of cards
                whose bodies are deliberately not the same length. */}
            <p className="mt-auto pt-4 font-display text-[1.0625rem] italic leading-snug text-ink">
              {use.payoff}
            </p>

            <Link
              href={anchor(use.anchor, '')}
              className="group mt-3 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-accent-deep underline decoration-accent/25 underline-offset-4 transition-colors hover:decoration-accent"
            >
              How it works
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* ── The ordinary things ────────────────────────────────────────────────
          One sentence, small, at the end — the exact weight these deserve.
          They used to be twelve cards with twelve icons, which read as twelve
          selling points and buried the real ones above them. A visitor comparing
          apps still needs to know they exist; none of them is a reason to pick
          this one. */}
      <p className="measure mx-auto mt-16 border-t border-hair pt-6 text-center text-[0.875rem] leading-relaxed text-ink-mute">
        <span className="font-medium text-ink">Everything ordinary is here too</span>, without a
        section of its own: {TABLE_STAKES.join(', ')}.
      </p>
    </Section>
  );
}
