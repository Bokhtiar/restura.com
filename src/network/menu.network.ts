import { publicRequest } from "../config/axios.config";

export const Menus = () => {
  return publicRequest.get("/product/api/v1/user/product/");
};

export const menuShow = (id:string) => {
  return publicRequest.get(`/product/api/v1/user/product/${id}`)
}
