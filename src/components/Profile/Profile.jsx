import CSS from './index.module.css';

const Profile = user => {
  return (
    <div className={CSS.profile}>
      <div className={CSS.description}>
        <img
          src={user.avatar}
          alt="User avatar"
          className={CSS.avatar}
          width="100"
        />
        <p className={CSS.name}>{user.username}</p>
        <p className={CSS.tag}>@{user.tag}</p>
        <p className={CSS.location}>{user.location}</p>
      </div>

      <ul className={CSS.stats}>
        <li className={CSS.statsItem}>
          <span className={CSS.label}>Followers</span>
          <span className={CSS.quantity}>{user.stats.followers}</span>
        </li>
        <li className={CSS.statsItem}>
          <span className={CSS.label}>Views</span>
          <span className={CSS.quantity}>{user.stats.views}</span>
        </li>
        <li className={CSS.statsItem}>
          <span className={CSS.label}>Likes</span>
          <span className={CSS.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
