import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogout } from '../../../redux/action/user';

const ProfileDropDown = ({ onToggleDropdown }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirect = () => {
    onToggleDropdown();
    navigate('/');
  };
  const onLogout = () => {
    dispatch(userLogout(redirect));
  };
  return (
    <div className="w-52 bg-white hover:bg-slate-200 flex justify-center rounded-lg cursor-pointer">
      <div className="flex-col">
        <div className="py-3 cursor-pointer" onClick={onLogout}>
          Log out
        </div>
      </div>
    </div>
  );
};

export default ProfileDropDown;
