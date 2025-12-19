export const metadata = {
  title: "Terms & Conditions – FreeQR",
  description:
    "Read the terms and conditions for using the FreeQR QR code generator.",
};

export default function TermsPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-brandBlack">
            Terms & Conditions
          </h1>
          <p className="text-lg text-brandGray">
            Please read these terms carefully before using FreeQR.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white border rounded-2xl p-8 space-y-6 text-gray-700 text-sm leading-relaxed">

          <p>
            By accessing or using FreeQR, you agree to be bound by these
            Terms and Conditions. If you do not agree with any part of
            these terms, you should not use the service.
          </p>

          <p>
            FreeQR is provided as a free tool for generating QR codes.
            The service is offered on an “as is” and “as available” basis
            without warranties of any kind.
          </p>

          <p>
            You are solely responsible for the content encoded in the QR
            codes you generate using FreeQR. We do not review, monitor,
            or store QR code content.
          </p>

          <p>
            FreeQR does not guarantee uninterrupted availability, accuracy,
            or suitability for any particular purpose. Use of the service
            is at your own risk.
          </p>

          <p>
            We reserve the right to modify, suspend, or discontinue any
            part of the service at any time without prior notice.
          </p>

          <p>
            These terms may be updated occasionally. Continued use of
            FreeQR after changes are made constitutes acceptance of the
            revised terms.
          </p>

        </div>

        {/* Footer Note */}
        <p className="text-xs text-center text-gray-500">
          If you have questions regarding these terms, please contact us
          through the contact page.
        </p>

      </div>
    </section>
  );
}
