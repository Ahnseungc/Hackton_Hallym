"use client";

import Link from "next/link";

import { MainContainer, Photo } from "./style";

interface Props {
  Image: String;
  Name: String;
  Price: String;
  Date: String;
}

const Item = ({ Image, Name, Price, Date }: Props) => {
  return (
    <Link
      href={"/productdetail"}
      style={{ textDecoration: "none", color: "black" }}
    >
      <MainContainer>
        <Photo>{Image}</Photo>
        <div className="Product">
          <div className="ProductName">{Name}</div>
          <div className="ProductPrice">{Price}</div>
          <div className="ProductDate">{Date}</div>
        </div>
      </MainContainer>
    </Link>
  );
};

export default Item;
