import Photo from '@/components/Photo';
import {
  Screen,
  HomeBar,
  TabBar,
  PostHeader,
  PostActions,
  PostRule,
  JournalPage,
  AudioBar,
  Connector,
  AddThumb,
  MomentRing,
  THUMB_W,
  THUMB_H,
  THUMB_R,
} from '@/components/screens/parts';

/**
 * The home feed — the hero frame, and the only one that MOVES.
 *
 * ── Two jobs, plus a third ───────────────────────────────────────────────────
 *
 * It must look INHABITED, because a feed with one post says the app is empty,
 * and that is the worst thing the picture at the top of the page could say. It
 * must look FINITE, because "a feed of the people you chose, which ends" is the
 * claim printed beside it — so the caught-up rule is in shot rather than a
 * third post fading off the edge.
 *
 * And because it sits above the fold on a phone, where the reader has a few
 * seconds and one thumb, it also has to SHOW the two things a still cannot: a
 * memory is a strip of moments you move between, and each moment carries its
 * own photographs. Both live in AlbumFeedCard.js, and neither survives being
 * photographed.
 *
 * ── How the movement works ───────────────────────────────────────────────────
 *
 * Every beat is a CSS keyframe animation on one shared clock — see the hero
 * reel block at the bottom of app/globals.css, which owns all of the timing.
 * No JavaScript, no observer, nothing to hydrate. The classes here are hooks
 * and carry no styling of their own:
 *
 *   .reel-gal-a/-b   each moment's own carousel, slid one photograph at a time
 *   .reel-pill-a/-b  the dot indicator's active pip, one per moment
 *   .reel-a/.reel-b  everything that belongs to Jan 18 / to Nov 2 — the ring in
 *                    the strip, the date under it, the moment's own words and
 *                    the time in the header, all cross-faded on one beat
 *   .reel-feed       the column itself, scrolled until the journal entry is at
 *                    the top
 *
 * Under `prefers-reduced-motion: reduce` none of them are declared and the
 * screen renders as its own first frame: Jan 18 open on its first photograph.
 * That is exactly the still this frame used to be, so opting out loses nothing.
 *
 * ── Why the hero image has a FIXED height ────────────────────────────────────
 *
 * It was an aspect ratio, which made the first post's height depend on the
 * frame's width — and the scroll beat has to travel exactly one post at every
 * width, or the journal entry lands crooked. A fixed height makes the whole
 * column deterministic, and `object-cover` absorbs the difference.
 */

// The height of the first post, and therefore the distance the column travels.
// Declared once, in CSS, so the markup and the keyframe cannot disagree.
const POST_H = 'var(--reel-post)';

const HERO_H = 180;

/**
 * The photographs each OPENED moment holds, in the order they are swiped
 * through. Sep 9 is in the strip but never opened, so it only needs the one
 * picture its thumbnail shows.
 */
// Jan 18's three photographs, LEADING with the last one.
//
// The reel's resting state is its first frame — `forwards` holds the 100%
// keyframe, which is a translate of zero — so whichever photograph is first
// here is the one the hero settles on once the animation finishes. Ordering it
// jan-3 → jan-1 → jan-2 puts the finished flat under the headline at rest, and
// happens to read as the evening it was: arriving at the door, the toast
// inside, the sofa afterwards. The strip's thumbnail is pinned separately so it
// still opens on jan-1, matching the app.
const JAN_18 = ['home-6', 'home-4', 'home-5'];
const NOV_2 = ['home-2', 'home-3'];
const SEP_9 = 'home-1';

/**
 * The dot indicator the app overlays on multi-photo media
 * (fe/src/components/feed/PostMedia.js): 6pt dots at half-white, the active one
 * solid and 8pt wide, bottom-centre. Here the active pip is a separate element
 * that SLIDES between them — the same picture, and one animation rather than
 * one per dot.
 */
function Dots({ count, pill }) {
  return (
    <div className="relative flex items-center gap-[4px]">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="block h-[5px] w-[5px] rounded-full bg-white/50" />
      ))}
      <span
        className={`${pill} absolute left-[-0.75px] top-1/2 -mt-[2.5px] block h-[5px] w-[6.5px] rounded-full bg-white`}
      />
    </div>
  );
}

/**
 * One tile in the timeline strip.
 *
 * Identical to the one in parts.jsx except that the ring cross-fades instead of
 * being present or absent, which is only possible because MomentRing is laid
 * OVER the photograph rather than carved out of it — see the long note there
 * for why a stroke and not a CSS box. Nothing under it moves as it fades.
 *
 * A moment the reel never opens has no active state to fade to, so it is drawn
 * once rather than as a pair of stacked halves.
 */
function Thumb({ photoId, date, on, off }) {
  const swaps = Boolean(on);

  return (
    <div className="flex shrink-0 flex-col items-center" style={{ width: THUMB_W }}>
      <span className="relative block" style={{ width: THUMB_W, height: THUMB_H }}>
        <span
          className="block h-full w-full overflow-hidden bg-well"
          style={{ borderRadius: THUMB_R }}
        >
          <Photo id={photoId} />
        </span>
        {swaps ? <MomentRing id={`ring-${photoId}`} className={on} /> : null}
      </span>

      {/* Both states stay in the flow, stacked in one grid cell, so the caption
          keeps its width while the colour changes underneath it. */}
      <span className="mt-[3px] grid justify-items-center font-speech text-[8.5px]">
        {swaps ? (
          <>
            <span className={`${off} col-start-1 row-start-1 font-medium text-ink-mute`}>{date}</span>
            <span className={`${on} col-start-1 row-start-1 font-bold text-accent-deep`}>{date}</span>
          </>
        ) : (
          <span className="col-start-1 row-start-1 font-medium text-ink-mute">{date}</span>
        )}
      </span>
    </div>
  );
}

/** A line of type that belongs to one moment and is replaced by the other's. */
function Swap({ a, b }) {
  return (
    <span className="grid">
      <span className="reel-a col-start-1 row-start-1">{a}</span>
      <span className="reel-b col-start-1 row-start-1">{b}</span>
    </span>
  );
}

export default function HomeFeed() {
  return (
    <Screen>
      <HomeBar avatarId="face-3" />

      <div className="relative flex-1 overflow-hidden">
        {/* Taller than its viewport by exactly one post, so the scroll beat has
            somewhere to go — and so the caught-up rule lands at the bottom of
            the travelled-to view rather than in the middle of nothing. */}
        <div
          className="reel-feed absolute inset-x-0 top-0 flex flex-col"
          style={{ height: `calc(100% + ${POST_H})` }}
        >
          {/* ── A memory ─────────────────────────────────────────────────── */}
          <div className="flex shrink-0 flex-col overflow-hidden" style={{ height: POST_H }}>
            {/* The header carries the SELECTED moment's own time, never the
                memory's overall recency — AlbumFeedCard.js is explicit about
                it, so the time changes when the moment does. */}
            <PostHeader
              photoId="face-1"
              name="Rhea"
              sub={<Swap a="@rhea · 2h" b="@rhea · 3mo" />}
            />

            {/* Each moment owns its own carousel, and they cross-fade. That
                separation is the whole point: swiping WITHIN a moment slides,
                choosing a DIFFERENT moment replaces — which is exactly what the
                app does, and what makes the third move read as a different
                gesture rather than as a third swipe. Nov 2's track arrives with
                a few pixels of rightward drift, because it lives to the left in
                the strip and the eye should be told which way it came from. */}
            <div
              className="relative w-full shrink-0 overflow-hidden bg-well"
              style={{ height: HERO_H }}
            >
              <div className="reel-a absolute inset-0">
                <div className="reel-gal-a flex h-full w-[300%]">
                  {JAN_18.map((id) => (
                    <div key={id} className="h-full w-1/3 shrink-0 overflow-hidden bg-well">
                      <Photo id={id} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="reel-b absolute inset-0">
                <div className="reel-gal-b flex h-full w-[200%]">
                  {NOV_2.map((id) => (
                    <div key={id} className="h-full w-1/2 shrink-0 overflow-hidden bg-well">
                      <Photo id={id} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Outside the tracks, so the drift above never drags them. */}
              <div className="reel-a absolute inset-x-0 bottom-[7px] flex justify-center">
                <Dots count={JAN_18.length} pill="reel-pill-a" />
              </div>
              <div className="reel-b absolute inset-x-0 bottom-[7px] flex justify-center">
                <Dots count={NOV_2.length} pill="reel-pill-b" />
              </div>
            </div>

            {/* Three moments now, which is one more than fits — so the strip
                is pinned to its END, exactly as the app auto-scrolls it: the
                newest moment and the empty Add slot are always in shot and the
                oldest runs off the left edge. That clipped tile is not a bug
                to design around, it is the strip saying there is more history
                here than the frame can hold. */}
            <div className="flex shrink-0 items-start justify-end gap-0 overflow-hidden px-[5px] pb-[3px] pt-[6px]">
              <Thumb photoId={SEP_9} date="Sep 9" />
              <Connector />
              <Thumb photoId={NOV_2[0]} date="Nov 2" on="reel-b" off="reel-a" />
              <Connector />
              <Thumb photoId="home-4" date="Jan 18" on="reel-a" off="reel-b" />
              <Connector />
              <AddThumb />
            </div>

            {/* The memory's title holds still. Only the moment changes. */}
            <div className="flex shrink-0 items-center gap-[6px] px-[9px] pt-[5px]">
              <span className="truncate text-[12.5px] font-semibold text-ink">
                Our first home
              </span>
            </div>

            {/* Each moment's own words, and they have to READ as a sequence —
                the first night, then the same rooms half a year on. A caption
                that could belong to either moment makes the timeline look like
                a photo album with dates on it rather than something that got
                somewhere.

                Two lines, held at two lines: the block has to be the same
                height for both moments or the post below it would shuffle.
                32 = the 4px of lead-in plus two 14px lines, since the box is
                border-box and the padding would otherwise eat the second. */}
            <div className="grid h-[32px] shrink-0 overflow-hidden px-[9px] pt-[4px]">
              <p className="reel-a col-start-1 row-start-1 font-speech text-[10px] font-medium leading-[14px] text-ink-body">
                Six months in and it finally looks like ours. The shelves are up, and only slightly
                wonky.
              </p>
              <p className="reel-b col-start-1 row-start-1 font-speech text-[10px] font-medium leading-[14px] text-ink-body">
Painting it ourselves seemed like the cheaper idea. Two coats in and still arguing
                about the white.
              </p>
            </div>

            <PostActions likes={11} comments={3} reposts={0} liked />

            {/* Pinned to the bottom of the post box, so any slack in the
                measurements above lands in blank space rather than as a gap
                between the rule and the post below it. */}
            <div className="mt-auto">
              <PostRule />
            </div>
          </div>

          {/* ── A journal entry — the feed carries more than photographs ────
              This is the post that has to do the persuading, because it is the
              one a stranger reads as a stranger. So it is pitched at the person
              most likely to be standing where the writer is: mid-twenties, in
              England, at the age when the people you saw every day start moving
              to other cities and nobody announces that it has happened.

              It argues for the product by NOT arguing. Nothing about memories
              or keeping things until the last line, and that line is an action
              rather than a thesis: four years of Tuesday nights and not one
              photograph of any of it, so I took these, finally. The two
              pictures underneath are the ones she means, which is why they had
              to be of that night rather than decoration — the entry and its
              attachments have to be the same evidence. Anything more explicit
              turns a diary page into a testimonial, and a testimonial inside a
              phone frame is an advert.

              The SAME author and the same entry as the journal pillar further
              down. One diary page, written once and shown twice — a second
              version of it would be a continuity error a visitor can catch by
              scrolling. */}
          <PostHeader photoId="face-5" name="Erin" sub="@erinkw · 1d" verified={false} />
          <JournalPage date="13 October 2026" location="Sheffield" photos={['journal-2', 'journal-3']}>
            I passed the caf&eacute; we used to visit. I hadn&rsquo;t thought about that place in ages. For
            some reason, I remembered everything from those days. It&rsquo;s strange what brings
            certain memories back.
          </JournalPage>

          {/* The voice note sits BELOW the paper rather than on it, because in
              the app it is an attachment to the entry and not part of the page
              the author wrote. It is also the second reason this post is worth
              scrolling to: an entry that carries a picture, a page and a voice
              is three claims about what a journal here can hold, and none of
              them survive being described in a bullet point. */}
          <AudioBar duration="0:19" />

          <div className="mt-[4px]">
            <PostActions likes={4} comments={1} reposts={0} />
          </div>

          <div className="flex-1" />

          {/* The feed ends. That is the feature. */}
          <div className="flex shrink-0 items-center gap-[7px] px-[12px] py-[10px]">
            <span className="h-px flex-1 bg-hair" />
            <span className="font-speech text-[8px] font-medium text-ink-faint">
              You&rsquo;re all caught up
            </span>
            <span className="h-px flex-1 bg-hair" />
          </div>
        </div>
      </div>

      <TabBar active="home" />
    </Screen>
  );
}
