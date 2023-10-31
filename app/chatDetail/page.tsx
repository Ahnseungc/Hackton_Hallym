"use client";
import React, {useState} from "react";

import axios from "axios";
import {useSearchParams} from "next/navigation";
import useSWR from "swr";

import {ChatBubble} from "@components/ChatBubble";

import type {ChatInputDto, ChatOutputDto} from "../../types/ChatDto";


const myId = 1

const ChatDetail: React.FC = () => {
    const searchParams = useSearchParams()

    console.log({
        itemId: searchParams.get('itemId'),
        seller: searchParams.get('seller'),
        buyer: searchParams.get('buyer')
    })


    const {data, isLoading} = useSWR<ChatOutputDto[]>(`http://10.50.227.158:3000/chat`, async (url) => {
        const res = await axios.get(url, {
            params: {
                itemId: searchParams.get('itemId'),
                seller: searchParams.get('sellerId'),
                buyer: searchParams.get('buyerId')
            }
        })

        return res.data
    }, {refreshInterval: 100})

    const [message, setMessage] = useState("")

    console.log(data)
    if (!data) return (<h1>Loading</h1>)
    return (
        <div style={{paddingTop: '100px'}}>
            {
                data.map((d) => {
                    return <ChatBubble key={d.id}{...d} userId={myId}/>
                })
            }
            <input onChange={(e) => {
                setMessage(e.target.value)
            }}/>
            <input type={"button"} onClick={async () => {
                await axios.post<ChatOutputDto, ChatOutputDto, ChatInputDto>('http://10.50.227.158:3000/chat', {
                    itemId: +searchParams.get('itemId'),
                    buyer: +searchParams.get('buyerId'),
                    sentBy: myId,
                    message: message,
                    seller: +searchParams.get('sellerId')
                })
                setMessage("")
            }}/>
        </div>
    );
}

export default ChatDetail;
