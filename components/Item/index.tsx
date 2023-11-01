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

const Item = ({ Image, Name, Price, Date, Id }: Props) => {
  return (
    <Link
      href={`/productdetail/${Id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <MainContainer>
        <Photo>
          <img
            className="rounded-2"
            src={`${Image}`}
            alt="/"
            width={"80px"}
            height={"80px"}
          />
        </Photo>
        <div className="Product">
          <div>
            <div className="ProductName" style={{ fontFamily: "Gmarket" }}>
              {Name}
            </div>
            <div className="ProductPrice">{Price}원</div>
          </div>

          <div className="ProductDate">{Date}</div>
        </div>
      </MainContainer>
    </Link>
  );
};

export default Item;
