'use client';

import { IoVideocamOutline } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineSms } from 'react-icons/md';

const QuickCheckIn = ({ friendName, onCheckIn }) => {
  return (
    <div>
      {friendName ? (
        <h3 className="text-xl font-medium c-text-color-2 mb-4">
          Check in with <strong>{friendName}</strong>
        </h3>
      ) : null}
      <div className="flex gap-4 justify-between items-center">
        <button
          onClick={() => onCheckIn?.('call')}
          className="btn w-55 h-24 flex items-center justify-center flex-col border border-[#e9e9e9] rounded-lg"
        >
          <LuPhoneCall className="text-3xl" />
          <span className="text-lg">Call</span>
        </button>
        <button
          onClick={() => onCheckIn?.('text')}
          className="btn w-55 h-24 flex items-center justify-center flex-col border border-[#e9e9e9] rounded-lg"
        >
          <MdOutlineSms className="text-3xl" />
          <span className="text-lg">Text</span>
        </button>
        <button
          onClick={() => onCheckIn?.('video')}
          className="btn w-55 h-24 flex items-center justify-center flex-col border border-[#e9e9e9] rounded-lg"
        >
          <IoVideocamOutline className="text-3xl" />
          <span className="text-lg">Video</span>
        </button>
      </div>
    </div>
  );
};

export default QuickCheckIn;
