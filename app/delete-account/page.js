import LegalPage, { Clause, List } from '@/components/legal/LegalPage';
import { BRAND } from '@/lib/site';

export const metadata = {
  title: 'Delete your account',
  description:
    'How to delete your EuphoTale account and everything in it — from inside the app, or by email if you no longer have it installed. What is erased, what is kept, and for how long.',
  alternates: { canonical: '/delete-account' },
};

/**
 * Account and data deletion.
 *
 * ── Why this page exists as a page ──────────────────────────────────────────
 *
 * Google Play requires every app that creates accounts to publish a deletion
 * route that is reachable from OUTSIDE the app, with no sign-in and no install:
 * the Data Safety declaration asks for this URL by name, and a policy that only
 * describes deletion in a clause inside the privacy policy does not satisfy it.
 * Apple's equivalent (5.1.1(v)) is satisfied by the in-app control, which
 * exists — this page is the public counterpart to it.
 *
 * It is also the honest thing to publish. Somebody who has already uninstalled
 * the app is exactly the person most likely to want their data gone, and they
 * are the one person the in-app route cannot serve.
 *
 * ── Why there is no form on it ──────────────────────────────────────────────
 *
 * A deletion form on a static site is a public, unauthenticated endpoint that
 * accepts an email address and triggers an irreversible action. It would need
 * its own verification, rate limiting and abuse monitoring before it was safe,
 * and it would still be a way to make someone else's mailbox receive deletion
 * notices. The two routes below — an authenticated control in the app, or a
 * mail to support that gets identity-checked before anything happens — are the
 * two that cannot be turned into a weapon against another person's account.
 */
export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete your account"
      intro={`You can delete your ${BRAND.name} account and everything in it at any time. This page explains both ways to do it, exactly what is erased, and what is briefly kept afterwards.`}
    >
      <Clause id="in-app" title="1. From inside the app — the fastest way">
        <p>
          Open {BRAND.name} and go to{' '}
          <strong className="font-semibold text-ink">
            Settings → Your account → Account information
          </strong>
          , then <em>Deactivate or delete your account</em> at the bottom, and choose{' '}
          <strong className="font-semibold text-ink">
            Or permanently delete your account instead
          </strong>
          .
        </p>
        <p>
          There are three steps: a reason, a code emailed to your address, and typing the word{' '}
          <strong className="font-semibold text-ink">DELETE</strong> to confirm. The emailed code is
          what makes this safe — somebody who gets hold of an unlocked phone still cannot delete an
          account without also holding the mailbox.
        </p>
        <p>
          You do not need to contact us, and you do not need to cancel your subscription first — see
          clause 6.
        </p>
      </Clause>

      <Clause id="grace-period" title="2. You have 30 days to change your mind">
        <p>
          Deletion is <strong className="font-semibold text-ink">scheduled, not instant</strong>. The
          moment you confirm it:
        </p>
        <List
          items={[
            'Your account is hidden immediately — your profile, memories, journals and albums stop being visible to anyone.',
            'For 30 days, simply signing back in cancels the deletion and restores everything exactly as it was.',
            'After 30 days it becomes permanent and cannot be recovered, by us or by anyone.',
          ]}
        />
        <p>
          The window exists because deleting a decade of your life is not a decision anyone should be
          able to make irreversibly on one bad evening. If you want it gone sooner, say so by email
          and we will bring it forward once the request is verified.
        </p>
      </Clause>

      <Clause id="by-email" title="3. If you no longer have the app installed">
        <p>
          Write to{' '}
          <a
            className="font-medium text-accent-deep underline underline-offset-4"
            href={`mailto:${BRAND.supportEmail}?subject=Account%20deletion%20request`}
          >
            {BRAND.supportEmail}
          </a>{' '}
          from the email address on the account, with the subject{' '}
          <strong className="font-semibold text-ink">Account deletion request</strong>. Include your
          username if you remember it.
        </p>
        <p>
          We confirm you control the account before deleting anything — a request that cannot be
          verified is refused rather than actioned, because an unverified deletion request is a way
          of destroying somebody else&rsquo;s account. A verified request is actioned within 30 days, and
          usually within a few days.
        </p>
      </Clause>

      <Clause id="what-is-deleted" title="4. What deletion removes">
        <p>Everything that is yours, permanently:</p>
        <List
          items={[
            'Your account, profile, username, email address and password hash.',
            'Your memories and every moment in them — photos, video, captions and dates.',
            'Your journal entries, the pages inside them, and your voice notes.',
            'Your day logs, mood ratings and mood trend.',
            'Your companion conversations and the entire memory built from them.',
            'Your direct messages, comments, likes, saves, reposts and follows.',
            'Your Moon level and its history.',
            'Your interest profile and every advertising preference attached to it.',
            'Any verification selfie still awaiting review.',
          ]}
        />
      </Clause>

      <Clause id="what-is-kept" title="5. What is not deleted, and why">
        <p>
          Three narrow things survive, and none of them identifies you to another user:
        </p>
        <List
          items={[
            'Content other people created. A message you sent someone remains in their thread, and a comment someone wrote on your memory belongs to them — deleting your account does not reach into another person’s copy of a conversation they took part in.',
            'Records we are legally required to keep, such as payment and tax records for a completed transaction. These are held by our payment processor and by us for the period the law sets, and are not used for anything else.',
            'Safety records where an account was actioned for serious abuse — kept so that a ban cannot be cleared by deleting and re-registering. This is the minimum needed to enforce it and nothing more.',
          ]}
        />
        <p>
          Ordinary backups may hold a copy for a short period before they cycle out. They are not
          searchable, are never used to restore a deleted account, and expire on their own.
        </p>
      </Clause>

      <Clause id="subscription" title="6. If you have a Pro subscription">
        <p>
          Deleting your account ends the subscription — you are not left paying for an account that
          no longer exists. Deletion does not refund the period you have already paid for; if you
          want to use Pro until the end of it, cancel first and delete when it lapses.
        </p>
        <p>
          Any AI top-up credit balance is lost on deletion. Credits are attached to the account, and
          there is no account to attach them to afterwards.
        </p>
      </Clause>

      <Clause id="deactivate" title="7. If you only want to step away">
        <p>
          <strong className="font-semibold text-ink">Deactivating is not deleting.</strong> It hides
          your profile and everything on it, stops the notifications, and keeps your data so that
          signing back in restores it exactly as you left it. Settings → Your account → Account information → Deactivate or delete your account
        </p>
        <p>
          If you are unsure, deactivate. Deactivation has no countdown attached to it; scheduled
          deletion does, and once the 30 days are up we cannot reverse it — not as a policy, but
          because the data is gone.
        </p>
      </Clause>

      <Clause id="export" title="8. Getting a copy first">
        <p>
          You can ask for a copy of your data before you delete it. Write to{' '}
          <a
            className="font-medium text-accent-deep underline underline-offset-4"
            href={`mailto:${BRAND.supportEmail}?subject=Data%20export%20request`}
          >
            {BRAND.supportEmail}
          </a>{' '}
          and we will send it within 30 days. It is worth doing this first — a decade of memories is
          not something to delete on a bad evening and regret on a better one.
        </p>
      </Clause>
    </LegalPage>
  );
}
