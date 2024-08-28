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

function SingleProductPage() {

    const [singleProduct, setSingleProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [currentImage, setCurrentImage] = useState(0)
    const { id } = useParams();

    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cartStore)
    const cartItem = cart.find(product => product.id === singleProduct.id)

    const {allFavorite} = useSelector(state => state.favoriteStore)
    const favoriteItem = allFavorite.find(product => product.id === singleProduct.id)

    useEffect(() => {
        productServices.getSingleProductService(id)
            .then(res => {
                setSingleProduct(res.data);
                setIsLoading(true);
            })
            .catch(err => console.log(err))
    }, [])

    const notify = () => toast.success("Added to Cart", { autoClose: 1000, position: "bottom-right", theme: "colored" });
    const warningMsg = () => toast.warning("Out of Stock", { autoClose: 1000, position: "bottom-right", theme: "colored" });
    const favoriteMsg = () => toast.success("Added to Favorite", { autoClose: 1000, position: "bottom-right", theme: "colored" });
    const removeFavoriteMsg = () => toast.error("Removed from Favorite", { autoClose: 1000, position: "bottom-right", theme: "colored" });
    

    function handleFavorite(singleProduct){
        dispatch(favoriteStateAction(singleProduct));
        favoriteItem ? removeFavoriteMsg() : favoriteMsg()
    }

    return (
        <div className="container p-8 mx-auto">
            {isLoading ? <div className=" flex flex-col lg:flex-row">
                {/* left side */}
                <div className="w-full lg:w-[50%] ">
                    <img className="border border-slate-700 mx-auto lg:mx-0 rounded-lg w-[70%] " src={singleProduct.images[currentImage]} alt={singleProduct.title} />
                    <div className="flex flex-wrap gap-4 my-4">
                        {singleProduct.images.map((img, index) => {
                            return <img className="w-[100px] border border-slate-700 rounded-lg" key={index} src={img} alt={singleProduct.title} onClick={() => setCurrentImage(index)} />
                        })}
                    </div>
                </div>
                {/* right side */}
                <div className="w-full lg:w-[50%]">
                    <div className=" border-b-2 pb-16 border-slate-600 flex flex-col gap-4">
                        <h1 className="text-3xl font-medium text-mainBlue">{singleProduct.title}</h1>
                        <p className="text-3xl font-semibold text-slate-600">${singleProduct.price}</p>
                        <Rating name="read-only" value={singleProduct.rating} readOnly />
                        <p className="font-medium">Availability: {singleProduct.stock > 0 ? <span className="text-lime-500">In Stock</span> : <span className="text-red-500">Out of Stock</span>} </p>
                        <p>Hurry up! only <span className="font-semibold">{singleProduct.stock}</span> product left in stock!</p>
                        <p>{singleProduct.description}</p>
                    </div>
                    <div className=" border-b-2 py-16 border-slate-600 ">

                        <div className="flex flex-col gap-6 font-medium">
                            <div>
                                <p>Total price: <span>${cartItem ? (cartItem.totalProductPrice * cartItem.quantity).toFixed(2) : singleProduct.price}</span></p>
                            </div>
                            {/* increase */}
                            <div className="flex gap-5 items-center mb-11 ">
                                <p>Quantity :</p>
                                <div className="flex items-center text-[18px]">
                                    <span className="cursor-pointer border border-slate-300 w-9 h-8 text-center bg-slate-100">-</span>
                                    <p className="w-16 text-center border border-slate-300 h-8 bg-slate-100">{cartItem ? cartItem.quantity : 1}</p>
                                    <span className="cursor-pointer border border-slate-300 w-9 h-8 text-center bg-slate-100">+</span>
                                </div>
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