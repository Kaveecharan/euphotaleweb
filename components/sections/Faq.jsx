import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { ChevronDown } from '@/components/Icon';
import { FAQ } from '@/lib/content/trust';
import { SECTION_IDS } from '@/lib/site';

/**
 * Frequently asked questions, built on native <details>.
 *
 * No accordion state, no client component, no ARIA to get wrong: the browser
 * already ships an accessible disclosure widget that works with the keyboard,
 * works with a screen reader, works before hydration, and can be found by
 * in-page search (browsers open a closed <details> to reveal a match).
 *
 * The structured data below is the same set of questions and answers already
 * rendered above it. It is built from the same constant, so the page and the
 * markup cannot disagree — which is both the honest arrangement and the one
 * Google's guidelines require.
 */
export default function Faq() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <Section id={SECTION_IDS.faq} tone="paper" space="lg">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading
          eyebrow="Questions"
          title="The things people actually ask."
          lede="Short answers. If one of these needed a paragraph of hedging, the product would need changing instead."
        />

        <div className="divide-y divide-black/[0.07] border-y border-hair">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-5">
              {/* `list-none` removes the disclosure triangle in Chrome and
                  Firefox; the ::-webkit-details-marker rule is what Safari
                  needs. Both are required — neither alone is enough. */}
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.0625rem] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-ink-faint transition-transform duration-200 group-open:rotate-180"
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <p className="measure mt-3 text-[0.9375rem] leading-relaxed text-ink-mute">{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // Constants from lib/content/trust.js — no user input reaches this.
          // The `<` escape makes a `</script>` break-out impossible regardless.
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
    </Section>
  );
}
