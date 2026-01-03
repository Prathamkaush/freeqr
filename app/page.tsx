import LiveQRGenerator from "@/components/qr/LiveQRGenerator";
import HowToUse from "@/components/how-to-use/HowToUse";
import BlogSection from "./blog/page";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO + GENERATOR */}
      <section className="bg-background pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {/* Hero */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-textPrimary tracking-tight">
              Privacy-First <span className="text-primary">Free QR Code Generator</span>
            </h1>

            <p className="mt-6 text-xl text-textSecondary leading-relaxed">
              Generate high-quality, secure QR codes instantly. No signups, no tracking, and no expiration. 
              The professional tool for businesses and individuals who value data privacy.
            </p>
          </div>

          {/* Generator */}
          <LiveQRGenerator />
        </div>
      </section>

      {/* NEW: SEO & CONTENT DEPTH SECTION (This fixes "Small Content" rejection) */}
      <section className="bg-white py-16 border-y border-borderDark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-textPrimary">Secure Payments & UPI</h3>
              <p className="text-textSecondary text-sm leading-relaxed">
                Empower your business with instant UPI QR codes. Whether you use Google Pay, PhonePe, or Paytm, 
                our generator creates standard-compliant payment codes that make transactions seamless for your customers.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-textPrimary">Instant WiFi Sharing</h3>
              <p className="text-textSecondary text-sm leading-relaxed">
                Stop typing long passwords. Generate a WiFi QR code to share your network credentials securely. 
                Guests can scan to connect without ever seeing your actual WPA/WPA2 password.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-textPrimary">Digital Business Cards</h3>
              <p className="text-textSecondary text-sm leading-relaxed">
                Create a vCard QR code to share your professional contact details. Include your name, 
                phone number, and email—allowing anyone to save your contact info with a single scan.
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-12 border-t border-gray-100 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold mb-2">WhatsApp & Email Integration</h3>
              <p className="text-textSecondary text-sm">
                Bridge the gap between offline marketing and online conversation. Create pre-filled 
                WhatsApp messages or Email links that trigger automatically when scanned, 
                perfect for customer support and lead generation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">No Tracking, Total Privacy</h3>
              <p className="text-textSecondary text-sm">
                Most QR generators track your users. FreeQR is different. Our client-side 
                technology ensures your data never leaves your browser. We offer a 100% 
                anonymous experience for both you and your users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <HowToUse />

      {/* BLOG TEASER */}
      <BlogSection />

      {/* SECONDARY CTA */}
      <section className="bg-background border-t border-borderDark py-16">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-textPrimary">
            Ready to use FreeQR for your project?
          </h2>

          <p className="text-textSecondary">
            Explore our comprehensive guides and technical FAQs to get the most out of your QR codes.
          </p>

          <div className="flex justify-center gap-6 text-sm font-medium">
            <Link href="/faq" className="text-primary hover:underline">
              View FAQ →
            </Link>
            <Link href="/blog" className="text-primary hover:underline">
              Read Blog →
            </Link>
            <Link href="/about" className="text-primary hover:underline">
              About FreeQR →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}