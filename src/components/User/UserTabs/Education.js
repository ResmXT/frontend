import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onPostEducationInfo } from '../../../redux/action/user';

const Education = ({ user, changeTab, changeBG }) => {
  const [institute_name, setInstitute] = useState(
    user?.education?.[0]?.institute_name
  );
  const [state, setState] = useState(user?.education?.[0]?.state);
  const [field, setField] = useState(user?.education?.[0]?.field);
  const [degree, setDegree] = useState(user?.education?.[0]?.degree);
  const [cgpa, setCgpa] = useState(user?.education?.[0]?.cgpa);
  const [start_year, setsy] = useState(user?.education?.[0]?.start_year);
  const dispatch = useDispatch();
  const onChangeTab = () => {
    changeTab('work');
    changeBG('work');
  };
  const onSubmitEducation = () => {
    dispatch(
      onPostEducationInfo(
        [{ institute_name, state, field, degree, cgpa, start_year }],
        onChangeTab
      )
    );
  };
  return (
    <div className="w-[75vw] h-[700px] px-24 rounded-lg my-[18px] pt-5  bg-[#15171a]">
      <div className=" text-[#6759C8] text-lg mb-10">Education information</div>
      <div className="w-full">
        <div className="w-full">
          <div className="text-[#808080]">Institute name</div>
          <input
            type="text"
            name="institute name"
            defaultValue={user?.education?.[0]?.institute_name}
            onChange={e => setInstitute(e.target.value)}
            placeholder="Enter institue name"
            className=" w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
          />
        </div>
        <div className="w-full flex justify-between mt-10">
          <div className="w-[45%]">
            <div className="text-[#808080]">State</div>
            <input
              type="text"
              defaultValue={user?.education?.[0]?.state}
              name="state"
              onChange={e => setState(e.target.value)}
              placeholder="Enter state"
              className=" w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
            />
          </div>
          <div className="w-[45%]">
            <div className="text-[#808080]">Field</div>
            <input
              type="text"
              defaultValue={user?.education?.[0]?.field}
              name="field"
              onChange={e => setField(e.target.value)}
              placeholder="Enter field of Study"
              className="w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
            />
          </div>
        </div>
        <div className="w-full flex justify-between mt-10">
          <div className="w-[45%]">
            <div className="text-[#808080]">Degree</div>
            <input
              type="text"
              defaultValue={user?.education?.[0]?.degree}
              name="degree"
              onChange={e => setDegree(e.target.value)}
              placeholder="Enter degree"
              className=" w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
            />
          </div>
          <div className="w-[45%]">
            <div className="text-[#808080]">CGPA</div>
            <input
              type="text"
              defaultValue={user?.education?.[0]?.cgpa}
              name="cgpa"
              onChange={e => setCgpa(e.target.value)}
              placeholder="Enter your cgpa"
              className="w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
            />
          </div>
        </div>
        <div className="w-full flex justify-between mt-10">
          <div className="w-[45%]">
            <div className="text-[#808080]">Start Year</div>
            <input
              type="text"
              defaultValue={user?.education?.[0]?.start_year}
              name="start_year"
              onChange={e => setsy(e.target.value)}
              placeholder="Enter start year"
              className=" w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
            />
          </div>
          <div className="w-[45%]">
            <div className="text-[#808080]">End year</div>
            <input
              type="text"
              defaultValue="2024"
              name="end_year"
              placeholder="Enter end_year"
              className="w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
            />
          </div>
        </div>
        <div className="mt-10 float-right mb-24">
          <button
            className="py-2 px-7 bg-[#6759C8] rounded-full text-white"
            onClick={onSubmitEducation}
          >
            Save & next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
