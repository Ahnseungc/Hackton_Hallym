"use client";

import TabBar from "@components/Tabbar";
import Upbar from "@components/Upbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Upbar />
        {children}
        <TabBar />
      </body>
    </html>
  );
}
