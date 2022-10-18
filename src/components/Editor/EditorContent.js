import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar';
import LeftPanel from './LeftPanel';

const EditorContent = () => {
  const user = useSelector(state => state.user.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, []);
  return (
    <div className="w-screen bg-black">
      <Navbar user={user} />
      <LeftPanel user={user} />
    </div>
  );
};

export default EditorContent;
