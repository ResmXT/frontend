import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { onUserRegisterAction } from '../../redux/action/user';

const SignUp = () => {
  const [error, showError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/');
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    onSubmit: ({ email, username, password }) => {
      dispatch(onUserRegisterAction({ email, username, password }, redirect));
    },
  });

  return (
      <div className="h-screen w-full bg-[#15171a]">
        <div className="h-full flex justify-center items-center ">
          <form onSubmit={formik.handleSubmit} className='lg:w-[30%] md:w-[50%] w-[90%] '>
            <div className="backdrop-blur-sm bg-white rounded-lg py-10">
              <div className="h-full flex flex-col items-center justify-center">
                <div className="text-[23px] mb-5 font-bold text-[#6759C8]">
                  Sign up
                </div>
                <div className="w-[80%] mb-5 relative">
                  <MdEmail className="absolute text-[#6759C8] w-[30px] h-[30px] top-1/2  transform  -translate-y-1/2 left-1" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={formik.handleChange}
                    className=" pl-10 w-full  py-3 bg-transparent focus:ring-0 outline-0   text-left border-0   placeholder-[#15171a] shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg"
                  />
                </div>
                <div className="w-[80%] mb-5 relative">
                  <BsFillPersonFill className="absolute text-[#6759C8] w-[30px] h-[30px] top-1/2  transform  -translate-y-1/2 left-1" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    onChange={formik.handleChange}
                    className=" pl-10 w-full  py-3 bg-transparent focus:ring-0 outline-0   text-left border-0   placeholder-[#15171a] shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg"
                  />
                </div>
                <div className="w-[80%] relative mb-5">
                  <RiLockPasswordFill className="absolute text-[#6759C8] w-[30px] h-[30px] top-1/2  transform  -translate-y-1/2 left-1" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    onChange={formik.handleChange}
                    className="pl-10 w-full  py-3 bg-transparent focus:ring-0 outline-0   text-left border-0   placeholder-[#15171a] shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg"
                  />
                </div>
                <div className="w-[80%] relative ">
                  <RiLockPasswordFill className="absolute text-[#6759C8] w-[30px] h-[30px] top-1/2  transform  -translate-y-1/2 left-1" />
                  <input
                    type="password"
                    name="cpassword"
                    placeholder="Confirm password"
                    onChange={formik.handleChange}
                    className="pl-10 w-full  py-3 bg-transparent focus:ring-0 outline-0   text-left border-0   placeholder-[#15171a] shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg"
                  />
                </div>
                <div className={error ? 'text-[red] mb-5' : 'invisible mb-5'}>
                  Passwords do not match!
                </div>
                <button
                  className=" mb-10 px-10 py-3 bg-[#6759C8] text-white rounded-full cursor-pointer hover:bg-[#5c4fb3]"
                >
                  Sign up
                </button>
                <div className="">
                  Already have an account ?{' '}
                  <span className="text-[#6759C8]" onClick={()=>navigate("/login")}>Login</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
};

export default SignUp;
