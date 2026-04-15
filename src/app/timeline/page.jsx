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
      <div className="my-container py-20 ">
        <h1 className="text-3xl font-semibold mb-6">Timeline</h1>
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
          <p className="text-gray-500">No interactions yet.</p>
        ) : (
          <div>
            <div className="space-y-3 min-h-96">
              {filteredTimeline.map(item => (
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
