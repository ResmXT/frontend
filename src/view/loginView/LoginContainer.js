import React from 'react'
import { useSelector } from 'react-redux'
import BeatSpinner from '../../components/common/Spinner/BeatSpinner'
import Login from '../../components/Login/Login'

const LoginContainer = () => {
    const isLoginPending=useSelector(state=>state.user.isLoginPending)
  return (
    <>
        <Login/>
        <BeatSpinner isLoading={isLoginPending}/>
    </>
  )
}

export default LoginContainer