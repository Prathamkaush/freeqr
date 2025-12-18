export default function PreviewPanel({
  qr,
  qrSize,
  downloadQR,
  downloadSVG,
  downloadPDF,
}: any) {
  const isReady = Boolean(qr);

  return (
    <div className="flex flex-col items-center gap-6">

      {/* PREVIEW AREA */}
      <div
        className="
          w-full h-[360px]
          flex items-center justify-center
          rounded-xl
          border border-borderDark
          bg-background
        "
      >
        {qr ? (
          <img
            src={qr}
            alt="QR Preview"
            className="max-w-full max-h-full"
            style={{ width: qrSize }}
          />
        ) : (
          <div className="text-center space-y-2">
            <div
              className="
                w-24 h-24
                rounded-lg
                border border-borderDark
                flex items-center justify-center
                text-textSecondary
                text-xs
              "
            >
              QR
            </div>
            <p className="text-xs text-textSecondary">
              QR preview will appear here
            </p>
          </div>
        )}
      </div>

      {/* STATUS TEXT */}
      <p className="text-xs text-textSecondary">
        {isReady
          ? "Your QR code is ready to download"
          : "Enter details to enable download"}
      </p>

      {/* DOWNLOAD BUTTONS */}
      <div className="flex gap-3">
        <button
          onClick={downloadQR}
          disabled={!isReady}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium
            border transition
            ${
              isReady
                ? "bg-primary text-white border-primary hover:bg-primaryHover"
                : "bg-surface text-textSecondary border-borderDark cursor-not-allowed"
            }
          `}
        >
          PNG
        </button>

        <button
          onClick={downloadSVG}
          disabled={!isReady}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium
            border transition
            ${
              isReady
                ? "bg-surface text-textPrimary border-borderDark hover:border-primary"
                : "bg-surface text-textSecondary border-borderDark cursor-not-allowed"
            }
          `}
        >
          SVG
        </button>

        <button
          onClick={downloadPDF}
          disabled={!isReady}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium
            border transition
            ${
              isReady
                ? "bg-surface text-textPrimary border-borderDark hover:border-primary"
                : "bg-surface text-textSecondary border-borderDark cursor-not-allowed"
            }
          `}
        >
          PDF
        </button>
      </div>
    </div>
  );
}
