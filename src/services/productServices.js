import axios from "axios";

class productServices {
  static getAllCategoryService = () => axios.get("/products/category-list");
  static getAllProductsService = (loadMore) => axios.get(`products?limit=${loadMore}`);
  // static getAllProductsService = () => axios.get("/products");
  static getSingleProductService = (id) => axios.get(`/product/${id}`);
  static getAllProductsByCategory = (category) => axios.get(`/products/category/${category}`);
  static searchProductService = (search) => axios.get(`/products/search?q=${search}`);
}

export default productServices;