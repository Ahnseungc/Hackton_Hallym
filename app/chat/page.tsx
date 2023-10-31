"use client";
import dynamic from "next/dynamic";
import useSWR from "swr";

import {ChatElement} from "@components/Chat";
import {ListContainer} from "@components/ItemList/styles";
import fetcher from "@hooks/fetcher";

import type {ChatListOutputDto} from "../../types/ChatDto";

type Props = {
    itemId: number;
    seller: number;
    buyer: number;
};

const myId = 1

const DynamicAppWithNoSSR = dynamic(() => import("@components/Chat"), {
    ssr: false,
    loading: () => <p>...</p>,
});

function Chat({}: Props) {
    const {data, isLoading} = useSWR<ChatListOutputDto[]>(`http://10.50.227.158:3000/chat/userId/${myId}`, fetcher)

    return (
        <ListContainer>
            {!isLoading ? data.map((d) => {
                return <ChatElement key={d.buyer} itemId={d.itemId} sellerId={d.seller} buyerId={d.buyer}/>
            }) : "Loading"}
        </ListContainer>
    );
}

export default Chat;
