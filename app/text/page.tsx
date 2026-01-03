import LiveQRGenerator from "@/components/qr/LiveQRGenerator";
import HowToCreateText from "@/components/how-to-create-text/page";

export const metadata = {
  title: "Text QR Code Generator – Create Text QR Codes | FreeQR",
  description:
    "Create a text QR code to display messages instantly when scanned. Free, fast, and privacy-friendly. No signup required.",
};

export default function TextQrPage() {
  return (
    <>
      {/* INTRO CONTENT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          <header className="space-y-4">
            <h1 className="text-4xl font-bold text-textPrimary">
              Text QR Code Generator
            </h1>

            <p className="text-lg text-textSecondary">
              A text QR code displays plain text instantly when scanned.
              It works offline and is ideal for sharing instructions,
              notes, messages, or short information without using the internet.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              What is a Text QR Code?
            </h2>
            <p className="text-textSecondary">
              A text QR code stores plain text instead of a link.
              When scanned, the text appears directly on the user’s screen
              without opening a browser or app.
            </p>
            <p className="text-textSecondary">
              This makes text QR codes fast, reliable, and suitable
              for offline usage.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Where Are Text QR Codes Used?
            </h2>
            <ul className="list-disc pl-6 text-textSecondary space-y-2">
              <li>Instructions and manuals</li>
              <li>Emergency information</li>
              <li>Product details and serial numbers</li>
              <li>Short notes or reminders</li>
              <li>Offline information sharing</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Offline & Privacy Friendly
            </h2>
            <p className="text-textSecondary">
              Text QR codes work completely offline after generation.
              FreeQR does not store or track the text you enter.
            </p>
            <p className="text-textSecondary">
              All QR codes are generated locally in your browser.
            </p>
          </section>

          <section className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
            <p>
              Text QR codes created with FreeQR never expire and can be
              scanned using any standard QR scanner or smartphone camera.
            </p>
          </section>

        </div>
      </section>

      {/* GENERATOR */}
      <LiveQRGenerator defaultType="TEXT" hideTypeSelector />

      {/* HOW TO USE */}
      <HowToCreateText />
    </>
  );
}
