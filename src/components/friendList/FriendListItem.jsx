export default function FriendListitem({data:{avatar, name, isOnline}}) {
  console.log(avatar)
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
}
