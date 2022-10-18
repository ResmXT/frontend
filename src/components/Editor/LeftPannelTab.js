import React from 'react';

const LeftPannelTab = ({ id, Icon, title, activeTabBgFunc }) => {
  return (
    <div
      id={id}
      className="lg:w-[85%] w-fit  mx-auto lg:py-3 py-1 lg:px-0 px-2 lg:text-left text-center lg:pl-8 pl-2  lg:rounded-md rounded-full text-white cursor-pointer tab mb-2"
      onClick={() => activeTabBgFunc(id)}
    >
      <Icon className="inline-block mb-1 lg:mr-4 mr-0 " />
      <span className="lg:inline-block hidden">{title}</span>
    </div>
  );
};

export default LeftPannelTab;
