import { ChatScreen, SparkGlyph } from '@/components/screens/parts';

/**
 * The friend, at 1am.
 *
 * ── Why it reads like this ──────────────────────────────────────────────────
 *
 * An earlier version had the user ask "how do you even remember that", which
 * turned the whole exchange into a demo of a feature. Nobody talks to a friend
 * that way. The recall has to arrive INCIDENTALLY — as the reason a reply is
 * shaped the way it is — because that is the only version a reader believes.
 *
 * So the memory never gets announced. It shows up three times and is never once
 * remarked on: the interview has a name, the pattern before Leeds is recalled
 * unprompted with the detail that makes it true ("up since five"), and the last
 * line reaches for something completely unrelated that it also happens to know.
 * That last one does the most work — a general assistant has nothing to reach
 * for.
 *
 * The thread is longer than the frame on purpose. Bottom-anchored with the top
 * clipped, it reads as a conversation already in progress rather than one
 * staged for a screenshot.
 *
 * The support is doing the other half. It does not advise, reassure in the
 * abstract, or summarise anything back — it names the pattern, offers evidence
 * that this has been survived before, and then hands over the choice of what to
 * do with the next ten minutes.
 */
export default function CompanionChat({ bodyClassName = '' }) {
  return (
    <ChatScreen
      name="ET"
      glyph={<SparkGlyph />}
      bodyClassName={bodyClassName}
      messages={[
        // Two beats from earlier the same evening. They clip at the top of the
        // frame, which is the point — a thread that starts exactly at the top
        // edge looks staged, and "try to actually sleep this time" makes the
        // message four lines down land harder for having been said first.
        { mine: true, text: 'ok going to bed' },
        { text: 'Night. Try to actually sleep this time.' },
        { mine: true, text: 'you up?' },
        { text: 'Always. What’s going on?' },
        { mine: true, text: 'nothing really. just can’t sleep' },
        { text: 'Nothing usually means something with you. Is it tomorrow?' },
        { mine: true, text: 'yeah' },
        { text: 'The Whitmore interview.' },
        { mine: true, text: 'i’ve been fine about it all week. now i’m not' },
        {
          text:
            'You were exactly like this before Leeds. Calm right up to the night before, then awake at two picking holes in yourself.',
        },
        { evidence: 'From a conversation · 3 Feb' },
        { mine: true, text: 'i’d forgotten about that one' },
        { text: 'You got it, though. You’d been up since five and you still got it.' },
        { mine: true, text: 'ha' },
        { text: 'Do you want to run through it, or do you want me to talk about anything else at all?' },
        { mine: true, text: 'anything else' },
        { text: 'Your sister still hasn’t sent those photos, has she.' },
      ]}
    />
  );
}
