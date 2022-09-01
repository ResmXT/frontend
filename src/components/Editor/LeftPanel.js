import React, { useState } from 'react'
// import BasicInfo from '../BasicInfo';
import {BsFillPersonFill} from 'react-icons/bs'
import {MdSchool} from 'react-icons/md'
import {MdWork} from 'react-icons/md'
import {HiCode} from 'react-icons/hi'
import {MdOutlineAssignment} from 'react-icons/md'
import {GiAchievement} from 'react-icons/gi'
import {IoLinkSharp} from 'react-icons/io5'
// import {HiOutlineTemplate} from 'react-icons/hi'
import {TbNotes} from 'react-icons/tb'
import Tab from '../User/Tab'
// import Tab from '../Tab';

const LeftPanel = ({user}) => {
    const [activeTab,setActiveTab]=useState('basic_info');
    const onChangeTab=(tabname)=>{
      setActiveTab(tabname);
    }
    const activeTabBg=(tabName)=>{
      setActiveTab(tabName);
      const tab=document.getElementsByClassName('tab');
      for(let i=0;i<tab.length;i++){
        tab[i].className=tab[i].className.replace('bg-[#6759C8]','');
      }
      let item=document.getElementById(tabName);
      item.className+=" bg-[#6759C8]";
    }
  return (
    <div>
        <div className="w-[20%] h-screen fixed left-0 top-0 bg-[#15171a]  -z-10 pt-[100px] border-r-2 border-[#191724]">
            <div id="basic_info" className="w-[85%] m-auto py-3 text-left pl-8 rounded-md text-white cursor-pointer tab bg-[#6759C8]" onClick={()=>activeTabBg('basic_info')}><BsFillPersonFill className='inline-block mb-1 mr-4'/>Basic Info</div>
            <div id="education" className="w-[85%] m-auto py-3 text-left pl-8 rounded-md text-white cursor-pointer tab" onClick={()=>activeTabBg('education')}><MdSchool className='inline-block mb-1 mr-4'/>Education</div>
            <div id="work" className="w-[85%] m-auto py-3 text-left pl-8 rounded-md text-white cursor-pointer tab" onClick={()=>activeTabBg('work')}><MdWork className='inline-block mb-1 mr-4'/>Work experience</div>
            <div id="skills" className="w-[85%] m-auto py-3 text-left pl-8 rounded-md text-white cursor-pointer tab" onClick={()=>activeTabBg('skills')}><HiCode className='inline-block mb-1 mr-4'/>Skills</div>
            <div id="projects" className="w-[85%] m-auto py-3 text-left pl-8 rounded-md text-white cursor-pointer tab" onClick={()=>activeTabBg('projects')}><MdOutlineAssignment className='inline-block mb-1 mr-4'/>Projects</div>
            <div id="achievements" className="w-[85%] m-auto py-3 text-left pl-8 rounded-md text-white cursor-pointer tab" onClick={()=>activeTabBg('achievements')}><GiAchievement className='inline-block mb-1 mr-4'/>Achievements</div>
            <div id="social" className="w-[85%] m-auto py-3 text-left pl-8 rounded-md text-white cursor-pointer tab" onClick={()=>activeTabBg('social')}><IoLinkSharp className='inline-block mb-1 mr-4'/>Social links</div>
            {/* <div id="template" className="w-[85%] m-auto py-3 text-left pl-8 rounded-md text-white cursor-pointer tab" onClick={()=>activeTabBg('template')}><HiOutlineTemplate className='inline-block mb-1 mr-4'/>Choose template</div> */}
            <div id="my_resume" className="w-[85%] m-auto py-3 text-left pl-8 rounded-md text-white cursor-pointer tab" onClick={()=>activeTabBg('my_resume')}><TbNotes className='inline-block mb-1 mr-4'/>My resume</div>
        </div>
        <Tab activeTab={activeTab}  changeTab={onChangeTab} changeBG={activeTabBg}/>
    </div>
  )
}

export default LeftPanel