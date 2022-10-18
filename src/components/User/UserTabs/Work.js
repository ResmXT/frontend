import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types'
import { onPostWorkInfo } from '../../../redux/action/user';

const Work = ({ user, changeTab, changeBG }) => {
  const dispatch = useDispatch();
  const onChangeTab = () => {
    changeTab('skills');
    changeBG('skills');
  };
  const formik=useFormik({
    initialValues:{
      company_name:user?.work_experience?.[0]?.company_name||"",
      job_title:user?.work_experience?.[0]?.job_title||"",
      state:user?.work_experience?.[0]?.state ||"",
      is_currently_working:user?.work_experience?.[0]?.is_currently_working||"",
      start_date:user?.work_experience?.[0]?.start_date||"",
      end_date:user?.work_experience?.[0]?.start_date||"",
    },
    onSubmit:({company_name, job_title, state})=>{
      dispatch(onPostWorkInfo([{ company_name, job_title, state }], onChangeTab));
    }
  })
  return (
    <div className="w-[75vw] h-[700px] px-24 rounded-lg my-[18px] pt-5  bg-[#15171a]">
      <form onSubmit={formik.handleSubmit}>
      <div className=" text-[#6759C8] text-lg mb-10">Work experience</div>
      <div className="w-full">
        <div className="w-full flex justify-between mt-10">
          <div className="w-[45%]">
            <div className="text-[#808080]">Company name</div>
            <input
              type="text"
              name="company_name"
              defaultValue={formik.values.company_name}
              onChange={formik.handleChange}
              placeholder="Enter company name"
              className=" w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
            />
          </div>
          <div className="w-[45%]">
            <div className="text-[#808080]">Job title</div>
            <input
              type="text"
              name="job_title"
              defaultValue={formik.values.job_title}
              onChange={formik.handleChange}
              placeholder="Enter job title"
              className="w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
            />
          </div>
        </div>
        <div className="w-full flex justify-between mt-10">
          <div className="w-[45%]">
            <div className="text-[#808080]">State</div>
            <input
              type="text"
              name="state"
              defaultValue={formik.values.state}
              onChange={formik.handleChange}
              placeholder="Enter state"
              className=" w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
            />
          </div>
          <div className="w-[45%]">
            <div className="text-[#808080]">Is currently working</div>
            <input
              type="text"
              defaultValue={formik.values.is_currently_working}
              onChange={formik.handleChange}
              placeholder="YES / NO"
              className="w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
            />
          </div>
        </div>
        <div className="w-full flex justify-between mt-10">
          <div className="w-[45%]">
            <div className="text-[#808080]">Start date</div>
            <input
              type="text"
              name="start_date"
              defaultValue={formik.values.start_date}
              onChange={formik.handleChange}
              placeholder="Enter start date"
              className=" w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
            />
          </div>
          <div className="w-[45%]">
            <div className="text-[#808080]">End date</div>
            <input
              type="text"
              defaultValue="2024"
              name="end_date"
              onChange={formik.handleChange}
              placeholder="Enter end date"
              className="w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
            />
          </div>
        </div>
        <div className="mt-10 float-right mb-24">
          <button
            className="py-2 px-7 bg-[#6759C8] rounded-full text-white"
          >
            Save & next
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};


Work.propTypes={
  user: PropTypes.object,
  changeBG: PropTypes.func,
  changeTab: PropTypes.func,
}
export default Work;
