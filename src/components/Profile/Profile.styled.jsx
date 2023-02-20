import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 5px;
  width: 400px;
`;

export const ProfileSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 15px;
`;
