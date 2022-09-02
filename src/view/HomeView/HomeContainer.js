import React from 'react'
import { useSelector } from 'react-redux'
import BeatSpinner from '../../components/common/Spinner/BeatSpinner'
import HomeContent from '../../components/Home/HomeContent'

const HomeContainer = () => {
    const getUserPending=useSelector(state=>state.user.getUserPending);
  return (
    <>
        <HomeContent/>
        <BeatSpinner isLoading={getUserPending} />
    </>
  )
}

export default HomeContainer