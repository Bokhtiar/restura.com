import { publicRequest } from "../config/axios.config";

export const Menus = () => {
  return publicRequest.get("/product/api/v1/user/product/");
};

export const menuShow = (id:any) => {
  return publicRequest.get(`/product/api/v1/user/product/${id}`)
}

export const menuCategory = (category:any) => {
  console.log("tes",category);
  
  return publicRequest.get(`/product/api/v1/user/product/category/${category}`)
}
