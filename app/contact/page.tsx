import ContactForm from "@/components/form/contact-form";

export const metadata = {
  title: "Contact FreeQR – Get Support & Provide Feedback",
  description: "Connect with the FreeQR team. Whether you have a technical question, a feature request, or feedback on our QR generator, we are here to help.",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-brandBlack">
            Get in Touch
          </h1>
          <p className="text-lg text-brandGray max-w-xl mx-auto">
            Have a question about our QR generator? Our team is dedicated to providing the best privacy-first experience on the web.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          
          {/* Support Information (New Content) */}
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-brandBlack">Support Hours</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our team monitors feedback and technical reports <strong>Monday through Friday</strong>. 
                We typically respond to inquiries within 24–48 hours.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-brandBlack">Quick Help</h2>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium text-brandBlack">Report a Bug</p>
                  <p className="text-gray-600">Include your browser and device type for a faster resolution.</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-brandBlack">Feature Requests</p>
                  <p className="text-gray-600">We love hearing how we can make FreeQR better for your business.</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-brandBlack">API Inquiries</p>
                  <p className="text-gray-600">Currently, our generator is client-side only. We do not offer a public API at this time.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="md:col-span-3 bg-white border rounded-2xl p-8 shadow-sm">
            <ContactForm />
            <p className="text-[10px] text-center text-gray-400 mt-6 uppercase tracking-widest">
              Secure & Privacy-Focused Messaging
            </p>
          </div>
        </div>

        {/* FAQ Section (Adds great value for AdSense) */}
        <div className="border-t pt-16">
          <h2 className="text-2xl font-bold text-brandBlack text-center mb-10">Common Questions</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-sm">
            <div className="space-y-2">
              <h3 className="font-bold">Is my data shared when I contact you?</h3>
              <p className="text-gray-600">No. We only use your email to reply to your inquiry. We never sell your contact information to third parties.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Why is my QR code not scanning?</h3>
              <p className="text-gray-600">Ensure there is enough contrast between the foreground and background. High-density data may require a larger print size.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Do you store the QR codes I create?</h3>
              <p className="text-gray-600">Never. Your QR codes are generated locally in your browser and are not saved on our servers.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Can I use these QR codes commercially?</h3>
              <p className="text-gray-600">Yes! All QR codes generated via FreeQR are free for personal and commercial use without attribution.</p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-gray-50 rounded-xl p-6 text-center">
          <p className="text-xs text-gray-500 italic">
            <strong>Privacy Note:</strong> This contact form is for communication purposes only. 
            FreeQR does not track your location or store persistent cookies when you message us. 
            By clicking send, you agree to our privacy policy.
          </p>
        </div>

      </div>
    </section>
  );
}