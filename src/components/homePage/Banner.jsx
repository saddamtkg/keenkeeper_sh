import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="my-container flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-center c-text-color-1 mb-4">
        Friends to keep close in your life
      </h1>
      <p className="text-center text-[16px] body-text-color w-162.5 m-auto mb-7">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn but-bg-green text-base-100">
        <FaPlus />
        Add Friend
      </button>
    </div>
  );
};

export default Banner;
