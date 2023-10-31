"use client";

import ProductDetailTabber from "@components/ProductDetailTabbar";
export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ProductDetailTabber />
    </>
  );
}
