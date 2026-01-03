import LiveQRGenerator from "@/components/qr/LiveQRGenerator";
import HowToCreateVCard from "@/components/how-to-create-vcard/page";

export const metadata = {
  title: "vCard QR Code Generator – Share Contact Instantly | FreeQR",
  description:
    "Create a vCard QR code to share contact details instantly. Free, fast, and privacy-friendly. No signup required.",
};

export default function VCardQrPage() {
  return (
    <>
      {/* INTRO CONTENT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          <header className="space-y-4">
            <h1 className="text-4xl font-bold text-textPrimary">
              vCard QR Code Generator
            </h1>

            <p className="text-lg text-textSecondary">
              A vCard QR code allows people to save your contact details
              directly to their phone with a single scan. It is ideal for
              business cards, networking events, and professional profiles.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              What is a vCard QR Code?
            </h2>
            <p className="text-textSecondary">
              A vCard QR code stores contact information such as name,
              phone number, email address, company, and other details.
              When scanned, the contact can be saved instantly to the
              user’s address book.
            </p>
            <p className="text-textSecondary">
              This removes the need to manually type contact information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Where Are vCard QR Codes Used?
            </h2>
            <ul className="list-disc pl-6 text-textSecondary space-y-2">
              <li>Business and visiting cards</li>
              <li>Networking events and conferences</li>
              <li>Freelancers and consultants</li>
              <li>Sales and marketing teams</li>
              <li>Email signatures and websites</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Privacy & Compatibility
            </h2>
            <p className="text-textSecondary">
              FreeQR does not store contact details.
              All vCard QR codes are generated locally in your browser.
            </p>
            <p className="text-textSecondary">
              vCard QR codes work with most smartphones, including
              Android and iOS devices.
            </p>
          </section>

          <section className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
            <p>
              vCard QR codes generated with FreeQR are static and never expire.
            </p>
          </section>

        </div>
      </section>

      {/* GENERATOR */}
      <LiveQRGenerator defaultType="VCARD" hideTypeSelector />

      {/* HOW TO USE */}
      <HowToCreateVCard />
    </>
  );
}
