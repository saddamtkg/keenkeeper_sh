'use client';

import { IoVideocamOutline } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineSms } from 'react-icons/md';

const QuickCheckIn = ({ friendName, onCheckIn }) => {
  return (
    <div>
      {friendName ? (
        <h3 className="text-base xs:text-lg sm:text-xl font-medium c-text-color-2 mb-4">
          Check in with <strong>{friendName}</strong>
        </h3>
      ) : null}
      <div className="flex flex-col xs:flex-col sm:flex-row gap-3 xs:gap-4 justify-between items-center">
        <button
          onClick={() => onCheckIn?.('call')}
          className="btn w-full xs:w-full sm:w-48 h-20 xs:h-24 flex items-center justify-center flex-col border border-[#e9e9e9] rounded-lg"
        >
          <LuPhoneCall className="text-2xl xs:text-3xl" />
          <span className="text-base xs:text-lg">Call</span>
        </button>
        <button
          onClick={() => onCheckIn?.('text')}
          className="btn w-full xs:w-full sm:w-48 h-20 xs:h-24 flex items-center justify-center flex-col border border-[#e9e9e9] rounded-lg"
        >
          <MdOutlineSms className="text-2xl xs:text-3xl" />
          <span className="text-base xs:text-lg">Text</span>
        </button>
        <button
          onClick={() => onCheckIn?.('video')}
          className="btn w-full xs:w-full sm:w-48 h-20 xs:h-24 flex items-center justify-center flex-col border border-[#e9e9e9] rounded-lg"
        >
          <IoVideocamOutline className="text-2xl xs:text-3xl" />
          <span className="text-base xs:text-lg">Video</span>
        </button>
      </div>
    </div>
  );
};

export default QuickCheckIn;
