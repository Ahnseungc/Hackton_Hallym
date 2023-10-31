// "use client";

import dynamic from "next/dynamic";
type Props = {};

const Chart = dynamic(() => import("@components/Chart"));

function inquirydetail({}: Props) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          width: "95vw",
          height: "30vh",
          border: "1px solid black",
          marginBottom: "10vh",
          marginTop: "7vh",
        }}
      >
        이미지
      </div>
      <div
        style={{ fontSize: "30px", fontWeight: "310", marginBottom: "10vh" }}
      >
        아이폰 13 미니 128g
      </div>
      {<Chart />}
    </div>
  );
}

export default inquirydetail;
