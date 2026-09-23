import PhoneFrame from '@/components/PhoneFrame';
import HomeFeed from '@/components/screens/HomeFeed';
import CompanionChat from '@/components/screens/CompanionChat';

/**
 * The hero's phone, playing rather than posing.
 *
 * ── What it shows, and why in that order ─────────────────────────────────────
 *
 * A still of the feed proves the app exists. It does not prove the two things
 * the paragraph beside it claims — that a memory is a strip of moments each
 * holding its own photographs, and that the companion is one screen away and
 * already knows you. Both are motions, so both were invisible.
 *
 * The reel is one sitting with the app, in the order somebody actually does it:
 *
 *   1. Jan 18 is open. Swipe its photographs — two of them.
 *   2. Move back to Nov 2, which brings its own picture, its own words and its
 *      own time in the header with it. Swipe that one too.
 *   3. Scroll. The journal entry underneath comes up to the top, and the feed
 *      ends where it says it ends.
 *   4. Cross to the companion, and let the thread scroll to the last thing it
 *      said — which is the line that only lands if it remembers you.
 *   5. Rest on that line, then walk back to the feed.
 *
 * ── Twice, and then it stops ────────────────────────────────────────────────
 *
 * Once is easy to miss — a reader looking at the headline first comes back to a
 * frame that has already finished. A permanent loop is worse: motion beside
 * body copy is a thing you look away from, and this page's argument is in the
 * copy. Twice is the smallest number that gives a second chance.
 *
 * It stops on the FEED, at the top, on Jan 18's first photograph. That matters
 * more than it sounds. Whatever is on screen when the movement ends is the
 * picture that stays on the page for as long as the reader is there, and a hero
 * frozen mid-gesture in somebody else's chat thread is the wrong lasting
 * impression of a product whose first screen is a feed.
 *
 * The walk back in step 5 is what makes that ending free. The reel returns
 * under its own power rather than being cut back, so the join between the two
 * plays is seamless and the final frame is a real screen rather than a paused
 * one — the same still reduced motion gets, and the same one this replaced.
 *
 * ── Pace ────────────────────────────────────────────────────────────────────
 *
 * Roughly half a second per swipe, and a beat of stillness after each. Faster
 * than a person swipes, because a hero gets a few seconds and not a minute;
 * slow enough that each move is one readable event rather than a flicker. All
 * of it lives in one 14s clock in app/globals.css — every beat is a percentage
 * of that, so retiming the whole reel is one number, and how many times it
 * plays is another.
 *
 * ── No JavaScript ───────────────────────────────────────────────────────────
 *
 * Every part of this is a CSS keyframe animation on a server-rendered tree, in
 * a site that ships no client runtime for its screenshots and should not start
 * shipping one for a decoration. Reduced motion drops every animation and the
 * frame renders as its own first still.
 */

// The frame is one picture to a screen reader, as every other frame on the site
// is (see components/Shot.jsx for the reasoning). It is not in the SHOTS
// manifest, because that manifest maps ids to single screens and this is two.
const REEL_ALT =
  'The EuphoTale app: a memory with several dated moments, a journal entry in the same feed, and the companion chat one screen across, referring back to an earlier conversation';

export default function HeroReel({ className = '' }) {
  return (
    <PhoneFrame className={className}>
      <div role="img" aria-label={REEL_ALT} className="h-full w-full">
        <div aria-hidden="true" className="h-full w-full overflow-hidden">
          {/* Two full screens side by side. The home screen leaves to the left
              exactly as a push transition does in the app — the chat is already
              there, off the right edge, rather than fading in over the top of
              something. And it comes back the same way, which is what lets the
              reel end without a cut. */}
          <div className="reel-slide flex h-full w-[200%]">
            <div className="h-full w-1/2 shrink-0">
              <HomeFeed />
            </div>
            <div className="h-full w-1/2 shrink-0">
              <CompanionChat bodyClassName="reel-chat" />
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
