import { ILogin } from "@/types/login.type";
import { IRegister } from "@/types/register.type";
import { privateRequest, publicRequest } from "../config/axios.config";


export const me = () => {
    return privateRequest.get("auth/api/v1/user/me");
};

export const login = (data:ILogin) => {
    return publicRequest.post(`/auth/api/v1/user/login`, data);
};

export const registration = (data:IRegister) => {
    return publicRequest.post(`/auth/api/v1/user`, data)
}

