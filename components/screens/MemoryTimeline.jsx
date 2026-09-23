import Photo from '@/components/Photo';
import {
  Screen,
  PostHeader,
  PostActions,
  TimelineStrip,
  PostPeek,
} from '@/components/screens/parts';

/**
 * A memory post.
 *
 * ── Why this memory and not a nicer one ─────────────────────────────────────
 *
 * "The last winter in the old flat" is chosen to be the exact thing nobody
 * posts. There is no event in it, nothing to congratulate, no reason for
 * anyone else to care — and it is precisely what a person would want back in
 * ten years. A frame showing a holiday or a party would be indistinguishable
 * from the two apps this product is defined against, and would quietly argue
 * that they are interchangeable.
 *
 * The caption does the same work in one line: photographing the kitchen is
 * what you do when you are keeping something rather than showing it.
 *
 * The dates carry the structural claim — one trip, then the next, then an empty
 * slot rather than a terminator. A memory that is still being added to.
 */
export default function MemoryTimeline() {
  return (
    <Screen>
      <PostHeader photoId="face-1" name="Rhea" sub="@rhea · 2h" />

      <div className="w-full shrink-0 overflow-hidden bg-well" style={{ aspectRatio: '1 / 0.78' }}>
        <Photo id="moment-1" />
      </div>

      <TimelineStrip
        // Two, not three. The app auto-scrolls the strip to its END so the
        // newest moment and the empty Add slot are what you actually see, and
        // a third tile here pushed "New Memory" off the frame edge — a label
        // clipped mid-word reads as a bug rather than as a scrollable rail.
        moments={[
          { photoId: 'moment-2', date: 'Jan 18' },
          { photoId: 'moment-1', date: 'Mar 6', active: true },
        ]}
      />

      <div className="flex shrink-0 items-center gap-[6px] px-[9px] pb-[1px] pt-[5px]">
        <span className="text-[12.5px] font-semibold text-ink">Somewhere new every year</span>
      </div>

      <p className="shrink-0 px-[9px] pb-[3px] pt-[4px] font-speech text-[10px] font-medium leading-[14px] text-ink-body">
        Spain this time. Same people, different coast, still nobody who can drive a manual.
      </p>

      <PostActions likes={11} comments={3} reposts={0} liked />

      <PostPeek photoId="feed-2" avatarId="face-4" name="Yuki" sub="@yukim · 5h" verified={false} />
    </Screen>
  );
}
