import {
  Screen,
  PostHeader,
  PostActions,
  JournalPage,
  AudioBar,
  PostPeek,
} from '@/components/screens/parts';

/**
 * A journal entry, as it reaches a reader.
 *
 * ── Why this entry ──────────────────────────────────────────────────────────
 *
 * The text is deliberately about nothing. A phone call with a parent covering
 * a fence, some bins and a man he used to work with is not content — there is
 * no way to perform it, no reason to like it, and no version of it that belongs
 * on a feed built for reach. It is only worth writing down if the point is
 * KEEPING rather than showing, which is the sentence the whole pillar rests on.
 *
 * The last line says the product's thesis in the author's own voice rather than
 * the marketing's: the nothings are the part you want back. That is the case
 * for a private journal over a public post, made by the artefact itself.
 *
 * The voice note is in shot because "for the days writing does not come" is a
 * claim, and one you can only believe from seeing the control exist.
 */
export default function JournalEntry() {
  return (
    <Screen>
      {/* Erin, and the same entry the hero feed shows — one diary page written
          once. The pillar is where it is legible in full; the feed is where you
          come across it. Two different pages would be a continuity error. */}
      <PostHeader photoId="face-5" name="Erin" sub="@erinkw · 1d" verified={false} />

      <JournalPage date="13 October 2026" location="Sheffield" photos={['journal-2', 'journal-3']}>
        I passed the caf&eacute; we used to visit. I hadn&rsquo;t thought about that place in ages. For
        some reason, I remembered everything from those days. It&rsquo;s strange what brings certain
        memories back.
      </JournalPage>

      <AudioBar duration="0:41" />

      <div className="mt-[4px]">
        <PostActions likes={4} comments={1} reposts={0} />
      </div>

      <PostPeek photoId="feed-2" avatarId="face-4" name="Yuki" sub="@yukim · 3h" verified={false} />
    </Screen>
  );
}
