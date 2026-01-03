export const metadata = {
  title: "Privacy Policy – FreeQR | Privacy-First QR Generation",
  description:
    "Review the FreeQR Privacy Policy. Learn how we use client-side technology to ensure your data never leaves your device while using our QR generator.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-brandBlack">
            Privacy Policy
          </h1>
          <p className="text-lg text-brandGray">
            Last Updated: January 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-white border rounded-2xl p-10 space-y-8 text-gray-700 leading-relaxed shadow-sm">
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-brandBlack">1. Our Commitment to Privacy</h2>
            <p>
              FreeQR is built on the foundation of user privacy. Unlike other QR generators, we believe your data belongs to you. Our platform is designed as a <strong>client-side application</strong>, meaning the conversion of your text or URL into a QR code happens entirely within your web browser.
            </p>
          </section>

          <section className="space-y-4 border-t pt-6">
            <h2 className="text-xl font-bold text-brandBlack">2. Data Collection & Usage</h2>
            <p>
              We do not collect, store, or process any personal data entered into our generator fields. Whether you are creating a UPI payment code, a WiFi password code, or a vCard:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>No data is transmitted to our servers.</li>
              <li>No logs are kept of the content you encode.</li>
              <li>No registration or email signup is required to use our core services.</li>
            </ul>
          </section>

          {/* CRITICAL FOR ADSENSE APPROVAL */}
          <section className="space-y-4 border-t pt-6 bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-bold text-brandBlack">3. Google AdSense and Third-Party Cookies</h2>
            <p>
              FreeQR uses third-party advertising companies to serve ads when you visit our website. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google AdSense:</strong> Google, as a third-party vendor, uses cookies to serve ads on FreeQR.</li>
              <li><strong>DART Cookie:</strong> Google’s use of the DART cookie enables it to serve ads to our users based on their visit to FreeQR and other sites on the Internet.</li>
              <li><strong>Opt-out:</strong> Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.</li>
            </ul>
          </section>

          <section className="space-y-4 border-t pt-6">
            <h2 className="text-xl font-bold text-brandBlack">4. Log Files</h2>
            <p>
              Like many other Web sites, FreeQR makes use of log files. These files merely log visitors to the site—usually a standard procedure for hosting companies and a part of hosting services' analytics. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, and referring/exit pages. This information is used to analyze trends and administer the site, and is <strong>not linked</strong> to any information that is personally identifiable.
            </p>
          </section>

          <section className="space-y-4 border-t pt-6">
            <h2 className="text-xl font-bold text-brandBlack">5. Consent</h2>
            <p>
              By using our website, you hereby consent to our privacy policy and agree to its terms. This policy may be updated periodically to reflect changes in our service or legal requirements.
            </p>
          </section>

        </div>

        {/* Footer note */}
        <p className="text-xs text-center text-gray-500">
          For any further clarification regarding our privacy practices, please reach out via our 
          <a href="/contact" className="text-brandBlack font-bold underline ml-1">Contact Page</a>.
        </p>

      </div>
    </section>
  );
}