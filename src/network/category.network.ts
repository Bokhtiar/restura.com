import { publicRequest } from "../config/axios.config";

export const categoryList = () => {
  return publicRequest.get("/product/api/v1/user/category/");
};
