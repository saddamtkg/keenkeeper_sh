'use client';

import FilterTimeline from '@/components/timeLine/FilterTimeline';
import useFriends from '@/hooks/useFriends';
import Image from 'next/image';
import { useState } from 'react';

const TimeLinePage = () => {
  const { timeline } = useFriends();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('newest');

  const filteredTimeline = timeline
    .filter(item => filter === 'all' || item.type === filter)
    .filter(item =>
      item.friendName.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === 'newest'
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt)
    );

  return (
    <div className="flex-1 bg-base-300">
      <div className="my-container py-10 md:py-20 ">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
          Timeline
        </h1>
        <div>
          {timeline.length > 0 && (
            <FilterTimeline
              sort={sort}
              setSort={setSort}
              search={search}
              setSearch={setSearch}
              filter={filter}
              setFilter={setFilter}
            />
          )}
        </div>
        {filteredTimeline.length === 0 ? (
          <p className="text-sm xs:text-base text-gray-500">
            No interactions yet.
          </p>
        ) : (
          <div>
            <div className="space-y-3 min-h-96">
              {filteredTimeline.map(item => (
                <div
                  key={item.id}
                  className="flex flex-col xs:flex-row bg-base-100 items-start xs:items-center gap-3 xs:gap-4 p-3 xs:p-4 rounded-lg shadow-sm border border-[#e9e9e9]"
                >
                  {item.type === 'call' ? (
                    <Image
                      src="/assets/call.png"
                      alt="Call interaction icon"
                      width={20}
                      height={20}
                      className="w-8 h-8 xs:w-10 xs:h-10 shrink-0"
                    />
                  ) : item.type === 'text' ? (
                    <Image
                      src="/assets/text.png"
                      alt="Text message interaction icon"
                      width={20}
                      height={20}
                      className="w-8 h-8 xs:w-10 xs:h-10 shrink-0"
                    />
                  ) : item.type === 'video' ? (
                    <Image
                      src="/assets/video.png"
                      alt="Video call interaction icon"
                      width={20}
                      height={20}
                      className="w-8 h-8 xs:w-10 xs:h-10 shrink-0"
                    />
                  ) : null}
                  <div className="">
                    <p className="text-xs xs:text-sm">
                      <strong className="text-base xs:text-xl">
                        {item.type.charAt(0).toUpperCase() +
                          item.type.slice(1)}{' '}
                      </strong>
                      <span className="text-sm xs:text-lg">
                        with {item.friendName}
                      </span>
                    </p>
                    <p className="text-xs xs:text-sm text-gray-500">
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
