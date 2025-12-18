export const metadata = {
  title: "FAQ – FreeQR",
  description:
    "Frequently asked questions about FreeQR, QR code generation, downloads, privacy, and usage.",
};

export default function FAQPage() {
  return (
    <section className="bg-background py-24 border-t border-borderDark">
      <div className="max-w-4xl mx-auto px-6 space-y-16">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-textPrimary">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-textSecondary">
            Everything you need to know about using FreeQR.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">

          {[
            {
              q: "Is FreeQR really free to use?",
              a: "Yes. FreeQR is completely free to use. You can generate and download QR codes without signing up or paying anything.",
            },
            {
              q: "Do QR codes created with FreeQR expire?",
              a: "No. QR codes generated using FreeQR do not expire. Once downloaded, they will work forever as long as the encoded content remains valid.",
            },
            {
              q: "Do I need to create an account?",
              a: "No account or login is required. FreeQR works directly in your browser.",
            },
            {
              q: "What types of QR codes can I create?",
              a: "You can create QR codes for URLs, text, WiFi networks, WhatsApp messages, and email addresses.",
            },
            {
              q: "Can I customize the QR code design?",
              a: "Yes. You can change the QR code color and size before downloading. More customization options may be added in the future.",
            },
            {
              q: "Are my data or QR codes stored on your servers?",
              a: "No. All QR code generation happens locally in your browser. We do not store your data or generated QR codes.",
            },
            {
              q: "Which formats can I download?",
              a: "You can download your QR codes in PNG, SVG, and PDF formats.",
            },
            {
              q: "Can I use FreeQR for commercial purposes?",
              a: "Yes. QR codes generated with FreeQR can be used for both personal and business purposes.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-surface
                border border-borderDark
                rounded-xl
                p-6
              "
            >
              <h2 className="text-lg font-semibold text-textPrimary">
                {item.q}
              </h2>
              <p className="mt-2 text-textSecondary">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center pt-10">
          <p className="text-sm text-textSecondary">
            Still have questions?
            <a
              href="/"
              className="ml-1 text-primary font-medium hover:underline"
            >
              Try the QR generator →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
