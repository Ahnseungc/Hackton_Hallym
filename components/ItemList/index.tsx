"use client";

import {useState} from "react";

import useSWR from "swr";

import Item from "@components/Item";
import fetcher from "@hooks/fetcher";

import {ListContainer} from "./styles";
import {getUserId} from "../../app/userid.provider";
import {formatNumber} from "../../app/util";

const API_BASE_URL = `http://10.50.227.158:3000/item`;


const ItemList = () => {
    
    const {data, error} = useSWR(API_BASE_URL, fetcher);
    if (error) return <div>failed to loading</div>;
    if (!data) return <div>loading...</div>;

    const list = data.map((e: any, index: any) => {
        if (e.userId == getUserId()) return null;
        // eslint-disable-next-line react/jsx-key

        return (
            <Item
                Id={e.id}
                userId={e.userId}
                Image={e.images ? e.images[0] : ''}
                Name={e.title}
                Price={formatNumber(e.price)}
                Date={e.ago}
                key={index}
            />
        );
    }).filter(e => e)

    return (
        <ListContainer>
            {list.length == 0 ? (<div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>현재 구매 가능한 상품이 없어요</div>) : list}
        </ListContainer>
    );
};

export default ItemList;
