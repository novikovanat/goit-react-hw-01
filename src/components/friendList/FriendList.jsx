import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  const list = friends.map(({ id, ...friendInfo }) => {
    return (
      <li key={id}>
        <FriendListItem data={friendInfo} />
      </li>
    );
  });

  return <ul>{list}</ul>;
}
