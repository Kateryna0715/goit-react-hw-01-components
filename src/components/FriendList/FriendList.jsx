import CSS from './index.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={CSS.friendsList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
