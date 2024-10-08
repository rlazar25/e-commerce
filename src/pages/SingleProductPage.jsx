// hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
// services
import productServices from "../services/productServices";
// components
import LoaderComponent from "../components/LoaderComponent";
// mui
import { Rating } from "@mui/material";
// icons
import { FaRegHeart, FaHeart } from "react-icons/fa";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { favoriteStateAction } from "../store/favoriteSlice";
// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// custom hooks
import useTopLoad from "../hooks/useTopLoad";

const SingleProductPage = () => {

    const [singleProduct, setSingleProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [currentImage, setCurrentImage] = useState(0)
    const { id } = useParams();

    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cartStore)
    const cartItem = cart.find(product => product.id === singleProduct.id)

    const { allFavorite } = useSelector(state => state.favoriteStore)
    const favoriteItem = allFavorite.find(product => product.id === singleProduct.id)

    // get single product
    useEffect(() => {
        productServices.getSingleProductService(id)
            .then(res => {
                setSingleProduct(res.data);
                setIsLoading(true);
            })
            .catch(err => console.log(err))
    }, [])

    //  load on top
   useTopLoad()

    const notify = () => toast.success("Added to Cart", { autoClose: 1000, position: "bottom-right", theme: "colored" });
    const warningMsg = () => toast.warning("Out of Stock", { autoClose: 1000, position: "bottom-right", theme: "colored" });
    const favoriteMsg = () => toast.success("Added to Favorite", { autoClose: 1000, position: "bottom-right", theme: "colored" });
    const removeFavoriteMsg = () => toast.error("Removed from Favorite", { autoClose: 1000, position: "bottom-right", theme: "colored" });


    const handleFavorite = (singleProduct) => {
        dispatch(favoriteStateAction(singleProduct));
        favoriteItem ? removeFavoriteMsg() : favoriteMsg()
    }

    const getAvailabilityText = () => {
        if (singleProduct.stock > 0) {
          return cartItem && cartItem.quantity >= singleProduct.stock 
            ? <span className="text-red-500">Out of Stock</span> 
            : <span className="text-lime-500">In Stock</span>;
        }
        return <span className="text-red-500">Out of Stock</span>;
      };

    return (
        <div className="container p-8 mx-auto">
            {isLoading ? <div className=" flex flex-col lg:flex-row">
                {/* left side */}
                <div className="w-full lg:w-[50%]">
                    <img className="shad mx-auto lg:mx-0 rounded-lg w-[70%] " src={singleProduct.images[currentImage]} alt={singleProduct.title} />
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 my-4">
                        {singleProduct.images.map((img, index) => {
                            return <img className="w-[100px] shad cursor-pointer rounded-lg" key={index} src={img} alt={singleProduct.title} onClick={() => setCurrentImage(index)} />
                        })}
                    </div>
                </div>
                {/* right side */}
                <div className="w-full lg:w-[50%]">
                    <div className=" border-b-2 pb-8 py-8 border-slate-600 flex flex-col gap-4">
                        <h1 className="text-3xl font-medium text-mainBlue">{singleProduct.title}</h1>
                        <p className="text-3xl font-semibold text-slate-600">${singleProduct.price}</p>
                        <Rating name="read-only" value={singleProduct.rating} readOnly />
                        <p className="font-medium">Availability: {getAvailabilityText()}</p>
                        <p>Hurry up! only <span className="font-semibold">{cartItem ?  singleProduct.stock - cartItem.quantity : singleProduct.stock}</span> product left in stock!</p>
                        <p>{singleProduct.description}</p>
                    </div>
                    <div className=" border-b-2 py-8 border-slate-600 ">
                        <div className="flex flex-col gap-6 font-medium">
                            <div>
                                <p>Total price: <span>${cartItem ? (cartItem.totalProductPrice * cartItem.quantity).toFixed(2) : singleProduct.price}</span></p>
                            </div>
                            {/* increase */}
                            <div className="flex gap-2 items-center mb-11 ">
                                <p>Quantity :</p>
                                <p className="text-center ">{cartItem ? cartItem.quantity : 1}</p>
                            </div>
                        </div>
                        {/* buttons */}
                        <div className="flex items-center gap-5">
                            <button onClick={() => {
                                dispatch(addToCart(singleProduct));
                                cartItem ? cartItem.quantity < singleProduct.stock ? notify() : warningMsg() : notify()
                            }}
                                className="bg-mainYellow duration-500 hover:bg-mainBlue text-white px-7 py-3 rounded-lg font-semibold">Add to cart</button>
                            <button onClick={() => handleFavorite(singleProduct)} className="bg-mainYellow duration-500 hover:bg-mainBlue text-white p-3  rounded-full">{favoriteItem ? <FaHeart size={20} /> : <FaRegHeart size={20} />}</button>
                        </div>
                    </div>

                </div>
            </div> : <div className="flex justify-center mt-[5rem]"> <LoaderComponent size={100} /> </div>}
            <ToastContainer limit={2} />
        </div>
    )
}

export default SingleProductPage