export class ChatOutputDto {
    id!: number;
    itemId!: number;
    author!: number;
    message!: string;
    counterpart!: number;
    createdAt!: Date;
    sentBy!: number;
}

export class ChatListInputDto {
    itemId!: number;
    seller!: number;
    buyer!: number;
}

export class ChatInputDto {
    itemId!: number;
    seller!: number;
    message!: string;
    buyer!: number;
    sentBy!: number;
}

export type ChatListOutputDto =  {
    itemId: number;
    seller: number;
    buyer: number;
}
