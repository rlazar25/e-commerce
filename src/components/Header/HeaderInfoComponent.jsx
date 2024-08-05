// ICONS
import { CiLocationOn, CiDeliveryTruck } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


function HeaderInfoComponent({setToggleHeader}) {

    function handleCloseHeader(){
        setToggleHeader(false)
    }

    return (
        <div className="flex items-center justify-between container mx-auto p-[2rem]">
             <div>
                <p>Need help? Call us: <a className="text-mainBlue" href="tel:(+98) 0234 456 789">(+98) 0234 456 789</a></p>
            </div>
            {/* right side */}
            <div className="flex gap-[2.1rem]">
                <div className="flex items-center gap-4" >
                    {/* icon */}
                    <CiLocationOn size={24} />
                    {/* text */}
                    <span>Our Store</span>
                </div>
                <div className="flex items-center gap-4">
                    {/* icon */}
                    <CiDeliveryTruck size={24} />
                    {/* text */}
                    <span>Track your order</span>
                </div>
        <IoMdClose size={24} className="cursor-pointer" onClick={handleCloseHeader}/>
            </div>
        </div>
    )
}

export default HeaderInfoComponent;