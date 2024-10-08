// ICONS
import { useState } from "react";
import { CiLocationOn, CiDeliveryTruck } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const HeaderInfoComponent = () => {

    const [toggleHeader, setToggleHeader] = useState(true);


    const handleCloseHeader = () => {
        setToggleHeader(!toggleHeader)
    }

    return (
        <div>
            {toggleHeader ? <div className="flex flex-col gap-4 lg:flex-row mx-auto items-center justify-between container p-[1rem] lg:p-[2rem] duration-1000">
                <div>
                    <p>Need help? Call us: <a className="text-mainBlue" href="tel:(+98) 0234 456 789">(+98) 0234 456 789</a></p>
                </div>
                {/* right side */}
                <div className="flex gap-[2.1rem]">

                    <div className="flex gap-[2.1rem]">
                        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-4" >
                            {/* icon */}
                            <CiLocationOn size={24} />
                            {/* text */}
                            <span>Our Store</span>
                        </div>
                        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-4">
                            {/* icon */}
                            <CiDeliveryTruck size={24} />
                            {/* text */}
                            <span>Track your order</span>
                        </div>
                    </div>
                    <IoIosArrowUp size={24} className="cursor-pointer" onClick={handleCloseHeader} />
                </div>
            </div> : <div className="flex container mx-auto justify-end px-8 py-1 duration-500"><IoIosArrowDown size={24} className="cursor-pointer" onClick={handleCloseHeader}  /></div> }
        </div>
    )
}

export default HeaderInfoComponent;