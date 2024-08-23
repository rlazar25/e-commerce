import { useSelector } from "react-redux";
import CardProductComponent from "../components/CardProductComponent";
import { Link } from "react-router-dom";

function FavoritePage() {

    const { allFavorite } = useSelector(state => state.favoriteStore)


    return (
        <div className="container mx-auto px-8 flex flex-wrap gap-8 items-center justify-center my-[50px]">
            {allFavorite.length > 0 ? allFavorite.map(product => {
                return <CardProductComponent key={product.id} product={product} />
            }) : <div className="text-center "> <h2 className="text-2xl" >No Favorite Products</h2> <p>Check our <Link className="text-mainYellow" to="/">Products</Link></p> </div>}

        </div>
    )
}

export default FavoritePage;