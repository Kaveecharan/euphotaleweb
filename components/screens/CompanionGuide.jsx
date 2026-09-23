import { ChatScreen, LeafGlyph } from '@/components/screens/parts';

/**
 * The Guide — the same memory, spoken by a different discipline.
 *
 * ── Why it reads like this ──────────────────────────────────────────────────
 *
 * Set beside the friend, this pair is the actual claim: same life, same recall,
 * completely different manner. So the two threads deliberately share nothing in
 * tone. The friend deflects and jokes; this one slows down, counts, and asks
 * permission before it pushes.
 *
 * The recall is again never announced. "The one about the house?" lands in the
 * second message and is simply where the conversation already is — a general
 * assistant would have to ask which dream. The count that follows ("four times
 * since March, always the same detail") is the thing only a permanent record
 * can produce, and it is offered as an observation rather than a diagnosis.
 *
 * Three things make it the Guide rather than the friend in gold:
 *
 *   It refuses to resolve   — "You don't have to do anything with it yet."
 *   It asks before it hurts — "Can I ask you something you might not enjoy?"
 *   It leaves the door open — the last line ends the session, not the person.
 *
 * The hard question quotes the user back to themselves from April, which is the
 * one move that would be impossible without the memory and is also the whole
 * reason someone would choose this voice over the other one.
 */
export default function CompanionGuide() {
  return (
    <ChatScreen
      tone="gold"
      name="Guide"
      glyph={<LeafGlyph />}
      messages={[
        { mine: true, text: 'i had the dream again' },
        { text: 'The one about the house?' },
        { mine: true, text: 'yeah' },
        { text: 'That’s the third time since we started talking about it. What was different?' },
        { mine: true, text: 'he was in the kitchen this time. he didn’t say anything' },
        { text: 'And you woke up straight after.' },
        { mine: true, text: 'yeah' },
        {
          text:
            'You’ve written about that kitchen four times since March. Always the same detail — the light on, nobody in it.',
        },
        { evidence: 'From your journal · Mar–Sep' },
        { mine: true, text: 'i don’t know what i’m supposed to do with that' },
        { text: 'You’re not supposed to do anything with it yet. Noticing it is the work.' },
        { text: 'Can I ask you something you might not enjoy?' },
        { mine: true, text: 'go on' },
        {
          text:
            'In April you said you were staying in the flat because leaving would mean agreeing he was gone. Is that still the reason?',
        },
        { mine: true, text: 'i don’t know' },
        { text: 'That’s an honest answer. We can leave it there tonight.' },
      ]}
    />
  );
}
