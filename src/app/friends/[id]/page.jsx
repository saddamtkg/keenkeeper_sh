const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      <h2>This is Firends Details page</h2>
    </div>
  );
};

export default FriendDetailsPage;
