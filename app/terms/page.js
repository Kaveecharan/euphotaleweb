import LegalPage, { Clause, List } from '@/components/legal/LegalPage';
import { BRAND } from '@/lib/site';

export const metadata = {
  title: 'Terms of Service',
  description:
    'The agreement for using EuphoTale: your account, your content, acceptable use, the companion, subscriptions and cancellation.',
  alternates: { canonical: '/terms' },
};

/**
 * Terms of service.
 *
 * Written to be readable, because terms nobody can read are terms nobody has
 * agreed to in any meaningful sense. Every clause describes something the
 * product actually does — the verification timeline, the free tier's limits,
 * the credit balance surviving cancellation — rather than reserving rights we
 * do not use.
 *
 * This is a plain-language description of the agreement, not legal advice. Have
 * counsel review it before launch.
 */
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={`These terms are the agreement between you and ${BRAND.name} for using the app and this website. Using ${BRAND.name} means you accept them.`}
    >
      <Clause id="eligibility" title="1. Who can use EuphoTale">
        <p>
          You must be at least 13 years old. Where the law where you live sets a higher minimum for
          agreeing to terms like these, or for consenting to the processing of your data — 16 in
          several countries — that higher age applies to you instead.
        </p>
        <p>
          One person, one account. You are responsible for keeping your password and your device
          secure, and for everything done through your account. Nobody under 18 is shown
          personalised advertising or included in any interest profile, whatever they engage with.
        </p>
        <p>
          If we learn that an account belongs to someone below the minimum age, we remove it.
        </p>
      </Clause>

      <Clause id="your-content" title="2. Your content stays yours">
        <p>
          You own everything you create here — your memories, photos, video, journal entries, voice
          notes and messages. You give us only the permission needed to run the service: to store
          your content, process it (for example resizing a photo), and show it to the people you have
          chosen to show it to. Nothing more.
        </p>
        <p>
          We do not use your content to train AI models, and we do not license it to anyone else.
          When you delete something it is removed from the service; ordinary backups may retain a
          copy briefly before they cycle out.
        </p>
        <p>
          Content you make public, or share with another person, may be seen and remembered by them.
          Privacy controls decide who can see something — they cannot un-see it afterwards.
        </p>
      </Clause>

      <Clause id="acceptable-use" title="3. Acceptable use">
        <p>Do not use {BRAND.name} to:</p>
        <List
          items={[
            'Post content that is illegal, sexually exploitative of anyone, or that depicts or promotes serious harm.',
            'Harass, threaten, impersonate or stalk another person.',
            'Share someone else’s private information, images or messages without their agreement.',
            'Run bots, scrape the service, create accounts in bulk, or evade a block, suspension or ban.',
            'Attack the service — attempt to break authentication, exhaust resources, or access data that is not yours.',
            'Post spam, scams, or advertising you were not authorised to place.',
          ]}
        />
        <p>
          <strong className="font-semibold text-ink">
            There is no tolerance for objectionable content or abusive users.
          </strong>{' '}
          Content can be reported from anywhere it appears, in twelve categories, and any account can
          be blocked, muted or hidden by you directly and immediately.
        </p>
        <p>
          Reports are read by a person, not decided by a machine. Child safety, threats to life and
          self-harm skip the queue entirely and reach a reviewer on the first report rather than
          waiting for a threshold. We act on reports of objectionable content within 24 hours of
          receiving them — removing the content, and removing the account behind it where that is
          warranted. Where a decision affects your account you are told what happened and can contest
          it.
        </p>
        <p>
          Blocking someone is absolute and works in both directions: it severs shared memories, stops
          messages, and removes each of you from the other&rsquo;s feed, search and profile.
        </p>
      </Clause>

      <Clause id="verification" title="4. Confirming you are a real person">
        <p>
          To keep automated accounts out, we may ask you to confirm there is a person behind your
          account by submitting a selfie for review. This is never required when you sign up. If it
          is required and not completed, posting, commenting, following and messaging stop first,
          reading continues, and the account is eventually suspended — with warning at every stage,
          and recoverable until the last one. This has nothing to do with any public verification
          badge.
        </p>
      </Clause>

      <Clause id="companion" title="5. The companion">
        <p>
          The companion is software. It is not a person, not a doctor and not a licensed therapist,
          counsellor or clinician of any kind. The Guide voice is a way of talking, not a credential
          and not a course of treatment, and it will tell you so if you ask. Nothing it says is
          medical, legal, financial or professional advice, and nothing it says is therapy.
        </p>
        <p>
          It is built to be accurate about your life and to refuse to invent things, but it can still
          be wrong. Do not rely on it for decisions that matter without checking.
        </p>
        <p>
          <strong className="font-semibold text-ink">If you are in crisis</strong>, contact your local
          emergency services or a crisis line. The companion will say the same thing, and it will stop
          everything else to say it.
        </p>
        <p>
          If the companion ever says something harmful, offensive or plainly wrong about you, tap{' '}
          <strong className="font-semibold text-ink">Report</strong> under the reply — it opens a
          report to us with the reply already quoted, without leaving the app — or write to us
          at{' '}
          <a
            className="font-medium text-accent-deep underline underline-offset-4"
            href={`mailto:${BRAND.supportEmail}?subject=Companion%20reply%20report`}
          >
            {BRAND.supportEmail}
          </a>
          . Companion output is private to your conversation, so it is never reported by anyone else
          on your behalf — if you do not tell us, nobody can.
        </p>
      </Clause>

      <Clause id="plans" title="6. Plans and billing">
        <List
          items={[
            'The free plan is free, permanently, and is not a trial of anything. It includes the friend companion, up to 5 replies a day and 150 a month; no payment method is required and nothing begins billing on its own.',
            'Pro is billed monthly or yearly, in advance, and renews automatically at the same price until you cancel. The period, the price and the renewal date are all shown before you pay. Billing starts when you subscribe — there is no free trial period.',
            'Pro removes the daily reply limit, adds the Guide companion, and raises the monthly allowance to 1,200 replies along with the depth of conversation the companion keeps in mind.',
            'Cancel any time. Cancelling stops the next charge and leaves Pro active until the end of the period you have already paid for; there is no partial refund for cancelling mid-period.',
            'AI top-up credits are a balance you own. They do not expire monthly and remain usable if your subscription later ends. Buying more requires an active Pro subscription.',
            'Prices are shown before you pay, in your local currency where supported. Taxes may be added at checkout.',
          ]}
        />
        <p>
          <strong className="font-semibold text-ink">Where you subscribed decides who bills you.</strong>{' '}
          A subscription bought through an app store is charged by that store, renews under that
          store&rsquo;s rules, and is cancelled or refunded in your store account settings rather than
          here — including the store&rsquo;s own requirement to cancel at least 24 hours before a
          period ends to avoid the next charge. A subscription bought through our own checkout is
          processed by Stripe, and cancelled from inside the app. Refunds follow the rules of
          whichever of those you used, plus any statutory right you have.
        </p>
        <p>
          If a payment fails we may pause Pro features. Your content is never deleted because of a
          failed payment — everything you have kept stays available on the free plan.
        </p>
      </Clause>

      <Clause id="ads" title="7. Advertising">
        <p>
          The free plan shows advertising. Whether it is personalised is your choice, and you can
          change it at any time in Settings. Pro removes advertising entirely. See the{' '}
          <a
            className="font-medium text-accent-deep underline underline-offset-4"
            href="/privacy-policy#advertising"
          >
            Privacy Policy
          </a>{' '}
          for exactly what can and cannot be inferred about you.
        </p>
      </Clause>

      <Clause id="availability" title="8. Availability and changes">
        <p>
          We work to keep {BRAND.name} available and will give notice of planned downtime where we
          can, but the service is provided as it is, without a guarantee of uninterrupted operation.
          Features may change; where a change removes something you rely on, we will say so in the
          app rather than let you discover it.
        </p>
      </Clause>

      <Clause id="ending" title="9. Ending the agreement">
        <p>
          You can deactivate or delete your account at any time. Deactivating hides your account and
          keeps your data, indefinitely, so signing back in restores it.
        </p>
        <p>
          Deleting is <strong className="font-semibold text-ink">scheduled, not immediate</strong>:
          your account is hidden at once, and for 30 days signing back in cancels the deletion and
          restores everything. After 30 days it is permanent, and your account, your content and your
          companion memory are gone. Full detail, including how to delete if you no longer have the
          app installed, is on the{' '}
          <a
            className="font-medium text-accent-deep underline underline-offset-4"
            href="/delete-account"
          >
            account deletion page
          </a>
          .
        </p>
        <p>
          We may suspend or end an account that seriously or repeatedly breaks these terms, or where
          we are required to. Except where the law or a safety risk prevents it, we will tell you why.
        </p>
      </Clause>

      <Clause id="liability" title="10. Liability">
        <p>
          To the extent the law allows, {BRAND.name} is not liable for indirect or consequential loss,
          lost profits, or lost data beyond what we could reasonably have prevented. Nothing here
          limits liability for death or personal injury caused by negligence, for fraud, or for
          anything else that cannot lawfully be limited.
        </p>
        <p>
          Keep your own copies of anything you could not bear to lose. We take durability seriously,
          and a single copy of anything is still a single copy.
        </p>
      </Clause>

      <Clause id="general" title="11. General">
        <p>
          If a clause here is unenforceable, the rest continues to apply. Not enforcing something
          immediately does not waive it. These terms, together with the Privacy Policy, are the whole
          agreement between us about {BRAND.name}.
        </p>
        <p>
          We will post material changes in the app before they take effect. Continuing to use{' '}
          {BRAND.name} after that means you accept them.
        </p>
        {/* Rendered only once BRAND.legalJurisdiction is set in lib/site.js.
            A governing-law clause naming the wrong forum is worse than no
            clause at all, so this stays silent rather than guessing. */}
        {BRAND.legalJurisdiction ? (
          <p>
            These terms are governed by {BRAND.legalJurisdiction}. Nothing here removes a
            mandatory consumer-protection right you have where you live, or your ability to
            bring a claim in your local courts where the law gives you that right.
          </p>
        ) : null}
      </Clause>

      <Clause id="contact" title="12. Contact">
        <p>
          These terms are between you and {BRAND.legalName}
          {BRAND.legalAddress ? `, ${BRAND.legalAddress}` : ''}.
        </p>
        <p>
          Anything about these terms:{' '}
          <a
            className="font-medium text-accent-deep underline underline-offset-4"
            href={`mailto:${BRAND.supportEmail}`}
          >
            {BRAND.supportEmail}
          </a>
          .
        </p>
      </Clause>
    </LegalPage>
  );
}
