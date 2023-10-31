"use client";

import { usePathname } from "next/navigation";

import ProductDetailTabber from "@components/ProductDetailTabbar";
import TabBar from "@components/Tabbar";
import Upbar from "@components/Upbar";
import ProductDetailUpbar from "@components/UpbarProductdetail";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const pathnameg = pathname.replace(/[0-9]/g, "");

  console.log(pathnameg);

  return (
    <html>
      <head></head>
      <body className="body">
        {pathnameg === `/productdetail/` ||
        pathnameg === `/priceinquiry/inquirydetail` ||
        pathnameg === "/helper" ? (
          <ProductDetailUpbar />
        ) : (
          <Upbar />
        )}
        {children}
        {pathnameg === `/productdetail/` ? <ProductDetailTabber /> : <TabBar />}
      </body>
    </html>
  );
}
