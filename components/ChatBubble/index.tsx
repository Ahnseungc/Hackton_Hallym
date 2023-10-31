"use client";

import React from "react";
import "@sendbird/uikit-react/dist/index.css";

export type ChatBubbleProps = {
    id: number;
    itemId: number;
    seller: number;
    message: string;
    buyer: number;
    createdAt: Date;
    sentBy: number
    userId: number
}

export const ChatBubble: React.FC<ChatBubbleProps> = (props) => {

    return (
        <div style={{display: 'flex'}}>
            {props.message}
        </div>
    )
}
