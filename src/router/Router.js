import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TemplatesContent from '../components/Templates/TemplatesContent';
import EditorView from '../view/EditorView/EditorView';
import HomeView from '../view/HomeView/HomeView';
import LoginView from '../view/loginView/LoginView';
import SignUpContainer from '../view/SignUpView/SignUpContainer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<SignUpContainer />} />
        <Route path="/editor" element={<EditorView />} />
        <Route path="/templates" element={<TemplatesContent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
