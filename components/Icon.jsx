// ─────────────────────────────────────────────────────────────────────────────
//  EuphoTale icon set — 24×24, outline, 1.5 stroke, `currentColor`.
//
//  One <Svg> base so every mark shares the same optical weight: a set drawn at
//  mixed stroke widths is the most common reason an otherwise tidy page looks
//  assembled from three different kits.
//
//  Content files name an icon with a STRING (see lib/content/*.js), and
//  <Icon name="Shield" /> resolves it against the registry at the bottom. A
//  name with no icon renders the neutral fallback rather than throwing, so a
//  typo in a content file can never take the page down.
// ─────────────────────────────────────────────────────────────────────────────

function Svg({ className = 'h-5 w-5', children }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const path = (d, key) => <path key={key ?? d} d={d} />;

/* ── Product marks ────────────────────────────────────────────────────────── */

export const Sparkle = (p) => (
  <Svg {...p}>
    {path('M12 3.5c.6 3.4 1.6 4.4 5 5-3.4.6-4.4 1.6-5 5-.6-3.4-1.6-4.4-5-5 3.4-.6 4.4-1.6 5-5Z')}
    {path('M18.5 14.5c.3 1.7.8 2.2 2.5 2.5-1.7.3-2.2.8-2.5 2.5-.3-1.7-.8-2.2-2.5-2.5 1.7-.3 2.2-.8 2.5-2.5Z')}
  </Svg>
);

export const Moon = (p) => (
  <Svg {...p}>{path('M20 13.5A8.5 8.5 0 0 1 10.5 4a8.5 8.5 0 1 0 9.5 9.5Z')}</Svg>
);



export const Timeline = (p) => (
  <Svg {...p}>
    {path('M7 3.5v17')}
    {path('M7 7.5h10.5M7 13h8')}
    <circle cx="7" cy="7.5" r="1.6" />
    <circle cx="7" cy="13" r="1.6" />
  </Svg>
);

export const Pulse = (p) => (
  <Svg {...p}>{path('M3 12.5h4l2.5-6 4 12 2.5-6H21')}</Svg>
);

/* ── Social ───────────────────────────────────────────────────────────────── */

export const Chat = (p) => (
  <Svg {...p}>
    {path('M20.5 12c0 3.9-3.8 7-8.5 7-1 0-2-.15-2.9-.42L4 20l1.5-3.4A6.6 6.6 0 0 1 3.5 12c0-3.9 3.8-7 8.5-7s8.5 3.1 8.5 7Z')}
  </Svg>
);





export const Users = (p) => (
  <Svg {...p}>
    <circle cx="9.5" cy="8.5" r="3.2" />
    {path('M3.5 19.5a6 6 0 0 1 12 0')}
    {path('M16 5.6a3.2 3.2 0 0 1 0 5.8M17.5 14.2a6 6 0 0 1 3 5.3')}
  </Svg>
);



/* ── Trust ────────────────────────────────────────────────────────────────── */

export const Shield = (p) => (
  <Svg {...p}>
    {path('M12 3.5l7 2.5v5.4c0 4.2-2.9 7.6-7 9.1-4.1-1.5-7-4.9-7-9.1V6l7-2.5Z')}
    {path('M9 12l2 2 4-4')}
  </Svg>
);

export const Lock = (p) => (
  <Svg {...p}>
    <rect x="4.75" y="10.5" width="14.5" height="9.5" rx="2" />
    {path('M8.25 10.5V8a3.75 3.75 0 0 1 7.5 0v2.5')}
  </Svg>
);

export const Eye = (p) => (
  <Svg {...p}>
    {path('M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z')}
    <circle cx="12" cy="12" r="2.75" />
  </Svg>
);

export const Face = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    {path('M9 10.5h.01M15 10.5h.01M8.75 14.5a4.5 4.5 0 0 0 6.5 0')}
  </Svg>
);

export const Trash = (p) => (
  <Svg {...p}>
    {path('M4.5 6.5h15M9.5 6.5V5a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 5v1.5')}
    {path('M6.5 6.5l.8 12a1.5 1.5 0 0 0 1.5 1.4h6.4a1.5 1.5 0 0 0 1.5-1.4l.8-12')}
  </Svg>
);


/* ── Interface ────────────────────────────────────────────────────────────── */

export const Check = (p) => <Svg {...p}>{path('M4.5 12.5l5 5 10-11')}</Svg>;

export const Minus = (p) => <Svg {...p}>{path('M6 12h12')}</Svg>;

export const ArrowRight = (p) => (
  <Svg {...p}>{path('M4.5 12h15M13.5 6l6 6-6 6')}</Svg>
);

export const ChevronDown = (p) => <Svg {...p}>{path('M6 9.5l6 6 6-6')}</Svg>;

export const Quote = (p) => (
  <Svg {...p}>
    {path('M9.5 6.5C7 7.6 5.5 9.8 5.5 12.4c0 2.3 1.4 3.9 3.3 3.9 1.7 0 3-1.2 3-2.9 0-1.6-1.1-2.8-2.7-2.8-.3 0-.6 0-.8.1.3-1.3 1.3-2.4 2.6-3.1l-1.4-1.1Z')}
    {path('M17.5 6.5c-2.5 1.1-4 3.3-4 5.9 0 2.3 1.4 3.9 3.3 3.9 1.7 0 3-1.2 3-2.9 0-1.6-1.1-2.8-2.7-2.8-.3 0-.6 0-.8.1.3-1.3 1.3-2.4 2.6-3.1l-1.4-1.1Z')}
  </Svg>
);

/** Anything unnamed. A dot, on purpose — it reads as "no icon", not as a bug. */
export const Fallback = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3.5" />
  </Svg>
);

/* ── Brand marks (filled, not outline — they are logos, not UI) ───────────── */

export function GooglePlayMark({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M3.18 23.76c.31.18.67.2 1 .09l11.77-6.79L13.2 14.3 3.18 23.76zM20.3 10.3l-2.5-1.44-2.84 2.53 2.84 2.53 2.52-1.45c.72-.41.72-1.76-.02-2.17zM2.12.25C1.8.46 1.6.82 1.6 1.27v21.46c0 .45.2.81.52 1.02l.1.06L13.2 13.1 2.22.2l-.1.05zM13.95 12l2.83-2.83-11.7-6.75L13.95 12z" />
    </svg>
  );
}

export function AppleMark({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/* ── Registry ─────────────────────────────────────────────────────────────── */

// Only the marks a content file actually names. Nine more lived here for a
// feature grid that no longer exists (Feed, Journal, Comment, Bell, Search,
// Profile, Heart, Tag, Bolt) and were deleted with it — an icon set that
// outlives its content is how a set drifts out of style with itself.
const REGISTRY = {
  Sparkle, Moon, Timeline, Pulse, Chat,
  Shield, Lock, Eye, Face, Trash, Users,
  Check, Minus, ArrowRight, ChevronDown, Quote,
};

/**
 * Render an icon by name.
 *
 * @param {{ name: string, className?: string }} props
 */
export default function Icon({ name, className }) {
  const Mark = REGISTRY[name] ?? Fallback;
  return <Mark className={className} />;
}
