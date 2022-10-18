import React from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { postProjects } from '../../../redux/action/user';

const Projects = ({ user, changeTab, changeBG }) => {
  const dispatch=useDispatch()
  const onChangeTab=()=>{
    changeTab('achievements');
    changeBG('achievements')
  }
  const formik=useFormik({
    initialValues:{
      project_title:user?.projects?.[0]?.project_title ||'',
      project_url:user?.projects?.[0]?.project_url || '',
      project_description:user?.projects?.[0]?.project_description
    },
    onSubmit:({project_title,project_url,project_description})=>{
      dispatch(postProjects([{project_title,project_url,project_description}],onChangeTab))
    }
  })
  return (
    <div className="w-[75vw] h-[700px] px-24 rounded-lg my-[18px] pt-5  bg-[#15171a]">
      <form onSubmit={formik.handleSubmit}>
      <div className=" text-[#6759C8] text-lg mb-10">Projects</div>
      <div className="w-full">
        <div className="w-full">
          <div className="text-[#808080]">Project title</div>
          <input
            type="text"
            name="project_title"
            defaultValue={formik.values.project_title}
            onChange={formik.handleChange}
            placeholder="Enter project title"
            className=" w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
          />
        </div>
        <div className="w-full mt-10">
          <div className="text-[#808080]">Project url</div>
          <input
            type="text"
            name="project_url"
            defaultValue={formik.values.project_url}
            onChange={formik.handleChange}
            placeholder="Enter project url"
            className=" w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
          />
        </div>
        <div className="w-full mt-10">
          <div className="text-[#808080]">Project description</div>
          <input
            type="text"
            name="project_description"
            defaultValue={formik.values.project_description}
            onChange={formik.handleChange}
            placeholder="Enter project description"
            className=" w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
          />
        </div>
        <div className="mt-10 float-right mb-24">
          <button className="py-2 px-7 bg-[#6759C8] rounded-full text-white">
            Save & next
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};



Projects.propTypes = {
  user: PropTypes.object,
  changeBG: PropTypes.func,
  changeTab: PropTypes.func,
};

export default Projects;
