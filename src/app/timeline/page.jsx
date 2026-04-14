'use client';

import useFriends from '@/hooks/useFriends';

const TimeLinePage = () => {
  const { timeline } = useFriends();

  return (
    <div className="my-container py-20">
      <h1 className="text-3xl font-semibold mb-6">Timeline</h1>

      {timeline.length === 0 ? (
        <p className="text-gray-500">No interactions yet.</p>
      ) : (
        <div className="space-y-3">
          {timeline.map(item => (
            <div key={item.id} className="p-4 rounded-lg shadow-sm border">
              <p>
                <strong>{item.friendName}</strong> - {item.type}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeLinePage;
