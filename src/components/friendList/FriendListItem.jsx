export default function FriendListitem({ data: { avatar, name, isOnline } }) {
  const status = isOnline ? 'Online' : 'Offline';
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{status}</p>
    </div>
  );
}
