import Photo from '@/components/Photo';
import { Screen, Wordmark, Verified } from '@/components/screens/parts';
import { Heart, Comment, Repost, Settings } from '@/components/screens/AppIcon';

/**
 * A profile.
 *
 * This is where the three halves of the product finally sit in one place — the
 * memories as a grid, the Moon as a level, and the four tabs that hold the
 * logs, likes and saves. It is the "so what does it add up to" screen, which is
 * why it earns a frame of its own rather than being described in a sentence.
 *
 * ── The third stat says "Streak", as the app does ───────────────────────────
 *
 * Read this before changing it back. The word sits two sections away from "No
 * streak to break, no flame to lose", and the FAQ answers "there is no streak"
 * outright. A visitor who reads both believes the screenshot, so the frame is
 * now arguing against the page around it.
 *
 * It is here because the shot should match the app, and the app labels it
 * Streak. That makes this a question about the PRODUCT rather than the site:
 * either the app's label changes, or the "no streak" copy does. Whichever way
 * it goes, the two have to agree — and no glyph is drawn beside the number,
 * because a flame is the one thing the copy names as absent.
 */
export default function Profile() {
  const posts = [
    { id: 'home-5', likes: 24, comments: 5, reposts: 1 },
    { id: 'home-3', likes: 11, comments: 3, reposts: 0 },
    { id: 'moment-1', likes: 8, comments: 1, reposts: 0 },
    { id: 'moment-2', likes: 17, comments: 2, reposts: 2 },
  ];

  return (
    <Screen>
      {/* Top bar — the profile keeps its settings cog; the home feed does not */}
      <div className="flex h-[36px] shrink-0 items-center justify-between px-[10px]">
        <Wordmark />
        <div className="flex items-center gap-[9px]">
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-raised text-accent shadow-[0_2px_14px_rgba(16,20,24,0.09)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" className="h-[17px] w-[17px]" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-raised text-ink-body shadow-[0_2px_14px_rgba(16,20,24,0.09)]">
            <Settings className="h-[15px] w-[15px]" />
          </span>
        </div>
      </div>

      {/* Identity card, with the avatar breaking out of its top edge */}
      <div className="relative mt-[34px] shrink-0 px-[14px]">
        {/* 78, up from 62. The three numbers below it and the wordmark above
            were both louder than the face on a screen whose whole subject is
            one person. The offset, the top margin and the card's top padding
            all move with it — the avatar breaks out of the card's edge by a
            fixed proportion of itself, not by a fixed number. */}
        <span className="absolute left-1/2 top-[-34px] z-10 h-[78px] w-[78px] -translate-x-1/2 overflow-hidden rounded-full border-[3px] border-page bg-well">
          <Photo id="face-3" round />
        </span>

        <div className="rounded-[22px] bg-raised px-[14px] pb-[13px] pt-[52px] shadow-[0_2px_14px_rgba(16,20,24,0.05)]">
          <div className="flex items-center justify-center gap-[5px]">
            <span className="text-[17px] font-bold text-ink">Rhea Sandoval</span>
            <Verified size={13} />
          </div>
          <div className="mt-[1px] text-center font-speech text-[11px] font-medium text-ink-mute">
            @rhea
          </div>

          <div className="mt-[12px] flex items-stretch">
            {[
              ['142', 'Followers'],
              ['14', 'Memories'],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-1 flex-col items-center">
                <span className="text-[15px] font-bold leading-none text-ink">{value}</span>
                <span className="mt-[3px] font-speech text-[9px] font-medium text-ink-mute">
                  {label}
                </span>
              </div>
            ))}
            <span className="w-px self-stretch bg-hair" />
            <div className="flex flex-1 flex-col items-center">
              <span className="text-[15px] font-bold leading-none text-ink">23</span>
              <span className="mt-[3px] font-speech text-[9px] font-medium text-ink-mute">Streak</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs — the app's four squircles */}
      <div className="mt-[12px] flex shrink-0 items-center justify-center gap-[10px]">
        {['grid', 'logs', 'likes', 'saved'].map((id) => (
          <span
            key={id}
            className={`flex h-[34px] w-[34px] items-center justify-center rounded-[12px] ${
              id === 'grid'
                ? 'bg-accent-solid text-white shadow-[0_3px_18px_rgba(232,37,44,0.38)]'
                : 'bg-raised text-ink-body shadow-[0_2px_10px_rgba(16,20,24,0.07)]'
            }`}
          >
            <TabGlyph id={id} />
          </span>
        ))}
      </div>

      {/* The grid */}
      <div className="mt-[11px] grid grid-cols-2 gap-[6px] overflow-hidden px-[7px]">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative overflow-hidden rounded-[11px] bg-well"
            style={{ aspectRatio: '1 / 1.15' }}
          >
            <Photo id={post.id} />
            <span className="absolute inset-x-0 bottom-0 h-[42px] bg-gradient-to-t from-black/55 to-transparent" />
            <span className="absolute bottom-[6px] left-[7px] flex items-center gap-[8px] text-white">
              <span className="flex items-center gap-[2px]">
                <Heart className="h-[10px] w-[10px]" fill="currentColor" />
                <span className="font-speech text-[8px] font-bold">{post.likes}</span>
              </span>
              <span className="flex items-center gap-[2px]">
                <Comment className="h-[10px] w-[10px]" />
                <span className="font-speech text-[8px] font-bold">{post.comments}</span>
              </span>
              <span className="flex items-center gap-[2px]">
                <Repost className="h-[10px] w-[10px]" />
                <span className="font-speech text-[8px] font-bold">{post.reposts}</span>
              </span>
            </span>
          </div>
        ))}
      </div>
    </Screen>
  );
}

function TabGlyph({ id }) {
  const c = 'h-[14px] w-[14px]';
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
