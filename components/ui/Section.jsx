/**
 * A page section.
 *
 * Vertical rhythm and horizontal gutters are decided here, once. Every section
 * on the site uses it, so changing the page's breathing room is one edit rather
 * than fourteen — and no section can quietly drift to its own padding scale.
 *
 * `tone` picks a rung on the tonal ladder rather than a colour:
 *   paper  — the page itself (default)
 *   raised — a white band, one step up, for content that should feel lifted
 *   well   — a step down, for supporting or secondary material
 *   night  — inverted, for the two moments the page needs to go quiet
 */
const TONES = {
  paper:  'bg-page text-ink-body',
  raised: 'bg-raised text-ink-body',
  well:   'bg-well text-ink-body',
  night:  'bg-night text-night-mute',
};

const SPACING = {
  sm: 'py-14 sm:py-16',
  md: 'py-20 sm:py-24',
  lg: 'py-24 sm:py-32',
};

export default function Section({
  id,
  tone = 'paper',
  space = 'md',
  className = '',
  children,
}) {
  return (
    <section
      id={id}
      // scroll-mt keeps an anchored heading clear of the sticky nav bar; the
      // global scroll-padding covers smooth scrolling, this covers a direct
      // load of /#pricing, where no scroll animation happens at all.
      className={`${TONES[tone] ?? TONES.paper} ${SPACING[space] ?? SPACING.md} ${id ? 'scroll-mt-24' : ''} ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
