'use client';

import useFriends from '@/hooks/useFriends';
import Image from 'next/image';

const TimeLinePage = () => {
  const { timeline } = useFriends();

  return (
    <div className="bg-base-300">
      <div className="my-container py-20 ">
        <h1 className="text-3xl font-semibold mb-6">Timeline</h1>

        {timeline.length === 0 ? (
          <p className="text-gray-500">No interactions yet.</p>
        ) : (
          <div>
            <div className="space-y-3">
              {timeline.map(item => (
                <div
                  key={item.id}
                  className="flex bg-base-100 items-center gap-4 p-4 rounded-lg shadow-sm border border-[#e9e9e9]"
                >
                  {item.type === 'call' ? (
                    <Image
                      src="/assets/call.png"
                      alt="call"
                      width={20}
                      height={20}
                      className="w-10 h-10"
                    />
                  ) : item.type === 'text' ? (
                    <Image
                      src="/assets/text.png"
                      alt="text"
                      width={20}
                      height={20}
                      className="w-10 h-10"
                    />
                  ) : item.type === 'video' ? (
                    <Image
                      src="/assets/video.png"
                      alt="video"
                      width={20}
                      height={20}
                      className="w-10 h-10"
                    />
                  ) : null}
                  <div className="">
                    <p>
                      <strong className="text-xl">
                        {item.type.charAt(0).toUpperCase() +
                          item.type.slice(1)}{' '}
                      </strong>
                      <span className="text-lg">with {item.friendName}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(item.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeLinePage;
