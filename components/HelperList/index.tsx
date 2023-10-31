"use client";

import { useState } from "react";

import Link from "next/link";

import HelperListItem from "@components/HelperListItem";

const List = [
  {
    Title: "과제도와주실분 구합니다.",
    Detail: "과제도와주실분 구합니다.",
    Date: "20분전",
  },
  {
    Title: "과제도와주실분 구합니다.",
    Detail: "과제도와주실분 구합니다.",
    Date: "20분전",
  },
  {
    Title: "과제도와주실분 구합니다.",
    Detail: "과제도와주실분 구합니다.",
    Date: "20분전",
  },
  {
    Title: "과제도와주실분 구합니다.",
    Detail: "과제도와주실분 구합니다.",
    Date: "20분전",
  },
  {
    Title: "과제도와주실분 구합니다.",
    Detail: "과제도와주실분 구합니다.",
    Date: "20분전",
  },
  {
    Title: "과제도와주실분 구합니다.",
    Detail: "과제도와주실분 구합니다.",
    Date: "20분전",
  },
  {
    Title: "과제도와주실분 구합니다.",
    Detail: "과제도와주실분 구합니다.",
    Date: "20분전",
  },
  {
    Title: "과제도와주실분 구합니다.",
    Detail: "과제도와주실분 구합니다.",
    Date: "20분전",
  },
  {
    Title: "과제도와주실분 구합니다.",
    Detail: "과제도와주실분 구합니다.",
    Date: "20분전",
  },
  {
    Title: "과제도와주실분 구합니다.",
    Detail: "과제도와주실분 구합니다.",
    Date: "20분전",
  },
  {
    Title: "과제도와주실분 구합니다.",
    Detail: "과제도와주실분 구합니다.",
    Date: "20분전",
  },
  {
    Title: "과제도와주실분 구합니다.",
    Detail: "과제도와주실분 구합니다.",
    Date: "20분전",
  },
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
            <HelperListItem Title={e.Title} Detail={e.Detail} Date={e.Date} />
          </Link>
        );
      })}
    </div>
  );
};

export default HelperList;
