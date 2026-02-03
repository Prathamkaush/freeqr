import LiveQRGenerator from "@/components/qr/LiveQRGenerator";
import HowToCreateWifi from "@/components/how-to-create-wifi/page";
import Link from "next/link";

export const metadata = {
  title: "WiFi QR Code Generator – Share WiFi Instantly | FreeQR",
  description:
    "Create a WiFi QR code to share your network name and password instantly. Free, secure, and privacy-friendly.",
};

export default function WifiQrPage() {
  return (
    <>
      {/* INTRO */}
      <section className="pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h1 className="text-4xl font-bold text-textPrimary">
            WiFi QR Code Generator
          </h1>

          <p className="text-lg text-textSecondary">
            A WiFi QR code lets people connect to your wireless network instantly
            by scanning a code—no typing required. Perfect for homes, cafes,
            offices, hotels, and public spaces.
          </p>
        </div>
      </section>

      {/* ✅ GENERATOR (moved up) */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <LiveQRGenerator defaultType="WIFI" hideTypeSelector />
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 border-t border-borderDark">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              What is a WiFi QR Code?
            </h2>
            <p className="text-textSecondary">
              A WiFi QR code stores your network name (SSID), password, and
              security type in a scannable format. When scanned, the device
              prompts the user to connect automatically.
            </p>
            <p className="text-textSecondary">
              This eliminates manual password entry and reduces connection errors.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Where Are WiFi QR Codes Used?
            </h2>
            <ul className="list-disc pl-6 text-textSecondary space-y-2">
              <li>Cafes, restaurants, and coffee shops</li>
              <li>Homes and guest rooms</li>
              <li>Offices and coworking spaces</li>
              <li>Hotels, hostels, and homestays</li>
              <li>Events, conferences, and exhibitions</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Supported WiFi Security Types
            </h2>
            <ul className="list-disc pl-6 text-textSecondary space-y-2">
              <li>WPA / WPA2</li>
              <li>WPA3</li>
              <li>Open networks (no password)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Privacy & Security
            </h2>
            <p className="text-textSecondary">
              FreeQR never sends your WiFi credentials to any server.
              All QR codes are generated locally in your browser.
            </p>
            <p className="text-textSecondary">
              We do not store, track, or log any network information.
            </p>
          </section>

          <section className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
            <p>
              WiFi QR codes generated with FreeQR never expire and work
              across Android and iOS devices.
            </p>
          </section>

        </div>
      </section>

      {/* HOW TO USE */}
      <HowToCreateWifi />

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

      {/* MINI FAQ */}
      <section className="py-16 border-t border-borderDark">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl font-semibold text-textPrimary">
            WiFi QR Code FAQs
          </h2>

          <div className="space-y-4 text-textSecondary">
            <p>
              <strong>Do WiFi QR codes expire?</strong><br />
              No. WiFi QR codes generated by FreeQR are static and never expire.
            </p>

            <p>
              <strong>Can guests see my WiFi password?</strong><br />
              No. The password is applied automatically without revealing it.
            </p>

            <p>
              <strong>Is it safe to share WiFi using QR codes?</strong><br />
              Yes, as long as you trust the people scanning the code.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
