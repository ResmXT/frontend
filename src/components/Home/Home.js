import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../../assets/svg/Laptop.svg';
const Home = () => {
  return (
    <div className="">
      <div className="relative h-[100vh] w-full ">
        <div className="h-full flex justify-between items-center px-24 container mx-auto">
          <div className="">
            <div className="text-white text-[50px] pt-20 font-medium tracking-wide">
              Build Your{' '}
              <span className="bg-gradient-to-r  from-[#6759C8]  to-[#fc00ff] bg-clip-text text-transparent ">
                resume{' '}
              </span>{' '}
              <br />
              online for free
            </div>

            <Link to="/editor">
              <div className="relative w-fit p-0.5 mt-10 bg-gradient-to-r  from-[#6759C8]  to-[#fc00ff]  z-10  rounded-full text-white cursor-pointer tracking-wide">
                <div className="py-3 px-5 bg-[#15171a] rounded-full hover:bg-black transition-all">
                  Create your resume
                </div>
              </div>
            </Link>
          </div>
          <div className="z-10">
            <img src={Img} alt="" className="w-[30rem] h-auto pt-20" />
          </div>
        </div>
        <div className=" absolute  w-[100vw] h-fit bottom-0 left-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#e2e8f0"
              fillOpacity="1"
              d="M0,288L80,293.3C160,299,320,309,480,288C640,267,800,213,960,160C1120,107,1280,53,1360,26.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
