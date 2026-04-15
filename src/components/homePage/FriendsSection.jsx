'use client';
import useFriends from '@/hooks/useFriends';
import FriendCard from './FriendCard';

const FriendsSection = () => {
  const { friends } = useFriends();

  return (
    <div className="my-container mt-10">
      <div className="flex flex-col xs:flex-col sm:flex-row gap-4 sm:gap-6">
        <div
          className="flex-1 xs:flex-1 p-6 xs:p-8 shadow-sm rounded-lg text-center space-y-2"
          aria-label={`Total friends: ${friends.length}`}
        >
          <h3 className="text-2xl xs:text-3xl font-semibold c-text-color-2">
            {friends.length}
          </h3>
          <p className="text-sm xs:text-[18px]">Total Friends</p>
        </div>
        <div
          className="flex-1 xs:flex-1 p-6 xs:p-8 shadow-sm rounded-lg text-center space-y-2"
          aria-label={`Friends on track: ${friends.filter(friend => friend.status === 'on-track').length}`}
        >
          <h3 className="text-2xl xs:text-3xl font-semibold c-text-color-2">
            {friends.filter(friend => friend.status === 'on-track').length}
          </h3>
          <p className="text-sm xs:text-[18px]">On Track</p>
        </div>
        <div
          className="flex-1 xs:flex-1 p-6 xs:p-8 shadow-sm rounded-lg text-center space-y-2"
          aria-label={`Friends needing attention: ${friends.filter(friend => friend.status === 'almost due').length}`}
        >
          <h3 className="text-2xl xs:text-3xl font-semibold c-text-color-2">
            {friends.filter(friend => friend.status === 'almost due').length}
          </h3>
          <p className="text-sm xs:text-[18px]">Need Attention</p>
        </div>
        <div
          className="flex-1 xs:flex-1 p-6 xs:p-8 shadow-sm rounded-lg text-center space-y-2"
          aria-label={`Overdue friends: ${friends.filter(friend => friend.status === 'overdue').length}`}
        >
          <h3 className="text-2xl xs:text-3xl font-semibold c-text-color-2">
            {friends.filter(friend => friend.status === 'overdue').length}
          </h3>
          <p className="text-sm xs:text-[18px]">Overdue</p>
        </div>
      </div>
      <div className="divider my-8 xs:my-12"></div>
      <div
        className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xs:gap-6"
        role="list"
      >
        {friends.map(friend => {
          return (
            <div key={friend.id} role="listitem">
              <FriendCard friend={friend} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendsSection;
