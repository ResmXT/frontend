import React from 'react';

const Profile = ({ letter }) => {
  return (
    <div>
      <div className="h-9 w-9 text-center leading-9 font-bold  rounded-full   bg-gray-500 cursor-pointer text-black hover:bg-[#d2e1f7]">
        {letter}
      </div>
    </div>
  );
};

export default Profile;
