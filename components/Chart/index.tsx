"use client";

import React, { PureComponent, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface Props {
  Prs: [];
}

const rechartsSimpleLineChart = ({ Prs }: Props) => {
  const [prs, setPrs] = useState(Prs);

  const afterPrs = prs.map((e: any) => {
    return { date: e.date.slice(6, 9), price: e.value };
  });

  return (
    <LineChart
      width={390}
      height={200}
      data={afterPrs}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" style={{ fontSize: "10px" }} />
      <YAxis style={{ fontSize: "10px" }} />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="price"
        stroke="#000000"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default rechartsSimpleLineChart;
