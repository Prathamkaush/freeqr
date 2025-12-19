export default function UPIFaq() {
  return (
    <section className="py-20 border-t">
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        <div className="text-center">
          <h2 className="text-3xl font-bold">
            UPI QR Code – FAQs
          </h2>
          <p className="mt-3 text-gray-600">
            Common questions about UPI QR codes and payments.
          </p>
        </div>

        <div className="space-y-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold">
              What is a UPI QR code?
            </h3>
            <p className="mt-2 text-gray-600">
              A UPI QR code allows users to make payments by scanning the code
              using UPI apps like Google Pay, PhonePe, Paytm, or BHIM.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold">
              Is FreeQR’s UPI QR generator free?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes. FreeQR allows you to generate UPI QR codes completely free,
              without signup or hidden charges.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold">
              Do UPI QR codes expire?
            </h3>
            <p className="mt-2 text-gray-600">
              No. UPI QR codes do not expire. They work as long as your UPI ID
              remains active.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold">
              Can I set a fixed payment amount?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes. You can optionally add an amount while generating the QR code.
              Customers can also edit the amount in their UPI app.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold">
              Is it safe to use a UPI QR code?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes. Payments are handled entirely by your UPI app.
              FreeQR does not store or process any payment information.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold">
              Can I use this for business?
            </h3>
            <p className="mt-2 text-gray-600">
              Absolutely. UPI QR codes are widely used by shops, freelancers,
              restaurants, and small businesses.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
