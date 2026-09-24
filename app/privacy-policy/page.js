import LegalPage, { Clause, List, Term } from '@/components/legal/LegalPage';
import { BRAND } from '@/lib/site';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'What EuphoTale collects, why, who processes it, and the rights you have over it — including your companion memory, day logs and advertising choices.',
  alternates: { canonical: '/privacy-policy' },
};

/**
 * The privacy policy.
 *
 * Written against what the product ACTUALLY does, clause by clause: the
 * companion's permanent memory, the processors that see your data, the
 * consent-based interest profiling and the categories it can never infer.
 *
 * Two disclosures here are the ones a generic template always omits and a
 * regulator always asks about — that companion conversations are processed by
 * a third-party model provider, and exactly which special categories are
 * excluded from advertising. Both are stated plainly and early.
 *
 * This is a factual description of the system, not legal advice. Have counsel
 * review it before launch in a regulated market.
 */
export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This policy explains what ${BRAND.name} collects, why, who else is involved in processing it, and what you can do about all of it. It covers the mobile app and this website.`}
    >
      <Clause id="what-we-collect" title="1. What we collect">
        <Term label="Account information">
          Your name, username, email address and a hashed password. Optionally a phone number,
          profile photo, bio and date of birth. If you sign in with Google we receive your name,
          email address and profile picture from that sign-in — never your Google password. If you
          sign in with Apple we receive the name and email address you choose to share, which may be
          a private relay address Apple creates for you — never your Apple ID password.
        </Term>
        <Term label="What you create">
          Memories and the moments inside them, photos and video, journal entries, voice notes,
          captions, comments, tags, hashtags and direct messages, along with who each thing is
          visible to.
        </Term>
        <Term label="Check-ins and feelings">
          Your daily check-ins — the feelings you pick, the 0–10 rating and any note — and the
          emotion ratings you attach to journal entries or memories.
        </Term>
        <Term label="Companion conversations">
          What you say to your companion — typed, or spoken and turned into text — its replies, and
          the understanding built from them: short statements about your life, each linked to the
          words of yours it came from.
        </Term>
        <Term label="Verification">
          If you are asked to confirm you are a real person, the selfie you submit and the outcome of
          that review.
        </Term>
        <Term label="Device and security data">
          Device type, app version, IP address, session tokens, push notification tokens and sign-in
          events. These are what make sessions revocable and abuse detectable.
        </Term>
        <Term label="Payment data">
          Your subscription status, plan and renewal dates. Card details are handled entirely by the
          payment processor — Stripe, or the app store you subscribed through — and never reach{' '}
          {BRAND.name}. We receive confirmation that a payment succeeded, not the instrument that
          made it.
        </Term>
        <Term label="Support messages">
          What you write to support, and the account details attached to it.
        </Term>
        <Term label="Advertising, on the free plan only">
          Free accounts see ads supplied by Google AdMob, which is a third-party advertising SDK
          inside the app. To serve them, Google may read your device&rsquo;s advertising identifier
          and use it to measure and personalise advertising, including across other apps.
          {' '}
          {BRAND.name} does not receive that identifier and does not build an advertising profile
          from anything you write, post or record.
          {' '}
          You are asked before this begins: in the UK and EU a consent form appears first, and on
          iOS the system tracking prompt appears as well. Declining keeps the ads non-personalised
          and changes nothing else about the app. Pro accounts are ad-free, and the advertising SDK
          is never started for them at all.
        </Term>
      </Clause>

      <Clause id="never-collect" title="2. What we never collect">
        <p>
          A privacy policy that only lists what is taken tells you half of what you need. These are
          the things {BRAND.name} does not collect at all, and could not hand over if it were asked:
        </p>
        <List
          items={[
            'No precise location. We never ask for GPS. Your approximate country is inferred from your IP address for currency and legal purposes, and that is the extent of it.',
            'No contact list, no photo library scanning, and no microphone access outside a voice note or spoken message you deliberately record.',
            'No data brokers. Nothing you write, post or record is sold, and no advertising profile is built from the content of your memories, journals or messages.',
            'No biometric identifiers. A verification selfie is looked at by a person and deleted; no faceprint or template is computed from it, and it is never used to identify you again.',
            'No profile of anyone who does not have an account.',
          ]}
        />
      </Clause>

      <Clause id="how-we-use-it" title="3. Why we use it">
        <p>We process your information to:</p>
        <List
          items={[
            'Run the app — store what you create, show it to exactly the people you chose, and deliver messages and notifications.',
            'Provide the companion, including building and maintaining the memory that makes it able to remember you across conversations.',
            'Keep accounts secure: authentication, session management, rate limiting, bot prevention and abuse investigation.',
            'Take payment and manage subscriptions and refunds.',
            'Answer support requests.',
            'Show advertising on the free plan, and — only where you have agreed to it — make that advertising relevant.',
            'Understand aggregate usage so the product can be improved. Aggregate means counts, never a profile of you.',
          ]}
        />
        <p>
          Where the law requires a legal basis, ours are: performing our contract with you (running
          the app and your subscription), our legitimate interests (security, abuse prevention,
          aggregate product analytics), your consent (personalised advertising, and any optional
          permission such as notifications), and legal obligation where one applies.
        </p>
      </Clause>

      <Clause id="companion" title="4. Your companion, and its memory">
        <p>
          The companion builds a lasting understanding of your life from what you tell it and from
          your check-ins. Each remembered statement is linked to the words of yours it came from —
          that is what stops it inventing things — and when something about you changes, the earlier
          version is kept as history rather than deleted.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            Conversations are processed by a third-party model provider.
          </strong>{' '}
          To generate a reply, the relevant part of your conversation and the memory it draws on are
          sent to OpenAI, which processes them on our behalf under its API terms and does not use
          them to train its models. OpenAI also turns a spoken message into text, and reads the
          note on a daily check-in so your companion can remember how your day went. Nothing about
          your companion is shown to other users, posted anywhere, or used to target advertising.
        </p>
        <p>
          <strong className="font-semibold text-ink">None of this happens until you agree.</strong>{' '}
          The first time you open the companion, the app tells you what is sent to OpenAI and asks
          for your permission. Until you give it, nothing you write, say or record — including
          check-in notes — is sent.
        </p>
        <p>
          You can delete any conversation from inside the app. Deleting your account removes your
          companion memory along with everything else.
        </p>
      </Clause>

      <Clause id="advertising" title="5. Advertising and interest profiling">
        <p>
          The free plan shows ads, served by Google AdMob as described in section 1. Pro removes them
          entirely. The interest profile {BRAND.name} itself keeps is first-party and on-platform:
          interests are inferred only from what you do inside {BRAND.name} — the tags on things you
          like, save, repost, comment on or search for — and none of it is passed to Google.
        </p>
        <p>What this never involves, at any point:</p>
        <List
          items={[
            'No tracking pixel on other websites and no SDK inside other apps.',
            'No purchase of data about you from data brokers, and no contact-list upload.',
            'No profile of anyone who does not have an account.',
            'No inference of health, religion, politics, ethnicity, sexuality or trade-union membership — these can never become an interest, whatever you engage with.',
            'No use of your day logs, emotion ratings, journal entries or companion conversations.',
            'No interest profiling of anyone under 18. An account with no verified date of birth is treated as under 18.',
          ]}
        />
        <p>
          Personalised advertising is opt-in wherever consent is legally required, and can be
          switched off everywhere else, from Settings → Ad preferences. Turning it off does not
          remove ads on the free plan; it makes them non-personalised, including the ads Google
          serves. Accounts under 18, or without a verified date of birth, only ever receive
          non-personalised ads. Where Google&rsquo;s consent form applies, you can review or change
          your choices on it from the same screen. Advertisers never receive your identity —
          targeting only reaches groups above a minimum size, so a single person can never be
          singled out.
        </p>
      </Clause>

      <Clause id="who-else" title="6. Who else processes your data">
        <p>
          We use a small number of processors, each for one job, each bound to use your data only on
          our instructions:
        </p>
        <List
          items={[
            'Stripe — payments, subscriptions and card handling on the web.',
            'Apple and Google — payments and subscriptions bought inside the mobile apps, which the app stores require to be handled by them.',
            'Google AdMob — serving ads on the free plan.',
            'OpenAI — generating companion replies, transcribing spoken messages, and the memory derived from them — only once you have agreed in the app.',
            'Cloudflare (R2) — storing and delivering photos, video and voice notes.',
            'Cloudinary — holding a verification selfie privately until it has been reviewed and deleted.',
            'Brevo — transactional email such as verification codes and billing notices.',
            'Expo — delivering push notifications to your device.',
            'Cloudflare Turnstile — confirming that sign-ups and sensitive forms are not automated.',
            'Our hosting and database providers, which run the service itself.',
          ]}
        />
        <p>
          We do not sell your personal information, and we do not share it with data brokers.
          Apart from Google AdMob on the free plan, as described in section 1, we do not share it
          with advertising networks. We disclose data to authorities only where legally compelled, and we
          look at whether the demand is valid before we do.
        </p>
      </Clause>

      <Clause id="retention" title="7. How long we keep things">
        <List
          items={[
            'What you create stays until you delete it, or until you delete your account.',
            'Companion memory is kept for as long as your account exists, so that it can remember you. Individual conversations can be deleted at any time.',
            'Verification selfies are deleted once the review is complete — they are not kept as a record.',
            'Security and sign-in logs are kept for a limited period for abuse investigation, then discarded.',
            'Interest profiles expire on their own if you stop engaging, and are erased when you delete your account.',
            'Deactivating hides your account and keeps your data indefinitely, so you can come back.',
            'Deleting hides your account at once and erases it after a 30-day grace period. Signing back in inside those 30 days cancels the deletion and restores everything; after them it is permanent.',
            'Records we must keep by law — payment and tax records for a completed transaction — are kept for the period the law sets and used for nothing else.',
          ]}
        />
      </Clause>

      <Clause id="your-rights" title="8. Your rights">
        <p>Depending on where you live, you can:</p>
        <List
          items={[
            'Get a copy of the personal data we hold about you.',
            'Correct anything inaccurate — most of it you can edit directly in the app.',
            'Delete your account and everything in it, permanently — from inside the app, or by email if you no longer have it installed.',
            'Object to processing based on legitimate interests, and withdraw any consent you have given, including for personalised advertising.',
            'Ask us to restrict processing while a dispute is resolved.',
            'Complain to your local data protection authority.',
          ]}
        />
        <p>
          <strong className="font-semibold text-ink">Decisions about your account are made by people.</strong>{' '}
          Nothing here suspends, limits or removes an account automatically: reports are read by a
          reviewer, and rate limits and bot checks slow an action down rather than deciding anything
          about you. You are told when a decision affects your account and you can contest it.
        </p>
        <p>
          When you report a comment, a message or an account, a copy of what you reported is kept with
          the report so a reviewer can see it even if it is later deleted. For a direct message that
          includes the message and the few before it in that conversation. The person you report is
          never told who reported them.
        </p>
        <p>
          Deleting your account has a page of its own —{' '}
          <a
            className="font-medium text-accent-deep underline underline-offset-4"
            href="/delete-account"
          >
            how to delete your account
          </a>{' '}
          — including the route for people who have already uninstalled the app.
        </p>
        <p>
          Most of these are immediate in Settings. For anything else, write to{' '}
          <a
            className="font-medium text-accent-deep underline underline-offset-4"
            href={`mailto:${BRAND.supportEmail}`}
          >
            {BRAND.supportEmail}
          </a>
          . We answer within 30 days.
        </p>
      </Clause>

      <Clause id="security" title="9. Security">
        <p>
          Passwords are hashed with bcrypt and never stored or logged in readable form. Sessions can
          be revoked, and changing your password signs your other devices out. Sensitive actions are
          rate-limited and bot-checked. Uploads are type-checked and size-capped before storage.
          Every read of a message, memory or profile re-checks permission at the point of access
          rather than trusting an earlier check.
        </p>
        <p>
          No system is perfectly secure. If a breach affects you, we will tell you and the relevant
          authority within the time the law requires.
        </p>
      </Clause>

      <Clause id="children" title="10. Children">
        <p>
          {BRAND.name} is not intended for children under 13, and we do not knowingly create accounts
          for them. Where the law where you live sets a higher age for consenting to data processing
          — 16 in several countries — that age applies instead.
        </p>
        <p>
          Nobody under 18 is interest-profiled or targeted with personalised advertising, and an
          account with no verified date of birth is treated as under 18 for that purpose. If you
          believe a child has an account, write to us and we will remove it and erase what it holds.
        </p>
      </Clause>

      <Clause id="transfers" title="11. International transfers">
        <p>
          Our processors operate in several countries, including the United States. Where data leaves
          your region we rely on the safeguards those transfers require, such as standard contractual
          clauses.
        </p>
      </Clause>

      <Clause id="changes" title="12. Changes to this policy">
        <p>
          If this policy changes in a way that affects you, we will say so in the app before the
          change takes effect rather than silently updating the date at the top.
        </p>
      </Clause>

      <Clause id="contact" title="13. Who we are, and how to reach us">
        <p>
          {BRAND.legalName} is the data controller for the information described in this policy —
          the party that decides why it is collected and what happens to it.
          {BRAND.legalAddress ? ` Our registered address is ${BRAND.legalAddress}.` : ''}
        </p>
        <p>
          Questions about this policy, or about your data:{' '}
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
