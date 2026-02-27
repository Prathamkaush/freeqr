export default function VCardQrFAQ() {
  return (
    <section className="py-16 border-t border-borderDark">
      <div className="max-w-4xl mx-auto px-6 space-y-8">

        <h2 className="text-2xl font-semibold text-textPrimary">
          vCard QR Code FAQs
        </h2>

        <div className="space-y-6 text-textSecondary text-sm leading-relaxed">

          <p>
            <strong className="text-textPrimary">
              Do vCard QR codes expire?
            </strong><br />
            No. vCard QR codes generated with FreeQR are static and never expire.
            They will work as long as the QR code image is accessible.
          </p>

          <p>
            <strong className="text-textPrimary">
              What information can I include in a vCard QR code?
            </strong><br />
            You can include name, phone number, email address, company name,
            job title, and other basic contact details.
          </p>

          <p>
            <strong className="text-textPrimary">
              Will scanning the QR code automatically save the contact?
            </strong><br />
            Most smartphones prompt the user to save the contact after scanning.
            The user must confirm before the contact is added.
          </p>

          <p>
            <strong className="text-textPrimary">
              Does FreeQR store my contact information?
            </strong><br />
            No. All vCard QR codes are generated locally in your browser.
            FreeQR does not store, track, or share contact details.
          </p>

        </div>

      </div>
    </section>
  );
}