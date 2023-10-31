"use client";

import { useState } from "react";

import Link from "next/link";

import HelperListItem from "@components/HelperListItem";

const List = [
  { Title: "과제도와주실분 구합니다.", Detail: "과제도와주실분 구합니다." },
  { Title: "과제도와주실분 구합니다.", Detail: "과제도와주실분 구합니다." },
  { Title: "과제도와주실분 구합니다.", Detail: "과제도와주실분 구합니다." },
  { Title: "과제도와주실분 구합니다.", Detail: "과제도와주실분 구합니다." },
  { Title: "과제도와주실분 구합니다.", Detail: "과제도와주실분 구합니다." },
  { Title: "과제도와주실분 구합니다.", Detail: "과제도와주실분 구합니다." },
  { Title: "과제도와주실분 구합니다.", Detail: "과제도와주실분 구합니다." },
  { Title: "과제도와주실분 구합니다.", Detail: "과제도와주실분 구합니다." },
  { Title: "과제도와주실분 구합니다.", Detail: "과제도와주실분 구합니다." },
  { Title: "과제도와주실분 구합니다.", Detail: "과제도와주실분 구합니다." },
  { Title: "과제도와주실분 구합니다.", Detail: "과제도와주실분 구합니다." },
  { Title: "과제도와주실분 구합니다.", Detail: "과제도와주실분 구합니다." },
];
const HelperList = () => {
  const [HList] = useState(List);

  return (
    <div>
      {HList.map((e: any, index: any) => {
        console.log(e);
        return (
          <Link
            href={"/priceinquiry/inquirydetail"}
            key={index}
            style={{ color: "black", textDecoration: "none" }}
          >
            <HelperListItem Title={e.Title} Detail={e.Detail} />
          </Link>
        );
      })}
    </div>
  );
};

export default HelperList;
