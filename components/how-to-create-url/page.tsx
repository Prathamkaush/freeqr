export default function HowToCreateURL() {
  return (
    <section className="py-20 border-t border-borderDark">
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Header */}
        <header className="space-y-3">
          <h2 className="text-3xl font-bold text-textPrimary">
            How to Create a Website QR Code
          </h2>
          <p className="text-textSecondary">
            Create a QR code for any website in just a few simple steps.
          </p>
        </header>

        {/* Steps */}
        <ol className="space-y-10 list-decimal pl-6 text-textSecondary">

          <li className="space-y-3">
            <strong className="text-textPrimary">
              Enter your website URL
            </strong>
            <img
              src="/howto2.jpeg"
              alt="Enter website URL for QR code"
              className="rounded-lg border max-w-full"
            />
            <p>
              Paste the full website link, including <code>https://</code>,
              into the URL field.
            </p>
          </li>

          <li className="space-y-3">
            <strong className="text-textPrimary">
              Customize your QR code (optional)
            </strong>
            <img
              src="/howto3.jpeg"
              alt="Customize website QR code"
              className="rounded-lg border max-w-full"
            />
            <p>
              Adjust the color and size of the QR code to match your design.
            </p>
          </li>

          <li className="space-y-3">
            <strong className="text-textPrimary">
              Download the QR code
            </strong>
            <img
              src="/howto4.jpeg"
              alt="Download website QR code"
              className="rounded-lg border max-w-full"
            />
            <p>
              Download the QR code in PNG, SVG, or PDF format.
            </p>
          </li>

          <li className="space-y-3">
            <strong className="text-textPrimary">
              Share or print
            </strong>
            <p>
              Use the QR code on posters, packaging, menus, or digital media.
            </p>
          </li>

          <li className="space-y-3">
            <strong className="text-textPrimary">
              Scan to open the website
            </strong>
            <p>
              Users can scan the QR code to instantly open your website.
            </p>
          </li>

        </ol>

        {/* Tip */}
        <div className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
          <p>
            Tip: Always test your website QR code before printing or sharing
            it publicly.
          </p>
        </div>

      </div>
    </section>
  );
}
