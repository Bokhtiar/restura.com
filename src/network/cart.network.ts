import { privateRequest } from "../config/axios.config";

export const cartList = () => {
    return privateRequest.get(`/order/api/v1/cart`);
};

export const cartCreate = (id: any) => {
    return privateRequest.post(`/order/api/v1/cart/${id}`);
};

export const cartIncrement = (id:any) => {
    return privateRequest.put(`/order/api/v1/cart/increment/${id}`);
};

export const cartDecrement = (id:any) => {
    return privateRequest.put(`/order/api/v1/cart/decrement/${id}`);
};

export const cartDelete = (id:any) => {
    return privateRequest.delete(`/order/api/v1/cart/destroy/${id}`);
};

