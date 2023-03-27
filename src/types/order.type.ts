import { ICard } from "./card.type";
import { ICart } from "./cart.type";
import { IProduct } from "./product.type";

export interface IOrder {
  _id: string;
  name: string;
  email: string;
  phone: string;
  product: IProduct | null;
 
  location: string;
  note: string;
  payment_name: string;
  payment_number: string;
  payment_txid: string;
}

export interface IOrderCreate {
  name: string;
  email: string;
  phone: string;
  location: string;
  note: string;
  product: IProduct | null;

  payment_name: string;
  payment_number: string;
  payment_txid: string;
}
