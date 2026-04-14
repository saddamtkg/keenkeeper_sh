"use client";

import QuickCheckIn from "@/components/friendDetailsPage/QuickCheckIn";
import useFriends from "@/hooks/useFriends";
import Image from "next/image";
import Link from "next/link";

import {
  RiArchiveLine,
  RiDeleteBin6Line,
  RiNotificationSnoozeLine,
} from "react-icons/ri";
import { toast } from "sonner";

const statusConfig = {
  overdue: "bg-[#ef4444]",
  "almost due": "bg-[#efad44]",
  "on-track": "bg-[#244d3f]",
};

const FriendDetailsClient = ({ id }) => {
  const { friends, addInteraction } = useFriends();

  const friend = friends.find((f) => f.id === parseInt(id, 10));

  if (!friend) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-red-500">Friend not found!</h2>
        <Link href="/" className="mt-4 text-blue-500 hover:underline">
          Go back home
        </Link>
      </div>
    );
  }

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = friend;

  const handleCheckIn = (type) => {
    addInteraction({
      friendId: friend.id,
      friendName: friend.name,
      type,
    });
    toast.success(`Checked in with ${friend.name} by ${type}.`);
  };

  return (
    <div className="my-container flex gap-6 py-20">
      <div className="flex flex-col gap-4">
        <div className="w-85 shadow-sm rounded-lg flex flex-col justify-center items-center p-6 space-y-2 ">
          <Image
            className="rounded-full"
            src={picture}
            alt={name}
            width={100}
            height={100}
          />
          <h2 className="text-xl font-semibold">{friend.name}</h2>
          <p className="text-[12px] c-text-color-1">{days_since_contact} ago</p>
          <button
            className={`btn rounded-[100px] text-base-100 ${statusConfig[friend.status]}`}
          >
            {status}
          </button>
          <ul className="flex gap-2 mt-4">
            {tags.map((tag, ind) => (
              <li className="c-tag" key={ind}>
                {tag}
              </li>
            ))}
          </ul>
          <p className="text-[12px] italic text-center">{bio}</p>
          <p className="body-text-color">{email}</p>
        </div>
        <div className="space-y-2">
          <button className="btn w-full">
            <RiNotificationSnoozeLine />
            Snooze 2 weeks
          </button>
          <button className="btn w-full">
            <RiArchiveLine />
            Archive
          </button>
          <button className="btn w-full text-red-500">
            <RiDeleteBin6Line />
            Delete
          </button>
        </div>
      </div>
      <div className="flex-1 w-[calc(100% - 340px)] space-y-6">
        <div className="flex justify-between gap-6">
          <div className="w-56.25 p-8 shadow-sm rounded-lg text-center space-y-2">
            <h3 className="text-3xl font-semibold c-text-color-2">
              {days_since_contact}
            </h3>
            <p className="text-[18px]">Days Since Contact</p>
          </div>
          <div className="w-56.25 p-8 shadow-sm rounded-lg text-center space-y-2">
            <h3 className="text-3xl font-semibold c-text-color-2">{goal}</h3>
            <p className="text-[18px]">Goal (Days)</p>
          </div>
          <div className="w-62 p-8 shadow-sm rounded-lg text-center space-y-2">
            <h3 className="text-3xl font-semibold c-text-color-2">
              {next_due_date}
            </h3>
            <p className="text-[18px]">Next Due</p>
          </div>
        </div>
        <div className="flex justify-between items-start shadow-sm p-6 rounded-lg">
          <div>
            <h3 className="text-xl font-medium c-text-color-2 mb-4">
              Relationship Goal
            </h3>
            <p>
              Connect every <strong>{goal} days</strong>
            </p>
          </div>
          <button className="btn">Edit</button>
        </div>
        <div className="p-6 shadow-sm rounded-lg">
          <QuickCheckIn friendName={name} onCheckIn={handleCheckIn} />
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsClient;
