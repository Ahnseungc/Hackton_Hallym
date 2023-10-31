"use client";

import { usePathname } from "next/navigation";

import ProductDetailTabber from "@components/ProductDetailTabbar";
import ProductDetailUpbar from "@components/UpbarProductdetail";
import TabBar from "@components/Tabbar";
import Upbar from "@components/Upbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <html>
      <head />
      <body>
        {pathname === "/productdetail" ? <ProductDetailUpbar /> : <Upbar />}
        {children}
        {pathname === "/productdetail" ? <ProductDetailTabber /> : <TabBar />}
      </body>
    </html>
  );
}
