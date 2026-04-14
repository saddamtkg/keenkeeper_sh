import Image from 'next/image';
import Link from 'next/link';

const statusConfig = {
  overdue: 'bg-[#ef4444]',
  'almost due': 'bg-[#efad44]',
  'on-track': 'bg-[#244d3f]',
};

const FriendCard = ({ friend }) => {
  return (
    <Link
      href={`/friends/${friend.id}`}
      className="shadow-sm rounded-lg flex flex-col justify-center items-center p-6 space-y-2 "
    >
      <Image
        className="rounded-full"
        src={friend.picture}
        alt={friend.name}
        width={100}
        height={100}
      />
      <h2 className="text-xl font-semibold">{friend.name}</h2>
      <p className="text-[12px] c-text-color-1">
        {friend.days_since_contact} ago
      </p>
      <ul className="flex gap-2">
        {friend.tags.map((tag, ind) => {
          return (
            <li className="c-tag" key={ind}>
              {tag}
            </li>
          );
        })}
      </ul>
      <button
        className={`btn mt-4 rounded-[100px] text-base-100 ${statusConfig[friend.status]}`}
      >
        {friend.status}
      </button>
    </Link>
  );
};

export default FriendCard;
