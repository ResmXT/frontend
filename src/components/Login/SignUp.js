import React, { useEffect, useState } from 'react'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import {BsFillPersonFill} from 'react-icons/bs'

const SignUp = () => {
    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassward]=useState("");
    const [cPass,setCPass]=useState("");
    const [error,showError]=useState(false);
    const onSignUp=()=>{
        console.log("hello");
    }
  return (
    <div>
    <div className="h-screen w-full bg-[#15171a]">
        <div className="h-full flex justify-center items-center">
            <div className="backdrop-blur-sm bg-white rounded-lg w-[30%] h-[80%]">
                <div className="h-full flex flex-col items-center justify-center">
                    <div className="text-[23px] mb-5 font-bold text-[#6759C8]">Sign up</div>
                    <div className="w-[80%] mb-5 relative">
                        <MdEmail className='absolute text-[#6759C8] w-[30px] h-[30px] top-1/2  transform  -translate-y-1/2 left-1'/>
                        <input type="text" 
                        placeholder='Enter email'
                        onChange={(e)=>setEmail(e.target.value)}
                        className=' pl-10 w-full  py-3 bg-transparent focus:ring-0 outline-0   text-left border-0   placeholder-[#15171a] shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg'/>
                    </div>
                    <div className="w-[80%] mb-5 relative">
                        <BsFillPersonFill className='absolute text-[#6759C8] w-[30px] h-[30px] top-1/2  transform  -translate-y-1/2 left-1'/>
                        <input type="text" 
                        placeholder='Enter username'
                        onChange={(e)=>setUsername(e.target.value)}
                        className=' pl-10 w-full  py-3 bg-transparent focus:ring-0 outline-0   text-left border-0   placeholder-[#15171a] shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg'/>
                    </div>
                    <div className="w-[80%] relative mb-5">
                        <RiLockPasswordFill className='absolute text-[#6759C8] w-[30px] h-[30px] top-1/2  transform  -translate-y-1/2 left-1'/>
                    <input type="text" 
                    placeholder='Enter password'
                    onChange={(e)=>setPassward(e.target.value)}
                    className='pl-10 w-full  py-3 bg-transparent focus:ring-0 outline-0   text-left border-0   placeholder-[#15171a] shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg'/>

                    </div>
                    <div className="w-[80%] relative ">
                        <RiLockPasswordFill className='absolute text-[#6759C8] w-[30px] h-[30px] top-1/2  transform  -translate-y-1/2 left-1'/>
                    <input type="text" 
                    placeholder='Confirm password'
                    onChange={(e)=>setCPass(e.target.value)}
                    className='pl-10 w-full  py-3 bg-transparent focus:ring-0 outline-0   text-left border-0   placeholder-[#15171a] shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg'/>

                    </div>
                    <div className={error ? "text-[red] mb-5" : "invisible mb-5"}>Passwords do not match!</div>
                    <button className=" mb-10 px-10 py-3 bg-[#6759C8] text-white rounded-full cursor-pointer hover:bg-[#5c4fb3]" onClick={onSignUp}>Sign up</button>
                    <div className="">Already have an account ? <span className='text-[#6759C8]'>
</span></div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default SignUp