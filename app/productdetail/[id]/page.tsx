"use client";

// import Item from "@components/Item";
import useSWR from "swr";
import Image from "next/image";

import fetcher from "@hooks/fetcher";

import {
  HopePlace,
  HopePlaceImage,
  HopePlaceName,
  ProductDetail,
  ProductdetailContainer,
  ProductImage,
  ProductName,
} from "../style";
import { useState } from "react";

//지울예정
const List = [
  {
    id: 1,
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
    Date: "44분전",
  },
  {
    id: 2,
    Image: "사진",
    Name: "아이폰12미니 그린 128기가",
    Price: "2800000",
    Date: "44분전",
  },
  {
    id: 3,
    Image: "사진",
    Name: "아이폰11미니 그린 128기가",
    Price: "2800000",
    Date: "44분전",
  },
  {
    id: 4,
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
    Date: "44분전",
  },
  {
    id: 5,
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
    Date: "44분전",
  },
  {
    id: 6,
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
    Date: "44분전",
  },
  {
    id: 7,
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
    Date: "44분전",
  },
  {
    id: 8,
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
    Date: "44분전",
  },
  {
    id: 9,
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
    Date: "44분전",
  },
  {
    id: 10,
    Image: "사진",
    Name: "아이폰13미니 그린 128기가",
    Price: "2800000",
    Date: "44분전",
  },
];

const API_BASE_URL = `http://10.50.227.158:3000/item`;

const Page = ({ params }: { params: { id: any } }) => {
  const { data, error } = useSWR(API_BASE_URL, fetcher);
  if (error) return <div>failed to loading</div>;
  if (!data) return <div>loading...</div>;

  return data.map((e, index) => {
    if (e.id === Number(params.id)) {
      console.log(e);

      return (
        <div key={index}>
          <ProductdetailContainer>
            <ProductImage>
              <img
                src={`${e.images[0]}`}
                alt="/"
                width={"100%"}
                height={"100%"}
              />
            </ProductImage>
            <ProductName>{e.title}</ProductName>
            <ProductName>{e.price}원</ProductName>
            <ProductDetail>{e.description}</ProductDetail>
            <HopePlace>
              <HopePlaceName>HopePalceName</HopePlaceName>
              <HopePlaceImage>HopePlaceImage</HopePlaceImage>
            </HopePlace>
          </ProductdetailContainer>
        </div>
      );
    }
  });
};

export default Page;
