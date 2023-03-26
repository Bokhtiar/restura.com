export interface IOrder {
    _id:string;
    name:string;
    email:string
    phone:string;
    location:string;
    note:string;
    payment_name:string;
    payment_number:string;
    payment_txid:string;
}

export interface IOrderCreate {
    name:string;
    email:string
    phone:string;
    location:string;
    note:string;
    payment_name:string;
    payment_number:string;
    payment_txid:string;
}