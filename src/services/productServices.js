import axios from "axios";

class productServices {
    static getAllCategoryService = () => axios.get('/products/category-list');
}

export default productServices;