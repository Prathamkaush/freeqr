import BulkQRGenerator from "@/components/qr/BulkQRGenerator";
import Link from "next/link";

export const metadata = {
  title: "Bulk QR Code Generator – FreeQR",
  description:
    "Generate multiple QR codes at once with FreeQR's bulk generator. Perfect for businesses, events, and mass distribution.",
};

export default function BulkPage() {
  return (
    <main className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <section className="text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-primary font-semibold">
            Business-grade QR tools
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-textPrimary">
            Bulk QR Code Generator for Events, Retail, and Corporate Use
          </h1>
          <p className="mt-6 text-lg text-textSecondary max-w-3xl mx-auto leading-relaxed">
            Generate and download multiple QR codes in one go. FreeQR&apos;s bulk tool is ideal for
            print campaigns, product packaging, event badges, customer onboarding, and large-scale distribution.
          </p>
        </section>

        <section className="bg-surface border border-borderDark rounded-3xl p-8 shadow-sm">
          <BulkQRGenerator />
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white border border-borderDark p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Fast Batch Creation</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Create many QR codes at once, then download them together as a PDF. Perfect for stores,
              conferences, schools, and multi-location campaigns.
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-borderDark p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Print-Ready Output</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Export your codes in high-quality formats so they look crisp on flyers, labels, brochures,
              and signage. The PDF output is ready for professional printing.
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-borderDark p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Privacy Focused</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              All QR generation happens locally in your browser. We do not store your content,
              making the bulk generator safe for private and business use.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-white border border-borderDark p-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Learn the best bulk QR code strategies</h2>
          <p className="text-slate-600 mb-6">
            Read our guide to bulk QR code best practices, including layout, labeling, and distribution tips
            for large campaigns and business use.
          </p>
          <Link href="/blog/bulk-qr-code-strategy" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primaryHover transition-colors">
            Read Bulk QR Best Practices
          </Link>
        </section>

        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-textPrimary">Bulk Generator FAQ</h2>
            <p className="mt-3 text-slate-400 max-w-3xl mx-auto">
              Learn how to use FreeQR&apos;s bulk generator, what file formats are available,
              and how to keep your data secure while creating multiple QR codes.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl bg-white border border-borderDark p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Can I generate more than one QR code at once?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes. Add multiple items to the bulk generator, then click the generate button to create all
                QR codes in a single batch. You can use the PDF export to download the entire collection.
              </p>
            </article>

            <article className="rounded-3xl bg-white border border-borderDark p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                What export formats does the bulk generator support?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The bulk page provides a PDF export containing every generated QR code. The main generator
                still supports PNG, SVG, and PDF for individual codes.
              </p>
            </article>

            <article className="rounded-3xl bg-white border border-borderDark p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Does FreeQR save my data?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No. FreeQR processes QR content on the client only. Your information stays in your browser
                and is never stored on our servers.
              </p>
            </article>

            <article className="rounded-3xl bg-white border border-borderDark p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Who should use the bulk QR code tool?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                This tool is ideal for marketing teams, event planners, educators, retailers,
                and anyone who needs many QR codes for labels, menus, badges, or product packaging.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
