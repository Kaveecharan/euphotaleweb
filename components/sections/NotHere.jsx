import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { NOT_HERE } from '@/lib/content/features';
import { Minus } from '@/components/Icon';

/**
 * What EuphoTale refuses to do.
 *
 * Placed second, immediately under the hero, because for the audience this app
 * is for it is the most persuasive thing on the page — and because a promise
 * made this early is one the rest of the site has to keep.
 *
 * Every line is a decision enforced in the product. If one stops being true,
 * remove it from lib/content/features.js the same day.
 */
export default function NotHere() {
  return (
    <Section tone="night" space="lg">
      <SectionHeading
        tone="night"
        eyebrow="The negative space"
        title={<>Most of the work went into what isn&rsquo;t here.</>}
        lede="An app that holds your life should not also be competing for your evening. These are not settings you have to find — they are things EuphoTale does not do."
      />

      <ul className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {NOT_HERE.map((item) => (
          <li key={item.title} className="reveal">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-night text-accent-light"
              >
                <Minus className="h-3.5 w-3.5" />
              </span>
              <h3 className="text-[1.0625rem] font-semibold text-white">{item.title}</h3>
            </div>
            <p className="mt-2.5 pl-[2.125rem] text-[0.9375rem] leading-relaxed text-night-mute">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
