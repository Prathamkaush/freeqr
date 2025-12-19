import ContactForm from "@/components/form/contact-form";

export const metadata = {
  title: "Contact FreeQR",
  description: "Contact FreeQR for feedback, questions, or suggestions.",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6 space-y-12">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-brandBlack">
            Contact FreeQR
          </h1>
          <p className="text-lg text-brandGray">
            Have feedback, suggestions, or questions? We’re happy to hear from you.
          </p>
        </div>

        {/* Form */}
        <ContactForm />

        {/* Footer Note */}
        <p className="text-xs text-center text-gray-500">
          This form is currently for feedback purposes only.
          We do not store personal data.
        </p>

      </div>
    </section>
  );
}
