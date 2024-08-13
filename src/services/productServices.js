import axios from "axios";

class productServices {
    static getAllCategoryService = () => axios.get('/products/category-list');
    static getAllProductsService = () => axios.get('/products');
}

export default productServices;