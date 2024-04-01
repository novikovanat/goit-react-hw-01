import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css'

export default function FriendList({ friends }) {
  const list = friends.map(({ id, ...friendInfo }) => {
    return (
      <li key={id} className={css.item} >
        <FriendListItem data={friendInfo} />
      </li>
    );
  });

  return <ul className={css.list}>{list}</ul>;
}
