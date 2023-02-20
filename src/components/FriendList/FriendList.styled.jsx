import styled from 'styled-components';
export const FriendTable = styled.ul`
  list-style: none;
  margin-top: 15px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const FriendItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  align-items: center;
  border: 1px solid grey;
  border-radius: 5px;
  width: 400px;
`;
export const FriendField = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    if (!props.value) {
      return 'red';
	} else {
		return 'green';
	}
  }};
`;
