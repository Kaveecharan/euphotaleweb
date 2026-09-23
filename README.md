# EuphoTale — marketing site

A static Next.js export. No server, no database, no API calls: `npm run build`
produces an `out/` folder of plain files that any host can serve.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # → out/
```

---

## Adding the screenshots

Every phone frame on the site is a slot. Drop a portrait screenshot into
`public/shots/` named after the slot id, rebuild, and it appears — there is no
code to edit.

```
public/shots/home-feed.png
public/shots/companion-chat.png
public/shots/day-log.png
…
```

The ids are listed in [`lib/content/screenshots.js`](lib/content/screenshots.js),
and every empty frame on the running site prints the exact filename it wants.
`.png`, `.webp`, `.jpg` and `.jpeg` all work.

Keep them portrait and consistently shaped (roughly 9:19.5). The frames are a
fixed aspect ratio, so a landscape shot will letterbox. Compress them before
committing — an uncompressed phone screenshot is often 3–5 MB.

There are **seven** slots, and that is deliberate. The site used to carry a
horizontal rail of fourteen — every screen in the app — which is a tour of an
interface a visitor has no reason to study yet, at roughly two megabytes of
images. Each remaining screenshot sits beside a specific claim as the evidence
for it: the hero, one per pillar, and privacy. Before adding an eighth slot,
work out which sentence it is proving. If there isn't one, it is a slideshow.

`npm run build` prints which slots are still placeholders, so the reminder is in
the build log rather than rendered onto the live page.

---

## Where things live

| Path | What it is |
| --- | --- |
| `lib/site.js` | Brand name, domain, store links, navigation, support email. Change the app's name here and it changes everywhere. |
| `lib/content/features.js` | The use cases, the five pillars, the table-stakes line and the "what isn't here" list. |
| `lib/content/pricing.js` | Prices, plan contents and the comparison table. Mirrors `be/config/pricing.js`. |
| `lib/content/trust.js` | Privacy promises, security facts, FAQ. |
| `lib/content/screenshots.js` | The screenshot manifest. |
| `components/ui/` | Section, SectionHeading — the layout primitives every section is built from. |
| `components/sections/` | One file per section of the home page. |
| `public/.htaccess` | **All** security headers, caching and the HTTPS redirect. |

Copy lives in `lib/content/*`, never in the JSX. A feature that ships is a row
in a content file, and the page picks it up.

**In-page links are checked at build time.** Section ids live once, in
`SECTION_IDS` (`lib/site.js`). Every in-page link is built with `anchor()` and
every section renders its id through `SECTION_IDS` or `sectionId()`, both of
which throw on an id that is not declared. Rename a pillar in a content file
without updating `SECTION_IDS` and `npm run build` fails naming the bad id —
rather than shipping a nav item that scrolls nowhere.

**What a section has to earn.** A row belongs on this page only if it is
something this app does *differently*. Twelve cards for direct messages,
search, likes, comments and notifications were removed for that reason: every
app in the comparison set has all of them, so the grid occupied a screen and a
half while claiming nothing. They are now one sentence (`TABLE_STAKES`), which
is the weight the claim deserves. The same test retired `HowItWorks` — the use
cases answer "what would I do with this" from a real situation instead of an
abstract three-step diagram.

---

## Publishing the iOS app

`lib/site.js` → `STORES.ios.url`. It is `null` until the listing exists, and
every download control on the site renders "coming soon" instead of a dead
link. Fill in the URL and the whole site turns the button on.

---

## Deploying

1. `npm run build`
2. Upload the **contents** of `out/` to the webroot (`.htaccess` included — it
   is copied from `public/` automatically, and it carries the entire security
   header set).
3. Confirm HTTPS is provisioned for the domain, then check the headers landed:

```bash
curl -sI https://euphotale.com | grep -i -E 'content-security|strict-transport|x-frame'
```

If you later add an analytics script, an embedded video or a call to the API,
the `Content-Security-Policy` in `public/.htaccess` must be widened to allow it.
The browser will silently refuse it otherwise — that is the policy working.

---

## Two notes for whoever picks this up next

**There is no contact form.** The site links to the support inbox instead. The
form that used to be here posted to an endpoint that does not exist on the
EuphoTale backend, and a public unauthenticated contact endpoint is a spam surface
that has to be built and monitored. In-app support already works and arrives
with the sender's account attached.

**Almost nothing here is a client component.** The mobile menu and the currency
toggle are the only two, and the scroll reveals are pure CSS
(`animation-timeline: view()`, with a plain visible fallback). If you find
yourself adding `'use client'` to a section, check first whether the browser
already has an element that does it — `<details>` is why the FAQ needs no
JavaScript at all.
