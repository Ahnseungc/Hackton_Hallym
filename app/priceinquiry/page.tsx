"use client";

import React from "react";

import dynamic from "next/dynamic";

type Props = {};

const ChartList = dynamic(() => import("@components/ChartProductList"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

function PriceInquiry({}: Props) {
  return (
    <div>
      <ChartList />
    </div>
  );
}

export default PriceInquiry;
