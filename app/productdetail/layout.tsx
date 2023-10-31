"use client";

import ProductDetailTabbar from "@components/ProductDetailTabbar";
import ProductDetailUpbar from "@components/UpbarProductdetail";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <ProductDetailUpbar />
        {children}
        <ProductDetailTabbar />
      </body>
    </html>
  );
}
