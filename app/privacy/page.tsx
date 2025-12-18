export const metadata = {
  title: "Privacy Policy – FreeQR",
  description:
    "Read FreeQR's privacy policy to understand how your data is handled.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-[#fff7f9] py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-10">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-brandBlack">
            Privacy Policy
          </h1>
          <p className="mt-4 text-brandGray">
            Your privacy is important to us.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-8 space-y-6 text-brandGray text-sm leading-relaxed">
          <p>
            FreeQR does not collect, store, or share any personal data.
            All QR code generation happens locally in your browser.
          </p>

          <p>
            We do not track users, store QR code content, or require account
            registration.
          </p>

          <p>
            Like most websites, we may use third-party services such as analytics
            or advertising platforms to understand traffic and improve our service.
            These services may use cookies according to their own privacy policies.
          </p>

          <p>
            By using FreeQR, you agree to this privacy policy.
          </p>
        </div>

      </div>
    </section>
  );
}
