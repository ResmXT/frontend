import React, { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import Tab from '../User/Tab';
import { leftPannelData } from '../../data/LeftPannelData';
import LeftPannelTab from './LeftPannelTab';

const LeftPanel = ({ user }) => {
  const [activeTab, setActiveTab] = useState('basic_info');
  const onChangeTab = tabname => {
    setActiveTab(tabname);
  };
  const activeTabBg = tabName => {
    setActiveTab(tabName);
    const tab = document.getElementsByClassName('tab');
    for (let i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace('bg-slate-200', '');
      tab[i].className = tab[i].className.replace('text-black', '');
    }
    let item = document.getElementById(tabName);
    item.className += ' bg-slate-200 ';
    item.className += ' text-black ';
  };
  return (
    <div className="flex justify-between container mx-auto lg:gap-[18px] gap-[8px] lg:px-[18px] px-[8px]">
      <div className="rounded-lg lg:w-[25vw] md:w-[5rem]  lg:h-[700px] h-[90vh] pt-5 bg-[#15171a]  lg:my-[18px] my-[8px]  border-r-2 border-[#191724] flex flex-col px-3 lg:px-0">
        <div
          id="basic_info"
          className="lg:w-[85%] w-fit  mx-auto lg:py-3 py-1 lg:px-0 px-2 lg:text-left text-center lg:pl-8 pl-2  lg:rounded-md rounded-full text-white text-black cursor-pointer tab bg-slate-200 mb-2"
          onClick={() => activeTabBg('basic_info')}
        >
          <BsFillPersonFill className="inline-block mb-1 lg:mr-4 mr-0 " />
          <span className="lg:inline-block hidden">Basic Info</span>
        </div>
        {leftPannelData &&
          leftPannelData.map((data, i) => (
            <LeftPannelTab
              id={data.id}
              title={data.title}
              Icon={data.icon}
              activeTabBgFunc={activeTabBg}
              key={i}
            />
          ))}
      </div>
      <Tab
        user={user}
        activeTab={activeTab}
        changeTab={onChangeTab}
        changeBG={activeTabBg}
      />
    </div>
  );
};

export default LeftPanel;
