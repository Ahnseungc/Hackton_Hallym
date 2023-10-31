"use client";

import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { Date: 23, Price: 0, 비유동인구수: 34000 },
  { Date: 25, Price: 20000, 비유동인구수: 56000 },
  { Date: 27, Price: 50000, 비유동인구수: 23000 },
  { Date: 28, Price: 70000, 비유동인구수: 67000 },
  { Date: 30, Price: 90000, 비유동인구수: 67000 },
  { Date: 31, Price: 110000, 비유동인구수: 67000 },
  { Date: 1, Price: 13000, 비유동인구수: 67000 },

  //   { Price: "강남구", 유동인구수: 51420, 비유동인구수: 55000 },
];

export default class rechartsSimpleLineChart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    return (
      <LineChart
        width={390}
        height={200}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Price"
          stroke="#000000"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
  }
}
