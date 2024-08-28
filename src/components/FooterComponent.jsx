import logo from '../assets/logo-dark.png'
// icons
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function FooterComponent() {
    return (
        <footer className=" bg-sky-200">
            <div className='flex flex-col-reverse items-center gap-10 md:flex-row md:-flex-wrap justify-around container mx-auto mt-20 p-8 pt-20'>
                <div className="flex flex-col gap-6 items-center md:items-start ">
                    <img src={logo} alt="logo" className='w-[150px] ' />
                    <p>64 st james boulevard hoswick , ze2 7zj</p>
                    <div className="flex gap-4 justify-center border-t py-6 border-slate-500 self-stretch ">
                        <FaFacebookF size={24} className=' cursor-pointer text-mainBlue hover:text-mainYellow' />
                        <FaXTwitter size={24} className=' cursor-pointer text-mainBlue hover:text-mainYellow' />
                        <FaWhatsapp size={24} className=' cursor-pointer text-mainBlue hover:text-mainYellow' />
                    </div>
                </div>
                <div>
                    <h2 className='text-[20px] font-semibold text-mainBlue' >Find product</h2>
                    <ul className='flex flex-col mt-4 gap-3'>
                        <li>Brownze arnold</li>
                        <li>Chronograph blue</li>
                        <li>Smart phones</li>
                        <li>Automatic watch</li>
                        <li>Hair straighteners</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-[20px] font-semibold text-mainBlue' >Get Help</h2>
                    <ul className='flex flex-col mt-4 gap-3'>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Return policy</li>
                        <li>Privacy policy</li>
                        <li>Payment policy</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-[20px] font-semibold text-mainBlue' >About us</h2>
                    <ul className='flex flex-col mt-4 gap-3'>
                        <li>News</li>
                        <li>Service</li>
                        <li>Our policy</li>
                        <li>Custmer care</li>
                        <li>Faq’s</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent