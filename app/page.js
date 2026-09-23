import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import NotHere from '@/components/sections/NotHere';
import Uses from '@/components/sections/Uses';
import Pillars from '@/components/sections/Pillars';
import Privacy from '@/components/sections/Privacy';
import Pricing from '@/components/sections/Pricing';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';

/**
 * The showcase.
 *
 * Section order IS the argument, so it is worth stating:
 *
 *   Hero      what this is, in one sentence
 *   NotHere   what it refuses to do — the reason this audience keeps reading
 *   Uses      what you would actually use it for, and what you get back
 *   Pillars   the five things it does, heaviest first: the permanent memory
 *             companion, then memories, journal, day log, the Moon
 *   Privacy   why trusting it with a decade of your life is reasonable
 *   Pricing   what it costs, and what Free actually keeps
 *   Faq       the objections, answered without hedging
 *   FinalCta  one action
 *
 * ── Three sections were removed, and the reasons generalise ──────────────────
 *
 *   FeatureGrid  Twelve cards for direct messages, search, likes, comments,
 *                notifications and the rest. Every app in the comparison set
 *                has all of them, so the grid claimed nothing while occupying
 *                a screen and a half. It is now one sentence at the end of
 *                Uses (TABLE_STAKES in lib/content/features.js).
 *
 *   Gallery      A rail of fourteen screenshots — every screen in the app. A
 *                tour of an interface the visitor has no reason to study yet,
 *                and roughly two megabytes of images to say it. Screenshots
 *                now appear only where one is evidence for a specific claim:
 *                the hero, one per pillar, and privacy. Seven, not fourteen.
 *
 *   HowItWorks   Three numbered steps that answered the same question Uses now
 *                answers better, from a real situation instead of an abstract
 *                one. Its one irreplaceable line — there is nothing to set up —
 *                is in the Uses lede.
 *
 * Everything below the navigation is a server component. The page ships two
 * small islands of JavaScript in total — the mobile menu and the currency
 * toggle — and nothing else.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <NotHere />
        <Uses />
        <Pillars />
        <Privacy />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
