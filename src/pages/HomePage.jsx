import { useEffect, useState } from "react";
// SERVICES
import productServices from "../services/productServices";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { gridListDisplayAction, saveAllProductAction } from "../store/productSlice";
// COMPONENTS
import CardProductComponent from "../components/CardProductComponent";
import LoaderComponent from "../components/LoaderComponent";
// ICONS
import { CiGrid41, CiBoxList } from "react-icons/ci";

function HomePage() {

    const [loadMore, setLoadMore] = useState(16);
    const { allProduct, productLoader, selectCategory, searchProduct } = useSelector((state) => state.productStore);
    const { isGrid } = useSelector(state => state.productStore);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectCategory) {
            productServices.getAllProductsByCategory(selectCategory)
                .then(res => dispatch(saveAllProductAction(res.data.products)))
                .catch(err => console.log(err))
        } else {
            productServices.getAllProductsService(loadMore)
                .then(res => dispatch(saveAllProductAction(res.data.products)))
                .catch(err => console.log(err))
        }
    }, [selectCategory, loadMore])

    useEffect(() => {
        productServices.searchProductService(searchProduct)
            .then(res => dispatch(saveAllProductAction(res.data.products)))
            .catch(err => console.log(err))
    }, [searchProduct])

    return (
        <div className=" container mx-auto px-8 ">
            <div className="hidden md:flex justify-end mt-4 gap-2">
            <CiGrid41 onClick={() => dispatch(gridListDisplayAction())} size={30} className={isGrid ? "text-mainYellow" : "cursor-pointer"} />
            <CiBoxList onClick={() => dispatch(gridListDisplayAction())} size={30} className={isGrid ? "cursor-pointer" : "text-mainYellow "} />
            </div>
            {productLoader ? <div>
                <div className={isGrid ? "flex flex-wrap gap-8 items-center justify-center my-[50px]" : 'flex my-[50px] flex-col items-center gap-8'}>
                    {allProduct.map((product) => {
                        return <CardProductComponent key={product.id} product={product} isGrid={isGrid} />
                    })}
                </div>
                <div className="flex justify-center my-8">
                    {selectCategory === '' && searchProduct === '' && <button onClick={() => setLoadMore(loadMore + 16)} className="bg-mainBlue duration-500 hover:bg-mainYellow text-white px-5 py-3 rounded-lg" >Load More</button>}
                </div>
            </div> : <div className="flex justify-center my-8"> <LoaderComponent size={100} /></div>}
        </div>
    )
}

export default HomePage;