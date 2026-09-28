import LegalPage, { Clause, List } from '@/components/legal/LegalPage';
import { BRAND } from '@/lib/site';

export const metadata = {
  title: 'Child safety standards',
  description:
    'EuphoTale’s standards against child sexual abuse and exploitation: what is prohibited, how it is prevented and reported, what we do about it, and who to contact.',
  alternates: { canonical: '/child-safety' },
};

/**
 * Child safety standards.
 *
 * Google Play requires every social app to publish standards against child
 * sexual abuse and exploitation (CSAE) at a public URL, name the app, and give
 * a point of contact — the Play Console asks for this page by URL. It is also
 * the page a parent, a researcher or an authority should be able to find
 * without an account.
 *
 * Every control described here exists in the product: the birthday check
 * (settings.service checkDateOfBirthChange), the automatic text filter
 * (be/utils/objectionable.js), the "Child safety" report reason, which skips the
 * report threshold (be/utils/reportReasons.js), and blocking. Keep it that way —
 * a safety page that describes a control the app does not have is worse than a
 * shorter one.
 */
export default function ChildSafetyPage() {
  const mail = (subject) =>
    `mailto:${BRAND.supportEmail}?subject=${encodeURIComponent(subject)}`;

  return (
    <LegalPage
      title="Child safety standards"
      intro={`${BRAND.name} has zero tolerance for child sexual abuse and exploitation. These are the standards the app is run to, and they apply to every account, every post and every message.`}
    >
      <Clause id="prohibited" title="1. What is prohibited">
        <p>Anywhere in {BRAND.name}, including private messages:</p>
        <List
          items={[
            'Child sexual abuse material of any kind — photographs, video, drawings, animation or AI-generated imagery — and any request for it, offer of it or link to it.',
            'Grooming: building contact with a child in order to abuse or exploit them.',
            'Sexualising a child in words or images, including comments on an otherwise ordinary photo.',
            'Sextortion, and any threat or pressure aimed at getting sexual images from a child.',
            'Trafficking, or arranging to meet a child for sexual purposes.',
          ]}
        />
        <p>
          Breaking this rule closes the account for good, and the material is reported to the
          authorities as described in section 5.
        </p>
      </Clause>

      <Clause id="age" title="2. Who can use EuphoTale">
        <p>
          {BRAND.name} is for people aged 13 and over. Everyone is asked their date of birth before
          they can use the app, and it cannot be changed afterwards except through support. An
          account whose holder gives a date under 13 is closed at once and deleted, with everything
          it holds, 30 days later. Nobody under 18 is shown personalised advertising.
        </p>
      </Clause>

      <Clause id="prevention" title="3. How it is prevented">
        <List
          items={[
            'Captions, titles, comments, bios and names are checked automatically before they are posted, and anything containing language used to trade or request child sexual abuse material is refused.',
            'An account can be asked to confirm it belongs to a real person, by a photo that is reviewed by a person, before it can post or comment.',
            'Anyone can block an account. A block works in both directions and cuts off messages, comments and shared memories at once.',
          ]}
        />
      </Clause>

      <Clause id="report" title="4. How to report">
        <p>
          In the app, tap <strong className="font-semibold text-ink">Report</strong> on any post,
          memory, comment, message or profile and choose{' '}
          <strong className="font-semibold text-ink">Child safety</strong>. On a profile you can
          also choose <strong className="font-semibold text-ink">They may be under the age of 13</strong>.
        </p>
        <p>
          Without the app, or to reach us directly, write to{' '}
          <a
            className="font-medium text-accent-deep underline underline-offset-4"
            href={mail('Child safety report')}
          >
            {BRAND.supportEmail}
          </a>{' '}
          with the subject <strong className="font-semibold text-ink">Child safety report</strong>.
          Do not attach or forward the material itself — describe where it is, and we will find it.
        </p>
        <p>
          If a child is in immediate danger, contact your local police or emergency number first.
        </p>
      </Clause>

      <Clause id="response" title="5. What we do">
        <List
          items={[
            'A child-safety report skips the queue: one report is enough to put it in front of a person, rather than waiting for several.',
            'Material that breaks these standards is removed, and the account responsible is closed.',
            'Apparent child sexual abuse material is reported to the National Center for Missing & Exploited Children (NCMEC) or to the relevant national authority, as the law requires.',
            'Evidence is preserved for the authorities rather than deleted with the account, and we cooperate with law-enforcement requests made through proper legal process.',
          ]}
        />
      </Clause>

      <Clause id="contact" title="6. Child safety contact">
        <p>
          Questions about these standards, or about how {BRAND.name} prevents and responds to child
          sexual abuse and exploitation, go to{' '}
          <a
            className="font-medium text-accent-deep underline underline-offset-4"
            href={mail('Child safety')}
          >
            {BRAND.supportEmail}
          </a>
          , subject <strong className="font-semibold text-ink">Child safety</strong>. They are read
          by the person responsible for safety at {BRAND.legalName}.
        </p>
      </Clause>
    </LegalPage>
  );
}
