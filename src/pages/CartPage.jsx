import { Table, TableContainer, TableHead, TableRow, Paper, TableCell, TableBody } from "@mui/material";
// redux
import { useDispatch, useSelector } from "react-redux";
import { clearCartAction, decreaseQuantityProduct, increaseQuantityProduct, removeFromCart } from "../store/cartSlice";
// Toastify
import { toast, ToastContainer } from "react-toastify";
// react-router-dom
import { Link } from "react-router-dom";

function CartPage() {
    const { cart } = useSelector(state => state.cartStore)
    const dispatch = useDispatch()

    const warningMsg = () => toast.warning("Out of stock", { autoClose: 1000, position: "bottom-right", theme: "colored" });
    const deleteMsg = () => toast.error("Item Removed", { autoClose: 1000, position: "bottom-right", theme: "colored" });
    return (
        <div className='mt-[50px]'>
            {cart.length > 0 ? <div className='container p-8 mx-auto flex flex-col lg:flex-row gap-[20px]'>
                <div className='w-full lg:w-[70%]'>
                    <TableContainer component={Paper} >
                        <Table sx={{ minWidth: 250 }} aria-label="simple table">
                            <TableHead className='bg-mainBlue'>
                                <TableRow>
                                    <TableCell style={{ color: 'white' }} className='text-textWhite'>Products</TableCell>
                                    <TableCell style={{ color: 'white' }} align="center">Price</TableCell>
                                    <TableCell style={{ color: 'white' }} align="center">Quantity</TableCell>
                                    <TableCell style={{ color: 'white' }} align="center">Subtotal</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Remove</TableCell>
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
                                                <p className="hidden md:inline text-xl font-semibold text-mainBlue">{product.title}</p>
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">${product.price}</TableCell>
                                        <TableCell align="center">
                                            <div className="flex justify-center items-center text-[18px] font-medium">
                                                <span onClick={() => dispatch(decreaseQuantityProduct(product))} className="cursor-pointer border border-slate-300 w-9 h-8 text-center bg-slate-100">-</span>
                                                <p className="w-16 text-center border border-slate-300 h-8 bg-slate-100">{product.quantity}</p>
                                                <span onClick={() => {
                                                    dispatch(increaseQuantityProduct(product))
                                                    if (product.quantity >= product.stock) {
                                                        warningMsg()
                                                    }
                                                }} className="cursor-pointer border border-slate-300 w-9 h-8 text-center bg-slate-100">+</span>
                                            </div>
                                        </TableCell>
                                        <TableCell align="center">${(product.totalProductPrice * product.quantity).toFixed(2)}</TableCell>
                                        <TableCell align="right">
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
                        <button onClick={() => dispatch(clearCartAction())} className='bg-red-500 hover:bg-red-600  text-white px-5 py-3 rounded-lg self-start'>Clear Cart</button>
                    </div>
                </div>
                {/* INFO/CART */}
                <div className='w-full lg:w-[30%]'>
                    <h2>CART TOTAL</h2>
                </div>
            </div> : <div className="text-center">
                <h1 className="text-3xl font-semibold text-mainBlue text-center mt-[50px]">Cart is empty</h1>
                <p>Check our <Link className="text-mainYellow" to="/">Products</Link></p>
            </div>}
            
            <ToastContainer limit={2} />
        </div>
    )
}

export default CartPage;