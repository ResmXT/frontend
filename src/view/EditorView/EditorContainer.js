import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BeatSpinner from '../../components/common/Spinner/BeatSpinner';
import EditorContent from '../../components/Editor/EditorContent';
import { onGetUser } from '../../redux/action/user';

const EditorContainer = () => {
  const getUserPending = useSelector(state => state.user.getUserPending);
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(onGetUser())
  }, []);
  return (
    <>
      <EditorContent />
      <BeatSpinner isLoading={getUserPending} />
    </>
  );
};

export default EditorContainer;
