"use client";

import dynamic from "next/dynamic";
import useSWR from "swr";

import fetcher from "@hooks/fetcher";

type Props = {};

const Chart = dynamic(() => import("@components/Chart"));

function Page({ params }: { params: { id: any } }) {
  const { data, error } = useSWR("http://10.50.227.158:3000/product", fetcher);
  if (error) return <div>failed to loading</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);

  return data.map((e: any) => {
    if (e.id === Number(params.id)) {
      return (
        <div
          style={{
            width: "100%",
            paddingTop: "50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            <span
              style={{ fontSize: "30px", fontWeight: "700", color: "#171717" }}
            >
              {e ? e.name : "loading"}
            </span>
            <span
              style={{ fontSize: "17px", fontWeight: "500", color: "#6B7280" }}
            >
              {e ? e.category : "loading"}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              backgroundColor: "#E2E8F0",
              borderRadius: "5px",
              maxWidth: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "0 20px 25vh 20px",
              padding: "20px",
            }}
          >
            <span
              style={{
                color: "#1E293B",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              평균 시세
            </span>
            <span
              style={{
                color: "#6B7280",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {e ? e.priceStat.averagePrice : 0}원
            </span>
          </div>
          <Chart Prs={e.priceStat.histories} />
        </div>
      );
    }
  });
}

export default Page;
