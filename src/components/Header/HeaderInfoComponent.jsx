// ICONS
import { useState } from "react";
import { CiLocationOn, CiDeliveryTruck } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


function HeaderInfoComponent() {

    const [toggleHeader, setToggleHeader] = useState(true);


    function handleCloseHeader() {
        setToggleHeader(!toggleHeader)
    }

    return (
        <div>
            {toggleHeader ? <div className="flex flex-col lg:flex-row mx-auto items-center justify-between container p-[1rem] lg:p-[2rem] transition-all 1s">
                <div>
                    <p>Need help? Call us: <a className="text-mainBlue" href="tel:(+98) 0234 456 789">(+98) 0234 456 789</a></p>
                </div>
                {/* right side */}
                <div className="flex gap-[2.1rem]">

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
                    </div>
                    <IoIosArrowUp size={24} className="cursor-pointer" onClick={handleCloseHeader} />
                </div>
            </div> : <div className="flex container mx-auto justify-end px-8 py-1 transition-all 1s"><IoIosArrowDown size={24} className="cursor-pointer" onClick={handleCloseHeader}  /></div> }
        </div>
    )
}

export default HeaderInfoComponent;