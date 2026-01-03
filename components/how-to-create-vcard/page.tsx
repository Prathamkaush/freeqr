export default function HowToCreateVCard() {
  return (
    <section className="py-20 border-t border-borderDark">
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Header */}
        <header className="space-y-3">
          <h2 className="text-3xl font-bold text-textPrimary">
            How to Create a vCard QR Code
          </h2>
          <p className="text-textSecondary">
            Share your contact details instantly using a vCard QR code.
          </p>
        </header>

        {/* Steps */}
        <ol className="space-y-10 list-decimal pl-6 text-textSecondary">

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Enter your contact details
            </strong>
            <p>
              Fill in details such as name, phone number, email address,
              and company information.
            </p>
          </li>

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Review the information
            </strong>
            <p>
              Make sure all contact details are correct before generating
              the QR code.
            </p>
          </li>

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Customize the QR code
            </strong>
            <p>
              Adjust the QR code color and size if required.
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
              Scan to save contact
            </strong>
            <p>
              Users can scan the QR code to save your contact
              directly to their phone.
            </p>
          </li>

        </ol>

        {/* Tip */}
        <div className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
          <p>
            Tip: vCard QR codes are perfect for replacing traditional
            paper business cards.
          </p>
        </div>

      </div>
    </section>
  );
}
