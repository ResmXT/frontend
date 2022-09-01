import React from 'react'
import {Link } from 'react-router-dom'
import Img from '../../assets/svg/Laptop.svg'
const Home = () => {
  return (
    <div className='container mx-auto'>
        <div className="px-24 h-[110vh] w-full scrollbar">
            <div className="h-full flex justify-between items-center">
                <div className="">
                    <div className="text-white text-[45px] pt-20">
                        The <span className='text-[#fc00ff] font-bold'>online</span> resume <br/> builder  build <br/> your <span className='text-[#6759C8] font-bold'>resume for free</span> 
                    </div>

                    <Link to="/editor">
                        <div className="w-fit px-8 py-3 mt-10 bg-gradient-to-r  from-[#6759C8]  to-[#fc00ff] shadow-lg shadow-[#6859c852] hover:shadow-none  hover:bg-transparent  rounded-full text-white cursor-pointer">
                            Create your resume
                        </div>
                    </Link>
                </div>
                <div className="">
                <img src={Img} alt="" className='w-[40rem] h-auto' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home