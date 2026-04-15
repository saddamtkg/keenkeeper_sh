import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="my-container flex flex-col justify-center items-center">
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center c-text-color-1 mb-4">
        Friends to keep close in your life
      </h1>
      <p className="text-center text-sm xs:text-base sm:text-[16px] body-text-color w-full xs:w-162.5 m-auto mb-7 px-4 xs:px-0">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button
        className="btn but-bg-green text-base-100"
        aria-label="Add a new friend"
      >
        <FaPlus aria-hidden="true" />
        Add Friend
      </button>
    </div>
  );
};

export default Banner;
