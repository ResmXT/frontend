import React, { useState } from 'react'
import {BsGithub,BsLinkedin} from 'react-icons/bs'
// import { onPostSkills, onPostSocial } from '../services/api';


const Social = ({user,changeTab,changeBG}) => {
    // const onChangeTab=()=>{
    //     changeTab('my_resume');
    //     changeBG('my_resume')
    //   }
    const [linked_url,setLinkedIn]=useState(user?.social_links?.linked_url)
    const [github_url,setGithub]=useState(user?.social_links?.github_url)
    // const onSubmitSocial=()=>{
    //   onPostSocial({linked_url,github_url},onChangeTab)
    // }
  return (
    <div>
    <div className="w-[80%] px-32 pt-[100px] absolute right-0 top-0 bg-[#15171a] min-h-screen -z-10">
        <div className=" text-[#6759C8] text-lg mb-10">Social links</div>
           <div className="w-full flex mb-10">
            <div className="flex w-32 px-7 py-2 bg-[#6759C8] rounded-full items-center justify-center mr-20">
                <div className='mx-1'><BsGithub/></div>
                <div className="text-white mx-2">Github</div>
            </div>
            <input type="text" 
                    placeholder='Github url'
                    defaultValue={github_url}
                    onChange={(e)=>setGithub(e.target.value)}
                    className='w-[50%] py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
           </div>
           <div className="w-full flex">
            <div className="flex w-32 px-7 py-2 bg-[#6759C8] rounded-full items-center justify-center mr-20">
                <div className='mx-1'><BsLinkedin/></div>
                <div className="text-white mx-2">LinkedIN</div>
            </div>
            <input type="text" 
                    placeholder='LinkedIN url'
                    defaultValue={linked_url}
                    onChange={(e)=>setLinkedIn(e.target.value)}
                    className='w-[50%] py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
           </div>
           <div className="mt-20 float-right mb-24 ">
                  <button  className='py-2 px-7 bg-[#6759C8] rounded-full text-white'>Save & next</button>
                </div>
    </div>
</div>
  )
}

export default Social