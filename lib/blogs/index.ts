export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

import howToCreateQR from "./how-to-create-a-qr-code-for-free";
import wifiQR from "./what-is-a-wifi-qr-code";
import businessQR from "./qr-codes-for-business";
import staticVsDynamic from "./static-vs-dynamic-qr-codes";
import howToCreateUPIQR from "./how-to-create-a-upi-qr-code";
import marketingQR from "./how-to-use-qr-codes-for-marketing";
import securityQR from "./qr-code-security-and-safety";
import UpiQrCodeForSmallBusiness from "./upi-qr-code-for-small-business"
import UrlToQrcode from "./url-to-qr-code"
import freevspaidqrcodegenerators from "./free-vs-paid-qr-code-generators"
import qrcodeforrestaurantsandcafes from "./qr-code-for-restaurants-and-cafes"
import qrCodeForWhatsAppBusiness from "./qr-code-for-whatsapp-business"
import bulkQRCodestrategy from "./bulk-qr-code-strategy"
import HOW_TO_ADD_VARD_IN_APPLE_ID from "./HOW-TO-ADD-VARD-IN-APPLE-ID"
import VcardQrGuide from "./VcardQrGuide"

export const blogs: BlogPost[] = [
  howToCreateQR,
  wifiQR,
  businessQR,
  staticVsDynamic,
  howToCreateUPIQR,
  marketingQR,
  securityQR,
  UpiQrCodeForSmallBusiness,
  freevspaidqrcodegenerators,
  qrcodeforrestaurantsandcafes,
  qrCodeForWhatsAppBusiness,
  bulkQRCodestrategy,
  HOW_TO_ADD_VARD_IN_APPLE_ID,
  UrlToQrcode,
  VcardQrGuide,
];