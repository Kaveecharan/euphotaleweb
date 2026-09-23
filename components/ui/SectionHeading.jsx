/**
 * Eyebrow + headline + lede, in the one arrangement the site uses.
 *
 * The headline takes the serif at editorial sizes and the lede takes Inter at
 * a readable measure. Having exactly one component own that pairing is what
 * keeps eleven sections looking like one page.
 *
 * `align` is `left` by default: centred text is harder to read in quantity, so
 * it is reserved for the two or three moments that are genuinely a statement.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  tone = 'light',
  className = '',
  as: Heading = 'h2',
}) {
  const centered = align === 'center';
  const night = tone === 'night';

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow ? (
        <p className={`eyebrow mb-4 ${night ? 'text-accent-light' : ''}`}>
          <span
            aria-hidden="true"
            className={`inline-block h-1 w-1 rounded-full ${night ? 'bg-accent-light' : 'bg-accent'}`}
          />
          {eyebrow}
        </p>
      ) : null}

      <Heading
        className={`headline text-[clamp(2rem,4.6vw,3.25rem)] ${night ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </Heading>

      {lede ? (
        <p
          className={`measure mt-5 text-[1.0625rem] leading-relaxed sm:text-lg ${
            centered ? 'mx-auto' : ''
          } ${night ? 'text-night-mute' : 'text-ink-mute'}`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
