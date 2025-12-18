import ContactForm from "@/components/form/contact-form";

export const metadata = {
  title: "Contact – FreeQR",
  description: "Contact FreeQR for feedback, questions, or suggestions.",
};

export default function ContactPage() {
  return (
    <section className="bg-[#fff7f9] py-20">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brandBlack">
            Contact Us
          </h1>
          <p className="mt-4 text-brandGray">
            Have feedback or questions? We’d love to hear from you.
          </p>
        </div>

        <ContactForm />

        <p className="text-xs text-center text-gray-500 mt-6">
          This form is currently for feedback purposes only.
        </p>

      </div>
    </section>
  );
}
