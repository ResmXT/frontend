import React, { useEffect, useState } from 'react'
import { Link,useLocation } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {IoIosCreate} from 'react-icons/io'
import {HiOutlineTemplate} from 'react-icons/hi'
import {CgNotes} from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import Profile from './Profile'
import { onGetUser } from '../../redux/action/user'
import ProfileDropDown from './Dropdown/ProfileDropDown'



const Navbar = ({user}) => {
  const [dropdown,setDropdown]=useState(false);
  const onToggleDropdown=()=>{
    setDropdown(!dropdown);
  }
  console.log(dropdown);
  const location=useLocation();
  const navItem='mx-8 text-gray-500 cursor-pointer hover:text-white';
  const activeNav='mx-8 text-white cursor-pointer'
  return (
    <div className='w-[100%] bg-[#15171a]'>
    <div className='w-full flex justify-center bg-[#15171a] container mx-auto'>
        <div className="h-[60px] w-full bg-[#15171a] px-24 z-20">
            <div className="">
              <div className="h-[60] flex justify-between items-center">
                <div className="">
                  <div className="leading-[60px] text-white cursor-pointer font-bold bg-gradient-to-r  from-[#6759C8]  to-[#fc00ff] bg-clip-text text-transparent">
                    <Link to="/">ResmXT</Link>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center">
                  <div className={location.pathname==='/'? activeNav : navItem}>
                      <Link to="/"><div className="">
                      <AiFillHome className='inline-block mb-1 mr-2'/>Home</div></Link>
                    </div>
                    <div className={location.pathname==='/editor'? activeNav:navItem}>
                      <Link to="/editor">
                        <div className=""><IoIosCreate className='inline-block mb-1 mr-2'/>Create Resume</div>
                      </Link>
                    </div>
                    <div className={location.pathname==='/templates'? activeNav:navItem}><HiOutlineTemplate className='inline-block mb-1 mr-2'/>Templates</div>
                    <div className={location.pathname==='/blogs'? activeNav:navItem}>
                      <div className="">
                        <CgNotes className='inline-block mb-1 mr-2'/>Blogs
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  {user ? (
                
                    <div className="text-white hover:text-[#6759C8] group" onClick={onToggleDropdown}>
                    <Profile letter={user.username.charAt(0).toUpperCase()}/>
                  </div>
                  ) : (
                   <Link to="/login">
                       <div className="text-white hover:text-[#6759C8] py-1 px-4 border-2 border-[#6759C8] rounded-full cursor-pointer">
                        Log in
                       </div>
                   </Link>
                  )}
                  <div className={dropdown ? "absolute right-0 top-12" : "hidden"} >
                      <ProfileDropDown onToggleDropdown={onToggleDropdown}/>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar