import { Screen, AppBar } from '@/components/screens/parts';
import { Back, Globe, Two, Lock, Tick, Right } from '@/components/screens/AppIcon';

/**
 * Privacy settings.
 *
 * ── Inferred, not copied ────────────────────────────────────────────────────
 * No screenshot of this screen was available, so the layout is built from the
 * app's shared surface language rather than from the real thing — worth a look
 * before launch. The SETTINGS themselves are real: the four-way visibility
 * choice, tagging, messages and activity are the controls the privacy section
 * of the site actually names.
 *
 * The visibility choice is EXPANDED rather than collapsed behind a row reading
 * "Mutuals ›". A closed row proves a setting exists; an open one proves the
 * granularity the section spends a paragraph claiming, which is the only reason
 * this frame is on the page.
 */
function Choice({ Icon, label, note, checked }) {
  return (
    <div
      className={`flex items-center gap-[9px] rounded-[14px] px-[11px] py-[9px] ${
        checked ? 'bg-accent/[0.09]' : 'bg-raised shadow-[0_2px_10px_rgba(16,20,24,0.04)]'
      }`}
    >
      <Icon className={`h-[15px] w-[15px] shrink-0 ${checked ? 'text-accent-deep' : 'text-ink-mute'}`} />
      <div className="min-w-0 flex-1 leading-tight">
        <div className={`text-[10.5px] font-bold ${checked ? 'text-accent-deep' : 'text-ink'}`}>
          {label}
        </div>
        <div className="truncate font-speech text-[8.5px] font-medium text-ink-mute">{note}</div>
      </div>
      {checked ? (
        <span className="flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-accent-solid text-white">
          <Tick className="h-[9px] w-[9px]" />
        </span>
      ) : (
        <span className="h-[16px] w-[16px] shrink-0 rounded-full border border-strong" />
      )}
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center gap-[8px] px-[11px] py-[9px]">
      <span className="flex-1 text-[10.5px] font-medium text-ink">{label}</span>
      <span className="font-speech text-[9px] font-semibold text-ink-mute">{value}</span>
      <Right className="h-[11px] w-[11px] text-ink-faint" />
    </div>
  );
}

export default function PrivacyScreen() {
  return (
    <Screen>
      <AppBar left={<Back className="h-[16px] w-[16px] text-accent" />} title="Privacy" />

      <div className="flex-1 overflow-hidden px-[14px] pt-[10px]">
        <div className="text-[8.5px] font-bold uppercase tracking-[0.12em] text-ink-faint">
          Who sees a new post
        </div>
        <p className="mt-[4px] font-speech text-[9.5px] font-medium text-ink-mute">
          Every entry can override this on its own.
        </p>

        <div className="mt-[9px] flex flex-col gap-[6px]">
          <Choice Icon={Globe} label="Public" note="Anyone, signed in or not" checked={false} />
          <Choice Icon={Two} label="Followers" note="People who follow you" checked={false} />
          <Choice Icon={Two} label="Mutuals" note="Only people you follow back" checked />
          <Choice Icon={Lock} label="Only you" note="Nobody else, ever" checked={false} />
        </div>

        <div className="mt-[15px] text-[8.5px] font-bold uppercase tracking-[0.12em] text-ink-faint">
          Everything else
        </div>
        <div className="mt-[6px] divide-y divide-hair rounded-[16px] bg-raised shadow-[0_2px_14px_rgba(16,20,24,0.05)]">
          <Row label="Who can tag you" value="Mutuals" />
          <Row label="Who can message you" value="Mutuals" />
          <Row label="Activity status" value="Off" />
          <Row label="Blocked and muted" value="3" />
        </div>

        <div className="mt-[15px] text-[8.5px] font-bold uppercase tracking-[0.12em] text-ink-faint">
          Your data
        </div>
        <div className="mt-[6px] divide-y divide-hair rounded-[16px] bg-raised shadow-[0_2px_14px_rgba(16,20,24,0.05)]">
          <Row label="Download everything" value="" />
          <Row label="Personalised ads" value="Off" />
          <Row label="Delete your account" value="" />
        </div>

        <p className="mt-[11px] font-speech text-[8.5px] font-medium leading-[12px] text-ink-faint">
          Day logs are never posted and never targeted against. Under eighteen is never
          interest-profiled.
        </p>
      </div>
    </Screen>
  );
}
