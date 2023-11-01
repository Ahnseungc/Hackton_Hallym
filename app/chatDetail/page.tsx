"use client";
import React, {useEffect, useState} from "react";

import axios from "axios";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import useSWR from "swr";

import {ChatBubble} from "@components/ChatBubble";

import {getUserId} from "../userid.provider";

import type {ChatInputDto, ChatOutputDto} from "../../types/ChatDto";
import type {ItemOutputDto} from "../../types/ItemDto";


const myId = getUserId()

const ChatDetail: React.FC = () => {
    const searchParams = useSearchParams()

    console.log({
        itemId: searchParams.get('itemId'),
        seller: searchParams.get('seller'),
        buyer: searchParams.get('buyer')
    })

    const [item, setItem] = useState<ItemOutputDto>();

    useEffect(() => {
        axios.get(`http://10.50.227.158:3000/item/${searchParams.get('itemId')}`).then((r) => {
            setItem(r.data)
        })
    }, []);

    const {data, isLoading} = useSWR<ChatOutputDto[]>(`http://10.50.227.158:3000/chat`, async (url) => {
        const res = await axios.get(url, {
            params: {
                itemId: searchParams.get('itemId'),
                seller: searchParams.get('sellerId'),
                buyer: searchParams.get('buyerId')
            }
        })

        return res.data
    }, {refreshInterval: 10})

    const [message, setMessage] = useState("")

    console.log(data)
    if (data == null) return (<h1>Loading</h1>)
    return (
        <div style={{paddingTop: '10px', width: '100%'}}>
            <Link href={'productdetail/' + searchParams.get('itemId')} style={{
                textDecoration: 'none'
            }}>
                <div style={{
                    display: 'flex',
                    backgroundColor: '#E2E8F0',
                    borderRadius: '5px',
                    maxWidth: '100%',

                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: "0 20px 20px 20px",
                    padding: "15px"

                }}>
                    <img src={item ? item.images[0] : ""} width={"50px"} height={"50px"} style={{
                        objectFit: 'cover',
                        borderRadius: '5px'
                    }}/>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end'
                    }}>
                              <span style={{
                                  color: '#1E293B',
                                  fontSize: '15px',
                                  fontWeight: '600'
                              }}>
                    {item ? item.title : "Loading"}</span>

                        <span style={{
                            color: '#6B7280',
                            fontSize: '15px',
                            fontWeight: '600'
                        }}>
                    {item ? item.price : "Loading"}원</span>
                    </div>
                </div>
            </Link>

            <div style={{paddingBottom: '10px'}}>
                {
                    !isLoading ? data.map((d) => {
                        return <ChatBubble key={d.id}{...d} userId={myId}/>
                    }) : "Loading"
                }
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'sticky',
                bottom: '80px',
                paddingLeft: '10px',
                paddingRight: '10px'
            }}>
                <input placeholder={"메시지를 입력하세요"}
                       style={{
                           width: '100%',
                           height: '50px',
                           backgroundColor: '#F3F4F6',
                           borderRadius: '5px',
                           border: 0,
                           paddingLeft: "20px",

                       }}
                       onKeyDown={async (k) => {
                           if (k.key == 'Enter') {
                               await axios.post<ChatOutputDto, ChatOutputDto, ChatInputDto>('http://10.50.227.158:3000/chat', {
                                   itemId: +searchParams.get('itemId'),
                                   buyer: +searchParams.get('buyerId'),
                                   sentBy: myId,
                                   message: message,
                                   seller: +searchParams.get('sellerId')
                               })

                               setMessage("")
                           }
                       }}
                       value={message}
                       onChange={(e) => {
                           setMessage(e.target.value)
                       }}/>

            </div>

        </div>
    );
}

export default ChatDetail;
