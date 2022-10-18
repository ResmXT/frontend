import React from 'react';
// import Achievements from './Achievements';
import BasicInfo from '../User/UserTabs/BasicInfo';
import Achievements from './UserTabs/Achievements';
import Education from './UserTabs/Education';
import Projects from './UserTabs/Projects';
import Skills from './UserTabs/Skills';
import Work from './UserTabs/Work';
// import Education from './Education';
// import Projects from './Projects';
// import Resume from './Resume';
// import Skills from './Skills';
import Social from './UserTabs/Social';
import Template from './UserTabs/Template';
import Resume from './UserTabs/Resume';
// import Template from './Template';
// import Work from './Work';

const Tab = ({ activeTab, user, changeTab, changeBG }) => {
  switch (activeTab) {
    case 'basic_info':
      return (
        <BasicInfo user={user} changeTab={changeTab} changeBG={changeBG} />
      );
    case 'education':
      return (
        <Education user={user} changeBG={changeBG} changeTab={changeTab} />
      );
    case 'work':
      return <Work user={user} changeBG={changeBG} changeTab={changeTab} />;
    case 'skills':
      return <Skills user={user} changeBG={changeBG} changeTab={changeTab} />;
    case 'projects':
      return <Projects user={user} changeBG={changeBG} changeTab={changeTab} />;
    case 'achievements':
      return (
        <Achievements user={user} changeBG={changeBG} changeTab={changeTab} />
      );
    case 'social':
      return <Social user={user} changeBG={changeBG} changeTab={changeTab} />;
    case 'template':
      return <Template user={user} changeBG={changeBG} changeTab={changeTab} />;
    case 'my_resume':
      return <Resume user={user} changeBG={changeBG} changeTab={changeTab} />;
    default:
      return <></>;
  }
};

export default Tab;
