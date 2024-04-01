import FriendListItem from './FriendListItem';
// import friendAmount from './friendAmount';

export default function FriendList({ friends }) {
  // const itemProps = friends.map(({ id,  }) => {
  //   console.log(friendInfo)
  //   console.log(id)
  //   return (
  //    <li key={id}>
  //       <FriendListItem data={friendInfo} />
  //       <h1>Hello world</h1>
  //   </li>
  //   )
  // })
  // ;
  // <ul>
  //   Кількість li залежить від кількості об'єктів в масиві
  //  {itemProps}
  // </ul>;
  const list = friends.map(({ id,...friendInfo}) => {
    return (
      <li key={id}>
        <FriendListItem data={friendInfo} />
      </li>
    );
  });

  return <ul>{list}</ul>
}
