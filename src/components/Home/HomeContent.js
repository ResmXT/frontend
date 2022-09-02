import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { onGetUser } from '../../redux/action/user';
import Navbar from '../common/Navbar'
import Home from './Home'
import Info from './Info';

const HomeContent = () => {
  const user=useSelector(state=>state.user.user)
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(onGetUser())
  }, []);
  return (
    <div className="min-h-screen w-screen bg-[#15171a] md:block hidden">
      <Navbar user={user}/>
      <Home/>
      <Info/>
    </div>
  )
}

export default HomeContent