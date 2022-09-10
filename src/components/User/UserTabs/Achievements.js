import React, { useState } from 'react'


const Achievements = ({user,changeTab,changeBG}) => {
  const [achievements,setAchievements]=useState(user?.achievements);
  
//     const onChangeTab=()=>{
//         changeTab('social');
//         changeBG('social')
//       }
//   const onSubmitAchivements=()=>{
//     onPostAchivements({achievements},onChangeTab);
//   }
  return (
    <div className="w-[75vw] h-[700px] px-24 rounded-lg my-[18px] pt-5  bg-[#15171a]">
        <div className=" text-[#6759C8] text-lg mb-10">Achievements</div>
            <div className="w-full">
                <div className="w-full">
                    <div className="text-[#808080]">Your achievements</div>
                    <textarea type="text" 
                        name="institute name"
                        defaultValue={achievements}
                        onChange={(e)=>setAchievements(e.target.value)}
                        placeholder='Enter achievements'
                        className=' w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'></textarea>
                </div>
                
                <div className="mt-10 float-right mb-24">
                  <button  className='py-2 px-7 bg-[#6759C8] rounded-full text-white'>Save & next</button>
                </div>
            </div>
    </div>
  )
}

export default Achievements