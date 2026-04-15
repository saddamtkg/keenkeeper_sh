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
      className="shadow-sm rounded-lg flex flex-col justify-center items-center p-4 xs:p-6 space-y-2 "
    >
      <Image
        className="rounded-full w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 object-cover"
        src={friend.picture}
        alt={friend.name}
        width={100}
        height={100}
      />
      <h2 className="text-base xs:text-lg sm:text-xl font-semibold">
        {friend.name}
      </h2>
      <p className="text-[11px] xs:text-[12px] c-text-color-1">
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
        aria-label={`${friend.name}`}
      >
        {friend.status}
      </button>
    </Link>
  );
};

export default FriendCard;
