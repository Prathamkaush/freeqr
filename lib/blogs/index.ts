export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

import howToCreateQR from "./how-to-create-a-qr-code-for-free";
import wifiQR from "./What-is-a-wifi-qr-code";
import businessQR from "./qr-codes-for-business";
import staticVsDynamic from "./Static-vs-dynamic-qr-codes";
import howToCreateUPIQR from "./how-to-create-a-upi-qr-code";

 export  const blogs: BlogPost[] = [
  howToCreateQR,
  wifiQR,
  businessQR,
  staticVsDynamic,
  howToCreateUPIQR,
];
