import { FiLink, FiFileText, FiWifi, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { IndianRupee } from "lucide-react"; 

const tabs = [
  { key: "URL", label: "URL", icon: <FiLink /> },
  { key: "TEXT", label: "Text", icon: <FiFileText /> },
  { key: "WIFI", label: "WiFi", icon: <FiWifi /> },
  { key: "WHATSAPP", label: "WhatsApp", icon: <FaWhatsapp /> },
  { key: "EMAIL", label: "Email", icon: <FiMail /> },
  { key: "UPI", label: "UPI", icon: <IndianRupee size={14} /> },
];

export default function InputPanel({
  type,
  setType,
  data,
  setData,
  qrColor,
  setQrColor,
  qrSize,
  setQrSize,
  isValidUPI,
}: any) {
  return (
    <div className="space-y-8">

      {/* QR TYPE SELECTOR */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-textSecondary">
          Choose QR type
        </p>

        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => {
            const active = type === t.key;

            return (
              <button
                key={t.key}
                onClick={() => setType(t.key)}
                className={`
                  inline-flex items-center gap-1.5
                  px-3 py-1.5
                  rounded-md text-xs font-medium
                  border transition
                  ${
                    active
                      ? "bg-primary text-white border-primary"
                      : "bg-background text-textSecondary border-borderDark hover:border-primary"
                  }
                `}
              >
                {t.icon}
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* INPUTS */}
      {type === "URL" && (
        <input
          placeholder="https://example.com"
          value={data.url}
          onChange={(e) => setData({ ...data, url: e.target.value })}
          className="w-full bg-background border border-borderDark rounded-lg px-4 py-2
                     text-textPrimary placeholder:text-textSecondary
                     focus:outline-none focus:border-primary"
        />
      )}

      {type === "TEXT" && (
        <textarea
          placeholder="Enter text"
          value={data.text}
          onChange={(e) => setData({ ...data, text: e.target.value })}
          className="w-full bg-background border border-borderDark rounded-lg px-4 py-2 h-24
                     text-textPrimary placeholder:text-textSecondary
                     focus:outline-none focus:border-primary"
        />
      )}

      {type === "WIFI" && (
        <div className="space-y-3">
          <input
            placeholder="WiFi Name (SSID)"
            value={data.ssid}
            onChange={(e) => setData({ ...data, ssid: e.target.value })}
            className="w-full bg-background border border-borderDark rounded-lg px-4 py-2
                       text-textPrimary placeholder:text-textSecondary
                       focus:outline-none focus:border-primary"
          />
          <input
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="w-full bg-background border border-borderDark rounded-lg px-4 py-2
                       text-textPrimary placeholder:text-textSecondary
                       focus:outline-none focus:border-primary"
          />
        </div>
      )}

      {type === "EMAIL" && (
        <div className="space-y-3">
          <input
            placeholder="Email address"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="w-full bg-background border border-borderDark rounded-lg px-4 py-2
                       text-textPrimary placeholder:text-textSecondary
                       focus:outline-none focus:border-primary"
          />
          <input
            placeholder="Subject (optional)"
            value={data.subject}
            onChange={(e) => setData({ ...data, subject: e.target.value })}
            className="w-full bg-background border border-borderDark rounded-lg px-4 py-2
                       text-textPrimary placeholder:text-textSecondary
                       focus:outline-none focus:border-primary"
          />
          <textarea
            placeholder="Message (optional)"
            value={data.body}
            onChange={(e) => setData({ ...data, body: e.target.value })}
            className="w-full bg-background border border-borderDark rounded-lg px-4 py-2 h-20
                       text-textPrimary placeholder:text-textSecondary
                       focus:outline-none focus:border-primary"
          />
        </div>
      )}

      {type === "WHATSAPP" && (
        <div className="space-y-3">
          <input
            placeholder="Phone number (with country code)"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            className="w-full bg-background border border-borderDark rounded-lg px-4 py-2
                       text-textPrimary placeholder:text-textSecondary
                       focus:outline-none focus:border-primary"
          />
          <textarea
            placeholder="Message (optional)"
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            className="w-full bg-background border border-borderDark rounded-lg px-4 py-2 h-20
                       text-textPrimary placeholder:text-textSecondary
                       focus:outline-none focus:border-primary"
          />
        </div>
      )}

{type === "UPI" && (
  <div className="space-y-3">
    <input
      placeholder="UPI ID (e.g. name@upi)"
      value={data.upiId}
      onChange={(e) =>
        setData({ ...data, upiId: e.target.value })
      }
      className="input"
      required
    />

  {data.upiId && !isValidUPI(data.upiId) && (
      <p className="text-xs text-red-500">
        Please enter a valid UPI ID (example: name@upi)
      </p>
    )}

    <input
      placeholder="Payee name"
      value={data.upiName}
      onChange={(e) =>
        setData({ ...data, upiName: e.target.value })
      }
      className="input"
      required
    />

    <input
      type="number"
      placeholder="Amount (optional)"
      value={data.upiAmount}
      onChange={(e) =>
        setData({ ...data, upiAmount: e.target.value })
      }
      className="input"
    />

    <input
      placeholder="Note / purpose (optional)"
      value={data.upiNote}
      onChange={(e) =>
        setData({ ...data, upiNote: e.target.value })
      }
      className="input"
    />

    <p className="text-xs text-gray-500">
      Payments are handled by your UPI app. FreeQR does not process payments.
    </p>
  </div>
)}


      {/* CUSTOMIZATION */}
      <div className="grid grid-cols-2 gap-6 pt-2">
        <div className="space-y-1">
          <label className="text-xs text-textSecondary">
            QR Color
          </label>
          <input
            type="color"
            value={qrColor}
            onChange={(e) => setQrColor(e.target.value)}
            className="w-full h-10 rounded bg-background border border-borderDark"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-textSecondary">
            Size ({qrSize}px)
          </label>
          <input
            type="range"
            min={200}
            max={400}
            step={20}
            value={qrSize}
            onChange={(e) => setQrSize(Number(e.target.value))}
            className="w-full accent-primary"
          />
        </div>
      </div>
    </div>
  );
}
