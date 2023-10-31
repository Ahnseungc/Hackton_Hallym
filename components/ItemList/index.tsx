"use client";

import { useState } from "react";

import Item from "@components/Item";

import { ListContainer } from "./styles";

// const Item = ({ Image, Name, Price }: Props) => {

const ItemList = () => {
  const List = [
    { Image: "사진", Name: "아이폰13미니 그린 128기가", Price: "2800000" },
    { Image: "사진", Name: "아이폰13미니 그린 128기가", Price: "2800000" },
    { Image: "사진", Name: "아이폰13미니 그린 128기가", Price: "2800000" },
    { Image: "사진", Name: "아이폰13미니 그린 128기가", Price: "2800000" },
    { Image: "사진", Name: "아이폰13미니 그린 128기가", Price: "2800000" },
    { Image: "사진", Name: "아이폰13미니 그린 128기가", Price: "2800000" },
    { Image: "사진", Name: "아이폰13미니 그린 128기가", Price: "2800000" },
    { Image: "사진", Name: "아이폰13미니 그린 128기가", Price: "2800000" },
    { Image: "사진", Name: "아이폰13미니 그린 128기가", Price: "2800000" },
    { Image: "사진", Name: "아이폰13미니 그린 128기가", Price: "2800000" },
  ];
  const [ItemList] = useState(List);

  return (
    <ListContainer>
      {ItemList.map((e: any) => {
        // eslint-disable-next-line react/jsx-key
        return <Item Image={e.Image} Name={e.Name} Price={e.Price} />;
      })}
    </ListContainer>
  );
};

export default ItemList;
