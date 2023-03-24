import { privateRequest } from "../config/axios.config";

export const cartCreate = (id: any) => {
    return privateRequest.post(`/order/api/v1/cart/${id}`);
};
