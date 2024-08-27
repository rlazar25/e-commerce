import axios from "axios";

class productServices {
  static getAllCategoryService = () => axios.get("/products/category-list");
  static getAllProductsService = (loadMore) => axios.get(`products?limit=${loadMore}`);
  static getSingleProductService = (id) => axios.get(`/product/${id}`);
}

export default productServices;
