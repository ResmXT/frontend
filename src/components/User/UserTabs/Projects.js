import React, { useState } from 'react'
// import { onPostProjects } from '../services/api';

const Projects = ({user,changeTab,changeBG}) => {
    const [project_title,setTitle]=useState(user?.projects[0]?.project_title);
    const [project_url,setUrl]=useState(user?.projects[0]?.project_url);
    const [project_description,setDescription]=useState(user?.projects[0]?.project_description);

    // const onChangeTab=()=>{
    //     changeTab('achievements');
    //     changeBG('achievements')
    //   }
    // const onSubmitProjects=()=>{
    //     onPostProjects([{project_title,project_url,project_description}],onChangeTab)
    // }
  return (
    <div>
    <div className="w-[80%] px-32 pt-[100px] absolute right-0 top-0 bg-[#15171a] min-h-screen -z-10">
        <div className=" text-[#6759C8] text-lg mb-10">Projects</div>
            <div className="w-full">
                <div className="w-full">
                    <div className="text-[#808080]">Project title</div>
                    <input type="text" 
                        name="title"
                        defaultValue={project_title}
                        onChange={(e)=>setTitle(e.target.value)}
                        placeholder='Enter project title'
                        className=' w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
                </div>
                <div className="w-full mt-10">
                    <div className="text-[#808080]">Project url</div>
                    <input type="text" 
                        name="url"
                        defaultValue={project_url}
                        onChange={(e)=>setUrl(e.target.value)}
                        placeholder='Enter project url'
                        className=' w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
                </div>
                <div className="w-full mt-10">
                    <div className="text-[#808080]">Project description</div>
                    <input type="text" 
                        name="institute name"
                        defaultValue={project_description}
                        onChange={(e)=>setDescription(e.target.value)}
                        placeholder='Enter project description'
                        className=' w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]'/>
                </div>
                <div className="mt-10 float-right mb-24">
                  <button  className='py-2 px-7 bg-[#6759C8] rounded-full text-white'>Save & next</button>
                </div>
            </div>
    </div>
</div>
  )
}

export default Projects