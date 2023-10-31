export type ItemOutputDto = {
    id: number;
    images: string[];
    title: string;
    description: string;
    price: number;
    safezoneId: number;
    createdAt: Date;
    userId: number;
    ago: string;
    productId?: number;
};

export class ItemInputDto {
    title: string;
    description: string;
    price: string;
    safezoneId: string;
    userId: string;
}
