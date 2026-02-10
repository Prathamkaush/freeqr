import LiveQRGenerator from "@/components/qr/LiveQRGenerator";
import HowToCreateWhatsApp from "@/components/how-to-create-whatsapp/page";
import WhatsAppQrFAQ from "@/components/faq/WhatsAppQrFAQ";

export const metadata = {
  title: "WhatsApp QR Code Generator – Start Chat Instantly | FreeQR",
  description:
    "Create a WhatsApp QR code to start a chat instantly. Free, fast, and privacy-friendly. No signup required.",
};

export default function WhatsAppQrPage() {
  return (
    <>
      {/* INTRO CONTENT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          <header className="space-y-4">
            <h1 className="text-4xl font-bold text-textPrimary">
              WhatsApp QR Code Generator
            </h1>

            <p className="text-lg text-textSecondary">
              A WhatsApp QR code lets users start a chat instantly by scanning
              a QR code. It is widely used for customer support, business
              inquiries, and personal communication.
            </p>
          </header>

      {/* GENERATOR */}
      <LiveQRGenerator defaultType="WHATSAPP" hideTypeSelector />
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              What is a WhatsApp QR Code?
            </h2>
            <p className="text-textSecondary">
              A WhatsApp QR code encodes a phone number and an optional
              pre-filled message. When scanned, it opens a WhatsApp chat
              instantly without saving the contact.
            </p>
            <p className="text-textSecondary">
              This makes it easier for users to contact you with a single scan.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Where Are WhatsApp QR Codes Used?
            </h2>
            <ul className="list-disc pl-6 text-textSecondary space-y-2">
              <li>Customer support and help desks</li>
              <li>Business websites and landing pages</li>
              <li>Shop posters and banners</li>
              <li>Freelancers and service providers</li>
              <li>Event registrations and inquiries</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Privacy & Safety
            </h2>
            <p className="text-textSecondary">
              FreeQR does not store phone numbers or messages.
              All WhatsApp QR codes are generated locally in your browser.
            </p>
            <p className="text-textSecondary">
              FreeQR does not access chats, messages, or user data.
            </p>
          </section>

          <section className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
            <p>
              WhatsApp QR codes created with FreeQR work with the official
              WhatsApp app on Android, iOS, and WhatsApp Web.
            </p>
          </section>

        </div>
      </section>

      {/* HOW TO USE */}
      <HowToCreateWhatsApp />

      <WhatsAppQrFAQ />
    </>
  );
}
