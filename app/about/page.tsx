export const metadata = {
  title: "About FreeQR – Professional, Privacy-Friendly QR Code Solutions",
  description:
    "Learn about FreeQR, the industry-standard for privacy-first QR code generation. Discover how we empower users with secure, instant, and high-quality QR codes.",
};

export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-brandBlack tracking-tight">
            The Mission Behind FreeQR
          </h1>
          <p className="text-xl text-brandGray max-w-2xl mx-auto">
            Redefining digital connectivity through secure, accessible, and transparent QR technology.
          </p>
        </div>

        {/* Core Mission Content */}
        <div className="bg-white border rounded-2xl p-10 space-y-8 text-gray-700 leading-relaxed shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-brandBlack">Why We Built FreeQR</h2>
            <p>
              In an era where personal data is often treated as a commodity, <strong>FreeQR</strong> was founded on a simple principle: 
              tools should serve the user, not exploit them. Most QR generators today hide core features behind paywalls, 
              require unnecessary accounts, or track the links you create.
            </p>
            <p>
              FreeQR provides a professional-grade alternative. By utilizing client-side generation technology, 
              we’ve built a platform where your data never touches a server. This isn't just a convenience—it's a 
              security standard for businesses and individuals alike.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Detailed Features Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-brandBlack">Comprehensive QR Solutions</h2>
            <p>
              Our tool is designed to be a Swiss Army knife for digital information sharing. We support a wide array 
              of formats to help you bridge the gap between the physical and digital worlds:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dynamic URLs:</strong> Direct users to websites, portfolios, or social media profiles.</li>
              <li><strong>Contactless WiFi:</strong> Share network credentials securely without typing long passwords.</li>
              <li><strong>Secure Payments:</strong> Generate UPI and payment links for seamless business transactions.</li>
              <li><strong>Communication:</strong> Instant triggers for WhatsApp messages, SMS, and Email.</li>
              <li><strong>Plain Text:</strong> Store notes or instructions directly within a scannable code.</li>
            </ul>
          </div>
        </div>

        {/* The Technology/How it Works Section (Great for SEO/Content Length) */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-brandBlack">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="font-bold text-lg">1. Input & Customization</h3>
              <p className="text-gray-600">Enter your data and watch the QR code update in real-time. Customize colors to match your brand identity or personal style.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">2. Local Generation</h3>
              <p className="text-gray-600">Our algorithm processes the data right in your browser. This ensures maximum speed and total privacy.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">3. High-Resolution Export</h3>
              <p className="text-gray-600">Download your QR codes in high-quality formats suitable for both digital screens and professional print materials.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">4. Scannability Testing</h3>
              <p className="text-gray-600">Our codes are optimized for high error correction, meaning they remain scannable even if printed on textured surfaces.</p>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="grid sm:grid-cols-3 gap-6 text-sm text-gray-600">
          <div className="border rounded-xl p-6 bg-gray-50">
            <strong className="block text-brandBlack text-lg mb-2">Zero Tracking</strong>
            We do not use cookies to track your activity or store the information you encode.
          </div>

          <div className="border rounded-xl p-6 bg-gray-50">
            <strong className="block text-brandBlack text-lg mb-2">Open Access</strong>
            No subscriptions, no "premium" downloads, and no watermarks on your images.
          </div>

          <div className="border rounded-xl p-6 bg-gray-50">
            <strong className="block text-brandBlack text-lg mb-2">Global Standards</strong>
            Our codes follow the ISO/IEC 18004 standard, ensuring compatibility with all modern scanners.
          </div>
        </div>

        <div className="text-center pt-10">
          <p className="text-gray-500 italic">
            Thank you for choosing FreeQR. We are committed to keeping the web open, private, and efficient.
          </p>
        </div>

      </div>
    </section>
  );
}