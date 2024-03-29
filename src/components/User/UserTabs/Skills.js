import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import PropTypes from 'prop-types'
import { postSkills } from '../../../redux/action/user';
import { useDispatch } from 'react-redux';

const Skills = ({ user, changeTab, changeBG }) => {
  const dispatch=useDispatch()
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState(user?.skills || []);
  const onChangeTab=()=>{
      changeTab('projects');
      changeBG('projects')
    }
  const removeSkills = index => {
    setSkills([
      ...skills.slice(0, index),
      ...skills.slice(index + 1, skills.length),
    ]);
  };
  const onSubmitSkills=()=>{
      dispatch(postSkills(skills,onChangeTab))
  }
  return (
    <div className="w-[75vw] h-[700px] px-24 rounded-lg my-[18px] pt-5  bg-[#15171a]">
      <div className=" text-[#6759C8] text-lg mb-10">Skills</div>
      <div className="w-full">
        <div className="w-full flex justify-between items-end">
          <div className="w-[70%]">
            <input
              type="text"
              name="full_name"
              onChange={e => setSkill(e.target.value)}
              placeholder="Enter skill name"
              className=" w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
            />
          </div>
          <div className="pr-20">
            <button
              type="button"
              onClick={() => setSkills([...skills, skill])}
              className="py-2 px-7 bg-[#6759C8] rounded-full text-white"
            >
              Add skills
            </button>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap pr-20">
          {skills &&
            skills.map((e, idx) => {
              return (
                <div
                  className="flex items-center w-fit  rounded-full px-5 py-2 bg-white mr-3 mb-3"
                  key={idx}
                >
                  <div className="mr-2">{e}</div>{' '}
                  <div
                    className="w-3 pt-1 cursor-pointer"
                    onClick={() => removeSkills(idx)}
                  >
                    <AiFillCloseCircle />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="mt-10 float-right mb-24 mr-20">
          <button className="py-2 px-7 bg-[#6759C8] rounded-full text-white" onClick={onSubmitSkills}>
            Save & next
          </button>
        </div>
      </div>
    </div>
  );
};


Skills.propTypes = {
  user: PropTypes.object,
  changeBG: PropTypes.func,
  changeTab: PropTypes.func,
};

export default Skills;
