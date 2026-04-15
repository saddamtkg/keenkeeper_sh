'use client';

import useFriends from '@/hooks/useFriends';
import { BiMessage } from 'react-icons/bi';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';

const StatsPage = () => {
  const { timeline } = useFriends();

  const callCount = timeline.filter(item => item.type === 'call').length;
  const textCount = timeline.filter(item => item.type === 'text').length;
  const videoCount = timeline.filter(item => item.type === 'video').length;

  const interactionData = [
    {
      name: 'Call',
      value: callCount,
      color: '#244d3f',
    },
    {
      name: 'Text',
      value: textCount,
      color: '#efad44',
    },
    {
      name: 'Video',
      value: videoCount,
      color: '#a78bfa',
    },
  ];

  return (
    <div className="flex-1 py-10 md:py-20">
      <div className="my-container">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-8">
          Friendship Analytics
        </h1>
        {/* Pie Chart Section */}

        {timeline.length === 0 ? (
          <div className="bg-base-100 border border-[#1a8862] rounded-2xl p-8 md:p-12 mb-8">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <BiMessage
                className="text-4xl xs:text-5xl md:text-6xl text-[#1a8862] mb-4"
                aria-hidden="true"
              />
              <h2 className="text-xl xs:text-2xl md:text-3xl font-semibold text-gray-700 mb-3">
                No Analytics Data Yet
              </h2>
              <p className="text-sm xs:text-base text-gray-500 mb-6 max-w-md">
                Start checking in with your friends to see your interaction
                analytics. Track calls, texts, and video chats!
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-base-100 border border-[#1a8862] rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-medium mb-6 text-left text-gray-700">
              By Interaction Type
            </h2>
            <div className="flex flex-col items-center outline-none">
              <ResponsiveContainer
                width="100%"
                height={350}
                style={{ outline: 'none' }}
              >
                <PieChart>
                  <Pie
                    data={interactionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {interactionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke="none"
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    formatter={value => (
                      <span className="text-xs font-medium">{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;
