import { useRef, useState } from "react";
// mui
import { Table, TableContainer, TableHead, TableRow, Paper, TableCell, TableBody } from "@mui/material";
// redux
import { useDispatch, useSelector } from "react-redux";
import { clearCartAction, decreaseQuantityProduct, increaseQuantityProduct, removeFromCart } from "../store/cartSlice";
// Toastify
import { toast, ToastContainer } from "react-toastify";
// react-router-dom
import { Link } from "react-router-dom";

function CartPage() {

    const [cuponCode, setCuponCode] = useState("");
    const cuponCodeRef = useRef();

    // redux
    const { cart, totalPrice } = useSelector(state => state.cartStore);
    const dispatch = useDispatch();

    // Toastify
    const warningMsg = () => toast.warning("Out of stock", { autoClose: 1000, position: "bottom-right", theme: "colored" });
    const deleteMsg = () => toast.error("Item Removed", { autoClose: 1000, position: "bottom-right", theme: "colored" });
    const clearCartMsg = () => toast.error("Cart Cleared", { autoClose: 1000, position: "bottom-right", theme: "colored" });
    

    // handler
    function handleCuponCode() {
        setCuponCode(cuponCodeRef.current.value);
        cuponCodeRef.current.value = "";
    }

    return (
        <div className='my-[50px]'>
            {cart.length > 0 ? <div className='container p-8 mx-auto flex flex-col lg:flex-row gap-[20px]'>
                <div className='w-full lg:w-[70%]'>
                    <TableContainer className="rounded-lg" component={Paper} >
                        <Table sx={{ minWidth: 250 }} aria-label="simple table">
                            <TableHead className='bg-mainBlue'>
                                <TableRow>
                                    <TableCell style={{ color: 'white' }} className='text-textWhite'>Products</TableCell>
                                    <TableCell style={{ color: 'white' }} align="center">Price</TableCell>
                                    <TableCell style={{ color: 'white' }} align="center">Quantity</TableCell>
                                    <TableCell style={{ color: 'white' }} align="center">Subtotal</TableCell>
                                    <TableCell style={{ color: 'white' }} align="center">Remove</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.map((product) => (
                                    <TableRow

                                        key={product.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <Link to={`/singleProduct/${product.id}`} className="flex gap-2 items-center">
                                                <img src={product.thumbnail} alt="" className='w-[90px] h-[90px] border border-mainBlue rounded-lg object-cover ' />
                                                <p title={product.title}  className="hidden md:inline text-xl font-semibold text-mainBlue truncate ">{product.title}</p>
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">${product.price}</TableCell>
                                        <TableCell align="center">
                                            <div className="flex justify-center items-center text-[18px] font-medium">
                                                <button onClick={() => dispatch(decreaseQuantityProduct(product))} className="cursor-pointer border border-slate-300 w-9 h-8 text-center bg-slate-100">-</button>
                                                <span className="w-16 text-center border border-slate-300 h-8 bg-slate-100">{product.quantity}</span>
                                                <button onClick={() => {
                                                    dispatch(increaseQuantityProduct(product))
                                                    if (product.quantity >= product.stock) {
                                                        warningMsg()
                                                    }
                                                }} className="cursor-pointer border border-slate-300 w-9 h-8 text-center bg-slate-100">+</button>
                                            </div>
                                        </TableCell>
                                        <TableCell align="center">${(product.totalProductPrice * product.quantity).toFixed(2)}</TableCell>
                                        <TableCell align="center">
                                            <button onClick={() => {
                                                dispatch(removeFromCart(product));
                                                deleteMsg();
                                            }} className='text-red-400'>Remove</button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className='flex justify-evenly lg:justify-start gap-4 mt-5 '>
                        <Link to={'/'} className='bg-mainYellow hover:bg-mainBlue text-white px-5 py-3 rounded-lg self-start'>Continue Shopping</Link>
                        <button onClick={() => {dispatch(clearCartAction()); clearCartMsg()}}  className='bg-red-500 hover:bg-red-600  text-white px-5 py-3 rounded-lg self-start'>Clear Cart</button>
                    </div>
                </div>
                {/* INFO/CART */}
                <div className='w-full lg:w-[30%] self-start border rounded-lg '>
                    <h2 className="bg-mainBlue text-center text-white p-4 rounded-t-md">CART TOTAL</h2>
                    <div className="px-8 py-3">
                        <div className="flex justify-between border-b py-5 border-slate-700 text-[20px] font-semibold">
                            <p>Subtotal: </p>
                            <p className={cuponCode === 'your smile' ? 'line-through' : ''}>${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className="flex flex-col gap-4 border-b py-5 border-slate-700">
                            <input ref={cuponCodeRef} className="border placeholder:text-slate-700 border-slate-300 p-2 w-full rounded-lg" type="text" placeholder="Enter Coupon Code" />
                            <button disabled={cuponCode === 'your smile'} onClick={handleCuponCode} className={cuponCode === 'your smile' ? "bg-slate-400 line-through duration-500 text-black py-2 w-full rounded-lg" : "bg-mainBlue hover:bg-mainYellow  duration-500 text-white py-2 w-full rounded-lg "}> {cuponCode === 'your smile' ? 'Cupon Applied' : 'Apply Cupon Code'}</button> 
                        </div>
                        <div className="flex flex-col gap-4 py-5">
                            <div className="flex justify-between text-[20px] font-semibold">
                                <p>Total Amount: </p>
                                <p>${cuponCode === 'your smile' ? (totalPrice / 2).toFixed(2) : totalPrice.toFixed(2)}</p>
                            </div>
                            <button className="bg-mainBlue hover:bg-mainYellow  duration-500 text-white py-2 w-full rounded-lg self-start">Checkout</button>
                        </div>
                    </div>

                </div>
                {/* if cart is empty */}
            </div> : <div className="text-center my-[50px]">
                <h1 className="text-3xl font-semibold text-mainBlue text-center my-10">Cart is empty</h1>
                <p>Check our <Link className="text-mainYellow" to="/">Products</Link></p>
            </div>}

            <ToastContainer limit={2} />
        </div>
    )
}

export default CartPage;