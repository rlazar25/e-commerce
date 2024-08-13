import { useEffect } from "react";
// SERVICES
import productServices from "../services/productServices";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { saveAllProductAction } from "../store/productSlice";
// COMPONENTS
import CardProductComponent from "../components/CardProductComponent";
import LoaderComponent from "../components/LoaderComponent";

function HomePage(){

    const {allProduct, productLoader} = useSelector((state) => state.productStore)
    const dispatch = useDispatch()

    useEffect(() => {
        productServices.getAllProductsService()
        .then(res => dispatch(saveAllProductAction(res.data.products)))
        .catch(err => console.log(err))
    }, [])
    return(
        <div>
            {productLoader ? allProduct.map((product) =>{
                return <CardProductComponent key={product.id} />
            }) : <div className="flex justify-center my-8"> <LoaderComponent size={100} /></div>}
        </div>
    )
} 

export default HomePage;