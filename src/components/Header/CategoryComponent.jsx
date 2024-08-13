import { useEffect } from "react";
// Product Services
import productServices from "../../services/productServices";
import { useDispatch } from "react-redux";
import { saveAllCategoryAction } from "../../store/categorySlice";

function CategoryComponent(){

    const dispatch = useDispatch()

    useEffect(()=> {
        productServices.getAllCategoryService()
        .then(res => dispatch(saveAllCategoryAction(res.data)))
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            CategoryComponent
        </div>
    )
} 

export default CategoryComponent ;