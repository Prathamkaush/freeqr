import LiveQRGenerator from "@/components/qr/LiveQRGenerator";
import HowToCreateText from "@/components/how-to-create-text/page";
import Link from "next/link";

export const metadata = {
  title: "Free Text QR Code Generator | Instant Offline QR Codes",
  description:
    "Create a text QR code instantly. Works offline, no signup required. Generate QR codes for messages, instructions, and notes in seconds.",
};

export default function TextQrPage() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-12">

          {/* HERO */}
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-textPrimary">
              Free Text QR Code Generator
            </h1>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto">
              Convert any message into a QR code that works instantly — even without internet.
              Perfect for notes, instructions, and offline information sharing.
            </p>
          </header>

          {/* GENERATOR (Moved Up) */}
          <div className="shadow-xl rounded-2xl border border-gray-100 p-2">
            <LiveQRGenerator defaultType="TEXT" hideTypeSelector />
          </div>

          <hr className="border-gray-100" />

          {/* WHAT IS */}
          <section className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-textPrimary">
                What is a Text QR Code?
              </h2>
              <p className="text-textSecondary">
                A <strong>text QR code</strong> encodes plain text directly into a scannable format.
                When scanned, the content appears instantly on the device screen — no browser or internet required.
              </p>

              <ul className="space-y-2 text-textSecondary">
                <li>✅ Works completely offline</li>
                <li>✅ Instant display without redirects</li>
                <li>✅ Compatible with all QR scanners</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-bold mb-2">When to Use Text QR</h3>
              <p className="text-sm text-green-800">
                Use text QR codes when you want guaranteed access without relying on internet connectivity.
              </p>
            </div>
          </section>

          {/* USE CASES */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Common Use Cases
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Instructions",
                  desc: "Attach QR codes to machines, packaging, or devices.",
                },
                {
                  title: "Emergency Info",
                  desc: "Share critical information that works offline.",
                },
                {
                  title: "Notes & Messages",
                  desc: "Quickly share short messages without apps.",
                },
              ].map((item, i) => (
                <div key={i} className="p-4 border rounded-lg hover:bg-gray-50">
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-sm text-textSecondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ADVANCED SEO CONTENT */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Text QR vs URL QR Code
            </h2>

            <p className="text-textSecondary">
              Unlike URL QR codes that require internet access, text QR codes store information directly.
              This makes them faster and more reliable in low-connectivity environments.
            </p>

            <ul className="list-disc pl-6 text-textSecondary space-y-2">
              <li>Text QR → instant display, no loading</li>
              <li>URL QR → opens browser, requires internet</li>
              <li>Text QR → fully private (no tracking)</li>
            </ul>
          </section>

          {/* PRIVACY */}
          <section className="bg-gray-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Privacy-First QR Generation
            </h2>

            <p className="text-gray-400">
              FreeQR generates QR codes entirely in your browser using client-side processing.
              Your text is never stored, transmitted, or logged on any server.
            </p>
          </section>

        </div>
      </section>

      {/* HOW TO */}
      <HowToCreateText />

      {/* INTERNAL LINKS */}
      <section className="mt-10 mb-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-surface border rounded-xl p-6 space-y-4">
            <p className="text-sm text-gray-400">
              Try other QR code types:
            </p>

            <ul className="space-y-3">
              <li>
                <Link href="/vcard" className="text-white hover:text-primary">
                  vCard QR Code Generator →
                </Link>
              </li>
              <li>
                <Link href="/wifi" className="text-white hover:text-primary">
                  WiFi QR Code Generator →
                </Link>
              </li>
              <li>
                <Link href="/email" className="text-white hover:text-primary">
                  Email QR Code Generator →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}