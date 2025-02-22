export interface IProduct {
    id: number;
    title: string;
    description?: string;
    price: number;
    images?: string[];
    stock?: number;
}
