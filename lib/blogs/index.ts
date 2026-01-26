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
// New SEO Blogs
import marketingQR from "./how-to-use-qr-codes-for-marketing";
import securityQR from "./qr-code-security-and-safety";
import UpiQrCodeForSmallBusiness from "./upi-qr-code-for-small-business"

export const blogs: BlogPost[] = [
  howToCreateQR,
  wifiQR,
  businessQR,
  staticVsDynamic,
  howToCreateUPIQR,
  marketingQR,
  securityQR,
  UpiQrCodeForSmallBusiness,
];