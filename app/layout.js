import { Inter, Cormorant_Garamond, Outfit, Quicksand, Carattere, Cinzel } from 'next/font/google';
import './globals.css';
import { BRAND, SITE_URL, STORES } from '@/lib/site';
import { CURRENCIES } from '@/lib/content/pricing';

// ── Typography ───────────────────────────────────────────────────────────────
// Four faces. Two belong to the SITE, two belong to the APP, and the split is
// the point: everything outside a phone frame is the site talking about the
// product, everything inside one is the product itself.
//
// ── The site ────────────────────────────────────────────────────────────────
// Inter carries the interface of this page — one family, hierarchy by weight.
//
// Cormorant Garamond appears only at editorial sizes (hero, section headings,
// pull quotes, and the journal body inside the journal frame). It is not a
// decorative import: it is one of the eight faces you can write a journal entry
// in, which is why the memory app gets a serif and the finance app did not.
//
// ── The app ─────────────────────────────────────────────────────────────────
// Outfit and Quicksand are the app's real faces (fe/src/theme/typography.js),
// and they are loaded here because the seven phone frames are no longer PNG
// screenshots — they are the app's UI rebuilt in code. A rebuilt screen set in
// the wrong typeface is a picture of a product that does not exist, in the one
// place a visitor is deciding whether to believe the pictures at all.
//
// They are scoped by the `font-app` / `font-speech` utilities and appear
// nowhere on the page outside the frames.
//
// All four are self-hosted by next/font at build time, so no request ever
// leaves for a font CDN and the CSP can keep font-src locked to 'self'.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

// The app's main face: everything the interface says in its own voice.
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

// The app's secondary face: everything a PERSON wrote. Rounded terminals make
// it visibly softer than Outfit at the same size, which is the whole point —
// the distinction should be felt without being announced.
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-quicksand',
  display: 'swap',
});

// The journal's DEFAULT face — see fe/src/features/journal/journalFonts.js,
// where `carattere` is DEFAULT_JOURNAL_FONT. An entry rendered in anything else
// is a picture of a journal nobody's app writes in, and the whole point of the
// journal pillar is that the face is the author's choice made visible.
//
// It carries the app's own optical corrections with it: script faces sit small
// and low, so the app scales it 1.22x with 1.28x leading. The journal page on
// this site applies the same ratio rather than eyeballing a size.
// The wordmark's face, and deliberately outside the app's two-family system:
// a wordmark is a MARK, not text — its job is to be recognised rather than read,
// so it gets its own face. fe/src/components/shared/Wordmark.js sets it in
// Cinzel SemiBold with the caps carrying a red-to-near-black gradient, which is
// what the frames here reproduce.
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-cinzel',
  display: 'swap',
});

const carattere = Carattere({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-carattere',
  display: 'swap',
});

const TITLE = `${BRAND.name} — ${BRAND.tagline}`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    // Sub-pages set a bare title; this frames it without them repeating the brand.
    template: `%s — ${BRAND.name}`,
  },
  description: BRAND.blurb,
  applicationName: BRAND.name,
  keywords: [
    'memory app',
    'private journal app',
    'daily mood log',
    'AI companion that remembers',
    'calm social app',
    'photo timeline',
    'digital journal',
    'no doomscrolling',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: BRAND.name,
    locale: 'en_GB',
    url: SITE_URL,
    title: TITLE,
    description: BRAND.blurb,
    // A square mark rather than a fabricated 1200×630 banner. Swap in
    // /og.png (1200×630) when there is a real one and set the card below to
    // 'summary_large_image'.
    images: [{ url: '/logo.png', width: 512, height: 512, alt: `${BRAND.name} app icon` }],
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: BRAND.blurb,
    images: ['/logo.png'],
  },
  // Three sizes rather than one 512px PNG doing every job: a browser tab
  // renders a favicon at 16–32px, and downscaling a half-megabyte icon for it
  // costs a request and a decode on every page load.
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '64x64', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport = {
  themeColor: '#F4F5F7',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

/**
 * Structured data for the app listing.
 *
 * Every field is a compile-time constant from lib/site.js — there is no user
 * input anywhere near this object, which is the only reason writing it into the
 * document with dangerouslySetInnerHTML is acceptable. The `<` escape below is
 * belt-and-braces: it makes a `</script>` sequence impossible to smuggle in
 * even if one of these values later becomes dynamic.
 *
 * No aggregateRating and no reviewCount. Inventing either is both a
 * Google-policy violation and exactly the kind of thing this product is
 * positioned against.
 */
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: BRAND.name,
  description: BRAND.blurb,
  applicationCategory: 'LifestyleApplication',
  operatingSystem: [STORES.android.url && 'Android', STORES.ios.url && 'iOS'].filter(Boolean),
  url: SITE_URL,
  ...(STORES.android.url ? { installUrl: STORES.android.url } : {}),
  // ── Offers, DERIVED rather than typed ─────────────────────────────────────
  //
  // These three lines were hardcoded, and they went stale in the worst possible
  // place: this is the JSON-LD Google reads to print a price in a search
  // result, so it advertised $11.99/mo and $109.99/yr to people who had not
  // reached the site yet — and $109.99 was by then not even a dollar amount,
  // it was the GBP yearly price wearing a USD label.
  //
  // Reading the same table the price cards read means the two cannot disagree,
  // and puts this under `check:web-pricing` transitively: the guard pins the
  // table, and the table is now the only place a price is written.
  //
  // All three currencies are listed, not just USD. The product genuinely sells
  // in three, a search result in London should be able to say £10.99, and an
  // Offer per currency is exactly what schema.org models.
  offers: [
    { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Free' },
    ...CURRENCIES.flatMap((c) => [
      { '@type': 'Offer', price: c.monthly, priceCurrency: c.code, name: 'Pro (monthly)' },
      { '@type': 'Offer', price: c.yearly, priceCurrency: c.code, name: 'Pro (yearly)' },
    ]),
  ],
};

const serializedStructuredData = JSON.stringify(structuredData).replace(/</g, '\\u003c');

export default function RootLayout({ children }) {
  return (
    // ── suppressHydrationWarning, and why it is only on these two elements ──
    // Browser extensions write attributes onto <html> and <body> before React
    // hydrates — ColorZilla adds `cz-shortcut-listen`, Grammarly adds its own,
    // dark-mode extensions add a `style`. React sees the server HTML and the
    // client DOM disagree and reports a hydration mismatch that no change to
    // this codebase can fix.
    //
    // The flag suppresses that ONE LEVEL DEEP — it silences a mismatch on this
    // element's own attributes and text, and nothing below it. A genuine
    // hydration bug anywhere inside the page still reports normally, which is
    // why this is a targeted fix rather than a blanket one.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable} ${outfit.variable} ${quicksand.variable} ${carattere.variable} ${cinzel.variable}`}
    >
      <body suppressHydrationWarning className="font-sans antialiased bg-page text-ink-body">
        {/* First stop for a keyboard or screen-reader user, before the nav. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]
                     focus:rounded-pill focus:bg-ink focus:px-5 focus:py-3
                     focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializedStructuredData }}
        />
      </body>
    </html>
  );
}
