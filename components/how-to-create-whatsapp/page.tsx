export default function HowToCreateWhatsApp() {
  return (
    <section className="py-20 border-t border-borderDark">
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Header */}
        <header className="space-y-3">
          <h2 className="text-3xl font-bold text-textPrimary">
            How to Create a WhatsApp QR Code
          </h2>
          <p className="text-textSecondary">
            Create a WhatsApp QR code and let people message you instantly.
          </p>
        </header>

        {/* Steps */}
        <ol className="space-y-10 list-decimal pl-6 text-textSecondary">

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Enter your phone number
            </strong>
            <p>
              Enter your WhatsApp number with country code
              (for example: +91XXXXXXXXXX).
            </p>
          </li>

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Add a pre-filled message (optional)
            </strong>
            <p>
              You can include a default message that will appear automatically
              when the chat opens.
            </p>
          </li>

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Customize your QR code
            </strong>
            <p>
              Adjust the QR code color and size to match your branding.
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
              Scan to start chat
            </strong>
            <p>
              Users can scan the QR code to open a WhatsApp chat instantly.
            </p>
          </li>

        </ol>

        {/* Tip */}
        <div className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
          <p>
            Tip: WhatsApp QR codes are ideal for customer support,
            inquiries, and quick communication.
          </p>
        </div>

      </div>
    </section>
  );
}
