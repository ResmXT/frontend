import React, { useState } from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
// import { onPostSkills } from '../services/api';

const Skills = ({user,changeTab,changeBG}) => {
    const [skill,setSkill]=useState("");
    const [skills,setSkills]=useState(user?.skills||[])
    // const onChangeTab=()=>{
    //     changeTab('projects');
    //     changeBG('projects')
    //   }
    const removeSkills = (index) => {
        setSkills([
          ...skills.slice(0, index),
          ...skills.slice(index + 1, skills.length)
        ]);
      }
    // const onSubmitSkills=()=>{
    //     onPostSkills(skills,onChangeTab);
    // }
  return (
    <div>
        <div className="w-[80%] px-32 pt-[100px] absolute right-0 top-0 bg-[#15171a] min-h-screen -z-10">
            <div className=" text-[#6759C8] text-lg mb-10">Skills</div>
            <div className="w-full">
                <div className="w-full flex justify-between items-end">
                <div className="w-[70%]">
                    <input type="text" 
                    name="full_name"
                    onChange={(e)=>setSkill(e.target.value)}
                    placeholder='Enter skill name'
                    className=' w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
                </div>
                <div className="pr-20">
                    <button type='button' onClick={()=>setSkills([...skills,skill])} className='py-2 px-7 bg-[#6759C8] rounded-full text-white'>Add skills</button>
                </div>
                </div>
                <div className="mt-10 flex flex-wrap pr-20">
                    {skills&& skills.map((e,idx)=>{
                        return (
                        <div className="flex items-center w-fit  rounded-full px-5 py-2 bg-[#6759C8] mr-3" key={idx}>
                            <div className="mr-2">{e}</div> <div className='w-3 pt-1 cursor-pointer' onClick={()=>removeSkills(idx)}><AiFillCloseCircle/></div>
                        </div>
                        )
                    })}
                </div>
                <div className="mt-10 float-right mb-24 mr-20">
                    <button  className='py-2 px-7 bg-[#6759C8] rounded-full text-white'>Save & next</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills