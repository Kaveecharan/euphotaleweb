import { Screen } from '@/components/screens/parts';
import { Smile } from '@/components/screens/AppIcon';

/**
 * The mood report — what a run of day logs turns INTO.
 *
 * The first version of this frame was a check-in composer I had invented from
 * the schema. The real screen is this: a trend line above a list of dated
 * entries, each with its rating, its feelings and the line of context the
 * author typed. Which is lucky, because it proves the stronger claim — the
 * pillar says "It turns into a picture", and a slider cannot show that whereas
 * a chart with a bad Wednesday and a good Thursday can.
 *
 * The chart is drawn as inline SVG rather than pulled from a library: it is one
 * polyline and one area fill, and shipping a charting runtime to a marketing
 * page to draw six points would cost more than the whole rest of the frame.
 *
 * The colours here are the app's SEMANTIC scale, not the brand accent — green
 * for a good day, amber for a mixed one. That is a different axis from the
 * accent and the two must not be collapsed.
 */
export default function DayLog() {
  // Six days of check-ins. Deliberately unremarkable: a 5, a couple of 6s and
  // one good day. A run of 10s would sell the wrong product — this exists to
  // catch the flat middle of a year.
  const points = [6, 5, 5, 6, 5, 10];
  const W = 260;
  const H = 92;
  const step = W / (points.length - 1);
  const y = (v) => H - (v / 10) * H;
  const line = points.map((v, i) => `${i * step},${y(v)}`).join(' ');

  return (
    <Screen>
      <div className="flex-1 overflow-hidden px-[14px] pt-[10px]">
        {/* Tab chips — the app's own four squircles */}
        <div className="flex items-center justify-center gap-[10px] pb-[12px]">
          {['grid', 'logs', 'likes', 'saved'].map((id) => (
            <span
              key={id}
              className={`flex h-[36px] w-[36px] items-center justify-center rounded-[13px] ${
                id === 'logs'
                  ? 'bg-accent-solid text-white shadow-[0_3px_18px_rgba(232,37,44,0.38)]'
                  : 'bg-raised text-ink-body shadow-[0_2px_10px_rgba(16,20,24,0.07)]'
              }`}
            >
              <TabGlyph id={id} />
            </span>
          ))}
        </div>

        {/* Headline figures */}
        <div className="flex items-start justify-between">
          <div className="leading-none">
            <span className="text-[22px] font-bold text-ink">6</span>
            <span className="font-speech text-[11px] font-medium text-ink-mute">/10</span>
            <div className="mt-[3px] font-speech text-[9.5px] font-medium text-ink-mute">Oct 14</div>
          </div>
          <div className="text-right leading-none">
            <span className="inline-flex items-center gap-[4px]">
              <Smile className="h-[12px] w-[12px] text-persona-gold" />
              <span className="text-[17px] font-bold text-ink">6.5</span>
              <span className="font-speech text-[10px] font-medium text-ink-mute">/10</span>
            </span>
            <div className="mt-[3px] font-speech text-[9px] font-medium text-ink-mute">
              avg · mostly happy
            </div>
          </div>
        </div>

        {/* Trend */}
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="mt-[10px] w-full overflow-visible"
          style={{ height: H }}
          aria-hidden="true"
        >
          <line x1="0" y1={y(10)} x2={W} y2={y(10)} stroke="rgba(17,20,24,0.07)" strokeWidth="1" />
          <line x1="0" y1={y(5)} x2={W} y2={y(5)} stroke="rgba(17,20,24,0.07)" strokeWidth="1" />
          <line x1="0" y1={y(0)} x2={W} y2={y(0)} stroke="rgba(17,20,24,0.07)" strokeWidth="1" />
          <polygon points={`0,${H} ${line} ${W},${H}`} fill="rgba(232,37,44,0.08)" />
          <polyline
            points={line}
            fill="none"
            stroke="#E8252C"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <circle cx="0" cy={y(points[0])} r="3.5" fill="#E8252C" />
        </svg>

        <div className="mt-[4px] flex justify-between font-speech text-[8.5px] font-medium text-ink-mute">
          <span>Oct 3</span>
          <span>Oct 16</span>
        </div>

        {/* The days themselves */}
        <div className="mt-[10px] flex flex-col gap-[7px]">
          <DayCard
            date="Thu 16 Oct"
            verdict="Best day ever"
            score="10/10"
            feelings={['Happy']}
            note="She said yes to the flat. I have read the message about nine times."
            tone="good"
          />
          <DayCard
            date="Wed 15 Oct"
            verdict="Normal / mixed"
            score="5/10"
            feelings={['Calm', 'Tired']}
            note="Flat day. Wrote three lines and went to bed early."
            tone="mixed"
          />
          <DayCard
            date="Tue 14 Oct"
            verdict="Normal / mixed"
            score="4/10"
            feelings={['Anxious']}
            note="Couldn’t settle all day. Didn’t want to worry anyone, so I told this instead."
            tone="mixed"
          />
          <DayCard
            date="Mon 13 Oct"
            verdict="Normal / mixed"
            score="6/10"
            feelings={['Calm']}
            note="Nothing to report. Which is the point of writing it down."
            tone="mixed"
          />
        </div>
      </div>
    </Screen>
  );
}

function DayCard({ date, verdict, score, feelings, note, tone }) {
  const good = tone === 'good';
  return (
    <div className="flex gap-[9px] rounded-[16px] bg-raised p-[10px] shadow-[0_2px_14px_rgba(16,20,24,0.05)]">
      <span
        className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border-[1.5px] ${
          good ? 'border-[#2FB463] bg-[#EAF8F0] text-[#2FB463]' : 'border-persona-gold bg-persona-goldSoft/40 text-persona-gold'
        }`}
      >
        <Smile className="h-[15px] w-[15px]" />
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="flex-1 truncate text-[11px] font-bold text-ink">{date}</span>
          <span
            className={`shrink-0 rounded-pill px-[7px] py-[2px] text-[9px] font-bold text-white ${
              good ? 'bg-[#2FB463]' : 'bg-persona-gold'
            }`}
          >
            {score}
          </span>
        </div>

        <div className={`mt-[2px] text-[10px] font-bold ${good ? 'text-[#2FB463]' : 'text-persona-gold'}`}>
          {verdict}
        </div>

        <div className="mt-[4px] flex flex-wrap items-center gap-[9px]">
          {feelings.map((f) => (
            <span key={f} className="flex items-center gap-[3px] text-ink-body">
              <Smile className="h-[10px] w-[10px] text-persona-gold" />
              <span className="font-speech text-[9.5px] font-semibold">{f}</span>
            </span>
          ))}
        </div>

        <p className="mt-[5px] font-speech text-[9.5px] font-medium leading-[13px] text-ink-body">
          {note}
        </p>
      </div>
    </div>
  );
}

function TabGlyph({ id }) {
  const c = 'h-[15px] w-[15px]';
  if (id === 'grid') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={c} aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <rect x="13" y="3" width="8" height="8" rx="2" />
        <rect x="3" y="13" width="8" height="8" rx="2" />
        <rect x="13" y="13" width="8" height="8" rx="2" />
      </svg>
    );
  }
  if (id === 'logs') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={c} aria-hidden="true">
        <path d="M6 2.5h8.5L20 8v13.5H6a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 6 2.5Zm3 9h8v1.6H9zm0 3.4h8v1.6H9z" />
      </svg>
    );
  }
  if (id === 'likes') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={c} aria-hidden="true">
        <path d="M12 20.8S3 15.2 3 9.3A4.9 4.9 0 0 1 12 6.6a4.9 4.9 0 0 1 9 2.7c0 5.9-9 11.5-9 11.5Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={c} aria-hidden="true">
      <path d="M6.5 3h11a1 1 0 0 1 1 1v17l-6.5-4L5.5 21V4a1 1 0 0 1 1-1Z" />
    </svg>
  );
}
