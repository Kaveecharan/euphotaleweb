import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import PriceCards from '@/components/PriceCards';
import { COMPARISON, PRICING_NOTES } from '@/lib/content/pricing';
import { SECTION_IDS } from '@/lib/site';

/**
 * Pricing.
 *
 * The comparison table leads with the rows that are IDENTICAL on both plans and
 * marks them as such, which is unusual and deliberate: the interesting claim
 * here is not that Pro gives you more, it is that Free is not degraded to make
 * Pro look better. Photo quality, comment length and every privacy control are
 * the same either way, and a table is the only honest way to show that.
 */
export default function Pricing() {
  return (
    <Section id={SECTION_IDS.pricing} tone="raised" space="lg">
      <SectionHeading
        align="center"
        className="max-w-2xl"
        eyebrow="Pricing"
        title="Free keeps your life. Pro adds the companion."
        lede="Nothing you have already kept is ever held behind a plan, and cancelling never takes a memory away."
      />

      <div className="mt-12">
        <PriceCards />
      </div>

      <div className="mt-16">
        <h3 className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
          Side by side
        </h3>

        {/* The table scrolls rather than wraps on a narrow screen: a comparison
            that reflows into stacked cards stops being a comparison. */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="sr-only">Free and Pro compared, feature by feature</caption>
            <thead>
              <tr className="border-b border-hair">
                <th scope="col" className="py-3 pr-4 font-semibold text-ink">
                  Feature
                </th>
                <th scope="col" className="w-32 px-4 py-3 font-semibold text-ink">
                  Free
                </th>
                <th scope="col" className="w-32 px-4 py-3 font-semibold text-ink">
                  Pro
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.label} className="border-b border-hair last:border-b-0">
                  <th scope="row" className="py-3 pr-4 font-normal text-ink-body">
                    {row.label}
                    {row.same ? (
                      <span className="ml-2 rounded-pill bg-well px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider text-ink-mute">
                        Identical
                      </span>
                    ) : null}
                  </th>
                  <td className="px-4 py-3 text-ink-mute">{row.free}</td>
                  <td className="px-4 py-3 font-medium text-ink">{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ul className="measure mx-auto mt-10 space-y-2 text-center text-[0.8125rem] leading-relaxed text-ink-mute">
        {PRICING_NOTES.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </Section>
  );
}
