import FriendDetailsClient from '@/components/friendDetailsPage/FriendDetailsClient';

export default async function FriendDetailsPage({ params }) {
  const { id } = await params;
  return <FriendDetailsClient id={id} />;
}
