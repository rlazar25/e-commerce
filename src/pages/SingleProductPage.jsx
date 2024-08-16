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
import { FaRegHeart } from "react-icons/fa";

function SingleProductPage() {

    const [singleProduct, setSingleProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [currentImage, setCurrentImage] = useState(0)
    const [counter, setCounter] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const { id } = useParams();

    useEffect(() => {
        productServices.getSingleProductService(id)
            .then(res => {
                setSingleProduct(res.data);
                setIsLoading(true);
            })
            .catch(err => console.log(err))
    }, [totalPrice])

    function handleCounterIncrease() {
        if (counter < singleProduct.stock) {
            setCounter(counter + 1)
        }
    }
    function handleCounterDecrease() {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    

    return (
        <div className="container p-8 mx-auto">
            {isLoading ? <div className=" flex flex-col lg:flex-row">
                {/* left side */}
                <div className="w-full lg:w-[50%] ">
                    <img className="border border-slate-700 mx-auto lg:mx-0 rounded-lg w-[70%] " src={singleProduct.images[currentImage]} alt={singleProduct.title} />
                    <div className="flex gap-4 my-4">
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
                                <p>Total price: <span>${(singleProduct.price * counter).toFixed(2)}</span></p>
                            </div>
                            {/* increase */}
                            <div className="flex gap-5 items-center mb-11 ">
                                <p>Quantity :</p>
                                <div className="flex items-center text-[18px]">
                                    <span onClick={handleCounterDecrease} className="cursor-pointer border border-slate-300 w-9 h-8 text-center bg-slate-100">-</span>
                                    <p className="w-16 text-center border border-slate-300 h-8 bg-slate-100">{counter}</p>
                                    <span onClick={handleCounterIncrease} className="cursor-pointer border border-slate-300 w-9 h-8 text-center bg-slate-100">+</span>
                                </div>
                            </div>
                        </div>
                        {/* buttons */}
                        <div className="flex items-center gap-5">
                            <button className="bg-mainYellow duration-500 hover:bg-mainBlue text-white px-7 py-3 rounded-lg">Add to cart</button>
                            <button className="bg-mainYellow duration-500 hover:bg-mainBlue text-white p-3  rounded-full"><FaRegHeart /></button>
                        </div>
                    </div>
                </div>
            </div> : <div className="flex justify-center mt-[5rem]"> <LoaderComponent size={100} /> </div>}
        </div>
    )
}

export default SingleProductPage