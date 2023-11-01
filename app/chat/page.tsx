"use client";
import useSWR from "swr";

import { ChatElement } from "@components/Chat";
import { ListContainer } from "@components/ItemList/styles";
import fetcher from "@hooks/fetcher";

import { getUserId } from "../userid.provider";

import type { ChatListOutputDto } from "../../types/ChatDto";

type Props = {
  itemId: number;
  seller: number;
  buyer: number;
};

const myId = getUserId();

function Chat({}: Props) {
  const { data, isLoading } = useSWR<ChatListOutputDto[]>(
    `https://d1xx291z7z5z7p.cloudfront.net/chat/userId/${myId}`,
    fetcher,
    {
      refreshInterval: 100,
    }
  );

  return (
    <ListContainer>
      {!isLoading
        ? data.map((d) => {
            return (
              <ChatElement
                key={d.buyer}
                itemId={d.itemId}
                sellerId={d.seller}
                buyerId={d.buyer}
              />
            );
          })
        : "Loading"}
    </ListContainer>
  );
}

export default Chat;
