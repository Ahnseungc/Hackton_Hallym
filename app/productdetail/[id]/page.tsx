"use client";

// import Item from "@components/Item";
import React, {useEffect, useState} from "react";

import axios from "axios";
import Link from "next/link";
import useSWR from "swr";

import fetcher from "@hooks/fetcher";

import {getUserId} from "../../userid.provider";
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

const API_BASE_URL = `http://10.50.227.158:3000/item/`;
const HOPE_PLACE = `http://10.50.227.158:3000/safezone/`;
const myId = getUserId();
const Page = ({params}: { params: { id: any } }) => {
    const {data, error} = useSWR(API_BASE_URL + params.id, fetcher);

    const [safezone, setSafezone] = useState(null);

    useEffect(() => {
        console.log(data)
        if (!data || !data.safezoneId) return;
        console.log(data)
        axios.get(HOPE_PLACE + data.safezoneId).then((r) => {
            setSafezone(r.data)
            console.log(r.data)
        })
    }, [data]);

    if (error) return <div>failed to loading</div>;
    if (!data) return <div>loading...</div>;


    return (
        <div style={{height: '100%'}}>
            <ProductdetailContainer>
                <ProductImage>
                    <img
                        src={`${data.images[0]}`}
                        alt="/"
                        width={"100%"}
                        height={"100%"}
                    />
                </ProductImage>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: '30px',
                    paddingRight: '30px',
                    paddingTop: '30px',
                    height: '100%',
                    gap: '20px'
                }}>
                    <div>
                        <ProductName>{data.title}</ProductName>
                        <ProductDetail>{data.description}</ProductDetail>
                    </div>
                    <HopePlace>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: '5px'
                        }}>
                            <HopePlaceTitle>세이프존 거래 위치</HopePlaceTitle>
                            <HopePlaceName>{safezone ? safezone.name : "Loading..."}</HopePlaceName>
                        </div>
                        <HopePlaceDescription>{safezone ? safezone.description : "Loading..."}</HopePlaceDescription>
                        <HopePlaceImage><img width={"200px"} style={{borderRadius: '3px'}}
                                             src={safezone ? safezone.image : ""}/></HopePlaceImage>
                        <Link style={{
                            textDecoration: 'none'
                        }} href={`/chatDetail?itemId=${data.id}&sellerId=${data.userId}&buyerId=${myId}`}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px',
                                backgroundColor: '#1E293B',
                                paddingTop: "15px",
                                paddingBottom: "15px",
                                borderRadius: "10px",
                                position: 'sticky',
                                bottom: "80px",

                            }}>
                            <span style={{
                                color: 'white'
                            }}>판매자와 채팅하기</span>
                            </div>
                        </Link>

                    </HopePlace>
                </div>

            </ProductdetailContainer>
        </div>
    );

};

export default Page;
