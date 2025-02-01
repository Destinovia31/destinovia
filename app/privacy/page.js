export default function Page() {
  return (
    <main className="max-w-2xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-2">
        Privacy Policy for Destinovia.co
      </h1>
      <p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-sm text-center text-gray-500 mb-6"
      >
        Last updated: 29th Jan 2025
      </p>

      <section className="space-y-6">
        <PolicySection title="Information Collection and Use">
          We collect information from you when you register on our site or place
          an order. The information collected may include your name and email
          address.
        </PolicySection>

        <PolicySection title="Information Protection">
          We implement security measures to maintain the safety of your personal
          information, which is stored securely and accessed only by authorized
          personnel.
        </PolicySection>

        <PolicySection title="Cookies">
          We use cookies to enhance your experience, save preferences, and
          analyze site traffic for better services in the future.
        </PolicySection>

        <PolicySection title="Disclosure to Third Parties">
          We do not sell or trade your personal information. However, we may
          share data with trusted partners who help operate our website under
          confidentiality agreements.
        </PolicySection>

        <PolicySection title="Your Consent">
          By using our site, you consent to our privacy policy.
        </PolicySection>

        <PolicySection title="Changes to our Privacy Policy">
          Updates to this policy will be posted on this page.
        </PolicySection>

        <PolicySection title="Contact Us">
          If you have any questions regarding this privacy policy, contact us at
          Destinovia.co
        </PolicySection>
      </section>
    </main>
  );
}

function PolicySection({ title, children }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}
