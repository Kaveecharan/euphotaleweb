/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─── Static HTML export ────────────────────────────────────────────────────
  // Produces an `out/` folder of plain HTML, CSS and JS. No Node runtime is
  // required on the server — the files are uploaded as they are, which is what
  // shared Apache hosting can serve.
  output: 'export',

  // ─── Build directory ───────────────────────────────────────────────────────
  // `next dev` and `next build` both own `.next/` and will fight over it —
  // running a build while a dev server is up locks `.next/trace` and the build
  // hangs with no output at all, which is an unpleasant thing to debug.
  // Setting NEXT_DIST_DIR gives a build its own scratch directory.
  //
  //   NEXT_DIST_DIR=.next-build npm run build
  //
  // NOTE — this ALSO moves the export. With `output: 'export'` the exported
  // site lands inside distDir, so that command produces `.next-build/` holding
  // index.html, _next/, sitemap.xml … and NO `out/` directory at all. Verified
  // on Next 15.5.x; an earlier comment here claimed `out/` either way, which
  // sends you looking for an empty folder.
  //
  // So: use the plain `npm run build` for anything that PUBLISHES the site —
  // CI, and the IONOS Deploy Now workflow, both of which upload `out/`. The
  // override is for running a build beside a live `next dev`, and nothing else.
  distDir: process.env.NEXT_DIST_DIR || '.next',

  // On Apache, `/about` is served as `/about/index.html`. Trailing slashes make
  // a direct URL load work with no rewrite rules at all. app/sitemap.js emits
  // the same form, so the sitemap never reports a redirect.
  trailingSlash: true,

  // The image optimiser needs a running Node server, which a static export does
  // not have. Images are served from /public as they are — which is why every
  // screenshot frame fixes its own aspect ratio rather than relying on the
  // optimiser to reserve space.
  images: { unoptimized: true },

  reactStrictMode: true,

  // Nothing reads this header but scanners, and it only ever tells them what
  // stack to look up exploits for.
  poweredByHeader: false,

  // ─── Security headers ──────────────────────────────────────────────────────
  // A `headers()` function here would do NOTHING: it runs in a Node server, and
  // this build produces static files served directly by Apache. The CSP and
  // every other security header live in `public/.htaccess`, which is copied
  // into `out/` at build time.
  //
  // If you ever add a network call, an embedded frame or a third-party script,
  // the CSP in that file has to be widened to match — the browser will refuse
  // it otherwise.
};

export default nextConfig;
