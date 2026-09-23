'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { GetAppButton } from '@/components/GetApp';
import { NAV_LINKS } from '@/lib/site';

// ─────────────────────────────────────────────────────────────────────────────
//  The header.
//
//  This is the ONLY client component on the marketing pages, and it exists for
//  one reason: a mobile menu needs `aria-expanded`, an Escape key, and to close
//  itself when you follow a link. A CSS-only version gets the first of those
//  and neither of the others.
//
//  Everything else here is static. The bar does not listen to scroll — it is
//  opaque from the first pixel, which is both calmer and one fewer listener
//  running on every frame of every scroll.
// ─────────────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef(null);

  // Close on Escape, and hand focus back to the control that opened it —
  // without this the keyboard lands at the top of the document instead.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    // A menu that stays open behind a resized viewport is a menu overlapping
    // the desktop layout.
    const desktop = window.matchMedia('(min-width: 768px)');
    const onBreakpoint = (event) => { if (event.matches) setOpen(false); };

    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-page/95 backdrop-blur-[6px]">
      <nav aria-label="Primary" className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-ink-mute transition-colors hover:bg-well hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <GetAppButton label="Get EuphoTale" className="px-5 py-2.5 text-sm" />
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 grid h-11 w-11 place-items-center rounded-xl text-ink transition-colors hover:bg-well md:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((wasOpen) => !wasOpen)}
          >
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-transform duration-200 ${
                  open ? 'top-[7px] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-[1.5px] w-5 bg-current transition-opacity duration-200 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-transform duration-200 ${
                  open ? 'top-[7px] -rotate-45' : 'top-[14px]'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Rendered only when open, so its links are not in the tab order of a
          closed menu — the usual bug with a max-height:0 panel. */}
      {open ? (
        <div id={panelId} className="border-t border-hair bg-page md:hidden">
          <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[0.9375rem] font-medium text-ink-body transition-colors hover:bg-well"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-hair pt-4">
              <GetAppButton label="Get EuphoTale" className="w-full" />
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
