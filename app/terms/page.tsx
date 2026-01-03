export const metadata = {
  title: "Terms & Conditions – FreeQR | Usage Policy",
  description:
    "Review the terms of service for FreeQR. Understand your rights, responsibilities, and our service disclaimers for QR code generation.",
};

export default function TermsPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-brandBlack">
            Terms & Conditions
          </h1>
          <p className="text-lg text-brandGray">
            Effective Date: January 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-white border rounded-2xl p-10 space-y-8 text-gray-700 leading-relaxed shadow-sm">

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-brandBlack">1. Acceptance of Terms</h2>
            <p>
              By accessing and using FreeQR ("the Service"), you agree to comply with and be bound by these Terms and Conditions. These terms apply to all visitors, users, and others who wish to access or use the Service. Your access to the Service is conditioned upon your acceptance of and compliance with these Terms.
            </p>
          </section>

          <section className="space-y-4 border-t pt-6">
            <h2 className="text-xl font-bold text-brandBlack">2. License & Use of Service</h2>
            <p>
              FreeQR grants you a personal, non-exclusive, non-transferable, and limited license to use the QR code generator for both personal and commercial purposes. 
            </p>
            <p><strong>You agree not to:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the service for any illegal or unauthorized purpose.</li>
              <li>Attempt to decompile, reverse engineer, or disrupt the Service's infrastructure.</li>
              <li>Generate QR codes that link to malware, phishing sites, or harmful content.</li>
            </ul>
          </section>

          <section className="space-y-4 border-t pt-6">
            <h2 className="text-xl font-bold text-brandBlack">3. User Responsibility & Content</h2>
            <p>
              The Service allows you to input data (URLs, WiFi passwords, contact info, etc.) to generate QR codes. Because our generation process is <strong>client-side</strong>, we do not monitor or control the content you create. 
            </p>
            <p>
              You are solely responsible for the accuracy and legality of the information encoded. FreeQR is not liable for any damages resulting from the use of QR codes containing incorrect, malicious, or outdated information.
            </p>
          </section>

          <section className="space-y-4 border-t pt-6">
            <h2 className="text-xl font-bold text-brandBlack">4. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding user-provided data), features, and functionality are and will remain the exclusive property of FreeQR and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of FreeQR.
            </p>
          </section>

          <section className="space-y-4 border-t pt-6 bg-red-50/30 p-6 rounded-xl">
            <h2 className="text-xl font-bold text-brandBlack">5. Disclaimer of Warranties</h2>
            <p className="italic text-sm">
              FreeQR is provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations or warranties of any kind, express or implied, as to the operation of the Service. We do not warrant that the Service will be uninterrupted, secure, or free from errors or viruses. You use this tool at your own risk.
            </p>
          </section>

          <section className="space-y-4 border-t pt-6">
            <h2 className="text-xl font-bold text-brandBlack">6. Limitation of Liability</h2>
            <p>
              In no event shall FreeQR, its directors, or employees be liable for any indirect, incidental, special, or consequential damages, including but not limited to loss of profits, data, or business reputation, arising out of your use of the Service.
            </p>
          </section>

          <section className="space-y-4 border-t pt-6">
            <h2 className="text-xl font-bold text-brandBlack">7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

        </div>

        {/* Footer Note */}
        <p className="text-xs text-center text-gray-500">
          If you have questions regarding these terms, please contact us
          through our <a href="/contact" className="underline font-bold">Contact Page</a>.
        </p>

      </div>
    </section>
  );
}