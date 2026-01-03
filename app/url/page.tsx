export const metadata = {
  title: "Website QR Code Generator – Create URL QR Codes | FreeQR",
  description:
    "Create a website QR code to instantly open any URL. Free, fast, and privacy-friendly. No signup required.",
};
import LiveQRGenerator from "@/components/qr/LiveQRGenerator";
import HowToCreateURL from "@/components/how-to-create-url/page";

export default function UrlQrPage() {
  return (
    <>
      {/* INTRO + CONTENT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          <header className="space-y-4">
            <h1 className="text-4xl font-bold text-textPrimary">
              Website QR Code Generator
            </h1>

            <p className="text-lg text-textSecondary">
              A website QR code allows users to open a web page instantly
              by scanning a QR code. It is commonly used on posters,
              business cards, menus, product packaging, and advertisements.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              What is a Website QR Code?
            </h2>
            <p className="text-textSecondary">
              A website QR code encodes a web address (URL) into a scannable
              code. When scanned using a smartphone camera or QR scanner,
              the link opens instantly in the user’s browser.
            </p>
            <p className="text-textSecondary">
              This removes the need to manually type long or complex URLs
              and improves accessibility and engagement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Where Are Website QR Codes Used?
            </h2>
            <ul className="list-disc pl-6 text-textSecondary space-y-2">
              <li>Marketing posters and flyers</li>
              <li>Business cards and visiting cards</li>
              <li>Restaurant menus</li>
              <li>Product packaging</li>
              <li>Event promotions and banners</li>
              <li>Social media profile sharing</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Privacy & Security
            </h2>
            <p className="text-textSecondary">
              FreeQR does not track, shorten, or store your website links.
              All QR codes are generated locally in your browser.
            </p>
            <p className="text-textSecondary">
              We do not log URLs, scan activity, or user data of any kind.
            </p>
          </section>

          <section className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
            <p>
              FreeQR generates static website QR codes that never expire
              and work as long as the destination URL is available.
            </p>
          </section>

        </div>
      </section>

      {/* GENERATOR */}
      <LiveQRGenerator defaultType="URL" hideTypeSelector />

      {/* HOW TO USE */}
      <HowToCreateURL />
    </>
  );
}
