import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { GetAppButton } from '@/components/GetApp';
import { BRAND } from '@/lib/site';

export const metadata = {
  title: 'About',
  description:
    'Why EuphoTale exists: a calm place to keep the life you are actually living, with a companion that remembers it.',
  alternates: { canonical: '/about' },
};

const PRINCIPLES = [
  {
    title: 'Keeping beats capturing',
    body:
      'A photo you never look at again was not really kept. EuphoTale is built around returning to things — timelines that grow, entries you re-read, a companion that brings something back up when it matters.',
  },
  {
    title: 'Attention is not the product',
    body:
      'There is no metric here that improves when you stay longer. The feed ends, the check-in takes ten seconds, and nothing sends you a notification engineered to pull you back.',
  },
  {
    title: 'Memory has to be honest',
    body:
      'A companion that invents a version of your life is worse than one that remembers nothing. Everything it knows is anchored to something you actually said, and when you change, the old version is kept as history rather than overwritten.',
  },
  {
    title: 'Paying should buy room, not quality',
    body:
      'Photo quality, comment length and every privacy control are identical on both plans. A memory recorded on the free plan should not be a worse memory in ten years.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Section tone="paper" space="lg" className="wash border-b border-hair">
          <SectionHeading
            as="h1"
            eyebrow="About"
            title={<>We built EuphoTale because keeping things got hard.</>}
            lede="Everything online is now designed to be consumed and forgotten. The places most of us put our lives are optimised for how long we stay, not for whether we ever find anything again."
          />
        </Section>

        <Section tone="raised" space="lg">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <h2 className="headline text-[clamp(1.75rem,3.4vw,2.5rem)]">
              The idea is old-fashioned on purpose.
            </h2>
            <div className="measure space-y-5 text-[1.0625rem] leading-relaxed text-ink-mute">
              <p>
                People used to keep albums, diaries and letters. They were slow, private by default,
                and worth opening years later. Then the tools got faster, louder, and much better at
                holding attention than at holding memory.
              </p>
              <p>
                EuphoTale is an attempt at the first thing with the conveniences of the second. Photo
                timelines that grow over months. Pages you write by hand, in a face you chose. A
                ten-second check-in so the ordinary days are recorded too — those turn out to be the
                ones you cannot reconstruct later.
              </p>
              <p>
                The companion exists because a record nobody revisits is a filing cabinet. Something
                that genuinely knows your life can bring the right part of it back at the right
                moment — and can be a friend, or the person you talk to when you want to understand
                something properly. It remembers permanently, it never invents, and it never posts
                anything anywhere.
              </p>
              <p className="font-medium text-ink">
                No infinite feed. No generated filler. Nothing here is trying to win your evening.
              </p>
            </div>
          </div>
        </Section>

        <Section tone="paper" space="lg">
          <SectionHeading
            eyebrow="What we hold to"
            title="Four decisions everything else follows from."
          />
          <ul className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {PRINCIPLES.map((principle) => (
              <li key={principle.title} className="reveal">
                <h3 className="text-lg font-semibold text-ink">{principle.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-mute">
                  {principle.body}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* ── Support ───────────────────────────────────────────────────────────
            An email address and the in-app route, rather than a contact form.

            The form on the site this replaced posted to an endpoint that does
            not exist on the EuphoTale backend — it would have failed silently for
            every visitor. A public, unauthenticated contact endpoint is also a
            spam surface that has to be built, rate-limited and monitored, and
            support already works properly from inside the app where the sender
            is a known account. Wiring one up is a backend change, not a
            copy change, so the page is honest about where to write instead. */}
        <Section id="support" tone="raised" space="lg">
          <div className="card mx-auto max-w-3xl p-8 text-center sm:p-12">
            <SectionHeading
              align="center"
              eyebrow="Support"
              title="Talk to a person."
              lede="Questions, bugs, account trouble, or something you would like EuphoTale to do — all of it reaches the same small inbox."
            />

            <div className="mt-8 flex flex-col items-center gap-3">
              <a
                href={`mailto:${BRAND.supportEmail}`}
                className="btn-primary"
              >
                {BRAND.supportEmail}
              </a>
              <p className="text-[0.8125rem] text-ink-mute">
                Already have the app? Settings → Contact support attaches your account details, which
                gets you a faster answer.
              </p>
            </div>
          </div>
        </Section>

        <Section tone="paper" space="md">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="headline text-[clamp(1.75rem,3.4vw,2.5rem)]">Start with today.</h2>
            <p className="mt-4 text-ink-mute">
              Three feelings and a number is a complete first entry.
            </p>
            <div className="mt-7 flex justify-center">
              <GetAppButton label="Get EuphoTale" />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
