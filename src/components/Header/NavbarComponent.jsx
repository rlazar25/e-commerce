//IMAGES
import logo from '../../assets/logo.png'
// ICONS
import { CiUser, CiShoppingCart, CiHeart } from "react-icons/ci";
// CLERK
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
// REACT ROUTER DOM
import { Link } from 'react-router-dom';
// REDUX
import { useSelector } from 'react-redux';


function NavbarComponent() {

    const {totalProduct} = useSelector(state => state.cartStore)

    return (
        <div className='bg-mainBlue lg:h-[100px] '>
            <div className='container mx-auto px-8 py-4 flex flex-col lg:flex-row items-center justify-between h-full'>

                <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-[5.3rem]'>
                    <Link to={'/'} >
                        <img src={logo} alt="logo" />
                    </Link>

                    {/* search */}
                    <div className='bg-white rounded-[20px]'>
                        <input type="text" placeholder='Search any things' className='px-[25px] py-[17.5px] rounded-[20px] w-[200px] xl:w-[320px] outline-none placeholder:text-textColor' />
                        <button className='bg-mainYellow  px-[25px] lg:px-[40px] py-[17.5px] rounded-[20px] text-white'>Search</button>
                    </div>
                </div>

                {/* login/cart/favorite */}
                <div className='flex mt-6 lg:mt-0 text-white items-center gap-[1.9rem]'>

                    <div className='flex  items-center gap-[.6rem]'>
                        <div className='flex items-center'>
                            <CiHeart size={24} />
                            <span>Favorite</span>
                        </div>
                        <span className='bg-mainYellow rounded-full py-[2px] px-2 '>0</span>
                    </div>
                    <div className='flex  items-center gap-[.6rem]'>
                        <Link to={'/cart'}>
                        <div className='flex items-center'>

                            <CiShoppingCart size={24} />
                            <span>Cart</span>
                        </div>
                        </Link>
                        <span className='bg-mainYellow rounded-full py-[2px] px-2 '>{totalProduct}</span>
                    </div>
                    <div className='flex  items-center gap-[.6rem]'>
                        <SignedOut>
                            <CiUser size={24} />
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent;