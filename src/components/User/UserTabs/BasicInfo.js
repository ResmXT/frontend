import React, { useState } from 'react'

const BasicInfo = ({user,changeTab,changeBG}) => {
  const [full_name,setFullname]=useState(user?.basic_info?.full_name || '');
  const [email,setEmail]=useState(user?.email||'');
  const [mobile_number,setMobile]=useState(user?.basic_info?.mobile_number||'');
  const [title,setTitle]=useState(user?.basic_info?.title||'');
  const [state,setState]=useState(user?.basic_info?.state||'');
  const [city,setCity]=useState(user?.basic_info?.city||'');
  const [about,setAbout]=useState(user?.basic_info?.about||'');
//   const onChangeTab=()=>{
//     changeTab('education');
//     changeBG('education')
//   }
//  const onSubmitBasicInfo=()=>{
//   onPostBasicInfo({full_name,email,mobile_number,title,state,city,about},onChangeTab)
//  }
  return (
        <div className="w-[75vw] h-[700px] px-24 rounded-lg my-[18px] pt-5  bg-[#15171a]">
            <div className=" text-[#6759C8] text-lg mb-10">Basic information</div>
            <div className="w-full">
                <div className="w-full flex justify-between">
                  <div className="w-[45%]">
                    <div className="text-[#808080]">Full name</div>
                    <input type="text" 
                      name="full_name"
                      defaultValue={user?.basic_info?.full_name}
                      onChange={(e)=>setFullname(e.target.value)}
                      placeholder='Enter full name'
                      className=' w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
                  </div>
                  <div className="w-[45%]">
                    <div className="text-[#808080]">Mobile number</div>
                    <input type="text"
                    defaultValue={user?.basic_info?.mobile_number}
                    name="mobile_number"
                    onChange={(e)=>setMobile(e.target.value)} 
                    placeholder='Enter mobile number'
                    className='w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
                  </div>
                </div>
                <div className="w-full flex justify-between mt-10">
                  <div className="w-[45%]">
                    <div className="text-[#808080]">Email</div>
                    <input type="text" 
                    defaultValue={user?.email}
                    name="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder='Enter email'
                    className=' w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
                  </div>
                  <div className="w-[45%]">
                    <div className="text-[#808080]">Title</div>
                    <input type="text" 
                    defaultValue={user?.basic_info?.title}
                    name="title"
                    onChange={(e)=>setTitle(e.target.value)}
                    placeholder='Enter title'
                    className='w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
                  </div>
                </div>
                <div className="w-full flex justify-between mt-10">
                  <div className="w-[45%]">
                    <div className="text-[#808080]">State</div>
                    <input type="text" 
                    defaultValue={user?.basic_info?.state}
                    name="state"
                    onChange={(e)=>setState(e.target.value)}
                    placeholder='Enter state'
                    className=' w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
                  </div>
                  <div className="w-[45%]">
                    <div className="text-[#808080]">City</div>
                    <input type="text" 
                    defaultValue={user?.basic_info?.city}
                    name="city"
                    onChange={(e)=>setCity(e.target.value)}
                    placeholder='Enter city'
                    className='w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
                  </div>
                </div>
                <div className="w-[100%] mt-10">
                    <div className="text-[#808080]">About</div>
                    <textarea 
                    name="about"
                    defaultValue={user?.basic_info?.about}
                    onChange={(e)=>setAbout(e.target.value)}
                    placeholder='About you'
                    className='w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'></textarea>
                  </div>
                <div className="mt-10 float-right mb-24">
                  <button className='py-2 px-7  bg-gradient-to-r from-[#6759C8]  to-[#fc00ff] shadow-lg shadow-[#6859c852] hover:shadow-none rounded-full text-white'>Save & next</button>
                </div>
            </div>
        </div>
  )
}

export default BasicInfo