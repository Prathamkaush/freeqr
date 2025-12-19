export const metadata = {
  title: "About FreeQR – Free & Privacy-Friendly QR Code Generator",
  description:
    "FreeQR is a fast, free, and privacy-first QR code generator. Create QR codes without signup, tracking, or data storage.",
};

export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-brandBlack">
            About FreeQR
          </h1>
          <p className="text-lg text-brandGray">
            A simple, fast, and privacy-first QR code generator.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white border rounded-2xl p-8 space-y-6 text-gray-700 leading-relaxed">

          <p>
            FreeQR is a free online QR code generator built for people who want
            a quick, reliable, and secure way to create QR codes without signing
            up or sharing personal data.
          </p>

          <p>
            Our focus is simplicity and privacy. All QR codes are generated
            directly in your browser, which means your data never leaves
            your device and is never stored on our servers.
          </p>

          <p>
            FreeQR supports multiple QR code types including website URLs, text,
            WiFi credentials, WhatsApp messages, email links, and UPI payments.
            You can also customize the QR code color and size before downloading.
          </p>

          <p>
            Whether you are a student, freelancer, shop owner, or business,
            FreeQR helps you create QR codes instantly — without limits,
            subscriptions, or hidden restrictions.
          </p>

        </div>

        {/* Trust Section */}
        <div className="grid sm:grid-cols-3 gap-6 text-sm text-gray-600">
          <div className="border rounded-xl p-5">
            <strong className="block text-brandBlack mb-1">
              No Signup Required
            </strong>
            Generate QR codes instantly without creating an account.
          </div>

          <div className="border rounded-xl p-5">
            <strong className="block text-brandBlack mb-1">
              Privacy First
            </strong>
            Your data stays in your browser. Nothing is tracked or stored.
          </div>

          <div className="border rounded-xl p-5">
            <strong className="block text-brandBlack mb-1">
              Free Forever
            </strong>
            All core features are available at no cost.
          </div>
        </div>

      </div>
    </section>
  );
}
