import FriendCard from './FriendCard';
import friends from '@/data/friends.json';

const FriendsSection = () => {
  console.log(friends);

  return (
    <div className="my-container mt-10">
      <div className="flex justify-between gap-6">
        <div className="w-70 p-8 shadow-sm rounded-lg text-center space-y-2">
          <h3 className="text-3xl font-semibold c-text-color-2">10</h3>
          <p className="text-[18px]">Total Friends</p>
        </div>
        <div className="w-70 p-8 shadow-sm rounded-lg text-center space-y-2">
          <h3 className="text-3xl font-semibold c-text-color-2">3</h3>
          <p className="text-[18px]">On Track</p>
        </div>
        <div className="w-70 p-8 shadow-sm rounded-lg text-center space-y-2">
          <h3 className="text-3xl font-semibold c-text-color-2">6</h3>
          <p className="text-[18px]">Need Attention</p>
        </div>
        <div className="w-70 p-8 shadow-sm rounded-lg text-center space-y-2">
          <h3 className="text-3xl font-semibold c-text-color-2">12</h3>
          <p className="text-[18px]">Interactions This Month</p>
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
