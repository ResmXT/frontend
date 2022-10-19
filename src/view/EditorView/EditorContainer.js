import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BeatSpinner from '../../components/common/Spinner/BeatSpinner';
import EditorContent from '../../components/Editor/EditorContent';
import { onGetUser } from '../../redux/action/user';

const EditorContainer = () => {
  const getUserPending = useSelector(state => state.user.getUserPending);
  const postBasicInfoPendin = useSelector(state => state.user.postBasicInfoPendin);
  const postEducationPending = useSelector(state => state.user.postEducationPending);
  const postWorkPending = useSelector(state => state.user.postWorkPending);
  const postSkillsPending = useSelector(state => state.user.postSkillsPending);
  const postSocialPending = useSelector(state => state.user.postSocialPending);
  const postProjectPending = useSelector(state => state.user.postProjectPending);
  const postAchievementsPending = useSelector(state => state.user.postAchievementsPending);
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(onGetUser())
  }, []);
  return (
    <>
      <EditorContent />
      <BeatSpinner
            isLoading={
              getUserPending ||
              postBasicInfoPendin ||
              postEducationPending ||
              postWorkPending ||
              postSkillsPending||
              postSocialPending||
              postProjectPending||
              postAchievementsPending} />
    </>
  );
};

export default EditorContainer;
