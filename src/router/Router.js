import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import EditorContent from '../components/Editor/EditorContent'
import Home from '../components/Home/Home'
import HomeContent from '../components/Home/HomeContent'
import Login from '../components/Login/Login'
import SignUp from '../components/Login/SignUp'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeContent/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/editor' element={<EditorContent/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router