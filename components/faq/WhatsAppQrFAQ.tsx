export default function WhatsAppQrFAQ() {
  return (
    <section className="py-16 border-t border-borderDark">
      <div className="max-w-4xl mx-auto px-6 space-y-8">

        <h2 className="text-2xl font-semibold text-textPrimary">
          WhatsApp QR Code FAQs
        </h2>

        <div className="space-y-6 text-textSecondary text-sm leading-relaxed">

          <p>
            <strong className="text-textPrimary">
              Do WhatsApp QR codes expire?
            </strong><br />
            No. WhatsApp QR codes generated with FreeQR are static and never expire.
            They will work as long as the phone number is active on WhatsApp.
          </p>

          <p>
            <strong className="text-textPrimary">
              Does scanning the QR code send a message automatically?
            </strong><br />
            No. Scanning the QR code only opens a WhatsApp chat with a
            pre-filled message (if provided). The user must tap send manually.
          </p>

          <p>
            <strong className="text-textPrimary">
              Can I add a pre-filled WhatsApp message?
            </strong><br />
            Yes. You can include an optional message that appears automatically
            when the chat opens.
          </p>

          <p>
            <strong className="text-textPrimary">
              Does FreeQR store phone numbers or messages?
            </strong><br />
            No. All WhatsApp QR codes are generated locally in your browser.
            FreeQR does not store, log, or track phone numbers or messages.
          </p>

        </div>

      </div>
    </section>
  );
}
