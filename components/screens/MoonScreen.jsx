import { Screen, AppBar, MoonBadge, MoonCard } from '@/components/screens/parts';
import { Back } from '@/components/screens/AppIcon';

/**
 * The Moon.
 *
 * Rebuilt against the real screen (fe/src/features/moon/MoonScreen.js) rather
 * than inferred: the hero moon at the top with the level name and its blurb
 * under it, then a progress card, then the grace card, then a three-up stat
 * row, then the footnote. Numbers and copy come from that file and from
 * LEVELS in be/services/moon.service.js.
 *
 * The artwork is the app's own MoonBadge, ported in parts.jsx — the earlier
 * version drew four flat semicircles, which threw away the one real piece of
 * illustration the product owns.
 *
 * Why the GRACE card is the one shown open: "progress that forgives a bad
 * month" is the claim beside this frame, and a clean record proves the
 * opposite. A missed September that the level survived is the whole argument,
 * so it gets the coloured card rather than a line in a history list.
 */
export default function MoonScreen() {
  return (
    <Screen>
      <AppBar left={<Back className="h-[16px] w-[16px] text-accent" />} title="The Moon" />

      {/* Hero */}
      <div className="flex shrink-0 flex-col items-center gap-[3px] px-[24px] pb-[16px] pt-[6px]">
        <MoonBadge size={104} level="growing" />
        <div className="mt-[10px] text-[18px] font-bold text-ink">Growing Moon</div>
        <p className="text-center font-speech text-[11px] leading-[15px] text-ink-mute">
          Twelve check-ins and one memory each month.
        </p>
      </div>

      {/* This period */}
      <MoonCard title="This month">
        <div className="h-[6px] overflow-hidden rounded-pill bg-well">
          <div className="h-full rounded-pill bg-[#E8AA48]" style={{ width: '75%' }} />
        </div>
        <div className="mt-[6px] flex justify-between font-speech text-[9.5px] font-medium text-ink-mute">
          <span>9 of 12 check-ins</span>
          <span>11 days left</span>
        </div>
        <div className="mt-[9px] flex items-center gap-[6px]">
          <span className="flex h-[13px] w-[13px] items-center justify-center rounded-full bg-[#34C759] text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round" className="h-[7px] w-[7px]">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </span>
          <span className="text-[10.5px] font-medium text-ink">One memory kept</span>
        </div>
      </MoonCard>

      {/* Grace — the reason this screen exists */}
      <MoonCard tone="warn">
        <div className="mb-[6px] flex items-center gap-[6px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="#C77700" strokeWidth={2} strokeLinecap="round" className="h-[13px] w-[13px]" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M10 9v6M14 9v6" />
          </svg>
          <span className="text-[11.5px] font-bold text-[#C77700]">September was held</span>
        </div>
        <p className="font-speech text-[10.5px] leading-[15px] text-ink-body">
          You checked in five times instead of twelve, and kept the level anyway. Grace is spent, not
          lost &mdash; the next month you keep earns it back.
        </p>
      </MoonCard>

      {/* Stats */}
      <div className="mx-[12px] mb-[9px] flex shrink-0 gap-[8px]">
        {[
          ['38', 'check-ins'],
          ['4', 'months'],
          ['6', 'memories'],
        ].map(([value, label]) => (
          <div
            key={label}
            className="flex flex-1 flex-col items-center rounded-[17px] border border-hair bg-raised py-[10px]"
          >
            <span className="text-[15px] font-bold text-[#B9821F]">{value}</span>
            <span className="mt-[1px] font-speech text-[9px] font-medium text-ink-mute">{label}</span>
          </div>
        ))}
      </div>

      <p className="shrink-0 px-[12px] font-speech text-[9.5px] leading-[14px] text-ink-faint">
        Half Moon is next: forty check-ins and a memory across the quarter. There is no streak to
        break here &mdash; a quiet week costs you nothing at all.
      </p>
    </Screen>
  );
}
