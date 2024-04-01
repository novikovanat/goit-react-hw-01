import Profile from './profile/Profile';
import userData from '../components/profile/userData.json';
import FriendList from './friendList/FriendList';
import friends from './friendList/friendList.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactionHistory.json'


export default function App() {
  return (
    <div>
      <Profile data={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
}
