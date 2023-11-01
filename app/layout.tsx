"use client";

import { usePathname } from "next/navigation";

import TabBar from "@components/Tabbar";
import "../styles/font.css";

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
        <div
          style={{
            width: "100%",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Gmarket",
          }}
        >
          <span
            onClick={() => {
              localStorage.removeItem("userId");
              alert("reset");
            }}
            style={{
              color: "#171717",
              fontSize: "20px",
              fontWeight: "normal",
              fontFamily: "Gmarket Sans",
            }}
          >
            Flea Hallym
          </span>
        </div>
        {/*{pathnameg === `/productdetail/` ||*/}
        {/*pathnameg === `/priceinquiry/inquirydetail` ||*/}
        {/*pathnameg === "/helper" ? (*/}
        {/*    <ProductDetailUpbar/>*/}
        {/*) : (*/}
        {/*    <Upbar/>*/}
        {/*)}*/}
        <div
          style={{
            paddingBottom: "100px",
          }}
        >
          {children}
        </div>

        <TabBar />
      </body>
    </html>
  );
}
