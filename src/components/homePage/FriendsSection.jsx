'use client';
import useFriends from '@/hooks/useFriends';
import FriendCard from './FriendCard';

const FriendsSection = () => {
  const { friends } = useFriends();

  return (
    <div className="my-container mt-10">
      <div className="flex justify-between gap-6">
        <div className="w-70 p-8 shadow-sm rounded-lg text-center space-y-2">
          <h3 className="text-3xl font-semibold c-text-color-2">{friends.length}</h3>
          <p className="text-[18px]">Total Friends</p>
        </div>
        <div className="w-70 p-8 shadow-sm rounded-lg text-center space-y-2">
          <h3 className="text-3xl font-semibold c-text-color-2">{friends.filter(friend => friend.status === 'on-track').length}</h3>
          <p className="text-[18px]">On Track</p>
        </div>
        <div className="w-70 p-8 shadow-sm rounded-lg text-center space-y-2">
          <h3 className="text-3xl font-semibold c-text-color-2">{friends.filter(friend => friend.status === 'almost due').length}</h3>
          <p className="text-[18px]">Need Attention</p>
        </div>
        <div className="w-70 p-8 shadow-sm rounded-lg text-center space-y-2">
          <h3 className="text-3xl font-semibold c-text-color-2">{friends.filter(friend => friend.status === 'overdue').length}</h3>
          <p className="text-[18px]">Overdue</p>
        </div>
      </div>
      <div className="divider my-12"></div>
      <div className="grid grid-cols-4 gap-6">
        {friends.map(friend => {
          return <FriendCard key={friend.id} friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default FriendsSection;
