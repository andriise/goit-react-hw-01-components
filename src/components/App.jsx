import items from './Profile/user';
import statistics from './Statistics/data';
import friends from './FriendList/friends';
import data from './Transactions/evidence';
import '../../node_modules/modern-normalize/modern-normalize.css';
import { Profile } from './Profile/Profile';
import { Container } from './Container/Container';
import { FriendList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { Transactions } from './Transactions/Transactions.jsx';
export const App = () => {
  return (
    <Container>
      <Profile info={items} />
      <Statistics title="Upload stats" items={statistics} />
      <FriendList friends={friends} />
      <Transactions items={data} />
    </Container>
  );
};
