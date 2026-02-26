import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Bridge",
  description: "Bridge dating app privacy policy",
};

export default function PrivacyPage() {
  const lastUpdated = "February 26, 2026";

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <p>
              Bridge ("we," "our," or "us") is operated by SKW Ventures, Inc.. This Privacy
              Policy explains how we collect, use, disclose, and protect your personal information
              when you use our mobile application and services (collectively, the "Service"). By
              using Bridge, you agree to the practices described in this policy.
            </p>
          </section>

          {/* SMS / Phone Number — prominent for 10DLC compliance */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              SMS Messaging &amp; Phone Number Use
            </h2>
            <p className="mb-3">
              <strong>We collect your phone number for identity verification and to send
              account-related SMS messages.</strong> By providing your phone number and creating
              an account, you consent to receive SMS messages from Bridge for purposes including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>One-time verification codes (OTPs) to confirm your identity</li>
              <li>Account security alerts (e.g., new device sign-ins)</li>
              <li>Important account and service notifications</li>
            </ul>
            <p className="mt-3">
              <strong>We do not share your phone number with third parties for marketing
              purposes.</strong> Your phone number is used solely for account verification and
              essential service communications. Message and data rates may apply. You can opt
              out of non-essential SMS messages at any time by replying STOP to any message or
              by contacting us at bridge.date.app@gmail.com. Opting out of verification messages
              may limit your ability to use certain features of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
            <p className="mb-3">We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Identity information:</strong> name, date of birth, and age</li>
              <li><strong>Contact information:</strong> phone number and email address</li>
              <li><strong>Profile information:</strong> photos, bio, and dating preferences</li>
              <li>
                <strong>Location information:</strong> approximate location to show you nearby
                users (collected only when you grant permission)
              </li>
              <li>
                <strong>Usage data:</strong> how you interact with the app, features used, and
                actions taken
              </li>
              <li>
                <strong>Device information:</strong> device type, operating system, and app
                version
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Create and maintain your account</li>
              <li>Verify your identity via SMS one-time codes</li>
              <li>Show you potential matches based on location and preferences</li>
              <li>Send account-related SMS and push notifications</li>
              <li>Prevent fraud, abuse, and violations of our Terms of Service</li>
              <li>Improve the Service through analytics and user feedback</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              How We Store and Protect Your Data
            </h2>
            <p className="mb-3">
              Your data is stored on secure servers provided by Supabase, which employs
              industry-standard encryption at rest and in transit (TLS/SSL). We implement
              appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p>
              Photos are stored in encrypted object storage. Location data is stored as an
              approximate geographic region and is not retained beyond your active session.
              We retain your account data for as long as your account is active or as needed
              to provide the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Third-Party Services
            </h2>
            <p className="mb-3">
              We use the following third-party services to operate Bridge. These providers
              may process your data solely on our behalf and in accordance with our instructions:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Twilio</strong> — SMS message delivery for verification codes and
                account notifications. Twilio receives your phone number to route messages
                and does not use it for independent marketing purposes.
              </li>
              <li>
                <strong>Supabase</strong> — database and file storage infrastructure
              </li>
              <li>
                <strong>Vercel</strong> — application hosting and content delivery
              </li>
            </ul>
            <p className="mt-3">
              We do not sell your personal data to third parties. We do not share your phone
              number or other personal information with advertisers or data brokers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h2>
            <p>
              Our web presence uses cookies and similar tracking technologies to maintain
              session state and analyze traffic. You can control cookie settings through your
              browser preferences. Disabling cookies may affect the functionality of certain
              features. Our mobile app does not use browser cookies but may use local storage
              for session management.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Children&apos;s Privacy</h2>
            <p>
              Bridge is intended for users who are 18 years of age or older. We do not
              knowingly collect personal information from anyone under 13. If we become
              aware that a person under 13 has provided us with personal information, we will
              delete that information immediately. If you believe a minor has created an
              account, please contact us at bridge.date.app@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Rights &amp; Data Deletion</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your account and associated data</li>
              <li>Withdraw consent for SMS communications (reply STOP to any message)</li>
              <li>Port your data to another service where technically feasible</li>
            </ul>
            <p className="mt-3">
              To request data deletion or exercise any of the above rights, email us at{" "}
              <a
                href="mailto:bridge.date.app@gmail.com"
                className="text-blue-600 underline"
              >
                bridge.date.app@gmail.com
              </a>{" "}
              with the subject line "Data Deletion Request." We will process your request
              within 30 days and confirm when your data has been removed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              material changes by sending an SMS or push notification and by updating the
              "Last updated" date at the top of this page. Continued use of the Service after
              changes become effective constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us:
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
