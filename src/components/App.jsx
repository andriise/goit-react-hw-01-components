import items from './Profile/user';
import statistics from './Statistics/data';
import friends from './FriendList/friends';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
export const App = () => {
  return (
    <div>
      <Profile info={items} />
      <Statistics items={statistics} />
      <FriendList friends={friends} />
    </div>
  );
};
