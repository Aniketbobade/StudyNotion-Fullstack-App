import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png";
import  { NavbarLinks } from "../../data/navbar-links";
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {AiOutlineShoppingCart} from "react-icons/ai";
import ProfileDropDown from '../core/auth/ProfileDropDown';
import { apiConnector } from '../../services/apiConnector';
import { categories } from '../../services/api';
const Navbar = () => {
    const {token} = useSelector((state) => state.auth);
    const {user} =useSelector((state)=> state.profile);
    const {totalItem} = useSelector((state)=> state.cart);
    const [sublinks, setSbutlinks] = useState([]);

    const location = useLocation();

    const matchRoute=(route) =>{
        // console.log("in method"{path:route},location.pathname);
        // return ({path:route},location.pathname);
        if(location.pathname === route){
            return true;
        }else{
           return false;
        }
    }
    const fetchSublinks = async() =>{
            try {
                const result= await apiConnector("GET", categories.CATEGORIES_API);
                console.log(result);
                setSbutlinks(result.data.data);
            } catch (error) {
                console.log("can not get catergory, something went wrong");
                console.error(error);
            }
        }
    useEffect(()=>{
       fetchSublinks();
    },[]);
  return (
    <div className='flex w-full h-[56px] border-b-2 border-richblack-700 items-center justify-center'>
        <div className='flex flex-row w-11/12 max-w-maxContent items-center justify-evenly'>
            <Link to={"/"}>
                <img src={logo} alt='Logo' width={160} height={42} />
            </Link>
            {/* navbar list */}
            <nav>
                <ul className='flex gap-x-6 text-richblack-25'> 
                    {
                        NavbarLinks.map((link, index)=>(
                            
                            <li key={index}>
                                {console.log(link)}
                                {
                                    link.title === "Catalog" ? (link.title): ( 
                                        <Link to={link?.path}>
                                            <p className={`${matchRoute(link?.path) ? "text-yellow-25":"text-richblack-25"}`}>
                                                {link.title}
                                            </p>
                                        </Link>
                                    )  
                                }
                            </li>
                        ))
                    }
                </ul>
            </nav>
            {/* login/signup/ cart, dashborad / profile photo */}
            <div className='flex gap-x-4 items-center'>
                {
                    user && user?.accountType !== "Instructor" && (
                        <Link to={"/dashboard/cart"} className='relative'>
                            <AiOutlineShoppingCart/>
                            {
                                totalItem > 0 (
                                    <span>
                                        {totalItem}
                                    </span>
                                )
                            }
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to={"/login"}>
                            <button className='border-richblack-700 bg-richblack-800 text-richblack-50 py-1 px-3 rounded-sm'>
                                Login
                            </button>
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to={"/signup"}>
                            <button className='border-richblack-700 bg-richblack-800 text-richblack-50 py-1 px-3 rounded-sm'>
                                signup
                            </button>
                        </Link>
                    )
                }
                {
                    token !== null && <ProfileDropDown/>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar