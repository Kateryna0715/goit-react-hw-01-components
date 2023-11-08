import CSS from './index.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={CSS.item}>
      <span
        className={`${CSS.status} ${isOnline ? CSS.isOnline : CSS.isOffline}`}
      ></span>
      <img className={CSS.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={CSS.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
