import React, { useState } from 'react'


const Work = ({user,changeTab,changeBG}) => {
  const [company_name,setCompany]=useState(user?.work_experience[0]?.company_name)
  const [job_title,setTitle]=useState(user?.work_experience[0]?.job_title)
  const [state,setState]=useState(user?.work_experience[0]?.state)
  const [is_currently_working,setCurrent]=useState(user?.work_experience[0]?.is_currently_working)
  const [start_date,setStart]=useState(user?.work_experience[0]?.start_date)
  const [end_date,setEnd]=useState(user?.work_experience[0]?.end_date)
    // const onChangeTab=()=>{
    //     changeTab('skills');
    //     changeBG('skills')
    //   }
    // const onSubmitWork=()=>{
    //   onPostWorkExperience([{company_name,job_title,state,start_date,is_currently_working,end_date}],onChangeTab);
    // }
  return (
    <div className="w-[75vw] h-[700px] px-24 rounded-lg my-[18px] pt-5  bg-[#15171a]">
        <div className=" text-[#6759C8] text-lg mb-10">Work experience</div>
        <div className="w-full">
            <div className="w-full flex justify-between mt-10">
              <div className="w-[45%]">
                <div className="text-[#808080]">Company name</div>
                <input type="text" 
                defaultValue={company_name}
                name="company_name"
                onChange={(e)=>setCompany(e.target.value)}
                placeholder='Enter company name'
                className=' w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
              </div>
              <div className="w-[45%]">
                <div className="text-[#808080]">Job title</div>
                <input type="text" 
                defaultValue={job_title}
                name="job_title"
                onChange={(e)=>setTitle(e.target.value)}
                placeholder='Enter job title'
                className='w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
              </div>
            </div>
            <div className="w-full flex justify-between mt-10">
              <div className="w-[45%]">
                <div className="text-[#808080]">State</div>
                <input type="text" 
                defaultValue={state}
                name="state"
                onChange={(e)=>setState(e.target.value)}
                placeholder='Enter state'
                className=' w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
              </div>
              <div className="w-[45%]">
                <div className="text-[#808080]">Is currently working</div>
                <input type="text" 
                defaultValue={is_currently_working}
                onChange={(e)=>setCurrent(e.target.value)}
                placeholder='YES / NO'
                className='w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
              </div>
            </div>
            <div className="w-full flex justify-between mt-10">
              <div className="w-[45%]">
                <div className="text-[#808080]">Start date</div>
                <input type="text" 
                defaultValue={start_date}
                name="start_date"
                onChange={(e)=>setStart(e.target.value)}
                placeholder='Enter start date'
                className=' w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
              </div>
              <div className="w-[45%]">
                <div className="text-[#808080]">End date</div>
                <input type="text" 
                defaultValue="2024"
                name="end_date"
                onChange={(e)=>setEnd(e.target.value)}
                placeholder='Enter end date'
                className='w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
              </div>
            </div>
            <div className="mt-10 float-right mb-24">
              <button  className='py-2 px-7 bg-[#6759C8] rounded-full text-white'>Save & next</button>
            </div>
        </div>
    </div>
  )
}

export default Work