import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Shot from '@/components/Shot';
import Icon, { Check } from '@/components/Icon';
import { PRIVACY_PILLARS, SECURITY_FACTS } from '@/lib/content/trust';
import { SECTION_IDS } from '@/lib/site';

/**
 * Privacy and safety.
 *
 * Split in two on purpose. The pillars are PROMISES about what happens to your
 * life inside the app, in ordinary language. The list underneath is about how
 * the thing is BUILT, in smaller type — because a visitor deciding whether to
 * trust an app with a decade of memories cares about the first, and a visitor
 * who wants to know whether the engineering is serious cares about the second.
 * Mixing them makes both sound like marketing.
 */
export default function Privacy() {
  return (
    <Section id={SECTION_IDS.privacy} tone="paper" space="lg">
      <SectionHeading
        eyebrow="Privacy and safety"
        title="This only works if it is genuinely yours."
        lede="EuphoTale asks you to keep years of your life in one place. Everything below exists because that is a serious thing to ask."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
        <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {PRIVACY_PILLARS.map((pillar) => (
            <li key={pillar.title} className="reveal">
              <span
                aria-hidden="true"
                className="grid h-10 w-10 place-items-center rounded-xl bg-raised text-accent-deep ring-1 ring-black/[0.05]"
              >
                <Icon name={pillar.icon} className="h-[1.125rem] w-[1.125rem]" />
              </span>
              <h3 className="mt-4 text-[1.0625rem] font-semibold text-ink">{pillar.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-mute">{pillar.body}</p>
            </li>
          ))}
        </ul>

        <div className="reveal mx-auto w-full max-w-[16rem] lg:max-w-none">
          <Shot id="privacy" />
        </div>
      </div>

      <div className="card mt-14 p-7 sm:p-9">
        <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
          Under the surface
        </h3>
        <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {SECURITY_FACTS.map((fact) => (
            <li key={fact} className="flex items-start gap-2.5 text-[0.9375rem] text-ink-body">
              <span aria-hidden="true" className="mt-[0.3rem] text-accent-deep">
                <Check className="h-3.5 w-3.5" />
              </span>
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
