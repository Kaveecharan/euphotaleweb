// ─────────────────────────────────────────────────────────────────────────────
//  App-chrome marks — 24×24, outline, 1.8 stroke, `currentColor`.
//
//  Separate from components/Icon.jsx on purpose. That set is the SITE's
//  vocabulary: marks a content file names by string to illustrate an argument.
//  This set is the APP's vocabulary — tab bars, action rows, composers — drawn
//  a touch heavier because the app's own icons are, and because these render at
//  12-16px inside a phone frame where a 1.5 stroke goes to mush.
//
//  Mixing the two would make one of them wrong at every size.
// ─────────────────────────────────────────────────────────────────────────────

function I({ className = 'h-4 w-4', fill = 'none', children }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const p = (d) => <path key={d} d={d} />;

export const Home     = (x) => <I {...x}>{p('M3.5 10.2L12 3.5l8.5 6.7V20a1 1 0 0 1-1 1h-4.5v-6h-6v6H4.5a1 1 0 0 1-1-1v-9.8Z')}</I>;
export const Search   = (x) => <I {...x}><circle cx="11" cy="11" r="6.5" />{p('M20 20l-4.2-4.2')}</I>;
export const Plus     = (x) => <I {...x}>{p('M12 5v14M5 12h14')}</I>;
export const Bell     = (x) => <I {...x}>{p('M18 8.5a6 6 0 1 0-12 0c0 5-2 6.5-2 6.5h16s-2-1.5-2-6.5Z')}{p('M13.7 19a2 2 0 0 1-3.4 0')}</I>;
export const Person   = (x) => <I {...x}><circle cx="12" cy="8" r="3.6" />{p('M4.5 20.5a7.5 7.5 0 0 1 15 0')}</I>;

export const Heart    = (x) => <I {...x}>{p('M12 20.5S3.5 15.4 3.5 9.6A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8.5 2.6c0 5.8-8.5 10.9-8.5 10.9Z')}</I>;
export const Comment  = (x) => <I {...x}>{p('M20.5 11.8a7.8 7.8 0 0 1-11.4 7l-4.6 1.2 1.2-4.4A7.8 7.8 0 1 1 20.5 11.8Z')}</I>;
export const Bookmark = (x) => <I {...x}>{p('M6.5 4.5h11a1 1 0 0 1 1 1v14.2l-6.5-4-6.5 4V5.5a1 1 0 0 1 1-1Z')}</I>;
// Feather's `repeat` — the exact glyph the app uses (PostActions.js renders
// <Feather name="repeat" />). The earlier two-arrow sketch was a guess, and a
// wrong repost mark is the kind of detail that makes a rebuilt screen read as
// an imitation rather than as the product.
export const Repost   = (x) => (
  <I {...x}>
    {p('M17 1l4 4-4 4')}
    {p('M3 11V9a4 4 0 0 1 4-4h14')}
    {p('M7 23l-4-4 4-4')}
    {p('M21 13v2a4 4 0 0 1-4 4H3')}
  </I>
);

export const Back     = (x) => <I {...x}>{p('M19 12H5M11 18l-6-6 6-6')}</I>;
export const More     = (x) => <I {...x}>{p('M12 6.01V6M12 12.01V12M12 18.01V18')}</I>;
export const Send     = (x) => <I {...x}>{p('M4 12h15M13 6l6 6-6 6')}</I>;
export const Down     = (x) => <I {...x}>{p('M6 9.5l6 6 6-6')}</I>;
export const Right    = (x) => <I {...x}>{p('M9 6l6 6-6 6')}</I>;
export const Tick     = (x) => <I {...x}>{p('M20 6L9 17l-5-5')}</I>;
export const Mic      = (x) => <I {...x}>{p('M12 4.5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-5 0V7A2.5 2.5 0 0 1 12 4.5Z')}{p('M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v2.5')}</I>;
export const Play     = (x) => <I {...x}>{p('M8.5 6.2l9 5.8-9 5.8V6.2Z')}</I>;

export const Leaf     = (x) => <I {...x}>{p('M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z')}{p('M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12')}</I>;
export const Spark    = (x) => <I {...x}>{p('M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z')}</I>;
export const Share    = (x) => <I {...x}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />{p('M8.6 13.5l6.8 4M15.4 6.5L8.6 10.5')}</I>;
export const Globe    = (x) => <I {...x}><circle cx="12" cy="12" r="8.5" />{p('M3.5 12h17M12 3.5a13 13 0 0 1 0 17 13 13 0 0 1 0-17Z')}</I>;
export const Lock     = (x) => <I {...x}><rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />{p('M8 10.5V7.5a4 4 0 0 1 8 0v3')}</I>;
export const Two      = (x) => <I {...x}><circle cx="9" cy="9" r="3.2" />{p('M3 19.5a6 6 0 0 1 12 0M16 7.2a3 3 0 0 1 0 5.6M17.5 19.5a5.6 5.6 0 0 0-2-3.6')}</I>;
export const Pin      = (x) => <I {...x}>{p('M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z')}<circle cx="12" cy="10" r="2.4" /></I>;
export const Settings = (x) => <I {...x}><circle cx="12" cy="12" r="3.2" />{p('M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z')}</I>;
export const Clock    = (x) => <I {...x}><circle cx="12" cy="12" r="8.5" />{p('M12 7.5V12l3 1.8')}</I>;
export const Smile    = (x) => <I {...x}><circle cx="12" cy="12" r="8.5" />{p('M8.5 14.5a4.5 4.5 0 0 0 7 0M9 9.5v.01M15 9.5v.01')}</I>;
