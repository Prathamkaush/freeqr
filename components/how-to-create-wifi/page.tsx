export default function HowToCreateWifi() {
  return (
    <section className="py-20 border-t border-borderDark">
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Header */}
        <header className="space-y-3">
          <h2 className="text-3xl font-bold text-textPrimary">
            How to Create and Use a WiFi QR Code
          </h2>
          <p className="text-textSecondary">
            Follow these simple steps to generate a WiFi QR code and allow others
            to connect to your network instantly.
          </p>
        </header>

        {/* Steps */}
        <ol className="space-y-10 list-decimal pl-6 text-textSecondary">

          <li className="space-y-3">
            <strong className="text-textPrimary">
              Enter your WiFi network name (SSID)
            </strong>
            <img
              src="/wifi1.jpeg"
              alt="Enter WiFi network name"
              className="rounded-lg border max-w-full"
            />
            <p>
              This is the name of the WiFi network that appears on your device.
            </p>
          </li>

          <li className="space-y-3">
            <strong className="text-textPrimary">
              Enter your WiFi password
            </strong>
            <img
              src="/wifi2.jpeg"
              alt="Enter WiFi password"
              className="rounded-lg border max-w-full"
            />
            <p>
              Make sure the password is correct to avoid connection issues.
            </p>
          </li>

          <li className="space-y-3">
            <strong className="text-textPrimary">
              Select the correct security type
            </strong>
            <img
              src="/wifi3.jpeg"
              alt="Select WiFi security type"
              className="rounded-lg border max-w-full"
            />
            <p>
              Choose WPA/WPA2, WPA3, or Open depending on your network.
            </p>
          </li>

          <li className="space-y-3">
            <strong className="text-textPrimary">
              Customize your QR code (optional)
            </strong>
            <img
              src="/wifi4.jpeg"
              alt="Customize QR code"
              className="rounded-lg border max-w-full"
            />
            <p>
              Adjust the QR code color and size before downloading.
            </p>
          </li>

          <li className="space-y-3">
            <strong className="text-textPrimary">
              Download and share the QR code
            </strong>
            <img
              src="/wifi5.jpeg"
              alt="Download WiFi QR code"
              className="rounded-lg border max-w-full"
            />
            <p>
              Print it or display it digitally for easy access.
            </p>
          </li>

          <li className="space-y-3">
            <strong className="text-textPrimary">
              Scan to connect
            </strong>
            <p>
              Users can scan the QR code using their phone camera or a QR scanner
              app to connect instantly.
            </p>
          </li>

        </ol>

        {/* Tip */}
        <div className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
          <p>
            Tip: WiFi QR codes work best in places where guests frequently ask
            for internet access, such as homes, cafes, offices, and hotels.
          </p>
        </div>

      </div>
    </section>
  );
}
