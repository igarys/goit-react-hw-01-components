import './FriendList.css'

export const FriendList = ({ friends }) => {

    return (
        <ul className="friend-list">
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

const FriendListItem = ({ avatar, name, isOnline }) => {
     
    return (
      <li className="friend-list-item">
            <span className="status"
            style={{backgroundColor: isOnline ? 'green' : 'red' }}></span>
        <img
          className="friend-avatar"
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{name}</p>
      </li>
    );
}