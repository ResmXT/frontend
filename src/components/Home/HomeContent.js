import React from 'react'
import Navbar from '../common/Navbar'
import Home from './Home'

const HomeContent = () => {
  return (
    <div className="min-h-screen w-screen bg-[#15171a] md:block hidden">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default HomeContent