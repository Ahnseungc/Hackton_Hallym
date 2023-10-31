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
