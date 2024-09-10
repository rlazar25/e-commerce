import { useEffect } from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import CardProductComponent from "../components/CardProductComponent";
// REACT ROUTER DOM
import { Link } from "react-router-dom";
// ICONS
import { CiGrid41, CiBoxList } from "react-icons/ci";
import { gridListDisplayAction } from "../store/productSlice";

const FavoritePage = () => {

    const { isGrid } = useSelector(state => state.productStore);
    const { allFavorite } = useSelector(state => state.favoriteStore);

    const dispatch = useDispatch();

    //scroll to top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container mx-auto px-8 ">
            {allFavorite.length > 0 && <div className="hidden md:flex justify-end mt-4 gap-2">
                <CiGrid41 onClick={() => dispatch(gridListDisplayAction())} size={30} className={isGrid ? "text-mainYellow" : "cursor-pointer"} />
                <CiBoxList onClick={() => dispatch(gridListDisplayAction())} size={30} className={isGrid ? "cursor-pointer" : "text-mainYellow "} />
            </div>}

            <div className="flex flex-wrap gap-8 items-center justify-center my-[50px]">
                {allFavorite.length > 0 ? allFavorite.map(product => {
                    return <CardProductComponent key={product.id} product={product} isGrid={isGrid} />
                }) : <div className="text-center "> <h1 className="text-3xl font-semibold text-mainBlue text-center my-10" >Add Products To Favorite</h1> <p>Check our <Link className="text-mainYellow" to="/">Products</Link></p> </div>}

            </div>
        </div>
    )
}

export default FavoritePage;