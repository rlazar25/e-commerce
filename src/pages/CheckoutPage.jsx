// react-router-dom
import { Link } from "react-router-dom"
// icons
import { CiDeliveryTruck } from "react-icons/ci";

const CheckoutPage = () => {

    return (
        <div className="flex flex-col items-center text-2xl gap-3">
            <p className="text-3xl mt-12">Thank you for your order</p>
            <div className="flex items-end ">
                <p>Your order will be shipped soon </p>
                <CiDeliveryTruck />
            </div>
            <p className="text-base">Delivery in 1 month. 30 days return policy</p>

            <Link to={'/'} className="text-mainYellow mt-10">New Order</Link>
        </div>
    )
}

export default CheckoutPage