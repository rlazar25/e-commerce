import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

function CardProductComponent({ product, isGrid }) {

    return (
        <div className={isGrid ? "flex flex-col shad border w-[300px]  items-start rounded-lg p-2 " : 'flex flex-col w-[300px] items-start p-2 md:flex-row md:w-full md:justify-between md:px-8 md:items-center lg:w-[80%] shad rounded-lg'}>
            <div className="self-center" >
                <Link to={`/singleProduct/${product.id}`}>
                    <img src={product.thumbnail} alt={product.title} className="h-[200px] w-full object-cover" />
                </Link>
            </div>
            <div className={isGrid ? "border-t border-slate-600 w-full" : 'border-t border-slate-600 w-full md:flex md:w-[50%] md:justify-between md:items-center md:border-none '}>
                <h2 title={product.title} className="truncate">{product.title}</h2>
                <p>${product.price}</p>
                <Rating name="read-only" value={product.rating} readOnly />
            </div>
            <Link className="bg-mainBlue text-white py-2 px-4 rounded-lg self-center hover:bg-mainYellow duration-500 " to={`/singleProduct/${product.id}`}>View More</Link>
        </div>
    )
}

export default CardProductComponent;