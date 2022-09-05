import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import PropTypes from 'prop-types';

const BeatSpinner = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="z-[100] fixed translate-x-[-50%]  top-0 left-2/4 m-auto backdrop-blur-sm bg-black/30 h-[100vh] w-[100vw] rounded flex justify-center items-center">
          <div className="flex">
            <BeatLoader color="#9B39DB" loading={isLoading} size={20} />
          </div>
        </div>
      )}
    </>
  );
};

BeatSpinner.propTypes = {
  isLoading: PropTypes.bool,
};
export default BeatSpinner;
