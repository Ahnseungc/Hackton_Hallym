"use client";

import {useState} from "react";

import useSWR from "swr";

import Item from "@components/Item";
import fetcher from "@hooks/fetcher";

import {ListContainer} from "./styles";

const API_BASE_URL = `http://10.50.227.158:3000/item`;


const ItemList = () => {
    
    const {data, error} = useSWR(API_BASE_URL, fetcher);
    if (error) return <div>failed to loading</div>;
    if (!data) return <div>loading...</div>;

    return (
        <ListContainer>
            {data.map((e: any, index: any) => {
                // eslint-disable-next-line react/jsx-key
                console.log(e);
                return (
                    <Item
                        Id={e.id}
                        userId={e.userId}
                        Image={e.images ? e.images[0] : ''}
                        Name={e.title}
                        Price={e.price}
                        Date={e.ago}
                        key={index}
                    />
                );
            })}
        </ListContainer>
    );
};

export default ItemList;
