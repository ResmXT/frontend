import React from 'react'
import Navbar from '../common/Navbar'
import LeftPanel from './LeftPanel'

const EditorContent = () => {
  return (
    <div className='w-screen bg-[#15171a]'>
        <Navbar />
        <LeftPanel />
    </div>
  )
}

export default EditorContent