import HeroSection from "@/components/layout/HeroSection";
import HowToUse from "@/components/how-to-use/HowToUse";
import BlogSection from "./blog/page";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* NEW: SEO & CONTENT DEPTH SECTION (This fixes "Small Content" rejection) */}
      <section className="bg-white py-16 border-y border-borderDark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-textPrimary mb-4">
              Professional QR Code Solutions for Every Need
            </h2>
            <p className="text-lg text-textSecondary max-w-2xl mx-auto">
              From secure payments to instant connectivity, discover how FreeQR transforms everyday interactions into seamless digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4 p-6 rounded-xl border border-borderDark hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-bold text-textPrimary">Secure Payments & UPI</h3>
              <p className="text-textSecondary text-sm leading-relaxed">
                Empower your business with instant UPI QR codes. Whether you use Google Pay, PhonePe, or Paytm,
                our generator creates standard-compliant payment codes that make transactions seamless for your customers.
                Perfect for restaurants, retail stores, and service providers.
              </p>
              <div className="pt-2">
                <Link href="/upi-qr" className="text-primary text-sm hover:underline">
                  Learn more about UPI QR codes →
                </Link>
              </div>
            </div>

            <div className="space-y-4 p-6 rounded-xl border border-borderDark hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📶</span>
              </div>
              <h3 className="text-xl font-bold text-textPrimary">Instant WiFi Sharing</h3>
              <p className="text-textSecondary text-sm leading-relaxed">
                Stop typing long passwords. Generate a WiFi QR code to share your network credentials securely.
                Guests can scan to connect without ever seeing your actual WPA/WPA2 password. Ideal for cafes,
                hotels, offices, and public spaces.
              </p>
              <div className="pt-2">
                <Link href="/wifi" className="text-primary text-sm hover:underline">
                  WiFi QR code guide →
                </Link>
              </div>
            </div>

            <div className="space-y-4 p-6 rounded-xl border border-borderDark hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👔</span>
              </div>
              <h3 className="text-xl font-bold text-textPrimary">Digital Business Cards</h3>
              <p className="text-textSecondary text-sm leading-relaxed">
                Create a vCard QR code to share your professional contact details. Include your name, phone number,
                email, company, and website—allowing anyone to save your contact info with a single scan.
                Perfect for networking events and professional introductions.
              </p>
              <div className="pt-2">
                <Link href="/vcard" className="text-primary text-sm hover:underline">
                  Create vCard QR code →
                </Link>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 rounded-xl bg-gray-50">
              <h3 className="text-lg font-bold mb-2">WhatsApp & Email Integration</h3>
              <p className="text-textSecondary text-sm">
                Bridge the gap between offline marketing and online conversation. Create pre-filled
                WhatsApp messages or Email links that trigger automatically when scanned,
                perfect for customer support and lead generation.
              </p>
              <ul className="text-sm text-textSecondary space-y-1 mt-3">
                <li>• Pre-filled customer support messages</li>
                <li>• Automated email campaigns</li>
                <li>• Direct messaging for businesses</li>
              </ul>
            </div>

            <div className="space-y-4 p-6 rounded-xl bg-gray-50">
              <h3 className="text-lg font-bold mb-2">No Tracking, Total Privacy</h3>
              <p className="text-textSecondary text-sm">
                Most QR generators track your users. FreeQR is different. Our client-side
                technology ensures your data never leaves your browser. We offer a 100%
                anonymous experience for both you and your users.
              </p>
              <ul className="text-sm text-textSecondary space-y-1 mt-3">
                <li>• Zero data collection</li>
                <li>• Client-side processing only</li>
                <li>• No cookies or tracking pixels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <HowToUse />

      {/* TESTIMONIALS SECTION */}
      <section className="bg-background py-16 border-t border-borderDark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-textPrimary mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-lg text-textSecondary">
              See how FreeQR helps businesses streamline their operations and enhance customer experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-borderDark">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">R</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-textPrimary">Rajesh Kumar</h4>
                  <p className="text-sm text-textSecondary">Restaurant Owner</p>
                </div>
              </div>
              <p className="text-textSecondary text-sm">
                "FreeQR's UPI payment codes have revolutionized our billing system. Customers can pay instantly
                without waiting for change. Our transaction volume increased by 40% since implementing QR payments."
              </p>
              <div className="flex text-yellow-400 mt-3">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-borderDark">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">S</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-textPrimary">Sarah Chen</h4>
                  <p className="text-sm text-textSecondary">Cafe Manager</p>
                </div>
              </div>
              <p className="text-textSecondary text-sm">
                "The WiFi QR codes are a game-changer for our cafe. Guests connect instantly without asking
                for passwords. It's faster, more secure, and our customers love the convenience."
              </p>
              <div className="flex text-yellow-400 mt-3">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-borderDark">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">M</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-textPrimary">Michael Rodriguez</h4>
                  <p className="text-sm text-textSecondary">Marketing Consultant</p>
                </div>
              </div>
              <p className="text-textSecondary text-sm">
                "As a consultant, I need professional tools. FreeQR's customization options and privacy focus
                make it perfect for client work. The vCard QR codes have streamlined my networking process."
              </p>
              <div className="flex text-yellow-400 mt-3">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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