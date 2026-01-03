"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import jsPDF from "jspdf";

import PreviewPanel from "./Preview";
import InputPanel from "./Input";

type QRType =
  | "URL"
  | "TEXT"
  | "WIFI"
  | "WHATSAPP"
  | "EMAIL"
  | "UPI"
  | "VCARD";

export default function LiveQRGenerator({
  defaultType = "URL",
  hideTypeSelector = false,
}: {
  defaultType?: QRType;
  hideTypeSelector?: boolean;
}) {
  const [type, setType] = useState<QRType>(defaultType);
  const [qr, setQr] = useState<string | null>(null);

  /* CUSTOMIZATION */
  const [qrColor, setQrColor] = useState("#000000");
  const [qrSize, setQrSize] = useState(280);

  const [data, setData] = useState<any>({
    url: "",
    text: "",
    ssid: "",
    password: "",
    security: "WPA",
    phone: "",
    message: "",
    email: "",
    subject: "",
    body: "",

    upiId: "",
    upiName: "",
    upiAmount: "",
    upiNote: "",

    // VCARD
    firstName: "",
    lastName: "",
    vPhone: "",
    vEmail: "",
    company: "",
  });

  const isValidUPI = (upi: string) => {
    const upiRegex = /^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}$/;
    return upiRegex.test(upi);
  };

  /* ---------------- PAYLOAD ---------------- */
  const buildPayload = () => {
    switch (type) {
      case "URL":
        return data.url?.trim();

      case "TEXT":
        return data.text?.trim();

      case "WIFI":
        if (!data.ssid) return "";
        return `WIFI:T:${data.security};S:${data.ssid};P:${data.password};;`;

      case "WHATSAPP":
        if (!data.phone) return "";
        return `https://wa.me/${data.phone}?text=${encodeURIComponent(
          data.message || ""
        )}`;

      case "EMAIL":
        if (!data.email) return "";
        return `mailto:${data.email}?subject=${encodeURIComponent(
          data.subject || ""
        )}&body=${encodeURIComponent(data.body || "")}`;

      case "UPI":
        if (!data.upiId || !data.upiName) return "";
        if (!isValidUPI(data.upiId)) return "";

        let upiUrl = `upi://pay?pa=${encodeURIComponent(
          data.upiId
        )}&pn=${encodeURIComponent(data.upiName)}&cu=INR`;

        if (data.upiAmount) {
          upiUrl += `&am=${encodeURIComponent(data.upiAmount)}`;
        }

        if (data.upiNote) {
          upiUrl += `&tn=${encodeURIComponent(data.upiNote)}`;
        }

        return upiUrl;

      case "VCARD":
        if (!data.firstName && !data.lastName) return "";

        return `BEGIN:VCARD
VERSION:3.0
N:${data.lastName};${data.firstName}
FN:${data.firstName} ${data.lastName}
${data.company ? `ORG:${data.company}` : ""}
${data.vPhone ? `TEL:${data.vPhone}` : ""}
${data.vEmail ? `EMAIL:${data.vEmail}` : ""}
END:VCARD`;

      default:
        return "";
    }
  };

  const payload = buildPayload();

  /* ---------------- LIVE QR ---------------- */
  useEffect(() => {
    if (!payload) {
      setQr(null);
      return;
    }

    QRCode.toDataURL(payload, {
      width: qrSize,
      margin: 2,
      color: {
        dark: qrColor,
        light: "#ffffff",
      },
    })
      .then(setQr)
      .catch(() => setQr(null));
  }, [payload, qrColor, qrSize]);

  /* ---------------- DOWNLOADS ---------------- */
  const downloadPNG = () => {
    if (!qr) return;
    const a = document.createElement("a");
    a.href = qr;
    a.download = "freeqr.png";
    a.click();
  };

  const downloadSVG = async () => {
    if (!payload) return;

    const svg = await QRCode.toString(payload, {
      type: "svg",
      color: {
        dark: qrColor,
        light: "#ffffff",
      },
    });

    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "freeqr.svg";
    a.click();

    URL.revokeObjectURL(url);
  };

  const downloadPDF = async () => {
    if (!payload) return;

    const dataUrl = await QRCode.toDataURL(payload, {
      width: 600,
      margin: 2,
      color: {
        dark: qrColor,
        light: "#ffffff",
      },
    });

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [700, 700],
    });

    pdf.addImage(dataUrl, "PNG", 50, 50, 600, 600);
    pdf.save("freeqr.pdf");
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="max-w-6xl mx-auto bg-surface border border-borderDark rounded-2xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <InputPanel
          type={type}
          setType={setType}
          data={data}
          setData={setData}
          qrColor={qrColor}
          setQrColor={setQrColor}
          qrSize={qrSize}
          setQrSize={setQrSize}
          isValidUPI={isValidUPI}
          hideTypeSelector={hideTypeSelector}
        />

        <PreviewPanel
          qr={qr}
          qrSize={qrSize}
          downloadQR={downloadPNG}
          downloadSVG={downloadSVG}
          downloadPDF={downloadPDF}
        />
      </div>
    </div>
  );
}
