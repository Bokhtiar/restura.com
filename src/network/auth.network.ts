import { ILogin } from "@/types/login.type";
import { IRegister } from "@/types/register.type";
import { publicRequest } from "../config/axios.config";

export const login = (data:ILogin) => {
    return publicRequest.post(`/auth/api/v1/user/login`, data);
};

export const registration = (data:IRegister) => {
    return publicRequest.post(`/auth/api/v1/user`, data)
}