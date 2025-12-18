export default function HowToUse() {
  return (
    <section className="mt-24 py-24 bg-background border-t border-borderDark">
      <div className="max-w-6xl mx-auto px-6 space-y-24">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-textPrimary">
            How to Use FreeQR
          </h2>
          <p className="mt-4 text-textSecondary">
            Generate and download QR codes in just a few simple steps.
          </p>
        </div>

        {/* STEP 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-textPrimary">
              Step 1: Choose the QR code type
            </h3>
            <p className="text-textSecondary">
              Select the type of QR code you want to create. FreeQR supports URL,
              Text, WiFi, WhatsApp, and Email QR codes.
            </p>
            <p className="text-sm text-textSecondary/80">
              You can switch between QR types at any time before downloading.
            </p>
          </div>

          <img
            src="/howto1.jpeg"
            alt="Select QR Type"
            className="w-full max-w-md mx-auto rounded-xl border border-borderDark bg-surface"
          />
        </div>

        {/* STEP 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/howto2.jpeg"
            alt="Enter QR Details"
            className="w-full max-w-md mx-auto rounded-xl border border-borderDark bg-surface md:order-1"
          />

          <div className="space-y-4 md:order-2">
            <h3 className="text-xl font-semibold text-textPrimary">
              Step 2: Enter the required details
            </h3>
            <p className="text-textSecondary">
              Fill in the information based on the selected QR type. For example,
              enter a website link for URL QR codes or network details for WiFi QR codes.
            </p>
            <p className="text-sm text-textSecondary/80">
              The QR preview updates automatically as you type.
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-textPrimary">
              Step 3: Customize your QR code
            </h3>
            <p className="text-textSecondary">
              Customize the QR code by selecting a color and adjusting the size.
              This helps match your brand or design needs.
            </p>
            <p className="text-sm text-textSecondary/80">
              Tip: Dark colors scan better than very light colors.
            </p>
          </div>

          <img
            src="/howto3.jpeg"
            alt="Customize QR Code"
            className="w-full max-w-md mx-auto rounded-xl border border-borderDark bg-surface"
          />
        </div>

        {/* STEP 4 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/howto4.jpeg"
            alt="Download QR Code"
            className="w-full max-w-md mx-auto rounded-xl border border-borderDark bg-surface md:order-1"
          />

          <div className="space-y-4 md:order-2">
            <h3 className="text-xl font-semibold text-textPrimary">
              Step 4: Preview and download
            </h3>
            <p className="text-textSecondary">
              Once your QR code appears in the preview, download it in PNG, SVG,
              or PDF format depending on your use case.
            </p>
            <p className="text-sm text-textSecondary/80">
              Download buttons activate automatically when your QR code is ready.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="max-w-3xl mx-auto bg-surface border border-borderDark rounded-xl p-6 text-sm text-textSecondary text-center">
          <p>
            FreeQR works entirely in your browser. Your data is not stored,
            and QR codes do not expire. You can use them for both personal
            and business purposes.
          </p>
        </div>

      </div>
    </section>
  );
}
