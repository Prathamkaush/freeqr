export const metadata = {
  title: "About – FreeQR",
  description:
    "Learn more about FreeQR, a free and privacy-friendly QR code generator.",
};

export default function AboutPage() {
  return (
    <section className="bg-[#fff7f9] py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-10">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-brandBlack">
            About FreeQR
          </h1>
          <p className="mt-4 text-brandGray">
            Simple, fast, and privacy-first QR code generation.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-8 space-y-6 text-brandGray">
          <p>
            FreeQR is a free online QR code generator designed to help individuals
            and businesses create QR codes quickly without any signup or payment.
          </p>

          <p>
            Our goal is to make QR code generation simple, accessible, and secure.
            All QR codes are generated directly in your browser, ensuring your data
            remains private.
          </p>

          <p>
            FreeQR supports multiple QR code types including URLs, text, WiFi,
            WhatsApp, and email. You can customize the color and size before
            downloading in multiple formats.
          </p>

          <p>
            Whether you are creating QR codes for personal use, marketing,
            or business operations, FreeQR is built to be fast, reliable,
            and easy to use.
          </p>
        </div>

      </div>
    </section>
  );
}
