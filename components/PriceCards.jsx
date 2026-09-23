'use client';

import { useState } from 'react';
import { CURRENCIES, DEFAULT_CURRENCY, PLANS } from '@/lib/content/pricing';
import { GetAppButton } from '@/components/GetApp';
import { Check, Minus } from '@/components/Icon';

/**
 * The two plan cards, with a currency selector.
 *
 * Client-side for one reason: switching currency. It is a three-button toggle
 * over three constant price rows — no fetch, no geolocation guess, and no
 * pretending to know where the visitor is. The app resolves the real currency
 * at checkout from the account; this is just so someone in London is not made
 * to convert dollars in their head before they will consider paying.
 *
 * There is no monthly/yearly toggle. Both amounts are printed on the card,
 * because hiding one behind a switch is how a page ends up advertising the
 * yearly rate in monthly-looking type.
 */
export default function PriceCards() {
  const [code, setCode] = useState(DEFAULT_CURRENCY);
  const currency = CURRENCIES.find((entry) => entry.code === code) ?? CURRENCIES[0];

  return (
    <div>
      <div className="flex items-center justify-center gap-2" role="group" aria-label="Currency">
        {CURRENCIES.map((entry) => {
          const active = entry.code === currency.code;
          return (
            <button
              key={entry.code}
              type="button"
              aria-pressed={active}
              onClick={() => setCode(entry.code)}
              className={`rounded-pill px-4 py-1.5 text-[0.8125rem] font-semibold transition-colors ${
                active
                  ? 'bg-ink text-white'
                  : 'bg-raised text-ink-mute ring-1 ring-black/[0.06] hover:text-ink'
              }`}
            >
              {entry.code}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
        {PLANS.map((plan) => (
          <PlanCard key={plan.key} plan={plan} currency={currency} />
        ))}
      </div>
    </div>
  );
}

function PlanCard({ plan, currency }) {
  const paid = plan.price === 'paid';

  return (
    <div
      className={`card relative h-full p-7 sm:p-8 ${
        plan.highlight ? 'ring-1 ring-accent/25 shadow-lift' : ''
      }`}
    >
      {plan.badge ? (
        <span className="absolute -top-3 left-7 rounded-pill bg-accent-solid px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white">
          {plan.badge}
        </span>
      ) : null}

      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-mute">
        {plan.name}
      </h3>

      <p className="mt-4 flex items-baseline gap-1.5">
        {paid ? (
          <>
            <span className="font-display text-5xl leading-none text-ink">
              {currency.symbol}
              {currency.monthly}
            </span>
            <span className="text-sm text-ink-mute">/ month</span>
          </>
        ) : (
          <span className="font-display text-5xl leading-none text-ink">Free</span>
        )}
      </p>

      <p className="mt-2 text-sm text-ink-mute">
        {paid ? (
          <>
            or {currency.symbol}
            {currency.yearly} a year —{' '}
            <span className="font-semibold text-accent-deep">save {currency.savingPct}%</span>
          </>
        ) : (
          'No card, no trial, no expiry.'
        )}
      </p>

      <p className="mt-5 border-t border-hair pt-5 text-[0.9375rem] font-medium text-ink">
        {plan.tagline}
      </p>

      <ul className="mt-5 space-y-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[0.9375rem] text-ink-body">
            <span aria-hidden="true" className="mt-[0.3rem] text-accent-deep">
              <Check className="h-3.5 w-3.5" />
            </span>
            {feature}
          </li>
        ))}
        {plan.limitations.map((limitation) => (
          <li key={limitation} className="flex items-start gap-2.5 text-[0.9375rem] text-ink-mute">
            <span aria-hidden="true" className="mt-[0.3rem]">
              <Minus className="h-3.5 w-3.5" />
            </span>
            {limitation}
          </li>
        ))}
      </ul>

      {paid ? (
        <p className="mt-6 text-[0.8125rem] leading-relaxed text-ink-mute">
          Top-ups when a month runs long: {currency.symbol}
          {currency.credits[0]} or {currency.symbol}
          {currency.credits[1]}. They never expire.
        </p>
      ) : null}

      <GetAppButton
        label={plan.cta}
        variant={plan.highlight ? 'primary' : 'secondary'}
        className="mt-7 w-full"
      />
    </div>
  );
}
