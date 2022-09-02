import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import EditorContent from '../components/Editor/EditorContent'
import Home from '../components/Home/Home'
import HomeContent from '../components/Home/HomeContent'
import EditorView from '../view/EditorView/EditorView'
import HomeView from '../view/HomeView/HomeView'
import LoginView from '../view/loginView/LoginView'
import SignUpContainer from '../view/SignUpView/SignUpContainer'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeView/>}/>
            <Route path='/login' element={<LoginView/>}/>
            <Route path='/signup' element={<SignUpContainer/>}/>
            <Route path='/editor' element={<EditorView/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router