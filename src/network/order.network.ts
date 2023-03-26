import { IOrderCreate } from "@/types/order.type";
import { privateRequest } from "../config/axios.config";

export const orderCreate = async(data:IOrderCreate) => {
    return await privateRequest.post("/order/api/v1/order", data);
};
