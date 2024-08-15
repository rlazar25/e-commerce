import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

function CardProductComponent({ product }) {

    return (
        <div className="flex flex-col border w-[300px] border-slate-700 items-start rounded-lg p-2">
            <div className="self-center" >
                <img src={product.thumbnail} alt={product.title} className="h-[200px] w-full object-cover" />
            </div>
            <div className="border-t border-slate-600 w-full">
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <Rating name="read-only" value={product.rating} readOnly />
            </div>
            <Link className="bg-mainBlue text-white py-2 px-4 rounded-lg self-center hover:bg-mainYellow duration-500 " to={`/singleProduct/${product.id}`}>View More</Link>
        </div>
    )
}

export default CardProductComponent;