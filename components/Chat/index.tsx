"use client";

import React from "react";

import SBApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";
import axios from "axios";
import Link from "next/link";
import useSWR from "swr";

import fetcher from "@hooks/fetcher";

import type {ChatOutputDto} from "../../types/ChatDto";
import type {ItemOutputDto} from "../../types/ItemDto";

export type ChatElementProps = {
    itemId: number;
    sellerId: number;
    buyerId: number;

}

export const ChatElement: React.FC<ChatElementProps> = (props) => {
    const {data} = useSWR<ItemOutputDto>("http://10.50.227.158:3000/item/" + props.itemId, fetcher)
    const chat = useSWR<ChatOutputDto[]>("http://10.50.227.158:3000/chat", async (url) => {
        const response = await axios.get(url, {
            params: {
                itemId: props.itemId,
                buyer: props.buyerId,
                seller: props.sellerId
            }
        })

        return response.data
    })

    console.log(data)
    console.log(chat)
    if (!data || !chat.data) return (<div><h1>loading</h1></div>);

    return <Link
        href={`/chatDetail?itemId=${props.itemId}&sellerId=${props.sellerId}&buyerId=${props.buyerId}`}
        style={{textDecoration: "none", color: "black"}}
    >
        <div style={{display: 'flex', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px'}}>
            <img src={data.images[0]} width={50} style={{
                width: '50px',
                height: '50px',
                objectFit: 'cover',
                borderRadius: '5px',
                paddingBottom: '15px'
            }}/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center'}}>
                <span style={{
                    margin: 0,
                    padding: 0,
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#334155'
                }}>{data.title}</span>
                <span style={{
                    margin: 0,
                    padding: 0,
                    fontSize: '14px',
                    color: '#6B7280'
                }}>{chat.data[chat.data.length - 1].message}</span>
            </div>
        </div>
    </Link>
}

const Chat = () => {
    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <SBApp appId={"7817730D-EF7D-4E94-9C77-45FAE9CFD522"} userId={"Ahn"}/>
        </div>
    );
};

export default Chat;
