"use client";

// import Item from "@components/Item";
import React, { useEffect, useState } from "react";

import axios from "axios";
import Link from "next/link";
import useSWR from "swr";

import fetcher from "@hooks/fetcher";

import { getUserId } from "../../userid.provider";
import { formatNumber } from "../../util";
import {
  HopePlace,
  HopePlaceDescription,
  HopePlaceImage,
  HopePlaceName,
  HopePlaceTitle,
  ProductDetail,
  ProductdetailContainer,
  ProductImage,
  ProductName,
} from "../style";

const API_BASE_URL = `https://d1xx291z7z5z7p.cloudfront.net/item/`;
const HOPE_PLACE = `https://d1xx291z7z5z7p.cloudfront.net/safezone/`;
const PROD = `https://d1xx291z7z5z7p.cloudfront.net/product/`;
const myId = getUserId();
const Page = ({ params }: { params: { id: any } }) => {
  const { data, error } = useSWR(API_BASE_URL + params.id, fetcher);

  const [safezone, setSafezone] = useState(undefined);
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    console.log(data);
    if (!data || !data.safezoneId) return;
    console.log(data);
    axios.get(HOPE_PLACE + data.safezoneId).then((r) => {
      setSafezone(r.data);
      console.log(r.data);
    });

    axios
      .get(PROD + data.productId)
      .then((r) => {
        setProduct(r.data);
        console.log(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [data]);

  if (error) return <div>failed to loading</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div style={{ height: "100%" }}>
      <ProductdetailContainer>
        <ProductImage>
          <img
            src={`${data.images[0]}`}
            alt="/"
            width={"100%"}
            height={"100%"}
          />
        </ProductImage>
        {product ? (
          <Link
            href={"/priceinquiry/" + product.id}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor:
                  data.price < product.priceStat.averagePrice
                    ? "#3B82F6"
                    : "#F87171",
                borderRadius: "5px",
                maxWidth: "100%",

                alignItems: "center",
                justifyContent: "center",
                margin: "20px 20px 0 20px",
                padding: "20px",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                {data.price < product.priceStat.averagePrice
                  ? `평균 시세보다 ${formatNumber(
                      product.priceStat.averagePrice - data.price
                    )}원 저렴해요!`
                  : `평균 시세보다 ${formatNumber(
                      data.price - product.priceStat.averagePrice
                    )}원 비싸요!`}{" "}
              </span>
            </div>
          </Link>
        ) : undefined}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "30px",
            height: "100%",
            gap: "20px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "5px",
              }}
            >
              <ProductName>{data.title}</ProductName>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  paddingLeft: "10px",
                  color: "#334155",
                  width: "150px",
                }}
              >
                {formatNumber(data.price)}원
              </span>
            </div>
            <ProductDetail>{data.description}</ProductDetail>
          </div>
          <hr />
          <HopePlace>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "5px",
              }}
            >
              <HopePlaceTitle>세이프존 거래 위치</HopePlaceTitle>
              <HopePlaceName>
                {safezone ? safezone.name : "Loading..."}
              </HopePlaceName>
            </div>
            <HopePlaceDescription>
              {safezone ? safezone.description : "Loading..."}
            </HopePlaceDescription>
            <HopePlaceImage>
              <img
                width={"400px"}
                style={{ borderRadius: "3px", paddingTop: "20px" }}
                src={safezone ? safezone.image : ""}
              />
            </HopePlaceImage>
            <Link
              style={{
                textDecoration: "none",
              }}
              href={`/chatDetail?itemId=${data.id}&sellerId=${data.userId}&buyerId=${myId}`}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  backgroundColor: "#1E293B",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  borderRadius: "10px",
                  position: "sticky",
                  bottom: "80px",
                }}
              >
                <span
                  style={{
                    color: "white",
                  }}
                >
                  판매자와 채팅하기
                </span>
              </div>
            </Link>
          </HopePlace>
        </div>
      </ProductdetailContainer>
    </div>
  );
};

export default Page;
