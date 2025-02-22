import { IProduct } from "./product";

export interface IResponse {
    limit: number;
    products: IProduct[];
    skip: number;
    total: number;
}
