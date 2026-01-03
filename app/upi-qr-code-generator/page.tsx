export const metadata = {
  title: "Free UPI QR Code Generator – Google Pay, PhonePe, Paytm",
  description:
    "Create a free UPI QR code for Google Pay, PhonePe, Paytm & BHIM. No signup required. QR codes never expire.",
};

export default function UPIQRLandingPage() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 space-y-12">

        {/* HERO */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Free UPI QR Code Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Generate a UPI QR code for Google Pay, PhonePe, Paytm, and BHIM.
            Accept payments instantly using your UPI ID — no signup required.
          </p>

          <a
            href="/"
            className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Generate UPI QR Code
          </a>
        </div>

        {/* INFO */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-2">Works with all UPI apps</h3>
            <p className="text-sm text-gray-600">
              Compatible with Google Pay, PhonePe, Paytm, BHIM, and other UPI apps.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-2">No signup required</h3>
            <p className="text-sm text-gray-600">
              Generate your UPI QR code instantly without creating an account.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-2">QR codes never expire</h3>
            <p className="text-sm text-gray-600">
              Download and reuse your UPI QR code anytime for payments.
            </p>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            How to create a UPI QR code
          </h2>

          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Enter your UPI ID (example: name@upi)</li>
            <li>Add your payee name and optional amount</li>
            <li>Generate and download the QR code</li>
            <li>Scan using any UPI app to receive payments</li>
          </ol>
        </div>

        {/* DISCLAIMER */}
        <div className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
          <p>
            FreeQR does not process payments or store UPI details.
            All transactions are handled securely by your UPI app.
          </p>
        </div>
      </div>
    </section>
  );
}
