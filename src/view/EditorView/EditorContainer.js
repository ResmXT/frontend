import React from 'react'
import { useSelector } from 'react-redux'
import BeatSpinner from '../../components/common/Spinner/BeatSpinner'
import EditorContent from '../../components/Editor/EditorContent'

const EditorContainer = () => {
    const getUserPending=useSelector(state=>state.user.getUserPending)
  return (
    <>
        <EditorContent/>
        <BeatSpinner isLoading={getUserPending}/>
    
    </>
  )
}

export default EditorContainer