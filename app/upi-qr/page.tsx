import LiveQRGenerator from "@/components/qr/LiveQRGenerator";
import HowToCreateUPI from "@/components/how-to-use/UPIHowToUse";

export const metadata = {
  title: "UPI QR Code Generator – Accept Payments Instantly | FreeQR",
  description:
    "Create a UPI QR code to receive payments instantly using Google Pay, PhonePe, Paytm, or BHIM. Free and privacy-friendly.",
};

export default function UPIQrPage() {
  return (
    <>
      {/* INTRO CONTENT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          <header className="space-y-4">
            <h1 className="text-4xl font-bold text-textPrimary">
              UPI QR Code Generator
            </h1>

            <p className="text-lg text-textSecondary">
              A UPI QR code allows customers to pay you instantly by scanning
              a QR code using UPI apps like Google Pay, PhonePe, Paytm, or BHIM.
              It is widely used by shops, freelancers, and businesses in India.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              What is a UPI QR Code?
            </h2>
            <p className="text-textSecondary">
              A UPI QR code contains your UPI ID and optional payment details.
              When scanned, it opens the user’s UPI app with payment information
              pre-filled.
            </p>
            <p className="text-textSecondary">
              This removes the need to manually type a UPI ID and reduces
              payment errors.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Where Are UPI QR Codes Used?
            </h2>
            <ul className="list-disc pl-6 text-textSecondary space-y-2">
              <li>Retail shops and local stores</li>
              <li>Freelancers and consultants</li>
              <li>Street vendors and food stalls</li>
              <li>Invoices and bills</li>
              <li>Online and offline businesses</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Security & Privacy
            </h2>
            <p className="text-textSecondary">
              FreeQR does not process payments or store UPI details.
              All QR codes are generated locally in your browser.
            </p>
            <p className="text-textSecondary">
              Payments are handled securely by your UPI app.
            </p>
          </section>

          <section className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
            <p>
              UPI QR codes generated with FreeQR never expire and work with
              all major UPI apps.
            </p>
          </section>

        </div>
      </section>

      {/* GENERATOR */}
      <LiveQRGenerator defaultType="UPI" hideTypeSelector />

      {/* HOW TO USE */}
      <HowToCreateUPI />
    </>
  );
}
