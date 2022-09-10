import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { onGetUser } from '../../redux/action/user';
import Navbar from '../common/Navbar'
import LeftPanel from './LeftPanel'

const EditorContent = () => {
  const user=useSelector(state=>state.user.user)
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(onGetUser())
  }, []);
  return (
    <div className='w-screen bg-black'>
        <Navbar user={user}/>
        <LeftPanel />
    </div>
  )
}

export default EditorContent