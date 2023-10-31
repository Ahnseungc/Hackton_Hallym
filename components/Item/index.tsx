"use client";

import Link from "next/link";

import { MainContainer, Photo } from "./style";

interface Props {
  Image: String;
  Name: String;
  Price: String;
  Date: String;
  Id: any;
  userId: any;
}

const Item = ({ Image, Name, Price, Date, Id, userId }: Props) => {
  return (
    <Link
      href={`/productdetail/${Id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <MainContainer>
        <Photo>
          <img src={`${Image}`} alt="/" width={"100%"} height={"100%"} />
        </Photo>
        <div className="Product">
          <div className="ProductName">{Name}</div>
          <div className="ProductDate">{Date}</div>
          <div className="ProductPrice">{Price}원</div>
        </div>
      </MainContainer>
    </Link>
  );
};

export default Item;
