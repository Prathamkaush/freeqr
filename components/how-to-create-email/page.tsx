export default function HowToCreateEmail() {
  return (
    <section className="py-20 border-t border-borderDark">
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Header */}
        <header className="space-y-3">
          <h2 className="text-3xl font-bold text-textPrimary">
            How to Create an Email QR Code
          </h2>
          <p className="text-textSecondary">
            Create an email QR code that opens a pre-filled email in seconds.
          </p>
        </header>

        {/* Steps */}
        <ol className="space-y-10 list-decimal pl-6 text-textSecondary">

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Enter the email address
            </strong>
            <p>
              Enter the recipient’s email address where messages should be sent.
            </p>
          </li>

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Add a subject (optional)
            </strong>
            <p>
              Provide a subject line to give context to the email.
            </p>
          </li>

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Add a message body (optional)
            </strong>
            <p>
              Include a default message that will appear when the email app opens.
            </p>
          </li>

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Customize the QR code
            </strong>
            <p>
              Adjust the QR code color and size if needed.
            </p>
          </li>

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Download and share
            </strong>
            <p>
              Download the QR code and place it on printed or digital materials.
            </p>
          </li>

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Scan to send email
            </strong>
            <p>
              Users can scan the QR code to instantly open their email app
              and send a message.
            </p>
          </li>

        </ol>

        {/* Tip */}
        <div className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
          <p>
            Tip: Email QR codes are ideal for feedback collection,
            inquiries, and contact pages.
          </p>
        </div>

      </div>
    </section>
  );
}
