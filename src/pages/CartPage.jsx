import { Table, TableContainer, TableHead, TableRow, Paper, TableCell, TableBody } from "@mui/material";
// redux
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantityProduct, increaseQuantityProduct, removeFromCart } from "../store/cartSlice";

function CartPage() {
    const { cart } = useSelector(state => state.cartStore)
    const dispatch = useDispatch()
    return (
        <div className='mt-[50px]'>
            <div className='container p-8 mx-auto flex flex-col lg:flex-row gap-[20px]'>
                <TableContainer component={Paper} className='w-full lg:w-[70%]'>
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
                                        <div className="flex gap-2 items-center">
                                            <img src={product.thumbnail} alt="" className='w-[90px] h-[90px] border border-mainBlue rounded-lg object-cover ' />
                                            <p className="text-xl font-semibold text-mainBlue">{product.title}</p>
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">${product.price}</TableCell>
                                    <TableCell align="center">
                                        <div className="flex justify-center items-center text-[18px] font-medium">
                                            <span onClick={() => dispatch(decreaseQuantityProduct(product))} className="cursor-pointer border border-slate-300 w-9 h-8 text-center bg-slate-100">-</span>
                                            <p className="w-16 text-center border border-slate-300 h-8 bg-slate-100">{product.quantity}</p>
                                            <span onClick={() => dispatch(increaseQuantityProduct(product))} className="cursor-pointer border border-slate-300 w-9 h-8 text-center bg-slate-100">+</span>
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">${(product.totalProductPrice * product.quantity).toFixed(2)}</TableCell>
                                    <TableCell align="right">
                                        <button onClick={() => dispatch(removeFromCart(product))} className='text-red-400'>Remove</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* INFO/CART */}
                <div className='w-full lg:w-[30%]'>
                    <h2>CART TOTAL</h2>
                </div>
            </div>
        </div>
    )
}

export default CartPage;