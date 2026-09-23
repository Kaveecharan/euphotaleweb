/**
 * EuphoTale — Tailwind theme.
 *
 * The palette is the app's own design language (fe/src/theme/glass.js): a flat
 * matte system where hierarchy is a ladder of tones — well < page < raised —
 * rather than borders and shadows, with one vivid accent used sparingly.
 *
 * Every value a component needs is a TOKEN here. Nothing in the JSX should
 * carry a raw hex, because that is exactly how the previous site ended up with
 * seven hardcoded copies of one brand colour that all survived a re-theme.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Surfaces: the tonal ladder ────────────────────────────────────
        page:   '#F4F5F7', // the paper everything sits on — never white
        well:   '#EAECEF', // a step BELOW the page: inputs, tracks, insets
        raised: '#FFFFFF', // a step ABOVE it: cards, panels, the nav bar

        // ── Ink ───────────────────────────────────────────────────────────
        // Near-black with a hair of blue. Pure #000 vibrates against matte
        // paper and is the single fastest way to make a page look cheap.
        ink: {
          DEFAULT: '#111417', // headings and primary text
          body:    '#2B3036', // body copy
          mute:    '#5C646D', // secondary text — the lightest ink that may carry meaning
          faint:   '#8A929B', // decorative marks and disabled states only
        },

        // ── Accent: signal red ────────────────────────────────────────────
        // `DEFAULT` clears the 3:1 bar for icons and marks but NOT the 4.5:1
        // bar for text. Anything with white TEXT on a fill uses `solid`
        // (5.03:1) or `deep` (5.97:1) — never `DEFAULT`.
        accent: {
          DEFAULT: '#E8252C',
          solid:   '#D91F26', // flat primary fills carrying a white label
          deep:    '#C41A20', // hover, and accent text on the page (5.71:1)
          light:   '#FF5A55',
        },

        // ── Persona: the therapist's warm gold ────────────────────────────
        // The companion's two voices own distinct colour identities in the app
        // (fe/src/features/companion/PersonaSwitcher.js) so the two chats are
        // told apart at a glance. The friend wears the accent above; the
        // therapist wears this, and it is the ONE place a second hue is allowed
        // on this site — inside a phone frame, describing a real product
        // distinction, never as decoration on the page itself.
        persona: {
          gold:      '#E0A438', // send button, user bubble, dots
          goldSoft:  '#F5DFB8', // the therapist's bubble tint
          goldDeep:  '#C78A2E', // the darker end of the avatar sweep
          goldInk:   '#8A6118', // text on goldSoft — 5.2:1, clears AA
        },

        // ── Night: the inverted sections ──────────────────────────────────
        night: {
          DEFAULT: '#111417',
          raised:  '#1B1F25',
          mute:    '#9AA1A9',
          faint:   '#6B737C',
        },
      },

      borderColor: {
        // A hairline is a separation, not a bevel. Cards on the page are
        // already separated by tone and mostly need no border at all.
        hair:   'rgba(17,20,24,0.07)',
        strong: 'rgba(17,20,24,0.13)',
        night:  'rgba(255,255,255,0.09)',
      },

      fontFamily: {
        // One UI family, hierarchy by weight — the app's own rule.
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        // Reserved for large editorial headings and pull quotes. It is one of
        // the faces you can write a journal entry in, which is why it is here
        // and not some unrelated display face.
        display: ['var(--font-cormorant)', 'ui-serif', 'Georgia', 'serif'],

        // ── The app's own two faces, used ONLY inside the phone frames ───────
        // The frames are the app rebuilt in code, so they have to be set in
        // what the app is actually set in — otherwise the shopfront shows a
        // typeface the product does not use, which is a small lie in the one
        // place a visitor is deciding whether to trust the pictures.
        //
        // The split mirrors fe/src/theme/typography.js exactly, and it is by
        // WHO IS SPEAKING rather than by size: `app` for anything the interface
        // says (labels, buttons, names, titles), `speech` for anything a PERSON
        // wrote (captions, comments, journal entries, companion chat bubbles).
        app:    ['var(--font-outfit)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        speech: ['var(--font-quicksand)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // The journal's default face. One of eight the author can pick from in
        // the app; this is the one an entry gets if they never touch the picker.
        journal: ['var(--font-carattere)', 'var(--font-cormorant)', 'ui-serif', 'cursive'],
        // The wordmark only. Never body copy — it is a mark, not a typeface.
        mark: ['var(--font-cinzel)', 'ui-serif', 'Georgia', 'serif'],
      },

      boxShadow: {
        // Large radius, low opacity, offset well under the radius, never
        // tinted. That ratio is what separates "soft material" from
        // "drop shadow".
        lift:  '0 2px 4px rgba(17,20,24,0.04), 0 18px 44px rgba(17,20,24,0.09)',
        phone: '0 4px 12px rgba(17,20,24,0.06), 0 32px 80px rgba(17,20,24,0.14)',
      },

      borderRadius: {
        card: '20px',
        pill: '999px',
      },

      // No `keyframes`/`animation` block. Both animations on this site — the
      // scroll reveal and the hero reel — are declared as raw CSS in
      // app/globals.css, because neither is reachable from a utility class:
      // the reveal is driven by `animation-timeline`, and the reel's beats are
      // percentages of one shared clock rather than a named duration. Tailwind
      // only emits a keyframes block when a matching `animate-*` class appears
      // in the scanned source, and none does.
    },
  },
  plugins: [],
};
