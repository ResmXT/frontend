import React from 'react';
import { useSelector } from 'react-redux';
import BeatSpinner from '../../components/common/Spinner/BeatSpinner';
import SignUp from '../../components/Login/SignUp';

const SignUpContainer = () => {
  const isRegisterPending = useSelector(state => state.user.isRegisterPending);
  return (
    <>
      <SignUp />
      <BeatSpinner isLoading={isRegisterPending} />
    </>
  );
};

export default SignUpContainer;
