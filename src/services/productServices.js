import axios from "axios";

class productServices {
  static getAllCategoryService = () => axios.get("/products/category-list");
  static getAllProductsService = () => axios.get("/products");
  static getSingleProductService = (id) => axios.get(`/product/${id}`);
}

export default productServices;
