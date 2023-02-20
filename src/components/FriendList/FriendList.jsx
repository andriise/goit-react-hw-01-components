import PropTypes from 'prop-types';
import { FriendTable, FriendItem, FriendField } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendTable>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <FriendField value={friend.isOnline}></FriendField>
          <img src={friend.avatar} alt={friend.name} width="48" />
          <p>{friend.name}</p>
        </FriendItem>
      ))}
    </FriendTable>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};
