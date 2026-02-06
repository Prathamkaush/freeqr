import LiveQRGenerator from "@/components/qr/LiveQRGenerator";
import HowToCreateEmail from "@/components/how-to-create-email/page";
import Link from "next/link";

export const metadata = {
  title: "Email QR Code Generator – Create Email QR Codes | FreeQR",
  description:
    "Create an email QR code to open an email app with a pre-filled address, subject, and message. Free and privacy-friendly.",
};

export default function EmailQrPage() {
  return (
    <>
      {/* INTRO */}
      <section className="pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h1 className="text-4xl font-bold text-textPrimary">
            Email QR Code Generator
          </h1>

          <p className="text-lg text-textSecondary">
            An email QR code allows users to send you an email instantly by
            scanning a QR code. It opens the email app with the recipient,
            subject, and message pre-filled.
          </p>
        </div>
      </section>

      {/* ✅ GENERATOR (moved up) */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <LiveQRGenerator defaultType="EMAIL" hideTypeSelector />
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 border-t border-borderDark">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              What is an Email QR Code?
            </h2>
            <p className="text-textSecondary">
              An email QR code uses a <code>mailto:</code> link to open the
              default email application on the user’s device. This removes
              the need to manually type an email address.
            </p>
            <p className="text-textSecondary">
              It is commonly used on business cards, feedback forms,
              posters, and customer support pages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Where Are Email QR Codes Used?
            </h2>
            <ul className="list-disc pl-6 text-textSecondary space-y-2">
              <li>Business cards and resumes</li>
              <li>Customer feedback and support</li>
              <li>Job applications</li>
              <li>Event registrations</li>
              <li>Contact and inquiry posters</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Privacy & Security
            </h2>
            <p className="text-textSecondary">
              FreeQR does not store email addresses, subjects, or messages.
              All email QR codes are generated locally in your browser.
            </p>
            <p className="text-textSecondary">
              FreeQR does not send emails or access email content.
            </p>
          </section>

          <section className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
            <p>
              Email QR codes created with FreeQR work with Gmail, Outlook,
              Apple Mail, and most mobile email apps.
            </p>
          </section>

        </div>
      </section>

      {/* HOW TO USE */}
      <HowToCreateEmail />

       {/* INTERNAL LINKS */}
      <section className="mt-10 mb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-surface border border-borderDark rounded-xl p-6 space-y-4">
            <p className="text-sm text-gray-400">
              You can also generate QR codes for other use cases:
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/url" className="text-white hover:text-primary">
                  Website URL QR Code Generator →
                </Link>
              </li>
              <li>
                <Link href="/upi-qr" className="text-white hover:text-primary">
                  UPI QR Code Generator →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

{/* Email Qr Faqs */}
      <section className="py-16 border-t border-borderDark">
      <div className="max-w-4xl mx-auto px-6 space-y-8">

        <h2 className="text-2xl font-semibold text-textPrimary">
          Email QR Code FAQs
        </h2>

        <div className="space-y-6 text-textSecondary text-sm leading-relaxed">

          <p>
            <strong className="text-textPrimary">
              Do email QR codes expire?
            </strong><br />
            No. Email QR codes generated with FreeQR are static and never expire.
            They work as long as the email address is valid.
          </p>

          <p>
            <strong className="text-textPrimary">
              Will scanning an email QR code send an email automatically?
            </strong><br />
            No. Scanning the QR code only opens the user’s email app with
            pre-filled details. The user must manually press send.
          </p>

          <p>
            <strong className="text-textPrimary">
              Can I add a subject and message?
            </strong><br />
            Yes. You can include an email subject and message that will appear
            automatically when the QR code is scanned.
          </p>

          <p>
            <strong className="text-textPrimary">
              Does FreeQR store my email address?
            </strong><br />
            No. All email QR codes are generated locally in your browser.
            FreeQR does not store or track email addresses or messages.
          </p>

        </div>

      </div>
    </section>
    </>
  );
}
