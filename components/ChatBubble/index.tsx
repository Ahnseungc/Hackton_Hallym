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

const myId = 1;
export const ChatBubble: React.FC<ChatBubbleProps> = (props) => {

    return (
        <div style={{
            display: 'flex',
            marginBottom: '5px',
            flexDirection: props.sentBy == myId ? 'row-reverse' : 'row',
            gap: '1px',
            paddingLeft: '15px',
            paddingRight: '15px'
        }}>
            <div style={{
                paddingLeft: '13px',
                paddingRight: '13px',
                paddingTop: '10px',
                paddingBottom: '10px',
                backgroundColor: props.sentBy == myId ? '#3B82F6' : '#E2E8F0',
                borderRadius: '13px',
            }}>
            <span style={{
                color: props.sentBy == myId ? '#fff' : '#1E293B',
                fontSize: '15px',
                flex: 1
            }}>{props.message}</span>
            </div>
        </div>
    )
}
