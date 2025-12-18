export const metadata = {
  title: "Terms & Conditions – FreeQR",
  description:
    "Terms and conditions for using the FreeQR QR code generator.",
};

export default function TermsPage() {
  return (
    <section className="bg-[#fff7f9] py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-10">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-brandBlack">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-brandGray">
            Please read these terms carefully.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-8 space-y-6 text-brandGray text-sm leading-relaxed">
          <p>
            By using FreeQR, you agree to use the service responsibly and
            in compliance with applicable laws.
          </p>

          <p>
            FreeQR is provided "as is" without warranties of any kind.
            We do not guarantee uninterrupted availability or accuracy.
          </p>

          <p>
            You are responsible for the content encoded in QR codes
            generated using FreeQR.
          </p>

          <p>
            We reserve the right to modify or discontinue the service
            at any time without notice.
          </p>
        </div>

      </div>
    </section>
  );
}
