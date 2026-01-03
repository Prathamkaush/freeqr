export const metadata = {
  title: "FAQ – FreeQR | Everything About QR Code Generation",
  description:
    "Find answers about UPI QR codes, WiFi sharing, vCards, WhatsApp links, and privacy-first QR generation on FreeQR.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Is FreeQR really free to use?",
      a: "Yes. FreeQR is 100% free. We do not have hidden subscriptions, watermarks, or limits on how many QR codes you can generate and download.",
    },
    {
      q: "How do UPI QR codes work?",
      a: "Our UPI QR generator uses the standard 'upi://pay' protocol. When scanned with apps like Google Pay, PhonePe, or Paytm, it automatically populates your VPA (UPI ID) and the requested amount, making payments seamless for customers.",
    },
    {
      q: "What is a vCard QR code?",
      a: "A vCard (Virtual Contact File) QR code stores your contact information like name, phone number, and email. When scanned, the person's phone will automatically prompt them to 'Save Contact' without typing a single letter.",
    },
    {
      q: "How does the WiFi QR code keep me safe?",
      a: "Instead of revealing your WiFi password to everyone, you can generate a WiFi QR. It encodes the SSID, Password, and Encryption type (WPA/WPA2/WEP) so guests can connect instantly without ever seeing your actual password in plain text.",
    },
    {
      q: "Can I create WhatsApp and Email QR codes?",
      a: "Absolutely. Our generator can pre-fill a phone number and a custom message for WhatsApp, or an email address, subject line, and body text. This is perfect for 'Contact Us' buttons on physical posters.",
    },
    {
      q: "What is a Text QR code used for?",
      a: "Text QR codes are the most versatile. They can store up to several hundred characters of plain text, which can be used for serial numbers, secret messages, or instructions that don't require an internet connection to read.",
    },
    {
      q: "Do QR codes created with FreeQR expire?",
      a: "No. The QR codes we generate are 'Static.' This means the data is hardcoded into the pixels. As long as your link is active or your WiFi password remains the same, the QR code will work forever.",
    },
    {
      q: "Are my data or QR codes stored on your servers?",
      a: "Privacy is our priority. All generation happens locally using JavaScript in your browser. We never see your UPI IDs, passwords, or personal messages, and nothing is stored in our database.",
    },
    {
      q: "Which formats can I download?",
      a: "We support PNG for web use, SVG for vector scaling (infinite resolution for large prints), and PDF for easy document sharing.",
    },
    {
      q: "Can I use FreeQR for commercial purposes?",
      a: "Yes. You are free to use our generated codes on business cards, product packaging, storefronts, and advertisements without any licensing fees.",
    },
  ];

  return (
    <section className="bg-background py-24 border-t border-borderDark">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-textPrimary">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-textSecondary">
            Detailed guides and answers to help you get the most out of FreeQR.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-surface border border-borderDark rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h2 className="text-lg font-semibold text-textPrimary">
                {item.q}
              </h2>
              <p className="mt-2 text-textSecondary leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* Educational Content Section (Crucial for AdSense "Depth") */}
        <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-textPrimary mb-4 text-center">QR Code Best Practices</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-bold mb-1">Contrast is Key</h3>
              <p className="text-textSecondary">Always use a dark color for the QR code and a light color for the background to ensure scanners can read it.</p>
            </div>
            <div>
              <h3 className="font-bold mb-1">Size Matters</h3>
              <p className="text-textSecondary">For business cards, 2cm x 2cm is the minimum. For posters, ensure the code is large enough to scan from a distance.</p>
            </div>
            <div>
              <h3 className="font-bold mb-1">Test Before Printing</h3>
              <p className="text-textSecondary">Always perform a test scan with both iOS and Android devices before committing to a large print run.</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center pt-10">
          <p className="text-sm text-textSecondary">
            Still have questions or need a specific feature?
            <a
              href="/contact"
              className="ml-1 text-primary font-medium hover:underline"
            >
              Contact our support team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}