import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Bridge",
  description: "Bridge dating app terms of service",
};

export default function TermsPage() {
  const lastUpdated = "February 26, 2026";

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <p>
              These Terms of Service ("Terms") govern your access to and use of Bridge, a
              dating application operated by SKW Ventures, Inc. ("Company," "we," "our,"
              or "us"). Please read these Terms carefully before using the Service. By
              creating an account or using Bridge, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Eligibility</h2>
            <p className="mb-3">
              You must be at least <strong>18 years of age</strong> to use Bridge. By using
              the Service, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>You are 18 years of age or older</li>
              <li>You have the legal capacity to enter into a binding agreement</li>
              <li>
                You are not prohibited from using the Service under applicable law or a prior
                suspension or termination by us
              </li>
              <li>
                All registration information you provide is accurate, current, and complete
              </li>
            </ul>
            <p className="mt-3">
              We reserve the right to verify your age and identity and to terminate accounts
              of users who misrepresent their eligibility.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Account Registration</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account
              credentials and for all activity that occurs under your account. You agree to
              notify us immediately at bridge.date.app@gmail.com of any unauthorized use of your
              account. You may not share your account with or transfer it to any other person.
              Each person may maintain only one active account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Acceptable Use</h2>
            <p className="mb-3">
              You agree to use Bridge only for lawful purposes and in a manner consistent with
              these Terms. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Represent yourself honestly and accurately in your profile</li>
              <li>Treat other users with respect</li>
              <li>Use the Service only for personal, non-commercial purposes</li>
              <li>Comply with all applicable local, state, and federal laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Prohibited Content and Conduct</h2>
            <p className="mb-3">You may not use Bridge to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Post false, misleading, or fraudulent information</li>
              <li>
                Harass, bully, intimidate, stalk, or threaten other users or Company
                employees
              </li>
              <li>
                Send unsolicited commercial messages, spam, or chain letters to other users
              </li>
              <li>
                Post or transmit sexually explicit content involving minors, or any content
                that exploits minors in any way
              </li>
              <li>
                Impersonate any person or entity, or falsely claim an affiliation with any
                person or entity
              </li>
              <li>
                Solicit money, financial information, or personal identifying information from
                other users
              </li>
              <li>
                Use the Service for commercial solicitation, escort services, or prostitution
              </li>
              <li>
                Attempt to gain unauthorized access to the Service, other accounts, or
                computer systems
              </li>
              <li>
                Scrape, data-mine, or use automated means to access or collect data from the
                Service
              </li>
              <li>Post content that infringes any intellectual property or privacy rights</li>
              <li>
                Engage in any conduct that restricts or inhibits any other user&apos;s enjoyment
                of the Service
              </li>
            </ul>
            <p className="mt-3">
              We reserve the right to remove any content that violates these Terms without
              notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. User Content</h2>
            <p>
              You retain ownership of content you submit to Bridge (e.g., photos, bio text).
              By submitting content, you grant SKW Ventures, Inc. a non-exclusive,
              royalty-free, worldwide license to use, store, display, and distribute that
              content solely for the purpose of operating and improving the Service. You
              represent that you own or have the rights to all content you submit, and that
              such content does not violate these Terms or any applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Account Termination
            </h2>
            <p className="mb-3">
              We may suspend or permanently terminate your account at our sole discretion,
              with or without notice, for reasons including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Violation of these Terms</li>
              <li>Conduct we determine is harmful to other users or the Service</li>
              <li>Requests by law enforcement or government authorities</li>
              <li>Extended periods of inactivity</li>
            </ul>
            <p className="mt-3">
              You may delete your account at any time through the app or by emailing
              bridge.date.app@gmail.com. Upon termination, your profile will be removed from
              public view. Certain data may be retained as required by law or for legitimate
              business purposes as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY
              KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES
              OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE
              OF HARMFUL COMPONENTS. WE MAKE NO GUARANTEES REGARDING THE ACCURACY OF USER
              PROFILES OR THE SUITABILITY OF ANY MATCH.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Limitation of Liability
            </h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, SKW VENTURES, INC. AND
              ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
              BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN
              CONNECTION WITH YOUR USE OF THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU
              EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE TWELVE MONTHS
              PRECEDING THE CLAIM OR (B) ONE HUNDRED DOLLARS ($100).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless SKW Ventures, Inc. and
              its officers, directors, employees, and agents from and against any claims,
              liabilities, damages, losses, and expenses (including reasonable attorneys&apos;
              fees) arising out of or related to your use of the Service, your violation of
              these Terms, or your violation of any rights of another person or entity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the
              State of Delaware, without regard to its conflict of law principles. Any dispute
              arising from these Terms or your use of the Service shall be resolved
              exclusively in the state or federal courts located in Delaware, and you consent
              to personal jurisdiction in those courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              11. Dispute Resolution &amp; Arbitration
            </h2>
            <p>
              For any dispute you have with SKW Ventures, Inc., you agree to first
              contact us at bridge.date.app@gmail.com and attempt to resolve the dispute
              informally. If we are unable to resolve the dispute within 30 days, either
              party may pursue binding arbitration under the rules of the American Arbitration
              Association. Class action lawsuits and class-wide arbitrations are not permitted
              under these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice
              of material changes by updating the "Last updated" date and, where appropriate,
              by sending an in-app notification or SMS. Your continued use of the Service
              after changes become effective constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">13. Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us:
            </p>
            <div className="mt-3 space-y-1 text-sm">
              <p><strong>SKW Ventures, Inc.</strong></p>
              <p>
                Email:{" "}
                <a
                  href="mailto:bridge.date.app@gmail.com"
                  className="text-blue-600 underline"
                >
                  bridge.date.app@gmail.com
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
