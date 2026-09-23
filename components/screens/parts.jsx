import Photo from '@/components/Photo';
import { Home, Search, Plus, Bell, Person, Heart, Comment, Repost, Bookmark, More, Play, Pin } from '@/components/screens/AppIcon';

// ─────────────────────────────────────────────────────────────────────────────
//  Shared app chrome. Every screen composes these; none of them redraws one.
//
//  ── Where the numbers come from ─────────────────────────────────────────────
//
//  Not from looking at screenshots. Every value below is a real value out of
//  the app's own source, multiplied by SCALE:
//
//    fe/src/features/feed/components/PostHeader.js   avatar ring 44, gap 12,
//                                                    name 15, sub 12
//    fe/src/features/feed/cards/AlbumFeedCard.js     hero 0.78, thumb 88x96 r12,
//                                                    connector dots 3px/gap 2,
//                                                    title 16, date 13
//    fe/src/features/feed/cards/JournalFeedCard.js   page r10, padding 14,
//                                                    justified text
//    fe/src/features/feed/cards/cardStyle.js         posts are FULL WIDTH with
//                                                    NO fill, split by hairlines
//    fe/src/theme/glass.js                           the palette, already in
//                                                    web/tailwind.config.js
//
//  ── SCALE ───────────────────────────────────────────────────────────────────
//
//  A PhoneFrame gives a screen 272-312px; the app is designed at 390pt. Every
//  dimension here is an app value times ~0.78, applied CONSISTENTLY — which is
//  what makes these read as the app seen from across a room rather than as a
//  website that borrowed its colours.
//
//  ── Nothing here imports from fe/ ───────────────────────────────────────────
//
//  Deliberately, and it must stay that way. The app is React Native: its
//  components import `react-native`, which does not resolve in a Next build,
//  and pulling one in would couple the marketing site's build to the app's
//  dependency tree for no gain. The app's DESIGN is shared, by copying the
//  values above. The app's CODE is not shared at all, so nothing on this site
//  can change how the app looks or behaves.
// ─────────────────────────────────────────────────────────────────────────────

/** The root of every screen. Leaves the band PhoneFrame's speaker pill sits in. */
export function Screen({ tone = 'page', children }) {
  return (
    <div
      className={`flex h-full w-full flex-col overflow-hidden pt-[20px] font-app ${
        tone === 'raised' ? 'bg-raised' : 'bg-page'
      }`}
    >
      {children}
    </div>
  );
}

/** A screen's top bar. */
export function AppBar({ left, title, right, subtitle }) {
  return (
    <div className="flex h-[32px] shrink-0 items-center gap-2 px-[10px]">
      <div className="flex w-[42px] items-center gap-1.5 text-ink-body">{left}</div>
      <div className="flex min-w-0 flex-1 flex-col items-center">
        <div className="truncate text-[12.5px] font-semibold leading-tight text-ink">{title}</div>
        {subtitle ? (
          <div className="truncate font-speech text-[8.5px] font-medium leading-tight text-ink-mute">
            {subtitle}
          </div>
        ) : null}
      </div>
      <div className="flex w-[42px] items-center justify-end gap-2 text-ink-mute">{right}</div>
    </div>
  );
}

/** The gold verification seal. */
export function Verified({ size = 11 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" className="shrink-0">
      <path
        fill="#E8A020"
        d="M12 1.6l2.5 2 3.2-.3 1 3 2.7 1.8-1.2 3 1.2 3-2.7 1.8-1 3-3.2-.3-2.5 2-2.5-2-3.2.3-1-3L2.6 15l1.2-3-1.2-3 2.7-1.8 1-3 3.2.3z"
      />
      <path fill="#fff" d="M10.9 15.4l-3-3 1.3-1.3 1.7 1.7 4.1-4.1 1.3 1.3z" />
    </svg>
  );
}

/** A round avatar backed by a swappable photograph. */
export function Avatar({ id, size = 22 }) {
  return (
    <span
      className="block shrink-0 overflow-hidden rounded-full bg-well"
      style={{ width: size, height: size }}
    >
      <Photo id={id} round />
    </span>
  );
}

/**
 * A post's header row.
 *
 * The app wraps the avatar in a 44pt ring with 3pt of padding, so the picture
 * reads as set INTO the surface rather than dropped onto it. That ring is the
 * detail that makes a feed look like this app and not like every other one, so
 * it is reproduced rather than flattened to a plain circle.
 */
export function PostHeader({ photoId, name, sub, verified = true }) {
  return (
    <div className="flex shrink-0 items-center gap-[9px] px-[5px] py-[6px]">
      <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-well p-[2px]">
        <span className="block h-full w-full overflow-hidden rounded-full bg-page">
          <Photo id={photoId} round />
        </span>
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-[3px]">
          <span className="truncate text-[11.5px] font-bold leading-tight text-ink">{name}</span>
          {verified ? <Verified /> : null}
        </div>
        <div className="truncate font-speech text-[9.5px] font-semibold leading-tight text-ink-mute">
          {sub}
        </div>
      </div>

      <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-raised text-ink-mute shadow-[0_2px_10px_rgba(16,20,24,0.07)]">
        <More className="h-[13px] w-[13px]" />
      </span>
    </div>
  );
}

/**
 * The like / comment / repost / bookmark row.
 *
 * Counts sit inline beside their glyph, and the bookmark is pushed to the far
 * edge on its own — the app insets those two more than the rest, because they
 * are the only controls measured against the screen edge rather than against a
 * neighbour.
 */
export function PostActions({ likes = 0, comments = 0, reposts = 0, liked = false }) {
  return (
    <div className="flex shrink-0 items-center gap-[13px] px-[9px] pb-[5px] pt-[5px] text-ink-body">
      <span className="flex items-center gap-[4px]">
        <Heart
          className={`h-[15px] w-[15px] ${liked ? 'text-accent' : ''}`}
          fill={liked ? 'currentColor' : 'none'}
        />
        <span className="font-speech text-[9px] font-bold">{likes}</span>
      </span>
      <span className="flex items-center gap-[4px]">
        <Comment className="h-[15px] w-[15px]" />
        <span className="font-speech text-[9px] font-bold">{comments}</span>
      </span>
      <span className="flex items-center gap-[4px]">
        <Repost className="h-[15px] w-[15px]" />
        <span className="font-speech text-[9px] font-bold">{reposts}</span>
      </span>
      <Bookmark className="ml-auto h-[15px] w-[15px]" />
    </div>
  );
}

/**
 * The top of the next post, peeking past the bottom edge.
 *
 * A phone screen is never a page that ends halfway down — content runs off the
 * bottom, and a frame with a third of itself empty reads as an unfinished
 * mockup rather than as a screen. This is the cheapest honest way to fill it:
 * the next post beginning exactly as it would in the real feed.
 */
export function PostPeek({ photoId, avatarId, name, sub, verified = true }) {
  // `avatarId` defaults to `photoId`, which is what every caller relied on
  // while both were stand-in gradients and one tone could be a face and a
  // photograph at once. With real pictures it cannot: a peek whose post is a
  // landscape would wear that landscape as its author's face. Callers that
  // have a portrait for the author now pass one.
  const avatar = avatarId ?? photoId;
  return (
    <>
      <PostRule />
      <PostHeader photoId={avatar} name={name} sub={sub} verified={verified} />
      <div className="w-full flex-1 overflow-hidden bg-well">
        <Photo id={photoId} />
      </div>
    </>
  );
}

/** The hairline that separates one post from the next. No gap, no card. */
export function PostRule() {
  return (
    <div className="shrink-0 py-[7px]">
      <div className="h-px w-full bg-[rgba(17,20,24,0.08)]" />
    </div>
  );
}

// ── Timeline strip ───────────────────────────────────────────────────────────
// The app's own geometry at SCALE: an 88x96 tile with a 12pt radius, joined by
// THREE SMALL DOTS rather than a rule. The comment in AlbumFeedCard is explicit
// about why — a line between tiles drew a structure around the strip and made
// it read as a wired diagram; three dots say "continues" and draw nothing.
//
// The dots are centred on the PICTURE, not on the tile, because the date
// caption hangs below the frame and would drag them off-centre.

export const THUMB_W = 69;
export const THUMB_H = 75;

/** The tile's corner. The ring's radius is derived from it, never guessed. */
export const THUMB_R = 9;

/** Ring thickness. The app's 2 at 88pt wide, at this strip's 0.78 scale. */
export const RING_W = 1.5;

/**
 * The moment ring — the app's own accent sweep, drawn around whichever moment
 * in the strip is currently open.
 *
 * -- Why this is an SVG stroke and not a CSS box -----------------------------
 *
 * Every CSS way of drawing this is a GAP between two boxes: a padded gradient
 * background with the photo inside it, a larger rectangle parked behind, a
 * mask-composite border. They all share one flaw, and it is not fixable by
 * choosing better numbers. The gap's inner and outer edges are two separate
 * boundaries that the rasteriser rounds INDEPENDENTLY, so wherever the tile
 * lands on a fractional device pixel -- which is most of the time, because the
 * hero is centred with `mx-auto` and Windows renders at 125% and 150% -- one
 * side gets a device pixel the other does not. That is the ring that looks
 * thick down the left and thin down the right, and going from 1.5px to 2px only
 * made the uneven ring a heavier uneven ring.
 *
 * A stroke has no such pair of edges. It is centred on a path and antialiased
 * symmetrically about it, so both sides of every edge get identical coverage at
 * any position and any device ratio. Which is the actual requirement: even, at
 * 1.5px, wherever it happens to sit.
 *
 * It also means the photograph is never inset and never resized -- the ring is
 * laid over its outer 1.5px rather than carved out of it -- so a tile is
 * pixel-for-pixel identical selected and unselected, and the hero reel can
 * cross-fade the ring in and out with nothing underneath it moving.
 *
 * `id` must be unique on the page: it is what the stroke references. A
 * collision would still render correctly, since every instance defines the same
 * three stops, but it would be invalid HTML.
 */
export function MomentRing({ id, className = '' }) {
  const half = RING_W / 2;

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${THUMB_W} ${THUMB_H}`}
      className={`${className} pointer-events-none absolute inset-0 h-full w-full`}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF5A55" />
          <stop offset="0.55" stopColor="#E8252C" />
          <stop offset="1" stopColor="#C41A20" />
        </linearGradient>
      </defs>
      {/* Inset by half the stroke, so it occupies exactly [0, RING_W] from each
          edge of the tile rather than straddling it. */}
      <rect
        x={half}
        y={half}
        width={THUMB_W - RING_W}
        height={THUMB_H - RING_W}
        rx={THUMB_R - half}
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth={RING_W}
      />
    </svg>
  );
}

// Every number here is a WHOLE pixel, and that is the point rather than a
// rounding of convenience. SCALE puts the app's 3px dot and 2px gap at 2.34 and
// 1.56, and the first version took them at 2.5 and 1.5 — which made a connector
// 14.5px wide, which put every tile after the first on a half pixel, which made
// a 2px accent ring rasterise 1px down one side of a moment and 2px down the
// other. A strip is a row of fixed-width things: if any one of them carries a
// half, everything downstream of it inherits the half.
const DOT = 2;
const DOT_GAP = 2;

export function Connector() {
  return (
    <div
      aria-hidden="true"
      className="flex shrink-0 items-center px-[2px]"
      style={{ gap: DOT_GAP, marginTop: Math.round((THUMB_H - DOT) / 2) }}
    >
      <span className="rounded-full bg-accent" style={{ width: DOT, height: DOT }} />
      <span className="rounded-full bg-accent" style={{ width: DOT, height: DOT }} />
      <span className="rounded-full bg-accent" style={{ width: DOT, height: DOT }} />
    </div>
  );
}

function Thumb({ photoId, date, active = false }) {
  const frame = { width: THUMB_W, height: THUMB_H };

  // Selected and unselected are the SAME tile with a stroke laid over it. They
  // used to be two different layouts — one with the photo inset inside a padded
  // gradient, one without — which meant the picture changed size by 3px the
  // moment you tapped it.
  return (
    <div className="flex shrink-0 flex-col items-center" style={{ width: THUMB_W }}>
      <span className="relative block" style={frame}>
        <span
          className="block h-full w-full overflow-hidden bg-well"
          style={{ borderRadius: THUMB_R }}
        >
          <Photo id={photoId} />
        </span>
        {active ? <MomentRing id={`ring-${photoId}`} /> : null}
      </span>
      <span
        className={`mt-[3px] font-speech text-[8.5px] ${
          active ? 'font-bold text-accent-deep' : 'font-medium text-ink-mute'
        }`}
      >
        {date}
      </span>
    </div>
  );
}

export function AddThumb() {
  return (
    <div className="flex shrink-0 flex-col items-center" style={{ width: THUMB_W }}>
      {/* The same ring as a selected moment, for the same reason — the app draws
          both with `thumbGrad`, and drawing this one any other way would give
          the strip two different accent borders side by side. */}
      <span
        className="relative flex items-center justify-center bg-[#FDF2F2] text-accent"
        style={{ width: THUMB_W, height: THUMB_H, borderRadius: THUMB_R }}
      >
        <Plus className="h-[16px] w-[16px]" />
        <MomentRing id="ring-add" />
      </span>
      <span className="mt-[3px] font-speech text-[8.5px] font-bold text-accent-deep">New Memory</span>
    </div>
  );
}

/**
 * The horizontal moment strip under a memory's hero image.
 *
 * This is the component the whole "memories" pillar rests on, and the shape of
 * it carries the claim: tiles laid left to right with dated captions, an empty
 * slot at the end, and no terminator — a memory is a thing you add to, so the
 * strip must not look finished.
 */
export function TimelineStrip({ moments }) {
  return (
    <div className="flex shrink-0 items-start gap-0 overflow-hidden px-[5px] pb-[3px] pt-[6px]">
      {moments.map((m, i) => (
        <span key={m.photoId} className="flex items-start">
          {i > 0 ? <Connector /> : null}
          <Thumb {...m} />
        </span>
      ))}
      <Connector />
      <AddThumb />
    </div>
  );
}

/**
 * The journal's paper page.
 *
 * White, a 10pt radius, a hairline and almost no shadow — the app's comment is
 * specific that it "should read as paper lying ON the feed, not as a raised
 * card", which is why the shadow only hints and the border does the separating.
 *
 * Body text is JUSTIFIED and set in the entry's own face. Carattere is the
 * default, and the app scales script faces 1.22x with 1.28x leading because
 * they sit small and low; the same ratio is applied here rather than a size
 * picked by eye.
 */
export function JournalPage({ date, location, children, photos = [] }) {
  return (
    <div className="mx-[7px] shrink-0 rounded-[8px] border border-hair bg-raised p-[11px] shadow-[0_1px_2px_rgba(0,0,0,0.012)]">
      <div className="flex items-center justify-between gap-2 border-b border-hair pb-[6px]">
        <span className="font-app text-[9px] font-semibold text-ink-faint">{date}</span>
        {location ? (
          <span className="flex items-center gap-[2px] text-ink-faint">
            <Pin className="h-[9px] w-[9px]" />
            <span className="font-app text-[9px]">{location}</span>
          </span>
        ) : null}
      </div>

      <p className="mt-[8px] text-justify font-journal text-[15px] leading-[22px] text-ink-body">
        {children}
      </p>

      {/* Images in the app FLOAT: the author drags each one to a spot on the
          page and gives it a width as a fraction of the column (JournalFeedCard
          → FeedImageBlock). Two boxes filling the width side by side is one of
          the placements that produces, and the only one worth drawing here —
          reproducing a free-form canvas in a 288px frame would show a layout
          engine rather than a journal. One photo keeps the app's 58% default;
          two split the column with a hairline gap, so they read as a pair the
          author put down together rather than as two separate attachments.

          Radius 8 is the app's 10 at this strip's scale, and `bg-well` is the
          #EEE it shows behind a photo that has not decoded yet. */}
      {photos.length > 0 ? (
        <div className={`mt-[8px] flex gap-[6px] ${photos.length === 1 ? 'w-[58%]' : ''}`}>
          {photos.map((id) => (
            <div key={id} className="h-[74px] flex-1 overflow-hidden rounded-[8px] bg-well">
              <Photo id={id} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/** The one voice note an entry may carry. */
export function AudioBar({ duration = '0:08' }) {
  const bars = [4, 7, 5, 9, 6, 11, 5, 8, 4, 10, 7, 5, 9, 6, 4, 8, 11, 6, 5, 7, 4, 9, 6, 5];

  return (
    <div className="mx-[7px] mt-[6px] flex shrink-0 items-center gap-[8px] rounded-[10px] bg-raised px-[9px] py-[7px]">
      <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#FBD9DA] text-accent">
        <Play className="h-[10px] w-[10px]" fill="currentColor" />
      </span>
      <span className="flex flex-1 items-center gap-[2px]">
        {bars.map((h, i) => (
          <span key={i} className="w-[2px] shrink-0 rounded-full bg-accent/70" style={{ height: h }} />
        ))}
      </span>
      <span className="font-speech text-[9px] font-semibold text-ink-mute">{duration}</span>
    </div>
  );
}

// ── Companion chat ───────────────────────────────────────────────────────────

/** The gradient persona avatar — the friend's red sweep, the Guide's gold. */
export function PersonaAvatar({ tone = 'accent', size = 22, children }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full text-white"
      style={{
        width: size,
        height: size,
        backgroundImage:
          tone === 'gold'
            ? 'linear-gradient(140deg, #F5DFB8 0%, #E0A438 55%, #C78A2E 100%)'
            : 'linear-gradient(140deg, #FF5A55 0%, #E8252C 55%, #C41A20 100%)',
      }}
    >
      {children}
    </span>
  );
}

/**
 * A chat bubble.
 *
 * 20pt radius with a 6pt tail on the sender's bottom corner — the app's exact
 * values. The tail is small on purpose: at this size it reads as a nudge toward
 * the speaker rather than as a speech-balloon point.
 */
export function Bubble({ mine = false, tone = 'accent', children }) {
  const fill = tone === 'gold' ? 'bg-persona-gold' : 'bg-accent';
  return (
    <div
      className={
        mine
          ? `max-w-[82%] self-end rounded-[16px] rounded-br-[5px] px-[11px] py-[8px] ${fill}`
          : 'max-w-[82%] self-start rounded-[16px] rounded-bl-[5px] bg-raised px-[11px] py-[8px] shadow-[0_1px_6px_rgba(16,20,24,0.05)]'
      }
    >
      <p
        className={`font-speech text-[11.5px] font-medium leading-[17px] ${
          mine ? 'text-white' : 'text-ink-body'
        }`}
      >
        {children}
      </p>
    </div>
  );
}

/** The companion's evidence anchor — the receipt attached to a remembered fact. */
export function EvidenceChip({ children, tone = 'accent' }) {
  const gold = tone === 'gold';
  return (
    <div
      className={`flex w-fit items-center gap-1.5 rounded-pill px-2 py-[3px] ${
        gold ? 'bg-persona-goldSoft text-persona-goldInk' : 'bg-accent/[0.09] text-accent-deep'
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[9px] w-[9px]"
        aria-hidden="true"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <span className="font-speech text-[8.5px] font-semibold leading-none">{children}</span>
    </div>
  );
}

/** The five-tab bar. */
export function TabBar({ active = 'home' }) {
  const tabs = [
    { id: 'home', Icon: Home },
    { id: 'search', Icon: Search },
    { id: 'create', Icon: Plus },
    { id: 'alerts', Icon: Bell },
    { id: 'you', Icon: Person },
  ];

  return (
    <div className="mt-auto flex shrink-0 items-center justify-around border-t border-hair bg-raised px-2 pb-[8px] pt-[6px]">
      {tabs.map(({ id, Icon }) =>
        id === 'create' ? (
          <div
            key={id}
            className="flex h-[26px] w-[38px] items-center justify-center rounded-[10px] bg-accent-solid text-white shadow-[0_3px_18px_rgba(232,37,44,0.38)]"
          >
            <Icon className="h-[14px] w-[14px]" />
          </div>
        ) : (
          <Icon
            key={id}
            className={`h-[16px] w-[16px] ${active === id ? 'text-ink' : 'text-ink-faint'}`}
          />
        )
      )}
    </div>
  );
}

// ── The moon itself ──────────────────────────────────────────────────────────
// A direct port of MoonBadge in fe/src/components/shared/UserBadges.js: the same
// 252-unit viewBox, the same disc, the same three gradients and the same phase
// clip paths. It is the app's single definition of what a moon looks like, and
// redrawing it as four flat semicircles — which is what this frame did before —
// threw away the one piece of real artwork the product owns.

const MOON_CX = 137.5;
const MOON_CY = 137;
const MOON_R = 122;

/** The lit region at each level, as a fraction of the disc. */
const MOON_PHASE = {
  new: `M${MOON_CX} 15A122 122 0 1 0 ${MOON_CX} 259A61 122 0 1 1 ${MOON_CX} 15Z`,
  growing: `M${MOON_CX} 15A122 122 0 1 0 ${MOON_CX} 259Z`,
  half: `M${MOON_CX} 15A122 122 0 1 0 ${MOON_CX} 259A61 122 0 1 0 ${MOON_CX} 15Z`,
  full: `M${MOON_CX} 15A122 122 0 1 0 ${MOON_CX} 259A122 122 0 1 0 ${MOON_CX} 15Z`,
};

// Craters, as flat masses rather than sixteen separate shapes.
const CRATERS =
  'M159 25c8-5 19-3 24 3 5 6 2 12-5 15-8 3-17 0-21-6-3-5-2-9 2-12z' +
  'M186 148c10-7 22-4 28 4 5 8 2 16-6 21-8 5-19 3-25-4-6-7-4-15 3-21z' +
  'M178 176c8-5 17-2 21 5 4 7 1 14-6 18-8 4-17 1-20-6-3-6-1-13 5-17z' +
  'M164 213c7-4 15-2 18 4 3 6 0 12-6 15-7 3-14 1-17-5-3-5 0-11 5-14z' +
  'M190 226c6-3 12-1 15 4 3 5 0 10-5 12-6 3-12 0-14-5-2-4 0-8 4-11z';

export function MoonBadge({ size = 96, level = 'growing' }) {
  const phase = MOON_PHASE[level];
  const id = `mp-${level}`;

  return (
    <svg width={size} height={size} viewBox="11.5 11 252 252" aria-hidden="true">
      <defs>
        <radialGradient id="moonDark" cx="28%" cy="45%" r="88%">
          <stop offset="0" stopColor="#777789" />
          <stop offset="0.48" stopColor="#5C5D70" />
          <stop offset="1" stopColor="#363747" />
        </radialGradient>
        <radialGradient id="moonLight" cx="42%" cy="43%" r="70%">
          <stop offset="0" stopColor="#FFF2B4" />
          <stop offset="0.55" stopColor="#FFE49A" />
          <stop offset="1" stopColor="#E8AA48" />
        </radialGradient>
        <linearGradient id="moonEdge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFF0AD" stopOpacity="0.15" />
          <stop offset="0.7" stopColor="#F2BB5B" stopOpacity="0.22" />
          <stop offset="1" stopColor="#C98A35" stopOpacity="0.32" />
        </linearGradient>
        <clipPath id="moonDisc">
          <circle cx={MOON_CX} cy={MOON_CY} r={MOON_R} />
        </clipPath>
        {phase ? (
          <clipPath id={id}>
            <path d={phase} />
          </clipPath>
        ) : null}
      </defs>

      {/* The sphere in shadow, drawn in full, then covered by whatever light
          this level has earned. */}
      <circle cx={MOON_CX} cy={MOON_CY} r={MOON_R} fill="url(#moonDark)" />
      <path d={CRATERS} fill="#2E2F3E" fillOpacity="0.24" clipPath="url(#moonDisc)" />

      {phase ? (
        <g clipPath={`url(#${id})`}>
          <circle cx={MOON_CX} cy={MOON_CY} r={MOON_R} fill="url(#moonLight)" />
          <ellipse cx="91" cy="133" rx="92" ry="119" fill="#FFF4BD" fillOpacity="0.08" />
          <circle cx={MOON_CX} cy={MOON_CY} r={MOON_R} fill="url(#moonEdge)" />
          <path d={CRATERS} fill="#E5B85F" fillOpacity="0.27" />
        </g>
      ) : null}

      <circle
        cx={MOON_CX}
        cy={MOON_CY}
        r={MOON_R}
        fill="none"
        stroke="#2E2F3E"
        strokeOpacity="0.28"
        strokeWidth="8"
      />
    </svg>
  );
}

/** A Moon card: white, 22pt radius, hairline, generous padding. */
export function MoonCard({ title, children, tone = 'plain' }) {
  const fill =
    tone === 'warn'
      ? 'bg-[#FFF3DE] border-[rgba(199,119,0,0.22)]'
      : tone === 'safe'
      ? 'bg-[#E7F9EC] border-[rgba(36,138,61,0.22)]'
      : 'bg-raised border-hair';

  return (
    <div className={`mx-[12px] mb-[9px] shrink-0 rounded-[17px] border p-[12px] ${fill}`}>
      {title ? (
        <div className="mb-[9px] text-[11.5px] font-semibold text-ink">{title}</div>
      ) : null}
      {children}
    </div>
  );
}

// ── Companion chat ───────────────────────────────────────────────────────────
// One screen, two voices. The chrome is identical because in the app it IS
// identical: the back chevron and the history clock stay ACCENT RED on both
// personas, and only the voice's own furniture — avatar, bubbles, send button —
// changes colour. The chrome belongs to EuphoTale; the colour belongs to the
// voice, and swapping that round makes the Guide look like a different app.

/**
 * `bodyClassName` lands on the column the bubbles live in — one hook, used by
 * the hero reel to scroll the thread. The clipping stays on the wrapper OUTSIDE
 * it, because an element cannot both move and be its own viewport.
 *
 * @param {{ tone?: 'accent'|'gold', name: string, glyph: React.ReactNode,
 *           bodyClassName?: string,
 *           messages: Array<{mine?: boolean, text?: string, evidence?: string}> }} props
 */
export function ChatScreen({ tone = 'accent', name, glyph, messages, bodyClassName = '' }) {
  const gold = tone === 'gold';

  return (
    <Screen>
      <div className="flex h-[34px] shrink-0 items-center px-[12px]">
        <svg viewBox="0 0 24 24" fill="none" stroke="#E8252C" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="h-[16px] w-[16px]" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        <div className="flex flex-1 items-center justify-center gap-[6px]">
          <PersonaAvatar tone={tone} size={22}>{glyph}</PersonaAvatar>
          <span className="text-[14px] font-bold text-ink">{name}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="#8A929B" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="h-[11px] w-[11px]" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        <svg viewBox="0 0 24 24" fill="none" stroke="#E8252C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px]" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7.5V12l3 1.8" />
        </svg>
      </div>

      <div className="h-px w-full shrink-0 bg-hair" />

      {/* Bottom-anchored, as a thread with room above it is. */}
      <div className="flex flex-1 flex-col justify-end overflow-hidden px-[10px] pb-[6px]">
        <div className={`flex flex-col gap-[7px] ${bodyClassName}`}>
          {messages.map((m, i) =>
            m.evidence ? (
              <EvidenceChip key={i} tone={tone}>{m.evidence}</EvidenceChip>
            ) : (
              <Bubble key={i} mine={m.mine} tone={tone}>{m.text}</Bubble>
            )
          )}
        </div>
      </div>

      {/* Composer. The send button is drawn disabled, because the field is
          empty — a hot send button beside an empty input is the small lie that
          makes a mockup look like a mockup. */}
      <div className="flex shrink-0 items-center gap-[8px] px-[10px] pb-[12px] pt-[6px]">
        <div className="flex h-[34px] flex-1 items-center rounded-[14px] bg-well px-[12px]">
          <span className="font-speech text-[11px] text-ink-faint">Message {name}&hellip;</span>
        </div>
        <div
          className={`flex h-[34px] w-[34px] items-center justify-center rounded-[12px] text-white ${
            gold ? 'bg-persona-gold/45' : 'bg-accent/40'
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px]" aria-hidden="true">
            <path d="M12 19V5M6 11l6-6 6 6" />
          </svg>
        </div>
      </div>
    </Screen>
  );
}

/** The friend's sparkle and the Guide's leaf, at avatar size. */
export const SparkGlyph = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[11px] w-[11px]" aria-hidden="true">
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
  </svg>
);

export const LeafGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" className="h-[11px] w-[11px]" aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

/**
 * The wordmark.
 *
 * Copied from fe/src/components/shared/Wordmark.js rather than approximated:
 * Cinzel SemiBold, the two capitals at full size with the runs between them at
 * half, and — the part the earlier version missed entirely — a VERTICAL
 * GRADIENT on the caps only, running the theme red into the app's near-black.
 * The small runs stay solid ink.
 *
 * The app draws that gradient in SVG because React Native's <Text> cannot take
 * one. A browser can, so this uses background-clip, which keeps it as real
 * selectable text.
 *
 * It is set in its own face on purpose. A wordmark is a mark, not text — its
 * job is to be recognised rather than read — and setting it in the same family
 * as the labels underneath makes the app's name look like another label.
 */
export function Wordmark() {
  const caps = {
    backgroundImage: 'linear-gradient(180deg, #E8252C 0%, #111417 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <span className="whitespace-nowrap font-mark font-semibold leading-none text-ink">
      <span className="text-[19px] tracking-[0.5px]" style={caps}>E</span>
      <span className="text-[9.5px] tracking-[0.2px]">UPHO</span>
      <span className="text-[19px] tracking-[0.5px]" style={caps}>T</span>
      <span className="text-[9.5px] tracking-[0.2px]">ALE</span>
    </span>
  );
}

/**
 * The home screen's top bar.
 *
 * Two controls, and their SHAPES are the point — the app makes them different
 * on purpose (FeedScreen.js): compose is a 44pt CIRCLE, the profile is a 44pt
 * squircle at radius 15 holding the avatar. Both sit on the same white plate
 * with the same soft shadow, because they are the same kind of thing: a control
 * on a plate. Drawing both as circles, or putting a settings cog where the face
 * belongs, is what the first version got wrong.
 */
export function HomeBar({ avatarId }) {
  return (
    <div className="flex h-[36px] shrink-0 items-center justify-between px-[10px]">
      <Wordmark />
      <div className="flex items-center gap-[9px]">
        <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-raised text-accent shadow-[0_2px_14px_rgba(16,20,24,0.09)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" className="h-[17px] w-[17px]" aria-hidden="true">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
        <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[12px] bg-raised p-[2px] shadow-[0_2px_14px_rgba(16,20,24,0.09)]">
          <span className="block h-full w-full overflow-hidden rounded-[10px] bg-well">
            <Photo id={avatarId} round />
          </span>
        </span>
      </div>
    </div>
  );
}
