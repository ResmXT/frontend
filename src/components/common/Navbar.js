import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {IoIosCreate} from 'react-icons/io'
import {HiOutlineTemplate} from 'react-icons/hi'
import {CgNotes} from 'react-icons/cg'



const Navbar = ({user}) => {
  const location=useLocation();
  const navItem='mx-8 text-white cursor-pointer hover:text-[#6759C8]';
  const activeNav='mx-8 text-[#6759C8] cursor-pointer'
  return (
    <div className='container mx-auto'>
        <div className="h-[60px] w-full bg-[#15171a] px-24 fixed border-b-2 border-[#191724] z-10">
            <div className="">
              <div className="h-[60] flex justify-between items-center">
                <div className="">
                  <div className="leading-[60px] text-white cursor-pointer">
                    <Link to="/">Logo</Link>
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
                <div className="">
                  {user ? (
                
                    <div className="text-white hover:text-[#6759C8] group">
                    {/* <Profile letter={user.username.charAt(0).toUpperCase()}/> */}
                    {/* <div className="group-hover:opacity-100 opacity-0">
                    <ProfileDropDown/>
                    </div> */}
                  </div>
                  ) : (
                    <div className="text-white hover:text-[#6759C8]">
                    <Link to="/login">Log in</Link>
                  </div>
                  )}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar