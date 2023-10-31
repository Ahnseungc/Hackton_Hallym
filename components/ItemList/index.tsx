"use client";

import { useState } from "react";

import Item from "@components/Item";

import { ListContainer } from "./styles";

// const Item = ({ Image, Name, Price }: Props) => {

const ItemList = () => {
  const List = [
    {
      Image: "사진",
      Name: "아이폰13미니 그린 128기가",
      Price: "2800000",
      Date: "44분전",
    },
    {
      Image: "사진",
      Name: "아이폰13미니 그린 128기가",
      Price: "2800000",
      Date: "44분전",
    },
    {
      Image: "사진",
      Name: "아이폰13미니 그린 128기가",
      Price: "2800000",
      Date: "44분전",
    },
    {
      Image: "사진",
      Name: "아이폰13미니 그린 128기가",
      Price: "2800000",
      Date: "44분전",
    },
    {
      Image: "사진",
      Name: "아이폰13미니 그린 128기가",
      Price: "2800000",
      Date: "44분전",
    },
    {
      Image: "사진",
      Name: "아이폰13미니 그린 128기가",
      Price: "2800000",
      Date: "44분전",
    },
    {
      Image: "사진",
      Name: "아이폰13미니 그린 128기가",
      Price: "2800000",
      Date: "44분전",
    },
    {
      Image: "사진",
      Name: "아이폰13미니 그린 128기가",
      Price: "2800000",
      Date: "44분전",
    },
    {
      Image: "사진",
      Name: "아이폰13미니 그린 128기가",
      Price: "2800000",
      Date: "44분전",
    },
    {
      Image: "사진",
      Name: "아이폰13미니 그린 128기가",
      Price: "2800000",
      Date: "44분전",
    },
  ];
  const [ItemList] = useState(List);

  return (
    <ListContainer>
      {ItemList.map((e: any, index: any) => {
        // eslint-disable-next-line react/jsx-key
        return (
          <Item
            Image={e.Image}
            Name={e.Name}
            Price={e.Price}
            Date={e.Date}
            key={index}
          />
        );
      })}
    </ListContainer>
  );
};

export default ItemList;
