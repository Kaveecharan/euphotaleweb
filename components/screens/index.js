import HomeFeed from '@/components/screens/HomeFeed';
import CompanionChat from '@/components/screens/CompanionChat';
import CompanionGuide from '@/components/screens/CompanionGuide';
import MemoryTimeline from '@/components/screens/MemoryTimeline';
import JournalEntry from '@/components/screens/JournalEntry';
import DayLog from '@/components/screens/DayLog';
import MoonScreen from '@/components/screens/MoonScreen';
import PrivacyScreen from '@/components/screens/PrivacyScreen';
import Profile from '@/components/screens/Profile';

// ─────────────────────────────────────────────────────────────────────────────
//  Which component fills which phone frame.
//
//  Keys match lib/content/screenshots.js exactly. A frame is requested by id
//  from a content file (`shot: 'day-log'`), and that id has to resolve in BOTH
//  places — the manifest for its description, this registry for its pixels.
//  components/Shot.jsx asserts it at build time, so the two cannot drift.
// ─────────────────────────────────────────────────────────────────────────────

export const SCREENS = {
  'home-feed': HomeFeed,
  'companion-chat': CompanionChat,
  'companion-guide': CompanionGuide,
  'memory-timeline': MemoryTimeline,
  'journal-entry': JournalEntry,
  'day-log': DayLog,
  moon: MoonScreen,
  privacy: PrivacyScreen,
  profile: Profile,
};
