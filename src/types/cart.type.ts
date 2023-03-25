import { IProduct } from "./product.type";

export interface ICart {
    _id: string;
    product: IProduct[] | [];
    quantity: number;
}