import LiveQRGenerator from "@/components/qr/LiveQRGenerator";
import HowToCreateVCard from "@/components/how-to-create-vcard/page";
import VCardQrFAQ from "@/components/faq/VCardQrFAQ";
import  Link  from "next/link";

export const metadata = {
  title: "Free vCard QR Code Generator | Create Digital Business Cards",
  description:
    "Generate a free vCard QR code to share contact details instantly. No signup required. Create digital business cards for iPhone & Android in seconds.",
};

export default function VCardQrPage() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          <header className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-textPrimary tracking-tight">
              Free vCard QR Code Generator
            </h1>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto">
              The fastest way to create a <strong>digital business card</strong>. 
              Let people save your phone number, email, and social links with one scan.
            </p>
          </header>

          {/* GENERATOR - Kept High on Page for UX/Conversion */}
          <div className="shadow-xl rounded-2xl border border-gray-100 p-2">
            <LiveQRGenerator defaultType="VCARD" hideTypeSelector />
          </div>

          <hr className="border-gray-100" />

          {/* SEO SECTION 1: E-E-A-T & Definition */}
          <section className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-textPrimary">
                What is a vCard QR Code?
              </h2>
              <p className="text-textSecondary leading-relaxed">
                A <strong>vCard QR code</strong> is a digital format (Virtual Contact File) 
                encoded into a scannable image. Unlike a standard text QR, it triggers the 
                "Add to Contacts" prompt on <strong>iOS and Android</strong> instantly.
              </p>
              <ul className="space-y-2 text-textSecondary">
                <li>✅ <strong>Zero Manual Typing:</strong> Prevents typos in phone numbers.</li>
                <li>✅ <strong>Eco-Friendly:</strong> Replace thousands of paper cards.</li>
                <li>✅ <strong>Static & Permanent:</strong> Your FreeQR code never expires.</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
               <h3 className="font-bold mb-2">Pro Tip for Networking</h3>
               <p className="text-sm text-blue-800">
                 Add your vCard QR code to your <strong>Apple or Google Wallet</strong> 
                 to share your details even when you're offline at conferences.
               </p>
            </div>
          </section>

          {/* SEO SECTION 2: Use Cases (Internal Linking Opportunity) */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-textPrimary">
              Where to use your Contact QR Code
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Physical Business Cards", desc: "Print it on the back to keep the front minimal." },
                { title: "Email Signatures", desc: "Let clients save your mobile number from their desktop." },
                { title: "Resumes & CVs", desc: "Make it easy for recruiters to call you instantly." }
              ].map((item, i) => (
                <div key={i} className="p-4 border rounded-lg hover:bg-gray-50 transition">
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-sm text-textSecondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PRIVACY SECTION - Critical for User Trust (SEO Signal) */}
          <section className="bg-gray-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Privacy-First Generation</h2>
            <p className="text-gray-400">
              Unlike other generators, <strong>FreeQR does not store your personal data</strong>. 
              The vCard string is generated entirely in your browser. Your contact details 
              never touch our servers.
            </p>
          </section>

        </div>
        
      </section>

      <HowToCreateVCard />
      <VCardQrFAQ />
      <section className="mt-10 mb-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-surface border border-borderDark rounded-xl p-6 space-y-4">
            <p className="text-sm text-gray-400">
              You can also generate QR codes for other use cases:
            </p>

            <ul className="space-y-3">
              <li>
                <Link href="/wifi" className="text-white hover:text-primary">
                  WiFi QR Code Generator →
                </Link>
              </li>
              <li>
                <Link href="/email" className="text-white hover:text-primary">
                  Email QR Code Generator →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}