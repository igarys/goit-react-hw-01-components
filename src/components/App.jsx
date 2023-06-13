import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transaction/TransactionHistory';
import user from '../utils/json/user.json';
import data from '../utils/json/data.json';
import friends from '../utils/json/friends.json'
import transactions from '../utils/json/transactions.json'

export const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Profile
        username={ user.username }
        tag={ user.tag }
        location={ user.location }
        avatar={ user.avatar }
        stats={ user.stats }
      />

      <Statistics stats={ data } />

      <FriendList friends={friends} />
      
      <TransactionHistory items={ transactions } />
    </div>
  );
}

