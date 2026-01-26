import LiveQRGenerator from "@/components/qr/LiveQRGenerator";
import HowToCreateUPI from "@/components/how-to-use/UPIHowToUse";
import  Link  from "next/link";

export const metadata = {
  title: "UPI QR Code Generator – Accept Payments Instantly | FreeQR",
  description:
    "Create a UPI QR code to receive payments instantly using Google Pay, PhonePe, Paytm, or BHIM. Free and privacy-friendly.",
};

export default function UPIQrPage() {
  return (
    <>
      {/* INTRO + CONTENT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          <header className="space-y-4">
            <h1 className="text-4xl font-bold text-textPrimary">
              UPI QR Code Generator
            </h1>
            <p className="text-lg text-textSecondary">
              Generate a UPI QR code to receive payments instantly using Google Pay,
              PhonePe, Paytm, or BHIM.
            </p>
          </header>

        {/* GENERATOR */}
      <LiveQRGenerator defaultType="UPI" hideTypeSelector />

    
      {/* HOW TO USE */}
      <HowToCreateUPI />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              What is a UPI QR Code?
            </h2>
            <p className="text-textSecondary">
              A UPI QR code contains your UPI ID and optional payment details.
              When scanned, it opens the payer’s UPI app with pre-filled information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Where Are UPI QR Codes Used?
            </h2>
            <ul className="list-disc pl-6 text-textSecondary space-y-2">
              <li>Retail shops</li>
              <li>Freelancers</li>
              <li>Street vendors</li>
              <li>Invoices & bills</li>
            </ul>
          </section>

          <section className="bg-surface border border-borderDark rounded-xl p-6 text-sm text-textSecondary">
            FreeQR generates UPI QR codes locally in your browser.
            No payment data is stored.
          </section>

        </div>
      </section>


      {/* INTERNAL LINKS */}
      <section className="mt-10 mb-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-surface border border-borderDark rounded-xl p-6 space-y-4">
            <p className="text-sm text-gray-400">
              You can also generate QR codes for other use cases:
            </p>

            <ul className="space-y-3">
              <li>
                <Link href="/wifi" className="text-white hover:text-primary">
                  WiFi QR Code Generator →
                </Link>
              </li>
              <li>
                <Link href="/url" className="text-white hover:text-primary">
                  Website URL QR Code Generator →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
