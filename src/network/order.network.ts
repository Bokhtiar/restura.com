import { IOrderCreate } from "@/types/order.type";
import { privateRequest } from "../config/axios.config";

export const orderList = async() => {
    return await privateRequest.get("/order/api/v1/order");
};

export const orderCreate = async(data:IOrderCreate) => {
    return await privateRequest.post("/order/api/v1/order", data);
};

export const orderShow = async(id:any) => {
    return await privateRequest.get(`/order/api/v1/order/${id}`);
};
