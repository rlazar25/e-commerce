//IMAGES
import logo from '../../assets/logo.png'
// ICONS
import { CiUser, CiShoppingCart, CiHeart } from "react-icons/ci";

function NavbarComponent() {
    return (
        <div className='bg-mainBlue h-[100px] '>
            <div className='container mx-auto px-8 flex items-center justify-between h-full'>

                <div className='flex items-center gap-[5.3rem]'>

                    <img src={logo} alt="logo" />

                    {/* search */}
                    <div className='bg-white rounded-[20px]'>
                        <input type="text" placeholder='Search any things' className='px-[25px] py-[17.5px] rounded-[20px] w-[320px] outline-none placeholder:text-textColor' />
                        <button className='bg-mainYellow px-[40px] py-[17.5px] rounded-[20px] text-white'>Search</button>
                    </div>
                </div>

                {/* login/cart/favorite */}
                <div className='flex text-white items-center gap-[1.9rem]'>
                    <div className='flex  items-center gap-[.6rem]'>
                        <CiUser size={24} />
                        <span>Login</span>
                    </div>
                    <div className='flex  items-center gap-[.6rem]'>
                        <div className='flex  items-center'>
                            <CiHeart size={24} />
                            <span className='bg-mainYellow rounded-full py-[2px] px-2 '>0</span>
                        </div>
                        <span>Favorite</span>
                    </div>
                    <div className='flex  items-center gap-[.6rem]'>
                        <div className='flex  items-center'>

                            <CiShoppingCart size={24} />
                            <span className='bg-mainYellow rounded-full py-[2px] px-2 '>0</span>
                        </div>
                        <span>Cart</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavbarComponent;