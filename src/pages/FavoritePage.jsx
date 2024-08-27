import { useState } from "react";
// REDUX
import { useSelector } from "react-redux";
import CardProductComponent from "../components/CardProductComponent";
// REACT ROUTER DOM
import { Link } from "react-router-dom";
// ICONS
import { CiGrid41, CiBoxList } from "react-icons/ci";

function FavoritePage() {

    const [isGrid, setIsGrid] = useState(true);
    const { allFavorite } = useSelector(state => state.favoriteStore)


    return (
        <div className="container mx-auto px-8 ">
            {allFavorite.length > 0 && <div className="hidden md:flex justify-end mt-4 gap-2">
                <CiGrid41 onClick={() => setIsGrid(!isGrid)} size={30} className={isGrid ? "text-mainYellow" : "cursor-pointer"} />
                <CiBoxList onClick={() => setIsGrid(!isGrid)} size={30} className={isGrid ? "cursor-pointer" : "text-mainYellow "} />
            </div>}

            <div className="flex flex-wrap gap-8 items-center justify-center my-[50px]">
                {allFavorite.length > 0 ? allFavorite.map(product => {
                    return <CardProductComponent key={product.id} product={product} isGrid={isGrid} />
                }) : <div className="text-center "> <h2 className="text-2xl" >Add Products To Favorite</h2> <p>Check our <Link className="text-mainYellow" to="/">Products</Link></p> </div>}

            </div>
        </div>
    )
}

export default FavoritePage;