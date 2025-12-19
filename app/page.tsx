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
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-textPrimary">
              Free QR Code Generator
            </h1>

            <p className="mt-4 text-lg text-textSecondary">
              Create QR codes for URLs, text, WiFi, WhatsApp, and email.
              No signup. Free forever.
            </p>
          </div>

          {/* Generator */}
          <LiveQRGenerator />
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
            Learn more about QR codes
          </h2>

          <p className="text-textSecondary">
            Read guides, FAQs, and best practices to use QR codes effectively.
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
