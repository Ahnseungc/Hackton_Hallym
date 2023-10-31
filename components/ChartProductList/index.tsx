import { useState } from "react";

import Link from "next/link";

import CharProductItem from "@components/ChartProductItem";

const List = [
  {
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
  },
  {
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
  },
  {
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
  },
  {
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
  },
  {
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
  },
  {
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
  },
  {
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
  },
  {
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
  },
  {
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
  },
  {
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
  },
];
const CharList = () => {
  const [PList] = useState(List);

  return (
    <div>
      {PList.map((e: any, index: any) => {
        console.log(e);
        return (
          <Link
            href={"/priceinquiry/inquirydetail"}
            key={index}
            style={{ color: "black", textDecoration: "none" }}
          >
            <CharProductItem PImage={e.Image} PName={e.Name} PPrice={e.Price} />
          </Link>
        );
      })}
    </div>
  );
};

export default CharList;
