export default function HowToCreateText() {
  return (
    <section className="py-20 border-t border-borderDark">
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Header */}
        <header className="space-y-3">
          <h2 className="text-3xl font-bold text-textPrimary">
            How to Create a Text QR Code
          </h2>
          <p className="text-textSecondary">
            Generate a text QR code in seconds using these simple steps.
          </p>
        </header>

        {/* Steps */}
        <ol className="space-y-10 list-decimal pl-6 text-textSecondary">

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Enter your text
            </strong>
            <p>
              Type or paste the text you want to display when the QR code
              is scanned.
            </p>
          </li>

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Keep the text short and clear
            </strong>
            <p>
              Shorter text results in faster scans and better readability.
            </p>
          </li>

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Customize the QR code (optional)
            </strong>
            <p>
              Adjust the QR code color and size to suit your design.
            </p>
          </li>

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Download the QR code
            </strong>
            <p>
              Download the QR code in PNG, SVG, or PDF format.
            </p>
          </li>

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Scan to view text
            </strong>
            <p>
              Users can scan the QR code to instantly view the text
              on their device.
            </p>
          </li>

        </ol>

        {/* Tip */}
        <div className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
          <p>
            Tip: Text QR codes are ideal for offline environments
            where internet access is limited or unavailable.
          </p>
        </div>

      </div>
    </section>
  );
}
