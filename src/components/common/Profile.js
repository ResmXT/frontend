import React from 'react'

const Profile = ({letter}) => {
  return (
    <div>
        <div className="h-10 w-10 text-center leading-9 font-bold rounded-full border-2 border-[#6759C8] bg-[#6759C8] cursor-pointer text-white hover:bg-[#15171a]">
            {letter}
        </div>
    </div>
  )
}

export default Profile