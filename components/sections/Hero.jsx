import HeroReel from '@/components/HeroReel';
import { GetAppButton, StoreButtons } from '@/components/GetApp';
import { Quote } from '@/components/Icon';
import { SECTION_IDS, anchor } from '@/lib/site';

/**
 * The hero.
 *
 * One claim, one picture, one action. The old site opened with a stat bar, a
 * five-star rating and two floating notification cards — all of which are ways
 * of saying "other people like this" before saying what it is.
 *
 * The three items under the buttons are facts about the product, not social
 * proof. There is no invented user count anywhere on this site.
 */
export default function Hero() {
  return (
    <section className="wash relative overflow-hidden border-b border-hair">
      <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="reveal">
            <p className="eyebrow mb-5">
              <span aria-hidden="true" className="inline-block h-1 w-1 rounded-full bg-accent" />
              Memory · Journal · Companion
            </p>

            <h1 className="headline text-[clamp(2.5rem,6.5vw,4.25rem)]">
              A quiet home for the life you&rsquo;re living.
            </h1>

            <p className="measure mt-6 text-lg leading-relaxed text-ink-mute sm:text-xl">
              EuphoTale keeps your memories, your journal and a ten-second check-in each day — and gives
              you a companion who remembers all of it. No endless feed, no generated filler, nothing
              built to keep you scrolling.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <GetAppButton label="Get EuphoTale" />
              {/* Root-relative, and validated at build time — see lib/site.js.
                  The second action goes to what the app is FOR rather than to
                  how the memory is built: someone who has read one paragraph
                  is deciding whether this is for them, not yet how it works. */}
              <a href={anchor(SECTION_IDS.uses)} className="btn-secondary">
                See what it&rsquo;s for
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-mute">
              <li className="font-medium text-ink">Free for everything that keeps your life</li>
              <li aria-hidden="true" className="text-ink-mute">·</li>
              <li>Two voices, one permanent memory</li>
              <li aria-hidden="true" className="text-ink-mute">·</li>
              <li>No off-platform tracking</li>
            </ul>
          </div>

          <div className="reveal relative mx-auto w-full max-w-[19rem] lg:max-w-[20.5rem]">
            {/* Not a screenshot. The frame plays a short loop of the app being
                used — see components/HeroReel.jsx. On a phone this is the first
                and often the only thing anyone looks at, and a still cannot
                show that a memory is a strip of moments or that the companion
                is one screen across. It stops at the companion and rests there;
                reduced motion gets the still it replaced. */}
            <HeroReel />

            {/* The companion's voice, in the journal serif. Deliberately the
                only floating element on the page — one is a detail, three is a
                dashboard. Hidden on the narrowest screens, where it would sit
                on top of the screenshot rather than beside it. */}
            <figure className="card absolute -bottom-6 -left-6 hidden w-60 p-4 shadow-lift sm:block lg:-left-14">
              <Quote className="h-4 w-4 text-accent" />
              <blockquote className="mt-2 font-display text-[1.0625rem] italic leading-snug text-ink">
                You&rsquo;ve sounded lighter since the move. I noticed.
              </blockquote>
              <figcaption className="mt-2 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink-mute">
                Your companion, unprompted
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-16 border-t border-hair pt-8 sm:mt-20">
          <StoreButtons />
        </div>
      </div>
    </section>
  );
}
