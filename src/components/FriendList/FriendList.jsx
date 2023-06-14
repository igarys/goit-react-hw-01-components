import css from './FriendList.module.css'
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {

    return (
        <ul className={css.friendList}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

const FriendListItem = ({ avatar, name, isOnline }) => {
     
    return (
      <li className={css.friendListItem}>
        <span
          className={css.status}
          style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        ></span>
        <img
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{name}</p>
      </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};