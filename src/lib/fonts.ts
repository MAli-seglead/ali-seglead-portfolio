import localFont from "next/font/local";
import { Noto_Kufi_Arabic } from "next/font/google";

export const panchang = localFont({
  src: [
    {
      path: "../../public/fonts/panchang/Panchang-Light.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../../public/fonts/panchang/Panchang-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/panchang/Panchang-Medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/panchang/Panchang-Bold.woff2",
      weight: "700",
      style: "normal"
    }
  ],
  display: "swap"
});

export const arabicDisplay = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap"
});