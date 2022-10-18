import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { onPostBasicInfo } from '../../../redux/action/user';

const BasicInfo = ({ user, changeTab, changeBG }) => {
  const dispatch = useDispatch();
  const onChangeTab = () => {
    changeTab('education');
    changeBG('education');
  };
  const formik = useFormik({
    initialValues: {
      full_name: user?.basic_info?.full_name || '',
      email: user?.email || '',
      mobile_number: user?.basic_info?.mobile_number || '',
      title: user?.basic_info?.title || '',
      state: user?.basic_info?.state || '',
      city: user?.basic_info?.city || '',
      about: user?.basic_info?.about || '',
    },
    onSubmit: val => {
      dispatch(
        onPostBasicInfo(
          {
            full_name: val.full_name,
            email: val.email,
            mobile_number: val.mobile_number,
            title: val.title,
            state: val.state,
            city: val.city,
            about: val.about,
          },
          onChangeTab
        )
      );
    },
  });

  return (
    <div className="lg:w-[75vw] md:w-full w-[85vh]  lg:px-24 rounded-lg lg:my-[18px]  my-[8px] pt-5  bg-[#15171a]">
      <div className=" text-[#6759C8] text-lg mb-10">Basic information</div>
      <div className="w-full">
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full flex justify-between">
            <div className="w-[45%]">
              <div className="text-[#808080]">Full name</div>
              <input
                type="text"
                name="full_name"
                required
                defaultValue={formik.values.full_name}
                onChange={formik.handleChange}
                placeholder="Enter full name"
                className=" w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
              />
            </div>
            <div className="w-[45%]">
              <div className="text-[#808080]">Mobile number</div>
              <input
                type="text"
                defaultValue={formik.values.mobile_number}
                name="mobile_number"
                onChange={formik.handleChange}
                placeholder="Enter mobile number"
                className="w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
              />
            </div>
          </div>
          <div className="w-full flex justify-between mt-10">
            <div className="w-[45%]">
              <div className="text-[#808080]">Email</div>
              <input
                type="text"
                defaultValue={user?.email}
                name="email"
                onChange={formik.handleChange}
                placeholder="Enter email"
                className=" w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
              />
            </div>
            <div className="w-[45%]">
              <div className="text-[#808080]">Title</div>
              <input
                type="text"
                required
                defaultValue={formik.values.title}
                name="title"
                onChange={formik.handleChange}
                placeholder="Enter title"
                className="w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
              />
            </div>
          </div>
          <div className="w-full flex justify-between mt-10">
            <div className="w-[45%]">
              <div className="text-[#808080]">State</div>
              <input
                type="text"
                required
                defaultValue={formik.values.state}
                name="state"
                onChange={formik.handleChange}
                placeholder="Enter state"
                className=" w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
              />
            </div>
            <div className="w-[45%]">
              <div className="text-[#808080]">City</div>
              <input
                type="text"
                required
                defaultValue={formik.values.city}
                name="city"
                onChange={formik.handleChange}
                placeholder="Enter city"
                className="w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
              />
            </div>
          </div>
          <div className="w-[100%] mt-10">
            <div className="text-[#808080]">About</div>
            <textarea
              name="about"
              required
              defaultValue={formik.values.about}
              onChange={formik.handleChange}
              placeholder="About you"
              className="w-full py-3 caret-[#6759C8] text-white bg-transparent focus:ring-0 outline-0 placeholder-[#9f9f9f] border-b-2 border-[#6759C8]"
            ></textarea>
          </div>
          <div className="mt-10 float-right mb-24">
            <button
              type="submit"
              className="py-2 px-7  bg-gradient-to-r from-[#6759C8]  to-[#fc00ff] shadow-lg shadow-[#6859c852] hover:shadow-none rounded-full text-white"
            >
              Save & next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

BasicInfo.propTypes = {
  user: PropTypes.object,
  changeBG: PropTypes.func,
  changeTab: PropTypes.func,
};

export default BasicInfo;
