import { privateRequest } from "../config/axios.config";

export const cartList = () => {
    return privateRequest.get(`/order/api/v1/cart`);
};

export const cartCreate = (id: any) => {
    return privateRequest.post(`/order/api/v1/cart/${id}`);
};

