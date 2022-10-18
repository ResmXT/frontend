import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { HiOutlineTemplate } from 'react-icons/hi';
import { IoIosCreate } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

const MobileNavbar = () => {
  const navItem = 'ml-8 text-gray-500 cursor-pointer hover:text-white mb-7';
  const activeNav = 'ml-8 text-white cursor-pointer mb-7';
  const location = useLocation();

  return (
    <div className="z-50 w-screen h-screen bg-black absolute pl-[5%] pt-[10%] lg:hidden block">
      <div className="text-white">
        <div className="">
          <div className="flex-col">
            <div className={location.pathname === '/' ? activeNav : navItem}>
              <Link to="/">
                <div className="">
                  <AiFillHome className="inline-block mb-1 mr-2" />
                  Home
                </div>
              </Link>
            </div>
            <div
              className={location.pathname === '/editor' ? activeNav : navItem}
            >
              <Link to="/editor">
                <div className="">
                  <IoIosCreate className="inline-block mb-1 mr-2" />
                  Create Resume
                </div>
              </Link>
            </div>
            <div
              className={
                location.pathname === '/templates' ? activeNav : navItem
              }
            >
              <HiOutlineTemplate className="inline-block mb-1 mr-2" />
              Templates
            </div>
            <div
              className={location.pathname === '/blogs' ? activeNav : navItem}
            >
              <div className="">
                <CgNotes className="inline-block mb-1 mr-2" />
                Blogs
              </div>
            </div>
            <div className="w-fit ml-8 p-0.5 rounded-full bg-gradient-to-r  from-[#6759C8]  to-[#fc00ff]">
              <button className="bg-black px-3 py-1 rounded-full">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
