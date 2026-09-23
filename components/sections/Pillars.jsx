import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Shot from '@/components/Shot';
import { PILLARS, MOON_LEVELS } from '@/lib/content/features';
import { Check } from '@/components/Icon';
import { sectionId } from '@/lib/site';

/**
 * The five pillars, in priority order, alternating side to side.
 *
 * One component renders all of them from lib/content/features.js. Writing five
 * near-identical sections by hand is how a page ends up with five slightly
 * different heading sizes, and how a sixth feature ends up looking bolted on.
 *
 * The tone alternates paper/raised so consecutive sections separate by TONE
 * rather than by a divider line — the same rule the app's surfaces follow.
 *
 * Each pillar's id goes through `sectionId()`, which throws during the build if
 * it is not declared in SECTION_IDS. The nav, the footer and the use cases all
 * link down here by that id; this is what stops a rename in the content file
 * from quietly breaking every one of them.
 */
export default function Pillars() {
  return (
    <>
      {PILLARS.map((pillar, index) => {
        const imageFirst = index % 2 === 1;

        return (
          <Section
            key={pillar.id}
            id={sectionId(pillar.id)}
            tone={index % 2 === 0 ? 'paper' : 'raised'}
            space="lg"
          >
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className={`reveal ${imageFirst ? 'lg:order-2' : ''}`}>
                <SectionHeading eyebrow={pillar.eyebrow} title={pillar.title} lede={pillar.lede} />

                <dl className="mt-9 space-y-6">
                  {pillar.points.map((point) => (
                    <div key={point.title} className="flex gap-3.5">
                      <span
                        aria-hidden="true"
                        className="mt-[0.2rem] grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/10 text-accent-deep"
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <div>
                        <dt className="text-[0.9375rem] font-semibold text-ink">{point.title}</dt>
                        <dd className="measure mt-1 text-[0.9375rem] leading-relaxed text-ink-mute">
                          {point.body}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>

                {pillar.id === 'moon' ? <MoonLadder /> : null}
              </div>

              <div className={`reveal mx-auto w-full max-w-[18rem] sm:max-w-[19rem] ${imageFirst ? 'lg:order-1' : ''}`}>
                <Shot id={pillar.shot} />
              </div>
            </div>

            {pillar.id === 'companion' ? <Personas /> : null}
            {pillar.id === 'memories' ? <ProfileShowcase /> : null}
          </Section>
        );
      })}
    </>
  );
}

/**
 * The two voices, side by side under the companion pillar.
 *
 * Full width rather than a bullet inside the column, because "friend AND
 * Guide" is the part of this product people repeat to other people, and it
 * needs to be two distinct things on the page rather than one line in a list.
 *
 * ── The second voice is called the Guide, not the therapist ─────────────────
 * The persona was renamed on the server (be/services/companion/persona.service)
 * because the WORD is the regulated thing: Nevada AB 406, Tennessee SB 1580 and
 * their counterparts are triggered by an AI being LABELLED or MARKETED as
 * therapy, not by what the model actually says. A marketing page is marketing,
 * so the old name was a live exposure here in a way it never was in the chat.
 *
 * The disclaimer under it is not legal boilerplate bolted on — the persona
 * itself refuses to claim credentials and stops everything to point at a crisis
 * line if it needs to. Stating that here is simply accurate.
 */
function Personas() {
  const voices = [
    {
      name: 'The friend',
      meta: 'You give them a name',
      body:
        'Teases you, is genuinely glad when something goes right, and goes quiet when quiet is what the moment needs. The name is meant to last — it can be changed once a month, not on a whim.',
    },
    {
      name: 'The Guide',
      meta: 'Same memory, different discipline',
      body:
        'Slower and more careful. Better at the question you have been walking around for a fortnight, and willing to say the thing you will not enjoy hearing when it happens to be true.',
      note:
        'Not a licensed clinician, and it never claims to be. If you are in danger it stops everything and points you to real help.',
    },
  ];

  return (
    // ── Why the frame sits here rather than in the pillar column ─────────────
    // Two phone frames will not fit side by side inside a pillar's half-width
    // column without shrinking both to the point where neither is readable.
    // This block is full width, so the Guide can be shown at exactly the
    // same size as the friend above it — which is the whole point, since the
    // claim being made is that they are the same interface in two voices.
    <div className="reveal mt-16 grid items-center gap-8 lg:grid-cols-[1fr_19rem] lg:gap-14">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
        {voices.map((voice) => (
          <div key={voice.name} className="card p-7">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
              {voice.meta}
            </p>
            <h3 className="mt-3 font-display text-3xl text-ink">{voice.name}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-mute">{voice.body}</p>
            {voice.note ? (
              <p className="mt-4 border-t border-hair pt-4 text-[0.8125rem] leading-relaxed text-ink-mute">
                {voice.note}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mx-auto w-full max-w-[18rem] sm:max-w-[19rem]">
        <Shot id="companion-guide" />
      </div>
    </div>
  );
}

/**
 * The ladder as numbers.
 *
 * A table, because it is one — four rows of three comparable values. Rendering
 * it as cards would lose the column alignment that makes "3 a week versus 150 a
 * year" legible at a glance.
 */
function MoonLadder() {
  return (
    <div className="card mt-10 overflow-hidden">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">
          Moon levels, the period each one is measured over, and the check-ins it asks for
        </caption>
        <thead>
          <tr className="border-b border-hair bg-well/60">
            <th scope="col" className="px-4 py-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
              Level
            </th>
            <th scope="col" className="px-4 py-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
              Measured over
            </th>
            <th scope="col" className="px-4 py-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-mute">
              Asks for
            </th>
          </tr>
        </thead>
        <tbody>
          {MOON_LEVELS.map((level) => (
            <tr key={level.level} className="border-b border-hair last:border-b-0">
              <th scope="row" className="px-4 py-3 align-top font-semibold text-ink">
                {level.level}
                <span className="mt-0.5 block text-xs font-normal text-ink-mute">{level.note}</span>
              </th>
              <td className="px-4 py-3 align-top text-ink-mute">{level.span}</td>
              <td className="px-4 py-3 align-top font-medium text-ink-body">{level.required}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * The profile, under the memories pillar.
 *
 * It belongs here because the pillar's last point is about "Me" — the default
 * memory everything loose lands in — and the profile is where that, the Moon
 * and the mood trend finally sit in one place. Full width for the same reason
 * the Guide frame is: a phone shown at half a column is a phone nobody
 * can read.
 */
function ProfileShowcase() {
  const gathers = [
    ['Every memory, in one grid', 'Trips, chapters and the loose ones, without filing anything.'],
    ['Your Moon, not a streak', 'A level you climbed, which a quiet month does not take away.'],
    ['Weeks of check-ins, as a shape', 'The mood trend lives here too — the season, not the number.'],
  ];

  return (
    <div className="reveal mt-16 grid items-center gap-8 lg:grid-cols-[19rem_1fr] lg:gap-14">
      <div className="mx-auto w-full max-w-[18rem] sm:max-w-[19rem]">
        <Shot id="profile" />
      </div>

      <div>
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
          What it adds up to
        </p>
        <h3 className="mt-3 font-display text-3xl text-ink">Everything you kept, in one place.</h3>
        <dl className="mt-7 space-y-5">
          {gathers.map(([title, body]) => (
            <div key={title} className="flex gap-3.5">
              <span
                aria-hidden="true"
                className="mt-[0.2rem] grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/10 text-accent-deep"
              >
                <Check className="h-3 w-3" />
              </span>
              <div>
                <dt className="text-[0.9375rem] font-semibold text-ink">{title}</dt>
                <dd className="measure mt-1 text-[0.9375rem] leading-relaxed text-ink-mute">{body}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
