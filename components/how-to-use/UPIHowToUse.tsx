export default function HowToCreateUPI() {
  return (
    <section className="py-20 border-t border-borderDark">
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Header */}
        <header className="space-y-3">
          <h2 className="text-3xl font-bold text-textPrimary">
            How to Create a UPI QR Code
          </h2>
          <p className="text-textSecondary">
            Accept UPI payments easily by generating a QR code.
          </p>
        </header>

        {/* Steps */}
        <ol className="space-y-10 list-decimal pl-6 text-textSecondary">

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Enter your UPI ID
            </strong>
            <p>
              Enter your valid UPI ID (for example: <code>name@upi</code>).
            </p>
          </li>

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Enter payee name
            </strong>
            <p>
              This name will be shown in the payer’s UPI app.
            </p>
          </li>

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Add amount or note (optional)
            </strong>
            <p>
              You may set a fixed amount or include a payment note.
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
              Download and display
            </strong>
            <p>
              Download the QR code and display it at your shop,
              invoice, or website.
            </p>
          </li>

          <li className="space-y-2">
            <strong className="text-textPrimary">
              Scan to pay
            </strong>
            <p>
              Customers can scan the QR code using any UPI app
              to complete the payment.
            </p>
          </li>

        </ol>

        {/* Tip */}
        <div className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
          <p>
            Tip: UPI QR codes are ideal for fast, contactless payments
            in both online and offline scenarios.
          </p>
        </div>

      </div>
    </section>
    
  );
}
