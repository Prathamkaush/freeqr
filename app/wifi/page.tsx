import LiveQRGenerator from "@/components/qr/LiveQRGenerator";
import HowToCreateWifi from "@/components/how-to-create-wifi/page";

export const metadata = {
  title: "WiFi QR Code Generator – Share WiFi Instantly | FreeQR",
  description:
    "Create a WiFi QR code to share your network name and password instantly. No signup required. Free and privacy-friendly.",
};

export default function Wifiqr() {
    return(
        <>
<section className="py-20">
  <div className="max-w-4xl mx-auto px-6 space-y-10">

    <header className="space-y-4">
      <h1 className="text-4xl font-bold text-textPrimary">
        WiFi QR Code Generator
      </h1>

      <p className="text-lg text-textSecondary">
        A WiFi QR code lets people connect to your wireless network instantly
        by scanning a code — without typing the network name or password.
        It is ideal for homes, offices, cafes, hotels, and public places.
      </p>
    </header>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-textPrimary">
        What is a WiFi QR Code?
      </h2>
      <p className="text-textSecondary">
        A WiFi QR code is a special type of QR code that stores your WiFi
        network details, including the network name (SSID), password,
        and security type. When someone scans the code using their phone,
        they are prompted to connect to the network automatically.
      </p>
      <p className="text-textSecondary">
        This eliminates the need to manually type long or complex passwords
        and reduces connection errors.
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
      <p className="text-textSecondary">
        FreeQR supports all commonly used WiFi security standards, including:
      </p>
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
        FreeQR is designed with privacy in mind. Your WiFi network name
        and password are never sent to any server.
      </p>
      <p className="text-textSecondary">
        All WiFi QR codes are generated locally in your browser.
        We do not store, log, track, or share your network details.
      </p>
    </section>

    <section className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
      <p>
        FreeQR does not collect or store WiFi credentials.
        QR code generation happens entirely on your device.
      </p>
    </section>

  </div>
</section>
<LiveQRGenerator defaultType="WIFI" hideTypeSelector />
<HowToCreateWifi />
</>
    )
}