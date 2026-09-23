import { StoreButtons } from '@/components/GetApp';
import { SECTION_IDS } from '@/lib/site';

/**
 * The closing block, and the target of every "Get EuphoTale" button when more than
 * one store listing is live.
 *
 * Night tone, one line, two buttons, nothing else. A closing section with a
 * newsletter box, a testimonial and a second feature list is a section that has
 * stopped closing and started selling again.
 */
export default function FinalCta() {
  return (
    <section id={SECTION_IDS.get} className="scroll-mt-24 bg-night">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="headline text-[clamp(2rem,5vw,3.25rem)] text-white">
            Start with today.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-night-mute">
            Three feelings and a number is a complete first entry. In a year it will be the oldest
            thing you have here, and you will be glad it exists.
          </p>

          <div className="mt-9 flex justify-center">
            <StoreButtons tone="night" className="justify-center" />
          </div>

          <p className="mt-8 text-sm text-night-mute">
            Free to use, for as long as you want to use it.
          </p>
        </div>
      </div>
    </section>
  );
}
