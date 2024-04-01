import css from './FriendListItem.module.css'
export default function FriendListitem({ data: { avatar, name, isOnline } }) {
  const status = isOnline ? 'online' : 'offline';
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.paragraph}>{name}</p>
      <p className={css[status]}>{status}</p>
    </div>
  );
}
