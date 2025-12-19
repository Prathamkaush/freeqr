export const metadata = {
  title: "Privacy Policy – FreeQR",
  description:
    "Read FreeQR's privacy policy to understand how your data is handled and protected.",
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
            Your privacy is important to us.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white border rounded-2xl p-8 space-y-6 text-gray-700 text-sm leading-relaxed">

          <p>
            FreeQR is designed with privacy in mind. We do not collect, store,
            or process any personal data entered while using the QR code generator.
          </p>

          <p>
            All QR codes are generated locally in your browser. The data you enter
            is never sent to our servers and is not saved or logged in any form.
          </p>

          <p>
            FreeQR does not require user accounts, registrations, or logins.
            You can use the service freely without providing personal information.
          </p>

          <p>
            Like most websites, FreeQR may use third-party services such as analytics
            or advertising platforms to understand general traffic patterns and
            improve the service. These third parties may use cookies in accordance
            with their own privacy policies.
          </p>

          <p>
            By using FreeQR, you agree to this Privacy Policy. This policy may be
            updated occasionally to reflect changes in technology or legal
            requirements.
          </p>

        </div>

        {/* Footer note */}
        <p className="text-xs text-center text-gray-500">
          If you have questions about this policy, please contact us through the
          contact page.
        </p>

      </div>
    </section>
  );
}
