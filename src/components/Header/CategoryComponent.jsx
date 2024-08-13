import { useEffect } from "react";
// Product Services
import productServices from "../../services/productServices";

function CategoryComponent(){

    useEffect(()=> {
        productServices.getAllCategoryService()
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            CategoryComponent
        </div>
    )
} 

export default CategoryComponent ;