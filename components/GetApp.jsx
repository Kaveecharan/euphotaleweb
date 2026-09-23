import { STORES, SECTION_IDS, anchor } from '@/lib/site';
import { AppleMark, GooglePlayMark, ArrowRight } from '@/components/Icon';

// ─────────────────────────────────────────────────────────────────────────────
//  Download controls.
//
//  Server components, with no user-agent sniffing and no modal.
//
//  The previous site guessed the visitor's platform from `navigator.userAgent`
//  and opened a dialog when it could not. That is a client bundle, a hydration
//  boundary and a popup, all to answer a question the visitor can answer faster
//  by looking: on a phone you are one tap from the right store either way, and
//  a UA string has been an unreliable way to ask since long before this site
//  existed.
//
//  Where a store listing does not exist yet, this renders "coming soon" rather
//  than a link to a placeholder id. A download button that 404s costs more
//  trust than an honest gap.
// ─────────────────────────────────────────────────────────────────────────────

const LIVE_STORES = Object.values(STORES).filter((s) => s.url);

/**
 * Where the primary call to action should point.
 *
 *  · exactly one live store → straight to it, no intermediate step
 *  · more than one          → the download block, which lists them
 *  · none yet               → what the app is for, because there is nothing to get
 *
 * Both in-page targets are ROOT-RELATIVE (`/#get`, not `#get`). This button is
 * rendered in the header of every page, and a bare fragment on /about points at
 * a section that only exists on the home page — a control that appears to do
 * nothing. As `/#get` it resolves from anywhere, and stays a same-document
 * scroll on the home page itself.
 */
function primaryTarget() {
  if (LIVE_STORES.length === 1) return { href: LIVE_STORES[0].url, external: true };
  if (LIVE_STORES.length > 1) return { href: anchor(SECTION_IDS.get), external: false };
  return { href: anchor(SECTION_IDS.uses), external: false };
}

export function GetAppButton({
  label = 'Get EuphoTale',
  variant = 'primary',
  className = '',
}) {
  const { href, external } = primaryTarget();
  const styles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    night: 'btn-ghost-night',
  };

  return (
    <a
      href={href}
      // noopener is the security-relevant half (it denies the opened page a
      // handle on window.opener); noreferrer is the privacy half. Both, always,
      // on every target="_blank" on this site.
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${styles[variant] ?? styles.primary} ${className}`}
    >
      {LIVE_STORES.length === 0 ? 'See what is inside' : label}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

/**
 * The two store buttons, side by side.
 *
 * `tone="night"` inverts them for the dark closing section.
 */
export function StoreButtons({ tone = 'light', className = '' }) {
  const night = tone === 'night';

  const base =
    'inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-colors duration-200 min-w-[11.5rem]';
  const live = night
    ? `${base} bg-white text-ink hover:bg-white/90`
    : `${base} bg-ink text-white hover:bg-ink-body`;
  const soon = night
    ? `${base} bg-white/[0.06] text-night-mute border border-night cursor-default`
    : `${base} bg-well text-ink-mute border border-hair cursor-default`;

  const rows = [
    { key: 'android', Mark: GooglePlayMark, top: 'Get it on', name: STORES.android.label, url: STORES.android.url },
    { key: 'ios',     Mark: AppleMark,      top: 'Download on the', name: STORES.ios.label, url: STORES.ios.url },
  ];

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {rows.map(({ key, Mark, top, name, url }) =>
        url ? (
          <a key={key} href={url} target="_blank" rel="noopener noreferrer" className={live}>
            <Mark className="h-6 w-6" />
            <span className="text-left leading-tight">
              <span className="block text-[0.625rem] uppercase tracking-wider opacity-70">{top}</span>
              <span className="block text-[0.9375rem] font-semibold">{name}</span>
            </span>
          </a>
        ) : (
          <div key={key} className={soon} aria-label={`${name} — coming soon`}>
            <Mark className="h-6 w-6" />
            <span className="text-left leading-tight">
              <span className="block text-[0.625rem] uppercase tracking-wider opacity-80">Coming soon</span>
              <span className="block text-[0.9375rem] font-semibold">{name}</span>
            </span>
          </div>
        )
      )}
    </div>
  );
}
