import LiveQRGenerator from "@/components/qr/LiveQRGenerator";
import HowToCreateEmail from "@/components/how-to-create-email/page";

export const metadata = {
  title: "Email QR Code Generator – Create Email QR Codes | FreeQR",
  description:
    "Create an email QR code to open an email app with a pre-filled address, subject, and message. Free and privacy-friendly.",
};

export default function EmailQrPage() {
  return (
    <>
      {/* INTRO CONTENT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          <header className="space-y-4">
            <h1 className="text-4xl font-bold text-textPrimary">
              Email QR Code Generator
            </h1>

            <p className="text-lg text-textSecondary">
              An email QR code allows users to send you an email instantly
              by scanning a QR code. It opens the user’s email app with
              the recipient, subject, and message pre-filled.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              What is an Email QR Code?
            </h2>
            <p className="text-textSecondary">
              An email QR code uses a <code>mailto:</code> link to open
              the default email application on the user’s device.
              This removes the need to manually type an email address.
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
              Email QR codes created with FreeQR work with popular email
              apps such as Gmail, Outlook, Apple Mail, and most mobile
              email clients.
            </p>
          </section>

        </div>
      </section>

      {/* GENERATOR */}
      <LiveQRGenerator defaultType="EMAIL" hideTypeSelector />

      {/* HOW TO USE */}
      <HowToCreateEmail />
    </>
  );
}
