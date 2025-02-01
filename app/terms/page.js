export default function Page() {
  return (
    <main className="max-w-2xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-2">
        Terms of Service for Destinovia.co
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
        <TermsSection title="Agreement to Terms">
          These Terms of Service constitute a legally binding agreement made
          between you, whether personally or on behalf of an entity (“you”) and
          Destinovia.co (“we,” “us” or “our”), concerning your access to and use
          of the Destinovia.co website as well as any other media form, media
          channel, mobile website or mobile application related, linked, or
          otherwise connected thereto (collectively, the “Site”).
        </TermsSection>

        <TermsSection title="User Representations">
          By using the Site, you represent and warrant that: (1) all
          registration information you submit will be true, accurate, current,
          and complete; (2) you will maintain the accuracy of such information
          and promptly update such registration information as necessary.
        </TermsSection>

        <TermsSection title="User Registration">
          You may be required to register with the Site. You agree to keep your
          password confidential and will be responsible for all use of your
          account and password.
        </TermsSection>

        <TermsSection title="Prohibited Activities">
          You may not access or use the Site for any purpose other than that for
          which we make the Site available. The Site may not be used in
          connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
        </TermsSection>

        <TermsSection title="Governing Law">
          These terms shall be governed by and defined following the laws of
          France. Destinovia.co and yourself irrevocably consent that the courts
          of France shall have exclusive jurisdiction to resolve any dispute
          which may arise in connection with these terms.
        </TermsSection>

        <TermsSection title="Contact Us">
          In order to resolve a complaint regarding the Site or to receive
          further information regarding use of the Site, please contact us at
          Destinovia.co
        </TermsSection>
      </section>
    </main>
  );
}

function TermsSection({ title, children }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}
